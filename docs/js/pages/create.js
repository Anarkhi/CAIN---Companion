/**
 * Character Creation Page - Multi-step wizard.
 * Steps: Details → Skills → Agenda → Blasphemy → Review
 */

import { createBlankCharacter, validateSkillAllocation } from '../character-model.js';
import { saveCharacter } from '../storage.js';
import { navigate } from '../router.js';
import { SKILLS } from '../data/skills.js';
import { AGENDAS } from '../data/agendas.js';
import { BLASPHEMIES } from '../data/blasphemies.js';

let character = null;
let currentStep = 0;

const STEPS = ['details', 'skills', 'agenda', 'blasphemy', 'review'];

export function renderCreate() {
  character = createBlankCharacter();
  currentStep = 0;
  renderStep();
}

function renderStep() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <div class="page create-page">
      <header class="page-header">
        <button class="btn btn-back" id="btn-back">← Back</button>
        <h2>Create Exorcist</h2>
      </header>

      <div class="step-indicator">
        ${STEPS.map((s, i) => `
          <span class="step ${i === currentStep ? 'active' : ''} ${i < currentStep ? 'done' : ''}">${capitalize(s)}</span>
        `).join('<span class="step-divider">›</span>')}
      </div>

      <div class="step-content" id="step-content">
      </div>
    </div>
  `;

  document.getElementById('btn-back').addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      renderStep();
    } else {
      if (confirm('Abandon character creation?')) {
        navigate('home');
      }
    }
  });

  const content = document.getElementById('step-content');

  switch (STEPS[currentStep]) {
    case 'details': renderDetailsStep(content); break;
    case 'skills': renderSkillsStep(content); break;
    case 'agenda': renderAgendaStep(content); break;
    case 'blasphemy': renderBlasphemyStep(content); break;
    case 'review': renderReviewStep(content); break;
  }
}

// ─── STEP 1: Details ───────────────────────────────────────────────

function renderDetailsStep(container) {
  container.innerHTML = `
    <div class="form-section">
      <h3>Identity</h3>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" value="${character.name}" placeholder="Exorcist name">
      </div>
      <div class="form-group">
        <label for="exorcist-id">Exorcist ID</label>
        <input type="text" id="exorcist-id" value="${character.exorcistId}" placeholder="e.g. XXX0357">
      </div>
      <div class="form-group">
        <label for="look">Look / Description</label>
        <textarea id="look" rows="2" placeholder="Describe your exorcist's appearance">${character.look}</textarea>
      </div>
      <div class="form-group">
        <label>Sin-seed Location</label>
        <div class="radio-group">
          <label class="radio-label">
            <input type="radio" name="sinseed" value="brain" ${character.sinSeedLocation === 'brain' ? 'checked' : ''}>
            Brain
          </label>
          <label class="radio-label">
            <input type="radio" name="sinseed" value="heart" ${character.sinSeedLocation === 'heart' ? 'checked' : ''}>
            Heart
          </label>
        </div>
      </div>
    </div>

    <div class="form-section">
      <h3>Questions <span class="muted">(share with your Admin)</span></h3>
      <div class="form-group">
        <label for="q-manifest">How did you first manifest your powers?</label>
        <textarea id="q-manifest" rows="2">${character.questions.manifestation}</textarea>
      </div>
      <div class="form-group">
        <label for="q-hidden">What do you hide in the deepest parts of you?</label>
        <textarea id="q-hidden" rows="2">${character.questions.hidden}</textarea>
      </div>
      <div class="form-group">
        <label for="q-hand">Is your hand your hand?</label>
        <textarea id="q-hand" rows="2">${character.questions.hand}</textarea>
      </div>
      <div class="form-group">
        <label for="q-mother">Do you remember the face of your mother?</label>
        <textarea id="q-mother" rows="2">${character.questions.mother}</textarea>
      </div>
    </div>

    <button class="btn btn-primary btn-next" id="btn-next">Next: Skills →</button>
  `;

  document.getElementById('btn-next').addEventListener('click', () => {
    // Save step data
    character.name = document.getElementById('name').value.trim();
    character.exorcistId = document.getElementById('exorcist-id').value.trim();
    character.look = document.getElementById('look').value.trim();
    character.sinSeedLocation = document.querySelector('input[name="sinseed"]:checked')?.value || 'brain';
    character.questions.manifestation = document.getElementById('q-manifest').value.trim();
    character.questions.hidden = document.getElementById('q-hidden').value.trim();
    character.questions.hand = document.getElementById('q-hand').value.trim();
    character.questions.mother = document.getElementById('q-mother').value.trim();

    currentStep++;
    renderStep();
  });
}

// ─── STEP 2: Skills ────────────────────────────────────────────────

function renderSkillsStep(container) {
  container.innerHTML = `
    <div class="form-section">
      <h3>Skill Allocation</h3>
      <p class="help-text">
        All skills start at 1. Increase <strong>two</strong> skills to 2, and reduce <strong>three</strong> skills to 0.
        <br>Result: two 2s, five 1s, three 0s.
      </p>
      <div class="skill-grid" id="skill-grid">
        ${SKILLS.map(skill => `
          <div class="skill-row">
            <label class="skill-name" title="${skill.description}">${skill.name}</label>
            <div class="skill-controls">
              <button class="btn btn-tiny btn-dec" data-skill="${skill.id}">−</button>
              <span class="skill-value" id="val-${skill.id}">${character.skills[skill.id]}</span>
              <button class="btn btn-tiny btn-inc" data-skill="${skill.id}">+</button>
            </div>
            <span class="skill-desc muted">${skill.description}</span>
          </div>
        `).join('')}
      </div>
      <p class="validation-msg" id="skill-validation"></p>
    </div>

    <button class="btn btn-primary btn-next" id="btn-next">Next: Agenda →</button>
  `;

  // Bind increment/decrement
  container.querySelectorAll('.btn-inc').forEach(btn => {
    btn.addEventListener('click', () => {
      const skillId = btn.dataset.skill;
      if (character.skills[skillId] < 2) {
        character.skills[skillId]++;
        updateSkillDisplay();
      }
    });
  });

  container.querySelectorAll('.btn-dec').forEach(btn => {
    btn.addEventListener('click', () => {
      const skillId = btn.dataset.skill;
      if (character.skills[skillId] > 0) {
        character.skills[skillId]--;
        updateSkillDisplay();
      }
    });
  });

  document.getElementById('btn-next').addEventListener('click', () => {
    const result = validateSkillAllocation(character.skills);
    if (!result.valid) {
      document.getElementById('skill-validation').textContent = result.message;
      document.getElementById('skill-validation').classList.add('error');
      return;
    }
    currentStep++;
    renderStep();
  });

  updateSkillDisplay();
}

function updateSkillDisplay() {
  SKILLS.forEach(skill => {
    const el = document.getElementById(`val-${skill.id}`);
    if (el) el.textContent = character.skills[skill.id];
  });
  // Clear validation
  const msg = document.getElementById('skill-validation');
  if (msg) {
    const result = validateSkillAllocation(character.skills);
    msg.textContent = result.valid ? '✓ Valid allocation' : result.message;
    msg.className = 'validation-msg ' + (result.valid ? 'success' : 'warning');
  }
}

// ─── STEP 3: Agenda ────────────────────────────────────────────────

function renderAgendaStep(container) {
  container.innerHTML = `
    <div class="form-section">
      <h3>Choose Your Agenda</h3>
      <p class="help-text">Your agenda describes your character's motivations and grants abilities.</p>
      <div class="agenda-list" id="agenda-list">
        ${AGENDAS.map(agenda => `
          <div class="agenda-card ${character.agenda.id === agenda.id ? 'selected' : ''}" data-id="${agenda.id}">
            ${agenda.image ? `<img class="agenda-img" src="${agenda.image}" alt="${agenda.name}">` : ''}
            <h4>${agenda.name}</h4>
            <p class="agenda-items">
              <span class="item-normal">► ${agenda.agendaItems[0]}</span>
              <span class="item-bolded">► <strong>${agenda.boldedItems[0]}</strong></span>
            </p>
            ${agenda.restriction ? `<p class="agenda-restriction muted">${agenda.restriction}</p>` : ''}
          </div>
        `).join('')}
      </div>
    </div>

    <div class="form-section" id="ability-section" style="display:${character.agenda.id ? 'block' : 'none'}">
      <h3>Choose One Ability</h3>
      <div id="ability-list"></div>
    </div>

    <button class="btn btn-primary btn-next" id="btn-next" ${!character.agenda.id ? 'disabled' : ''}>Next: Blasphemy →</button>
  `;

  // Bind agenda selection
  container.querySelectorAll('.agenda-card').forEach(card => {
    card.addEventListener('click', () => {
      const agendaId = card.dataset.id;
      character.agenda.id = agendaId;
      character.agenda.abilities = [];

      // Update visual selection
      container.querySelectorAll('.agenda-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      // Show abilities
      renderAbilityChoices(agendaId);
      document.getElementById('ability-section').style.display = 'block';
    });
  });

  document.getElementById('btn-next').addEventListener('click', () => {
    if (!character.agenda.id) {
      alert('Please select an agenda.');
      return;
    }
    if (character.agenda.abilities.length === 0) {
      alert('Please select one ability from your agenda.');
      return;
    }
    currentStep++;
    renderStep();
  });

  // If already selected, show abilities
  if (character.agenda.id) {
    renderAbilityChoices(character.agenda.id);
  }
}

function renderAbilityChoices(agendaId) {
  const agenda = AGENDAS.find(a => a.id === agendaId);
  const listEl = document.getElementById('ability-list');
  if (!agenda || !listEl) return;

  listEl.innerHTML = agenda.abilities.map(ability => `
    <div class="ability-card ${character.agenda.abilities.includes(ability.id) ? 'selected' : ''}" data-id="${ability.id}">
      <h5>${ability.name}</h5>
      <p>${ability.description}</p>
    </div>
  `).join('');

  listEl.querySelectorAll('.ability-card').forEach(card => {
    card.addEventListener('click', () => {
      character.agenda.abilities = [card.dataset.id];
      listEl.querySelectorAll('.ability-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      document.getElementById('btn-next').removeAttribute('disabled');
    });
  });
}

// ─── STEP 4: Blasphemy ─────────────────────────────────────────────

function renderBlasphemyStep(container) {
  const selectedBlasphemy = character.blasphemies[0]?.id || '';
  const selectedPowers = character.blasphemies[0]?.powers || [];

  container.innerHTML = `
    <div class="form-section">
      <h3>Choose Your Blasphemy</h3>
      <p class="help-text">Pick a blasphemy, then choose <strong>two powers</strong> from it. All exorcists also have BLAST.</p>
      <div class="blasphemy-list" id="blasphemy-list">
        ${BLASPHEMIES.map(b => `
          <div class="blasphemy-card ${selectedBlasphemy === b.id ? 'selected' : ''}" data-id="${b.id}">
            <h4>${b.name}</h4>
            <p class="muted">${b.description}</p>
            <p class="passive"><strong>Passive - ${b.passive.name}:</strong> ${b.passive.description}</p>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="form-section" id="powers-section" style="display:${selectedBlasphemy ? 'block' : 'none'}">
      <h3>Choose Two Powers</h3>
      <div id="powers-list"></div>
      <p class="validation-msg" id="powers-validation"></p>
    </div>

    <button class="btn btn-primary btn-next" id="btn-next" ${selectedPowers.length !== 2 ? 'disabled' : ''}>Next: Review →</button>
  `;

  // Bind blasphemy selection
  container.querySelectorAll('.blasphemy-card').forEach(card => {
    card.addEventListener('click', () => {
      const blasId = card.dataset.id;
      character.blasphemies = [{ id: blasId, powers: [] }];

      container.querySelectorAll('.blasphemy-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      renderPowerChoices(blasId);
      document.getElementById('powers-section').style.display = 'block';
      document.getElementById('btn-next').setAttribute('disabled', '');
    });
  });

  document.getElementById('btn-next').addEventListener('click', () => {
    if (!character.blasphemies[0] || character.blasphemies[0].powers.length !== 2) {
      alert('Please select exactly 2 powers.');
      return;
    }
    currentStep++;
    renderStep();
  });

  // If already selected, show powers
  if (selectedBlasphemy) {
    renderPowerChoices(selectedBlasphemy);
  }
}

function renderPowerChoices(blasphemyId) {
  const blasphemy = BLASPHEMIES.find(b => b.id === blasphemyId);
  const listEl = document.getElementById('powers-list');
  if (!blasphemy || !listEl) return;

  const selectedPowers = character.blasphemies[0]?.powers || [];

  listEl.innerHTML = blasphemy.powers.map(power => `
    <div class="power-card ${selectedPowers.includes(power.id) ? 'selected' : ''}" data-id="${power.id}">
      <h5>${power.name} <span class="tags">${power.tags.join(', ')}</span></h5>
      <p>${power.description}</p>
    </div>
  `).join('');

  listEl.querySelectorAll('.power-card').forEach(card => {
    card.addEventListener('click', () => {
      const powerId = card.dataset.id;
      let powers = character.blasphemies[0].powers;

      if (powers.includes(powerId)) {
        powers = powers.filter(p => p !== powerId);
      } else if (powers.length < 2) {
        powers.push(powerId);
      } else {
        // Replace the oldest selection
        powers.shift();
        powers.push(powerId);
        // Update all visual states
        listEl.querySelectorAll('.power-card').forEach(c => c.classList.remove('selected'));
        powers.forEach(p => {
          listEl.querySelector(`[data-id="${p}"]`)?.classList.add('selected');
        });
      }

      character.blasphemies[0].powers = powers;

      // Update this card
      card.classList.toggle('selected', powers.includes(powerId));

      // Update validation
      const msg = document.getElementById('powers-validation');
      msg.textContent = `${powers.length}/2 powers selected`;
      msg.className = 'validation-msg ' + (powers.length === 2 ? 'success' : 'warning');

      // Enable/disable next
      if (powers.length === 2) {
        document.getElementById('btn-next').removeAttribute('disabled');
      } else {
        document.getElementById('btn-next').setAttribute('disabled', '');
      }
    });
  });
}

// ─── STEP 5: Review ────────────────────────────────────────────────

function renderReviewStep(container) {
  const agenda = AGENDAS.find(a => a.id === character.agenda.id);
  const blasphemy = BLASPHEMIES.find(b => b.id === character.blasphemies[0]?.id);
  const selectedPowers = character.blasphemies[0]?.powers || [];
  const agendaAbility = agenda?.abilities.find(a => a.id === character.agenda.abilities[0]);

  container.innerHTML = `
    <div class="form-section review-section">
      <h3>Review Your Exorcist</h3>

      <div class="review-block">
        <h4>Identity</h4>
        <p><strong>Name:</strong> ${character.name || '<em>Unnamed</em>'}</p>
        <p><strong>ID:</strong> ${character.exorcistId || '—'}</p>
        <p><strong>Sin-seed:</strong> ${character.sinSeedLocation}</p>
        ${character.look ? `<p><strong>Look:</strong> ${character.look}</p>` : ''}
      </div>

      <div class="review-block">
        <h4>Skills</h4>
        <div class="review-skills">
          ${SKILLS.map(s => `
            <span class="review-skill ${character.skills[s.id] === 0 ? 'zero' : ''} ${character.skills[s.id] === 2 ? 'high' : ''}">
              ${s.name}: ${character.skills[s.id]}
            </span>
          `).join('')}
        </div>
      </div>

      <div class="review-block">
        <h4>Agenda: ${agenda?.name || '—'}</h4>
        <p class="agenda-items">► ${agenda?.agendaItems[0]} / ► <strong>${agenda?.boldedItems[0]}</strong></p>
        <p><strong>Ability:</strong> ${agendaAbility?.name || '—'} — ${agendaAbility?.description || ''}</p>
      </div>

      <div class="review-block">
        <h4>Blasphemy: ${blasphemy?.name || '—'}</h4>
        <p><strong>Passive:</strong> ${blasphemy?.passive.name} — ${blasphemy?.passive.description || ''}</p>
        <p><strong>Powers:</strong></p>
        <ul>
          ${selectedPowers.map(pid => {
            const power = blasphemy?.powers.find(p => p.id === pid);
            return `<li><strong>${power?.name}</strong> [${power?.tags.join(', ')}] — ${power?.description || ''}</li>`;
          }).join('')}
        </ul>
      </div>
    </div>

    <div class="form-actions">
      <button class="btn btn-primary" id="btn-save">Create Exorcist</button>
      <button class="btn btn-secondary" id="btn-back-review">← Back to Edit</button>
    </div>
  `;

  document.getElementById('btn-save').addEventListener('click', () => {
    saveCharacter(character);
    navigate(`view/${character.id}`);
  });

  document.getElementById('btn-back-review').addEventListener('click', () => {
    currentStep--;
    renderStep();
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
