/**
 * Character Edit Page - Modify an existing character's state.
 * Focuses on in-play state changes: stress, injuries, psyche bursts, sin, etc.
 */

import { getCharacter, saveCharacter } from '../storage.js';
import { getPsycheValue } from '../character-model.js';
import { navigate } from '../router.js';
import { SKILLS } from '../data/skills.js';
import { AGENDAS } from '../data/agendas.js';
import { BLASPHEMIES } from '../data/blasphemies.js';

let char = null;

export function renderEdit(characterId) {
  const app = document.getElementById('app');
  char = getCharacter(characterId);

  if (!char) {
    app.innerHTML = `
      <div class="page">
        <p>Character not found.</p>
        <button class="btn btn-primary" id="btn-home">← Home</button>
      </div>
    `;
    document.getElementById('btn-home').addEventListener('click', () => navigate('home'));
    return;
  }

  renderEditForm(app);
}

function renderEditForm(app) {
  const psyche = getPsycheValue(char.category);

  app.innerHTML = `
    <div class="page edit-page">
      <header class="page-header">
        <button class="btn btn-back" id="btn-back">← Back</button>
        <h2>Edit: ${char.name || 'Exorcist'}</h2>
      </header>

      <form id="edit-form" class="edit-form">
        <!-- Identity -->
        <section class="sheet-section">
          <h3>Identity</h3>
          <div class="form-row">
            <div class="form-group">
              <label for="e-name">Name</label>
              <input type="text" id="e-name" value="${char.name}">
            </div>
            <div class="form-group">
              <label for="e-id">Exorcist ID</label>
              <input type="text" id="e-id" value="${char.exorcistId}">
            </div>
          </div>
          <div class="form-group">
            <label for="e-look">Look</label>
            <textarea id="e-look" rows="2">${char.look}</textarea>
          </div>
        </section>

        <!-- Progression -->
        <section class="sheet-section">
          <h3>Progression</h3>
          <div class="form-row">
            <div class="form-group">
              <label for="e-cat">Category</label>
              <input type="number" id="e-cat" min="1" max="5" value="${char.category}">
            </div>
            <div class="form-group">
              <label>Psyche (auto)</label>
              <input type="text" value="${psyche}" disabled>
            </div>
            <div class="form-group">
              <label for="e-missions">Missions Survived</label>
              <input type="number" id="e-missions" min="0" value="${char.missionsSurvived}">
            </div>
            <div class="form-group">
              <label for="e-scrip">Scrip</label>
              <input type="number" id="e-scrip" min="0" value="${char.scrip}">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="e-xp">Experience (0-4)</label>
              <input type="number" id="e-xp" min="0" max="4" value="${char.experience}">
            </div>
            <div class="form-group">
              <label for="e-advances">Advances</label>
              <input type="number" id="e-advances" min="0" value="${char.advances}">
            </div>
          </div>
        </section>

        <!-- Combat State -->
        <section class="sheet-section">
          <h3>Combat State</h3>
          <div class="form-row">
            <div class="form-group">
              <label for="e-stress">Stress</label>
              <input type="number" id="e-stress" min="0" max="6" value="${char.stress}">
            </div>
            <div class="form-group">
              <label for="e-injuries">Injuries</label>
              <input type="number" id="e-injuries" min="0" max="3" value="${char.injuries}">
            </div>
            <div class="form-group">
              <label for="e-pbursts">Psyche Bursts</label>
              <input type="number" id="e-pbursts" min="0" value="${char.psycheBursts}">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="e-pathos">Pathos (0-3)</label>
              <input type="number" id="e-pathos" min="0" max="3" value="${char.pathos}">
            </div>
            <div class="form-group">
              <label for="e-sin">Sin</label>
              <input type="number" id="e-sin" min="0" value="${char.sin}">
            </div>
            <div class="form-group">
              <label for="e-sincap">Sin Overflow Cap</label>
              <input type="number" id="e-sincap" min="1" value="${char.sinOverflowCap}">
            </div>
          </div>
        </section>

        <!-- Skills -->
        <section class="sheet-section">
          <h3>Skills</h3>
          <div class="skills-edit-grid">
            ${SKILLS.map(s => `
              <div class="form-group-inline">
                <label>${s.name}</label>
                <input type="number" class="skill-input" data-skill="${s.id}" min="0" max="3" value="${char.skills[s.id]}">
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Hooks -->
        <section class="sheet-section">
          <h3>Hooks</h3>
          <div id="hooks-editor">
            ${char.hooks.map((h, i) => `
              <div class="hook-edit-row" data-index="${i}">
                <input type="text" class="hook-name" value="${h.name}" placeholder="Hook name">
                <input type="number" class="hook-slashes" min="0" max="3" value="${h.slashes}">
                <button type="button" class="btn btn-tiny btn-danger btn-remove-hook">×</button>
              </div>
            `).join('')}
          </div>
          <button type="button" class="btn btn-small" id="btn-add-hook">+ Add Hook</button>
        </section>

        <!-- Afflictions -->
        <section class="sheet-section">
          <h3>Afflictions</h3>
          <div id="afflictions-editor">
            ${char.afflictions.map((a, i) => `
              <div class="affliction-edit-row" data-index="${i}">
                <input type="text" class="aff-name" value="${a.name}" placeholder="Affliction name">
                <input type="text" class="aff-desc" value="${a.description}" placeholder="Description">
                <button type="button" class="btn btn-tiny btn-danger btn-remove-aff">×</button>
              </div>
            `).join('')}
          </div>
          <button type="button" class="btn btn-small" id="btn-add-aff">+ Add Affliction</button>
        </section>

        <!-- Weapons -->
        <section class="sheet-section">
          <h3>Weapons</h3>
          <div class="form-row">
            <div class="form-group">
              <label for="e-firearm-name">Firearm Name</label>
              <input type="text" id="e-firearm-name" value="${char.weapons.firearm.name}">
            </div>
            <div class="form-group">
              <label for="e-firearm-cat">Firearm CAT</label>
              <input type="number" id="e-firearm-cat" min="0" max="3" value="${char.weapons.firearm.category}">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="e-melee-name">Melee Name</label>
              <input type="text" id="e-melee-name" value="${char.weapons.melee.name}">
            </div>
            <div class="form-group">
              <label for="e-melee-cat">Melee CAT</label>
              <input type="number" id="e-melee-cat" min="0" max="3" value="${char.weapons.melee.category}">
            </div>
          </div>
        </section>

        <!-- Notes -->
        <section class="sheet-section">
          <h3>Notes</h3>
          <textarea id="e-notes" rows="4">${char.notes || ''}</textarea>
        </section>

        <div class="form-actions">
          <button type="submit" class="btn btn-primary">Save Changes</button>
          <button type="button" class="btn btn-secondary" id="btn-cancel">Cancel</button>
        </div>
      </form>
    </div>
  `;

  // Bind events
  document.getElementById('btn-back').addEventListener('click', () => navigate(`view/${char.id}`));
  document.getElementById('btn-cancel').addEventListener('click', () => navigate(`view/${char.id}`));

  // Add hook
  document.getElementById('btn-add-hook').addEventListener('click', () => {
    char.hooks.push({ name: '', slashes: 0 });
    renderEditForm(app);
  });

  // Remove hook
  app.querySelectorAll('.btn-remove-hook').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.closest('.hook-edit-row').dataset.index);
      char.hooks.splice(index, 1);
      renderEditForm(app);
    });
  });

  // Add affliction
  document.getElementById('btn-add-aff').addEventListener('click', () => {
    char.afflictions.push({ name: '', description: '' });
    renderEditForm(app);
  });

  // Remove affliction
  app.querySelectorAll('.btn-remove-aff').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.closest('.affliction-edit-row').dataset.index);
      char.afflictions.splice(index, 1);
      renderEditForm(app);
    });
  });

  // Form submit
  document.getElementById('edit-form').addEventListener('submit', (e) => {
    e.preventDefault();
    collectFormData();
    saveCharacter(char);
    navigate(`view/${char.id}`);
  });
}

function collectFormData() {
  char.name = document.getElementById('e-name').value.trim();
  char.exorcistId = document.getElementById('e-id').value.trim();
  char.look = document.getElementById('e-look').value.trim();

  char.category = parseInt(document.getElementById('e-cat').value) || 1;
  char.missionsSurvived = parseInt(document.getElementById('e-missions').value) || 0;
  char.scrip = parseInt(document.getElementById('e-scrip').value) || 0;
  char.experience = parseInt(document.getElementById('e-xp').value) || 0;
  char.advances = parseInt(document.getElementById('e-advances').value) || 0;

  char.stress = parseInt(document.getElementById('e-stress').value) || 0;
  char.injuries = parseInt(document.getElementById('e-injuries').value) || 0;
  char.psycheBursts = parseInt(document.getElementById('e-pbursts').value) || 0;
  char.pathos = parseInt(document.getElementById('e-pathos').value) || 0;
  char.sin = parseInt(document.getElementById('e-sin').value) || 0;
  char.sinOverflowCap = parseInt(document.getElementById('e-sincap').value) || 10;

  // Skills
  document.querySelectorAll('.skill-input').forEach(input => {
    char.skills[input.dataset.skill] = parseInt(input.value) || 0;
  });

  // Hooks
  char.hooks = [];
  document.querySelectorAll('.hook-edit-row').forEach(row => {
    const name = row.querySelector('.hook-name').value.trim();
    const slashes = parseInt(row.querySelector('.hook-slashes').value) || 0;
    if (name) char.hooks.push({ name, slashes });
  });

  // Afflictions
  char.afflictions = [];
  document.querySelectorAll('.affliction-edit-row').forEach(row => {
    const name = row.querySelector('.aff-name').value.trim();
    const description = row.querySelector('.aff-desc').value.trim();
    if (name) char.afflictions.push({ name, description });
  });

  // Weapons
  char.weapons.firearm.name = document.getElementById('e-firearm-name').value.trim();
  char.weapons.firearm.category = parseInt(document.getElementById('e-firearm-cat').value) || 0;
  char.weapons.melee.name = document.getElementById('e-melee-name').value.trim();
  char.weapons.melee.category = parseInt(document.getElementById('e-melee-cat').value) || 0;

  // Notes
  char.notes = document.getElementById('e-notes').value.trim();
}
