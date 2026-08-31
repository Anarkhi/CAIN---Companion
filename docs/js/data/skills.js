/**
 * CAIN RPG Skills Data
 * Skills are rated 0-3. There are 10 basic skills + 1 special skill (Psyche).
 */

export const SKILLS = [
  {
    id: 'force',
    name: 'Force',
    description: 'Apply direct and close force or violence. Smash, fight, cut, grapple.'
  },
  {
    id: 'conditioning',
    name: 'Conditioning',
    description: 'Get around on foot. Sprint, climb, swim, balance.'
  },
  {
    id: 'coordination',
    name: 'Coordination',
    description: 'Use your hand-eye coordination. Shoot, throw, catch.'
  },
  {
    id: 'covert',
    name: 'Covert',
    description: 'Move with stealth and act with sleight of hand. Sneak, lock pick, steal.'
  },
  {
    id: 'interfacing',
    name: 'Interfacing',
    description: 'Use, understand, build, or fix technology, vehicles, or devices. Drive, hack, repair.'
  },
  {
    id: 'surveillance',
    name: 'Surveillance',
    description: 'Use your power of observation. Survey, track, spot.'
  },
  {
    id: 'investigation',
    name: 'Investigation',
    description: 'Examine something in detail, or uncover information about it. Research, study, sleuth.'
  },
  {
    id: 'authority',
    name: 'Authority',
    description: 'Wield your leadership and force of will. Lead, organize, order, intimidate.'
  },
  {
    id: 'negotiation',
    name: 'Negotiation',
    description: 'Rely on your words to influence others. Sway, lie, bargain.'
  },
  {
    id: 'connection',
    name: 'Connection',
    description: 'Connect to others, and draw on those connections. Intuit, empathize, network.'
  }
];

// Psyche is special: equals half CAT rounded up, doesn't increase manually
export const PSYCHE_SKILL = {
  id: 'psyche',
  name: 'Psyche',
  description: 'Wield your supernatural powers. Equal to half your CAT, rounded up.',
  special: true
};
