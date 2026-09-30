/**
 * CAIN Companion - Firebase Sync Module
 * Provides cloud sync for characters and enemies across devices.
 * Uses anonymous authentication - no login required.
 */

(function() {
'use strict';

// Firebase SDK URLs (v12.19.0)
var FIREBASE_APP_URL = 'https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js';
var FIREBASE_AUTH_URL = 'https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js';
var FIREBASE_FIRESTORE_URL = 'https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js';

// Firebase config
var firebaseConfig = {
  apiKey: "AIzaSyA4VO9a1L6qI8tCxp0vKlHKdFbi8z_eBz0",
  authDomain: "cain-companion.firebaseapp.com",
  projectId: "cain-companion",
  storageBucket: "cain-companion.firebasestorage.app",
  messagingSenderId: "198056095112",
  appId: "1:198056095112:web:177a522a57677333ebde3d"
};

// State
var firebaseApp = null;
var firebaseAuth = null;
var firebaseDb = null;
var currentUser = null;
var isInitialized = false;
var initPromise = null;
var syncListeners = [];

// Profile state
var PROFILE_KEY = 'cain_companion_profile';
var currentProfileId = null;
var profiles = [];

// Global profile: "Fundação CAIN" - contains ALL characters from ALL users
var GLOBAL_PROFILE_ID = 'cain-foundation';
var GLOBAL_PROFILE_NAME = 'Fundação CAIN';

/**
 * Dynamically import ES module from URL
 */
function importModule(url) {
  return new Promise(function(resolve, reject) {
    var script = document.createElement('script');
    script.type = 'module';
    script.textContent = 'import * as mod from "' + url + '"; window.__firebaseModule = mod;';
    script.onload = function() {
      setTimeout(function() {
        resolve(window.__firebaseModule);
        delete window.__firebaseModule;
      }, 50);
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

/**
 * Initialize Firebase - called once on app start
 */
async function initFirebase() {
  if (initPromise) return initPromise;
  
  initPromise = (async function() {
    try {
      // Dynamic imports for Firebase modules
      var { initializeApp } = await import(FIREBASE_APP_URL);
      var { getAuth, signInAnonymously, onAuthStateChanged } = await import(FIREBASE_AUTH_URL);
      var { getFirestore, collection, doc, getDocs, getDoc, setDoc, deleteDoc, onSnapshot, query, where, orderBy } = await import(FIREBASE_FIRESTORE_URL);
      
      // Initialize Firebase
      firebaseApp = initializeApp(firebaseConfig);
      firebaseAuth = getAuth(firebaseApp);
      firebaseDb = getFirestore(firebaseApp);
      
      // Store Firestore functions for later use
      window.__firestoreFns = { collection, doc, getDocs, getDoc, setDoc, deleteDoc, onSnapshot, query, where, orderBy };
      
      // Sign in anonymously
      await signInAnonymously(firebaseAuth);
      
      // Listen for auth state changes
      onAuthStateChanged(firebaseAuth, function(user) {
        currentUser = user;
        if (user) {
          console.log('[Firebase] Authenticated as:', user.uid);
          loadProfiles();
          loadGmProfiles();
        }
      });
      
      isInitialized = true;
      console.log('[Firebase] Initialized successfully');
      return true;
    } catch (error) {
      console.error('[Firebase] Initialization failed:', error);
      isInitialized = false;
      return false;
    }
  })();
  
  return initPromise;
}

/**
 * Get current user ID
 */
function getUserId() {
  return currentUser ? currentUser.uid : null;
}

/**
 * Check if Firebase is ready
 */
function isReady() {
  return isInitialized && currentUser !== null;
}

// ════════════════════════════════════════════════════════════════════
// PROFILES
// ════════════════════════════════════════════════════════════════════

/**
 * Load user profiles from Firestore
 */
async function loadProfiles() {
  if (!isReady()) return [];
  
  var { collection, getDocs, query, where, orderBy } = window.__firestoreFns;
  var userId = getUserId();
  
  try {
    var profilesRef = collection(firebaseDb, 'users', userId, 'profiles');
    var snapshot = await getDocs(profilesRef);
    
    profiles = [];
    snapshot.forEach(function(doc) {
      profiles.push({ id: doc.id, ...doc.data() });
    });
    
    // Load saved profile selection
    var savedProfileId = localStorage.getItem(PROFILE_KEY);
    if (savedProfileId && (savedProfileId === GLOBAL_PROFILE_ID || profiles.find(function(p) { return p.id === savedProfileId; }))) {
      currentProfileId = savedProfileId;
    } else {
      currentProfileId = GLOBAL_PROFILE_ID;
    }
    
    notifySyncListeners('profiles-loaded', profiles);
    return profiles;
  } catch (error) {
    console.error('[Firebase] Failed to load profiles:', error);
    return [];
  }
}

/**
 * Get all profiles (including global)
 */
function getProfiles() {
  var allProfiles = [
    { id: GLOBAL_PROFILE_ID, name: GLOBAL_PROFILE_NAME, isGlobal: true }
  ];
  return allProfiles.concat(profiles);
}

/**
 * Get current profile ID
 */
function getCurrentProfileId() {
  // Always read from localStorage to ensure consistency
  var savedProfileId = localStorage.getItem(PROFILE_KEY);
  if (savedProfileId) {
    currentProfileId = savedProfileId;
  }
  return currentProfileId || GLOBAL_PROFILE_ID;
}

/**
 * Set current profile
 */
function setCurrentProfile(profileId) {
  currentProfileId = profileId;
  localStorage.setItem(PROFILE_KEY, profileId);
  console.log('[Firebase] Profile changed to:', profileId);
  notifySyncListeners('profile-changed', profileId);
}

/**
 * Create a new profile
 */
async function createProfile(name) {
  if (!isReady()) return null;
  
  var { collection, doc, setDoc } = window.__firestoreFns;
  var userId = getUserId();
  
  var profileId = 'profile_' + Date.now();
  var profile = {
    name: name,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  try {
    var profileRef = doc(firebaseDb, 'users', userId, 'profiles', profileId);
    await setDoc(profileRef, profile);
    
    profile.id = profileId;
    profiles.push(profile);
    
    notifySyncListeners('profile-created', profile);
    return profile;
  } catch (error) {
    console.error('[Firebase] Failed to create profile:', error);
    return null;
  }
}

/**
 * Delete a profile (and optionally its characters)
 */
async function deleteProfile(profileId, deleteCharacters) {
  if (!isReady() || profileId === GLOBAL_PROFILE_ID) return false;
  
  var { doc, deleteDoc, collection, getDocs, query, where } = window.__firestoreFns;
  var userId = getUserId();
  
  try {
    // Optionally delete characters in this profile
    if (deleteCharacters) {
      var charsRef = collection(firebaseDb, 'characters');
      var q = query(charsRef, where('ownerId', '==', userId), where('profileId', '==', profileId));
      var snapshot = await getDocs(q);
      
      for (var charDoc of snapshot.docs) {
        await deleteDoc(charDoc.ref);
      }
    }
    
    // Delete profile
    var profileRef = doc(firebaseDb, 'users', userId, 'profiles', profileId);
    await deleteDoc(profileRef);
    
    profiles = profiles.filter(function(p) { return p.id !== profileId; });
    
    // Switch to global if current profile was deleted
    if (currentProfileId === profileId) {
      setCurrentProfile(GLOBAL_PROFILE_ID);
    }
    
    notifySyncListeners('profile-deleted', profileId);
    return true;
  } catch (error) {
    console.error('[Firebase] Failed to delete profile:', error);
    return false;
  }
}

// ════════════════════════════════════════════════════════════════════
// CHARACTERS
// ════════════════════════════════════════════════════════════════════

/**
 * Get all characters for current profile
 * - Global profile: ALL characters from ALL users
 * - User profile: Only characters in that profile owned by current user
 */
async function getCloudCharacters() {
  if (!isReady()) return [];
  
  var { collection, getDocs, query, where, orderBy } = window.__firestoreFns;
  var userId = getUserId();
  var profileId = getCurrentProfileId();
  
  try {
    var charsRef = collection(firebaseDb, 'characters');
    var q;
    
    if (profileId === GLOBAL_PROFILE_ID) {
      // Global: get ALL characters (no filter)
      q = query(charsRef, orderBy('updatedAt', 'desc'));
    } else {
      // User profile: get only this user's characters in this profile
      // Note: Firestore requires composite index for this query
      // If this fails, we fall back to client-side filtering
      try {
        q = query(charsRef, 
          where('ownerId', '==', userId), 
          where('profileId', '==', profileId)
        );
      } catch (indexError) {
        console.warn('[Firebase] Index not ready, using client-side filter');
        q = query(charsRef, where('ownerId', '==', userId));
      }
    }
    
    var snapshot = await getDocs(q);
    var characters = [];
    
    snapshot.forEach(function(doc) {
      var data = { id: doc.id, ...doc.data() };
      // Client-side filter for profile if needed
      if (profileId !== GLOBAL_PROFILE_ID && data.profileId !== profileId) {
        return; // skip characters not in this profile
      }
      characters.push(data);
    });
    
    // Sort by updatedAt descending (client-side)
    characters.sort(function(a, b) {
      return (b.updatedAt || '').localeCompare(a.updatedAt || '');
    });
    
    return characters;
  } catch (error) {
    console.error('[Firebase] Failed to get characters:', error);
    return [];
  }
}

/**
 * Get a single character by ID
 */
async function getCloudCharacter(charId) {
  if (!isReady()) return null;
  
  var { doc, getDoc } = window.__firestoreFns;
  
  try {
    var charRef = doc(firebaseDb, 'characters', charId);
    var snapshot = await getDoc(charRef);
    
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  } catch (error) {
    console.error('[Firebase] Failed to get character:', error);
    return null;
  }
}

/**
 * Save a character to cloud
 */
async function saveCloudCharacter(character) {
  if (!isReady()) return false;
  
  var { doc, setDoc } = window.__firestoreFns;
  var userId = getUserId();
  var profileId = getCurrentProfileId();
  
  console.log('[Firebase] Saving character to profile:', profileId, '(global:', GLOBAL_PROFILE_ID, ')');
  
  // Prepare character data with metadata
  var charData = Object.assign({}, character, {
    ownerId: userId,
    profileId: profileId === GLOBAL_PROFILE_ID ? null : profileId,
    updatedAt: new Date().toISOString(),
    syncedAt: new Date().toISOString()
  });
  
  console.log('[Firebase] Character profileId set to:', charData.profileId);
  
  // Ensure character has an ID
  if (!charData.id) {
    charData.id = 'char_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }
  
  try {
    var charRef = doc(firebaseDb, 'characters', charData.id);
    await setDoc(charRef, charData);
    
    notifySyncListeners('character-saved', charData);
    return true;
  } catch (error) {
    console.error('[Firebase] Failed to save character:', error);
    return false;
  }
}

/**
 * Delete a character from cloud
 */
async function deleteCloudCharacter(charId) {
  if (!isReady()) return false;
  
  var { doc, deleteDoc, getDoc } = window.__firestoreFns;
  var userId = getUserId();
  
  try {
    // Verify ownership before deleting
    var charRef = doc(firebaseDb, 'characters', charId);
    var snapshot = await getDoc(charRef);
    
    if (snapshot.exists()) {
      var charData = snapshot.data();
      if (charData.ownerId !== userId) {
        console.error('[Firebase] Cannot delete character owned by another user');
        return false;
      }
    }
    
    await deleteDoc(charRef);
    notifySyncListeners('character-deleted', charId);
    return true;
  } catch (error) {
    console.error('[Firebase] Failed to delete character:', error);
    return false;
  }
}

/**
 * Move character to a different profile
 */
async function moveCharacterToProfile(charId, newProfileId) {
  if (!isReady()) return false;
  
  var { doc, getDoc, setDoc } = window.__firestoreFns;
  var userId = getUserId();
  
  try {
    var charRef = doc(firebaseDb, 'characters', charId);
    var snapshot = await getDoc(charRef);
    
    if (!snapshot.exists()) return false;
    
    var charData = snapshot.data();
    if (charData.ownerId !== userId) {
      console.error('[Firebase] Cannot move character owned by another user');
      return false;
    }
    
    charData.profileId = newProfileId === GLOBAL_PROFILE_ID ? null : newProfileId;
    charData.updatedAt = new Date().toISOString();
    
    await setDoc(charRef, charData);
    notifySyncListeners('character-moved', { charId: charId, newProfileId: newProfileId });
    return true;
  } catch (error) {
    console.error('[Firebase] Failed to move character:', error);
    return false;
  }
}

// ════════════════════════════════════════════════════════════════════
// GM PROFILES (for enemies/bestiary)
// ════════════════════════════════════════════════════════════════════

var GM_PROFILE_KEY = 'cain_companion_gm_profile';
var currentGmProfileId = null;
var gmProfiles = [];

/**
 * Load GM profiles from Firestore
 */
async function loadGmProfiles() {
  if (!isReady()) return [];
  
  var { collection, getDocs } = window.__firestoreFns;
  var userId = getUserId();
  
  try {
    var profilesRef = collection(firebaseDb, 'users', userId, 'gmProfiles');
    var snapshot = await getDocs(profilesRef);
    
    gmProfiles = [];
    snapshot.forEach(function(doc) {
      gmProfiles.push({ id: doc.id, ...doc.data() });
    });
    
    // Load saved GM profile selection
    var savedProfileId = localStorage.getItem(GM_PROFILE_KEY);
    if (savedProfileId && gmProfiles.find(function(p) { return p.id === savedProfileId; })) {
      currentGmProfileId = savedProfileId;
    } else if (gmProfiles.length > 0) {
      currentGmProfileId = gmProfiles[0].id;
      localStorage.setItem(GM_PROFILE_KEY, currentGmProfileId);
    } else {
      currentGmProfileId = null;
    }
    
    notifySyncListeners('gm-profiles-loaded', gmProfiles);
    return gmProfiles;
  } catch (error) {
    console.error('[Firebase] Failed to load GM profiles:', error);
    return [];
  }
}

/**
 * Get all GM profiles
 */
function getGmProfiles() {
  return gmProfiles.slice();
}

/**
 * Get current GM profile ID
 */
function getCurrentGmProfileId() {
  var savedProfileId = localStorage.getItem(GM_PROFILE_KEY);
  if (savedProfileId) {
    currentGmProfileId = savedProfileId;
  }
  return currentGmProfileId;
}

/**
 * Set current GM profile
 */
function setCurrentGmProfile(profileId) {
  currentGmProfileId = profileId;
  localStorage.setItem(GM_PROFILE_KEY, profileId);
  console.log('[Firebase] GM Profile changed to:', profileId);
  notifySyncListeners('gm-profile-changed', profileId);
}

/**
 * Create a new GM profile
 */
async function createGmProfile(name) {
  if (!isReady()) return null;
  
  var { collection, doc, setDoc } = window.__firestoreFns;
  var userId = getUserId();
  
  var profileId = 'gm_profile_' + Date.now();
  var profile = {
    name: name,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  try {
    var profileRef = doc(firebaseDb, 'users', userId, 'gmProfiles', profileId);
    await setDoc(profileRef, profile);
    
    profile.id = profileId;
    gmProfiles.push(profile);
    
    notifySyncListeners('gm-profile-created', profile);
    return profile;
  } catch (error) {
    console.error('[Firebase] Failed to create GM profile:', error);
    return null;
  }
}

/**
 * Delete a GM profile (and optionally its enemies)
 */
async function deleteGmProfile(profileId, deleteEnemies) {
  if (!isReady()) return false;
  
  var { doc, deleteDoc, collection, getDocs, query, where } = window.__firestoreFns;
  var userId = getUserId();
  
  try {
    // Delete or orphan enemies in this profile
    var enemiesRef = collection(firebaseDb, 'enemies');
    var q = query(enemiesRef, where('ownerId', '==', userId), where('gmProfileId', '==', profileId));
    var snapshot = await getDocs(q);
    
    for (var enemyDoc of snapshot.docs) {
      if (deleteEnemies) {
        await deleteDoc(enemyDoc.ref);
      } else {
        // Just remove the profile association (orphan)
        var enemyData = enemyDoc.data();
        enemyData.gmProfileId = null;
        enemyData.updatedAt = new Date().toISOString();
        await window.__firestoreFns.setDoc(enemyDoc.ref, enemyData);
      }
    }
    
    // Delete profile
    var profileRef = doc(firebaseDb, 'users', userId, 'gmProfiles', profileId);
    await deleteDoc(profileRef);
    
    gmProfiles = gmProfiles.filter(function(p) { return p.id !== profileId; });
    
    // Switch to another profile if current was deleted
    if (currentGmProfileId === profileId) {
      if (gmProfiles.length > 0) {
        setCurrentGmProfile(gmProfiles[0].id);
      } else {
        currentGmProfileId = null;
        localStorage.removeItem(GM_PROFILE_KEY);
      }
    }
    
    notifySyncListeners('gm-profile-deleted', profileId);
    return true;
  } catch (error) {
    console.error('[Firebase] Failed to delete GM profile:', error);
    return false;
  }
}

// ════════════════════════════════════════════════════════════════════
// ENEMIES (Bestiário)
// ════════════════════════════════════════════════════════════════════

/**
 * Get all enemies for current GM profile
 */
async function getCloudEnemies() {
  if (!isReady()) return [];
  
  var { collection, getDocs, query, where } = window.__firestoreFns;
  var userId = getUserId();
  var gmProfileId = getCurrentGmProfileId();
  
  // If no GM profile selected, return empty
  if (!gmProfileId) return [];
  
  try {
    var enemiesRef = collection(firebaseDb, 'enemies');
    var q = query(enemiesRef, 
      where('ownerId', '==', userId),
      where('gmProfileId', '==', gmProfileId)
    );
    var snapshot = await getDocs(q);
    
    var enemies = [];
    snapshot.forEach(function(doc) {
      enemies.push({ id: doc.id, ...doc.data() });
    });
    
    // Sort by updatedAt descending (client-side)
    enemies.sort(function(a, b) {
      return (b.updatedAt || '').localeCompare(a.updatedAt || '');
    });
    
    return enemies;
  } catch (error) {
    console.error('[Firebase] Failed to get enemies:', error);
    return [];
  }
}

/**
 * Save an enemy to cloud
 */
async function saveCloudEnemy(enemy) {
  if (!isReady()) return false;
  
  var { doc, setDoc } = window.__firestoreFns;
  var userId = getUserId();
  var gmProfileId = getCurrentGmProfileId();
  
  // Must have a GM profile to save enemies
  if (!gmProfileId) {
    console.error('[Firebase] No GM profile selected, cannot save enemy');
    return false;
  }
  
  var enemyData = Object.assign({}, enemy, {
    ownerId: userId,
    gmProfileId: gmProfileId,
    updatedAt: new Date().toISOString(),
    syncedAt: new Date().toISOString()
  });
  
  if (!enemyData.id) {
    enemyData.id = 'enemy_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }
  
  try {
    var enemyRef = doc(firebaseDb, 'enemies', enemyData.id);
    await setDoc(enemyRef, enemyData);
    
    notifySyncListeners('enemy-saved', enemyData);
    return true;
  } catch (error) {
    console.error('[Firebase] Failed to save enemy:', error);
    return false;
  }
}

/**
 * Delete an enemy from cloud
 */
async function deleteCloudEnemy(enemyId) {
  if (!isReady()) return false;
  
  var { doc, deleteDoc, getDoc } = window.__firestoreFns;
  var userId = getUserId();
  
  try {
    var enemyRef = doc(firebaseDb, 'enemies', enemyId);
    var snapshot = await getDoc(enemyRef);
    
    if (snapshot.exists()) {
      var enemyData = snapshot.data();
      if (enemyData.ownerId !== userId) {
        console.error('[Firebase] Cannot delete enemy owned by another user');
        return false;
      }
    }
    
    await deleteDoc(enemyRef);
    notifySyncListeners('enemy-deleted', enemyId);
    return true;
  } catch (error) {
    console.error('[Firebase] Failed to delete enemy:', error);
    return false;
  }
}

// ════════════════════════════════════════════════════════════════════
// MIGRATION: localStorage -> Cloud
// ════════════════════════════════════════════════════════════════════

/**
 * Migrate local characters to cloud
 */
async function migrateLocalCharacters() {
  if (!isReady()) return { migrated: 0, failed: 0 };
  
  var STORAGE_KEY = 'cain_companion_characters';
  var migrated = 0;
  var failed = 0;
  
  try {
    var localData = localStorage.getItem(STORAGE_KEY);
    if (!localData) return { migrated: 0, failed: 0 };
    
    var localChars = JSON.parse(localData);
    if (!Array.isArray(localChars) || localChars.length === 0) {
      return { migrated: 0, failed: 0 };
    }
    
    for (var char of localChars) {
      var success = await saveCloudCharacter(char);
      if (success) {
        migrated++;
      } else {
        failed++;
      }
    }
    
    // Clear local storage after successful migration
    if (migrated > 0 && failed === 0) {
      localStorage.setItem(STORAGE_KEY + '_backup', localData);
      localStorage.removeItem(STORAGE_KEY);
    }
    
    return { migrated: migrated, failed: failed };
  } catch (error) {
    console.error('[Firebase] Migration failed:', error);
    return { migrated: migrated, failed: failed };
  }
}

/**
 * Migrate local enemies to cloud
 */
async function migrateLocalEnemies() {
  if (!isReady()) return { migrated: 0, failed: 0 };
  
  var STORAGE_KEY = 'cain_companion_enemies';
  var migrated = 0;
  var failed = 0;
  
  try {
    var localData = localStorage.getItem(STORAGE_KEY);
    if (!localData) return { migrated: 0, failed: 0 };
    
    var localEnemies = JSON.parse(localData);
    if (!Array.isArray(localEnemies) || localEnemies.length === 0) {
      return { migrated: 0, failed: 0 };
    }
    
    for (var enemy of localEnemies) {
      var success = await saveCloudEnemy(enemy);
      if (success) {
        migrated++;
      } else {
        failed++;
      }
    }
    
    // Clear local storage after successful migration
    if (migrated > 0 && failed === 0) {
      localStorage.setItem(STORAGE_KEY + '_backup', localData);
      localStorage.removeItem(STORAGE_KEY);
    }
    
    return { migrated: migrated, failed: failed };
  } catch (error) {
    console.error('[Firebase] Enemy migration failed:', error);
    return { migrated: migrated, failed: failed };
  }
}

// ════════════════════════════════════════════════════════════════════
// SYNC LISTENERS
// ════════════════════════════════════════════════════════════════════

/**
 * Add a listener for sync events
 */
function addSyncListener(callback) {
  syncListeners.push(callback);
}

/**
 * Remove a sync listener
 */
function removeSyncListener(callback) {
  syncListeners = syncListeners.filter(function(l) { return l !== callback; });
}

/**
 * Notify all listeners of a sync event
 */
function notifySyncListeners(event, data) {
  syncListeners.forEach(function(listener) {
    try {
      listener(event, data);
    } catch (e) {
      console.error('[Firebase] Listener error:', e);
    }
  });
}

// ════════════════════════════════════════════════════════════════════
// EXPOSE GLOBAL API
// ════════════════════════════════════════════════════════════════════

window.CainFirebase = {
  // Initialization
  init: initFirebase,
  isReady: isReady,
  getUserId: getUserId,
  
  // Character Profiles
  getProfiles: getProfiles,
  getCurrentProfileId: getCurrentProfileId,
  setCurrentProfile: setCurrentProfile,
  createProfile: createProfile,
  deleteProfile: deleteProfile,
  loadProfiles: loadProfiles,
  GLOBAL_PROFILE_ID: GLOBAL_PROFILE_ID,
  GLOBAL_PROFILE_NAME: GLOBAL_PROFILE_NAME,
  
  // GM Profiles (for enemies)
  getGmProfiles: getGmProfiles,
  getCurrentGmProfileId: getCurrentGmProfileId,
  setCurrentGmProfile: setCurrentGmProfile,
  createGmProfile: createGmProfile,
  deleteGmProfile: deleteGmProfile,
  loadGmProfiles: loadGmProfiles,
  
  // Characters
  getCharacters: getCloudCharacters,
  getCharacter: getCloudCharacter,
  saveCharacter: saveCloudCharacter,
  deleteCharacter: deleteCloudCharacter,
  moveCharacterToProfile: moveCharacterToProfile,
  
  // Enemies
  getEnemies: getCloudEnemies,
  saveEnemy: saveCloudEnemy,
  deleteEnemy: deleteCloudEnemy,
  
  // Migration
  migrateLocalCharacters: migrateLocalCharacters,
  migrateLocalEnemies: migrateLocalEnemies,
  
  // Listeners
  addSyncListener: addSyncListener,
  removeSyncListener: removeSyncListener
};

console.log('[CainFirebase] Module loaded');

})();
