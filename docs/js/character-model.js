/**
 * CAIN Character Data Model
 * Defines the shape of a character and provides factory functions.
 */

/**
 * Creates a new blank character with default values.
 * @returns {object} A new character object
 */
export function createBlankCharacter() {
  return {
    id: generateId(),
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),

    // Identity
    name: '',
    exorcistId: '',
    look: '',
    sinSeedLocation: 'brain', // 'brain' or 'heart'

    // Questions (answered at creation, given to Admin)
    questions: {
      manifestation: '',    // How did you first manifest your powers?
      hidden: '',           // What do you hide in the deepest parts of you?
      hand: '',             // Is your hand your hand?
      mother: ''            // Do you remember the face of your mother?
    },

    // Skills (0-3 each)
    skills: {
      force: 1,
      conditioning: 1,
      coordination: 1,
      covert: 1,
      interfacing: 1,
      surveillance: 1,
      investigation: 1,
      authority: 1,
      negotiation: 1,
      connection: 1
    },

    // Progression
    category: 1,           // 1-5
    missionsSurvived: 0,
    experience: 0,         // 0-4 (cash out at 4 for advance)
    advances: 0,
    scrip: 0,
    skillImprovements: 0,  // track up to 6 total skill improvements

    // Agenda
    agenda: {
      id: '',
      abilities: []        // Array of ability IDs
    },

    // Blasphemies
    blasphemies: [
      // { id: 'tension', powers: ['tension_aegis', 'tension_fortress'] }
    ],

    // Combat State (tracked during play)
    stress: 0,
    maxStress: 6,
    injuries: 0,
    psycheBursts: 3,
    maxPsycheBursts: 3,
    pathos: 0,
    sin: 0,
    sinOverflowCap: 10,    // reduced by extra blasphemies
    sinMarks: [],          // Array of { location, abilities: [] }

    // Hooks (active during a hunt)
    hooks: [],             // Array of { name, slashes: 0 }

    // Afflictions (active during a hunt)
    afflictions: [],       // Array of { name, description }

    // Kit
    kitPoints: 5,
    maxKitPoints: 5,
    kitItems: [],          // Array of purchased kit items { id, name, cost }

    // Weapons
    weapons: {
      firearm: { name: 'Service Firearm', category: 0 },
      melee: { name: 'Service Melee', category: 0 }
    },

    // Notes (freeform)
    notes: '',

    // Custom content flag
    customContent: []      // Array of { type, data } for user-added content
  };
}

/**
 * Validates skill allocation rules:
 * - All skills start at 1
 * - Increase two skills to 2
 * - Reduce three skills to 0
 * - Result: two 2s, five 1s, three 0s
 * @param {object} skills - The skills object
 * @returns {{ valid: boolean, message: string }}
 */
export function validateSkillAllocation(skills) {
  const values = Object.values(skills);
  const zeros = values.filter(v => v === 0).length;
  const ones = values.filter(v => v === 1).length;
  const twos = values.filter(v => v === 2).length;
  const others = values.filter(v => v < 0 || v > 2).length;

  if (others > 0) {
    return { valid: false, message: 'Skills must be between 0 and 2 at creation.' };
  }
  if (zeros !== 3) {
    return { valid: false, message: `You must have exactly 3 skills at 0 (currently ${zeros}).` };
  }
  if (twos !== 2) {
    return { valid: false, message: `You must have exactly 2 skills at 2 (currently ${twos}).` };
  }
  if (ones !== 5) {
    return { valid: false, message: `You must have exactly 5 skills at 1 (currently ${ones}).` };
  }

  return { valid: true, message: 'Skills are valid.' };
}

/**
 * Gets the Psyche skill value based on category.
 * @param {number} category 
 * @returns {number}
 */
export function getPsycheValue(category) {
  return Math.ceil(category / 2);
}

/**
 * Generates a unique ID
 * @returns {string}
 */
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}
