/**
 * CAIN Companion - Storage Module
 * Handles localStorage persistence and JSON import/export.
 */

const STORAGE_KEY = 'cain_companion_characters';

/**
 * Get all saved characters from localStorage.
 * @returns {Array} Array of character objects
 */
export function getAllCharacters() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to load characters from storage:', e);
    return [];
  }
}

/**
 * Get a single character by ID.
 * @param {string} id 
 * @returns {object|null}
 */
export function getCharacter(id) {
  const characters = getAllCharacters();
  return characters.find(c => c.id === id) || null;
}

/**
 * Save a character (create or update).
 * @param {object} character 
 */
export function saveCharacter(character) {
  const characters = getAllCharacters();
  const index = characters.findIndex(c => c.id === character.id);

  character.updatedAt = new Date().toISOString();

  if (index >= 0) {
    characters[index] = character;
  } else {
    characters.push(character);
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
  } catch (e) {
    console.error('Failed to save character:', e);
    throw new Error('Failed to save. Storage may be full.');
  }
}

/**
 * Delete a character by ID.
 * @param {string} id 
 */
export function deleteCharacter(id) {
  const characters = getAllCharacters().filter(c => c.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
}

/**
 * Export a character as a JSON file download.
 * @param {object} character 
 */
export function exportCharacter(character) {
  const dataStr = JSON.stringify(character, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `${character.name || 'exorcist'}_cain.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Export all characters as a single JSON file.
 */
export function exportAllCharacters() {
  const characters = getAllCharacters();
  const dataStr = JSON.stringify(characters, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'cain_all_characters.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Import a character from a JSON file.
 * Returns a promise that resolves with the imported character.
 * @returns {Promise<object>}
 */
export function importCharacter() {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';

    input.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) {
        reject(new Error('No file selected'));
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target.result);

          // Handle both single character and array of characters
          if (Array.isArray(data)) {
            // Import multiple characters
            data.forEach(char => {
              if (char.id && char.name !== undefined) {
                saveCharacter(char);
              }
            });
            resolve(data);
          } else if (data.id && data.name !== undefined) {
            saveCharacter(data);
            resolve(data);
          } else {
            reject(new Error('Invalid character file format'));
          }
        } catch (err) {
          reject(new Error('Failed to parse JSON file'));
        }
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsText(file);
    });

    input.click();
  });
}
