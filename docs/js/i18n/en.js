/**
 * English locale - UI strings and game term translations
 */
export const EN = {
  // ─── App ─────────────────────────────────────────────────────────
  app: {
    title: 'CAIN',
    subtitle: 'Companion',
    tagline: 'Wipe out the stain.',
    loading: 'Loading...',
    language: 'EN'
  },

  // ─── Navigation & Actions ────────────────────────────────────────
  nav: {
    home: 'Home',
    back: '← Back',
    newExorcist: '+ New Exorcist',
    importChar: 'Import Character',
    exportAll: 'Export All',
    export: 'Export JSON',
    edit: 'Edit',
    view: 'View',
    delete: 'Delete',
    save: 'Save Changes',
    cancel: 'Cancel',
    create: 'Create Exorcist'
  },

  // ─── Home Page ───────────────────────────────────────────────────
  home: {
    emptyTitle: 'No exorcists on file.',
    emptySubtitle: 'Create a new character or import one from a JSON file.',
    agenda: 'Agenda',
    blasphemy: 'Blasphemy',
    missionsSurvived: 'Missions Survived',
    deleteConfirm: 'Delete {name}? This cannot be undone.'
  },

  // ─── Create Page ─────────────────────────────────────────────────
  create: {
    title: 'Create Exorcist',
    abandon: 'Abandon character creation?',
    steps: {
      details: 'Details',
      skills: 'Skills',
      agenda: 'Agenda',
      blasphemy: 'Blasphemy',
      review: 'Review'
    },
    // Details step
    identity: 'Identity',
    name: 'Name',
    namePlaceholder: 'Exorcist name',
    exorcistId: 'Exorcist ID',
    exorcistIdPlaceholder: 'e.g. XXX0357',
    look: 'Look / Description',
    lookPlaceholder: 'Describe appearance',
    sinSeedLocation: 'Sin-seed Location',
    brain: 'Brain',
    heart: 'Heart',
    questions: 'Questions',
    questionsHint: '(share with your Admin)',
    qManifest: 'How did you first manifest your powers?',
    qHidden: 'What do you hide in the deepest parts of you?',
    qHand: 'Is your hand your hand?',
    qMother: 'Do you remember the face of your mother?',
    nextSkills: 'Next: Skills →',
    // Skills step
    skillAllocation: 'Skill Allocation',
    skillHelp: 'All skills start at 1. Increase <strong>two</strong> to 2, reduce <strong>three</strong> to 0.',
    validAllocation: '✓ Valid allocation',
    nextAgenda: 'Next: Agenda →',
    // Agenda step
    chooseAgenda: 'Choose Your Agenda',
    agendaHelp: 'Your agenda describes motivations and grants abilities.',
    chooseAbility: 'Choose One Ability',
    nextBlasphemy: 'Next: Blasphemy →',
    selectAgenda: 'Please select an agenda.',
    selectAbility: 'Please select one ability.',
    // Blasphemy step
    chooseBlasphemy: 'Choose Your Blasphemy',
    blasphemyHelp: 'Pick a blasphemy, then choose <strong>two powers</strong>. All exorcists also have BLAST.',
    choosePowers: 'Choose Two Powers',
    powersSelected: '{n}/2 powers selected',
    nextReview: 'Next: Review →',
    selectPowers: 'Select exactly 2 powers.',
    // Review step
    reviewTitle: 'Review Your Exorcist',
    reviewIdentity: 'Identity',
    reviewSkills: 'Skills',
    reviewAgenda: 'Agenda',
    reviewBlasphemy: 'Blasphemy',
    passive: 'Passive',
    powers: 'Powers',
    ability: 'Ability',
    backToEdit: '← Back to Edit'
  },

  // ─── View Page ───────────────────────────────────────────────────
  view: {
    notFound: 'Character not found.',
    skills: 'Skills',
    combatState: 'Combat State',
    stress: 'Stress',
    injuries: 'Injuries',
    psycheBursts: 'Psyche Bursts',
    pathos: 'Pathos',
    sin: 'Sin',
    xp: 'XP',
    agenda: 'Agenda',
    abilities: 'Abilities',
    blasphemies: 'Blasphemies',
    blastDesc: 'Spend a psyche burst and roll PSYCHE to produce weaponized psychic energy. Scales with CAT.',
    kitWeapons: 'Kit & Weapons',
    kitPoints: 'Kit Points',
    firearm: 'Firearm',
    melee: 'Melee',
    notes: 'Notes',
    noNotes: 'No notes.',
    noAgenda: 'No agenda selected.',
    id: 'ID',
    sinSeed: 'Sin-seed',
    missions: 'Missions',
    scrip: 'Scrip'
  },

  // ─── Edit Page ───────────────────────────────────────────────────
  edit: {
    title: 'Edit: {name}',
    identity: 'Identity',
    progression: 'Progression',
    category: 'Category',
    missions: 'Missions',
    combatState: 'Combat State',
    stress: 'Stress',
    injuries: 'Injuries',
    pBursts: 'P. Bursts',
    pathos: 'Pathos',
    sin: 'Sin',
    sinCap: 'Sin Cap',
    skills: 'Skills',
    weapons: 'Weapons',
    notes: 'Notes',
    scrip: 'Scrip',
    xp: 'XP (0-4)'
  },

  // ─── Game Terms ──────────────────────────────────────────────────
  skills: {
    force: 'Force',
    conditioning: 'Conditioning',
    coordination: 'Coordination',
    covert: 'Covert',
    interfacing: 'Interfacing',
    surveillance: 'Surveillance',
    investigation: 'Investigation',
    authority: 'Authority',
    negotiation: 'Negotiation',
    connection: 'Connection',
    psyche: 'Psyche',
    // Descriptions
    force_desc: 'Apply direct and close force or violence. Smash, fight, cut, grapple.',
    conditioning_desc: 'Get around on foot. Sprint, climb, swim, balance.',
    coordination_desc: 'Use your hand-eye coordination. Shoot, throw, catch.',
    covert_desc: 'Move with stealth and act with sleight of hand. Sneak, lock pick, steal.',
    interfacing_desc: 'Use, understand, build, or fix technology, vehicles, or devices. Drive, hack, repair.',
    surveillance_desc: 'Use your power of observation. Survey, track, spot.',
    investigation_desc: 'Examine something in detail, or uncover information about it. Research, study, sleuth.',
    authority_desc: 'Wield your leadership and force of will. Lead, organize, order, intimidate.',
    negotiation_desc: 'Rely on your words to influence others. Sway, lie, bargain.',
    connection_desc: 'Connect to others, and draw on those connections. Intuit, empathize, network.',
    psyche_desc: 'Wield your supernatural powers. Equal to half your CAT, rounded up.'
  },

  agendas: {
    doomed: 'Doomed',
    beast: 'Beast',
    firebug: 'Firebug',
    guardian: 'Guardian',
    loner: 'Loner',
    hardline: 'Hardline',
    machine: 'Machine',
    temperance: 'Temperance',
    torch: 'Torch',
    shadow: 'Shadow',
    sorcerer: 'Sorcerer',
    songbird: 'Songbird'
  },

  blasphemyNames: {
    tension: 'Tension',
    ardence: 'Ardence',
    flux: 'Flux',
    vector: 'Vector',
    gate: 'Gate',
    smother: 'Smother',
    whisper: 'Whisper',
    edit: 'Edit',
    bind: 'Bind',
    palace: 'Palace',
    jaunt: 'Jaunt',
    sympathy: 'Sympathy'
  }
};
