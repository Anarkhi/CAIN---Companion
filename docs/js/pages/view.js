/**
 * Character Sheet View - Display full character details.
 */

import { getCharacter, exportCharacter } from '../storage.js';
import { getPsycheValue } from '../character-model.js';
import { navigate } from '../router.js';
import { SKILLS } from '../data/skills.js';
import { AGENDAS } from '../data/agendas.js';
import { BLASPHEMIES } from '../data/blasphemies.js';

export function renderView(characterId) {
  const app = document.getElementById('app');
  const char = getCharacter(characterId);

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

  const agenda = AGENDAS.find(a => a.id === char.agenda?.id);
  const blasphemy = BLASPHEMIES.find(b => b.id === char.blasphemies?.[0]?.id);
  const psyche = getPsycheValue(char.category);

  app.innerHTML = `
    <div class="page view-page">
      <header class="page-header">
        <button class="btn btn-back" id="btn-home">← Home</button>
        <div class="header-actions">
          <button class="btn btn-secondary" id="btn-edit">Edit</button>
          <button class="btn btn-secondary" id="btn-export">Export JSON</button>
        </div>
      </header>

      <div class="sheet">
        <!-- Identity Block -->
        <section class="sheet-section identity-section">
          <div class="sheet-row">
            <h2 class="char-name-large">${char.name || 'Unnamed Exorcist'}</h2>
            <span class="cat-badge">CAT ${char.category}</span>
          </div>
          <div class="identity-details">
            <span><strong>ID:</strong> ${char.exorcistId || '—'}</span>
            <span><strong>Sin-seed:</strong> ${char.sinSeedLocation}</span>
            <span><strong>Missions Survived:</strong> ${char.missionsSurvived}</span>
            <span><strong>Scrip:</strong> ${char.scrip}</span>
          </div>
          ${char.look ? `<p class="char-look">${char.look}</p>` : ''}
        </section>

        <!-- Skills -->
        <section class="sheet-section">
          <h3>Skills</h3>
          <div class="skills-display">
            ${SKILLS.map(s => `
              <div class="skill-chip ${char.skills[s.id] === 0 ? 'zero' : ''} ${char.skills[s.id] >= 2 ? 'high' : ''}">
                <span class="skill-chip-name">${s.name}</span>
                <span class="skill-chip-value">${char.skills[s.id]}</span>
              </div>
            `).join('')}
            <div class="skill-chip special">
              <span class="skill-chip-name">Psyche</span>
              <span class="skill-chip-value">${psyche}</span>
            </div>
          </div>
        </section>

        <!-- Combat State -->
        <section class="sheet-section">
          <h3>Combat State</h3>
          <div class="state-grid">
            <div class="state-box">
              <label>Stress</label>
              <div class="talisman-track">
                ${renderTalisman(char.stress, char.maxStress - char.injuries)}
              </div>
              <span class="state-value">${char.stress} / ${char.maxStress - char.injuries}</span>
            </div>
            <div class="state-box">
              <label>Injuries</label>
              <span class="state-value large">${char.injuries}</span>
            </div>
            <div class="state-box">
              <label>Psyche Bursts</label>
              <span class="state-value large">${char.psycheBursts} / ${char.maxPsycheBursts}</span>
            </div>
            <div class="state-box">
              <label>Pathos</label>
              <span class="state-value large">${char.pathos} / 3</span>
            </div>
            <div class="state-box">
              <label>Sin</label>
              <span class="state-value large ${char.sin >= char.sinOverflowCap ? 'danger' : ''}">${char.sin} / ${char.sinOverflowCap}</span>
            </div>
            <div class="state-box">
              <label>XP</label>
              <span class="state-value large">${char.experience} / 4</span>
            </div>
          </div>
        </section>

        <!-- Agenda -->
        <section class="sheet-section">
          <h3>Agenda: ${agenda?.name || '—'}</h3>
          ${agenda ? `
            <div class="agenda-display">
              <p>► ${agenda.agendaItems[0]}</p>
              <p>► <strong>${agenda.boldedItems[0]}</strong></p>
            </div>
            <div class="abilities-display">
              <h4>Abilities</h4>
              ${char.agenda.abilities.map(abilId => {
                const abil = agenda.abilities.find(a => a.id === abilId);
                return abil ? `<div class="ability-display"><strong>${abil.name}:</strong> ${abil.description}</div>` : '';
              }).join('')}
            </div>
          ` : '<p class="muted">No agenda selected.</p>'}
        </section>

        <!-- Blasphemies -->
        <section class="sheet-section">
          <h3>Blasphemies</h3>
          <div class="blast-display">
            <div class="power-display">
              <strong>BLAST</strong> [Instant, Short] — Spend a psyche burst and roll PSYCHE to produce a weaponized form of concentrated psychic energy. Scales with CAT.
            </div>
          </div>
          ${char.blasphemies.map(blRef => {
            const bl = BLASPHEMIES.find(b => b.id === blRef.id);
            if (!bl) return '';
            return `
              <div class="blasphemy-display">
                <h4>${bl.name}</h4>
                <div class="passive-display">
                  <strong>Passive — ${bl.passive.name}:</strong> ${bl.passive.description}
                </div>
                <div class="powers-display">
                  ${blRef.powers.map(powId => {
                    const pow = bl.powers.find(p => p.id === powId);
                    return pow ? `
                      <div class="power-display">
                        <strong>${pow.name}</strong> <span class="tags">[${pow.tags.join(', ')}]</span>
                        <p>${pow.description}</p>
                      </div>
                    ` : '';
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </section>

        <!-- Hooks & Afflictions -->
        ${(char.hooks.length > 0 || char.afflictions.length > 0) ? `
          <section class="sheet-section">
            <h3>Hooks & Afflictions</h3>
            ${char.hooks.length > 0 ? `
              <div class="hooks-display">
                <h4>Hooks</h4>
                ${char.hooks.map(h => `<div class="hook-item">${h.name}: ${renderTalisman(h.slashes, 3)}</div>`).join('')}
              </div>
            ` : ''}
            ${char.afflictions.length > 0 ? `
              <div class="afflictions-display">
                <h4>Afflictions</h4>
                ${char.afflictions.map(a => `<div class="affliction-item">${a.name}: ${a.description}</div>`).join('')}
              </div>
            ` : ''}
          </section>
        ` : ''}

        <!-- Sin Marks -->
        ${char.sinMarks.length > 0 ? `
          <section class="sheet-section">
            <h3>Sin Marks</h3>
            ${char.sinMarks.map(sm => `
              <div class="sin-mark-item">
                <strong>Location: ${sm.location}</strong>
                ${sm.abilities.map(a => `<p>${a}</p>`).join('')}
              </div>
            `).join('')}
          </section>
        ` : ''}

        <!-- Kit & Weapons -->
        <section class="sheet-section">
          <h3>Kit & Weapons</h3>
          <p><strong>Kit Points:</strong> ${char.kitPoints} / ${char.maxKitPoints}</p>
          <div class="weapons-display">
            <p><strong>Firearm:</strong> ${char.weapons.firearm.name} (CAT ${char.weapons.firearm.category})</p>
            <p><strong>Melee:</strong> ${char.weapons.melee.name} (CAT ${char.weapons.melee.category})</p>
          </div>
          ${char.kitItems.length > 0 ? `
            <div class="kit-items-display">
              <h4>Purchased Items</h4>
              ${char.kitItems.map(item => `<span class="kit-item">${item.name}</span>`).join('')}
            </div>
          ` : ''}
        </section>

        <!-- Questions -->
        <section class="sheet-section collapsible">
          <h3>Character Questions</h3>
          <div class="questions-display">
            ${char.questions.manifestation ? `<p><em>How did you first manifest your powers?</em><br>${char.questions.manifestation}</p>` : ''}
            ${char.questions.hidden ? `<p><em>What do you hide in the deepest parts of you?</em><br>${char.questions.hidden}</p>` : ''}
            ${char.questions.hand ? `<p><em>Is your hand your hand?</em><br>${char.questions.hand}</p>` : ''}
            ${char.questions.mother ? `<p><em>Do you remember the face of your mother?</em><br>${char.questions.mother}</p>` : ''}
          </div>
        </section>

        <!-- Notes -->
        <section class="sheet-section">
          <h3>Notes</h3>
          <p class="notes-display">${char.notes || '<span class="muted">No notes.</span>'}</p>
        </section>
      </div>
    </div>
  `;

  // Bind actions
  document.getElementById('btn-home').addEventListener('click', () => navigate('home'));
  document.getElementById('btn-edit').addEventListener('click', () => navigate(`edit/${characterId}`));
  document.getElementById('btn-export').addEventListener('click', () => exportCharacter(char));
}

function renderTalisman(current, max) {
  let html = '';
  for (let i = 0; i < max; i++) {
    html += `<span class="talisman-slash ${i < current ? 'filled' : ''}">╱</span>`;
  }
  return html;
}
