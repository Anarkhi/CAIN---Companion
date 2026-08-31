/**
 * Home Page - Shows list of saved characters with actions.
 */

import { getAllCharacters, deleteCharacter, exportCharacter, importCharacter, exportAllCharacters } from '../storage.js';
import { navigate } from '../router.js';

export function renderHome() {
  const app = document.getElementById('app');
  const characters = getAllCharacters();

  app.innerHTML = `
    <div class="page home-page">
      <header class="page-header">
        <h1 class="title">CAIN <span class="subtitle">Companion</span></h1>
        <p class="tagline">Wipe out the stain.</p>
      </header>

      <div class="actions-bar">
        <button class="btn btn-primary" id="btn-create">
          + New Exorcist
        </button>
        <button class="btn btn-secondary" id="btn-import">
          Import Character
        </button>
        ${characters.length > 0 ? `
          <button class="btn btn-secondary" id="btn-export-all">
            Export All
          </button>
        ` : ''}
      </div>

      ${characters.length === 0 ? `
        <div class="empty-state">
          <p>No exorcists on file.</p>
          <p class="muted">Create a new character or import one from a JSON file.</p>
        </div>
      ` : `
        <div class="character-list">
          ${characters.map(char => renderCharacterCard(char)).join('')}
        </div>
      `}
    </div>
  `;

  // Bind events
  document.getElementById('btn-create').addEventListener('click', () => navigate('create'));
  document.getElementById('btn-import')?.addEventListener('click', handleImport);
  document.getElementById('btn-export-all')?.addEventListener('click', () => exportAllCharacters());

  // Card actions
  app.querySelectorAll('.char-card').forEach(card => {
    const id = card.dataset.id;

    card.querySelector('.btn-view')?.addEventListener('click', (e) => {
      e.stopPropagation();
      navigate(`view/${id}`);
    });

    card.querySelector('.btn-edit')?.addEventListener('click', (e) => {
      e.stopPropagation();
      navigate(`edit/${id}`);
    });

    card.querySelector('.btn-export')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const char = getAllCharacters().find(c => c.id === id);
      if (char) exportCharacter(char);
    });

    card.querySelector('.btn-delete')?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm(`Delete ${characters.find(c => c.id === id)?.name || 'this exorcist'}? This cannot be undone.`)) {
        deleteCharacter(id);
        renderHome();
      }
    });

    // Click card to view
    card.addEventListener('click', () => navigate(`view/${id}`));
  });
}

function renderCharacterCard(char) {
  const agendaName = char.agenda?.id ? capitalize(char.agenda.id) : 'No Agenda';
  const blasphemyNames = char.blasphemies?.map(b => capitalize(b.id)).join(', ') || 'None';

  return `
    <div class="char-card" data-id="${char.id}">
      <div class="char-card-header">
        <h3 class="char-name">${char.name || 'Unnamed Exorcist'}</h3>
        <span class="char-cat">CAT ${char.category || 1}</span>
      </div>
      <div class="char-card-body">
        <p><span class="label">Agenda:</span> ${agendaName}</p>
        <p><span class="label">Blasphemy:</span> ${blasphemyNames}</p>
        <p><span class="label">Missions Survived:</span> ${char.missionsSurvived || 0}</p>
      </div>
      <div class="char-card-actions">
        <button class="btn btn-small btn-view">View</button>
        <button class="btn btn-small btn-edit">Edit</button>
        <button class="btn btn-small btn-export">Export</button>
        <button class="btn btn-small btn-danger btn-delete">Delete</button>
      </div>
    </div>
  `;
}

async function handleImport() {
  try {
    await importCharacter();
    renderHome();
  } catch (e) {
    alert(e.message || 'Import failed.');
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
