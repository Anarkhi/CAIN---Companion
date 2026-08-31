/**
 * CAIN Companion - Bundled Application
 * Single-file version that works from file:// protocol (no ES modules needed).
 * This is the concatenation of all app modules into one IIFE.
 */

(function() {
'use strict';

// ════════════════════════════════════════════════════════════════════
// I18N: Language System
// ════════════════════════════════════════════════════════════════════

var LANG_KEY = 'cain_companion_lang';
var currentLang = localStorage.getItem(LANG_KEY) || 'en';

var LOCALES = {
  en: {
    app_title: 'CAIN', app_subtitle: 'Companion', app_tagline: 'Wipe out the stain.',
    nav_back: '\u2190 Back', nav_newExorcist: '+ New Exorcist', nav_import: 'Import Character',
    nav_exportAll: 'Export All', nav_export: 'Export JSON', nav_edit: 'Edit', nav_view: 'View',
    nav_delete: 'Delete', nav_save: 'Save Changes', nav_cancel: 'Cancel', nav_create: 'Create Exorcist', nav_session: 'Session Mode', nav_advance: 'Advance', nav_swap_agenda: 'Swap Agenda', nav_quirks: 'Mutate Blasphemy', nav_sinmarks: 'Sin Marks',
    home_empty: 'No exorcists on file.', home_emptySub: 'Create a new character or import one from a JSON file.',
    home_agenda: 'Agenda', home_blasphemy: 'Blasphemy', home_missions: 'Missions Survived',
    home_deleteConfirm: 'Delete {name}? This cannot be undone.',
    create_title: 'Create Exorcist', create_abandon: 'Abandon character creation?',
    step_details: 'Details', step_skills: 'Skills', step_agenda: 'Agenda', step_blasphemy: 'Blasphemy', step_review: 'Review',
    identity: 'Identity', name: 'Name', namePh: 'Exorcist name', exorcistId: 'Exorcist ID', exorcistIdPh: 'e.g. XXX0357',
    look: 'Look / Description', lookPh: 'Describe appearance',
    sinSeed: 'Sin-seed Location', brain: 'Brain', heart: 'Heart',
    questions: 'Questions', questionsHint: '(share with your Admin)',
    qManifest: 'How did you first manifest your powers?', qHidden: 'What do you hide in the deepest parts of you?',
    qHand: 'Is your hand your hand?', qMother: 'Do you remember the face of your mother?',
    nextSkills: 'Next: Skills \u2192', nextAgenda: 'Next: Agenda \u2192', nextBlasphemy: 'Next: Blasphemy \u2192', nextReview: 'Next: Review \u2192',
    skillAlloc: 'Skill Allocation', skillHelp: 'All skills start at 1. Increase <strong>two</strong> to 2, reduce <strong>three</strong> to 0.',
    validAlloc: '\u2713 Valid allocation',
    chooseAgenda: 'Choose Your Agenda', agendaHelp: 'Your agenda describes motivations and grants abilities.',
    chooseAbility: 'Choose One Ability', selectAgenda: 'Please select an agenda.', selectAbility: 'Please select one ability.',
    chooseBlasphemy: 'Choose Your Blasphemy', blasphemyHelp: 'Pick a blasphemy, then choose <strong>two powers</strong>. All exorcists also have BLAST.',
    choosePowers: 'Choose Two Powers', selectPowers: 'Select exactly 2 powers.',
    reviewTitle: 'Review Your Exorcist', passive: 'Passive', powers: 'Powers', ability: 'Ability', backToEdit: '\u2190 Back to Edit',
    notFound: 'Character not found.', skills: 'Skills', combatState: 'Combat State',
    stress: 'Stress', injuries: 'Injuries', psycheBursts: 'Psyche Bursts', pathos: 'Pathos', sin: 'Sin', xp: 'XP',
    agenda: 'Agenda', abilities: 'Abilities', blasphemies: 'Blasphemies',
    blastDesc: 'Spend a psyche burst and roll PSYCHE to produce a weaponized form of concentrated psychic energy in melee or short range. The specific look and feel of this basic exorcist skill varies between exorcists. The strength of this blast scales with CAT. When your exorcist produces a blast, they might: Imbue a slash of a blade or a shot with a ranged weapon with psychic energy; Shoot an invisible ball of force from their fingers; Fire scathing lightning; Shoot a bead of ghostly, frigid fire. Unlike your mundane service weapons, blast is a supernatural weapon and therefore doesn\'t become hard by default when used against sins.',
    kitWeapons: 'Kit & Weapons', kitPoints: 'Kit Points', firearm: 'Firearm', melee: 'Melee',
    notes: 'Notes', noNotes: 'No notes.', noAgenda: 'No agenda selected.',
    id: 'ID', missions: 'Missions', scrip: 'Scrip', category: 'Category',
    progression: 'Progression', pBursts: 'P. Bursts', sinCap: 'Sin Cap', weapons: 'Weapons',
    session_execution: 'Execution Talisman', session_stress_hint: 'Mark stress here. When full, take an injury and clear.',
    session_hooks: 'Hooks', session_hook_placeholder: 'Hook name...',
    session_afflictions: 'Afflictions', session_aff_placeholder: 'Affliction name...',
    session_items: 'Items Deployed', session_item_placeholder: 'Item name...',
    session_powers: 'Blasphemies', session_notes: 'Session Notes',
    session_notes_placeholder: 'Investigation notes, clues, NPCs...',
    session_add_bolded: 'New bolded agenda item...',
    session_reset: 'End Mission', session_reset_confirm: 'End the mission? This clears stress, injuries, hooks, items, and notes. XP and Advances are kept. Sin is halved.',
    session_advances: 'Advances', session_hook_max_title: 'Max slashes', session_desc_placeholder: 'Description / effect...',
    // Advancement page
    adv_can_cash: 'You have enough XP to cash in for an Advance!',
    adv_cash_xp: 'Cash XP for 1 Advance',
    adv_spend_title: 'Spend an Advance',
    adv_no_advances: 'You need at least 1 advance to spend.',
    adv_new_power: 'Gain a new Blasphemy Power (from current blasphemies)',
    adv_new_blasphemy: 'Unlock a new Blasphemy (gain passive + pick 1 power, -1 sin cap, +1 XP cap)',
    adv_new_ability: 'Gain a new Agenda Ability',
    adv_improve_skill: 'Improve a Skill by +1',
    adv_gain_scrip: 'Gain 3 Scrip',
    adv_evolve_mark: 'Evolve a Sin Mark (roll new ability)',
    adv_swap_survivor: 'Swap out of Survivor agenda (costs 2 advances)',
    adv_no_powers_available: 'No new powers available from your current blasphemies.',
    adv_new_blasphemy_warn: 'Taking a new blasphemy reduces your sin overflow cap by 1 and increases your XP cap by 1.',
    adv_max_abilities: 'You already have the maximum of 5 agenda abilities.',
    adv_no_abilities_available: 'No new abilities available from your current agenda.',
    adv_skill_info: 'Skill improvements used: {used}/{max}. Max 2 skills at rank 3.',
    adv_pick_first_power: 'Pick your first power for the new blasphemy',
    adv_swap_survivor_info: 'This costs 2 advances. Choose your new agenda:',
    adv_confirm_scrip: 'Spend 1 advance to gain 3 scrip?',
    adv_confirm_power: 'Spend 1 advance to gain this power?',
    adv_confirm_blasphemy: 'Spend 1 advance to unlock this blasphemy? (This reduces sin cap by 1 and increases XP cap by 1)',
    adv_confirm_ability: 'Spend 1 advance to gain this ability?',
    adv_confirm_skill: 'Spend 1 advance to improve this skill?',
    adv_confirm_evolve: 'Spend 1 advance to evolve this sin mark?',
    adv_confirm_swap: 'Spend 2 advances to swap to this agenda?',
    // Swap Agenda page
    swap_current: 'Current Agenda', swap_extra_bolded: 'Extra Bolded Items',
    swap_abilities_count: 'Abilities carried', swap_survivor_cost: 'Swapping out of Survivor costs 2 advances.',
    swap_need_2_advances: 'You need at least 2 advances to swap out of Survivor.',
    swap_choose_new: 'Choose New Agenda', swap_confirm_title: 'Confirm Swap',
    swap_carry_bolded: 'Bolded items to carry over:', swap_carry_abilities: 'Abilities to carry over:',
    swap_max_5_abilities: 'You can carry a maximum of 5 abilities total.',
    swap_confirm_btn: 'Confirm Agenda Swap', swap_confirm_question: 'Swap to this agenda? This cannot be undone.',
    swap_too_many_abilities: 'Maximum 5 abilities. Please uncheck some.',
    // Sin Marks page
    sm_rules: 'Roll 1d6 for mark location, then 1d6 on that mark for ability. If you roll a location you already have, the mark evolves (add a new ability). If you roll a 6 for location, you can choose. You increase your resistance rolls by 1 for each sin mark.',
    sm_current: 'Current Sin Marks', sm_none: 'No sin marks yet.',
    sm_add_new: 'Add New Sin Mark', sm_add_instructions: 'Select the location you rolled (1-6):',
    sm_choose: 'Choose a Location', sm_choose_desc: 'If you rolled a 6, choose any location.',
    sm_choose_location_first: 'Choose a location:',
    sm_pick_ability: 'Select ability rolled',
    sm_confirm_add: 'Add this sin mark ability?',
    sm_duplicate: 'This ability is already on this mark. Re-roll for a different one.',
    sm_remove_confirm: 'Remove this sin mark? This cannot be undone.',
    // Expansions
    exp_title: 'Expansions', exp_blocked_title: 'Expansion Required',
    exp_blocked_msg: 'This character uses content from the following expansion(s) that are not currently active:',
    // Quirks (GFF-4.1)
    quirks_none: 'No blasphemies with available quirks.', quirks_current: 'Current', quirks_default: 'Default (no quirk)',
    quirks_apply: 'Apply Quirk', quirks_remove: 'Remove Quirk',
    // Edit page
    edit_agenda: 'Agenda', edit_blasphemies: 'Blasphemies', edit_powers: 'Powers', edit_sinmarks: 'Sin Marks',
    edit_no_agenda: 'No agenda selected.', edit_change_agenda: 'Change Agenda', edit_add_blas: 'Add Blasphemy',
    powers: 'powers',
    // Virtues (GFF-1)
    virtue_title: 'Virtue Bonds', virtue_none: 'No virtue bonds yet. Select a virtue to bond with at the start of a mission.',
    virtue_level: 'Level', virtue_active: 'ACTIVE', virtue_select: 'Bond with virtue this mission:',
    virtue_select_none: '— None —', virtue_increase: 'Mission survived — Increase bond by 1',
    virtue_increase_confirm: 'Increase bond level by 1? (This represents surviving a mission while bonded to this virtue)',
    virtue_confirm: 'Confirm', virtue_confirm_msg: 'Bond with {name} for this mission? You will follow their stricture.',
    virtue_stricture: 'Stricture', virtue_stricture_ignore: 'Ignore for one roll by taking 2 nonlethal stress',
    virtue_high_blas: 'High Blasphemy',
    virtue_irreversible: 'This choice is IRREVERSIBLE. Once taken, it cannot be undone.',
    // CAT Guide
    cat_guide_title: 'Category Guide',
    cat_people: 'People', cat_size: 'Size', cat_area: 'Area', cat_distance: 'Distance', cat_range: 'Range', cat_speed: 'Speed', cat_magnitude: 'Magnitude',
    cat_people_0: 'One', cat_people_1: 'A Few', cat_people_2: 'Small Group', cat_people_3: 'Large Group', cat_people_4: 'A Crowd', cat_people_5: 'A Huge Crowd', cat_people_6: 'Thousands', cat_people_7: 'Many Thousands',
    cat_size_0: 'Human Size', cat_size_1: 'Heavy Furniture', cat_size_2: 'Large Animal', cat_size_3: 'Vehicle', cat_size_4: 'Large Vehicle', cat_size_5: 'Building', cat_size_6: 'Large Building', cat_size_7: 'Skyscraper',
    cat_area_0: 'Personal', cat_area_1: 'A Few People', cat_area_2: 'Entire Room', cat_area_3: 'A Few Rooms', cat_area_4: 'Whole Building', cat_area_5: 'A City Block', cat_area_6: 'A Whole Neighborhood', cat_area_7: 'A Whole Town',
    cat_dist_0: 'Touch', cat_dist_1: 'Same Room', cat_dist_2: 'Across the Street', cat_dist_3: 'Down the Block', cat_dist_4: 'A Few Blocks', cat_dist_5: 'Across Town', cat_dist_6: 'Visual Range', cat_dist_7: 'Over the Horizon',
    cat_range_0: 'Short', cat_range_1: 'Short', cat_range_2: 'Short', cat_range_3: 'Long', cat_range_4: 'Long', cat_range_5: 'Extreme', cat_range_6: 'Extreme', cat_range_7: 'Extreme',
    cat_speed_0: 'Average Human', cat_speed_1: 'Fast Human', cat_speed_2: 'Fast Animal', cat_speed_3: 'Car', cat_speed_4: 'Train', cat_speed_5: 'Maglev', cat_speed_6: 'Airliner', cat_speed_7: 'Jet Fighter',
    cat_mag_0: 'Small', cat_mag_1: 'Noticeable', cat_mag_2: 'Large', cat_mag_3: 'Very Large', cat_mag_4: 'Massive', cat_mag_5: 'Destructive', cat_mag_6: 'Overwhelming', cat_mag_7: 'Cataclysmic',
    cat_note_1: 'Use CAT 0 when describing general human or mundane capabilities.',
    cat_note_2: 'Well trained humans can sometimes reach CAT 1.',
    cat_note_3: 'Higher CAT effects vs lower CAT targets are more effective, less risky, or easier, and may not even require a roll if they are 3 or more lower.',
    cat_note_4: 'Lower CAT effects vs higher CAT targets are less effective, more risky, or harder, and may be impossible if they are 3 or more higher.',
    // Skill names
    sk_force: 'Force', sk_conditioning: 'Conditioning', sk_coordination: 'Coordination', sk_covert: 'Covert',
    sk_interfacing: 'Interfacing', sk_surveillance: 'Surveillance', sk_investigation: 'Investigation',
    sk_authority: 'Authority', sk_negotiation: 'Negotiation', sk_connection: 'Connection', sk_psyche: 'Psyche',
    // Skill descriptions
    skd_force: 'Apply direct and close force or violence. Smash, fight, cut, grapple.',
    skd_conditioning: 'Get around on foot. Sprint, climb, swim, balance.',
    skd_coordination: 'Use your hand-eye coordination. Shoot, throw, catch.',
    skd_covert: 'Move with stealth and act with sleight of hand. Sneak, lock pick, steal.',
    skd_interfacing: 'Use, understand, build, or fix technology, vehicles, or devices. Drive, hack, repair.',
    skd_surveillance: 'Use your power of observation. Survey, track, spot.',
    skd_investigation: 'Examine something in detail, or uncover information about it. Research, study, sleuth.',
    skd_authority: 'Wield your leadership and force of will. Lead, organize, order, intimidate.',
    skd_negotiation: 'Rely on your words to influence others. Sway, lie, bargain.',
    skd_connection: 'Connect to others, and draw on those connections. Intuit, empathize, network.',
    // Agenda names
    ag_doomed: 'Doomed', ag_beast: 'Beast', ag_firebug: 'Firebug', ag_guardian: 'Guardian',
    ag_loner: 'Loner', ag_hardline: 'Hardline', ag_machine: 'Machine', ag_temperance: 'Temperance',
    ag_torch: 'Torch', ag_shadow: 'Shadow', ag_sorcerer: 'Sorcerer', ag_songbird: 'Songbird', ag_departed: 'Departed', ag_moth: 'Moth', ag_survivor: 'Survivor', ag_demon: 'Demon', ag_cradle: 'Cradle', ag_doll: 'Doll', ag_broken: 'Broken',
    // Blasphemy names
    bl_tension: 'Tension', bl_ardence: 'Ardence', bl_flux: 'Flux', bl_vector: 'Vector',
    bl_gate: 'Gate', bl_smother: 'Smother', bl_whisper: 'Whisper', bl_edit: 'Edit',
    bl_bind: 'Bind', bl_palace: 'Palace', bl_jaunt: 'Jaunt', bl_sympathy: 'Sympathy', bl_tongue: 'Tongue', bl_playlist: 'Track', bl_wire: 'Wire', bl_mother: 'Mother'
  },
  pt: {
    app_title: 'CAIN', app_subtitle: 'Companheiro', app_tagline: 'Limpe a mancha.',
    nav_back: '\u2190 Voltar', nav_newExorcist: '+ Novo Exorcista', nav_import: 'Importar Personagem',
    nav_exportAll: 'Exportar Todos', nav_export: 'Exportar JSON', nav_edit: 'Editar', nav_view: 'Ver',
    nav_delete: 'Excluir', nav_save: 'Salvar Alterações', nav_cancel: 'Cancelar', nav_create: 'Criar Exorcista', nav_session: 'Modo Sessão', nav_advance: 'Avançar', nav_swap_agenda: 'Trocar Agenda', nav_quirks: 'Mutar Blasfêmia', nav_sinmarks: 'Marcas de Pecado',
    home_empty: 'Nenhum exorcista registrado.', home_emptySub: 'Crie um novo personagem ou importe um arquivo JSON.',
    home_agenda: 'Agenda', home_blasphemy: 'Blasfêmia', home_missions: 'Missões Sobrevividas',
    home_deleteConfirm: 'Excluir {name}? Essa ação não pode ser desfeita.',
    create_title: 'Criar Exorcista', create_abandon: 'Abandonar a criação do personagem?',
    step_details: 'Detalhes', step_skills: 'Perícias', step_agenda: 'Agenda', step_blasphemy: 'Blasfêmia', step_review: 'Revisão',
    identity: 'Identidade', name: 'Nome', namePh: 'Nome do exorcista', exorcistId: 'ID do Exorcista', exorcistIdPh: 'ex. XXX0357',
    look: 'Aparência / Descrição', lookPh: 'Descreva a aparência',
    sinSeed: 'Semente Profana', brain: 'Cérebro', heart: 'Coração',
    questions: 'Perguntas', questionsHint: '(compartilhe com seu Admin)',
    qManifest: 'Como você manifestou seus poderes pela primeira vez?', qHidden: 'O que você esconde nas partes mais profundas de si?',
    qHand: 'Sua mão é sua mão?', qMother: 'Você se lembra do rosto de sua mãe?',
    nextSkills: 'Próximo: Perícias \u2192', nextAgenda: 'Próximo: Agenda \u2192', nextBlasphemy: 'Próximo: Blasfêmia \u2192', nextReview: 'Próximo: Revisão \u2192',
    skillAlloc: 'Alocação de Perícias', skillHelp: 'Todas começam em 1. Aumente <strong>duas</strong> para 2, reduza <strong>três</strong> para 0.',
    validAlloc: '\u2713 Alocação válida',
    chooseAgenda: 'Escolha Sua Agenda', agendaHelp: 'Sua agenda descreve motivações e concede habilidades.',
    chooseAbility: 'Escolha Uma Habilidade', selectAgenda: 'Selecione uma agenda.', selectAbility: 'Selecione uma habilidade.',
    chooseBlasphemy: 'Escolha Sua Blasfêmia', blasphemyHelp: 'Escolha uma blasfêmia, depois escolha <strong>dois poderes</strong>. Todos os exorcistas também possuem RAJADA.',
    choosePowers: 'Escolha Dois Poderes', selectPowers: 'Selecione exatamente 2 poderes.',
    reviewTitle: 'Revise Seu Exorcista', passive: 'Passiva', powers: 'Poderes', ability: 'Habilidade', backToEdit: '\u2190 Voltar para Edição',
    notFound: 'Personagem não encontrado.', skills: 'Perícias', combatState: 'Estado de Combate',
    stress: 'Estresse', injuries: 'Ferimentos', psycheBursts: 'Pulsos Psíquicos', pathos: 'Piedade', sin: 'Pecado', xp: 'XP',
    agenda: 'Agenda', abilities: 'Habilidades', blasphemies: 'Blasfêmias',
    blastDesc: 'Gaste um pulso psíquico e role PSIQUE para produzir uma forma concentrada e armada de energia psíquica em corpo a corpo ou curta distância. A aparência específica desta habilidade básica de exorcista varia entre exorcistas. A força desta rajada escala com CAT. Quando seu exorcista produz uma rajada, ele pode: Imbuir um golpe de lâmina ou um disparo de arma de longo alcance com energia psíquica; Disparar uma esfera invisível de força a partir dos dedos; Lançar relâmpagos escaldantes; Disparar uma gota de fogo fantasmagórico e gélido. Diferente de suas armas de serviço mundanas, rajada é uma arma sobrenatural e portanto não se torna difícil por padrão quando usada contra pecados.',
    kitWeapons: 'Kit & Armas', kitPoints: 'Pontos de Kit', firearm: 'Arma de Fogo', melee: 'Arma Branca',
    notes: 'Anotações', noNotes: 'Sem anotações.', noAgenda: 'Nenhuma agenda selecionada.',
    id: 'ID', missions: 'Missões', scrip: 'Scrip', category: 'Categoria',
    progression: 'Progressão', pBursts: 'Pulsos Ps.', sinCap: 'Limite Pecado', weapons: 'Armas',
    session_execution: 'Talismã de Execução', session_stress_hint: 'Marque estresse aqui. Quando cheio, sofra um ferimento e limpe.',
    session_hooks: 'Ganchos', session_hook_placeholder: 'Nome do gancho...',
    session_afflictions: 'Aflições', session_aff_placeholder: 'Nome da aflição...',
    session_items: 'Itens Utilizados', session_item_placeholder: 'Nome do item...',
    session_powers: 'Blasfêmias', session_notes: 'Notas da Sessão',
    session_notes_placeholder: 'Notas de investigação, pistas, NPCs...',
    session_add_bolded: 'Novo item negrito de agenda...',
    session_reset: 'Finalizar Missão', session_reset_confirm: 'Finalizar a missão? Limpa estresse, ferimentos, ganchos, itens e notas. XP e Avanços são mantidos. Pecado é reduzido pela metade.',
    session_advances: 'Avanços', session_hook_max_title: 'Cortes máximos', session_desc_placeholder: 'Descrição / efeito...',
    // Advancement page
    adv_can_cash: 'Você tem XP suficiente para trocar por um Avanço!',
    adv_cash_xp: 'Trocar XP por 1 Avanço',
    adv_spend_title: 'Gastar um Avanço',
    adv_no_advances: 'Você precisa de pelo menos 1 avanço para gastar.',
    adv_new_power: 'Ganhar novo Poder de Blasfêmia (das blasfêmias atuais)',
    adv_new_blasphemy: 'Desbloquear nova Blasfêmia (ganha passiva + 1 poder, -1 limite pecado, +1 limite XP)',
    adv_new_ability: 'Ganhar nova Habilidade de Agenda',
    adv_improve_skill: 'Melhorar uma Perícia em +1',
    adv_gain_scrip: 'Ganhar 3 Scrip',
    adv_evolve_mark: 'Evoluir uma Marca de Pecado (rolar nova habilidade)',
    adv_swap_survivor: 'Trocar agenda Sobrevivente (custa 2 avanços)',
    adv_no_powers_available: 'Nenhum poder novo disponível nas suas blasfêmias atuais.',
    adv_new_blasphemy_warn: 'Ganhar uma nova blasfêmia reduz seu limite de pecado em 1 e aumenta seu limite de XP em 1.',
    adv_max_abilities: 'Você já tem o máximo de 5 habilidades de agenda.',
    adv_no_abilities_available: 'Nenhuma habilidade nova disponível na sua agenda atual.',
    adv_skill_info: 'Melhorias de perícia usadas: {used}/{max}. Máximo 2 perícias no rank 3.',
    adv_pick_first_power: 'Escolha seu primeiro poder para a nova blasfêmia',
    adv_swap_survivor_info: 'Isso custa 2 avanços. Escolha sua nova agenda:',
    adv_confirm_scrip: 'Gastar 1 avanço para ganhar 3 scrip?',
    adv_confirm_power: 'Gastar 1 avanço para ganhar este poder?',
    adv_confirm_blasphemy: 'Gastar 1 avanço para desbloquear esta blasfêmia? (Reduz limite de pecado em 1 e aumenta limite de XP em 1)',
    adv_confirm_ability: 'Gastar 1 avanço para ganhar esta habilidade?',
    adv_confirm_skill: 'Gastar 1 avanço para melhorar esta perícia?',
    adv_confirm_evolve: 'Gastar 1 avanço para evoluir esta marca de pecado?',
    adv_confirm_swap: 'Gastar 2 avanços para trocar para esta agenda?',
    // Swap Agenda page
    swap_current: 'Agenda Atual', swap_extra_bolded: 'Itens em Negrito Extras',
    swap_abilities_count: 'Habilidades carregadas', swap_survivor_cost: 'Trocar a agenda Sobrevivente custa 2 avanços.',
    swap_need_2_advances: 'Você precisa de pelo menos 2 avanços para trocar a agenda Sobrevivente.',
    swap_choose_new: 'Escolher Nova Agenda', swap_confirm_title: 'Confirmar Troca',
    swap_carry_bolded: 'Itens em negrito para levar:', swap_carry_abilities: 'Habilidades para levar:',
    swap_max_5_abilities: 'Você pode levar no máximo 5 habilidades no total.',
    swap_confirm_btn: 'Confirmar Troca de Agenda', swap_confirm_question: 'Trocar para esta agenda? Isso não pode ser desfeito.',
    swap_too_many_abilities: 'Máximo 5 habilidades. Desmarque algumas.',
    // Sin Marks page
    sm_rules: 'Role 1d6 para localização da marca, depois 1d6 para a habilidade. Se rolar uma localização que já tem, a marca evolui (adicione nova habilidade). Se rolar 6 para localização, pode escolher. Você aumenta suas rolagens de resistência em 1 para cada marca de pecado.',
    sm_current: 'Marcas de Pecado Atuais', sm_none: 'Nenhuma marca de pecado ainda.',
    sm_add_new: 'Adicionar Nova Marca', sm_add_instructions: 'Selecione a localização que rolou (1-6):',
    sm_choose: 'Escolher Localização', sm_choose_desc: 'Se rolou 6, escolha qualquer localização.',
    sm_choose_location_first: 'Escolha uma localização:',
    sm_pick_ability: 'Selecione habilidade rolada',
    sm_confirm_add: 'Adicionar esta habilidade de marca de pecado?',
    sm_duplicate: 'Esta habilidade já está nesta marca. Re-role para uma diferente.',
    sm_remove_confirm: 'Remover esta marca de pecado? Isso não pode ser desfeito.',
    // Expansions
    exp_title: 'Expansões', exp_blocked_title: 'Expansão Necessária',
    exp_blocked_msg: 'Este personagem usa conteúdo da(s) seguinte(s) expansão(ões) que não estão ativas no momento:',
    // Quirks (GFF-4.1)
    quirks_none: 'Nenhuma blasfêmia com peculiaridades disponíveis.', quirks_current: 'Atual', quirks_default: 'Padrão (sem peculiaridade)',
    quirks_apply: 'Aplicar Peculiaridade', quirks_remove: 'Remover Peculiaridade',
    // Edit page
    edit_agenda: 'Agenda', edit_blasphemies: 'Blasfêmias', edit_powers: 'Poderes', edit_sinmarks: 'Marcas de Pecado',
    edit_no_agenda: 'Nenhuma agenda selecionada.', edit_change_agenda: 'Trocar Agenda', edit_add_blas: 'Adicionar Blasfêmia',
    powers: 'poderes',
    // Virtues (GFF-1)
    virtue_title: 'Vínculos de Virtude', virtue_none: 'Nenhum vínculo de virtude ainda. Selecione uma virtude para vincular no início de uma missão.',
    virtue_level: 'Nível', virtue_active: 'ATIVO', virtue_select: 'Vincular com virtude nesta missão:',
    virtue_select_none: '— Nenhuma —', virtue_increase: 'Missão sobrevivida — Aumentar vínculo em 1',
    virtue_increase_confirm: 'Aumentar nível de vínculo em 1? (Representa sobreviver uma missão enquanto vinculado a esta virtude)',
    virtue_confirm: 'Confirmar', virtue_confirm_msg: 'Vincular com {name} nesta missão? Você seguirá a restrição desta virtude.',
    virtue_stricture: 'Restrição', virtue_stricture_ignore: 'Ignore por uma rolagem sofrendo 2 de estresse não-letal',
    virtue_high_blas: 'Alta Blasfêmia',
    virtue_irreversible: 'Esta escolha é IRREVERSÍVEL. Uma vez feita, não pode ser desfeita.',
    // CAT Guide
    cat_guide_title: 'Guia de Categorias',
    cat_people: 'Pessoas', cat_size: 'Tamanho', cat_area: 'Área', cat_distance: 'Distância', cat_range: 'Alcance', cat_speed: 'Velocidade', cat_magnitude: 'Magnitude',
    cat_people_0: 'Uma', cat_people_1: 'Algumas', cat_people_2: 'Grupo Pequeno', cat_people_3: 'Grupo Grande', cat_people_4: 'Multidão', cat_people_5: 'Multidão Enorme', cat_people_6: 'Milhares', cat_people_7: 'Muitos Milhares',
    cat_size_0: 'Tamanho Humano', cat_size_1: 'Mobília Pesada', cat_size_2: 'Animal Grande', cat_size_3: 'Veículo', cat_size_4: 'Veículo Grande', cat_size_5: 'Edifício', cat_size_6: 'Edifício Grande', cat_size_7: 'Arranha-céu',
    cat_area_0: 'Pessoal', cat_area_1: 'Algumas Pessoas', cat_area_2: 'Cômodo Inteiro', cat_area_3: 'Alguns Cômodos', cat_area_4: 'Edifício Inteiro', cat_area_5: 'Quarteirão', cat_area_6: 'Bairro Inteiro', cat_area_7: 'Cidade Inteira',
    cat_dist_0: 'Toque', cat_dist_1: 'Mesmo Cômodo', cat_dist_2: 'Outro Lado da Rua', cat_dist_3: 'Fim do Quarteirão', cat_dist_4: 'Alguns Quarteirões', cat_dist_5: 'Através da Cidade', cat_dist_6: 'Alcance Visual', cat_dist_7: 'Além do Horizonte',
    cat_range_0: 'Curto', cat_range_1: 'Curto', cat_range_2: 'Curto', cat_range_3: 'Longo', cat_range_4: 'Longo', cat_range_5: 'Extremo', cat_range_6: 'Extremo', cat_range_7: 'Extremo',
    cat_speed_0: 'Humano Médio', cat_speed_1: 'Humano Rápido', cat_speed_2: 'Animal Rápido', cat_speed_3: 'Carro', cat_speed_4: 'Trem', cat_speed_5: 'Trem-Bala', cat_speed_6: 'Avião', cat_speed_7: 'Jato de Caça',
    cat_mag_0: 'Pequena', cat_mag_1: 'Notável', cat_mag_2: 'Grande', cat_mag_3: 'Muito Grande', cat_mag_4: 'Massiva', cat_mag_5: 'Destrutiva', cat_mag_6: 'Esmagadora', cat_mag_7: 'Cataclísmica',
    cat_note_1: 'Use CAT 0 ao descrever capacidades humanas gerais ou mundanas.',
    cat_note_2: 'Humanos bem treinados às vezes podem atingir CAT 1.',
    cat_note_3: 'Efeitos de CAT mais alto contra alvos de CAT mais baixo são mais eficazes, menos arriscados ou mais fáceis, e podem nem exigir uma rolagem se forem 3 ou mais abaixo.',
    cat_note_4: 'Efeitos de CAT mais baixo contra alvos de CAT mais alto são menos eficazes, mais arriscados ou mais difíceis, e podem ser impossíveis se forem 3 ou mais acima.',
    // Skill names
    sk_force: 'Força', sk_conditioning: 'Atletismo', sk_coordination: 'Coordenação', sk_covert: 'Furtividade',
    sk_interfacing: 'Interface', sk_surveillance: 'Observação', sk_investigation: 'Investigação',
    sk_authority: 'Autoridade', sk_negotiation: 'Negociação', sk_connection: 'Conexão', sk_psyche: 'Psique',
    // Skill descriptions
    skd_force: 'Aplicar força direta ou violência. Esmagar, lutar, cortar, agarrar.',
    skd_conditioning: 'Deslocar-se a pé. Correr, escalar, nadar, equilibrar.',
    skd_coordination: 'Usar coordenação motora. Atirar, arremessar, pegar.',
    skd_covert: 'Mover-se furtivamente. Esgueirar, abrir fechaduras, roubar.',
    skd_interfacing: 'Usar, entender, construir ou consertar tecnologia. Dirigir, hackear, reparar.',
    skd_surveillance: 'Usar seu poder de observação. Examinar, rastrear, localizar.',
    skd_investigation: 'Examinar algo em detalhe ou descobrir informações. Pesquisar, estudar, investigar.',
    skd_authority: 'Exercer liderança e força de vontade. Liderar, organizar, ordenar, intimidar.',
    skd_negotiation: 'Confiar em suas palavras para influenciar outros. Convencer, mentir, negociar.',
    skd_connection: 'Conectar-se aos outros e usar essas conexões. Intuir, ter empatia, criar redes.',
    // Agenda names
    ag_doomed: 'Amaldiçoado', ag_beast: 'Fera', ag_firebug: 'Vagalume', ag_guardian: 'Guardião',
    ag_loner: 'Solitário', ag_hardline: 'Rigoroso', ag_machine: 'Máquina', ag_temperance: 'Temperança',
    ag_torch: 'Tocha', ag_shadow: 'Sombra', ag_sorcerer: 'Feiticeiro', ag_songbird: 'Canário', ag_departed: 'Partido', ag_moth: 'Mariposa', ag_survivor: 'Sobrevivente', ag_demon: 'Demônio', ag_cradle: 'Berço', ag_doll: 'Boneca', ag_broken: 'Quebrado',
    // Blasphemy names
    bl_tension: 'Tensão', bl_ardence: 'Ardor', bl_flux: 'Fluxo', bl_vector: 'Vetor',
    bl_gate: 'Portão', bl_smother: 'Sufoco', bl_whisper: 'Sussurro', bl_edit: 'Edit',
    bl_bind: 'Vínculo', bl_palace: 'Palácio', bl_jaunt: 'Assombração', bl_sympathy: 'Simpatia', bl_tongue: 'Língua', bl_playlist: 'Track', bl_wire: 'Fio', bl_mother: 'Mãe'
  }
};

/** Get a translated string by key */
function t(key) { return LOCALES[currentLang][key] || LOCALES['en'][key] || key; }

/** Get translated skill name by skill id */
function tSkill(id) { return t('sk_' + id); }

/** Get translated skill description by skill id */
function tSkillDesc(id) { return t('skd_' + id); }

/** Get translated agenda name by agenda id */
function tAgenda(id) { return t('ag_' + id); }

/** Get translated blasphemy name by blasphemy id */
function tBlas(id) { return t('bl_' + id); }

/** Get translated ability description */
function tAbilDesc(abilId, fallback) {
  if (currentLang === 'pt' && PT_CONTENT.abilities[abilId]) return PT_CONTENT.abilities[abilId];
  return fallback;
}

/** Get translated agenda items for an agenda */
function tAgendaItems(agendaId, agenda) {
  if (currentLang === 'pt' && PT_CONTENT.agendaItems[agendaId]) return PT_CONTENT.agendaItems[agendaId];
  return { items: agenda.agendaItems, bolded: agenda.boldedItems };
}

/** Translate a bolded item string if it matches a known agenda bolded item */
function tBoldedItem(item) {
  if (currentLang !== 'pt') return item;
  // Check all agendas for matching bolded items
  for (var i = 0; i < AGENDAS.length; i++) {
    var ag = AGENDAS[i];
    if (ag.boldedItems[0] === item && PT_CONTENT.agendaItems[ag.id]) {
      return PT_CONTENT.agendaItems[ag.id].bolded[0];
    }
  }
  return item;
}

/** Get translated agenda restriction */
function tAgendaRestriction(agendaId, fallback) {
  if (currentLang === 'pt' && PT_CONTENT.agendaRestrictions[agendaId]) return PT_CONTENT.agendaRestrictions[agendaId];
  return fallback;
}

/** Get translated blasphemy description */
function tBlasDesc(blasId, fallback) {
  if (currentLang === 'pt' && PT_CONTENT.blasphemyDescs[blasId]) return PT_CONTENT.blasphemyDescs[blasId];
  return fallback;
}

/** Get translated passive description */
function tPassiveDesc(passiveId, fallback) {
  var text = (currentLang === 'pt' && PT_CONTENT.passives[passiveId]) ? PT_CONTENT.passives[passiveId] : fallback;
  return stripCatTags(text);
}

/** Get translated passive description raw (for session CAT resolution) */
function tPassiveDescRaw(passiveId, fallback) {
  return (currentLang === 'pt' && PT_CONTENT.passives[passiveId]) ? PT_CONTENT.passives[passiveId] : fallback;
}

/** Get translated power description */
function tPowerDesc(powerId, fallback) {
  var text = (currentLang === 'pt' && PT_CONTENT.powers[powerId]) ? PT_CONTENT.powers[powerId] : fallback;
  return stripCatTags(text);
}

/** Get translated power description WITH CAT resolution (for session mode) */
function tPowerDescSession(powerId, fallback, cat) {
  var text = (currentLang === 'pt' && PT_CONTENT.powers[powerId]) ? PT_CONTENT.powers[powerId] : fallback;
  return resolveCatTags(text, cat);
}

/** Get all passives for a blasphemy (supports both single passive and passives array) */
function getPassives(bl) {
  if (bl.passives) return bl.passives;
  if (bl.passive) return [bl.passive];
  return [];
}

/** Get effective passives for a blasphemy considering active quirks */
function getEffectivePassives(bl, char) {
  var basePassives = getPassives(bl);
  if (!char || !char.quirks || !char.quirks[bl.id] || char.quirks[bl.id].length === 0) return basePassives;

  var quirkData = QUIRKS[bl.id];
  if (!quirkData) return basePassives;

  var activeQuirkIds = char.quirks[bl.id];
  var result = basePassives.slice(); // copy

  activeQuirkIds.forEach(function(qId) {
    var quirk = quirkData.options.find(function(o) { return o.id === qId; });
    if (!quirk) return;

    if (quirk.type === 'replace') {
      // Replace only the targeted passive (by quirkData.replaces), keep others
      var targetPassiveId = quirkData.replaces;
      result = result.filter(function(p) { return p.id !== targetPassiveId; });
      result.unshift({ id: quirk.id, name: quirk.name, image: quirk.image, description: quirk.description });
    } else if (quirk.type === 'add' || quirk.type === 'add_free') {
      // Add quirk as additional passive-like entry (but NOT if it grants a power instead)
      if (!quirk.grantsPower) {
        result.push({ id: quirk.id, name: quirk.name, image: quirk.image, description: quirk.description });
      }
    }
  });

  return result;
}

/** Resolve a power ID to an effective power object, considering quirk altPowers */
function getEffectivePower(bl, powId, char) {
  var pw = bl.powers.find(function(p) { return p.id === powId; });
  if (!pw || !char || !char.quirks || !char.quirks[bl.id]) return pw;

  var quirkData = QUIRKS[bl.id];
  if (!quirkData) return pw;

  var activeQuirkIds = char.quirks[bl.id];
  for (var i = 0; i < activeQuirkIds.length; i++) {
    var quirk = quirkData.options.find(function(o) { return o.id === activeQuirkIds[i]; });
    if (quirk && quirk.altPowers) {
      var altPower = quirk.altPowers.find(function(ap) { return ap.replaces === powId; });
      if (altPower) return altPower;
    }
  }
  return pw;
}

/** Get effective power ID list for a blasphemy ref, including granted powers from quirks */
function getEffectivePowerIds(blRef, char) {
  var ids = (blRef.powers || []).slice();
  if (!char || !char.quirks || !char.quirks[blRef.id]) return ids;

  var quirkData = QUIRKS[blRef.id];
  if (!quirkData) return ids;

  var activeQuirkIds = char.quirks[blRef.id];
  activeQuirkIds.forEach(function(qId) {
    var quirk = quirkData.options.find(function(o) { return o.id === qId; });
    if (quirk && quirk.grantsPower && ids.indexOf(quirk.grantsPower) === -1) {
      ids.push(quirk.grantsPower);
    }
  });
  return ids;
}

/** Render all passives for a blasphemy as HTML blocks */
function renderPassivesHtml(bl, char) {
  var flavorText = bl.flavor || '';
  if (currentLang === 'pt' && PT_CONTENT.flavors && PT_CONTENT.flavors[bl.id]) flavorText = PT_CONTENT.flavors[bl.id];
  var flavor = flavorText ? '<div class="blasphemy-flavor"><em>' + flavorText + '</em></div>' : '';
  var passives = char ? getEffectivePassives(bl, char) : getPassives(bl);
  return flavor + passives.map(function(p) {
    return (p.image ? '<img class="passive-img" src="' + p.image + '" alt="' + p.name + '">' : '') + '<div class="passive-display"><strong>' + t('passive') + ' \u2014 ' + p.name + ':</strong> ' + tPassiveDesc(p.id, p.description) + '</div>';
  }).join('');
}

/** Render passives for session mode with CAT resolution */
function renderPassivesHtmlSession(bl, cat, char) {
  var flavorText = bl.flavor || '';
  if (currentLang === 'pt' && PT_CONTENT.flavors && PT_CONTENT.flavors[bl.id]) flavorText = PT_CONTENT.flavors[bl.id];
  var flavor = flavorText ? '<div class="blasphemy-flavor"><em>' + flavorText + '</em></div>' : '';
  var passives = char ? getEffectivePassives(bl, char) : getPassives(bl);
  return flavor + passives.map(function(p) {
    var notesHtml = '';
    var usesHtml = '';
    // Check if this passive has editable notes (from quirk or base passive)
    var hasNotes = false;
    var passiveUses = null;
    if (p.hasNotes) hasNotes = true;
    if (char && QUIRKS[bl.id]) {
      var quirk = QUIRKS[bl.id].options.find(function(q) { return q.id === p.id; });
      if (quirk) {
        if (quirk.hasNotes) hasNotes = true;
        if (quirk.uses) passiveUses = quirk;
      }
    }
    if (hasNotes && char) {
      var noteVal = (char.quirkNotes && char.quirkNotes[p.id]) || '';
      var noteLabel = p.id === 'playlist_playlist' ? 'Playlist:' : (currentLang === 'pt' ? 'Notas:' : 'Notes:');
      notesHtml = '<div class="quirk-notes"><label class="muted" style="font-size:0.75rem">' + noteLabel + '</label><textarea class="quirk-note-input" data-quirk="' + p.id + '" rows="3" placeholder="...">' + escHtml(noteVal) + '</textarea></div>';
    }
    if (passiveUses && char) {
      var maxU = passiveUses.maxUses || 1;
      var usedCount = (char.usedPassives && char.usedPassives[p.id]) || 0;
      var isUsed = usedCount >= maxU;
      usesHtml = '<div class="passive-uses"><button class="power-uses-toggle' + (isUsed ? ' used' : '') + '" data-char="' + char.id + '" data-passive="' + p.id + '" data-max="' + maxU + '">' + (isUsed ? (currentLang === 'pt' ? 'Usado' : 'Used') : (currentLang === 'pt' ? 'Disponível' : 'Available')) + (maxU > 1 ? ' (' + usedCount + '/' + maxU + ')' : '') + '</button></div>';
    }
    return (p.image ? '<img class="passive-img" src="' + p.image + '" alt="' + p.name + '">' : '') + '<div class="passive-display' + (passiveUses && char && ((char.usedPassives && char.usedPassives[p.id]) || 0) >= (passiveUses.maxUses || 1) ? ' power-used' : '') + '"><strong>' + t('passive') + ' \u2014 ' + p.name + ':</strong> ' + resolveCatTags(tPassiveDescRaw(p.id, p.description), cat) + usesHtml + notesHtml + '</div>';
  }).join('');
}

/** Render passives summary for cards (shorter, for selection view) */
function renderPassivesCard(bl) {
  var flavorText = bl.flavor || '';
  if (currentLang === 'pt' && PT_CONTENT.flavors && PT_CONTENT.flavors[bl.id]) flavorText = PT_CONTENT.flavors[bl.id];
  var flavor = flavorText ? '<p class="blasphemy-flavor muted"><em>' + flavorText + '</em></p>' : '';
  return flavor + getPassives(bl).map(function(p) {
    return (p.image ? '<img class="passive-img" src="' + p.image + '" alt="' + p.name + '">' : '') + '<p class="passive"><strong>' + t('passive') + ' - ' + p.name + ':</strong> ' + tPassiveDesc(p.id, p.description) + '</p>';
  }).join('');
}

/** Render passives for review step */
function renderPassivesReview(bl) {
  var flavorText = bl.flavor || '';
  if (currentLang === 'pt' && PT_CONTENT.flavors && PT_CONTENT.flavors[bl.id]) flavorText = PT_CONTENT.flavors[bl.id];
  var flavor = flavorText ? '<p class="blasphemy-flavor"><em>' + flavorText + '</em></p>' : '';
  return flavor + getPassives(bl).map(function(p) {
    return '<p><strong>' + t('passive') + ':</strong> ' + p.name + ' \u2014 ' + tPassiveDesc(p.id, p.description) + '</p>';
  }).join('');
}

/** CAT Guide lookup tables for dynamic resolution */
var CAT_TABLE = {
  people: ['One', 'A Few', 'Small Group', 'Large Group', 'A Crowd', 'A Huge Crowd', 'Thousands', 'Many Thousands'],
  size: ['Human Size', 'Heavy Furniture', 'Large Animal', 'Vehicle', 'Large Vehicle', 'Building', 'Large Building', 'Skyscraper'],
  area: ['Personal', 'A Few People', 'Entire Room', 'A Few Rooms', 'Whole Building', 'A City Block', 'A Whole Neighborhood', 'A Whole Town'],
  distance: ['Touch', 'Same Room', 'Across the Street', 'Down the Block', 'A Few Blocks', 'Across Town', 'Visual Range', 'Over the Horizon'],
  range: ['Short', 'Short', 'Short', 'Long', 'Long', 'Extreme', 'Extreme', 'Extreme'],
  speed: ['Average Human', 'Fast Human', 'Fast Animal', 'Car', 'Train', 'Maglev', 'Airliner', 'Jet Fighter'],
  magnitude: ['Small', 'Noticeable', 'Large', 'Very Large', 'Massive', 'Destructive', 'Overwhelming', 'Cataclysmic']
};

var CAT_TABLE_PT = {
  people: ['Uma', 'Algumas', 'Grupo Pequeno', 'Grupo Grande', 'Multidão', 'Multidão Enorme', 'Milhares', 'Muitos Milhares'],
  size: ['Tamanho Humano', 'Mobília Pesada', 'Animal Grande', 'Veículo', 'Veículo Grande', 'Edifício', 'Edifício Grande', 'Arranha-céu'],
  area: ['Pessoal', 'Algumas Pessoas', 'Cômodo Inteiro', 'Alguns Cômodos', 'Edifício Inteiro', 'Quarteirão', 'Bairro Inteiro', 'Cidade Inteira'],
  distance: ['Toque', 'Mesmo Cômodo', 'Outro Lado da Rua', 'Fim do Quarteirão', 'Alguns Quarteirões', 'Através da Cidade', 'Alcance Visual', 'Além do Horizonte'],
  range: ['Curto', 'Curto', 'Curto', 'Longo', 'Longo', 'Extremo', 'Extremo', 'Extremo'],
  speed: ['Humano Médio', 'Humano Rápido', 'Animal Rápido', 'Carro', 'Trem', 'Trem-Bala', 'Avião', 'Jato de Caça'],
  magnitude: ['Pequena', 'Notável', 'Grande', 'Muito Grande', 'Massiva', 'Destrutiva', 'Esmagadora', 'Cataclísmica']
};

/**
 * Resolve CAT tags in a text string based on character's current CAT.
 * Supported tags:
 *   [CAT:row] / [CAT+N:row] / [CAT-N:row] / [HALF_CAT:row] - table lookup
 *   [CAT+N{maxM}:row] - table lookup with a maximum cap
 *   [CALC:expr] - numeric calculation (e.g. CALC:2+CAT, CALC:4+CAT, CALC:CAT+1, CALC:HALF_CAT)
 * row = people, size, area, distance, range, speed, magnitude
 * Returns HTML with resolved values as highlighted spans.
 */
function resolveCatTags(text, cat) {
  if (!text) return text;
  var tbl = currentLang === 'pt' ? CAT_TABLE_PT : CAT_TABLE;
  // Table lookups: [CAT+N{maxM}:row] or [CAT+N:row] or [HALF_CAT:row]
  text = text.replace(/\[(CAT|HALF_CAT)([+-]\d+)?(?:\{max(\d+)\})?:(\w+)\]/g, function(match, base, mod, maxCap, row) {
    var table = tbl[row];
    if (!table) return match;
    var val = base === 'HALF_CAT' ? Math.ceil(cat / 2) : cat;
    if (mod) val += parseInt(mod);
    if (maxCap) val = Math.min(val, parseInt(maxCap));
    val = Math.max(0, Math.min(val, table.length - 1));
    return '<span class="cat-resolved">' + table[val] + '</span>';
  });
  // Numeric calculations: [CALC:expr]
  text = text.replace(/\[CALC:([^\]]+)\]/g, function(match, expr) {
    var result = 0;
    expr = expr.trim();
    if (expr === 'HALF_CAT') {
      result = Math.ceil(cat / 2);
    } else if (expr.match(/^(\d+)\+CAT$/)) {
      result = parseInt(RegExp.$1) + cat;
    } else if (expr.match(/^CAT\+(\d+)$/)) {
      result = cat + parseInt(RegExp.$1);
    } else if (expr.match(/^CAT-(\d+)$/)) {
      result = cat - parseInt(RegExp.$1);
    } else if (expr === 'CAT') {
      result = cat;
    } else {
      return match;
    }
    return '<span class="cat-resolved">' + result + '</span>';
  });
  return text;
}

/** Strip CAT tags from text (for non-session renders) */
function stripCatTags(text) {
  if (!text) return text;
  text = text.replace(/\s*\[(CAT|HALF_CAT)([+-]\d+)?(?:\{max\d+\})?:(\w+)\]/g, '');
  text = text.replace(/\s*\[CALC:[^\]]+\]/g, '');
  return text;
}

/** Render burst cost indicator for a power */
function renderBurstCost(burst) {
  if (!burst) return '';
  var labels = {
    required: { en: '\uD83D\uDD25 Requires Burst', pt: '\uD83D\uDD25 Consome Pulso' },
    none: { en: '\u2014 No Burst', pt: '\u2014 Não Consome Pulso' },
    optional: { en: '\u26A1 May Spend Burst', pt: '\u26A1 Pode Consumir Pulso' },
    variable: { en: '\uD83D\uDD25+ Requires Burst(s)', pt: '\uD83D\uDD25+ Consome Pulso(s)' }
  };
  var label = labels[burst];
  if (!label) return '';
  var text = currentLang === 'pt' ? label.pt : label.en;
  return '<span class="burst-tag burst-' + burst + '">' + text + '</span>';
}

/** Toggle language and re-render current page */
function toggleLanguage() {
  // If on create page, collect current form data before re-rendering
  if (createChar && window.location.hash.slice(1).split('/')[0] === 'create') {
    collectCreateStepData();
    saveCreateState();
  }
  currentLang = currentLang === 'en' ? 'pt' : 'en';
  localStorage.setItem(LANG_KEY, currentLang);
  handleRoute();
}

/** Render the language toggle button (call after rendering page) */
function renderLangToggle() {
  // Remove existing if present
  var existing = document.getElementById('lang-toggle');
  if (existing) existing.remove();
  var btn = document.createElement('button');
  btn.id = 'lang-toggle';
  btn.className = 'btn-lang-toggle';
  btn.textContent = currentLang === 'en' ? 'EN' : 'PT-BR';
  btn.title = currentLang === 'en' ? 'Switch to Português' : 'Switch to English';
  btn.addEventListener('click', toggleLanguage);
  document.body.appendChild(btn);

  // CAT Guide button
  var existingCat = document.getElementById('cat-guide-btn');
  if (existingCat) existingCat.remove();
  var catBtn = document.createElement('button');
  catBtn.id = 'cat-guide-btn';
  catBtn.className = 'btn-cat-guide';
  catBtn.textContent = 'CAT';
  catBtn.title = 'Category Guide';
  catBtn.addEventListener('click', toggleCatGuide);
  document.body.appendChild(catBtn);

  // Expansions button (only on home page)
  var existingExp = document.getElementById('exp-btn');
  if (existingExp) existingExp.remove();
  var currentHash = (window.location.hash.slice(1) || 'home').split('/')[0];
  if (currentHash === 'home') {
    var expBtn = document.createElement('button');
    expBtn.id = 'exp-btn';
    expBtn.className = 'btn-expansions';
    expBtn.textContent = '\u2699';
    expBtn.title = currentLang === 'pt' ? 'Expansões' : 'Expansions';
    expBtn.addEventListener('click', toggleExpansionDrawer);
    document.body.appendChild(expBtn);
  }
}

function toggleCatGuide() {
  var overlay = document.getElementById('cat-guide-overlay');
  if (overlay) {
    overlay.remove();
    return;
  }
  overlay = document.createElement('div');
  overlay.id = 'cat-guide-overlay';
  overlay.className = 'cat-guide-overlay';
  overlay.innerHTML =
    '<div class="cat-guide-content">' +
      '<div class="cat-guide-header">' +
        '<h3>' + t('cat_guide_title') + '</h3>' +
        '<button class="btn btn-tiny" id="cat-guide-close">\u00D7</button>' +
      '</div>' +
      '<div class="cat-guide-table-wrap">' +
        '<table class="cat-guide-table">' +
          '<thead><tr>' +
            '<th></th>' +
            '<th class="cat-col cat-0">0<br><br><span>Human</span></th>' +
            '<th class="cat-col cat-1">1<br><br><span>Imp</span></th>' +
            '<th class="cat-col cat-2">2<br><br><span>Geist</span></th>' +
            '<th class="cat-col cat-3">3<br><br><span>Revenant</span></th>' +
            '<th class="cat-col cat-4">4<br><br><span>Wraith</span></th>' +
            '<th class="cat-col cat-5">5<br><br><span>Demon</span></th>' +
            '<th class="cat-col cat-6">6<br><br><span>God</span></th>' +
            '<th class="cat-col cat-7">7<br><br><span>Demon God</span></th>' +
          '</tr></thead>' +
          '<tbody>' +
            '<tr><td class="row-label">' + t('cat_people') + '</td><td>' + t('cat_people_0') + '</td><td>' + t('cat_people_1') + '</td><td>' + t('cat_people_2') + '</td><td>' + t('cat_people_3') + '</td><td>' + t('cat_people_4') + '</td><td>' + t('cat_people_5') + '</td><td>' + t('cat_people_6') + '</td><td>' + t('cat_people_7') + '</td></tr>' +
            '<tr><td class="row-label">' + t('cat_size') + '</td><td>' + t('cat_size_0') + '</td><td>' + t('cat_size_1') + '</td><td>' + t('cat_size_2') + '</td><td>' + t('cat_size_3') + '</td><td>' + t('cat_size_4') + '</td><td>' + t('cat_size_5') + '</td><td>' + t('cat_size_6') + '</td><td>' + t('cat_size_7') + '</td></tr>' +
            '<tr><td class="row-label">' + t('cat_area') + '</td><td>' + t('cat_area_0') + '</td><td>' + t('cat_area_1') + '</td><td>' + t('cat_area_2') + '</td><td>' + t('cat_area_3') + '</td><td>' + t('cat_area_4') + '</td><td>' + t('cat_area_5') + '</td><td>' + t('cat_area_6') + '</td><td>' + t('cat_area_7') + '</td></tr>' +
            '<tr><td class="row-label">' + t('cat_distance') + '</td><td>' + t('cat_dist_0') + '</td><td>' + t('cat_dist_1') + '</td><td>' + t('cat_dist_2') + '</td><td>' + t('cat_dist_3') + '</td><td>' + t('cat_dist_4') + '</td><td>' + t('cat_dist_5') + '</td><td>' + t('cat_dist_6') + '</td><td>' + t('cat_dist_7') + '</td></tr>' +
            '<tr><td class="row-label">' + t('cat_range') + '</td><td>' + t('cat_range_0') + '</td><td>' + t('cat_range_1') + '</td><td>' + t('cat_range_2') + '</td><td>' + t('cat_range_3') + '</td><td>' + t('cat_range_4') + '</td><td>' + t('cat_range_5') + '</td><td>' + t('cat_range_6') + '</td><td>' + t('cat_range_7') + '</td></tr>' +
            '<tr><td class="row-label">' + t('cat_speed') + '</td><td>' + t('cat_speed_0') + '</td><td>' + t('cat_speed_1') + '</td><td>' + t('cat_speed_2') + '</td><td>' + t('cat_speed_3') + '</td><td>' + t('cat_speed_4') + '</td><td>' + t('cat_speed_5') + '</td><td>' + t('cat_speed_6') + '</td><td>' + t('cat_speed_7') + '</td></tr>' +
            '<tr><td class="row-label">' + t('cat_magnitude') + '</td><td>' + t('cat_mag_0') + '</td><td>' + t('cat_mag_1') + '</td><td>' + t('cat_mag_2') + '</td><td>' + t('cat_mag_3') + '</td><td>' + t('cat_mag_4') + '</td><td>' + t('cat_mag_5') + '</td><td>' + t('cat_mag_6') + '</td><td>' + t('cat_mag_7') + '</td></tr>' +
          '</tbody>' +
        '</table>' +
        '<div class="cat-guide-notes">' +
          '<p>' + t('cat_note_1') + '</p>' +
          '<p>' + t('cat_note_2') + '</p>' +
          '<p>' + t('cat_note_3') + '</p>' +
          '<p>' + t('cat_note_4') + '</p>' +
        '</div>' +
      '</div>' +
    '</div>';
  document.body.appendChild(overlay);
  document.getElementById('cat-guide-close').addEventListener('click', toggleCatGuide);
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) toggleCatGuide();
  });
}

// ════════════════════════════════════════════════════════════════════
// EXPANSION SYSTEM
// ════════════════════════════════════════════════════════════════════

var EXPANSIONS_KEY = 'cain_companion_expansions';

var EXPANSIONS = [
  { id: 'base', name: 'CAIN - Base Rules', description: 'Core rulebook v1.4 content.', descriptionPt: 'Conteúdo do Rulebook v1.4.', locked: true },
  { id: 'gff1', name: 'GFF-1', description: 'Virtue bond system. 6 mentor NPCs with unique high blasphemies.', descriptionPt: 'Sistema de Vínculos. 6 NPCs mentores com Altas Blasfêmias Únicas.' },
  { id: 'gff2', name: 'GFF-2', description: 'New Drifters for the GM.', descriptionPt: 'Novos Andarilhos para o GM.' },
  { id: 'gff3', name: 'GFF-3', description: 'New agendas (Cradle, Doll, Broken) and blasphemies (Tongue, Track, Wire, Mother).', descriptionPt: 'Novas agendas (Berço, Boneca, Quebrado) e blasfêmias (Língua, Track, Fio, Mãe).' },
  { id: 'gff4', name: 'GFF-4.1', description: 'Blasphemy Quirks - alternate passives and mutations for blasphemies.', descriptionPt: 'Peculiaridades de Blasfêmias - passivas alternativas e mutações para blasfêmias.' }
];

/** Get active expansion IDs from localStorage */
function getActiveExpansions() {
  try {
    var data = localStorage.getItem(EXPANSIONS_KEY);
    var active = data ? JSON.parse(data) : ['base'];
    // Always include base
    if (active.indexOf('base') === -1) active.push('base');
    return active;
  } catch (e) { return ['base']; }
}

/** Save active expansion IDs to localStorage */
function saveActiveExpansions(active) {
  localStorage.setItem(EXPANSIONS_KEY, JSON.stringify(active));
}

/** Check if a specific expansion is enabled */
function isExpansionEnabled(expId) {
  return getActiveExpansions().indexOf(expId) !== -1;
}

/** Check if an expansion is active */
function isExpansionActive(expansionId) {
  if (!expansionId || expansionId === 'base') return true;
  return getActiveExpansions().indexOf(expansionId) !== -1;
}

/** Check if a character can be accessed (all its required expansions are active) */
function canAccessCharacter(char) {
  if (!char.expansions || char.expansions.length === 0) return { ok: true, missing: [] };
  var active = getActiveExpansions();
  var missing = char.expansions.filter(function(exp) { return active.indexOf(exp) === -1; });
  return { ok: missing.length === 0, missing: missing };
}

/** Get expansion name by ID */
function getExpansionName(id) {
  var exp = EXPANSIONS.find(function(e) { return e.id === id; });
  return exp ? exp.name : id;
}

/** Add an expansion tag to a character (if not already present) */
function tagCharacterExpansion(char, expansionId) {
  if (!expansionId || expansionId === 'base') return;
  if (!char.expansions) char.expansions = [];
  if (char.expansions.indexOf(expansionId) === -1) {
    char.expansions.push(expansionId);
  }
}

/** Recalculate expansion tags based on what the character actually uses */
function recalcExpansionTags(char) {
  var needed = [];
  // GFF-1: needed if character has any virtue bonds with level > 0
  if (char.virtueBonds) {
    var hasBonds = false;
    VIRTUES.forEach(function(v) {
      if (char.virtueBonds[v.id] && char.virtueBonds[v.id] > 0) hasBonds = true;
    });
    if (hasBonds) needed.push('gff1');
  }
  // Future expansions: add checks here for blasphemies, agendas, etc. with expansion field
  (char.blasphemies || []).forEach(function(bl) {
    var blasData = BLASPHEMIES.find(function(b) { return b.id === bl.id; });
    if (blasData && blasData.expansion && needed.indexOf(blasData.expansion) === -1) needed.push(blasData.expansion);
  });
  if (char.agenda && char.agenda.id) {
    var agendaData = AGENDAS.find(function(a) { return a.id === char.agenda.id; });
    if (agendaData && agendaData.expansion && needed.indexOf(agendaData.expansion) === -1) needed.push(agendaData.expansion);
  }
  // GFF-4.1: needed if character has any quirks applied
  if (char.quirks) {
    var hasQuirks = Object.keys(char.quirks).some(function(k) { return char.quirks[k].length > 0; });
    if (hasQuirks && needed.indexOf('gff4') === -1) needed.push('gff4');
  }
  char.expansions = needed;
}

/** Filter data array by active expansions (items without expansion field or with active expansion pass) */
function filterByExpansion(arr) {
  var active = getActiveExpansions();
  return arr.filter(function(item) {
    return !item.expansion || active.indexOf(item.expansion) !== -1;
  });
}

/** Toggle expansion drawer */
function toggleExpansionDrawer() {
  var drawer = document.getElementById('expansion-drawer');
  if (drawer) {
    drawer.remove();
    // Re-render home to update blocked status
    var currentHash = (window.location.hash.slice(1) || 'home').split('/')[0];
    if (currentHash === 'home') renderHome();
    return;
  }
  var active = getActiveExpansions();
  drawer = document.createElement('div');
  drawer.id = 'expansion-drawer';
  drawer.className = 'expansion-drawer';
  drawer.innerHTML =
    '<div class="expansion-drawer-content">' +
      '<div class="expansion-drawer-header">' +
        '<h3>' + t('exp_title') + '</h3>' +
        '<button class="btn btn-tiny" id="exp-drawer-close">\u00D7</button>' +
      '</div>' +
      '<div class="expansion-list">' +
        EXPANSIONS.map(function(exp) {
          var isActive = active.indexOf(exp.id) !== -1;
          var isLocked = exp.locked;
          return '<label class="expansion-item ' + (isLocked ? 'locked' : '') + '">' +
            '<input type="checkbox" class="exp-checkbox" data-id="' + exp.id + '" ' + (isActive ? 'checked' : '') + ' ' + (isLocked ? 'disabled' : '') + '>' +
            '<div class="expansion-info">' +
              '<strong>' + exp.name + '</strong>' +
              '<p>' + (currentLang === 'pt' && exp.descriptionPt ? exp.descriptionPt : exp.description) + '</p>' +
            '</div>' +
          '</label>';
        }).join('') +
      '</div>' +
    '</div>';
  document.body.appendChild(drawer);

  document.getElementById('exp-drawer-close').addEventListener('click', toggleExpansionDrawer);

  // Checkbox changes
  drawer.querySelectorAll('.exp-checkbox:not([disabled])').forEach(function(cb) {
    cb.addEventListener('change', function() {
      var id = cb.dataset.id;
      var active = getActiveExpansions();
      if (cb.checked) {
        if (active.indexOf(id) === -1) active.push(id);
      } else {
        active = active.filter(function(a) { return a !== id; });
      }
      saveActiveExpansions(active);
    });
  });

  // Click outside to close
  drawer.addEventListener('click', function(e) {
    if (e.target === drawer) toggleExpansionDrawer();
  });
}

// ════════════════════════════════════════════════════════════════════
// DATA: Skills
// ════════════════════════════════════════════════════════════════════

// PT-BR translations for game content (descriptions, agenda items, etc.)
var PT_CONTENT = {
  // Agenda items & bolded items
  agendaItems: {
    doomed: { items: ['Demonstrar sua humanidade'], bolded: ['Demonstrar sua distância da humanidade'] },
    beast: { items: ['Entrar em uma briga'], bolded: ['Se conter'] },
    firebug: { items: ['Resolver problemas de forma criativa'], bolded: ['Escolher a solução mais simples'] },
    guardian: { items: ['Proteger os seus'], bolded: ['Não deixar ninguém para trás'] },
    loner: { items: ['Demonstrar sua habilidade superior'], bolded: ['Deixar a máscara escorregar'] },
    hardline: { items: ['Seguir ordens'], bolded: ['Desobedecer ordens'] },
    machine: { items: ['Priorizar o trabalho em detrimento das suas necessidades'], bolded: ['Fazer uma pausa'] },
    temperance: { items: ['Colocar as pessoas antes da missão'], bolded: ['Ferir alguém intencionalmente'] },
    torch: { items: ['Liderar o caminho'], bolded: ['Deixar que outro assuma a liderança'] },
    shadow: { items: ['Superar seu rival'], bolded: ['Deixar seu rival te superar'] },
    sorcerer: { items: ['Demonstrar exibições chamativas de poder'], bolded: ['Convidar a catástrofe'] },
    songbird: { items: ['Fazer alguém seguir suas ordens'], bolded: ['Fazer algo altruísta'] },
    departed: { items: [''], bolded: [''] },
    moth: { items: ['Descobrir verdades ocultas ou desconfortáveis sobre o mundo.'], bolded: ['Descobrir verdades ocultas ou desconfortáveis sobre você mesmo.'] },
    survivor: { items: [''], bolded: ['Sobreviver'] },
    demon: { items: ['Enriquecer-se'], bolded: ['Dar algo valioso'] },
    cradle: { items: ['Proteger seu protegido das consequências de suas ações.'], bolded: ['Deixar seu protegido sofrer.'] },
    doll: { items: ['Desistir de algo'], bolded: ['Voluntariamente fazer algo doloroso'] },
    broken: { items: ['Matar'], bolded: ['Matar'] }
  },
  // Agenda restrictions
  agendaRestrictions: {
    doomed: 'Você só pode escolher esta agenda se tiver uma marca de pecado. Se for sua primeira agenda, pode começar com uma marca de pecado à sua escolha (apenas localização, ainda role 1d6 para habilidade).',
    guardian: 'Você não recebe pagamento nem XP pelos mortos.',
    machine: 'Se seu grupo descansar, você pode escolher se excluir do descanso.',
    torch: null,
    shadow: 'Quando escolher esta agenda, escolha outro personagem como seu rival (o sentimento não precisa ser mútuo) no início de uma missão. Enquanto tiver habilidades de rival desta agenda, você deve escolher quem é seu rival.',
    songbird: 'Uma vez escolhida, só pode trocar esta agenda gastando dois avanços.',
    departed: 'Um personagem só pode escolher esta agenda se estiver verdadeira e completamente morto. Você recebe sua habilidade de graça.',
    survivor: 'Uma vez escolhida, só pode trocar esta agenda gastando dois avanços. Você recebe sua habilidade de graça.',
    demon: 'Você pode gastar scrip como pontos de kit.',
    cradle: 'Quando escolher esta agenda, escolha outro personagem como seu protegido. Pode trocar entre caçadas.'
  },
  // Ability descriptions
  abilities: {
    doomed_xenoflesh: "Ignore resultados '1' ao ganhar Pecado.",
    doomed_humanitys_last_breath: 'Escolha uma marca de pecado. Evolua essa marca. Ela não modifica mais testes de resistência.',
    doomed_quickening: 'Quando ganhar 2 ou mais Pecado como parte de uma ação, sua ação também ganha +1D.',
    doomed_sympathetic_mutation: 'Você pode sofrer 1d3 de pecado para conceder a um aliado os benefícios de qualquer habilidade de marca de pecado sua por uma cena.',
    doomed_metamorphosis: 'Entre missões ou ao descansar, ganhe 1 pecado para re-rolar a habilidade de uma de suas marcas de pecado.',
    beast_insects: 'Você tem +1D ao infligir dano ou violência contra oponentes humanos.',
    beast_ill_take_you_down: 'Recupere 1 pulso psíquico quando sofrer um ferimento, preencher um gancho ou sofrer uma aflição.',
    beast_rule_of_nature: 'Quando infligir violência com uma ação, se rolar dois ou mais 6s, a ação inflige +1 corte em talismãs e você recupera 1 pulso psíquico.',
    beast_red_muscle: 'Você pode sofrer 2 de estresse não-letal para ganhar +1D em qualquer rolagem violenta ou de força.',
    beast_bare_teeth: 'Com dois ou mais ferimentos ou aflições, não é mais difícil usar capacidades mundanas contra forças sobrenaturais e suas habilidades físicas são CAT 1/2 ao invés de CAT 0.',
    firebug_jack: 'No início de uma missão, escolha uma perícia em 0. Melhore para 1 pela duração desta missão.',
    firebug_always_a_way: 'Se não houver entrada ou saída, você encontra uma. Sempre pode passar, mas (Admin escolhe): é perigoso, só cabe uma pessoa, ou precisa deixar algo para trás.',
    firebug_oilfinger: 'Você começa uma missão com 1d3+1 Pontos de Kit extras.',
    firebug_extra_parts: 'Marque 1 PK para +1D em qualquer rolagem que envolva consertar, fabricar, desmontar ou modificar dispositivos ou máquinas.',
    firebug_weak_spot: 'Quando um aliado realiza ação violenta, conceda +1D e +1 corte em talismãs em caso de sucesso. Recarrega ao descansar.',
    guardian_iron_wall: 'Ao defender alguém em cena de conflito, transfira consequências do alvo para você. Da segunda vez na mesma cena, sofra 1d3 de estresse não-letal primeiro.',
    guardian_excessive_agony: 'Elimine 1 de estresse quando a pressão aumentar, se tiver mais de 3.',
    guardian_castle: 'Quando qualquer aliado sofrer um ferimento, elimine 1 de estresse e ganhe +1D na próxima ação.',
    guardian_centerweight: 'Ao descansar, aliados podem usar seus resultados de dados de descanso ao invés dos deles.',
    guardian_painkiller: 'Seu primeiro ferimento não reduz o estresse máximo.',
    loner_dust_to_dust: 'O estresse não se transfere mais quando você sofre um ferimento (excesso é perdido).',
    loner_silent_strike: 'Ganhe +1D em ações violentas contra alvos que não estão cientes da sua presença.',
    loner_ill_do_it_myself: 'Uma vez por cena, quando alguém falha, você pode intervir. Sofra 1d3+1 de estresse não-letal, mas role 1D e adicione ao resultado total.',
    loner_rook: 'Quando tiver sucesso ao ajudar um aliado, sofra 2 de estresse não-letal para ajudar outro aliado com a mesma ação.',
    loner_its_nothing: "Ignore um ferimento dizendo 'Não é Nada'. Ganhe o gancho 'Não é Nada'. Quando preencher, sofra morte instantânea que não pode ser ignorada.",
    hardline_black_suit: 'Ganhe +1D em ações para liderar, intimidar ou dar ordens a humanos comuns.',
    hardline_mea_culpa: 'Na primeira vez na caçada que sofrer ferimento ou aflição, alivie 1d3+1 de pecado.',
    hardline_eliminate_the_stain: 'Ganhe +1D e inflija +1 corte em talismãs na primeira vez contra pecados com metade ou menos do talismã de execução restante.',
    hardline_single_minded: 'Você só pode ser afetado por uma aflição no máximo (escolha qual manter).',
    hardline_by_the_book: 'Uma vez por caçada, ao testemunhar evidência do Domínio de um pecado, force o Admin a mostrar o texto exato das regras.',
    machine_the_work: 'Ganhe +1D em qualquer rolagem. Sofra 1 de estresse por cada vez que usou esta habilidade nesta missão. Não pode usar se descansar.',
    machine_brain_burst: 'Ao investigar, sofra 1 de estresse não-letal para re-rolar um dado na sua rolagem de ação. A nova rolagem é final.',
    machine_second_wind: 'Quando a pressão chegar a 4, elimine todo estresse ou remova uma aflição.',
    machine_overtime: 'Ganhe +1D em todas as ações de investigar/analisar/coletar informações por uma cena, mas todas outras atividades são difíceis até descansar.',
    machine_neat_little_universe: 'Duas vezes por caçada, fora de conflito, ajuste qualquer talismã seu ou de aliado em +1 ou -1.',
    temperance_healer: 'Na primeira vez que descansar na caçada, ganhe um dado de descanso extra.',
    temperance_focused: 'Uma vez por caçada, use um poder de blasfêmia que afete apenas você ou aliados sem gastar pulso psíquico, e ele ganha +1 CAT.',
    temperance_savior_complex: 'Ganhe +1D em ações para diretamente prevenir ou evitar dano a humanos.',
    temperance_care: 'Uma vez por caçada, fora de conflito, role e aplique um dado de descanso em você ou aliado próximo sem descansar.',
    temperance_gentleness: 'Por uma cena, sofra 1 menos de estresse. Quebra se tomar ação violenta ou danosa. Perca uso até descansar.',
    torch_joy_luck_wind_thrower: 'Quando rolar 0d para qualquer ação, nunca é difícil.',
    torch_hot_blooded: 'Sua primeira ação em cena de conflito ganha +1D e inflige +1 corte em talismãs.',
    torch_font_of_power: 'Uma vez por caçada, ganhe 1d3 pulsos psíquicos (pode exceder máximo). Até descansar, você não pode mais gastar pulsos, mas aliados podem gastar seus pulsos como se fossem deles.',
    torch_recollect: 'No final da sessão, descreva algo que outro personagem fez que te impressionou e dê a ele 1 XP. Personagens só ganham esse XP uma vez.',
    torch_strive: 'Uma vez por caçada, re-role completamente qualquer ação sua ou de aliado que acabou de acontecer. O segundo resultado é final.',
    shadow_catch_up: 'Se seu rival tem menos estresse quando pressão aumenta, elimine 1. Se tem mais pulsos, recupere 1 pulso.',
    shadow_synchronize: 'Ao ajudar seu rival, sofra 1 de estresse não-letal e ganhe +1D na ação de ajuda.',
    shadow_you_cant_die_now: 'Uma vez por caçada, se seu rival sofrer ferimento ou morte instantânea, sofra 2d3 de estresse para que ele ignore. Ele vai para 1 de estresse abaixo do máximo.',
    shadow_shadow_seed: 'Escolha um poder de blasfêmia do seu rival. Use-o nesta caçada, mas apenas com CAT 0 máximo.',
    shadow_pincer_technique: 'Ao trabalhar em equipe com seu rival, sofra 1 de estresse não-letal, mas re-role um dos dados uma vez, segundo resultado é final.',
    sorcerer_perfect_technique: 'Escolha um poder. Uma vez por caçada, aumente seu CAT em +1 por uma cena inteira ou dois turnos em conflito.',
    sorcerer_cantrip: 'Escolha uma habilidade de blasfêmia. Use-a duas vezes por caçada sem gastar pulso, mas com CAT 0 máximo.',
    sorcerer_finishing_move: 'Escolha um poder. Aumente dados e CAT em +1, mas depois não pode usar blasfêmias e tudo é difícil até descansar.',
    sorcerer_mimic_technique: 'Escolha um poder de qualquer Blasfêmia, sem ter essa blasfêmia.',
    sorcerer_weave: 'Ao usar blasfêmia, aumente o CAT da próxima blasfêmia de aliado contra o mesmo alvo em +1 e conceda +1D. Perca uso até descansar.',
    songbird_codependency: 'Quando alguém te ajudar, troque 1 de estresse (de você para ele ou vice-versa).',
    songbird_spiral: 'Você sempre sabe se alguém está mentindo para você, mas não a natureza da mentira.',
    songbird_strings: 'Ao descansar com um parceiro, ele adiciona +1 aos seus resultados de descanso. Até próximo descanso, force-o a trabalho em equipe ou ajuda uma vez.',
    songbird_white_fiber: 'Sofra 2 de estresse não-letal para ganhar +1D em qualquer rolagem para mentir ou manipular alguém.',
    songbird_fascination: 'Declare fascinação por outro personagem. Quando ele rolar 6 no risco, perca 1 de estresse. Quando rolar 1, ganhe 1 de estresse não-letal.',
    departed_that_terrible_weight: 'Uma vez por sessão, o personagem morto pode intervir quando um aliado faz uma rolagem, permitindo re-rolar toda a rolagem após ver o resultado. O segundo resultado é final.',
    moth_psyche_jewel: 'Na primeira vez na caçada que você ou aliado responder uma pergunta de trauma do Pecado, recupere 1 pulso psíquico, recupere 1 pecado e elimine 1 de estresse.',
    moth_alienation: 'Seu limite de pecado aumenta em +2.',
    moth_rapture: 'Elimine 1 de estresse ao sofrer uma aflição, ferimento ou gancho.',
    moth_larval: 'Se terminar missão com 7+ de pecado, ganhe 1 XP. Se sofrer inundação de pecado, ganhe 1 XP.',
    moth_unveil: "Pergunte ao Admin 'Do que essa pessoa tem medo?'. Ganhe +1D ao agir nas respostas pelo resto da cena. Perca uso até descansar.",
    survivor_will_to_live: '+1 de estresse máximo. 1 em 6 de chance de ignorar morte instantânea (role 1d6).',
    demon_black_market_stims: 'Você pode gastar até 2 scrip por missão como pulsos psíquicos.',
    demon_supplier_connections: 'Você ganha 1 scrip de desconto em todos os itens de kit e estéticos, com mínimo de 1. O desconto se aplica a todos os itens de CAT 4+.',
    demon_shady_lender: 'Entre missões, você pode escolher ganhar 1d3 scrip, mas começa a próxima missão com 1 ferimento.',
    demon_heartless: 'Você ganha +1 scrip por executar pecados.',
    demon_spotless: 'Uma vez por missão, você pode destruir uma expansão estética de kit que possua valendo 3 ou mais scrip ao invés de sofrer um ferimento.',
    cradle_matriphagy: 'Seu protegido pode causar 3 de estresse não-letal mas irredutível em você no lugar de um pulso psíquico, desde que esteja a curta distância.',
    cradle_coddle: 'Uma vez por cena de conflito, você pode tomar a ação de defender ou ajudar gratuitamente, visando apenas seu protegido. Não gasta sua ação do turno.',
    cradle_fragile: 'Você ganha +1 estresse máximo, mas não pode mais limpar estresse por qualquer meio exceto sofrer um ferimento.',
    cradle_sin_eater: 'Uma vez por caçada, ao dar um gesto carinhoso ao seu protegido (sorriso, abraço, carinho na cabeça), transfira qualquer quantidade de estresse e até uma aflição ou gancho dele para você. Pode causar ferimento ou te matar.',
    cradle_offering: 'Enquanto a curta distância do protegido, ganhe 1d3+1 pecado para prevenir qualquer ferimento nele, ou 1d6+2 para prevenir morte instantânea. Cada um só uma vez por caçada. Seu protegido fica com 1 de estresse abaixo do máximo. Descreva como evita o desastre.',
    doll_flop: 'Uma vez por caçada, jogue-se no chão. Neste estado, humanos, pecados e exorcistas te tratam como morto, doente ou inconsciente. Não te alvejarão em conflito. Termina ao fazer qualquer ação que requer rolagem, ou no fim da cena. Só funciona uma vez no mesmo alvo.',
    doll_soft: 'Role -1d para ações difíceis (mesmo que fiquem mais fáceis depois), mas sempre ganhe +1d para rolagens normais (ações que não são difíceis ou arriscadas).',
    doll_pincushion: 'Exorcistas a curta distância podem sempre sofrer ferimentos ou aflições no seu lugar. Se o fizerem, ganham 1 XP, mas não mais que uma vez por missão.',
    doll_tagalong: 'Quando participar de trabalho em equipe, o líder sempre sofre 2 de estresse não-letal, mas sempre ganha +1D.',
    doll_daydream: 'No início de qualquer cena de conflito, pode apagar até 4 de estresse. Se o fizer, role no máximo 1d em ações pelo resto da cena.',
    broken_ripped: 'Após a pressão aumentar durante uma missão, marque 1d3 caixas de pecado. Quando sofrer inundação de pecado, pode sempre escolher entre perder e manter o controle. <b>Aposente seu exorcista</b> após a missão atual. Enfrente execução ou exílio. <b>Não há mais nada para você aqui.</b>'
  },
  // Blasphemy descriptions
  blasphemyDescs: {
    tension: 'Projetar um campo psíquico pontual de incrível densidade e durabilidade.',
    ardence: 'Manipular energia potencial em rajadas de calor ou frio extremo.',
    flux: 'Manipular a direção e o fluxo do próprio tempo.',
    vector: 'Imbuir objetos ou seres com rajadas repentinas de velocidade.',
    gate: 'Manipular o espaço como um escultor trabalha com argila.',
    smother: 'Suprimir propriedades inatas do universo. Mentir para Deus.',
    whisper: 'Sua sombra é animada e faminta. Ela conhece o futuro.',
    edit: 'Filtrar os fios de possibilidades e convidá-los a se fundir com a realidade.',
    bind: 'Vincular pecados fracos ao seu serviço como servos ou armas.',
    palace: 'O conteúdo da sua mente é tão sólido quanto a realidade.',
    jaunt: 'Separar corpo e alma com uma faca de esculpir.',
    sympathy: 'Humanos deixam impressões em tudo que tocam. Você pode fazer mais.',
    tongue: 'Sua palavra é lei.',
    playlist: 'Testando, um dois, um dois.',
    wire: 'São como veias, se você parar pra pensar. Você até consegue ouvir o batimento cardíaco.',
    mother: 'ELA NÃO SAI DA MINHA CABEÇA.'
  },
  // Blasphemy flavor texts
  flavors: {
    tension: 'Fato: Usuários de Tensão têm alta probabilidade de experienciar episódios de síndrome de "trancado por dentro" pelo menos semi-regularmente até conseguirem dominar seus poderes. Veja manual de campo.',
    ardence: 'Fato: O uso de Ardor seria considerado desumano contra soldados humanos.',
    flux: 'Fato: Este poder é relativamente novo e, até o momento, é pouco compreendido. Felizmente eventos temporais são rigorosamente regulados pela TEMERITY através de um Pecado cativo chamado o Fuso.',
    vector: 'Fato: Tem a maior taxa de fatalidade entre usuários não-treinados, que geralmente morrem de queda.',
    gate: 'ALERTA: Abuso pode levar a perda extrema de pessoal. Use com cautela.',
    smother: '...compensado pela utilidade, portanto usuários desta blasfêmia são bons candidatos para transplante de órgãos (veja referência TM 4456).',
    whisper: 'Este alter ego geralmente se manifesta na puberdade e apenas você pode vê-lo, permanecendo invisível mesmo para outros exorcistas. A crença comum sustenta que a "sombra" vista é um componente da sua própria morte futura.',
    edit: 'Fato: A doutrina da CAIN declara claramente que a existência de realidades "alternativas" é atualmente não comprovada.',
    bind: 'Código: 864 - Vinculação é uma arte antiga mas herética punível com execução instantânea. Felizmente, a CAIN fornece uma estadia indefinida para vinculadores que permanecem sob seu emprego.',
    palace: 'Manifestação corpórea de palácio por exorcistas ainda está sob investigação pela TEMERITY.',
    jaunt: 'Usuários de Assombração são os mais propensos de todos os exorcistas a "esvaziar" durante o sono e deixar uma casca vazia. Esta ocorrência é muito rara mas sua causa é desconhecida e é 100% fatal.',
    sympathy: 'PSICOMETRIA É PROIBIDA NO CAMPUS - CASTLE REF 0094',
    tongue: "...enraizado no centro de linguagem do cérebro, sugerindo conexões com manifestações registradas de 'fala extática' e 'linguagem divina'.<br><br>Manifestar blasfêmias de Tongue requer condicionamento especial de terapia da fala X285 e sistema de contenção 25 de acordo com o Código Castle para evitar exposição acidental. Pode ser necessário manter silêncio por longos períodos de tempo. Sua língua também pode ficar 'preta como piche' ou 'preta como tinta', ou se tornar bifurcada. Isso é normal.",
    playlist: 'Fato: Os objetos amaldiçoados avulsos ou residuais criados por este poder são curados no arquivo 52 da Temerity. A coleção é bastante extensa e tem seguidores bastante fervorosos entre certas subseções da equipe da CAIN.',
    wire: 'Fato: FIO foi descoberto pela CAIN apenas nos últimos dois anos, mas a organização o compreende razoavelmente bem. Usuários podem desenvolver a habilidade de "ouvir" linhas telefônicas e sinais elétricos. Modificação corporal involuntária através deste poder é comum. Não se alarme. Retornará ao normal em 1-2 horas.',
    mother: "...esforços contínuos para conter Mother estão mostrando eficácia reduzida (tão alta quanto [CENSURADO] ano após ano). Portanto, o diretor do OS Alhambra faz uma recomendação firme para implementar doutrina 8 ([CENSURADO]) dadas as condições operacionais atuais.<br><br>07-04-1998<br><br>Pedido negado. A eficácia HOP dos ativos infectados de Mother supera seu risco potencial, apesar da antipatia crescente da Casa em relação a ela. Continuaremos a coletá-los e treiná-los quando possível, e despachar execução instantânea quando não for possível recuperar ativos com segurança.<br><br>Assim na terra, como no céu.<br><br>O menor primeiro, <b style=\"font-size:1.1em\">F. ESPADA</b><br><br>Diretor do Castle F. Espada"
  },
  // Blasphemy passive descriptions
  passives: {
    tension_iron_soul: "Quando você preencheria seu talismã de execução, você pode rolar 1d6. Em 4+, vá para 1 de estresse abaixo do máximo e ignore qualquer excesso, então perca o uso desta passiva até descansar.",
    ardence_inner_furnace: "Você pode ganhar o gancho Poder Instável como parte do uso de qualquer poder Ardor para aumentar o CAT do poder em até +2. Quando o gancho se preencher, você queima por dentro, sofrendo um ferimento e encerrando o gancho. Se este ferimento te mataria, você explode em uma área igual ao seu CAT, aniquilando a si mesmo e tudo em seu interior em uma explosão massiva. Nada pode sobreviver a isso.",
    flux_steal_time: "Uma vez por descanso por caçada, qualquer um do seu grupo pode re-rolar todos os seus dados de descanso, usando o segundo resultado como final. Isso pode causar déjà vu neles. Por favor, os tranquilize.",
    flux_temporal_instability: "Muitos dos seus poderes de Fluxo te dão este gancho. Quando o gancho se resolver, role 1d6:<br>•  1. Adicione permanentemente à sua agenda 'Provar que você é o verdadeiro você.' Se ganhar este resultado novamente, sofra imediatamente inundação de pecado.<br>•  2. Ferimentos misteriosos se abrem. Você sofre um ferimento, que pode te matar.<br>•  3. Você desaparece até descansar. Retorna se houver cena de conflito (e imediatamente se uma estiver em andamento). Não tem memória de onde estava. Ao retornar, sofra 2 de estresse.<br>•  4. Você está vestindo roupas de outra pessoa. Apague todo seu kit esta missão, mas recupere quaisquer pontos de kit gastos.<br>•  5. Seu corpo está diferente. Pelo restante desta missão, escolha uma perícia com 1 ou mais dados. Ela agora rola 0d. Após a missão, você tem tempo para treinar e se acostumar, revertendo o efeito, mantendo mudanças físicas.<br>•  6. Seu rosto parece um pouco diferente. As mudanças são permanentes.",
    vector_brake: "Remova automaticamente a velocidade de todos os projéteis que te atingiriam, sofrendo -1 de estresse deles.",
    gate_pocket: "Você pode encaixar uma fenda comprimida no espaço em uma peça de roupa que está vestindo.<br>•  Você ganha +1 PK.<br>•  Pode guardar ou recuperar itens dentro do seu bolso, que pode conter um total combinado de itens no valor de até 3 PK. Uma vez dentro, os itens são armazenados em um espaço extra-dimensional, escondidos e seguros, não importa seu tamanho. O bolso está preso às suas roupas e se forem destruídas, os itens dentro saltam para fora.",
    smother_absentia: "Você pode melhorar o CAT de qualquer um dos seus poderes Sufoco em +2 quando usá-los, até um máximo de CAT 7. No entanto, quando o fizer, ganhe o Gancho Absentia.<br><br><b>GANCHO ABSENTIA</b>: Você pode ganhar este gancho com sua passiva. Se este gancho se preencher, você sofre um ferimento e apaga por alguns momentos. Quando acordar, está faltando uma parte do corpo (role 1d6). Ela simplesmente desaparece (de forma limpa) como se nunca tivesse existido, deixando um toco ou buraco. Não volta, mesmo se curar o ferimento. Se não tiver mais partes para perder (quando rolar), reduza o resultado em 1. Se o resultado for 0, você perde a cabeça e sofre morte instantânea (grotesca). Partes faltantes podem tornar algumas rolagens difíceis ou arriscadas, dependendo da situação. Você se ajusta a qualquer deficiência após a missão, sem mais efeitos.<br>•  1. Olho<br>•  2. Nariz<br>•  3. Orelha<br>•  4. Dedo da mão<br>•  5. Dedo do pé<br>•  6. Nada",
    whisper_shadow: "Você abriga um ser separado que te segue por toda parte, mesmo quando dorme.<br><br><b>A SOMBRA</b> é intangível e invisível para todos, mesmo os psiquicamente sensíveis. Ela só pode interagir fracamente com o mundo físico e tem sua própria mente e sentidos. Pode se mover a aproximadamente curta distância de você. Pode passar por paredes e superfícies facilmente mas recua para dentro do seu corpo em luz forte, impedindo-a de fazer qualquer coisa.<br><br>Você pode falar com ela telepaticamente, mas conversar com ela é perigoso e causa 1 de estresse após qualquer interação terminar. Ela não tem obrigação de dizer a verdade a menos que você use seus poderes.<br><br>Você pode falar com ela seguramente usando suas habilidades, e ela conhece o futuro. O Admin responderá por ela.",
    edit_mimic: "Você pode alterar coisas menores sobre sua aparência. Pode mudar qualquer um dos seguintes sobre si mesmo ao descansar, dentro de uma variação do seu corpo original:<br>•  Traços corporais como altura e peso.<br>•  Estética como traços faciais, cor de pele, cabelo, apresentação de gênero.<br>•  Idade, de 13 até 88.<br><br>Você sempre parece vagamente similar, como um parente distante de si mesmo. Suas roupas sempre mudam para te servir, embora não possa alterá-las.<br><br>Isso não muda nada sobre suas perícias ou habilidade geral, e também não pode restaurar partes do corpo faltantes ou esconder marcas de pecado ou cicatrizes.",
    bind_sin_binding: "Você tem a habilidade proibida de vincular Pecados. Você tem a essência obediente de um pecado menor vinculado a você, sob seu controle.<br><br>Seu <b>PECADO VINCULADO</b> é animalesco em forma e habilidade — você pode determinar que forma ele assume. Ele pode entender linguagem mas não pode falar, e é invisível para humanos.<br>•  Pode te seguir a curta distância, seguir ordens simples, e usa suas perícias para fazer qualquer coisa. Suas capacidades gerais são CAT 0.<br>•  Se sofrer qualquer estresse, é banido pelo restante da cena, porém você pode psiquicamente absorver todo estresse sofrido por ele para prevenir este efeito.<br>•  Em uma cena de conflito, você pode sacrificar sua capacidade de agir no seu turno para permitir que seu pecado aja no lugar, dando-lhe comandos. Caso contrário, ele não age independentemente nessas cenas.",
    palace_sanctum: "Você e aliados que descansam com você podem entrar no seu palácio psíquico enquanto descansam. Isso melhora as rolagens de descanso de você e de um aliado à sua escolha descansando com você em +1.<br>•  O palácio é uma projeção mental, um espaço onírico que assume a forma de uma grande casa, residência ou mansão em um local de sua escolha. Andar para fora das dependências simplesmente te retorna ao local. Como um fenômeno puramente psíquico, você pode controlar sua aparência e decoração.<br>•  Sofrer dano em um palácio instantaneamente expulsa a pessoa, acordando-a, ao invés de causar dano real. Visitantes podem sair a qualquer momento.<br>•  Entrar no palácio mentalmente requer apenas fechar os olhos e se concentrar, deixando o corpo externo indefeso e insensato. Pode ser feito por você a qualquer momento, e por seus aliados descansando com você, ou com seus poderes.",
    jaunt_ghostwire: "Você pode unir sua mente telepaticamente com um número de outras pessoas voluntárias que toque igual a CAT [CALC:CAT]. Enquanto a longa distância um do outro, podem falar telepaticamente e sentir o estado emocional ambiente um do outro. Este efeito dura até você usá-lo novamente, até alguém ficar inconsciente, ou até você ou outra pessoa fechar a conexão.",
    sympathy_resonance: "No início da missão, role na tabela de ressonância. Role 1d3, depois 1d6, e confira as tabelas de ressonância. Quando fizer uma rolagem de ação e estiver usando um item com o qual é ressonante, ganhe +1D de bônus. Pode gastar um pulso psíquico a qualquer momento para rolar uma ressonância adicional. Pode manter até três ao mesmo tempo, e só se beneficiar de uma por vez.<br><br><b>Ressonâncias</b> (Role 1d3, depois 1d6):<table class=\"virtue-rupture-table\"><tbody><tr><td class=\"rupture-duration\">11</td><td class=\"rupture-cost\">Telefones</td><td class=\"rupture-duration\">21</td><td class=\"rupture-cost\">Bolas</td><td class=\"rupture-duration\">31</td><td class=\"rupture-cost\">Cordas</td></tr><tr><td class=\"rupture-duration\">12</td><td class=\"rupture-cost\">Luzes</td><td class=\"rupture-duration\">22</td><td class=\"rupture-cost\">Armas de Fogo</td><td class=\"rupture-duration\">32</td><td class=\"rupture-cost\">Martelos</td></tr><tr><td class=\"rupture-duration\">13</td><td class=\"rupture-cost\">Facas</td><td class=\"rupture-duration\">23</td><td class=\"rupture-cost\">Canecas</td><td class=\"rupture-duration\">33</td><td class=\"rupture-cost\">Carros</td></tr><tr><td class=\"rupture-duration\">14</td><td class=\"rupture-cost\">Chaves</td><td class=\"rupture-duration\">24</td><td class=\"rupture-cost\">Computadores</td><td class=\"rupture-duration\">34</td><td class=\"rupture-cost\">Portas</td></tr><tr><td class=\"rupture-duration\">15</td><td class=\"rupture-cost\">Livros</td><td class=\"rupture-duration\">25</td><td class=\"rupture-cost\">Sapatos</td><td class=\"rupture-duration\">35</td><td class=\"rupture-cost\">Bolsas</td></tr><tr><td class=\"rupture-duration\">16</td><td class=\"rupture-cost\">Tacos de Beisebol</td><td class=\"rupture-duration\">26</td><td class=\"rupture-cost\">Ferramentas Elétricas</td><td class=\"rupture-duration\">36</td><td class=\"rupture-cost\">Luvas</td></tr></tbody></table>",
    tongue_the_word: "Seus poderes não têm efeito se você não puder falar, ou se o som estiver suprimido de alguma forma. Usar o mesmo poder desta blasfêmia mais de uma vez antes de descansar tem efeitos crescentes (não opcionais).<br>•  Segunda vez: +1 CAT (mín CAT 2), sofra 1 de estresse irredutível.<br>•  Terceira vez: +2 CAT (mín CAT 3, máx CAT 7), +1D, sofra 3 de estresse irredutível, qualquer um a curta distância sofre a aflição ensurdecido pelo resto da caçada.<br>•  Quarta vez: Poder resolve em CAT 7, não role (sucessos automáticos). Após, sofra morte instantânea. Qualquer um a curta distância fica permanentemente ensurdecido.",
    playlist_playlist: "Você tem um poderoso objeto amaldiçoado, que é o foco dos seus poderes. É um player de música, tipicamente um toca-fitas ou CD player com fones acoplados. Não gasta PK, e você pode formá-lo e reformá-lo sobrenaturalmente em suas mãos à vontade. Faça uma playlist (real) de 6 músicas no início de cada caçada. Alguns dos seus poderes usam esta playlist. Qualquer música que você tocar desta playlist pode ser ouvida diegeticamente (no jogo) se desejar. Parece vir de um local visível a curta distância, seu player, ou de lugar nenhum em particular (como uma trilha sonora), e pode ligar e desligar à vontade.",
    wire_main_artery: "Você tem um celular com funções melhores (acesso à internet sem fio). Não gasta PK. Pode produzi-lo ou removê-lo à vontade, formando-o de energia psíquica, mesmo se perdê-lo.",
    mother_knows_best: "Quando sofrer inundação de pecado, pode ganhar uma <b>Marca de Mother</b> ao invés de uma marca de pecado regular, e rolar 2d6, escolhendo o menor, se escolher manter o controle.<br><br><b>Marca de Mother</b><br><br>Uma Marca de Mother não reduz o limite de inundação de pecado, mas ainda conta como marca de pecado em todos os outros aspectos. Não tem outros efeitos de gameplay. Role 1d6 para seu aspecto. Pode ganhar a mesma marca mais de uma vez.<br>•  1. <b>Novo olho</b> no centro da testa. Olha ao redor sozinho. Você não pode ver através dele. <i>Não é seu.</i><br>•  2. <b>Grande mancha de pele ou cabelo</b> perde toda cor, depois ganha listras em faixas.<br>•  3. <b>Nova pupila</b> no olho.<br>•  4. <b>Nova língua</b>.<br>•  5. <b>Novo membro</b>. Alongado e com articulação dupla.<br>•  6. <b>Padrões espiralados</b>, distorcendo pele e músculo. Padrões mudam e se deslocam com o tempo.",
    // Quirk passives (GFF-4.1)
    steel_soul: "Você se especializa em projetar campos de tensão sobre armas brancas. Ganha o poder Severance gratuitamente (mesmo além do limite de 5 poderes). Sempre o usa com +1 CAT. Porém, só pode usar Severance enquanto empunhar uma arma branca em uma ou ambas as mãos. Adicionalmente, pode projetar uma força de corte psíquica a curta distância rolando PSIQUE. Não custa pulso psíquico mas não tem força suficiente para causar dano significativo - suficiente para cortar uma tira, corda, ou causar cortes menores.",
    silver_soul: "Seu corpo é infundido com campos psíquicos que são mais fortes quando segue suas convicções, e mais fracos quando não segue. Quando terminar uma cena de conflito, automaticamente apague 1 de estresse se seguiu qualquer item de agenda nessa cena. Se não seguiu nenhum, ganhe 2 de estresse não-letal ao invés.",
    lead_soul: "Seu corpo é imbuído de campos de tensão que te tornam extremamente denso, pesado e resistente. Seu peso é triplicado e apenas forças 2 categorias acima da sua podem te mover contra sua vontade. Seus golpes desarmados contam como armas de serviço (e podem ser melhorados). Além disso, só pode sofrer no máximo 1 de estresse por quedas ou impactos de veículos ou objetos, independente da categoria.<br><br>Em troca, ações que requerem que se mova rapidamente são difíceis para você por padrão.",
    clockstopper: "Pode usar o poder Stop sem gastar pulsos psíquicos, durando um minuto inteiro, e não causa instabilidade temporal. Usar o poder desta forma 'rouba tempo' da sua expectativa de vida e te envelhece sobrenaturalmente.<br><br>Desenhe um relógio na ficha, começando ao meio-dia, então avance o tempo em 1d3 horas. Também avance 1 hora se sofrer inundação de pecado, ou pode avançar quando ganharia instabilidade temporal (1 hora por 1 instabilidade temporal). Este relógio não pode ser afetado de outra forma.<br>•  12-17h: envelhece 1d3 anos.<br>•  18-21h: envelhece 1d6+2 anos.<br>•  22-00h: envelhece 2d6+8 anos.<br><br>Não afeta suas habilidades. À meia-noite, você morre de velhice (não pode ser ignorado).",
    timesplitter: "Uma vez por caçada, sem gastar pulso psíquico, pode causar uma fratura temporal ao realizar qualquer curso de ação. Esta fratura termina quando uma rolagem de ação for feita, quando morreria ou sofreria inundação de pecado, ou após exatamente 777 segundos na ficção.<br><br>Esta atividade ocorre em uma linha temporal alternativa, onde tudo é exatamente igual. Quando a fratura expira, você reverte para a linha temporal principal, desfazendo todos os resultados, recursos gastos, dano sofrido ou consequências, mas mantendo qualquer conhecimento ou memória da linha alternativa.<br><br>Você ou aliado pode ganhar +1D na próxima rolagem que aproveite essa informação. Então jogue normalmente.",
    void_furnace: "Seus poderes focam no frio no fim do universo, o vazio insondável da entropia. Isso altera o seguinte:<br>•  Palidez: Você é sempre frio ao toque e não pode ser aquecido. Não sofre efeitos negativos ou dano por frio (mesmo extremo), mas ainda sente. Subtraia 1 de todas rolagens de descanso se a área não for quente.<br>•  Afinidade com o Vácuo: Nenhum poder seu pode produzir calor.<br>•  Ascensão do Abismo: Seus poderes desta blasfêmia aumentam em potência quanto mais perto da morte. Ganham +1 CAT em todas as capacidades se tiver um ferimento, +1 CAT adicional se tiver dois ou mais, +1 CAT adicional se outro exorcista morreu nesta missão.<br>•  Colapso: Se morrer, seu corpo congela e começa a colapsar em um não-espaço. Tocá-lo sem proteção causa dano extremo pelo frio (3-4 estresse). Requer remoção especial pela CAIN, portanto não pode ser recuperado por companheiros.<br>•  Troca Fria: Ao invés de Fury, pode escolher Black Matter. Ao invés de Sabre pode escolher Nihil.",
    axis: "Seus poderes dependem de velocidade rotacional.<br><br><b>Inscrever Eixo</b>: Os poderes Fling e Current desta blasfêmia movem coisas no sentido horário ou anti-horário ao seu redor ou um ponto à mão, ao invés de em linha reta. O alcance dessas habilidades se torna o raio deste caminho circular.<br><br><b>Chakra Sagrado</b>: Pode rolar 1d6 quando um objeto ou projétil igual ou menor que seu CAT te atingiria. Se rolar 4+, ele orbita inofensivamente ao seu redor, causando máximo de 1 de estresse. Se bem-sucedido, perca o uso desta passiva até descansar.",
    rail: "Ao se mover, automaticamente aumenta sua própria velocidade. Todo seu movimento (não concedido a outros) é +1 CAT maior, incluindo movimento sem poderes. Pode 'patinar' em uma bolha de ar vetorizado sob seus pés, permitindo mover-se sobre água ou superfícies escorregadias.<br><br>Porém, nenhum dos seus poderes funciona se não puder se mover enquanto os usa.",
    taboo: "Certas palavras são proibidas para você. Quando você, personagem ou jogador, falar essas palavras (mesmo inadvertidamente) em qualquer idioma e em qualquer voz mais alta que um sussurro, resolva poderes ativados por sua fala, então inflija uma onda de choque destrutiva sobrenatural em tudo exceto você em uma área CAT+1 [CAT+1:area] centrada em você (role PSIQUE para efeitos, incluindo dano), e ensurdeça temporariamente todos na área. Sua voz é destruída e seu personagem não pode falar ou usar poderes de qualquer blasfêmia até descansar.<br><br>Palavras Proibidas: Sin, Cain, o nome de quaisquer blasfêmias ou poderes de blasfêmia incluindo os seus, o nome de qualquer pecado ou tipo de pecado (Se você não souber que uma palavra é o nome de uma Blasfêmia/Poder ou Nome/Tipo de Pecado, não ativa Taboo).",
    catch_vibe: "Sua playlist inicial é menor (4 faixas). Porém, pode adicionar ou trocar qualquer faixa de música (real) tocada durante a sessão por você, seu GM, ou qualquer jogador na sua playlist ativa pelo restante da caçada, ou qualquer faixa tocada diegeticamente (no jogo). Pode chegar até 10 faixas.",
    stroll: "Uma vez por cena, sem gastar pulso psíquico, pode tentar se teleportar para um ponto a curta distância que possa ver (mesmo parcialmente) com espaço suficiente, rolando 1d6. Em 3+, é bem-sucedido. Em 1-2, se teleporta de qualquer forma para um ponto ao alcance, mas o Admin decide onde.",
    rummage: "Uma vez por cena, pode gastar 1 PK para puxar um item aleatório de um espaço onde um item poderia ser guardado (roupa, bolso, gaveta, etc). Só funciona se não estiver olhando enquanto puxa. O item pode não caber logicamente no espaço, mas sai assim mesmo. Role 1d6, então o Admin escolhe algo da lista rolada.<br>•  1. Caneta tinteiro, Granada viva, Luvas de couro, Isqueiro (pequeno), Maço de cigarros (2 faltando), Carregador de celular.<br>•  2. Rolo de moedas, Pé de cabra, Grampeador, Martelo de unha, Filmadora (1 hora de fita), Protetor labial.<br>•  3. Revólver (descarregado), dois cigarros, Fotografia desbotada, Manual de instruções para montar móveis (em sueco), Mapa da área (dobrado, bem usado, em sueco), Pacote grande de balas de caramelo.<br>•  4. Celular (10% bateria), Grosso maço de papel de impressora, Grande quantidade de dinheiro, Garrafa cheia de vinho, Machado de incêndio, Caixa enorme de pregos.<br>•  5. Chiclete, Batom, Caneca de café (novelty), Carta dobrada, Chapéu (apropriado à situação), Pente de munição 9mm para revólver.<br>•  6. Chave útil, Canivete, Isqueiro (grande, novelty), Bicicleta (dobrável), Dicionário para traduzir sueco, dado de seis lados.",
    digit: "Pode instantaneamente (e limpamente) perder um dedo para ganhar +1D e +1 CAT em qualquer poder quando usá-lo. Desaparece como se cortado há muito tempo. Role 1d6 (2-3: mão esquerda, 4-5: mão direita).<br><br>Se acabar dedos em uma mão, perde da outra automaticamente. Se rolar 1, perde outro dedo e rola novamente (pode continuar!). Se rolar 6, escolhe qual mão.<br><br>Ganhe -1D em rolagens que requerem usar a mão afetada até a próxima caçada, quando tiver tempo para se ajustar. Se não tiver mais dedos, perde a cabeça e sofre morte instantânea (grotesca), que não pode ser ignorada.",
    ban: "Ganhe o poder Abstract desta Blasfêmia gratuitamente (mesmo além do limite de 5 poderes). Uma vez por caçada, pode usá-lo para afetar um único humano ou exorcista, deixando-o um borrão irreconhecível e impedindo-o de agir. Recuperam se sofrerem dano ou a cena passar.<br><br>Role PSIQUE para efeitos e apenas gaste pulso em sucesso. Ganhe ou conceda +1D na próxima ação aproveitando isso normalmente.",
    scenery: "Uma vez por cena, ao usar qualquer poder desta blasfêmia, se puder se inspirar em uma obra de arte próxima, não custa pulso psíquico. A mesma obra não funciona duas vezes na mesma caçada, e a qualidade do resultado depende da qualidade da arte.",
    alter: "Quando descansar ou dormir, você desaparece e é substituído por uma versão diferente de si com memórias similares. Estas versões rotacionam de outra realidade onde este poder foi ativado. Sua aparência muda como se usasse a passiva Mimic. Escolha um:<br>• Está segurando algo pequeno mas útil (ferramenta, arma, chave, mapa).<br>• Tem memórias vagas de informação pertinente à investigação atual. Pergunte ao GM uma pergunta de sim ou não sobre a caçada atual e receba resposta verdadeira.<br>• Está levemente menos estressado (-1 estresse) que sua versão atual.",
    the_future_rules: "Você não pode morrer, exceto por causas não-ignoráveis. Se morreria, miraculosamente sobrevive de forma improvável, desmaia, e recobra consciência no início da próxima cena com 1 ferimento restante e metade do estresse.<br><br>Porém, role 1d6 no fim de cada missão completada. Em 1, presságio de morte se instala, e fica certo que a próxima missão é a última. Aumente a faixa deste número em +1 por missão que não ativa (então na próxima seria 1-2).<br><br>Enquanto afetado pelo presságio, perde a capacidade de ignorar morte e sofre morte instantânea ao sofrer um ferimento. Pode desafiar este destino normalmente.",
    sin_strike: "Pode comandar um pecado ativo a atacar gastando um pulso psíquico desde que ambos seu pecado e o alvo estejam ao alcance, e possa se comunicar com ele. Role PSIQUE para seus efeitos. O ataque tem potência sobrenatural.",
    sin_evolve: "Seus pecados vinculados aumentam em habilidade conforme ganha categoria.<br>•  CAT 2+: Seus pecados ganham a habilidade de falar e desenvolvem inteligência humanoide. Apenas psiquicamente sensíveis podem ouvi-los.<br>•  CAT 3+: Podem assumir forma humanoide, ou animal maior, ou alternar entre as formas.<br>•  CAT 4+: Podem aparecer visíveis e audíveis para humanos. Humanos sem graça tipicamente acham traumático (role PSIQUE).<br>•  CAT 5+: Pode ter dois pecados ativos ao mesmo tempo. Qualquer ação deve se aplicar a um ou outro. Falhar em absorver estresse por uma ação banir ambos.",
    menagerie: "Quando derrotar um pecado durante uma caçada, pode vinculá-lo como novo pecado vinculado durante um descanso. Aplica-se mesmo para pecados menores ou inimigos do tipo 'pecado'. Um pecado cativo é mecanicamente idêntico ao original mas pode diferir em estética e personalidade. Pode trocar seu pecado ativo, incluindo o original, e manter até seis. Inativos retraem para estado dormente dentro da sua semente de pecado.",
    wretched_host: "Você não tem um pecado vinculado. Ao invés, é um ex-hospedeiro tipo II, onde o pecado está fundido à sua carne e é parte de você.<br><br>Ganha o poder de blasfêmia Surrender gratuitamente, ele perde a tag charm, e seus efeitos podem acumular até três vezes em você. Ao invés de custar pulso psíquico, sempre custa 1 pecado para ativar.<br><br>Todos os poderes que se aplicariam ao seu pecado se aplicam a você, e te transformam fisicamente.",
    ten_thousand_sword_king: "Se tiver a blasfêmia Bind e estiver CAT 5 ou à beira da morte, pode clamar o azul infinito. Invocar o Rei inicia imediatamente uma força apocalíptica em uma área do tamanho de uma cidade (CAT 5), centrada em você. Pecados e exorcistas na área, incluindo você, rolam 1d6 e somam sua categoria. Se o resultado for 9 ou maior, sobrevivem, caso contrário são obliterados. Exorcistas sofrem morte instantânea, pecados viram cinzas. Este destino pode ser desafiado. Pecados Perfeitos sempre sobrevivem. Todo o resto na área CAT 5 ou menor é aniquilado.<br><br>Invocar o Rei só pode ser feito uma vez em um jogo de CAIN.",
    worm: "Pode produzir material de leitura leve (romances, revistas, etc) à vontade, sem custar PK, embora se dissolva após minutos perdendo contato com seu corpo.<br><br>Além disso, todos os poderes de Wire se aplicam a livros ao invés de computadores ou telefones. Quando produziria um terminal com Terminal ou Deck, produz um livro apropriado (almanaque, enciclopédia, gibi, etc), incluindo de corpos de pessoas. Surge funciona com livros (deve ter lido ou estar familiarizado com o livro destino), e Disk transforma o alvo em livro. Call cria um diário duplicado em você e no alvo se atenderem. Escrever no diário faz a escrita aparecer instantaneamente no duplicado, independente de distância.",
    recluse: "<div class=\"sanctum-base-box\"><b>Sanctum base:</b><br>• O palácio é uma projeção mental, um espaço onírico que assume a forma de uma grande casa, residência ou mansão em um local de sua escolha. Você pode controlar sua aparência e decoração.<br>• Sofrer dano em um palácio instantaneamente expulsa a pessoa, acordando-a, ao invés de causar dano real.<br>• Entrar no palácio mentalmente requer apenas fechar os olhos e se concentrar, deixando o corpo externo indefeso e insensato.</div>Apenas você pode entrar no seu palácio (exceto o poder Bar e duplos psíquicos, como do Parlor). Não concede benefícios de descanso, mas funciona como o poder Sanctum normal. Pode entrar a qualquer momento se concentrando por alguns instantes.<br><br>Quando entrar, desaparece fisicamente e é substituído por um portal de palácio, um objeto refletivo pequeno. Historicamente, estes têm sido coisas como pedras preciosas, espelhos, ou bacias de água, mas em tempos modernos às vezes se tornam coisas como telas de celular, laptops, ou consoles portáteis de videogame. Observadores externos, incluindo humanos, podem ver e falar com você dentro do palácio, embora sua voz e aparência pareçam distantes ou distorcidas. De dentro, pode usar poderes desta blasfêmia normalmente para afetar o mundo exterior.<br><br>Permanece no palácio até sair voluntariamente. Se o objeto for danificado, é expulso, sofre estresse como se fosse alvo daquele dano, e não pode re-entrar até descansar. O portal pode ser reparado sobrenaturalmente durante um descanso sem custo.",
    manifold: "<div class=\"sanctum-base-box\"><b>Sanctum base:</b><br>• Você e aliados que descansam com você podem entrar no seu palácio psíquico enquanto descansam. Isso melhora as rolagens de descanso de você e de um aliado à sua escolha em +1.<br>• O palácio é uma projeção mental, um espaço onírico que assume a forma de uma grande casa, residência ou mansão em um local de sua escolha. Você pode controlar sua aparência e decoração.<br>• Sofrer dano em um palácio instantaneamente expulsa a pessoa, acordando-a, ao invés de causar dano real.<br>• Entrar no palácio mentalmente requer apenas fechar os olhos e se concentrar, deixando o corpo externo indefeso e insensato.</div>Seu palácio funciona como o poder Sanctum normal, exceto:<br><br>Uma vez por caçada, ao abrir qualquer porta ou cruzar qualquer limiar, pode abrir uma porta para um cômodo do seu palácio, manifestando-o fisicamente. Não requer gastar pulso. Abrir qualquer porta para fora conecta a uma porta aleatória próxima, determinada pelo Admin. O espaço dentro do seu palácio pode ser maior do que fisicamente possível pelo lado de fora.<br><br>Ao usar qualquer poder de palácio, incluindo sua passiva, deve manifestar fisicamente a parte correspondente do palácio como parte daquele poder, como antes, podendo fazer isso qualquer número de vezes. Se não tiver porta à mão, não pode ativar o poder, embora qualquer porta sirva (porta de carro, microondas, geladeira, etc).<br><br>Outros seres podem entrar nos cômodos manifestados, mesmo hostis. Os cômodos param de existir quando não estiver fisicamente dentro ou soltar a maçaneta, e empurram qualquer pessoa ou coisa da realidade exterior quando colapsam de volta à forma original.",
    corpus: "Você se especializa nos corpos dos recém-falecidos. Uma vez por cena, ao tocar um cadáver, pode dizer exatamente há quanto tempo morreu, e ter breves visões de sua morte, concedendo +1D quando agir com base nas respostas na mesma cena.<br><br>Adicionalmente, pode usar o poder Possession em cadáveres sem gastar pulso psíquico, e pode usar o poder Desecrate em humanos vivos mas inconscientes.",
    hollow: "Você se especializa nos remanescentes incorpóreos de psique.<br><br>Pode usar o poder Geist sem gastar pulso psíquico, uma vez entre descansos.<br><br>Se tiver apenas um passageiro do poder Passenger, ele agora pode usar poderes psíquicos usando seu corpo, e você pode usar poderes normalmente. Quando usarem um poder, você sofre efeitos ou consequências como se tivesse usado, mas eles gastam recursos (pecado, pulsos, etc). Estes poderes terminam imediatamente se o passageiro sair.",
    silver_sight: "Você é completamente cego, mas permanentemente se beneficia do poder Threads desta blasfêmia e o ganha gratuitamente. Pode sobrepor com outros poderes. Como está acostumado a ver assim, ações contra coisas vivas não são difíceis para você, mas outras ações que requerem visão são. Se participar de trabalho em equipe ou ganhar setup, pode ignorar esta restrição além dos benefícios normais de trabalho em equipe ou setup.<br><br>Além disso, sua sensibilidade extrema à graça permite sentir imediatamente (com alguma imprecisão) se alguém em uma área 1/2 CAT [HALF_CAT:area] centrada em você tem sensibilidade psíquica, e quanta, ou se há seres sobrenaturais em área similar, quão perto estão, e quão fortes são.",
    locus: "Você se especializa em um objeto particular, mas tem aversão a outros. Escolha um objeto da lista de ressonâncias. É automaticamente ressonante com ele, mas role dois outros itens aleatoriamente. Tem antipatia com esses objetos e considera ações difíceis quando estiver tocando, vestindo, ou ao alcance da mão deles.<br><br>Pode trocar este foco e re-rolar suas antipatias no início de cada caçada, ou quando descansar.<br><br><b>Ressonâncias</b> (Role 1d3, depois 1d6):<table class=\"virtue-rupture-table\"><tbody><tr><td class=\"rupture-duration\">11</td><td class=\"rupture-cost\">Telefones</td><td class=\"rupture-duration\">21</td><td class=\"rupture-cost\">Bolas</td><td class=\"rupture-duration\">31</td><td class=\"rupture-cost\">Cordas</td></tr><tr><td class=\"rupture-duration\">12</td><td class=\"rupture-cost\">Luzes</td><td class=\"rupture-duration\">22</td><td class=\"rupture-cost\">Armas de Fogo</td><td class=\"rupture-duration\">32</td><td class=\"rupture-cost\">Martelos</td></tr><tr><td class=\"rupture-duration\">13</td><td class=\"rupture-cost\">Facas</td><td class=\"rupture-duration\">23</td><td class=\"rupture-cost\">Canecas</td><td class=\"rupture-duration\">33</td><td class=\"rupture-cost\">Carros</td></tr><tr><td class=\"rupture-duration\">14</td><td class=\"rupture-cost\">Chaves</td><td class=\"rupture-duration\">24</td><td class=\"rupture-cost\">Computadores</td><td class=\"rupture-duration\">34</td><td class=\"rupture-cost\">Portas</td></tr><tr><td class=\"rupture-duration\">15</td><td class=\"rupture-cost\">Livros</td><td class=\"rupture-duration\">25</td><td class=\"rupture-cost\">Sapatos</td><td class=\"rupture-duration\">35</td><td class=\"rupture-cost\">Bolsas</td></tr><tr><td class=\"rupture-duration\">16</td><td class=\"rupture-cost\">Tacos de Beisebol</td><td class=\"rupture-duration\">26</td><td class=\"rupture-cost\">Ferramentas Elétricas</td><td class=\"rupture-duration\">36</td><td class=\"rupture-cost\">Luvas</td></tr></tbody></table>",
    mothers_love: "Sua cepa de Mother é menos detectável, e você parece mais humano. Duas vezes por caçada, pode ouvir os sussurros de Mother (pergunte ao GM o que Ela está dizendo) ao usar uma blasfêmia deste poder.<br><br>Se seguir o conselho ou direção dela, pode usar aquele poder sem gastar pulso psíquico, ganha +1D em rolagens de PSIQUE, +1 CAT, e todos os custos de pecado são reduzidos a 1 pela duração.<br><br>Porém, usar o poder se torna arriscado se não era, e o dado de risco se torna '1' automaticamente."
  },
  // Power descriptions
  powers: {
    tension_aegis: "Quando você ou um aliado visível a curta distância de você sofreriam estresse de dano externo, você pode intervir respondendo as seguintes perguntas:<br>•  Você consegue alcançar o alvo a tempo?<br>•  Há alguma parte do ambiente que você pode usar para proteger o alvo?<br>•  Seu coração está nisto?<br><br>Você cria um campo de tensão instantâneo de força incrível, bloqueando dano. Para cada resposta sim, role 1d6. Para cada 2+ rolado, reduza o estresse sofrido em 1, e para cada 6 rolado, reduza em 2. Isso pode reduzir o estresse sofrido a 0.<br><br>Após usar este poder, perca seu uso até descansar.",
    tension_stasis: "Com um gesto, você pode prender a si mesmo ou um grupo de tamanho CAT [CAT:people] de humanos ou exorcistas em uma gaiola de tensão que os cobre como uma segunda pele, paralisando-os. Se um humano for hostil ou relutante, role PSIQUE, e apenas gaste o pulso em sucesso.<br><br>Uma vez preso, seu alvo está trancado, incapaz de se mover ou agir pela cena, e é imune a todo dano e efeitos externos. O efeito só termina quando a cena passar e você não pode encerrá-lo antes. Eles podem ser movidos como um objeto (muito rígido) e estão totalmente conscientes por dentro, embora vejam como se olhassem através de um painel grosso de vidro e não precisem respirar.",
    tension_severance: "Você pode projetar um campo de tensão de força incrível sobre qualquer lâmina, tão óbvia quanto uma espada e tão sutil quanto uma unha, e usá-la como um implemento de corte. Role PSIQUE para cortar um objeto ou oponente com um golpe limpo e decisivo, gastando um pulso psíquico apenas em sucesso.<br>•  Ganhe +1D se estiver atacando para proteger outra pessoa.<br>•  Ganhe +1D contra objetos ou oponentes imóveis.",
    tension_malleate: "Você pode inverter e infundir um campo de tensão para tornar uma área de matéria não-viva incrivelmente maleável e macia. O tamanho deste bloco de matéria que você pode afetar é influenciado por CAT [CAT:size]. Escolha um dos seguintes efeitos, então você pode ganhar ou conceder +1D quando você ou qualquer aliado agir para aproveitar este poder:<br>•  Borracha: A matéria fica elástica e saltitante.<br>•  Lama: A matéria derrete em uma lama grossa, pegajosa e difícil de atravessar.<br>•  Líquido: A matéria derrete em líquido.<br><br>Este poder pode facilmente afetar os parâmetros de rolagens, como dificuldade e risco. Quando o efeito expirar, a matéria lentamente reverte ao seu estado e forma originais.",
    tension_fortress: "Uma vez por cena, você pode criar um campo de tensão pontual com tamanho determinado por até CAT [CAT:size] que aparece como um grande plano de força cintilante, invisível para humanos. Só pode existir como plano plano (sem curvas), e pode cruzar ou sobrepor qualquer material não-vivo, mas de outra forma é tão duro quanto um objeto sólido e previne toda matéria viva e não-viva e energia de cruzá-lo. Tem um talismã 2+CAT [CALC:2+CAT] para sua durabilidade, que pode sofrer dano e ser marcado como um talismã de execução por oponentes. O campo dura até ser destruído, até ser usado novamente, ou até descanso.",
    ardence_fury: "Crie uma rajada feroz de energia destrutiva em um local ao alcance com área de explosão até CAT [CAT:area]. Role PSIQUE e responda as seguintes perguntas, ganhando +1D por cada sim:<br>•  Você está disposto a causar dano indiscriminado?<br>•  Está disposto a deixar sua raiva controlar o resultado?<br><br>Se pelo menos um sim, a área é SEMPRE igual ao CAT máximo, e aliados na área ou a curta distância sofrem 2 de estresse.",
    ardence_sabre: "Libere uma rajada de energia em um feixe altamente destrutivo. O feixe vai em linha reta em um alcance igual a CAT [CAT:distance], perfurando paredes, portas e obstruções sem esforço. É extremamente alto e brilhante. Role PSIQUE para seus efeitos, gastando um pulso psíquico apenas em sucesso.<br><br>Você pode opcionalmente levantar o limitador desta habilidade ao usá-la. Se o fizer, para cada resultado 6 que rolar, esta habilidade inflige 1 corte extra em um talismã, mas você também sofre 2 de estresse, que pode te matar ou causar um ferimento. Este estresse não pode ser reduzido ou ignorado de forma alguma.",
    ardence_void: "Você cria um vácuo instantâneo queimando o ar. O vácuo cria um trovão alto, afetando uma área até CAT [CAT:area], excluindo você. Escolha um dos seguintes efeitos, então você pode ganhar ou conceder +1D quando você ou qualquer aliado agir para aproveitar este poder:<br>•  Fraco: Puxa objetos soltos que não estejam segurados, vestidos ou aparafusados.<br>•  Médio: Todos os humanos e exorcistas na área são derrubados e puxados, excluindo você.<br>•  Forte: Pecados e veículos de até tamanho CAT são desequilibrados ou puxados dependendo de seu tamanho. Vidro é estilhaçado. O trovão é momentaneamente ensurdecedor.<br><br>Este poder pode afetar os parâmetros de rolagens, como dificuldade e risco.",
    ardence_hell: "Você pode despejar energia no chão e em qualquer coisa tocando o chão em uma área determinada por CAT+2 [CAT+2:area], escolhendo quente ou frio. Escolha um dos seguintes efeitos, que dura até você descansar. Você pode ganhar ou conceder +1D quando você ou qualquer aliado agir para aproveitar este poder:<br>•  Ferver: Desconforto para humanos, temperatura alterada, superfícies quentes ou frias, etc.<br>•  Escaldar: Grande desconforto para humanos, que não podem permanecer na área, e desconforto para pecados e exorcistas. Congele ou ferva água, canos, quebre vidro, etc.<br>•  Fervura: Mortal para humanos, pecados e exorcistas sofrem 2 de estresse se permanecerem na área por mais de uma cena. Acenda fogo ou congele o ar em salas, derreta janelas ou queime portas, ou congele objetos.<br><br>Este poder pode afetar os parâmetros de rolagens, como dificuldade e risco.",
    ardence_storm: "Você pode gastar qualquer número de pulsos psíquicos para enviar energia potencial à atmosfera, afetando um microclima em uma área igual a CAT+2 [CAT+2{max7}:area], com máximo de CAT 7. Escolha um dos efeitos abaixo, mais um por pulso psíquico gasto. Os efeitos escolhidos duram toda a missão ou até serem dispensados.<br>•  Limpar: Limpe os céus na área, cancelando qualquer clima.<br>•  Chuva: Chuva encharca a área pela duração de uma intensidade à sua escolha (garoa, forte, torrencial).<br>•  Frio: O ar congela, congelando água e criando gelo em estradas e caminhos. Qualquer precipitação se torna neve.<br>•  Neblina: Neblina densa se instala, limitando visibilidade.<br>•  Vendaval: Vento forte sopra pela área, dispersando neblina, fumaça ou poeira, e tornando difícil ouvir ou estar ao ar livre.<br><br>Este poder pode facilmente afetar os parâmetros de rolagens, como dificuldade e risco.<br><br>Uma vez usado, perca o uso deste poder até descansar.",
    flux_stop: "Você gasta até três pulsos psíquicos para parar o tempo local em uma área ao redor de você igual a CAT [CAT:area]. Role 1d6 por pulso gasto e some — esse é o número de segundos que você tem. Qualquer coisa que entrar nesta área é imediatamente afetada (incluindo qualquer coisa colocada dentro ou fora da área), mas o tempo flui normalmente fora da área. Neste tempo parado, você não é afetado e:<br>•  Você não pode usar poderes psíquicos, mas também não pode ser afetado por eles. Qualquer poder atualmente ativo de você ou te afetando (exceto este) se dissipa.<br>•  Você pode realizar uma atividade ou curso de ação que caiba na duração.<br>•  Após fazer uma rolagem de ação para qualquer coisa, o efeito termina não importa o quê.<br><br>Então, ganhe instabilidade temporal.",
    flux_quickening: "Você pode acelerar a cura natural do seu corpo ou de outros, concedendo os seguintes benefícios:<br>•  Cure imediatamente 1d3 de estresse em você ou outro alvo. Se o alvo estiver ferido, aumente em +1.<br>•  Você pode curar um grupo de tamanho CAT [CAT:people] de humanos moribundos ou feridos a curta distância. Humanos moribundos são estabilizados e não correm mais perigo de morrer, mas ficam inconscientes. Caso contrário, humanos gravemente feridos são curados a ponto de conseguir se mover (lentamente) sozinhos. Ferimentos menores são totalmente curados.<br><br>Então, ganhe instabilidade temporal.",
    flux_reversal: "Ao tocar um objeto de até tamanho CAT [CAT:size], você pode reverter sua passagem pelo tempo pela última hora.<br>•  Isso pode mover fisicamente o objeto, reverter dano em um objeto, etc.<br>•  Ainda pode afetar o mundo físico, então qualquer coisa no caminho de um objeto revertendo seria atingida, e qualquer coisa colocada sobre ele se moverá com ele.<br>•  Se causar dano ou impacto, role PSIQUE.<br>•  Não pode reverter vida em matéria não-viva, como cadáveres, mas pode temporariamente movê-los e reverter dano como se estivessem vivos.<br><br>Você pode parar este efeito por vontade própria, mas retomá-lo requer usar este poder novamente.",
    flux_schism: "Você pode criar uma bolha de tempo alterado igual a área CAT [CAT:area], abrindo uma janela para um dia no passado ou futuro a partir do momento em que a bolha foi criada. Ganhe ou conceda +1D quando você ou qualquer aliado agir para aproveitar este poder.<br>•  O estado da área dentro da bolha é confinado apenas à bolha e inclui objetos ou pessoas dentro. Você e aliados podem entrar ou sair à vontade.<br>•  Seres sobrenaturais, incluindo exorcistas, na linha temporal presente capturados na bolha quando criada não são afetados. Humanos e o mundo da linha temporal presente capturados na bolha são pausados, deixam de existir pela duração, e não têm memória do incidente.<br>•  Coisas removidas da bolha da linha temporal passada ou futura, incluindo seres vivos, simplesmente desaparecem até voltarem à bolha.<br><br>A bolha representa uma linha temporal alternativa, então qualquer coisa alterada dentro não aparecerá na linha temporal presente ou futura.",
    flux_stutter: "Você pode brevemente reverter o tempo para alterar a causalidade de qualquer evento que aconteceu como resultado de uma rolagem de ação feita por você ou um aliado visível ao alcance CAT [CAT:distance], instantaneamente após ver o resultado. Re-role a rolagem de ação completamente, usando o segundo resultado como final.<br><br>Quando usar este poder, ganhe instabilidade temporal. Se usar novamente antes de descansar, ganhe 1d3 de instabilidade temporal ao invés.",
    vector_fling: "Com um toque, você pode imbuir velocidade em si mesmo ou outro objeto ou ser vivo e mandá-lo voando. O tamanho combinado do objeto ou ser e o alcance que você o envia devem ser iguais a CAT+2 [CAT+2:size] ou menos. Uma vez voando, a direção do alvo não pode ser mudada.<br><br>Você pode alternativamente remover toda velocidade tocando um objeto ou pessoa de tamanho CAT+2, trazendo-o a uma parada completa.<br><br>Role PSIQUE para os efeitos deste poder, incluindo qualquer dano infligido, e apenas gaste um pulso psíquico com pelo menos um sucesso.",
    vector_lift: "Você reverte o efeito da gravidade em si mesmo e um grupo de tamanho CAT [CAT:people] de outros exorcistas ou humanos com um efeito Vetorial baixo mas constante. Pela cena, todos os afetados ganham os seguintes benefícios:<br>•  Podem correr, andar ou escalar superfícies verticais.<br>•  Podem desacelerar a queda à vontade e não podem sofrer dano de queda.<br>•  Podem planar uma distância igual ao alcance CAT [CAT:distance] — devem começar em altura para ganhar este benefício.<br><br>Este poder pode facilmente afetar os parâmetros de rolagens, como dificuldade e risco.",
    vector_current: "Você cria uma força Vetorial mais fraca mas persistente em uma área que dura até descansar. Cria uma linha que vai por aproximadamente CAT+2 [CAT+2:distance] de alcance em comprimento e cobre aproximadamente a largura de uma rua. Empurra constantemente em uma direção (incluindo para cima ou para baixo) como um vento forte. Aliados movendo nessa direção ganham +1D em ações para se mover com a corrente. Qualquer coisa movendo contra essa direção luta, e qualquer coisa caindo cai lentamente. Torna-se difícil para aliados se moverem contra a corrente, e ações tomadas contra qualquer um tentando lutar contra a corrente ganham +1D. Você pode dispensar este efeito à vontade.",
    vector_bullet: "Você pode imbuir fortes rajadas de velocidade no ar nas pontas dos dedos, criando balas de ar pressurizado que atingem com força extrema. Role PSIQUE para seus efeitos, gastando um pulso psíquico apenas em sucesso.<br>•  Ganhe +1D ao fazer disparos de uma posição elevada.<br>•  Ganhe +1D ao fazer disparos para desarmar, distrair ou desabilitar ao invés de causar dano.",
    vector_finesse: "Passiva: Você pode manipular fios de força finos para realizar habilidades motoras finas que você poderia executar com suas mãos a meio CAT [HALF_CAT:distance] de alcance, como abrir portas, pegar objetos, ou até habilidades como digitar em um teclado, etc. Role uma perícia relevante como interface para isto.<br>•  Você precisa ver o alvo, mesmo que esteja longe. No entanto, pode realizar esta manipulação mesmo se o caminho até o alvo estiver bloqueado, como se pudesse vê-lo através de uma janela, etc.<br>•  Pode pegar objetos e movê-los pelo ar, mas não podem ser maiores ou mais pesados que um laptop ou uma pasta cheia.",
    gate_tear: "Você cria um ponto ao alcance CAT [CAT:distance], e outro ponto dentro do mesmo alcance, embora precise ver ambos os pontos ao usar esta habilidade. Os dois pontos são conectados por uma fenda no tecido da realidade, um portal que pode ser atravessado e conecta os dois pontos como se estivessem lado a lado. Objetos, seres e forças de até metade do CAT [HALF_CAT:size] em tamanho podem se mover livremente pela fenda pela duração, e o momento é preservado.<br><br>Você pode ganhar ou conceder +1D quando você ou qualquer aliado agir para aproveitar este poder.",
    gate_pinch: "Você pode escolher um único ser vivo ou objeto que possa ver. O tamanho combinado do objeto ou ser e a distância que você tenta movê-lo devem ser CAT+2 [CAT+2:size] ou menos. Role PSIQUE se o alvo for relutante, gastando pulso apenas em sucesso. Desde que possa ver o alvo, com pelo menos um sucesso, você pode comprimir o espaço entre vocês dois para mover o alvo para perto de você. Da perspectiva do alvo, ele não parece se mover, mas o mundo se distorce ao seu redor. Ele ignora todas as obstruções físicas entre ele e você — desde que possa ver o alvo, ele simplesmente aparece ao seu lado.<br><br>Você pode ganhar ou conceder +1D quando você ou qualquer aliado agir para aproveitar este poder.",
    gate_bloom: "Ao dividir o espaço de formas criativas, você cria um número de duplicatas controláveis de quaisquer dos seus membros ou mãos igual a CAT+1 [CALC:CAT+1] em quaisquer superfícies a curta distância de você, emergindo de uma fenda no espaço. Estão presas no lugar e não podem se mover. Ganhe ou conceda +1D quando você ou qualquer aliado agir para aproveitar este poder.<br>•  Você pode controlá-las como membros normais, fazendo rolagens de ação através delas e tem sensação normal com elas.<br>•  Podem ser colocadas em qualquer superfície, incluindo superfícies em movimento ou seres vivos.<br>•  Você sofre qualquer estresse que elas sofreriam de suas ações feitas através delas.",
    gate_maze: "Você rearrange uma área igual a CAT [CAT:area] ao seu redor, causando o rearranjo de estruturas construídas por humanos na área. Ganhe ou conceda +1D quando você ou qualquer aliado agir para aproveitar este poder. Você pode:<br>•  Criar ou remover portas e janelas, ou mudar o arranjo existente de portas e janelas.<br>•  Adicionar corredores, ou rearranjar a planta dos cômodos.<br>•  Mudar a direção da gravidade dentro de um cômodo (por exemplo, fazer uma parede ser o chão).<br>•  Tornar um cômodo maior ou menor.<br>•  Arranjar ou remover os móveis dentro de um cômodo como quiser.<br><br>Não pode remover cômodos inteiramente, tornar qualquer cômodo menor que um armário ou maior que um salão de baile, ou adicionar qualquer coisa que já não exista em um prédio além de corredores. Isso pode fazer uma estrutura ser maior por dentro do que por fora. Para cada escolha, o Admin rola 1d6. Se rolar pelo menos um 1, o Admin ganha um uso deste poder contra você no seu CAT atual e pode ativá-lo quando quiser.",
    gate_transmission: "Mova-se instantaneamente para qualquer outra área ao alcance CAT+2 [CAT+2:distance]. No entanto, o Admin te faz as seguintes perguntas e rola 1d6 por resposta 'não':<br>•  Você conhece o seu destino?<br>•  Pode ver para onde está indo?<br>•  Está calmo e concentrado?<br><br>Com pelo menos um resultado 1, você acaba em um local diferente próximo ao destino, mas o Admin escolhe onde. Com duplo 1, você acaba em algum outro lugar brevemente antes de chegar ao destino final. Não apenas está fora do alvo, como também sofre 2d3 de estresse.",
    smother_abstract: "Com um gesto, você remove propriedades reconhecíveis de um número CAT+1 [CALC:CAT+1] de ferramentas, veículos, janelas, portas ou quaisquer outros objetos distintos que possam ser segurados ou vestidos. Os objetos escolhidos não podem mais ser usados para seu propósito original e nenhum humano, pecado ou exorcista (incluindo você!) pode reconhecê-los — olhar para eles por muito tempo causa desconforto extremo, mesmo para exorcistas. Por exemplo, armas não podem mais disparar, portas não podem mais abrir, ou janelas não podem mais ser olhadas através.<br><br>Ganhe ou conceda +1D quando você ou qualquer aliado agir para aproveitar este poder. Também pode afetar os parâmetros de rolagens enquanto ativo.",
    smother_smooth: "Você remove temporariamente quase todo o atrito de um grupo de tamanho CAT [CAT:people] de humanos ou exorcistas, ou uma área até CAT [CAT:area]. A área ou alvo(s) ficam incrivelmente escorregadios. Se mirar em uma área, torna-se difícil para qualquer um ficar de pé, escalar ou se mover normalmente, embora pessoas possam deslizar.<br>•  Role PSIQUE para afetar alvos hostis, gastando pulso apenas em sucesso.<br>•  Você pode esculpir esta área se desejar afetar apenas parte dela, ou esculpir um caminho.<br><br>Ganhe ou conceda +1D quando você ou qualquer aliado agir para aproveitar este poder. Este poder também pode facilmente afetar os parâmetros de rolagens, como dificuldade e risco.",
    smother_hollow: "Você remove temporariamente o peso de um único objeto, humano ou exorcista, dando-lhe o peso total de 0,5kg se mais pesado. O tamanho do objeto deve ser CAT [CAT:size] ou menor, e você pode encerrar esta modificação a qualquer momento, embora precise usar este poder novamente para recuperar seus efeitos. Role PSIQUE para qualquer uso criativo deste poder, gastando pulso apenas com pelo menos um sucesso.<br>•  Ganhe ou conceda +1D quando você ou qualquer aliado agir para aproveitar este poder.<br>•  Este poder termina no alvo anterior se usado novamente.<br><br>Este poder pode facilmente afetar os parâmetros de rolagens, como dificuldade e risco.",
    smother_blind: "Um número de objetos ou seres vivos igual a CAT [CALC:CAT], ou localização de tamanho até CAT [CAT:area] que você toque, para de produzir som, refletir luz, ou ambos pela cena. Ganhe ou conceda +1D quando você ou qualquer aliado agir para aproveitar este poder:<br>•  Mirar em uma pessoa permite que o efeito se mova com ela pela cena.<br>•  Mirar em uma localização afeta uma área, removendo todo som e/ou luz. Você pode filtrar este efeito permitindo que luz ou som dentro da localização operem normalmente, mas não entrem ou saiam da área.<br><br>Este poder pode facilmente afetar os parâmetros de rolagens, como dificuldade e risco.",
    smother_dark_age: "Você produz um campo forte do seu corpo desabilitando até os avanços humanos mais simples de funcionar em área CAT [CAT:area]. O efeito se move com você. Você pode escolher até três dos seguintes para suprimir, cessando sua operação, então ganhe ou conceda +1D quando você ou qualquer aliado agir para aproveitar este poder:<br>•  Eletricidade<br>•  Internet<br>•  Motores de combustão<br>•  Água corrente<br>•  Maçanetas, trincos de janela, zíperes, fechos<br>•  Fogo aberto<br><br>Essas coisas param de funcionar mesmo que não faça sentido, ou seja, suprimir água corrente significaria que a pressão da água simplesmente para de funcionar. Você pode encerrar este efeito voluntariamente, mas deve encerrar todos os efeitos de uma vez.",
    whisper_omen: "Pergunte à sua sombra 'O que acontecerá se eu X', onde X é um curso simples de atividade que você planeja tomar na próxima hora ou mais (abrir esta porta, participar da reunião, atacar esta pessoa, ir por esta rua). A sombra te dá uma breve impressão do futuro:<br>•  Ganhe +1D quando você ou um aliado agir com base na resposta.<br>•  Pré-role o dado de risco antes de agir. Você pode decidir desistir da ação se quiser, mas se seguir o mesmo curso de atividade no futuro, use o dado de risco pré-rolado.",
    whisper_shiver: "Quando estiver procurando um humano, pecado, exorcista, localização ou objeto, você pode declarar 'Sinto um arrepio'. Você envia um pulso psíquico ao alcance CAT [CAT:distance] em um raio ao seu redor, que permanece ativo pela cena. Enquanto o alvo estiver perto o suficiente para estar ao alcance, você sente um forte senso de frio e desconforto. Pode se guiar por este sentimento facilmente. Nunca é difícil rastrear o alvo enquanto este poder estiver ativo. Se o alvo estiver a curta distância, você também ganha +1D em quaisquer rolagens para rastrear ou localizá-lo.",
    whisper_dissect: "Examine um humano ou exorcista que possa ver ao alcance CAT [CAT:distance], role PSIQUE, e pergunte à sua sombra uma das seguintes perguntas, mais uma por sucesso. Ela responde com verdade, mas pode usar no máximo três palavras para responder cada uma:<br>•  Esta pessoa está mentindo?<br>•  Qual a emoção principal que esta pessoa está sentindo?<br>•  De onde esta pessoa acabou de vir?<br>•  Para onde estão planejando ir?<br><br>Ganhe ou conceda +1D quando você ou qualquer aliado agir para aproveitar cada resposta.",
    whisper_precognition: "Quando o Admin está descrevendo uma cena ou você está prestes a tomar um curso de ação, você pode 'voltar no tempo'. Faça uma rolagem de ação ou jogue uma cena no passado, onde você teve uma visão do momento presente. Isso não pode alterar completamente os fatos estabelecidos do presente (não pode ter nocauteado alguém no passado se acabou de ter uma conversa com ele no presente, por exemplo), mas pode mudar a situação ou alterar detalhes do presente, ou pode ajudar a si mesmo ou qualquer aliado. Por exemplo, você poderia ter feito preparações para o momento atual (trancado ou destrancado uma porta, guardado equipamento, feito uma ligação, etc). Se usar este poder para equipamento, marque PK normalmente.<br><br>Se a situação for complicada, sofra 1 de estresse não-letal. Se for rebuscada ou absurda, sofra 3 de estresse não-letal.",
    whisper_omnipresence: "Quando um aliado está em uma cena, e você não está presente nessa cena, e seu aliado está ao alcance CAT+2 [CAT+2:distance], você pode usar este poder para entrar na cena, tendo já previsto que este curso de eventos aconteceria. Role PSIQUE, e escolha um dos seguintes por sucesso:<br>•  Ninguém está te seguindo.<br>•  Você está escondido.<br>•  Você é capaz de entrar na localização do aliado sem distração ou dano.<br>•  Você tem uma ferramenta ou objeto útil para a situação presente (uma chave, uma arma, uma chave inglesa, etc).<br><br>Após usar este poder, perca seu uso até descansar.",
    edit_uniform: "Você faz uma breve edição de si mesmo. Não pode fazer isso em público (precisa de privacidade, não importa quão tênue). Este poder te torna oficialmente parte de qualquer profissão ou grupo com mais de 5 membros, com qualquer uniforme necessário, equipamento, cartões de identificação, associações, etc, e altera a realidade para que assim seja.<br><br>Mesmo que pessoas não se lembrem particularmente de você fazer parte de um grupo, podem ter uma vaga sensação de que você era membro.<br><br>Você não ganha nenhuma perícia particular e quaisquer mudanças devem ser à sua pessoa e devem incluir coisas que poderia vestir ou carregar em uma ou ambas as mãos.<br><br>Ganhe ou conceda +1D quando você ou qualquer aliado agir para aproveitar este poder.",
    edit_absurd: "Você troca até um grupo de CAT [CAT:people] de humanos ou exorcistas por uma versão diferente deles mesmos de uma linha temporal alternativa. Você deve rolar PSIQUE para este poder ter efeito em alvos hostis, gastando pulso apenas em sucesso. Isso pode mudar:<br>•  O que o alvo está vestindo, mas não segurando (qualquer coisa na mão permanece a mesma).<br>•  Aparências físicas dos alvos, como seu poder MIMIC.<br><br>Alvos mantêm suas memórias, e isso não altera a realidade para acomodar a mudança, então pode facilmente desorientar humanos despreparados. A mudança é de outra forma perfeita.<br><br>Ganhe ou conceda +1D quando você ou qualquer aliado agir para aproveitar este poder.",
    edit_utility: "Quando precisar de qualquer objeto mundano, ferramenta ou veículo que caiba em uma sala pequena, pode fazê-lo aparecer em uma superfície ao alcance como se sempre estivesse ali, sem gastar PK. No entanto, o Admin escolhe um defeito, ou dois se o item for perigoso ou raro:<br>•  O item é usado, amassado, arranhado ou de baixa qualidade.<br>•  O item é um item real que alguém próximo possuía e agora desapareceu, e virão procurá-lo.<br>•  O item é estranho de alguma forma e aparece como uma cópia barata feita de materiais estranhos que parecem esponjosos ou orgânicos.<br>•  O item está faltando algumas peças e não funciona tão bem quanto poderia.<br><br>O item não pode ser um item único, não pode criar um carro, chave ou livro específico, mas sim um representante genérico de uma categoria. Desaparece após descanso.",
    edit_filter: "Você produz um campo forte afetando toda matéria em uma área do tamanho de uma sala pequena, que deve conter você. Nesta área ganhe +1D para examinar conteúdos e:<br>•  Pode tornar qualquer matéria transparente ou opaca.<br>•  Pode mudar a iluminação da sala como se iluminada por uma fonte invisível, ou apagar quaisquer fontes de luz na sala.<br>•  Pode mover quaisquer objetos na área sem tocá-los e fixá-los em qualquer ponto no espaço, fazendo-os flutuar.<br>•  Pode dissecar seguramente qualquer objeto inanimado solto ou mobília em suas partes constituintes ou remontar qualquer objeto quebrado, desde que as peças estejam presentes.<br><br>Este efeito expira quando a cena terminar, ou se você sair da área por qualquer motivo.",
    edit_copy: "Você cria uma cópia temporária e exata de um humano ou exorcista.<br>•  Isso cria um doppelgänger: um clone simples e obediente, sem muita inteligência ou capacidade de falar.<br>•  Pode dar instruções simples de uma ou duas frases, que ele segue ao melhor de sua capacidade.<br>•  Dissolve-se em uma pasta pálida quando a cena termina, quando tocado por alguém exceto você, ou se sofrer qualquer dano.<br><br>Esta habilidade cria uma cópia do alvo em seu estado presente, incluindo qualquer coisa mundana que a pessoa esteja carregando ou vestindo. Um doppelgänger não pode ganhar, usar ou se beneficiar de poderes psíquicos e rola apenas 1d6 para fazer qualquer coisa.",
    bind_sin_strike: "Pode comandar um pecado ativo a atacar gastando um pulso psíquico desde que ambos seu pecado e o alvo estejam ao alcance, e possa se comunicar com ele. Role PSIQUE para seus efeitos. O ataque tem potência sobrenatural.",
    bind_sword_king: "Se tiver a blasfêmia Bind e estiver CAT 5 ou à beira da morte, pode clamar o azul infinito. Invocar o Rei inicia imediatamente uma força apocalíptica em uma área do tamanho de uma cidade (CAT 5), centrada em você. Pecados e exorcistas na área, incluindo você, rolam 1d6 e somam sua categoria. Se o resultado for 9 ou maior, sobrevivem, caso contrário são obliterados. Exorcistas sofrem morte instantânea, pecados viram cinzas. Este destino pode ser desafiado. Pecados Perfeitos sempre sobrevivem. Todo o resto na área CAT 5 ou menor é aniquilado.<br><br>Invocar o Rei só pode ser feito uma vez em um jogo de CAIN.",
    bind_forbidden_spirit: "Você pode empoderar seu pecado por uma ação. Como parte desta ação:<br>•  Você levanta limitadores no seu espírito. A ação ganha +1D e causa nele uma transformação monstruosa similar à sua forma original. Ele se torna de tamanho igual a CAT+1 [CAT+1:size] e pode facilmente mover, levantar, atacar ou arremessar objetos ou seres de tamanho igual. Role PSIQUE para seus efeitos. Após a ação, ele reverte ao tamanho normal.<br>•  Ao absorver estresse pelo seu pecado como consequência desta ação, sofra 1 a menos.",
    bind_surrender: "Você puxa a energia do seu pecado para fundir-se parcialmente com sua essência. Seu corpo muta levemente para acomodar esta mudança. Manifeste imediatamente uma marca de pecado temporária e role para localização e habilidade, que você ganha até encerrar esta habilidade ou descansar. Você pode ganhar 1 pecado para re-rolar a habilidade da marca, qualquer número de vezes, a qualquer momento enquanto este poder estiver ativo.<br><br>Se atingir inundação de pecado enquanto este efeito estiver ativo e resistir com sucesso, manifeste a marca de pecado escolhida permanentemente ao invés de rolar.",
    bind_horde_spirit: "Você empodera seu pecado por uma cena. A próxima vez que ele agir para travessia ou movimento, ganha +1D. Como parte desta ação:<br>•  Pode transformá-lo na forma de um veículo ou criatura montável de até tamanho CAT [CAT:size] pelo restante da cena. Pode ir a aproximadamente velocidade CAT [CAT:speed], torna-se parcialmente visível para humanos e tem espaço para um grupo de metade do CAT [HALF_CAT:people] de passageiros humanos ou exorcistas.<br>•  Pode planar uma curta distância em forma de veículo, com ou sem passageiros.",
    bind_hunter_spirit: "Você empodera seu pecado por uma cena. A próxima vez que ele agir para rastreamento ou observação, ganha +1D. Como parte desta ação:<br>•  Pode agora se separar de você até alcance extremo quando liberado. Você pode se comunicar telepaticamente com ele.<br>•  Ganha a habilidade de voar e ver e cheirar extremamente bem — também pode ver no escuro e no espectro térmico, e claramente até longa distância.<br>•  Você pode se concentrar, dissociando-se do seu corpo e ficando extremamente vulnerável. Enquanto concentrado assim, no entanto, pode usar os sentidos do seu pecado ao invés dos seus. Pode ativar e desativar este efeito à vontade pela cena.",
    bind_penumbra: "Crie uma área desenhada como grande círculo, envolvendo até tamanho CAT+1 [CAT+1:area], e escolha um tipo da lista abaixo. A prisão leva um momento para criar, mas alguns minutos para ativar e seus efeitos entrarem em vigor. Dura até descansar ou usar novamente.<br>•  Manto Branco previne entrada de Pecados, mas permite humanos e exorcistas passarem normalmente.<br>•  Manto Preto previne entrada de humanos ou exorcistas. Além disso, humanos (geralmente) não conseguirão ver dentro da área e agirão como se a área não existisse.<br><br>Pode inverter este efeito se desejar, prevenindo saída ao invés de entrada. A prisão pode ser quebrada por um atacante sobrenatural determinado, mas tem um talismã 4+CAT [CALC:4+CAT] para durabilidade, sofrendo estresse como um talismã de execução.",
    palace_cellar: "Você pode simular situações dentro do seu palácio antes de colocá-las em prática na realidade. Pode usar este poder e rolar para ajudar um número de aliados igual a metade do CAT [CALC:HALF_CAT] mesmo se não estiver fisicamente presente. No entanto, só pode ajudar um alvo se puder descrever a forma como treinou ou preparou com eles, ou uma cópia psíquica deles, para a situação atual. Esta ajuda nunca pode ser arriscada, mas não pode reduzir risco. Se falhar na rolagem de ajuda, pode sofrer 1d3 de estresse não-letal para re-rolar, usando o segundo resultado como final.",
    palace_foyer: "Passiva: Seu palácio tem uma tulpa, um ser psíquico que assume a forma de um servente ou mordomo. Ela é leal a você, e você pode determinar sua personalidade e aparência quando adquirir este poder. Sua existência dentro do palácio é passiva e não custa nada.<br><br>Ativa: Você invoca sua tulpa, escolhendo um:<br>•  Faça sua tulpa auxiliá-lo em uma tarefa de pesquisa, fabricação ou investigação, concedendo +1D na próxima rolagem e fazendo um corte extra em um talismã para cada 6 rolado.<br>•  Manifeste brevemente sua tulpa fora do palácio a curta distância como uma pessoa real pela cena, um espelho de sua aparência dentro do palácio mas vestida como quiser. Ela tem aproximadamente as capacidades de uma pessoa comum (CAT 0) e rola 2d para atividades que um servente ou mordomo típico faria e 0d para todo o resto. Qualquer dano sofrido a banir de volta ao palácio.",
    palace_library: "Seu palácio tem uma biblioteca de informações do inconsciente coletivo psíquico. Quando desejar coletar informações ou investigar qualquer assunto, pode ganhar +1D na rolagem acessando esta biblioteca. No entanto, depois o Admin rola 1d6 para cada uma das seguintes:<br>•  A informação é rara?<br>•  A informação é proibida de alguma forma?<br>•  A informação é pertinente a um grupo poderoso?<br><br>Para cada resultado 1, você sofre 2 de estresse não-letal ao ler algo perturbador na biblioteca.",
    palace_bar: "Uma vez por cena, você pode abrir qualquer porta fechada e abri-la para o seu bar (real, físico) ao invés da sala que esperaria. É um bar pequeno e típico, bem abastecido, incluindo lanches, algumas bocas de fogão, e bebidas alcoólicas e não-alcoólicas. Reabastece entre missões. O bar só existe enquanto você está dentro ou segura a porta, e itens ou pessoas de fora são empurrados para fora antes de desaparecer.<br><br>Quando descansar no bar, role 1d3+1 e faça um dos seguintes, gastando cargas do dado que acabou de rolar por opção:<br>•  1 carga: Elimine 1 de estresse em uma pessoa.<br>•  2 cargas: Reduza 1 corte em todos os ganchos de uma pessoa.<br>•  3 cargas: Remova um ferimento.<br><br>Para cada, descreva uma bebida, lanche, refeição ou outra forma de relaxamento ou cura que está preparando para seu convidado.",
    palace_parlor: "Escolha uma pessoa ou até um grupo de tamanho CAT [CAT:people] de pessoas na área de investigação e fale o nome(s) real(is) em voz alta. Você pode trazer a si mesmo e a sombra psíquica deles para dentro do seu palácio, não importa onde estejam. Se o(s) alvo(s) forem voluntários, pode escolher trazer sua consciência psíquica real para dentro do palácio, fazendo-os cientes e lembrarem o que acontece enquanto dentro, como em um sonho. O corpo real fica inconsciente e vulnerável. Podem sair voluntariamente.<br><br>Pode ao invés trazer um duplo psíquico de uma pessoa voluntária ou involuntária. Para involuntários, role PSIQUE e gaste pulso apenas em sucesso. O duplo é uma cópia psíquica da mente no momento da invocação. Memórias formadas pelo duplo não são transferidas. O duplo não pode sair até a cena terminar ou sofrer dano.<br><br>Uma pessoa ou duplo invocado desta forma não é obrigado de forma alguma a se comportar diferente do original.<br><br>Ganhe ou conceda +1D na próxima rolagem por você ou aliado aproveitando este poder.",
    jaunt_threads: "Você pode sentir o mundo invisível dos rastros de graça. Ao usar este poder, feche os olhos e pode ver através das pálpebras os padrões que a alma deixa no ambiente.<br>•  Ganha a habilidade de ver seres vivos, mesmo através de paredes, ao alcance CAT [CAT:distance].<br>•  Pode ver os rastros que um pecado ou alguém forte em graça como um exorcista deixa, como uma trilha tênue de luz pelo ar.<br>•  Ganha +1D em ações para rastrear ou localizar seres vivos ou rastros de pecados na área.<br><br>No entanto, não pode ver nenhuma matéria não-viva (está efetivamente cego) enquanto mantiver este poder, e considera ações que dependem de visão difíceis. Este poder termina quando abrir os olhos ou descansar.",
    jaunt_possession: "Você pode projetar sua percepção para fora do corpo para possuir um humano, animal ou cadáver (em bom estado) que possa ver ao alcance pela cena. Seres sobrenaturais são imunes a este efeito. Humanos relutantes podem requerer rolar PSIQUE para possuir com sucesso.<br>•  Enquanto possuir outro, seu corpo real fica insensato e indefeso.<br>•  Para humanos e animais, não pode forçar um alvo a se machucar ou tomar ação que indiretamente cause dano a si.<br>•  Ações que o alvo toma usam suas perícias, mas o corpo ou equipamento do alvo, o que pode mudar as circunstâncias.<br><br>Você é expulso do corpo se ele sofrer dano. Ganhe ou conceda +1D na próxima rolagem por você ou aliado aproveitando este poder.",
    jaunt_geist: "Você pode projetar sua percepção para fora do corpo e vagar ao alcance CAT+2 [CAT+2:distance], tornando-se um ser feito de pura energia psíquica.<br>•  Enquanto praticando este poder, seu corpo real fica insensato e indefeso.<br>•  Pode voar a velocidade CAT [CAT:speed], é invisível para os não psiquicamente sensíveis, e pode passar por paredes, pisos e objetos facilmente nesta forma.<br>•  Não pode interagir com ou ser afetado pelo mundo físico. Não pode usar ou se beneficiar de seus próprios poderes psíquicos, mas poderes ou efeitos psíquicos de outros ainda podem te afetar.<br><br>Se sua forma for destruída de alguma forma (por uma força sobrenatural), sofra 1 de estresse, este poder termina, e não pode usar este poder novamente até a cena passar.<br><br>Este poder pode facilmente afetar os parâmetros de rolagens, como dificuldade e risco.",
    jaunt_passenger: "Você escolhe um grupo de humanos ou exorcistas voluntários com tamanho de grupo igual ou menor que metade do CAT [CALC:HALF_CAT] ao alcance extremo, que devem ser capazes de te ouvir (mesmo telepaticamente) ou te ver. Você puxa a presença psíquica deles para dentro do seu corpo pela duração. Seus corpos ficam frouxos, vulneráveis e insensatos. No entanto:<br>•  Eles agora compartilham o controle do seu corpo com você, incluindo todos os sentidos.<br>•  Você pode ceder o controle do corpo para eles fazerem rolagens de ação usando suas perícias ou habilidades, mas com seu corpo (equipamento, acesso, etc).<br>•  Pode ajudá-los normalmente nessas perícias.<br><br>Eles não podem usar poderes psíquicos enquanto te possuírem desta forma, e você sofre qualquer dano ou consequências de suas ações.",
    jaunt_desecrate: "Você pode forçar uma semelhança de vida nos cadáveres de até um grupo de tamanho CAT [CAT:people] de humanos ou exorcistas tocando-os nos olhos. Pode fazer aos cadáver(es) três perguntas no total (não importa quantos anime), após o que o efeito termina e eles voltam a estar mortos. Também expira se a pressão aumentar.<br>•  Não pode usar este poder nos mesmos cadáveres mais de uma vez.<br>•  O poder não retorna vida ao corpo, mas acessa as memórias do corpo. Se a cabeça ou cérebro estiver faltando, ou o corpo não tiver língua, etc, este poder não funcionará tão bem.<br>•  Um cadáver é obrigado a responder com verdade, mas só pode falar do âmbito de seu conhecimento e memórias antes de morrer. Pode ter apenas conhecimento parcial de uma situação ou falar de acordo com seu próprio ponto de vista.<br><br>Então perca o uso deste poder até descansar.",
    sympathy_psychometry: "Você pode tocar objetos para remotamente ver suas memórias. Pode ver um número de dias para trás igual ao seu CAT [CALC:CAT]. Role PSIQUE, então faça uma pergunta mais uma adicional por sucesso:<br>•  Onde este objeto esteve?<br>•  Quem tocou este objeto?<br>•  Para que este objeto foi usado?<br>•  A que mais este objeto está conectado?<br><br>Memórias de um objeto são impressionistas e imprecisas, e eles normalmente só estão cientes de seus arredores muito imediatos.<br><br>Após usar este poder, perca seu uso até descansar.",
    sympathy_bond: "Pela cena, você pode se vincular incrivelmente a um item que está segurando em uma ou ambas as mãos.<br>•  Você agora é ressonante com esse item. Ele ainda é mundano.<br>•  Pode agora usá-lo como arma mundana de corte ou contusão mesmo se normalmente não seria uma arma. Tem aproximadamente o poder de um taco ou espada CAT 0.<br>•  O item se torna virtualmente indestrutível, e você pode fazê-lo retornar à sua mão, voando pelo ar, de dentro de curta distância.<br>•  Pode descarregar este poder para fazer um golpe com o objeto, concedendo-lhe poder destrutivo sobrenatural igual a CAT. Role PSIQUE para seus efeitos (ganha +1D na rolagem normalmente devido à ressonância). Então encerre este efeito e destrua o item.",
    sympathy_amplify: "Você pode expandir as propriedades mundanas de um item regular não-arma para níveis extremos. Toque um objeto mundano de até tamanho CAT [CAT:size]. Pela cena, você automaticamente tem ressonância com ele, e suas propriedades são melhoradas para níveis extremos, como se fossem até seu CAT em escala [CAT:magnitude]. Por exemplo:<br>•  Velocidade, manuseio e resiliência de um carro.<br>•  Brilho e intensidade de uma luz, e a área que ilumina.<br>•  A capacidade de uma porta de trancar e resistir à força.<br><br>Isso pode facilmente afetar a dificuldade e risco de rolagens. O objeto ainda é mundano.",
    sympathy_diplomacy: "Você faz um pedido simples a um objeto como se fosse uma pessoa, ou faz uma pergunta simples de sim ou não.<br><br>Por exemplo, pode pedir a uma porta para abrir ou manter fechada (mesmo se não pudesse normalmente trancar, ou não tiver a chave), a um computador para desligar ou encontrar informação, ou a um carro para ligar sem chave ou dirigir sozinho.<br><br>Se precisar fazer uma rolagem, role PSIQUE ou use uma ação social, como negociação ou autoridade.<br><br>Pode afetar objetos de até tamanho CAT [CAT:size] com isso. Objetos perguntados só podem responder com sim ou não e não podem vocalizar de fato.",
    sympathy_alliance: "Um objeto de até tamanho CAT [CAT:size] a curta distância pode agora agir para ajudar um aliado, rolando 1d6, ou PSIQUE se você for ressonante com esse objeto. O objeto pode sofrer ou causar consequências normalmente dessas ações.<br><br>Aliados precisam interagir com ele ou usar o objeto para ganhar seus benefícios. O objeto não ganha a habilidade de realmente se mover ou animar de forma alguma, mas a fortuna simplesmente se curva ao redor dele.",
    tongue_bang: "Você diz 'bang'. Isso causa um influxo massivo de força afetando até metade do CAT [HALF_CAT:area] de área com seu centro ao alcance, que tipicamente se manifesta como uma onda de pressão extrema. Afeta tudo exceto você. Role PSIQUE para seus efeitos, apenas gaste um pulso psíquico em sucesso.<br>•  Ganhe +1D se o ambiente ao redor for silencioso ou contido.<br>•  Ganhe +1D se estiver em uma área com acústica favorável, como um canyon, local de performance, teatro ou estádio.",
    tongue_silence: "Você diz 'silêncio' e escolhe uma área de até tamanho CAT [CAT:area] com seu centro em um ponto ao alcance. Tudo na área para completamente de produzir ruído. Qualquer coisa mundana que faria um ruído alto como parte de sua operação normal para completamente de funcionar, como motores de veículos, dobradiças, armas, explosivos, fogos de artifício, etc. Seus poderes desta blasfêmia ou qualquer outra blasfêmia ou efeito psíquico que criariam ruído alto não funcionam dentro desta área.<br>•  Ganhe ou conceda +1D ao agir sobre este poder em seguida.<br>•  Este poder pode facilmente afetar os parâmetros de rolagens.",
    tongue_narrate: "Escolha até um grupo de tamanho CAT [CAT:people] de humanos ou exorcistas ao alcance (pode incluir a si mesmo), um objeto ou local ao alcance, e um verbo. Então narre uma frase usando a seguinte estrutura:<br>(Ele/ela/eles) estava(m) (verbo)ando o/a (substantivo).<br><br>Por exemplo:<br>•  Ele estava abrindo a porta.<br>•  Ela estava caindo no ar.<br>•  Ele estava dirigindo o carro.<br>•  Eles estavam deitados no chão.<br><br>Role PSIQUE para seus efeitos, apenas gaste um pulso psíquico em sucesso. Após a frase terminar e se a rolagem for bem-sucedida, ela se torna verdade, incluindo mover quaisquer pessoas afetadas para onde precisam estar como se sempre estivessem lá. Este poder não ajusta memória humana nem pode criar nada, mudar ninguém, ou prejudicar alguém diretamente (mas pode facilmente prejudicar indiretamente).",
    tongue_die: "Você diz 'morra' e mata instantaneamente todos os humanos em uma área de até tamanho CAT [CAT:area], centrada em você. Não é opcional, você não escolhe quem matar ou poupar, e não requer rolagem. Se usou este poder pelo menos uma vez para matar uma pessoa, no fim da caçada preencha permanentemente uma caixa de pecado. Se usou pelo menos uma vez para matar mais de uma pessoa, preencha permanentemente 1d3 caixas de pecado.",
    tongue_snap_click_pop: "Você diz 'Snap', 'Click', ou 'Pop', e produz um efeito que normalmente produziria um desses sons. Por exemplo, pode usar 'click' para abrir uma porta trancada, apertar um botão, ou digitar em um teclado. Pode usar 'snap' para quebrar uma arma ou um braço. Pode usar 'pop' para estourar um pneu ou disparar uma arma que outra pessoa segura.<br><br>Se necessário, role PSIQUE para efeitos que seriam arriscados, incertos ou causar dano, apenas gaste pulso em sucesso. Caso contrário, este poder é sempre bem-sucedido. Quando você ou um aliado agir para ganhar vantagem deste poder, pode ganhar +1D.",
    playlist_vibe: "Quando uma cena começa, você pode usar este poder para tocar uma faixa da sua playlist. Decida se a faixa é Melancólica, Tranquila ou Agressiva. Ganhe um bônus baseado no tipo da faixa pelo resto da cena.<br>•  Melancólica: Você ou qualquer aliado apaga 1 de estresse quando falhar uma rolagem.<br>•  Agressiva: Após você ou aliado ganhar um ferimento, gancho ou aflição, ganha +1D na próxima ação.<br>•  Tranquila: No fim da cena, todos a curta distância de você apagam 1 de estresse se não houve rolagens arriscadas ou difíceis nesta cena.",
    playlist_replay: "Passiva: Sem gastar pulso psíquico, você ou aliado a curta distância realiza uma atividade de no máximo 10 segundos, que você grava no seu player. Grava você ou seu aliado no momento da gravação, incluindo roupa, fala e objetos segurados ou vestidos, mas nada ao redor. Pode manter 3 gravações.<br><br>Ativa: Pode reproduzir uma gravação gastando um pulso psíquico. Isso reproduz imediatamente um duplo psíquico da gravação. O duplo é fisicamente tangível, parece e soa convincente, pode causar dano e interage com o mundo físico, mas desmanifesta após 10 segundos e não pode interagir de forma alguma que não foi previamente gravada. Role PSIQUE para seus efeitos se forem incertos, contestados ou arriscados, apenas gaste pulso em sucesso.",
    playlist_boost: "Pode ativar este poder uma vez por cena antes de você ou aliado ao alcance usar uma blasfêmia e fazer uma rolagem de PSIQUE. Escolha uma faixa da playlist. Registre os três primeiros dígitos da duração (como 3, 3, 5). Zeros não contam, então uma faixa de 10:35 registraria 1, 3, 5. Para cada dado rolado, a ação ganha +1 CAT adicional para cada dado que corresponda a um número registrado da duração (mín +1 CAT, máx +3, máx CAT 7).",
    playlist_shuffle: "Pode escolher qualquer número de objetos, veículos ou pessoas na área afetada. Qualquer coisa trocada pode ter tamanho de até metade do CAT [HALF_CAT:size] (mín 0). Troque instantaneamente suas posições e momento. Deve trocar coisas de aproximadamente mesmo tamanho e massa. Se tentar diferente, ou se precisar rolar para efeitos como dano, role PSIQUE e apenas gaste pulso em sucesso. Quando você ou aliado agir para ganhar vantagem deste poder, pode ganhar +1D.",
    playlist_title: "Toque uma faixa da playlist. Pode manifestar a curta distância uma manifestação psíquica baseada em qualquer parte do título, de até CAT [CAT:magnitude] em tamanho ou magnitude. O efeito pode criar:<br>•  Uma cópia psíquica de qualquer objeto nomeado no título.<br>•  Uma cópia psíquica de qualquer humano ou animal no título.<br>•  Uma rajada breve de energia, clima ou força física (fogo/chuva/vento/empurrão/puxão/pressão) nomeada no título.<br><br>A manifestação dura até você rolar para seus efeitos ou ações, usar este poder novamente, ou a cena passar, então se dissipa. Qualquer coisa criada é tangível mas tem uma aura de irrealidade ou 'estranheza' para humanos comuns. Pode causar dano tangível ou força e interagir com o mundo físico, mas não é obrigada a seguir suas instruções se puder agir independentemente. Se o uso deste poder causar dano, ou for arriscado ou incerto, role PSIQUE para seus efeitos quando usado, apenas manifestando e gastando pulso em sucesso. Caso contrário, sempre tem efeito.",
    wire_disk: "Você toca um humano ou exorcista adjacente voluntário, ou um objeto, veículo ou construção de tamanho CAT [CAT:size] (incluindo qualquer coisa sobre ou dentro desse objeto), e armazena-o como um CD. Pode manter um número de CDs igual a CAT+1 [CALC:CAT+1]. Reiniciam entre missões e seus conteúdos são liberados. Uma pessoa armazenada fica em uma espécie de estase sem consciência ou sensação, não pode sofrer dano ou ser afetada de forma alguma, embora ganchos, talismãs e aflições em exorcistas dentro possam continuar acumulando, afetando-os instantaneamente ao serem liberados. Colocar um CD armazenado em um drive permite ler informações sobre seu cativo como um documento de texto. Quando ativar o CD novamente, ou se for quebrado antes, a pessoa ou objeto armazenado reaparece em um espaço a curta distância de você, independente de haver espaço ou não. Role PSIQUE para quaisquer efeitos.",
    wire_terminal: "Você manifesta um terminal de computador que emerge inofensivamente (mas de forma um tanto perturbadora) do seu corpo, geralmente do peito ou costas. Enquanto manifestando este terminal, atividades são difíceis se estiver se movendo ou sob pressão, mas pode agir normalmente de outra forma, incluindo digitar ou interfacear de si mesmo. O terminal tem conexão rápida de internet e energia, independente de localização. Qualquer outro personagem interagindo com o terminal pode usar suas perícias relevantes para coletar informação usando você. A primeira vez na cena que alguém coleta informação assim, também ganhe +1D. Encerre este poder com alguns momentos de concentração, retraindo o terminal.",
    wire_deck: "Você projeta um teclado de qualquer objeto, construção, veículo, humano ou exorcista. O teclado dura até produzir um novo ou até o fim da cena. Enquanto o teclado estiver fora e puder digitar nele, ao coletar informação sobre seu sujeito, pode interagir com ele como se fosse um computador. Pode rolar PSIQUE ou a perícia de interfaceamento, o que for maior. A primeira vez que fizer isso para cada teclado, ganhe +1D. Pode projetá-lo de superfícies impossíveis, pode ser feito de materiais incomuns, e não machuca a pessoa de onde emerge, embora seja difícil digitar neles se forem relutantes ou enquanto se movem.",
    wire_surge: "Você transpõe instantaneamente sua forma física e um grupo de até tamanho CAT [CAT:people] de humanos ou exorcistas voluntários a curta distância em uma carga elétrica psíquica, então viaja rapidamente por uma linha telefônica ou computador em rede, aparecendo instantaneamente do outro lado. No entanto, deve poder ver claramente seu destino, ou saber o número de telefone do alvo que quer alcançar, ou o endereço de rede do computador do outro lado. Pode usar este poder sem saber seu destino, mas onde acaba é inteiramente decisão do Admin.",
    wire_call: "Você liga para qualquer humano, pecado ou exorcista. Apenas gaste um pulso psíquico se atenderem. Se não tinham telefone, este poder manifesta um quando atendem, e um número novo para eles (que você não sabe a menos que digam). Este telefone é um pouco estranho e se desintegra em energia psíquica quando você descansar.",
    mother_unravel: "Você desfia sua pele, músculos e órgãos em uma massa pulsante. Pode reformar partes do corpo como mãos, bocas, olhos ou dentes em qualquer lugar desta massa à vontade. Enquanto nesta forma:<br>•  Não pode usar ou se beneficiar de seus próprios poderes psíquicos (exceto este), mas poderes ou efeitos psíquicos de outros ainda podem te afetar.<br>•  Pode se espalhar por espaços tão pequenos quanto um cano de pia, espalhar sua massa total por uma área igual a CAT [CAT:area], ou compactar sua massa em uma forma apertada do tamanho de uma mala.<br>•  Role PSIQUE para quaisquer efeitos que usaria esta forma enquanto ativa.<br>•  Humanos tipicamente ficam aterrorizados por esta forma, e a próxima ação contra um humano ou grupo de humanos após assumir esta forma ganha +1D.<br><br>Quando seu grupo descansar, ou quando encerrar este poder, você se reforma em qualquer área com espaço suficiente que sua massa esteja tocando. Se não houver espaço, você se reforma quando houver.",
    mother_polyp: "Você remove inofensivamente mas grotescamente e posiciona um ou ambos os seus olhos, ou sua boca (ou qualquer combinação) em um humano, exorcista, anomalia ou superfície plana que possa tocar. Para alvos relutantes ou desavisados, role PSIQUE e apenas gaste pulso e ative este poder em sucesso.<br><br>Pode ver e falar normalmente pelo seu olho e boca, mas eles desaparecem do seu rosto pela duração. Você sofre qualquer estresse que seu olho ou boca sofreriam como consequência de suas ações com eles, e retornam ao seu rosto quando encerrar este poder ou após sofrerem dano.<br><br>Adicionalmente, qualquer número de vezes enquanto ativo, pode sofrer 1 de estresse para usar um poder de blasfêmia de qualquer olho ou boca ao alcance CAT+2 [CAT+2:distance] como se estivesse lá, gastando pulso normalmente. Ganhe +1D se isso te conceder vantagem.",
    mother_knot: "Passiva: Quando ganhar qualquer quantidade de estresse, pode capturar sua energia negativa sem gastar pulso, aparecendo como um nó elevado na sua pele. Reduza estresse sofrido em 2 para cada nó ganho. Pode capturar até 3 nós. No fim de qualquer cena em que tenha um ou mais nós, role 1d6. Quando um nó estoura, sofra 2 de estresse irredutível.<br>•  Em 1-3, sofra 1d3 de estresse e estoure um nó.<br>•  Em 4-5, sofra 1 de estresse e estoure um nó.<br>•  Em 6, não sofra estresse e estoure um nó.",
    mother_colony: "Ganhe 1d3 de estresse, então você ou aliado ao alcance ganha um escudo carnoso que absorve 2 de estresse de dano externo. Se um personagem já tiver tal escudo, aumente em +2, mas também sofra 1d3 de estresse.",
    mother_coil: "Seu membro descasca sua carne e pele, então chicoteia um alvo a curta distância como um chicote, causando dano ou puxando-o alguma distância. Role PSIQUE para seus efeitos.<br>•  Ganhe +1D se tiver 3 ou menos caixas de estresse restantes.<br>•  Ganhe +2 CAT se tiver sofrido inundação de pecado nesta missão."
  },
  // Virtue translations (GFF-1)
  virtues: {
    compendiumDescs: {
      justice: "Justiça é geralmente considerado o exorcista mais poderoso no arsenal atual de CAIN, um solitário de poucas palavras com extrema liberdade de ação e permissão incomum para vagar. Isso deve-se ao fato de que a alta blasfêmia de Justice, Law, não permite que ele desobedeça ordens de um superior de forma alguma, tornando-o o cão de ataque perfeito. Ele tem o maior número de execuções registradas na história de CAIN e um histórico de combate quase impecável, sendo objeto de temor entre os soldados comuns.<br><br>Em sua maioria, ele parece considerar sua posição como uma realidade aceita e passaram a incorporar seu papel como carrasco de CAIN. Ele é extremamente eficiente e a natureza avassaladora de suas habilidades lhes permite trivializar até mesmo os oponentes mais tenebrosos.<br><br><em class=\"virtue-desc-note\">É comumente teorizado que Temerity possui uma subdivisão especial inteiramente dedicada à contingência de que Justice consiga contornar sua própria blasfêmia.</em>",
      faith: "Fé não é só uma anomalia dentro de CAIN, ela também é uma anomalia como um todo. Ela nasceu em um vilarejo na Europa Oriental em 1672 e desde jovem foi forçada a entrar numa ordem monástica devido à suspeita que estava amaldiçoada ou fazendo pacto com o Diabo. Não importa o quanto Fé crescia, ela nunca parecia envelhecer muito além dos 20 anos e mantinha um exemplo de saúde e condicionamento físico exemplar, manifestando força e constituição sobrenatural. Depois dela se tornar um eremita cerca de cem anos após seu nascimento, ela foi descoberta pela antiga CAIN, quando foi determinado que ela era o único indivíduo do mundo inteiro que não possuía nenhuma Graça ou Pecado.<br><br>A maioria dos humanos manifesta uma pequena quantidade de Graça ou Pecado devido a um trauma psíquico latente, mas Fé é um completo vazio. Agora é teorizado que é devido ela ter manifestado uma 'anti-blasfêmia', uma blasfêmia que absorve todas as outras. Isso fez ela ser completamente imune aos fenômenos psíquicos e também biologicamente imortal.<br><br>Fé tem o menor número de mortes confirmadas que qualquer virtude. Há rumores que a CAIN usa ela principalmente para missões de controle e captura de vinculadores, algo que ela demonstra ser assustadoramente eficaz em.",
      charity: "Uma virtude amplamente temida, Caridade imediatamente se destaca entre seus colegas devido a sua situação única. Caridade é funcionalmente a mesma pessoa que ocupa dois corpos - ou alternativamente duas pessoas separadas com a mesma personalidade e aparência física até cada fio de cabelo individual. Eles podem até compartilhar emoções e podem reagir ou falar previamente de um corpo para o outro como se fosse reflexo. Isso é devido a alta blasfêmia da Caridade, Entrelaçar, embora extremamente poderosa, forçar uma fusão de seus usuários para que, com o decorrer do tempo, eles se tornem gêmeos perfeitos - um amálgama dos dois, misturados juntos, fisicamente e mentalmente. Já que a habilidade de Caridade funciona a qualquer distância, eles são frequentemente enviadas separadas para diferentes engajamentos através do globo, contudo elas preferem trabalhar juntos.<br><br>É conhecimento comum que houve várias gerações de Caridade com o decorrer dos anos, desde pelo menos os anos 1850, e nenhum dos corpos é o original. Quando um morre, CAIN exige uma substituição a partir de um grupo selecionado.<br><br><em style=\"color:var(--vc)\">Tendo criado vínculos com Caridade, você acabou de entrar nessa lista. Parabéns.</em>",
      fortitude: "Considerada uma 'arma de eliminação de nível de calamidade reserva' e uma das poucas exorcistas na história consideradas próximas de ultrapassar a categoria 7 em suas habilidades, Fortitude é mantida em um rigoroso ciclo de congelamento. Uma lutadora extremamente volátil e potente, sua capacidade de executar pecados só é comparável à sua sede por destruição completa e desenfreada. Liberar Fortitude em uma situação é muitas vezes o equivalente a tentar quebrar uma noz com uma prensa hidráulica industrial.<br><br>A alta blasfêmia da Fortitude, Força, permite-lhe habilidades físicas incomparáveis, mas sem o treinamento adequado, seus usuários podem literalmente se despedaçar. Seu notável desprezo pela vida humana e misantropia desenfreada a tornou relativamente impopular nos altos escalões da organização e eles têm relativamente poucos admiradores, mesmo entre os exorcistas juniores mais pessimistas.<br><br><em style=\"color:var(--vc)\">Existe uma divisão especial na divisão de armas da CASTLE, chamada de \"Divisão de Quebra\", dedicada a \"temperar\" armas para uso da Fortitude, pois sem materiais adequados elas não resistem às forças físicas envolvidas. A equipe de pesquisa especializada sente grande prazer em seu trabalho e suas descobertas avançaram muito o armamento da CAIN.</em>",
      hope: "Esperança está entre os ativos mais valiosos que CAIN possui. Normalmente abençoados com fortes habilidades precognitivas e telepáticas, sua capacidade de suportar a alta blasfêmia do Véu tem sido um pilar da atividade da organização por centenas de anos e permitiu que CAIN operasse em segredo mesmo nas circunstâncias mais extremas.<br><br>Ao contrário da maioria das outras blasfêmias, o poder total do Véu pode ser imbuído e transmitido a outros portadores, escolhidos de um grupo de exorcistas de extrema força mental e cognitiva. Há uma longa linhagem de Esperanças (o atual é o quadragésimo primeiro) desde a criação da organização, e eles geralmente são aposentados* quando o estresse do Véu se torna insuportável.<br><br>Devido ao seu importante papel na organização, Esperança nunca tem permissão para deixar a estação orbital SERAPH, exceto em circunstâncias extremas ou uma vez por ano, no Natal.<br><br><span class=\"virtue-food-note\">*Consulte a nota doutrinária C0447 do CASTLE</span><br><br><em style=\"color:var(--vc)\">Quando usado em sua capacidade máxima, o Véu pode apagar e reescrever a memória de milhares, senão centenas de milhares de pessoas, por vários dias seguidos. Esse uso normalmente mata Esperança.</em>",
      prudence: "Portador da poderosa blasfêmia Aperto, Prudência é uma Virtude amigável e carismática com uma agenda muito ocupada. Além de ser um combatente poderoso, Prudência desempenha um papel vital tanto na estrutura interna da CAIN quanto em seu relacionamento com governos mundanos, devido à sua habilidade única de fazer cumprir acordos. Ele possui múltiplas identidades de cobertura, fala vários idiomas e geralmente tem uma agenda de congelamento muito leve, já que a CAIN o envia para missões de longo alcance e longa duração. Quando aparece em público, ela está sempre excepcionalmente bem vestido(a) e eloquente.<br><br>Como emissário(a) da CAIN junto aos governos humanos, sua identidade tem sido objeto de especulação entre teóricos da conspiração online, algo que a organização tentou veementemente suprimir.<br><br><em style=\"color:var(--vc)\">Não está claro por que o \"APERTO\" funciona com base em brincadeiras infantis, mas há rumores de que esteja relacionado a um desejo inerente aos seres humanos de brincar, a teoria do \"homo ludens\".</em>"
    },
    favoriteFoods: {
      justice: 'Comida Saudável, Tâmaras',
      faith: 'Fast Food, Doces, Galinha picante',
      charity: 'Chá da tarde, Gyoza/Jiaozi',
      fortitude: 'Cachorros quentes*<br><span class="virtue-food-note">*Pelo adendo CASTLE 3004, sujeito é apenas permitido consumir pasta de nutrientes</span>',
      hope: 'Refeição pré-embalada 402A',
      prudence: 'Nozes'
    },
    likes: {
      justice: ['Debate Religioso', 'Música Clássica', 'Cleanliness'],
      faith: ['Cachorros', 'Tardes lentas', 'Tirar fotos', 'Gachapon', 'Jogos de celular', 'Jogos de luta'],
      charity: ['Moda', 'Discutir online', 'Viajar', 'Dias chuvosos'],
      fortitude: ['Enfrentar oponentes fortes'],
      hope: ['Video Games', 'Banhos luxuosos', 'Feriados'],
      prudence: ['Uísque puro', 'Romances', 'Trens', 'Caminhadas longas']
    },
    dislikes: {
      justice: ['Charity', 'Tardiness', 'Cachorros'],
      faith: ['Fortitude', 'Pessoas rudes', 'Trabalho', 'Filmes de horror'],
      charity: ['Justice', 'Faith', 'Pessoas chatas', 'Conversas longas'],
      fortitude: ['Humanos', 'Exorcistas', 'Todas as outras virtudes', 'Pecados', 'Liderança da CAIN'],
      hope: ['Barulhos altos', 'Pessoas barulhentas', 'Justice', 'Fortitude'],
      prudence: ['Charity', 'Justice', 'Explicar coisas para pessoas lentas']
    },
    strictures: {
      justice: 'Você não pode ignorar ordens de um superior. Role 0d em qualquer ação que você ache que viole a lei.',
      faith: 'Você não pode machucar alguém ou algo. Role 0d para ações que você considera falta de educação.',
      charity: 'Quando possível, você deve participar em trabalho em equipe ou ajuda. Role 0d quando tentar se esconder, agir furtivamente ou evitar chamar atenção.',
      fortitude: 'Você não pode perder a oportunidade de entrar em uma luta. Role 0d em ações que você escolheu conversar em vez de agir.',
      hope: 'Você não pode tomar ações que seriam barulhentas ou chamam atenção. Você rola 0d para ações de ajuda.',
      prudence: 'Você deve honrar todos os acordos e promessas. Role 0d ao escolher a violência em vez da negociação.'
    },
    bondAbilities: {
      justice: [
        'Ganhe um gatilho de XP extra: Você seguiu o dogma de CAIN?',
        'Ganhe a blasfêmia Lei. Você pode usá-la uma vez por missão.',
        'Se você executou um pecado em vez de poupá-lo, reduza o pecado em 1 após reduzi-lo pela metade. Se você poupou ou falhou em executá-lo, aumente o pecado em 1d3 após reduzi-lo pela metade.',
        'Você sempre ganha o último efeito da Lei gratuitamente (torna algo específico menos difícil ou arriscado).'
      ],
      faith: [
        'Uma vez por missão, se você for capaz de comer doces, você pode aliviar 1 pecado.',
        'Você ganha a blasfêmia Vazio. Você pode usá-la uma vez por missão.',
        'Inundação de pecado apenas reduz o limite para 1 ao invés de 2.',
        'Quando assim que você escolher, sua Blasfêmia Vazio se torna Desafio Imaculado do Céu. Essa escolha é irreversível.'
      ],
      charity: [
        'Você pode se comunicar em telepatia com qualquer exorcista que tenha feito contato físico direto.',
        'Ganhe a blasfêmia Entrelaçar.',
        'No começo de uma missão, você pode pegar uma habilidade de agenda de qualquer outro membro do grupo. Pelo resto da missão, você pode usar essa habilidade como sua.',
        'Poderes que visam "eu" agora podem visar qualquer exorcista que tenha Entrelaçado com.'
      ],
      fortitude: [
        'Você nunca rola 0d para infligir dano ou violência (sempre role pelo menos 1d).',
        'Qualquer quantidade de dano que você infligir é instantaneamente fatal para humanos.',
        'Você ganha a blasfêmia Força. Você pode usá-la com segurança uma vez por missão. Se usar uma segunda vez, quando a cena terminar, você se despedaça por dentro e sofre morte instantânea.',
        'Você pode usar Força uma segunda vez com segurança.'
      ],
      hope: [
        'Uma vez por missão, você pode re-rolar qualquer ação realizada em furtividade ou para evitar ser notado, segundo resultado é final.',
        'Obtenha a blasfêmia Véu. Você pode usá-la uma vez por missão.',
        'Humanos comuns sempre esquecem que você esteve lá se você ficar fora de vista por 77 segundos ou mais. Você não pode desativar essa habilidade.',
        'Você pode usar Véu para apagar a memória por períodos mais longos (veja Ruptura de Memória em Massa).'
      ],
      prudence: [
        'Quando você aperta a mão de um humano disposto a fazer um acordo ou promessa, se alguém quebrar, sofrerá morte instantânea. Isso se aplica a você, e ambos estão cientes dos efeitos.',
        'Adquira a blasfêmia Aperto. Você pode usá-la uma vez por missão.',
        'Sua habilidade de nível 0 agora se aplica a exorcistas e pecados.',
        'Você pode usar Aperto mais uma vez durante uma missão, mas se o fizer, o Mestre de Jogo escolhe o jogo.'
      ]
    },
    highBlasphemyNames: {
      justice: 'Lei',
      faith: 'Vazio',
      charity: 'Entrelaçar',
      fortitude: 'Força',
      hope: 'Véu',
      prudence: 'Aperto'
    },
    highBlasphemy2Names: {
      faith: 'Desafio Imaculado do Céu'
    },
    highBlasphemyDescs: {
      justice: 'Você estabelece uma regra da realidade física que afeta tudo em uma área circular ao seu redor, chamada o Tribunal, com um raio igual a CAT+1 [CAT+1:area]. Você pode excluir-se. Quaisquer mudanças feitas ocorrem instantaneamente e persistem dentro da área, mas a área em si não se move. Este poder sempre pode eliminar, destruir ou alterar totalmente seres, objetos ou estruturas mundanas. Seres de vontade forte ou sobrenaturais, como exorcistas ou pecados, podem resistir parcialmente aos seus efeitos, mas os humanos são sempre afetados instantaneamente. Se você sair da área ou a cena terminar, o efeito termina.<br><br>Para usar a Law, gaste todos os seus pulsos psíquicos restantes (mínimo 1), então complete a frase:<br><br>No Tribunal, ____ é/são _____<br><br>Você só pode usar palavras da lista abaixo.<br><br>Em seguida, escolha um efeito:<br>\u2022 Conceda até três dados de vantagem (total) a um aliado enquanto a corte estiver ativa. Estes podem ser concedidos um de cada vez ou todos de uma só vez.<br>\u2022 Mate instantaneamente todos os humanos na área ou que entrem na área enquanto a corte estiver ativa.<br>\u2022 Corte um talismã rolando PSIQUE. Este ganha +1D e causa +1 de dano cortante em pelo menos um sucesso.<br>\u2022 Torne algo específico menos difícil ou menos arriscado enquanto a corte estiver ativa.<br><br>Este poder pode facilmente afetar os parâmetros das rolagens enquanto estiver na área e pode até mesmo fazer com que rolagens não sejam necessárias para certas tarefas.<br><br>Efeitos adicionais ficam a critério do Mestre e podem ser improvisados dependendo da narrativa.',
      faith: 'Gaste todos os pulsos psíquicos restantes (mín. 1). Pela duração da cena, você se torna completamente imune a fenômenos psíquicos. Dano físico, como ataques físicos de Pecados, pode afetá-lo normalmente. Você não é afetado por aflições (permanecem suprimidas pela cena). Em troca, você não pode usar ou ser afetado por qualquer blasfêmia além desta, incluindo de aliados. Diferente de outros poderes, você não pode encerrar este efeito antes.',
      faith2: 'Esse poder tem a mesma função que Vazio, exceto que é permanente. Efeitos: Você não pode usar ou ser afetado por blasfêmias. Você não ganha, interage ou gasta pulsos psíquicos. Seu pecado retorna para 0, não pode mais ganhar pecado ou inundar em pecado. Mudanças cosméticas de marcas persistem mas sem efeito. Pode gastar 1d3 de estresse ao invés de pulso para +1D com habilidades físicas. Enfrentar pecados mundanamente não é mais difícil, habilidades físicas são 1/2 CAT em capacidade (pode ir além em +1 CAT por 1d3 estresse). +1 máximo em ferimentos. Expectativa de vida estende por 10d10 anos.',
      charity: 'Sem gastar pulso, escolha um exorcista disposto. Pela duração da missão: Quando um ganha ou perde estresse ou gasta/ganha pulso, pode atribuir para ambas as pessoas (não pode ser reduzido). Pode se comunicar telepaticamente a distâncias extremas e sentir emoções fortes reflexivamente. Entretanto: Quando um ganha aflição ou gancho, ambos ganham. Quando um ganha pecado, ambos ganham. Se um sofrer inundação de pecado ou sofrer morte instantânea, esta blasfêmia se quebra pela missão. Após a missão: Ambos mudam aparência física para combinar (cada um escolhe uma característica para compartilhar, leva 3 dias). Cada um pega um item de agenda do parceiro como item em negrito.',
      fortitude: 'Gaste todos os seus pulsos restantes (mín. 1). Pelo restante da cena, suas habilidades físicas mundanas são iguais a CAT e lutar contra pecados com forças mundanas não é mais difícil. Pode aumentar qualquer ação física para CAT+2 ganhando 2d3 de estresse (pode causar ferimento). Todas as armas quebram após uso, a menos que temperadas (temperar entre missões por 1 scrip). Ao final da cena, sofra um ferimento e entre em coma até descansar.',
      hope: 'Gaste todos os pulsos psíquicos restantes (mín. 1) para apagar instantaneamente a memória de todos humanos ou exorcistas (exceto você) em uma área de tamanho CAT [CAT:area] centrada em um ponto a longa distância que possa ver. Não pode excluir ninguém. Todos ficam insensíveis por exatamente 11 segundos. Se um aliado agir nesta abertura, ganha +1D. Então, esquecem tudo dos últimos 77 segundos (incluindo o período insensível). O cérebro processará como se esse tempo nunca tivesse passado.',
      prudence: 'Gaste todos os pulsos psíquicos restantes (mín. 1) para impor instantaneamente um jogo a si mesmo e todos outros no alcance determinado por CAT [CAT:distance]. Quebrar as regras causa dor, hemorragia e morte. Para você/aliados: ações se tornam difíceis ao evitar quebrar a regra; quebrar intencionalmente = 2d3 estresse (não pode ser reduzido). Para alvos: quebrar intencionalmente = 1d3 cortes no talismã de execução (humanos morrem). Pode ajudar aliado gratuitamente 3 vezes sem rolar (não conta como ação em conflito). Não pode encerrar antes.'
    },
    massMemoryRupture: {
      title: 'Ruptura de Memória em Massa',
      description: 'No nível de vínculo III, você pode estender o Véu por períodos mais longos. Custos são cumulativos.',
      tiers: [
        { duration: 'Até 10 minutos', cost: '1d3+1 estresse' },
        { duration: 'Até 1 hora', cost: '...e também ganha 1d3+1 de pecado' },
        { duration: 'Até 10 horas', cost: '...e também perde permanentemente uma memória importante (sabor, nome dos pais, lembrança querida)' },
        { duration: 'Até 1 dia', cost: '...e também reduz limite de inundação de pecado em 2' },
        { duration: 'Até 10 dias', cost: '...e esquece seu próprio nome. Não pode usar habilidades de agenda nem ganhar XP. Deve trocar de agenda antes da próxima missão.' },
        { duration: 'Reinício completo', cost: 'CAIN esquece que você existe. Você esquece que existe. Seus aliados esquecem. Você se torna uma casca vazia. Crie um novo personagem.' }
      ]
    },
    termsOfLaw: ['Rápido', 'Lento', 'Gravetos', 'Pedras', 'Papel', 'Pano', 'Sangue', 'Pregos', 'Pele', 'Fundas ou Balas', 'Flechas', 'Lâminas', 'Sólido', 'Líquido', 'Metal', 'Macio', 'Afiado', 'Peso', 'Luz', 'Terra', 'Fogo', 'Água', 'Ar', 'Proibido', 'Puxado', 'Repelido'],
    games: ['O Chão é Lava (Não toque no chão)', 'Rei da Colina (Deve permanecer dentro de uma pequena área)', 'Pega-pega Invertido (Não toque em um pecado, humano ou exorcista)', 'Olha, Sem Mãos (Não use as mãos)', 'Competição de Silêncio (Não fale nem faça barulho)', 'Marco Polo (Não abra os olhos. Alvos devem dizer Polo quando disser Marco)', 'Batatinha Frita (Pare de se mover no sinal vermelho)']
  }
};

// ════════════════════════════════════════════════════════════════════
// DATA: Blasphemy Quirks (GFF-4.1)
// ════════════════════════════════════════════════════════════════════

const QUIRKS = {
  tension: {
    replaces: 'tension_iron_soul',
    expansion: 'gff4',
    options: [
      { id: 'steel_soul', name: 'Steel Soul', image: 'img/quirks/steel_soul.png', type: 'replace', grantsPower: 'tension_severance', description: "You specialize in projecting tension fields over bladed weapons. You gain the Severance power for free (even past the cap of 5 powers). You always use it at +1 CAT. However, you can only use Severance while wielding a bladed weapon in one or both hands. Additionally, you can project a psychic cutting force at short range by rolling PSYCHE. This doesn't cost a psyche burst but doesn't have enough force to significantly harm someone - enough to sever a strap, cord, or cause minor cuts." },
      { id: 'silver_soul', name: 'Silver Soul', image: 'img/quirks/silver_soul.png', type: 'replace', description: "Your body is infused with psychic fields that are stronger when you follow your convictions, and weaker when you don't. When you end a conflict scene, you automatically erase 1 stress if you followed any agenda item in that scene. If you didn't follow any, gain 2 nonlethal stress instead." },
      { id: 'lead_soul', name: 'Lead Soul', image: 'img/quirks/lead_soul.png', type: 'replace', description: "Your body is suffused with tension fields that make you extremely dense, heavy, and tough. Your weight is tripled and only forces 2 categories higher than your current category can move you against your will. Your unarmed strikes count as service weapons (and can be upgraded). In addition, you can only take a maximum of 1 stress from falling or impacts from vehicles or objects, no matter the category.<br><br>In return, actions that require you to move quickly are hard for you by default." }
    ]
  },
  flux: {
    replaces: 'flux_steal_time',
    expansion: 'gff4',
    options: [
      { id: 'clockstopper', name: 'Clock Stopper', image: 'img/quirks/clockstopper.png', type: 'replace', description: "You can use the Stop power without spending any psyche bursts, lasting a full minute, and it does not cause temporal instability. Using the power this way 'steals time' from your future lifespan and supernaturally ages you.<br><br>Draw an actual clock on your sheet, starting at 12:00 noon, then advance time by 1d3 hours. Also advance the clock by 1 hour if you suffer sin overflow, or you may advance it any time you would gain temporal instability (1 hour for 1 temporal instability). This clock cannot be affected in any other way.<br>•  12-5pm: ages you 1d3 years.<br>•  6-9pm: ages you 1d6+2 years.<br>•  10-12: ages you 2d6+8 years.<br><br>This has no effect on your abilities. At midnight, you die of old age (this cannot be ignored)." },
      { id: 'timesplitter', name: 'Time Splitter', image: 'img/quirks/timesplitter.png', type: 'replace', uses: 'hunt', description: "Once a hunt, without spending a psyche burst, you may cause a temporal fracture when undertaking any course of action. This fracture ends when an action roll is made, when you would die or suffer sin overflow, or after exactly 777 seconds have expired in the fiction.<br><br>This activity takes place in an alternate timeline, in which everything is otherwise exactly the same. When the fracture expires, you revert to the main timeline, undoing all outcomes, resources spent, harm taken, or consequences, but keeping any knowledge or memory from the alternate timeline.<br><br>You or an ally may take +1D on the next roll that takes advantage of this information. Then play forward as normal." }
    ]
  },
  ardence: {
    replaces: 'ardence_inner_furnace',
    expansion: 'gff4',
    replacedPowers: { fury: 'ardence_blackmatter', sabre: 'ardence_nihil' },
    options: [
      { id: 'void_furnace', name: 'Void Furnace', image: 'img/quirks/void_furnace.png', type: 'replace', description: "Your powers focus on the cold at the end of the universe, the fathomless emptiness of entropy. This changes the following:<br>•  Pallor: You are always cold to the touch and can't be warmed up. You can't suffer negative effects or harm due to cold weather or temperature (even extreme cold), but you still feel it. You subtract 1 from all your resting rolls if the area where you are resting isn't warm.<br>•  Void Affinity: No power you take can ever produce heat.<br>•  Rise from Abyss: Your powers from this blasphemy increase in potency the closer you are to death. They gain +1 CAT in all capabilities if you have an injury, a further +1 CAT if you have two or more, and a further +1 CAT if another exorcist has died this mission.<br>•  Collapse: If you die, your body snap freezes and begins collapsing into a non-space. Touching it without protection can inflict incredible harm from the cold (around 3-4 stress). It will require special removal by CAIN, therefore it cannot be recovered by your compatriots.<br>•  Cold Swap: Instead of Fury, you can choose Black Matter. Instead of Sabre you can choose Nihil.",
        altPowers: [
          { id: 'ardence_blackmatter', name: 'Black Matter', replaces: 'ardence_fury', tags: ['Instant', 'Long'], burst: 'required', description: "You instantly disperse heat in an area, creating a killing flash freeze at a location in range with a blast area up to 1/2 CAT [HALF_CAT:area]. This inflicts harm on anything living in the area and instantly freezes liquids and environments, causing damage. Roll PSYCHE for its effects, and only spend a psyche burst on success.<br><br>When you use this power, you may inflict 1 nonlethal but irreducible stress on yourself to gain +1D on the roll as your body partly freezes over. If you do, increase the nonlethal stress suffered the next time you use this power by +1. This effect stacks but resets when you rest." },
          { id: 'ardence_nihil', name: 'Nihil', replaces: 'ardence_sabre', tags: ['Instant', 'Adjacent'], burst: 'required', description: "By placing your palms outwards, you release a terrifying annihilative force at hand's reach, affecting a base 1/2 CAT [HALF_CAT:area] area immediately adjacent to you. Roll PSYCHE for its effects, and only spend a psyche burst on success. This force is tremendous but slow, giving it the following:<br>•  It gains +2D when rolling to blast through immobile targets (living or nonliving), walls, constructions, or inanimate objects.<br>•  Unless you are set up by another exorcist, using this power when a roll is risky is always hard." }
        ]
      }
    ]
  },
  vector: {
    replaces: 'vector_brake',
    expansion: 'gff4',
    options: [
      { id: 'axis', name: 'Axis', image: 'img/quirks/axis.png', type: 'replace', description: "Your powers rely on rotational velocity.<br><br><b>Inscribe Axis</b>: The Fling and Current powers from this blasphemy move things either clockwise or counter clockwise around you or a point you choose in hand's reach, instead of in a straight line. The range of these abilities instead becomes the radius of this circular path.<br><br><b>Holy Chakra</b>: You may roll 1d6 when an object or projectile equal or lower than your CAT would impact you. If you roll a 4+, it instead orbits harmlessly around you and away from you, missing you and inflicting a max of 1 stress. If successful, lose the use of this passive until you rest." },
      { id: 'rail', name: 'Rail', image: 'img/quirks/rail.png', type: 'replace', description: "When moving, you automatically increase your own velocity. All your own movement (not movement granted to others), is +1 CAT higher, including movement without your powers. You can 'skate' on a small bubble of vectorized air underneath your feet, allowing you to move across water or slippery surfaces.<br><br>However, none of your powers work if you are unable to move while using them." }
    ]
  },
  tongue: {
    replaces: 'tongue_the_word',
    expansion: 'gff4',
    options: [
      { id: 'taboo', name: 'Taboo', image: 'img/quirks/taboo.png', type: 'replace', hasNotes: true, description: "Certain words are banned for you. When you, the character or the player, speak those words (even inadvertently) in any language and in any voice louder than a whisper, resolve any powers triggered by your speech, then it inflicts a supernatural destructive shockwave on everything other than you in a CAT+1 [CAT+1:area] area centered on you (roll PSYCHE for effects, including harm, etc), and temporarily deafens everyone in that area. Your voice is blown out and your character is unable to speak or use powers from any blasphemy until you rest.<br><br>Banned Words: Sin, Cain, the name of any blasphemies or blasphemy powers, including your own, the name of any sin or sin type (If you don't know a word is a Blasphemy/Power or a Sin Name/Type, it does not trigger Taboo)." }
    ]
  },
  playlist: {
    replaces: 'playlist_playlist',
    expansion: 'gff4',
    options: [
      { id: 'catch_vibe', name: 'Catch Vibe', image: 'img/quirks/catch_vibe.png', type: 'add', description: "Your starting playlist is smaller (4 tracks). However, you can add or swap in and out any (real life) music track played during the session by you, your GM, or any of the players into your active playlist for the remainder of the hunt, or any music track played diagetically (in the game). This could push it up to 10 tracks." }
    ]
  },
  gate: {
    replaces: 'gate_pocket',
    expansion: 'gff4',
    options: [
      { id: 'stroll', name: 'Stroll', image: 'img/quirks/stroll.png', type: 'replace', uses: 'scene', description: "Once a scene, without spending a psyche burst, you can attempt to teleport yourself to a point in short distance you can see (even just partly) with enough space for you to arrive by rolling 1d6. On a 3+, you are successful. On a 1-2, you teleport anyway to a point in range, but the Admin tells you where you end up." },
      { id: 'rummage', name: 'Rummage', image: 'img/quirks/rummage.png', type: 'replace', uses: 'scene', description: "Once a scene, you can spend 1 kp to pull a random item out of a space that an item could be stored (clothing, suit pocket, in a desk drawer, etc). This only works if you are not looking while you're pulling the item out. The item that comes out may not necessarily logically fit the space, but comes out anyway. Roll 1d6, then the Admin picks something from the rolled list.<br>•  1. Fountain pen, Live Grenade, Leather gloves, Lighter (small, plain), Pack of cigarettes (2 missing), Phone charger.<br>•  2. Roll of coins, Crowbar, Stapler, Claw hammer, Camcorder (1 hour tape), Chapstick.<br>•  3. Handgun (unloaded), two cigarettes, Faded photograph, Instruction manual for building furniture (in Swedish), Map of the area (folded, well used, in Swedish), Large pack of caramel candies.<br>•  4. Cell phone (10% battery), Thick sheathe of printer paper, Large amount of cash, Full bottle of wine, Fire Axe, Huge box of nails.<br>•  5. Chewing Gum, Lipstick, Coffee Mug (novelty), Folded Letter, Hat (situation appropriate), Clip of 9mm ammo for a handgun.<br>•  6. Useful key, Pocket Knife, Lighter (oversized, novelty), Bicycle (foldable), Dictionary for translating Swedish, six sided die." }
    ]
  },
  smother: {
    replaces: 'smother_absentia',
    expansion: 'gff4',
    options: [
      { id: 'digit', name: 'Digit', image: 'img/quirks/digit.png', type: 'replace', description: "You can instantly (and cleanly) lose a finger to gain +1D and +1 CAT to any power when you use it. It disappears as if it had been cut off a long time ago. Roll 1d6 (2-3: left hand, 4-5 right hand).<br><br>If you run out of fingers on one hand, you automatically lose fingers on the other. If you roll a 1, you lose another finger and roll again (this can keep going!). If you roll a 6, you can choose which hand you lose a finger on.<br><br>Gain -1D on any rolls that would require using the affected hand until the next hunt, when you have time to adjust to the disability. If you have no fingers left, you lose your head instead and suffer (gruesome) instant death, which cannot be ignored." },
      { id: 'ban', name: 'Ban', image: 'img/quirks/ban.png', type: 'replace', uses: 'hunt', grantsPower: 'smother_abstract', description: "Gain the Abstract power from this Blasphemy for free (even past the limit of 5 powers). Once per hunt, you can use it to affect a single human or exorcist, leaving them an unrecognizable blur and preventing them from taking action. They recover if taking harm or if the scene passes.<br><br>Roll PSYCHE for effects and only spend a psyche burst and expend the special use of this power on success. Take or grant +1D on the next action taking advantage of this as normal." }
    ]
  },
  edit: {
    replaces: 'edit_mimic',
    expansion: 'gff4',
    options: [
      { id: 'scenery', name: 'Scenery', image: 'img/quirks/scenery.png', type: 'replace', uses: 'scene', description: "Once a scene, when using any power from this blasphemy, if you can pull from a work of art nearby, it does not cost a psyche burst. The same work of art does not work twice in the same hunt, and the quality of the end result is dependent on the quality of the artwork." },
      { id: 'alter', name: 'Alter', image: 'img/quirks/alter.png', type: 'replace', description: "When you rest or go to sleep, you disappear and are replaced by a different version of yourself with similar memories. These versions of yourself rotate in from another reality where this power activated. Your appearance changes as if you used the Mimic passive. Choose one:<br>• You are holding something small but useful (a tool, a weapon, a key, a map).<br>• You have faint memories of a piece of information pertinent to the current investigation. Ask the GM a yes or no question about the current hunt and get a truthful answer.<br>• You are slightly less stressed (-1 stress) than your current version." }
    ]
  },
  whisper: {
    replaces: 'whisper_shadow',
    expansion: 'gff4',
    options: [
      { id: 'the_future_rules', name: 'The Future Rules!', image: 'img/quirks/the_future_rules.png', type: 'add', hasNotes: true, description: "You cannot die, except from causes which aren't ignorable. If you would die, you miraculously survive in an improbable way, pass out, and come to consciousness at the start of the next scene with 1 remaining injury and half your stress full.<br><br>However, roll 1d6 at the end of each mission you complete. On a 1, foreboding doom sets in, and you become certain that the next mission is the one you die on. Increase the range of this number by +1 for each mission it doesn't trigger (so the next time would be on a roll of 1-2).<br><br>While you are affected by foreboding doom, you lose your ability to ignore death and suffer instant death instead any time you suffer an injury. You can defy this fate as normal." }
    ]
  },
  bind: {
    replaces: 'bind_sin_binding',
    expansion: 'gff4',
    options: [
      { id: 'sin_strike', name: 'Sin Strike', type: 'add_free', grantsPower: 'bind_sin_strike', description: "You can command an active sin to attack by spending a psyche burst as long as both your sin and its target are in range, and you can communicate with it. Roll PSYCHE for its effects. The attack has supernatural potency." },
      { id: 'sin_evolve', name: 'Sin Evolve', type: 'add_free', description: "Your bound sins increase in ability as you gain category.<br>•  CAT 2+: Your sins gain the ability to speak and develop a humanlike intelligence. Only psychically sensitive people can hear them.<br>•  CAT 3+: Your sins can take on a humanlike form, or a larger animal-like form, or switch between.<br>•  CAT 4+: Your bound sins can appear visible and audible to humans. Graceless humans typically find this traumatic (roll PSYCHE for any effects).<br>•  CAT 5+: You can have two active sins out at once. Any action you take with them must apply to one or the other. Failing to absorb stress for an action taken by a sin banishes both of them." },
      { id: 'menagerie', name: 'Menagerie', image: 'img/quirks/menagerie.png', type: 'add_free', description: "When you defeat a sin during a hunt, you may bind it as a new bound sin during a rest. This applies even for minor sins or foes with the type 'sin'. A captive sin is mechanically identical to your original bound sin but may differ in aesthetics and personality. You can swap your active bound sin in and out, including your original bound sin, and keep up to six. Inactive sins retract into a dormant state inside your sin seed." },
      { id: 'wretched_host', name: 'Wretched Host', image: 'img/quirks/wretched_host.png', type: 'replace', grantsPower: 'bind_surrender', description: "You don't have a bound sin. Instead, you are a former type II sin host, where the sin is fused to your flesh and is part of you.<br><br>You gain the Surrender blasphemy power for free, it loses the charm tag, and its effects can stack up to three times on you. Instead of costing Psyche burst, it always costs 1 sin to activate.<br><br>All powers that would apply to your sin instead apply to you, and physically transform you." },
      { id: 'ten_thousand_sword_king', name: 'Summon the Ten Thousand Sword King', image: 'img/quirks/ten_thousand_sword_king.png', type: 'add_free', specialRender: 'sword_king', grantsPower: 'bind_sword_king', description: "If you have the bind blasphemy and are either CAT 5 or on the brink of death, you can beckon the infinite blue. Summoning the King immediately initiates an apocalyptic force in an area around the size of a town (around CAT 5), centered on you. Sins and exorcists in the area, including you, roll 1d6 and add their category. If the result is 9 or higher, they survive, otherwise they are obliterated. Exorcists suffer instant death, sins are reduced to ashes. This fate can be defied as normal. Perfect Sins always survive. Everything else in the area CAT 5 or under is annihilated.<br><br>Summoning the King can only be done once in a game of CAIN." }
    ]
  },
  wire: {
    replaces: 'wire_main_artery',
    expansion: 'gff4',
    options: [
      { id: 'worm', name: 'Worm', image: 'img/quirks/worm.png', type: 'replace', description: "You can produce light reading material (novels, magazines, etc) at will, without costing KP, though it dissolves after a few minutes of losing contact with your body.<br><br>In addition, all wire powers apply to books instead of computers or phones and can be used with books. When you'd produce a computer terminal with Terminal or Deck, you instead produce an appropriate book (almanac, encyclopedia, comic book, etc), including from people's bodies. Surge works with books (you must have read or be familiar with the destination book), and Disk turns your target into a book. Call creates a duplicate journal on both you and your target if the target picks up. Writing in the journal causes the writing to supernaturally and instantly appear on the duplicate, regardless of distance." }
    ]
  },
  palace: {
    replaces: 'palace_sanctum',
    expansion: 'gff4',
    options: [
      { id: 'recluse', name: 'Recluse', image: 'img/quirks/recluse.png', type: 'replace', description: "<div class=\"sanctum-base-box\"><b>Sanctum base:</b><br>• The palace is a mental projection, a dream space that takes the form of a large home, residence, or mansion in a locale of your choosing. You can control its appearance and decor.<br>• Taking harm in a palace instantly shunts a person out of it, waking them up, instead of dealing them real harm.<br>• Entering the palace mentally requires only closing your eyes and concentrating, leaving your outside body defenseless and insensate.</div>Only you can enter your palace (with the exception of the bar power, and psychic doubles, such as from Parlor). It grants no resting benefits, but otherwise functions as the normal Sanctum power. In addition, you can enter it any time you like by concentrating for a few moments.<br><br>When you enter your palace, you physically disappear and are replaced by a palace port, which is a small reflective object. Historically, these have been things like gemstones, mirrors, or basins of water, but in modern times have sometimes become things like phone screens, laptops, or portable video game consoles. Outside observers, including mundane humans can see and talk to you inside your palace, though your voice and appearance may seem distant or distorted. While inside your palace, you can use powers from this blasphemy normally to affect the outside world.<br><br>You remain in the palace until you voluntarily leave. If the object is damaged, you are shunted out, take stress as if you were targeted by that damage, and you cannot re-enter until you rest. The port can be supernaturally repaired during a rest at no cost." },
      { id: 'manifold', name: 'Manifold', image: 'img/quirks/manifold.png', type: 'replace', uses: 'hunt', description: "<div class=\"sanctum-base-box\"><b>Sanctum base:</b><br>• You and allies you rest with can enter your psychic palace while resting. This improves the resting rolls of yourself and one ally of your choice resting with you by +1.<br>• The palace is a mental projection, a dream space that takes the form of a large home, residence, or mansion in a locale of your choosing. You can control its appearance and decor.<br>• Taking harm in a palace instantly shunts a person out of it, waking them up, instead of dealing them real harm.<br>• Entering the palace mentally requires only closing your eyes and concentrating, leaving your outside body defenseless and insensate.</div>Your palace functions as the normal Sanctum power, except:<br><br>Once a hunt, when you open any door or cross any threshold, you can instead open a door to a single room of your choice in your palace, physically manifesting it. Doing so does not require spending a PSYCHE burst. Opening any door out of this room opens and connects to a random door nearby, determined by the Admin. The space inside your palace could be larger than is physically possible from the outside.<br><br>When you use any palace power, including its passive, you must physically manifest the corresponding part of your palace as part of that power, as prior, though you can do this any number of times. If you don't have a door on hand to do this with, you can't activate the power, though any door will qualify (car doors, microwave or fridge doors, etc).<br><br>Other beings can enter your manifested palace rooms, even those hostile to you. The rooms stop existing when you are no longer physically inside or are outside and let go of the door handle, and push out anyone or anything from the outside reality when they collapse back into their original form." }
    ]
  },
  jaunt: {
    replaces: 'jaunt_ghostwire',
    expansion: 'gff4',
    options: [
      { id: 'corpus', name: 'Corpus', image: 'img/quirks/corpus.png', type: 'replace', description: "You specialize in the bodies of the recently deceased. Once a scene, when you touch a corpse, you can tell exactly how long ago it died, and get brief visions of its death, granting you +1D when next you act on the answers in the same scene.<br><br>Additionally, you can use the Possession power on corpses without spending a psyche burst, and you can use the Desecrate power on living but unconscious humans." },
      { id: 'hollow', name: 'Hollow', image: 'img/quirks/hollow.png', type: 'replace', description: "You specialize in the incorporeal remnants of psyche.<br><br>You can use the Geist blasphemy power without spending a psyche burst, once between rests.<br><br>If you have only one passenger from the Passenger power, they can now use psychic powers using your body, and you can use powers normally. When they use a power, you take any effects or consequences as if you used the power, though they spend any resources (sin, bursts, etc). These powers immediately end if your passenger exits." },
      { id: 'silver_sight', name: 'Silver Sight', image: 'img/quirks/silver_sight.png', type: 'replace', grantsPower: 'jaunt_threads', description: "You are completely blind, but permanently benefit from the Threads power from this blasphemy and gain it for free. It can overlap with other powers. Since you are used to seeing this way, actions against living things are not hard for you, but other actions that require sight are. If you participate in teamwork or gain setup, you can ignore this restriction in addition to the normal benefits of teamwork or setup.<br><br>In addition, your extreme sensitivity to grace lets you immediately sense (with some imprecision) if anyone in a 1/2 CAT [HALF_CAT:area] area centered on you has any psychic sensitivity, and how much, or if there are any supernatural beings in a similar area, how close they are, and how strong they are." }
    ]
  },
  sympathy: {
    replaces: 'sympathy_resonance',
    expansion: 'gff4',
    options: [
      { id: 'locus', name: 'Locus', image: 'img/quirks/locus.png', type: 'replace', description: "You specialize in a particular object, but have aversion to others. Choose an object on the list of resonances. You are automatically resonant with that object, but roll two other items on the list randomly. You have antipathy with those objects and find actions hard when you are touching, wearing, or in hand's reach of those objects.<br><br>You can swap this focus around and re-roll your antipathies at the start of each hunt, or when you rest.<br><br><b>Resonances</b> (Roll 1d3, then 1d6):<table class=\"virtue-rupture-table\"><tbody><tr><td class=\"rupture-duration\">11</td><td class=\"rupture-cost\">Phones</td><td class=\"rupture-duration\">21</td><td class=\"rupture-cost\">Balls</td><td class=\"rupture-duration\">31</td><td class=\"rupture-cost\">Ropes</td></tr><tr><td class=\"rupture-duration\">12</td><td class=\"rupture-cost\">Lights</td><td class=\"rupture-duration\">22</td><td class=\"rupture-cost\">Guns</td><td class=\"rupture-duration\">32</td><td class=\"rupture-cost\">Hammers</td></tr><tr><td class=\"rupture-duration\">13</td><td class=\"rupture-cost\">Knives</td><td class=\"rupture-duration\">23</td><td class=\"rupture-cost\">Mugs</td><td class=\"rupture-duration\">33</td><td class=\"rupture-cost\">Cars</td></tr><tr><td class=\"rupture-duration\">14</td><td class=\"rupture-cost\">Keys</td><td class=\"rupture-duration\">24</td><td class=\"rupture-cost\">Computers</td><td class=\"rupture-duration\">34</td><td class=\"rupture-cost\">Doors</td></tr><tr><td class=\"rupture-duration\">15</td><td class=\"rupture-cost\">Books</td><td class=\"rupture-duration\">25</td><td class=\"rupture-cost\">Shoes</td><td class=\"rupture-duration\">35</td><td class=\"rupture-cost\">Bags</td></tr><tr><td class=\"rupture-duration\">16</td><td class=\"rupture-cost\">Baseball Bats</td><td class=\"rupture-duration\">26</td><td class=\"rupture-cost\">Power Tools</td><td class=\"rupture-duration\">36</td><td class=\"rupture-cost\">Gloves</td></tr></tbody></table>" }
    ]
  },
  mother: {
    replaces: 'mother_knows_best',
    expansion: 'gff4',
    options: [
      { id: 'mothers_love', name: "Mother's Love", image: 'img/quirks/mothers_love.png', type: 'replace', uses: 'hunt', maxUses: 2, description: "Your strain of Mother is less detectable, and you look more human. Twice a hunt, you may listen to the whispers of Mother (ask the GM what She is saying) when using a blasphemy from this power.<br><br>If you follow her advice or direction, you may use that power without spending a psyche burst, it gains +1D on any PSYCHE rolls, +1 CAT, and all sin costs from that power are reduced to 1 for its duration.<br><br>However, using the power becomes risky if it wasn't already, and the risk die becomes a '1' automatically." }
    ]
  }
};

const SKILLS = [
  { id: 'force', name: 'Force', description: 'Apply direct and close force or violence. Smash, fight, cut, grapple.' },
  { id: 'conditioning', name: 'Conditioning', description: 'Get around on foot. Sprint, climb, swim, balance.' },
  { id: 'coordination', name: 'Coordination', description: 'Use your hand-eye coordination. Shoot, throw, catch.' },
  { id: 'covert', name: 'Covert', description: 'Move with stealth and act with sleight of hand. Sneak, lock pick, steal.' },
  { id: 'interfacing', name: 'Interfacing', description: 'Use, understand, build, or fix technology, vehicles, or devices. Drive, hack, repair.' },
  { id: 'surveillance', name: 'Surveillance', description: 'Use your power of observation. Survey, track, spot.' },
  { id: 'investigation', name: 'Investigation', description: 'Examine something in detail, or uncover information about it. Research, study, sleuth.' },
  { id: 'authority', name: 'Authority', description: 'Wield your leadership and force of will. Lead, organize, order, intimidate.' },
  { id: 'negotiation', name: 'Negotiation', description: 'Rely on your words to influence others. Sway, lie, bargain.' },
  { id: 'connection', name: 'Connection', description: 'Connect to others, and draw on those connections. Intuit, empathize, network.' }
];

// ════════════════════════════════════════════════════════════════════
// DATA: Agendas
// ════════════════════════════════════════════════════════════════════

const AGENDAS = [
  {
    id: 'doomed', name: 'Doomed',
    image: 'img/agendas/doomed.png',
    agendaItems: ['Demonstrate your humanity'], boldedItems: ['Demonstrate your distance from humanity'],
    restriction: "You may only pick this agenda if you have a sin mark. If it's your first agenda, you may start with a sin mark of your choice (only choose location, still roll 1d6 for ability).",
    abilities: [
      { id: 'doomed_xenoflesh', name: 'Xenoflesh', description: "Ignore '1's rolled for gaining Sin." },
      { id: 'doomed_humanitys_last_breath', name: "Humanity's Last Breath", description: 'Pick a sin mark you have. Evolve that Sin mark. It no longer modifies resistance rolls.' },
      { id: 'doomed_quickening', name: 'Quickening', description: 'When you gain 2 or more Sin as part of an action, your action also gains +1D.' },
      { id: 'doomed_sympathetic_mutation', name: 'Sympathetic Mutation', description: 'You may take 1d3 sin to grant an ally the benefits of any sin mark ability you have for one scene.' },
      { id: 'doomed_metamorphosis', name: 'Metamorphosis', description: 'Between missions or when resting, you can gain 1 sin to re-roll the ability of one of your sin marks.' }
    ]
  },
  {
    id: 'beast', name: 'Beast',
    image: 'img/agendas/beast.png',
    agendaItems: ['Get into a fight'], boldedItems: ['Hold Back'],
    restriction: null,
    abilities: [
      { id: 'beast_insects', name: 'Insects!!!', description: 'You have +1D when inflicting harm or violence against human opponents.' },
      { id: 'beast_ill_take_you_down', name: "I'll take you down with me", description: 'Regain 1 psyche burst when you take an injury, fill out a hook, or take an affliction.' },
      { id: 'beast_rule_of_nature', name: 'Rule of Nature', description: 'When you inflict violence with an action, if you roll two or more 6s, the action inflicts 1 more slash on any talismans and you regain 1 psyche burst.' },
      { id: 'beast_red_muscle', name: 'Red Muscle', description: 'You can take 2 nonlethal stress to gain +1D on any violent or forceful roll.' },
      { id: 'beast_bare_teeth', name: 'Bare Teeth', description: 'While you have two or more injuries or afflictions, it is no longer hard to use mundane capabilities against supernatural forces and your human physical abilities are at 1/2 CAT instead of CAT 0.' }
    ]
  },
  {
    id: 'firebug', name: 'Firebug',
    image: 'img/agendas/firebug.png',
    agendaItems: ['Solve Problems Creatively'], boldedItems: ['Take the simple solution'],
    restriction: null,
    abilities: [
      { id: 'firebug_jack', name: 'Jack!', description: 'At the start of a mission, choose a skill you have at 0. You can improve it to 1 for the duration of this mission only.' },
      { id: 'firebug_always_a_way', name: 'Always a way', description: "If there isn't an entrance or exit into a place, you can find one. You can always get through, but (Admin picks one): it's dangerous or risky, it'll only fit one person, you'll have to leave something or someone behind." },
      { id: 'firebug_oilfinger', name: 'Oilfinger', description: 'You start a mission with 1d3+1 extra Kit Points.' },
      { id: 'firebug_extra_parts', name: 'Extra Parts', description: 'You can mark 1 KP for +1D on any roll that involves fixing, crafting, breaking, or modifying devices or machines.' },
      { id: 'firebug_weak_spot', name: 'Weak Spot', description: "When an ally performs violent or forceful action, you can grant them +1D on their action, and +1 slash on any talismans on success. Resets when you rest." }
    ]
  },
  {
    id: 'guardian', name: 'Guardian',
    image: 'img/agendas/guardian.png',
    agendaItems: ['Protect your people'], boldedItems: ['Leave nobody behind'],
    restriction: "You don't get pay or xp for the dead.",
    abilities: [
      { id: 'guardian_iron_wall', name: 'Iron Wall', description: 'When you defend someone close to you in a conflict scene, you can choose to divert any consequences taken by your target on to you instead. The second time or more you use this in the same scene, you take 1d3 nonlethal stress first.' },
      { id: 'guardian_excessive_agony', name: 'The Excessive Agony of Moving Forward', description: 'Erase 1 stress when pressure increases if you have more than 3.' },
      { id: 'guardian_castle', name: 'Castle', description: 'When any ally takes an injury, you erase 1 stress and gain +1D on your next action.' },
      { id: 'guardian_centerweight', name: 'Centerweight', description: 'When resting, allies that spend resting dice can set the results of their dice to yours instead.' },
      { id: 'guardian_painkiller', name: 'Painkiller', description: 'Your first injury taken does not reduce maximum stress.' }
    ]
  },
  {
    id: 'loner', name: 'Loner',
    image: 'img/agendas/loner.png',
    agendaItems: ['Demonstrate your superior skill'], boldedItems: ['Let the mask slip'],
    restriction: null,
    abilities: [
      { id: 'loner_dust_to_dust', name: 'Dust to Dust', description: 'Stress no longer rolls over when you take an injury (excess is lost).' },
      { id: 'loner_silent_strike', name: 'Silent Strike', description: 'Gain +1D on forceful actions taken against targets who are unaware of your presence.' },
      { id: 'loner_ill_do_it_myself', name: "I'll do it myself", description: "Once a scene, when someone fails a roll, you can step in to help them. You gain 1d3+1 nonlethal stress, but roll 1D and add it to the total roll." },
      { id: 'loner_rook', name: 'Rook', description: 'When you successfully set up an ally, you can take 2 nonlethal stress to set up another ally of your choice with the same action.' },
      { id: 'loner_its_nothing', name: "It's Nothing", description: "You can ignore taking an injury by saying 'It's Nothing'. Erase half your stress, then gain a hook 'It's Nothing'. When the hook fills out, you collapse and suffer instant death." }
    ]
  },
  {
    id: 'hardline', name: 'Hardline',
    image: 'img/agendas/hardline.png',
    agendaItems: ['Follow Orders'], boldedItems: ['Disobey Orders'],
    restriction: null,
    abilities: [
      { id: 'hardline_black_suit', name: 'Black Suit', description: 'Gain +1D on actions to lead, intimidate, or give orders to mundane humans.' },
      { id: 'hardline_mea_culpa', name: 'Mea Culpa', description: 'The first time in a hunt you take an injury or an affliction, relieve 1d3+1 sin.' },
      { id: 'hardline_eliminate_the_stain', name: 'Eliminate the Stain', description: "Gain +1D and inflict +1 slash on talismans the first time you roll against sins that have half or less of their execution talisman remaining." },
      { id: 'hardline_single_minded', name: 'Single Minded', description: 'You can only be affected by one affliction maximum (you can choose which to discard and keep).' },
      { id: 'hardline_by_the_book', name: 'By the Book', description: "Once a hunt, when you witness or find evidence of a sin's Domain, you can force the Admin to show you the exact rules text of that Domain." }
    ]
  },
  {
    id: 'machine', name: 'Machine',
    image: 'img/agendas/machine.png',
    agendaItems: ['Put the work before your own needs'], boldedItems: ['Take a break'],
    restriction: 'If your group rests, you can choose to exclude yourself from resting.',
    abilities: [
      { id: 'machine_the_work', name: 'The Work', description: "You can choose to gain +1D on any roll. If you do, take 1 stress for each time you've used this ability this mission (including this one). You can't use this ability for the remainder of the hunt if you rest." },
      { id: 'machine_brain_burst', name: 'Brain Burst', description: 'When investigating or researching something, you can take 1 nonlethal stress to re-roll one die on your action roll. The re-roll is final.' },
      { id: 'machine_second_wind', name: 'Second Wind', description: 'When pressure hits 4, erase all stress or remove an affliction.' },
      { id: 'machine_overtime', name: 'Overtime', description: "You can gain +1D on all actions to investigate, analyze, or gather information for the duration of a scene, but you lose the use of this ability and all other activities are hard until you rest." },
      { id: 'machine_neat_little_universe', name: 'Neat Little Universe', description: "Twice a hunt, outside conflict, you can adjust any talisman on your sheet or an ally's up or down by 1." }
    ]
  },
  {
    id: 'temperance', name: 'Temperance',
    image: 'img/agendas/temperance.png',
    agendaItems: ['Put people before the mission'], boldedItems: ['Harm someone intentionally'],
    restriction: null,
    abilities: [
      { id: 'temperance_healer', name: 'Healer', description: 'The first time you rest in a hunt, gain an extra resting die.' },
      { id: 'temperance_focused', name: 'Focused', description: 'Once a hunt, you may use a blasphemy power that affects only you or your allies without spending psyche burst, and it gains +1 CAT.' },
      { id: 'temperance_savior_complex', name: 'Savior Complex', description: 'Gain +1D on actions to directly prevent or avoid harm to humans.' },
      { id: 'temperance_care', name: 'Care', description: 'Once a hunt, outside of a conflict scene, you can roll and apply a resting die to yourself or another nearby ally without resting.' },
      { id: 'temperance_gentleness', name: 'Gentleness', description: 'For one scene, you may take 1 less stress when you take stress. This ability breaks if you take any forceful or harmful action. Then lose the use of this ability until you rest.' }
    ]
  },
  {
    id: 'torch', name: 'Torch',
    image: 'img/agendas/torch.png',
    agendaItems: ['Lead from the front'], boldedItems: ['Let another take the lead'],
    restriction: null,
    abilities: [
      { id: 'torch_joy_luck_wind_thrower', name: 'Joy Luck Wind Thrower', description: "When you roll 0d for any action, it's never hard." },
      { id: 'torch_hot_blooded', name: 'Hot Blooded', description: 'Your first action in a conflict scene gains +1D and inflicts +1 more slash on any talismans.' },
      { id: 'torch_font_of_power', name: 'Font of Power', description: "Once a hunt, you may gain 1d3 psyche bursts, which could put you over your maximum. Until you rest, you can no longer spend psyche bursts, but allies can spend your psyche bursts as their own." },
      { id: 'torch_recollect', name: 'Recollect', description: "At the end of a session, you can describe something another character did that impressed you during that session, and give that character 1 xp. Characters can only gain this xp once if targeted by this ability multiple times." },
      { id: 'torch_strive', name: 'Strive', description: "Once a hunt, you can make a complete re-roll of any action you or an ally just took, taking the second result as final." }
    ]
  },
  {
    id: 'shadow', name: 'Shadow',
    image: 'img/agendas/shadow.png',
    agendaItems: ['Outshine your rival'], boldedItems: ['Let your rival outshine you'],
    restriction: "When you pick this agenda, pick another character to be your rival (the feeling doesn't have to be mutual) at the start of a mission. As long as you have rival abilities from this agenda, you must choose who your rival is.",
    abilities: [
      { id: 'shadow_catch_up', name: 'Catch Up', description: 'If your rival has less stress than you when pressure increases, erase 1 stress. If they have more psyche bursts, regain 1 psyche burst.' },
      { id: 'shadow_synchronize', name: 'Synchronize', description: 'When you set up your rival, you take 1 nonlethal stress and +1D on the action to set up.' },
      { id: 'shadow_you_cant_die_now', name: "You Can't Die Now", description: "Once a hunt, if your rival would take an injury or suffer instant death, you can take 2d3 stress to allow them to ignore it. They go to 1 stress under maximum." },
      { id: 'shadow_shadow_seed', name: 'Shadow Seed', description: 'Choose a blasphemy power your rival has. You can use that power this hunt, but only at max CAT 0.' },
      { id: 'shadow_pincer_technique', name: 'Pincer Technique', description: 'When you participate in teamwork with your rival, you take 1 nonlethal stress, but can also re-roll one of the dice once, taking the second result as final.' }
    ]
  },
  {
    id: 'sorcerer', name: 'Sorcerer',
    image: 'img/agendas/sorcerer.png',
    agendaItems: ['Demonstrate flashy displays of power'], boldedItems: ['Invite catastrophe'],
    restriction: null,
    abilities: [
      { id: 'sorcerer_perfect_technique', name: 'Perfect Technique', description: "Pick a blasphemy power. Once a hunt, increase its CAT by +1 for an entire scene, or two rounds in conflict." },
      { id: 'sorcerer_cantrip', name: 'Cantrip', description: 'Pick a blasphemy ability. You can use it twice a hunt without spending a psyche burst, but all parameters are at max CAT 0.' },
      { id: 'sorcerer_finishing_move', name: 'Finishing Move', description: 'Pick a blasphemy power. Increase its dice and CAT by +1, but then you cannot use any blasphemies again and all actions are hard until rest.' },
      { id: 'sorcerer_mimic_technique', name: 'Mimic Technique', description: "Pick a power from any Blasphemy, without having taken that blasphemy." },
      { id: 'sorcerer_weave', name: 'Weave', description: 'When you use a blasphemy, you may increase the CAT of the next blasphemy used by an ally against the same target by +1, and grant it +1D.' }
    ]
  },
  {
    id: 'songbird', name: 'Songbird',
    image: 'img/agendas/songbird.png',
    agendaItems: ['Get someone to do your bidding'], boldedItems: ['Do something selfless'],
    restriction: 'Once taken, a character can only swap out of this agenda by spending two advances.',
    abilities: [
      { id: 'songbird_codependency', name: 'Codependency', description: 'When someone sets you up, you can trade 1 stress around (from you to them, or vice versa).' },
      { id: 'songbird_spiral', name: 'Spiral', description: 'You can always tell if someone is lying to you, though not the nature of the lie.' },
      { id: 'songbird_strings', name: 'Strings', description: "When you rest with a consenting partner, they add +1 to all your resting results. Until you next rest, you can force them to participate in teamwork with you once." },
      { id: 'songbird_white_fiber', name: 'White Fiber', description: 'You can take 2 nonlethal stress to gain +1D on any roll to lie or manipulate someone.' },
      { id: 'songbird_fascination', name: 'Fascination', description: 'Declare fascination with another character. When they roll a 6 on risk, you lose 1 stress. When they roll a 1, you gain 1 nonlethal stress.' }
    ]
  },
  {
    id: 'departed', name: 'Departed',
    image: 'img/agendas/departed.png',
    agendaItems: [''], boldedItems: [''],
    restriction: 'A character can only take this agenda if they are well and truly dead. You get its ability for free.',
    abilities: [
      { id: 'departed_that_terrible_weight', name: 'That Terrible Weight', description: "Once a session, the dead character can chip in when an ally makes a roll to let them re-roll the entire roll after they see the result, taking the second result as final." }
    ]
  },
  {
    id: 'moth', name: 'Moth',
    image: 'img/agendas/moth.png',
    agendaItems: ['Uncover hidden or uncomfortable truths about the world.'], boldedItems: ['Uncover hidden or uncomfortable truths about yourself.'],
    restriction: null,
    abilities: [
      { id: 'moth_psyche_jewel', name: 'Psyche Jewel', description: "The first time a hunt you or an ally answers a Sin's trauma question, regain 1 psyche burst, recover 1 sin, and erase 1 stress." },
      { id: 'moth_alienation', name: 'Alienation', description: 'Your sin overflow cap increases by +2.' },
      { id: 'moth_rapture', name: 'Rapture', description: 'You erase 1 stress when you gain an affliction, injury, or hook.' },
      { id: 'moth_larval', name: 'Larval', description: 'If you end a mission at 7 or higher sin, gain 1 xp. If you suffer sin overflow, gain 1 xp.' },
      { id: 'moth_unveil', name: 'Unveil', description: "You can ask the Admin about a character present 'What is this person afraid of?'. Gain +1D when you act on the answers for the rest of the scene, then lose the use of this ability until you rest." }
    ]
  },
  {
    id: 'survivor', name: 'Survivor',
    image: 'img/agendas/survivor.png',
    agendaItems: [''], boldedItems: ['Survive'],
    restriction: 'Once taken, a character can only swap out of this agenda by spending two advances. Get its ability for free.',
    abilities: [
      { id: 'survivor_will_to_live', name: 'Will to Live', description: '+1 max stress. 1 in 6 chance of ignoring instant death (roll 1d6).' }
    ]
  },
  {
    id: 'demon', name: 'Demon',
    image: 'img/agendas/demon.png',
    agendaItems: ['Enrich yourself'], boldedItems: ['Give something valuable away'],
    restriction: 'You can spend scrip as kit points.',
    abilities: [
      { id: 'demon_black_market_stims', name: 'Black Market Stims', description: 'You can spend up to 2 scrip a mission as psyche bursts.' },
      { id: 'demon_supplier_connections', name: 'Supplier Connections', description: 'You gain a 1 scrip discount on all kit and aesthetic items, to a minimum of 1. This discount applies to all items at CAT 4+.' },
      { id: 'demon_shady_lender', name: 'Shady Lender', description: 'Between missions, you can choose to gain 1d3 scrip, but start the next mission with 1 injury.' },
      { id: 'demon_heartless', name: 'Heartless', description: 'You gain +1 scrip for executing sins.' },
      { id: 'demon_spotless', name: 'Spotless', description: 'Once a mission, you can destroy an aesthetic kit expansion you own worth 3 or more scrip instead of suffering an injury.' }
    ]
  },
  {
    id: 'cradle', name: 'Cradle',
    image: 'img/agendas/cradle.jpg',
    expansion: 'gff3',
    agendaItems: ['Protect your ward from the consequences of their actions.'], boldedItems: ['Let your ward suffer.'],
    restriction: 'When you choose this agenda, choose another character as your ward. You can switch your ward around between hunts.',
    abilities: [
      { id: 'cradle_matriphagy', name: 'Matriphagy', description: 'Your ward can deal 3 nonlethal but irreducible stress to you in place of a psyche burst as long as they are in short range of you.' },
      { id: 'cradle_coddle', name: 'Coddle', description: "Once a conflict scene, you may take the defend or aid action for free, targeting only your ward. This doesn\'t take your action for the round." },
      { id: 'cradle_fragile', name: 'Fragile', description: 'You gain +1 max stress, but can no longer clear stress by any means other than taking an injury.' },
      { id: 'cradle_sin_eater', name: 'Sin Eater', description: 'Once a hunt, when you give your ward a warm gesture (a smile, a hug, a pat on the head), you can transfer any amount of stress and up to one affliction or hook from them to you. This could cause an injury or kill you.' },
      { id: 'cradle_offering', name: 'Offering', description: 'As long as you are in short range from your ward, you can gain 1d3+1 sin to prevent any injury to your ward, or 1d6+2 to prevent instant death. Each can trigger separately only once a hunt. Your ward instead remains at 1 stress below max. Describe how you avert disaster.' }
    ]
  },
  {
    id: 'doll', name: 'Doll',
    image: 'img/agendas/doll.png',
    expansion: 'gff3',
    agendaItems: ['Give up on something'], boldedItems: ['Willingly do something painful'],
    restriction: null,
    abilities: [
      { id: 'doll_flop', name: 'Flop', description: "Once a hunt, you can throw yourself to the ground. While in this state humans, sins, and exorcists will treat you as if you were dead, severely ill, or unconscious. It may distract them, and they won\'t target you in a conflict scene. You immediately end this effect by doing anything that would require an action roll, or it ends at the end of the scene. It only works once on the same target ever." },
      { id: 'doll_soft', name: 'Soft', description: "You roll -1d for hard actions (even if they become easier later), but always gain +1d for straight rolls (actions that aren\'t hard or risky such as gathering information)." },
      { id: 'doll_pincushion', name: 'Pincushion', description: 'Exorcists in short range from you can always take injuries or afflictions in your place. If they do, they gain 1 xp, but no more than once a mission.' },
      { id: 'doll_tagalong', name: 'Tagalong', description: 'When you participate in teamwork, the leader of the roll always takes 2 nonlethal stress, but always gains +1D.' },
      { id: 'doll_daydream', name: 'Daydream', description: 'At the start of any conflict scene, you can erase up to 4 stress. If you do, roll a max of 1d on actions for the rest of the scene.' }
    ]
  },
  {
    id: 'broken', name: 'Broken',
    image: 'img/agendas/broken.png',
    expansion: 'gff3',
    agendaItems: ['Kill'], boldedItems: ['Kill'],
    restriction: null,
    abilities: [
      { id: 'broken_ripped', name: 'Ripped at the Seams', description: "After pressure increases during a mission, mark off 1d3 sin boxes. When you sin overflow, you can always choose between losing and keeping control. <b>Retire your exorcist</b> after the current mission is over. Face execution or exile. <b>There's nothing left for you here.</b>" }
    ]
  }
];

// ════════════════════════════════════════════════════════════════════
// DATA: Blasphemies
// ════════════════════════════════════════════════════════════════════

const BLASPHEMIES = [
  {
    id: 'tension',
    name: 'Tension',
    flavor: 'Fact: Tension users are highly likely to experience \'locked in\' syndrome episodes at least semi-regularly until they are able to master their powers. See field manual.',
    description: 'Project a spot psychic field of incredible density and durability.',
    passive: {
      id: 'tension_iron_soul',
      name: 'Iron Soul',
      image: 'img/passives/iron_soul.png',
      description: 'When you would fill up your execution talisman, you may roll 1d6. On a 4+, go to 1 stress under maximum instead and ignore any excess, then lose the use of this passive until you rest.'
    },
    powers: [
      {
        id: 'tension_aegis',
        name: 'Aegis',
        tags: ['Instant', 'Short'],
        burst: 'none',
        uses: 'rest',
        description: 'When you or a visible ally in short range of you would mark stress from external harm, you can intervene by answering the following questions:<br>•  Can you reach your target in time?<br>•  Is there any part of the environment you can use to shield your target?<br>•  Is your heart in this?<br><br>You create a flash tension field of incredible strength, blocking damage. For each yes answer, roll 1d6. For every 2+ rolled reduce stress suffered by 1, and for every 6 rolled reduce it by 2. This could reduce stress suffered to 0.<br><br>After using this power, lose its use until you rest.'
      },
      {
        id: 'tension_stasis',
        name: 'Stasis',
        tags: ['1 scene', 'Curse', 'Short'],
        burst: 'required',
        description: 'With a gesture, you can lock yourself or a CAT sized group [CAT:people] of humans or exorcists in a tension cage that covers them like a second skin, paralyzing them. If a human is hostile or unwilling, roll PSYCHE, and only spend the burst on success.<br><br>Once trapped, your target is locked in, unable to move or act for the scene, and is immune to all harm and effects from the outside. The effect only ends once the scene passes and you cannot end it earlier. They can be moved around like a (very stiff) object and are fully sensate while inside, though they can see as though looking through a thick pane of glass and don\'t need to breathe.'
      },
      {
        id: 'tension_severance',
        name: 'Severance',
        tags: ['Instant', 'Short'],
        burst: 'required',
        description: 'You can project a tension field of incredible strength over any edge, as obvious as a blade and as subtle as a fingernail, and use it as a cutting implement. Roll PSYCHE to cut an object or opponent with a clean and decisive blow, only spending a psyche burst on success.<br>•  Gain +1D if you are striking to protect another person.<br>•  Gain +1D against immobile objects or opponents.'
      },
      {
        id: 'tension_malleate',
        name: 'Malleate',
        tags: ['Until rest', 'Transmute', 'Adjacent'],
        burst: 'required',
        description: 'You can invert and infuse a tension field to make an area of nonliving matter incredibly pliable and soft. The size of this block of matter you can affect is affected by CAT [CAT:size]. Choose one of the following effects, then you may gain or grant +1D when you or any ally next acts to take advantage of this power:<br>•  Rubber: The matter becomes bouncy and springy.<br>•  Mud: The matter melts into a thick mud, becomes pliable and sticky and difficult to move through.<br>•  Liquid: The matter melts into liquid.<br><br>This power may easily affect the parameters of rolls, such as difficulty and risk. When the effect expires, the matter slowly reverts to its original state and form.'
      },
      {
        id: 'tension_fortress',
        name: 'Fortress',
        tags: ['Until rest', 'Summon', 'Short'],
        burst: 'required',
        uses: 'scene',
        description: 'Once a scene, you can create a spot tension field with a size determined by up to CAT [CAT:size] that appears as a large plane of shimmering force, invisible to humans. It can only exist as a flat plane (no bends or curves), and intersect or overlap any nonliving material, but otherwise is as hard as a solid object and prevents all living and nonliving matter and energy from crossing it. It has a 2+CAT [CALC:2+CAT] talisman for its durability, which can take damage and be ticked up like an execution talisman by opponents. The field lasts until destroyed, until used again, or until rest.'
      }
    ]
  },
  {
    id: 'ardence',
    name: 'Ardence',
    flavor: 'Fact: Ardence use would be considered inhumane against human soldiers.',
    description: 'Manipulate potential energy into flashes of extreme heat or cold.',
    passive: {
      id: 'ardence_inner_furnace',
      name: 'Inner Furnace',
      image: 'img/passives/inner_furnace.png',
      description: 'You can take an Unstable Power hook as part of using any Ardence power to increase the CAT of the power up to +2. When the hook fills up, you burn up from the inside, gaining an injury and ending the hook. If this injury would kill you, you explode in an area equal to your CAT, annihilating yourself and everything inside in a massive explosion. Nothing can survive this.'
    },
    powers: [
      {
        id: 'ardence_fury',
        name: 'Fury',
        tags: ['Instant', 'Long'],
        burst: 'required',
        description: 'Create a fierce blast of destructive energy at a location in range with blast area up to CAT [CAT:area]. Roll PSYCHE, gain +1D for each yes answer:<br>•  Are you willing to cause indiscriminate harm?<br>•  Are you willing to let anger control the outcome?<br><br>If at least one yes, area is ALWAYS max CAT and allies in area take 2 stress.'
      },
      {
        id: 'ardence_sabre',
        name: 'Sabre',
        tags: ['Instant', 'CAT range'],
        burst: 'required',
        description: 'Release a blast of energy in a highly destructive beam. The beam goes in a straight line in a range equal to CAT [CAT:distance], piercing through walls, doors, and obstructions effortlessly. It is extremely loud and bright. Roll PSYCHE for its effects, only spending a psyche burst on success.<br><br>You may optionally lift the limiter on this ability when using it. If you do, for every 6 result you roll when using this ability, this ability inflicts 1 extra slash on a talisman, but you also take 2 stress, which could kill you or cause you an injury. This stress cannot be reduced or ignored in any way.'
      },
      {
        id: 'ardence_void',
        name: 'Void',
        tags: ['Instant', 'Short'],
        burst: 'required',
        description: 'You create a flash vacuum by burning the air away. The void creates a loud thunderclap, affecting an area up to CAT [CAT:area], excluding you. Choose one of the following effects, then you may gain or grant +1D when you or any ally next acts to take advantage of this power:<br>•  Weak: Sucks in loose objects not held, worn, or bolted down.<br>•  Medium: All humans and exorcists in the area are thrown off their feet and pulled in, excluding you.<br>•  Strong: Sins and vehicles up to CAT size are thrown off balance or pulled depending on their size. Glass is shattered. The thunderclap is momentarily deafening.<br><br>This power may affect the parameters of rolls, such as difficulty and risk.'
      },
      {
        id: 'ardence_hell',
        name: 'Hell',
        tags: ['Until Rest', 'Transmute', 'Adjacent'],
        burst: 'required',
        description: 'You may dump energy into the ground and anything touching the ground in an area determined by CAT+2 [CAT+2:area], choosing hot or cold. Choose one of the following effects, which lasts until you rest. You may gain or grant +1D when you or any ally next acts to take advantage of this power:<br>•  Simmer: Discomfort for humans, lowered or raised temperature, hot or cold surfaces, etc.<br>•  Poach: Major discomfort for humans, who cannot remain in the area, and discomfort for sins and exorcists. Freeze or boil water, pipes, crack glass, etc.<br>•  Boil: Deadly to humans, sins and exorcists take 2 stress if they remain in the area for longer than a scene. Light fires or freeze the air in rooms, melt windows or burn doors, or freeze objects.<br><br>This power may affect the parameters of rolls, such as difficulty and risk.'
      },
      {
        id: 'ardence_storm',
        name: 'Storm',
        tags: ['Entire Hunt', 'Transmute', 'Extreme'],
        burst: 'variable',
        uses: 'rest',
        description: 'You can spend any number of psyche bursts to send potential energy into the atmosphere, affecting a microclimate in an area equal to CAT+2 [CAT+2{max7}:area], with a maximum of CAT 7. Choose one of the below, plus one more per psyche burst spent. The chosen effects last for the whole mission or until dismissed.<br>•  Clear: Clear the skies in the area, canceling any weather.<br>•  Rain: Rain drenches the area for the duration of an intensity you choose (drizzle, pouring, torrential).<br>•  Cold: The air freezes, freezing water and icing over roads and paths. Any precipitation becomes snow.<br>•  Fog: Thick fog rolls in, limiting visibility.<br>•  Gale: Whipping wind rolls through the area, blowing away fog, smoke, or dust, and making it hard to hear or be outside.<br><br>This power may easily affect the parameters of rolls, such as difficulty and risk.<br><br>Once used, lose the use of this power until you rest.'
      }
    ]
  },
  {
    id: 'flux',
    name: 'Flux',
    flavor: 'Fact: This power is relatively new and, as it stands, is barely understood. Fortunately temporal events are tightly regulated by TEMERITY through a captive Sin called the Spindle.',
    description: 'Manipulate the direction and flow of time itself.',
    passive: {
      id: 'flux_steal_time',
      name: 'Steal Time',
      image: 'img/passives/steal_time.png',
      description: 'For one rest per hunt, anyone in your group may re-roll all their resting dice, taking the second result as final. This may cause them déjà vu. Please reassure them.'
    },
    passives: [
      {
        id: 'flux_steal_time',
        name: 'Steal Time',
        image: 'img/passives/steal_time.png',
        description: 'For one rest per hunt, anyone in your group may re-roll all their resting dice, taking the second result as final. This may cause them déjà vu. Please reassure them.'
      },
      {
        id: 'flux_temporal_instability',
        name: 'Temporal Instability',
        description: 'Many of your Flux powers give you this hook. When the hook resolves, roll 1d6:<br>•  1. Permanently add to your agenda "Prove that you are the real you." If you gain this result again, you immediately suffer sin overflow.<br>•  2. Mysterious injuries open up. You take an injury, which could kill you.<br>•  3. You disappear until rest. You return if there\'s a conflict scene (and right away if one is ongoing). You have no memory of where you were. When you return, you take 2 stress.<br>•  4. You find you are wearing someone else\'s clothes. Erase your entire kit this mission, but regain any spent kit points.<br>•  5. Your body is different. For the remainder of this mission, pick a skill you have 1 or more dice in. It now rolls 0d. After the mission, you have time to train and get used to this, reverting this effect, though keeping any physical changes.<br>•  6. Your face looks a little different. The changes are permanent.'
      }
    ],
    powers: [
      {
        id: 'flux_stop',
        name: 'Stop',
        tags: ['Instant', 'Transmute', 'Self'],
        burst: 'variable',
        description: 'You spend up to three psyche bursts to stop local time in an area around you equal to CAT [CAT:area]. Roll 1d6 per psyche burst spent and add them together - that is how many seconds you have. Anything that enters this area is immediately affected (including anything put into or out of the area), but time flows normally outside the area. In this stopped time, you are unaffected and:<br>•  You cannot use psychic powers, but neither can you be affected by them. Any power currently active from you or affecting you other than this one dissipates.<br>•  You can perform one activity or course of action that fits in the duration.<br>•  After you would make an action roll for anything, the effect ends no matter what.<br><br>Then, gain temporal instability.'
      },
      {
        id: 'flux_quickening',
        name: 'Quickening',
        tags: ['Instant', 'Adjacent'],
        burst: 'required',
        description: 'You can accelerate the natural healing of your body or those of others, giving you the following benefits:<br>•  Immediately heal 1d3 stress on yourself or another target. If your target is injured, increase this by +1.<br>•  You may heal a CAT sized group [CAT:people] of dying or injured humans in short range. Dying humans are stabilized and are no longer in danger of expiring, but fall unconscious. Otherwise, badly injured humans are healed to the point of being able to (slowly) move by themselves. Minor injuries are fully healed.<br><br>Then, gain temporal instability.'
      },
      {
        id: 'flux_reversal',
        name: 'Reversal',
        tags: ['Instant', 'Adjacent'],
        burst: 'required',
        description: 'By touching an object up to CAT [CAT:size] size, you can reverse its passage through time for the last hour.<br>•  This could physically move the object, revert damage on an object, etc.<br>•  It can still affect the physical world, so anything in a reversing object\'s way would get hit, and anything placed on it will move with it.<br>•  If it would cause damage or impact, roll PSYCHE for it.<br>•  It cannot reverse life on non-living matter, such as corpses, but can temporarily move them and revert damage as if they were alive.<br><br>You can stop this effect by willing it, but to resume it requires using this power again.'
      },
      {
        id: 'flux_schism',
        name: 'Schism',
        tags: ['1 Scene', 'Transmute', 'Adjacent'],
        burst: 'required',
        description: "You can create a bubble of altered time equal to CAT [CAT:area] area, opening a window into one day in the past or future from the moment the bubble was created. Gain or grant +1D when you or any ally next acts to take advantage of this power.<br>•  The state of the area inside the bubble is confined only to the bubble and includes objects or people inside. You and allies can enter or exit the bubble at will.<br>•  Supernatural beings, including exorcists, in the present timeline caught in the bubble when it is created are unaffected. Humans and the present timeline world caught in the bubble are paused, cease existing for its duration, and have no memory of the incident.<br>•  Things removed from the bubble from the past or future timeline, including living beings, simply disappear until they move back into the bubble.<br><br>The bubble represents an alternate timeline, so anything altered inside of it will not show up in the present or future timeline."
      },
      {
        id: 'flux_stutter',
        name: 'Stutter',
        tags: ['Instant', 'CAT range'],
        burst: 'required',
        description: 'You can briefly reverse time in order to alter causality for any event that happened as a result of an action roll made by you or a visible ally in CAT range [CAT:distance], instantly after you see the result. Re-roll the action roll completely, taking the second result as final.<br><br>When you use this power, gain temporal instability. If you use it again before you rest, gain 1d3 temporal instability instead.'
      }
    ]
  },
  {
    id: 'vector',
    name: 'Vector',
    flavor: 'Fact: Has the highest fatality rate of untrained users, who usually die from falling.',
    description: 'Imbue objects or living beings with sudden and sharp bursts of velocity.',
    passive: {
      id: 'vector_brake',
      name: 'Brake',
      image: 'img/passives/brake.png',
      description: 'Automatically remove velocity from all projectiles that would hit you, taking -1 stress from them.'
    },
    powers: [
      {
        id: 'vector_fling',
        name: 'Fling',
        tags: ['Instant', 'Adjacent'],
        burst: 'required',
        description: 'With a touch, you can imbue velocity into yourself or another object or living being and send it flying. The combined size of the object or being and the range you send them must equal your CAT+2 [CAT+2:size] or less. Once sent flying, the direction of your target cannot be changed.<br><br>You can alternately remove all velocity by touching an object or person of CAT+2 size, bringing it to a complete stop.<br><br>Roll PSYCHE for this power\'s effects, including any harm inflicted, and only spend a psyche burst on at least one success.'
      },
      {
        id: 'vector_lift',
        name: 'Lift',
        tags: ['1 scene', 'Charm', 'Self'],
        burst: 'required',
        description: 'You reverse gravity\'s effect on yourself and a CAT sized group [CAT:people] of other exorcists or humans with a low but constant Vector effect. For this scene, any affected gain the following benefits:<br>•  You can run, walk, or climb up vertical surfaces.<br>•  You can slow your fall at will, and you cannot take harm from falling.<br>•  You can glide a distance equal to CAT range [CAT:distance] — you must start at height to gain this benefit.<br><br>This power may easily affect the parameters of rolls, such as difficulty and risk.'
      },
      {
        id: 'vector_current',
        name: 'Current',
        tags: ['Until rest', 'Transmute', 'CAT+2 range'],
        burst: 'required',
        description: 'You create a weaker, but persistent Vector force in an area that lasts until you rest. It creates a line that goes about CAT+2 range [CAT+2:distance] in length and covers about the width of a street. It pushes constantly in one direction (including up or down) like a strong wind. Allies moving in that direction gain +1D on actions to move with the current. Anything moving against that direction struggles, and anything falling falls slowly. It becomes hard for allies to move against the current, and actions taken against anyone trying to struggle against the current gain +1D. You can dismiss this effect at will.'
      },
      {
        id: 'vector_bullet',
        name: 'Bullet',
        tags: ['Instant', 'CAT+1 range'],
        burst: 'required',
        description: 'You can imbue strong bursts of velocity into the air at your fingertips, creating pressurized air bullets that hit with extreme force. Roll PSYCHE for its effects, only spending a psyche burst on success.<br>•  Gain +1D when making shots from an elevated position.<br>•  Gain +1D when making shots to disarm, distract, or disable instead of harm.'
      },
      {
        id: 'vector_finesse',
        name: 'Finesse',
        tags: ['Instant', 'CAT range'],
        burst: 'none',
        description: 'Passive: You may finely manipulate threads of force to perform fine motor skills you could perform with your hands at half CAT range [HALF_CAT:distance], such as opening doors, picking up objects, or even skills like typing on a keyboard, etc. Roll a relevant skill such as interfacing for this.<br>•  You have to be able to see your target, even if it\'s far away. However, you can perform this manipulation even if your path to the target is blocked, such as if you could see it through a window, etc.<br>•  You can pick up objects and move them around through the air but they cannot be any bigger or heavier than a laptop or a full briefcase.'
      }
    ]
  },
  {
    id: 'gate',
    name: 'Gate',
    flavor: 'ALERT: Abuse can lead to extreme personnel loss. Use with caution.',
    description: 'Manipulate space as a sculptor works with clay.',
    passive: {
      id: 'gate_pocket',
      name: 'Pocket',
      image: 'img/passives/pocket.png',
      description: 'You can fit a compressed tear in space into a piece of clothing that you are wearing.<br>•  You gain +1 KP.<br>•  You can stow or retrieve items inside your pocket, which can hold a combined total of items worth up to 3 KP. Once inside, the items are stored in an extra dimensional space and hidden and safe, no matter their size. The pocket is attached to your clothes and if they are destroyed, items inside pop out.'
    },
    powers: [
      {
        id: 'gate_tear',
        name: 'Tear',
        tags: ['Until Rest', 'Summon', 'CAT range'],
        burst: 'required',
        description: 'You create a point in CAT range [CAT:distance], and another point within the same range, though you have to be able to see both points when you use this ability. The two points are connected by a slash in the fabric of reality, a portal that can be moved through and connects the two points as though they were right next to each other. Objects, beings, and forces up to half CAT [HALF_CAT:size] in size can freely move through the tear for the duration, and momentum is preserved.<br><br>You may gain or grant +1D when you or any ally next acts to take advantage of this power.'
      },
      {
        id: 'gate_pinch',
        name: 'Pinch',
        tags: ['Instant', 'Special range'],
        burst: 'required',
        description: 'You can choose a single living being or object you can see. The combined size of the object or being and the distance you attempt to move them must be CAT+2 [CAT+2:size] or less. Roll PSYCHE if your target is unwilling, only spending a psyche burst on success. As long as you can see your target, on at least one success, you can pinch space between the two of you to move your target right next to you. From the target\'s perspective, they don\'t appear to move at all, but the world smears around them. They ignore all physical obstructions between them and you - as long as you can see your target, they simply appear next to you.<br><br>You may gain or grant +1D when you or any ally next acts to take advantage of this power.'
      },
      {
        id: 'gate_bloom',
        name: 'Bloom',
        tags: ['1 scene', 'Summon', 'Short'],
        burst: 'required',
        description: 'By splitting space in creative ways, you create a number of controllable duplicates of any of your limbs or hands equal to CAT+1 [CALC:CAT+1] on any surfaces in short range from you, emerging from a tear in space. They are stuck in place and cannot move. Gain or grant +1D when you or any ally next acts to take advantage of this power.<br>•  You can control them like your normal limbs, making action rolls through them and you have normal sensation with them.<br>•  They can be placed on any surface, including moving surfaces or living beings.<br>•  You take any stress they would take from your actions made through them.'
      },
      {
        id: 'gate_maze',
        name: 'Maze',
        tags: ['Entire Hunt', 'Transmute', 'Adjacent'],
        burst: 'required',
        description: 'You rearrange an area equal to CAT [CAT:area] around you, causing the rearrangement of human built structures in the area. Gain or grant +1D when you or any ally next acts to take advantage of this power. You may:<br>•  Create or remove doors and windows, or change the existing arrangement of doors and windows.<br>•  Add corridors, or rearrange the floor plan of rooms.<br>•  Change the direction of gravity inside of a room (for example, you could make a wall the floor).<br>•  Make a room larger or smaller.<br>•  Arrange or remove the furniture inside a room any way you like.<br><br>You cannot remove rooms entirely, make any room smaller than a closet or larger than a ballroom, or add anything that does not already exist in a building other than corridors. This could cause a structure to be bigger on the inside than outside. For each choice, the Admin rolls 1d6. If they roll at least one 1, the Admin gains one use of this power against you at your current CAT and can activate it any time they like.'
      },
      {
        id: 'gate_transmission',
        name: 'Transmission',
        tags: ['Instant', 'CAT+2 range'],
        burst: 'required',
        description: 'Instantly move to any other area in CAT+2 range [CAT+2:distance]. However, the Admin asks you the following questions and rolls 1d6 per no answer:<br>•  Are you familiar with your destination?<br>•  Can you see where you are going?<br>•  Are you calm and concentrated?<br><br>On at least one 1, you end up in a different location nearby your destination, but the Admin chooses where. On a double 1, you end up somewhere else briefly before arriving at your final destination. Not only are you off target, but you also take 2d3 stress.'
      }
    ]
  },
  {
    id: 'smother',
    name: 'Smother',
    flavor: '...outweighed by utility, therefore users of this blasphemy are good candidates for organ transplantation (see TM ref 4456).',
    description: 'Suppress the innate properties of the universe. Lie to God.',
    passive: {
      id: 'smother_absentia',
      name: 'Absentia',
      image: 'img/passives/absentia.png',
      description: 'You can improve the CAT of any of your Smother powers by +2 when you use them, to a max CAT of 7. However, when you do, gain the Absentia Hook.<br><br><b>ABSENTIA HOOK</b>: You can gain this hook with your passive. If this hook fills up, you take an injury and black out for a few moments. When you wake up, you are missing a body part (roll 1d6). It simply disappears (cleanly) as though it had never existed, leaving a stump or hole. It doesn\'t come back, even if you heal the injury. If you have no body part left to lose (when you roll), reduce the result by 1. If the result is 0, you lose your head and suffer (gruesome) instant death instead. Missing body parts might make some rolls hard or risky, dependent on the situation. You adjust to any disability after the mission, and it has no further effect.<br>•  1. Eye<br>•  2. Nose<br>•  3. Ear<br>•  4. Finger<br>•  5. Toe<br>•  6. Nothing'
    },
    powers: [
      {
        id: 'smother_abstract',
        name: 'Abstract',
        tags: ['1 scene', 'Transmute', 'Short'],
        burst: 'required',
        description: 'With a gesture, you remove recognizable properties of CAT+1 [CALC:CAT+1] number of distinct tools, vehicles, windows, doors, or any other objects that can be held or worn. The chosen objects can no longer be used for their intended purpose and no human, sin, or exorcist (including you!) can recognize them - staring at them for too long causes extreme discomfort, even for exorcists. For example, weapons can no longer fire, doors can no longer open, or windows can no longer be looked through.<br><br>Gain or grant +1D when you or any ally next acts to take advantage of this power. It may also affect the parameters of rolls while active.'
      },
      {
        id: 'smother_smooth',
        name: 'Smooth',
        tags: ['1 scene', 'Transmute', 'Short'],
        burst: 'required',
        description: 'You temporarily remove almost all friction from a CAT sized group [CAT:people] of humans or exorcists, or an area up to CAT. The area or target(s) become incredibly slippery. If targeting an area, it becomes hard for anyone to stand, climb, or move normally in the area, though people are able to slide around.<br>•  Roll PSYCHE to affect hostile targets with this power, only spending a psyche burst on success.<br>•  You can sculpt this area if you wish to affect just part of it, or sculpt a path.<br><br>Gain or grant +1D when you or any ally next acts to take advantage of this power. This power may also easily affect the parameters of rolls, such as difficulty and risk.'
      },
      {
        id: 'smother_hollow',
        name: 'Hollow',
        tags: ['Until Rest', 'Charm', 'Adjacent'],
        burst: 'required',
        description: 'You temporarily remove weight from a single object, human, or exorcist, giving them the total weight of 1 lb if heavier. The size of the object must be CAT [CAT:size] or lower, and you can end this modification any time, though you must use this power again to regain its effects. Roll PSYCHE for any creative uses of this power, only spending a burst on at least one success.<br>•  Gain or grant +1D when you or any ally next acts to take advantage of this power.<br>•  This power ends on its previous target if used again.<br><br>This power may easily affect the parameters of rolls, such as difficulty and risk.'
      },
      {
        id: 'smother_blind',
        name: 'Blind',
        tags: ['1 scene', 'Transmute', 'Adjacent'],
        burst: 'required',
        description: 'A number of objects or living beings equal to CAT [CALC:CAT], or location of a size up to CAT [CAT:area] you touch ceases producing sound, reflecting light, or both for the scene. Gain or grant +1D when you or any ally next acts to take advantage of this power:<br>•  Targeting a person allows the effect to move with them for the scene.<br>•  Targeting a location affects an area, removing all sound and/or light. You can filter this effect by allowing light or sound inside the location to operate normally, but not enter or exit the area.<br><br>This power may easily affect the parameters of rolls, such as difficulty and risk.'
      },
      {
        id: 'smother_dark_age',
        name: 'Dark Age',
        tags: ['Until Rest', 'Charm', 'Short'],
        burst: 'required',
        description: 'You produce a strong field from your body disabling even the simplest human advancements from working in CAT area [CAT:area]. The effect moves with you. You can choose up to three of the following to suppress, ceasing their operation, then gain or grant +1D when you or any ally next acts to take advantage of this power:<br>•  Electricity<br>•  Internet<br>•  Combustion engines<br>•  Running Water<br>•  Door handles, window latches, zippers, catches<br>•  Open fires<br><br>These things stop working even if it would not make sense, i.e. suppressing running water would mean water pressure simply stops working. You can end this effect willingly, but must end all effects at once.'
      }
    ]
  },
  {
    id: 'whisper',
    name: 'Whisper',
    flavor: 'This alter self usually manifests in puberty and only you can see it, remaining invisible even to other exorcists. Common belief holds the \'shadow\' seen is a component of your own future death.',
    description: 'Your shadow is animate and hungry. It knows the future.',
    passive: {
      id: 'whisper_shadow',
      name: 'Shadow',
      image: 'img/passives/shadow.png',
      description: 'You harbor a separate being that follows you everywhere, even when you sleep.<br><br><b>THE SHADOW</b> is intangible and invisible to everyone, even the psychically sensitive. It can only weakly interact with the physical world and has its own mind and senses. It can move in about short range from you. It can pass through walls and surfaces easily but retreats into your body in bright light, preventing it from doing anything.<br><br>You can talk to it telepathically, but talking to it is dangerous and causes 1 stress after any interaction ends. It has no obligation to tell you the truth unless you use your powers.<br><br>You may talk to it safely using your abilities, and it knows the future. The Admin will answer for it.'
    },
    powers: [
      {
        id: 'whisper_omen',
        name: 'Omen',
        tags: ['Instant', 'Self'],
        burst: 'required',
        description: 'Ask your shadow \'What will happen if I X\', where X is a simple course of activity you plan to take in the next hour or so (open this door, attend the meeting, attack this person, go down this street). The shadow gives you a brief impression of the future:<br>•  Gain +1D when you or an ally next acts on the answer.<br>•  Pre-roll the risk die before you take the action. You can decide to back out of the action if you like, but if you follow the same course of activity in the future, use the pre-rolled risk die.'
      },
      {
        id: 'whisper_shiver',
        name: 'Shiver',
        tags: ['1 scene', 'Charm', 'Self'],
        burst: 'required',
        description: 'When you are looking for a human, sin, exorcist, location, or object, you can declare \'I feel a shiver\'. You send a psychic pulse out to CAT range [CAT:distance] in a radius around you, which remains active for this scene. While your target is close enough to be in range, you feel a strong sense of cold and discomfort. You can home in on this feeling easily. It\'s never hard to track your target while this power is active. If your target is in short range of you, you also gain +1D on any rolls to track or locate them.'
      },
      {
        id: 'whisper_dissect',
        name: 'Dissect',
        tags: ['Instant', 'CAT range'],
        burst: 'required',
        description: 'Examine a human or exorcist you can see in CAT range [CAT:distance], roll PSYCHE, and ask your shadow one of the following questions, plus one more per success. They answer truthfully, but can use a maximum of three words to answer each:<br>•  Is this person lying?<br>•  What is the main emotion this person is feeling?<br>•  Where has this person just come from?<br>•  Where are they planning to go next?<br><br>Gain or grant +1D when you or any ally next acts to take advantage of each answer.'
      },
      {
        id: 'whisper_precognition',
        name: 'Precognition',
        tags: ['Instant', 'Self'],
        burst: 'required',
        description: 'When the Admin is describing a scene or you are about to take a course of action, you can \'flash back\'. Make an action roll or play a scene out in the past, where you had a vision of the present moment. This cannot completely alter the established facts of the present (you can\'t have knocked someone out in the past if you just finished having a conversation with them in the present, for example), but could change the situation or alter present details, or it could set up yourself or any ally. For example you could have made preparations for the current moment (locked or unlocked a door, stowed some gear, made a phone call, etc). If you use this power for gear, mark KP for it as normal.<br><br>If the situation is complicated, also take 1 nonlethal stress. If it\'s convoluted or far fetched, take 3 nonlethal stress.'
      },
      {
        id: 'whisper_omnipresence',
        name: 'Omnipresence',
        tags: ['Instant', 'CAT+2 range'],
        burst: 'none',
        uses: 'rest',
        description: 'When an ally is in a scene, and you are not present in that scene, and your ally is in CAT+2 range [CAT+2:distance], you can use this power to walk in on the scene, having already predicted that this course of events would happen. Roll PSYCHE, and choose one of the following per success:<br>•  Nobody is following you.<br>•  You are hidden.<br>•  You are able to enter your ally\'s location without distraction or harm.<br>•  You have a useful tool or object on you for the present situation (a key, a weapon, a wrench, etc).<br><br>After using this power, lose its use until you rest.'
      }
    ]
  },
  {
    id: 'edit',
    name: 'Edit',
    flavor: 'Fact: CAIN doctrine clearly states the existence of \'alternate\' realities is currently unproven.',
    description: 'The way things are is not the way they had to be. Filter threads of possibilities.',
    passive: {
      id: 'edit_mimic',
      name: 'Mimic',
      image: 'img/passives/mimic.png',
      description: 'You can alter minor things about your appearance. You can change any of the following about yourself when resting, within a variation of your original body:<br>•  Body features such as height and weight.<br>•  Aesthetics such as facial features, skin color, hair, gender presentation.<br>•  Age, down to 13 and up to 88.<br><br>You always look faintly similar, like a distant relative of yourself. Your clothes always change to fit you, though you cannot alter them.<br><br>This doesn\'t change anything about your skills or general ability, and also cannot restore missing body parts or hide sin marks or scars.'
    },
    powers: [
      {
        id: 'edit_uniform',
        name: 'Uniform',
        tags: ['Until Rest', 'Charm', 'Self'],
        burst: 'required',
        description: 'You make a brief edit of yourself. You can\'t do this in public (you need privacy, no matter how tenuous). This power makes you officially part of any profession or group with more than 5 members, with any necessary uniform, equipment, id cards, memberships, etc, and alters reality to make it so.<br><br>Even if people don\'t particularly remember you being part of a group, they may get a vague sense that you were a member.<br><br>You don\'t actually gain any particular skills and any changes you make have to be to your own person and must include things you could wear or carry in one or both hands.<br><br>Gain or grant +1D when you or any ally next acts to take advantage of this power.'
      },
      {
        id: 'edit_absurd',
        name: 'Absurd',
        tags: ['1 scene', 'Curse', 'Short'],
        burst: 'required',
        description: 'You swap up to a group of humans or exorcists with a different version of themselves from an alternate timeline. You must roll PSYCHE for this power to take effect on hostile targets, only spending a psyche burst on success. This can change:<br>•  What the target is wearing, but not holding (so anything held in hand remains the same).<br>•  Physical appearances of the targets, as your MIMIC power.<br><br>Targets retain their memories, and this does not alter reality to accommodate the change, so it can easily disorient unprepared humans. The change is otherwise perfect.<br><br>Gain or grant +1D when you or any ally next acts to take advantage of this power.'
      },
      {
        id: 'edit_utility',
        name: 'Utility',
        tags: ['Until Rest', 'Short'],
        burst: 'required',
        description: 'When you need any mundane object, tool, or vehicle that could fit in a small room, you can cause it to appear on a surface in range as though it was always there, without spending KP. However, the admin chooses one, or two if the item is dangerous or rare:<br>•  The item is used, dented, scuffed, or poor quality.<br>•  The item is a real item that someone nearby owned and has now disappeared, and they will come looking for it.<br>•  The item is off somehow and appears as a cheap knockoff made of odd materials that feel spongey or organic.<br>•  The item is missing some parts and doesn\'t work as well as it could with them.<br><br>The item cannot be a unique item, you cannot create a particular car, key, book, etc, but is rather a generic representative of a category. It disappears after a rest.'
      },
      {
        id: 'edit_filter',
        name: 'Filter',
        tags: ['1 scene', 'Transmute', 'Adjacent'],
        burst: 'required',
        description: 'You produce a strong field affecting all matter in an area about the size of a small room, which must contain you. In this area you gain +1D to examine its contents and:<br>•  You can cause any matter to become transparent or opaque.<br>•  You can change the lighting in the room as though lit by an invisible light source, or snuff out any light sources in the room.<br>•  You can move around any objects in the area without touching them and pin them to any point in space in the area, causing them to float.<br>•  You can safely dissect any loose inanimate object or furniture into its constituent parts or reassemble any broken object, providing any parts are present.<br><br>This effect expires when the scene ends, or if you leave the area for any reason.'
      },
      {
        id: 'edit_copy',
        name: 'Copy',
        tags: ['1 scene', 'Summon', 'Adjacent'],
        burst: 'required',
        description: 'You create a temporary, exact copy of a human or exorcist.<br>•  This creates a doppelganger: a simple, obedient clone, without much intelligence or ability to speak.<br>•  You may give it simple instructions of one or two sentences, which it follows to the best of its ability.<br>•  It dissolves into a pale sludge when the scene ends, when touched by anyone except you, or if it takes any harm.<br><br>This ability creates a copy of the target in its present state, including anything mundane a person is carrying or wearing. A doppelganger cannot gain, use, or benefit from psychic powers and rolls just 1d6 to do anything.'
      }
    ]
  },
  {
    id: 'bind',
    name: 'Bind',
    flavor: 'Code: 864 - Binding is an old but heretical art punishable by instant execution. Fortunately, CAIN provides an indefinite stay for binders that remain under its employ.',
    description: 'Bind weak sins to your service and use them as servants or weapons.',
    passive: {
      id: 'bind_sin_binding',
      name: 'Sin Binding',
      image: 'img/passives/sin_binding.png',
      description: 'You have the forbidden ability to bind Sins. You have the obedient essence of a minor sin bound to you, under your control.<br><br>Your <b>BOUND SIN</b> is animalistic in form and ability - you can determine what form it takes. It can understand language but cannot speak, and is invisible to humans.<br>•  It can follow you around at short distance, follow simple orders, and uses your skills to do anything. Its general capabilities are CAT 0.<br>•  If it takes any stress, it is banished for the remainder of the scene, however you can psychically absorb all stress taken for it instead to prevent this effect.<br>•  In a conflict scene, you may sacrifice your ability to act on your turn to allow your sin to act instead, giving it commands. Otherwise it doesn\'t act independently in these scenes.'
    },
    powers: [
      {
        id: 'bind_sin_strike',
        name: 'Sin Strike',
        tags: ['Instant', 'Short'],
        burst: 'required',
        description: "You can command an active sin to attack by spending a psyche burst as long as both your sin and its target are in range, and you can communicate with it. Roll PSYCHE for its effects. The attack has supernatural potency."
      },
      {
        id: 'bind_sword_king',
        name: 'Summon the Ten Thousand Sword King',
        tags: [],
        burst: 'none',
        uses: 'forever',
        description: "If you have the bind blasphemy and are either CAT 5 or on the brink of death, you can beckon the infinite blue. Summoning the King immediately initiates an apocalyptic force in an area around the size of a town (around CAT 5), centered on you. Sins and exorcists in the area, including you, roll 1d6 and add their category. If the result is 9 or higher, they survive, otherwise they are obliterated. Exorcists suffer instant death, sins are reduced to ashes. This fate can be defied as normal. Perfect Sins always survive. Everything else in the area CAT 5 or under is annihilated.<br><br>Summoning the King can only be done once in a game of CAIN."
      },
      {
        id: 'bind_forbidden_spirit',
        name: 'Forbidden Spirit',
        tags: ['Instant', 'Self'],
        burst: 'required',
        description: 'You can empower your sin for one action. As part of this action:<br>•  You lift limiters on your spirit. The action gains +1D and causes it to undergo a monstrous transformation similar to its original form. It becomes a size equal to CAT+1 [CAT+1:size] and can easily move, lift, strike, or throw objects or beings of an equal size. Roll PSYCHE for its effects. After the action, it reverts to its normal size.<br>•  When absorbing stress for your sin as a consequence of this action, take 1 less.'
      },
      {
        id: 'bind_surrender',
        name: 'Surrender',
        tags: ['Until Rest', 'Charm', 'Self'],
        burst: 'required',
        description: 'You draw on your sin\'s energy to partially fuse with its essence. Your body mutates slightly to accommodate this change. Immediately manifest a temporary sin mark and roll for the location and ability, which you gain until you end this ability early or rest. You may gain 1 sin to re-roll the mark ability, any number of times, any time while this power is active.<br><br>If you hit sin overflow while this effect is active and successfully resist, you manifest the chosen sin mark permanently instead of rolling for it.'
      },
      {
        id: 'bind_horde_spirit',
        name: 'Horde Spirit',
        tags: ['1 scene', 'Self'],
        burst: 'required',
        description: 'You empower your sin for one scene. The next time it takes action for traversal or movement, it gains +1D. As part of this action:<br>•  You can transform it into the form of a vehicle or rideable creature of up to CAT size [CAT:size] for the rest of the scene. It can go about CAT speed [CAT:speed], becomes partly visible to humans and has room for a half CAT size group [HALF_CAT:people] of human or exorcist passengers.<br>•  It can glide a short distance while in vehicle form, with or without passengers.'
      },
      {
        id: 'bind_hunter_spirit',
        name: 'Hunter Spirit',
        tags: ['1 scene', 'Self'],
        burst: 'required',
        description: 'You empower your sin for one scene. The next time it takes action for tracking or observation, it gains +1D. As part of this action:<br>•  It can now separate from you up to extreme range when released. You can communicate telepathically with it.<br>•  It gains the ability to fly and see and smell extremely well - it can also see in the dark and in the thermal spectrum, and clearly up to long range.<br>•  You can concentrate, dissociating from your body, and becoming extremely vulnerable. While concentrating this way, however, you can use your sin\'s senses instead of your own. You can engage and disengage this effect at will for the scene.'
      },
      {
        id: 'bind_penumbra',
        name: 'Penumbra',
        tags: ['Until Rest', 'Summon', 'Adjacent'],
        burst: 'required',
        description: 'You create an area drawn as a large circle, encircling up to a CAT+1 size area [CAT+1:area], and choosing a type from the below list. The prison takes only a moment to create, but takes a few minutes to activate and for its effects to take place. It lasts until you rest or until used again.<br>•  A white mantle prevents entrance by Sins, but allows humans and exorcists to pass normally.<br>•  A black mantle prevents entrance by humans or exorcists. In addition, humans will (generally) be unable to see into the area and will act as if the area doesn\'t exist.<br><br>You can invert this effect if you so choose, preventing exit instead of entrance. The prison can be broken by a determined supernatural attacker, but has a 4+CAT [CALC:4+CAT] talisman for durability, taking stress like an execution talisman.'
      }
    ]
  },
  {
    id: 'palace',
    name: 'Palace',
    flavor: 'Corporeal palace manifestation by exorcists is still under investigation by TEMERITY.',
    description: 'The contents of your mind are as solid to you as plain reality.',
    passive: {
      id: 'palace_sanctum',
      name: 'Sanctum',
      image: 'img/passives/sanctum.png',
      description: 'You and allies you rest with can enter your psychic palace while resting. This improves the resting rolls of yourself and one ally of your choice resting with you by +1.<br>•  The palace is a mental projection, a dream space that takes the form of a large home, residence, or mansion in a locale of your choosing. Walking off the premises merely returns you to the locale. As a purely psychic phenomena, you can control its appearance and decor.<br>•  Taking harm in a palace instantly shunts a person out of it, waking them up, instead of dealing them real harm. Visitors can leave any time.<br>•  Entering the palace mentally requires only closing your eyes and concentrating, leaving your outside body defenseless and insensate. It can be done by you any time, and by your allies by resting with you, or with your powers.'
    },
    powers: [
      {
        id: 'palace_cellar',
        name: 'Cellar',
        tags: ['Instant', 'Charm', 'Infinite Range'],
        burst: 'required',
        description: 'You can simulate situations inside your palace before putting them into practice in reality. You can use this power and roll to set up a number of allies equal to half CAT [CALC:HALF_CAT] even if you are not physically present. However, you may only set up a target if you can describe the way in which you trained or prepared with them, or a psychic copy of them, for the current situation. This setup can never be risky, but cannot lower risk. If you fail the setup roll, you may take 1d3 nonlethal stress to re-roll it, taking the second result as final.'
      },
      {
        id: 'palace_foyer',
        name: 'Foyer',
        tags: ['1 scene', 'Summon'],
        burst: 'required',
        description: 'Passive: Your palace has a tulpa, a psychic being that takes the form of a servant or butler. They are loyal to you, and you can determine their personality and appearance when you take this power. Its existence inside your palace is passive and costs nothing.<br><br>Active: You summon your tulpa, choosing one:<br>•  Have your tulpa aid you on a task related to research, crafting, or investigation, granting +1D on your next roll and making an extra slash on a talisman for each 6 you roll.<br>•  Briefly manifest your tulpa outside your palace in short range as a real person for the scene, a mirror of their appearance inside your palace but dressed any way you like. They have roughly the capabilities of an average person (CAT 0) and roll 2d for activities that a typical servant or butler could do and 0d for everything else. Any harm taken by them banishes them back to the palace.'
      },
      {
        id: 'palace_library',
        name: 'Library',
        tags: ['Instant', 'Self'],
        burst: 'none',
        description: 'Your palace has a library of information from the psychic gestalt. When you wish to gather information on or investigate any subject, you can gain +1D on the roll by accessing this library. However, afterwards the Admin rolls 1d6 for each of the following:<br>•  Is the information rare?<br>•  Is the information forbidden in some way?<br>•  Is the information pertinent to a powerful group?<br><br>For each 1, you take 2 nonlethal stress as you read something disturbing in the library.'
      },
      {
        id: 'palace_bar',
        name: 'Bar',
        tags: ['Instant', 'Self'],
        burst: 'none',
        uses: 'scene',
        description: 'Once a scene, you can open any closed door and open it to your (actual, physical) bar instead of the room you would expect. It is a well stocked, typical small bar, including snacks, a couple hot plates, and alcoholic and non-alcoholic drinks. It restocks between missions. The bar only exists while you are inside or hold the door, and outside items or people inside are pushed out before it disappears.<br><br>When you rest in your bar, you can roll 1d3+1 and do one of the following, spending charges of the die you have just rolled per option:<br>•  1 charge: Erase 1 stress on one person.<br>•  2 charges: Untick 1 tick on all hooks for a person.<br>•  3 charges: Remove an injury.<br><br>For each, describe a drink, snack, meal, or other form of relaxation or healing you are preparing for your guest.'
      },
      {
        id: 'palace_parlor',
        name: 'Parlor',
        tags: ['1 scene', 'Investigation area'],
        burst: 'required',
        description: 'Choose one person or up to a CAT sized group [CAT:people] of people in the investigation area and speak their (real) name(s) aloud. You can bring yourself and their psychic shadow inside your palace, no matter where they are. If your target(s) are willing, you can choose to bring their actual psychic consciousness inside your palace, making them aware and remember what is going on while inside, as though in a dream. Their real body becomes unconscious and vulnerable. They can leave willingly.<br><br>You can instead bring a psychic double of a willing or unwilling person into your palace. For an unwilling person, roll PSYCHE and only spend a burst on success. The double is a psychic copy of their mind at the time of summoning. Any memories formed by the double will not transfer over. The double cannot leave until the scene ends, or until they take harm as usual.<br><br>A person or double summoned this way is not obligated in any way to behave differently than their original.<br><br>Gain or grant +1D on the next roll by yourself or an ally taking advantage of this power.'
      }
    ]
  },
  {
    id: 'jaunt',
    name: 'Jaunt',
    flavor: 'Jaunt users are the most likely of all exorcists to \'hollow\' during sleep and leave an empty shell. This occurrence is very rare but its cause is unknown and it is 100% fatal.',
    description: 'Slice the body and soul with a carving knife.',
    passive: {
      id: 'jaunt_ghostwire',
      name: 'Ghostwire',
      image: 'img/passives/ghostwire.png',
      description: 'You can join your mind telepathically with a number of other willing people you touch equal to CAT [CALC:CAT]. While within long distance of each other, you can talk telepathically, and sense each other\'s ambient emotional state. This effect lasts until you use it again, until someone becomes unconscious, or until you or another person closes the connection.'
    },
    powers: [
      {
        id: 'jaunt_threads',
        name: 'Threads',
        tags: ['Until Rest', 'Charm', 'Self'],
        burst: 'required',
        description: 'You can sense the unseen world of traces of grace. Upon using this power, you close your eyes and can see through your eyelids the patterns the soul leaves in the environment.<br>•  You gain the ability to see living beings, even through walls, for CAT range [CAT:distance].<br>•  You can see the traces a sin or someone strong in grace such as an exorcist leaves, like a faint trail of light through the air.<br>•  You gain +1D on actions to track or locate living beings or traces of sins in the area.<br><br>However, you cannot see any non-living matter (you are effectively blind) while maintaining this power, and find actions that rely on sight hard. This power ends when you open your eyes or when you rest.'
      },
      {
        id: 'jaunt_possession',
        name: 'Possession',
        tags: ['1 Scene', 'Curse', 'Short'],
        burst: 'required',
        description: 'You can shunt your perception out of your body to possess a human, animal, or corpse (in good condition) you can see in range for a scene. Supernatural beings are immune to this effect. Unwilling humans might require rolling PSYCHE to possess successfully.<br>•  While possessing another your real body is insensate and defenseless.<br>•  For humans and animals, you cannot force a target to harm itself or take action that would indirectly cause it to come to harm.<br>•  Actions that the target takes use your skills, but the target\'s body or equipment, which might change the circumstances.<br><br>You are kicked out of the body if it takes harm. Gain or grant +1D on the next roll by yourself or an ally taking advantage of this power.'
      },
      {
        id: 'jaunt_geist',
        name: 'Geist',
        tags: ['1 scene', 'Self'],
        burst: 'required',
        description: 'You can shunt your perception out of your body and roam for CAT+2 range [CAT+2:distance], becoming a being made of purely psychic energy.<br>•  While practicing this power, your real body is insensate and defenseless.<br>•  You can fly at CAT speed [CAT:speed], are invisible to those not psychically sensitive, and may pass through walls, floors, and objects easily while in this form.<br>•  You cannot interact with or be affected by the physical world. You cannot use or benefit from your own psychic powers, but psychic powers or effects from others can still affect you.<br><br>If your form is destroyed somehow (by a supernatural force), you take 1 stress, this power ends, and you can\'t use this power again until the scene passes.<br><br>This power may easily affect the parameters of rolls, such as difficulty and risk.'
      },
      {
        id: 'jaunt_passenger',
        name: 'Passenger',
        tags: ['1 Scene', 'Curse', 'Extreme'],
        burst: 'required',
        description: 'You choose a group of willing humans or exorcists with a group size equal or less than half CAT [CALC:HALF_CAT] in extreme range, who must be able to either hear you (even telepathically) or see you. You pull their psychic presence into your body for the duration. Their bodies become limp, vulnerable and insensate. However:<br>•  They now share control of your body with you, including all senses.<br>•  You can surrender control of your body to them to allow them to make action rolls using their skills or abilities, but your body (gear, access, etc).<br>•  You can set them up as normal or aid them on these skills.<br><br>They cannot use psychic powers while possessing you this way, and you suffer any harm or consequences from their actions.'
      },
      {
        id: 'jaunt_desecrate',
        name: 'Desecrate',
        tags: ['Instant', 'Adjacent'],
        burst: 'none',
        uses: 'rest',
        description: 'You can force a semblance of life into the corpses of up to a CAT sized group [CAT:people] of humans or exorcists by touching them on the eyes. You may ask the corpse(s) three questions total (no matter how many you animate), after which the effect ends and they become dead again. It also expires if pressure increases.<br>•  You can\'t use this power on the same corpse(s) more than once.<br>•  The power does not return life to the body, but accesses the body\'s memories. If the head or brain is missing, or the body lacks a tongue, etc, this power will not work as well.<br>•  A corpse is obligated to answer truthfully, but can only speak to the realm of its knowledge and memories before it died. It may have only partial knowledge of a situation or may speak according to its own viewpoint.<br><br>Then lose the use of this power until you rest.'
      }
    ]
  },
  {
    id: 'sympathy',
    name: 'Sympathy',
    flavor: 'PSYCHOMETRY IS BANNED ON CAMPUS - CASTLE REF 0094',
    description: 'Humans leave impressions on everything they touch. You can do more than touch.',
    passive: {
      id: 'sympathy_resonance',
      name: 'Resonance',
      image: 'img/passives/resonance.png',
      description: 'At the start of the mission, roll on the resonance table. Roll 1d3, then 1d6, then check the resonance tables. When you are making an action roll and you are using an item you are resonant with, you gain a +1D bonus. You can spend a psyche burst any time to roll an additional resonance. You can keep up to three at a time, and only benefit from one at a time.<br><br><b>Resonances</b> (Roll 1d3, then 1d6):<table class="virtue-rupture-table"><tbody><tr><td class="rupture-duration">11</td><td class="rupture-cost">Phones</td><td class="rupture-duration">21</td><td class="rupture-cost">Balls</td><td class="rupture-duration">31</td><td class="rupture-cost">Ropes</td></tr><tr><td class="rupture-duration">12</td><td class="rupture-cost">Lights</td><td class="rupture-duration">22</td><td class="rupture-cost">Guns</td><td class="rupture-duration">32</td><td class="rupture-cost">Hammers</td></tr><tr><td class="rupture-duration">13</td><td class="rupture-cost">Knives</td><td class="rupture-duration">23</td><td class="rupture-cost">Mugs</td><td class="rupture-duration">33</td><td class="rupture-cost">Cars</td></tr><tr><td class="rupture-duration">14</td><td class="rupture-cost">Keys</td><td class="rupture-duration">24</td><td class="rupture-cost">Computers</td><td class="rupture-duration">34</td><td class="rupture-cost">Doors</td></tr><tr><td class="rupture-duration">15</td><td class="rupture-cost">Books</td><td class="rupture-duration">25</td><td class="rupture-cost">Shoes</td><td class="rupture-duration">35</td><td class="rupture-cost">Bags</td></tr><tr><td class="rupture-duration">16</td><td class="rupture-cost">Baseball Bats</td><td class="rupture-duration">26</td><td class="rupture-cost">Power Tools</td><td class="rupture-duration">36</td><td class="rupture-cost">Gloves</td></tr></tbody></table>'
    },
    powers: [
      {
        id: 'sympathy_psychometry',
        name: 'Psychometry',
        tags: ['Instant', 'Adjacent'],
        burst: 'none',
        uses: 'rest',
        description: 'You can touch objects to remotely view their memories. You can view back a number of days equal to your CAT [CALC:CAT]. Roll PSYCHE, then ask a question plus an additional question per success:<br>•  Where has this object been?<br>•  Who has touched this object?<br>•  What has this object been used for?<br>•  What else is this object connected to?<br><br>Memories of an object are impressionistic and imprecise, and they are only usually aware of their very immediate surroundings.<br><br>After using this power, lose its use until you rest.'
      },
      {
        id: 'sympathy_bond',
        name: 'Bond',
        tags: ['1 Scene', 'Charm'],
        burst: 'required',
        description: 'For the scene, you can bond incredibly tightly with an item you are holding in one or both hands.<br>•  You are now resonant with that item. It is still mundane.<br>•  You can now use it as a mundane cutting or bludgeoning weapon even if it wouldn\'t normally be a weapon. It has about the power of a CAT 0 bat or sword.<br>•  The item becomes virtually indestructible, and you can cause the item to recall to your hand, flying through the air, from within short distance.<br>•  You can discharge this power to make a strike with the object, granting it supernatural destructive power equal to CAT. Roll PSYCHE for its effects (it gains +1D on the roll as normal due to resonance). Then end this effect and destroy the item.'
      },
      {
        id: 'sympathy_amplify',
        name: 'Amplify',
        tags: ['1 Scene', 'Summon', 'Adjacent'],
        burst: 'required',
        description: 'You can expand the mundane properties of a regular non-weapon item to extreme levels. You touch a mundane object up to CAT size [CAT:size]. For the scene, you automatically have resonance with it, and its properties are enhanced to extreme levels, as if they were up to your CAT in scale [CAT:magnitude]. For example:<br>•  A car\'s speed, handling, and resilience.<br>•  A light\'s brightness and intensity, and the area it illuminates.<br>•  A door\'s ability to lock and withstand force.<br><br>This can easily affect the difficulty and risk of rolls. The object is still mundane.'
      },
      {
        id: 'sympathy_diplomacy',
        name: 'Diplomacy',
        tags: ['Instant', 'Short'],
        burst: 'required',
        description: 'You make a simple request of an object as if it was a person, or ask it a simple yes or no question.<br><br>For example, you can ask a door to open or hold shut (even if it couldn\'t normally lock, or you don\'t have the key), a computer to turn off or find information for you, or a car to turn on without a key or drive by itself.<br><br>If you need to make a roll for this, roll PSYCHE or use a social action, such as negotiation or authority.<br><br>You can affect objects up to CAT size [CAT:size] with this. Objects asked questions can answer only with yes or no answers and can\'t actually vocalize.'
      },
      {
        id: 'sympathy_alliance',
        name: 'Alliance',
        tags: ['1 Scene', 'Summon', 'Short'],
        burst: 'required',
        description: 'An object up to CAT size [CAT:size] in short range can now take action to set up an ally, rolling 1d6, or PSYCHE if you are resonant with that object. The object can take or cause consequences as normal from these actions.<br><br>Allies have to be able to interact with it or use the object to gain its benefits. The object doesn\'t gain the ability to actually move or animate in any way, but fortune simply bends around it.'
      }
    ]
  },
  {
    id: 'tongue',
    name: 'Tongue',
    expansion: 'gff3',
    flavor: "...rooted in the language center of the brain, suggesting connections to recorded manifestations of 'ecstatic speech' and 'divine language'.<br><br>Manifesting Tongue blasphemies requires special speech therapy conditioning X285 and restraint system 25 in accordance with Castle Code in order to avoid accidental exposure. You may be required to maintain silence for long periods of time. Your tongue may also turn 'pitch' or 'ink' black, or become forked. This is normal.",
    description: 'Your word is law.',
    passive: {
      id: 'tongue_the_word',
      name: 'The Word',
      image: 'img/passives/tongue.png',
      description: "Your powers have no effect if you can't speak, or if sound is suppressed somehow. Using the same power from this blasphemy more than once before resting has ramping effects (not optional).<br>•  Second time: +1 CAT (min CAT 2), take 1 irreducible stress.<br>•  Third time: +2 CAT (min CAT 3, max CAT 7), +1D, take 3 irreducible stress, anyone in short range takes the deafened affliction for the rest of the hunt.<br>•  Fourth time: Power resolves at CAT 7, do not roll (automatic successes). Afterwards, suffer instant death. Anyone in short range is permanently deafened."
    },
    powers: [
      { id: 'tongue_bang', name: 'Bang', tags: ['Instant', 'CAT range'], burst: 'required', description: "You say 'bang'. This causes a massive influx of force affecting up to a half CAT [HALF_CAT:area] area with its center in range that typically manifests as an extreme pressure wave. It affects everything except you. Roll PSYCHE for its effects, and only spend a psyche burst on success.<br>•  Gain +1D if the environment around you is quiet or subdued.<br>•  Gain +1D if you are in an area with favorable acoustics, like a canyon, a performance venue, theatre, or a stadium." },
      { id: 'tongue_silence', name: 'Silence', tags: ['1 scene', 'Transmute', 'Long'], burst: 'required', description: "You say 'silence' and choose an area up to CAT size [CAT:area] with its center at a point in range. Everything in the area completely stops producing noise. Anything mundane that would make a loud noise as part of normal operation completely stops functioning, such as vehicle engines, creaky door hinges, guns, explosives, fireworks, etc. Your powers from this blasphemy or any other blasphemy or psychic effect that would create a loud noise do not work inside this area.<br>•  Gain or grant +1D when next acting on this power.<br>•  This power can easily affect the parameters of rolls." },
      { id: 'tongue_narrate', name: 'Narrate', tags: ['Instant', 'Short'], burst: 'required', description: "Pick up to a CAT sized group [CAT:people] of humans or exorcists in range (which could include yourself), an object or location in range, and a verb. Then narrate a sentence using the following structure:<br>(He/she/they) was/were (verb)ing the (noun).<br><br>For example:<br>•  He was opening the door.<br>•  She was falling in the air.<br>•  He was driving the car.<br>•  They were lying on the floor.<br><br>Roll PSYCHE for its effects, and only spend a psyche burst on success. After the sentence finishes and if the roll is successful, it becomes true, including moving any affected people where they need to be as if they were always there. This power does not adjust human memory nor can it create anything, change anyone, or directly harm anyone (it could still easily harm someone indirectly)." },
      { id: 'tongue_die', name: 'Die', tags: ['Instant', 'Curse'], burst: 'required', description: "You say 'die' and instantly kill all humans in an area up to CAT size [CAT:area], centered on you. This is not optional, you don't get to choose who to kill or spare, and you don't require a roll to do so. If you used this power at least once to kill one person, at the end of a hunt, permanently fill in a sin box. If you used it at least once to kill more than one person, permanently fill in 1d3 sin boxes." },
      { id: 'tongue_snap_click_pop', name: 'Snap, Click, Pop', tags: ['Instant', 'Short'], burst: 'required', description: "You say 'Snap', 'Click', or 'Pop', and produce an effect that would normally produce one of those sounds. For example, you could use 'click' to open a locked door, push a button, or type on a keyboard. You could use 'snap' to break a weapon or an arm. You could use 'pop' to blow a car tire or shoot a gun someone else is holding.<br><br>If necessary, roll PSYCHE for effects that would be risky, unclear, or inflict harm, and only spend a burst on success. Otherwise, this power is always successful. When you or an ally next acts to gain advantage of this power, they may gain +1D." }
    ]
  },
  {
    id: 'playlist',
    name: 'Track',
    expansion: 'gff3',
    flavor: 'Fact: The loose or leftover cursed objects created by this power are curated in Temerity archive 52. The collection is quite extensive and has a fairly rabid following among certain subsections of CAIN staff.',
    description: 'Check, one two, one two.',
    passive: {
      id: 'playlist_playlist',
      name: 'Playlist',
      image: 'img/passives/track.png',
      hasNotes: true,
      description: "You have a powerful cursed object, which is the focus of your powers. It's a music player, typically a tape player or a cd player with attached headphones. It doesn't take KP, and you can supernaturally form and reform it in your hands at will. Make a (real) playlist of 6 songs at the start of each hunt. Some of your powers key off this playlist. Any music you play from this playlist can be heard diagetically (in the game) if you so choose. It appears to come from either a visible location in short range, your player, or nowhere in particular (like a soundtrack), and you can turn it on and off at will."
    },
    powers: [
      { id: 'playlist_vibe', name: 'Vibe', tags: ['1 scene', 'Self', 'Charm'], burst: 'required', uses: 'scene', description: "When a scene starts, you may use this power to play a track from your playlist. Decide if the track is Melancholy, Chill, or Angsty. Gain a bonus based on the track's type for the rest of the scene.<br>•  Melancholy: You or any ally erase 1 stress when they fail a roll.<br>•  Angst: After you or an ally gains an injury, hook, or affliction, they gain +1D on their next action.<br>•  Chill: At the end of the scene, everyone in short range of you erases 1 stress if there was no risky or hard rolls made this scene." },
      { id: 'playlist_replay', name: 'Replay', tags: ['Whole Mission', 'Charm', 'Short'], burst: 'required', description: "Passive: Without spending a psyche burst, you or an ally in short range from you performs a course of activity that takes no longer than 10 seconds, which you record on your player. It records you or your ally at the moment of the recording, including dress, speech, and objects held or worn, but nothing else around them. You can keep 3 recordings this way.<br><br>Active: You can playback a recording by spending a psyche burst. This immediately replays a psychic double of the recording. This double is physically tangible, looks and sounds believable, can inflict harm, and can interact with the physical world, though it de-manifests after 10 seconds and cannot interact in any way that was not previously recorded. Roll PSYCHE for its effects if they are unclear, contested, or risky, and only spend a psyche burst on success." },
      { id: 'playlist_boost', name: 'Boost', tags: ['Instant', 'Short'], burst: 'none', uses: 'scene', description: "You can activate this power once a scene before yourself or any ally in range uses a blasphemy and makes a PSYCHE roll. Pick a track from your playlist. Record the first three digits of the track length (like 3, 3, 5). 0s do not count, so a 10:35 track would record 1, 3, 5. For each die rolled, the action gains +1 additional CAT for every die rolled that matches a number recorded from the track length (min +1 CAT, max +3, max CAT 7)." },
      { id: 'playlist_shuffle', name: 'Shuffle', tags: ['Instant', 'Transmute', 'CAT area'], burst: 'required', description: "You may choose any number of objects, vehicles, or people in the affected area. Anything swapped may have a size up to half CAT [HALF_CAT:size] (min 0). You instantly swap their positions and momentum. You must swap things of approximately the same size and mass. If attempting otherwise, or if you need to roll for effects such as harm, roll PSYCHE and only spend a burst on success. When you or an ally next acts to gain advantage of this power, they may gain +1D." },
      { id: 'playlist_title', name: 'Title', tags: ['Instant', 'Short', 'Summon'], burst: 'required', description: "You play a track from your playlist. You can manifest in short range from you a psychic manifestation based on any part of the title, up to CAT [CAT:magnitude] in size or magnitude. The effect can create:<br>•  A psychic copy of any object named in the title.<br>•  A psychic copy of any human or animal in the title.<br>•  A brief burst of energy, weather, or physical force (fire/rain/wind/push/pull/pressure) named in the title.<br><br>The manifestation lasts until you would roll for its effects or actions, until you use this power again, or until the scene passes, then it dissipates. Anything created is tangible but has an aura of unreality or 'wrongness' around it to regular humans. It can cause tangible harm or force and interact with the physical world but is in no way obligated to follow your instructions if it can act independently. If the use of this power would cause harm, or be risky or uncertain in some way, roll PSYCHE for its effects when it is used, only manifesting and spending a burst on success. Otherwise, it always takes effect." }
    ]
  },
  {
    id: 'wire',
    name: 'Wire',
    expansion: 'gff3',
    flavor: "Fact: WIRE has only been discovered by CAIN in the last two years, but the organization understands it fairly well. Users may develop the ability to \'hear\' phone lines and electric signals. Involuntary body modification through this power is common. Do not be alarmed. It will return to normal in 1-2 hours.",
    description: "They\'re like veins, if you really think about it. You can even hear its heartbeat.",
    passive: {
      id: 'wire_main_artery',
      name: 'Main Artery',
      image: 'img/passives/wire.png',
      description: "You have a cell phone with better features (wireless internet access). It doesn\'t take KP. You can produce or remove it at will, forming it from psychic energy, even if you lose it."
    },
    powers: [
      { id: 'wire_disk', name: 'Disk', tags: ['Instant', 'Adjacent'], burst: 'required', description: "You touch an adjacent willing human or exorcist, or an object, vehicle, or construction of CAT size [CAT:size] (including anything on or inside that object), and store them as a CD. You can keep a number of CDs equal to your CAT+1 [CALC:CAT+1]. They reset between missions, and their contents are freed. A person stored is in a stasis of sort and has no awareness or sensation, and cannot take harm or be affected in any way, though hooks, talismans, and afflictions on exorcists within can continue to build up, affecting them instantly on release if filled. Putting a stored CD into a CD disk drive lets you read information about its captive like a text document. When you activate the CD again, or if it is broken before then, the stored person or object reappears in a space in short range of you, regardless of if there is room for it or not. Roll PSYCHE for any of its effects." },
      { id: 'wire_terminal', name: 'Terminal', tags: ['Until rest', 'Self', 'Charm'], burst: 'required', description: "You manifest a computer terminal that emerges harmlessly (but somewhat disturbingly) from your body, usually from your chest or back. While manifesting this terminal, activities are hard if you are moving or under duress, but you can otherwise act normally, including typing or interfacing from yourself. The terminal has a fast connection to the internet and is powered, regardless of location. Any other character interacting with the terminal can use your relevant skills to gather information using you. The first time in a scene someone gathers information this way, also gain +1D. You end this power with a few moments' concentration, retracting the terminal." },
      { id: 'wire_deck', name: 'Deck', tags: ['1 Scene', 'Adjacent', 'Curse'], burst: 'required', description: "You flip a keyboard out from any object, construction, vehicle, human, or exorcist. The keyboard lasts until you produce a new one, or until the end of the scene. While the keyboard is out and you're able to type on it, when gathering information on your subject, you can interact with them as if they were a computer. You may roll either PSYCHE or the interfacing skill, whichever is higher. The first time you do this for each keyboard, gain +1D. You can flip it out from even impossible surfaces, it may be made from unusual materials, and it does not harm a person it is produced from, although it is hard to type on them if they are unwilling or while they are moving." },
      { id: 'wire_surge', name: 'Surge', tags: ['Instant', 'CAT+2 range'], burst: 'required', description: "You instantly transpose your physical form and a group of up to CAT size [CAT:people] of willing humans or exorcists in short range from you into a psychic electrical charge, then travel rapidly through a phone line or a networked computer, appearing instantly on the other side. However, you must be able to clearly see your destination, or else know the phone number of the target you want to reach, or the network address of the computer on the other side. You can use this power without knowing your destination, but where you end up is entirely up to the Admin." },
      { id: 'wire_call', name: 'Call', tags: ['Instant'], burst: 'required', description: "You call any human, sin, or exorcist. Only spend a psyche burst if they pick up. If they didn't have a phone on them, this power manifests one when they pick up, and a new number for them (which you don't know unless they tell you). This phone is a little odd and disintegrates into psychic energy when you rest." }
    ]
  },
  {
    id: 'mother',
    name: 'Mother',
    expansion: 'gff3',
    flavor: "...continued efforts to contain Mother are showing reduced effectiveness (as high as [REDACTED] year after year). Therefore OS director Alhambra is making a firm recommendation to implement doctrine 8 ([REDACTED]) given current operation conditions.<br><br>07-04-1998<br><br>Request denied. HOP effectiveness of Mother's infected assets outweighs her potential risk, despite the House's increased antipathy towards her. We will continue to collect and train them when possible, and dispatch instant execution when unable to safely recover assets.<br><br>As above, so below.<br><br>Lower first, <b style=\"font-size:1.1em\">F. ESPADA</b><br><br>Castle Director F. Espada",
    description: "SHE WON'T GET OUT OF MY HEAD.",
    passive: {
      id: 'mother_knows_best',
      name: "Mother's Embrace",
      image: 'img/passives/mother.png',
      description: "When you sin overflow, you may gain a <b>Mother's Mark</b> instead of a regular sin mark, and roll 2d6, picking the lowest, if you choose to keep control.<br><br><b>Mother's Mark</b><br><br>A Mother's Mark does not lower sin overflow cap, but it still counts as a sin mark in all other aspects. It has no other gameplay effects. Roll 1d6 for its aspect. You can gain the same mark more than once.<br>•  1. <b>New eye</b> in center of forehead. Looks around on its own. You cannot see through it. <i>It is not yours.</i><br>•  2. <b>Large patch of skin or hair</b> loses all color, then gains banded stripes.<br>•  3. <b>New pupil</b> in eye.<br>•  4. <b>New tongue</b>.<br>•  5. <b>New limb</b>. Elongated and double jointed.<br>•  6. <b>Spiraling patterns</b>, warping the skin and muscle. Patterns change and shift over time."
    },
    powers: [
      { id: 'mother_unravel', name: 'Unravel', tags: ['Until Rest', 'Self', 'Charm'], burst: 'required', description: "You unravel your skin, muscle, and organs into a pulsing mass. You can reform body parts such as hands, mouths, eyes, or teeth anywhere in this mass at will. While in this form:<br>•  You cannot use or benefit from your own psychic powers (other than this one), but psychic powers or effects from others can still affect you.<br>•  You can spread through spaces as small as a sink pipe, spread out your total mass over an area equal to CAT [CAT:area], or compact your mass into a tight shape about the size of a piece of luggage.<br>•  Roll PSYCHE for any effects you'd use this form for while it's active.<br>•  Humans are typically terrified by this form, and the next action against a human or group of humans after taking this form takes +1D.<br><br>When your party rests, or when you end this power, you reform in any area that has enough space for you that your mass is touching. If there is no room for you, you instead reform when there is space." },
      { id: 'mother_polyp', name: 'Polyp', tags: ['Entire Hunt', 'Charm', 'Adjacent'], burst: 'none', description: "You harmlessly but gruesomely remove and place either or both of your eyes, or your mouth, (or any combination of your eyes and mouth) on a human, exorcist, anomaly, or flat surface you can touch. For unwilling or unaware targets, roll PSYCHE and only spend a burst and activate this power on success.<br><br>You can see and speak normally from your eye and mouth, but they disappear on your face for the duration. You take any stress your eye or mouth would take as a consequence of your actions with them, and they return to your face when you end this power, or after they take harm.<br><br>Additionally, any number of times while active, you can take 1 stress to use a blasphemy power from any eye or mouth in CAT+2 range [CAT+2:distance] as if you were there, spending a burst as normal. Gain +1D if doing so would grant you an advantage." },
      { id: 'mother_knot', name: 'Knot', tags: ['Entire Hunt', 'Self'], burst: 'none', description: "Passive: When you gain any amount of stress, you can capture its negative energy without spending a burst, appearing as a raised knot in your skin. Reduce stress suffered by 2 for each knot gained. You can capture up to 3 knots. At the end of any scene in which you have one or more knots, roll 1d6. When a knot bursts, you take 2 irreducible stress.<br>•  On a 1-3, take 1d3 stress and burst a knot.<br>•  On a 4-5, take 1 stress and burst a knot.<br>•  On a 6, take no stress and burst a knot." },
      { id: 'mother_colony', name: 'Colony', tags: ['Self', 'Ally', 'Short'], burst: 'none', description: "Gain 1d3 stress, then you or an ally in range gains a fleshy shield that absorbs 2 stress from external harm. If a character already has such a shield, increase it by +2, but they also take 1d3 stress." },
      { id: 'mother_coil', name: 'Coil', tags: ['Instant', 'Short'], burst: 'required', description: "Your limb peels apart its flesh and skin, then lashes at a target in short range like a whip, dealing harm or pulling them some distance. Roll PSYCHE for its effects.<br>•  Gain +1D if you have 3 or fewer stress boxes remaining.<br>•  Gain +2 CAT if you have sin overflowed this mission." }
    ]
  }
];

// ════════════════════════════════════════════════════════════════════
// DATA: Sin Marks
// ════════════════════════════════════════════════════════════════════

const SIN_MARKS = [
  {
    id: 1,
    name: 'Eyes',
    appearance: 'Black or altered sclera, white iris, split, slit, or duplicate pupil.',
    abilities: [
      'You can see clearly up to extreme distance, as if you could \'zoom in\' your vision.',
      'You can see through walls and nonliving matter in short distance.',
      'When closed, you can sense the ambient emotional state of nearby humans or exorcists. Once a hunt, gain +1D when acting on this.',
      'Once a hunt, you can momentarily paralyze a human by merely looking at them. The effect lasts until you break eye contact, a minute passes, or either of you suffer harm.',
      'You can see clearly in the dark and are unaffected by darkness, weather, or obscurement.',
      'Gain +1D to Surveillance or Investigation. This could put you up to 4D base.'
    ]
  },
  {
    id: 2,
    name: 'Jaw',
    appearance: 'Split or extended jaw, pharyngeal jaw, fangs, black tongue, viscous saliva.',
    abilities: [
      'You can spit black venom up to short distance. It\'s a mundane ranged weapon with about the same effectiveness as a pistol.',
      'You can gain 1d3 sin to re-roll any roll requiring speech, taking the second result as final.',
      'You can whisper short messages into the wind of 6 words or less that a target of your choice can hear in their ear within long distance. The target cannot reply.',
      'You gain +1D when negotiating with, commanding, or convincing humans.',
      'Once a hunt, you can give a short, one word command to a human, who then immediately attempts to follow it to the best of their ability. Humans will not obey obviously harmful commands.',
      'Gain +1D to Authority, Connection, or Negotiation. This could put you up to 4D base.'
    ]
  },
  {
    id: 3,
    name: 'Back or Chest',
    appearance: 'Spines, lesions, skin discoloration or warping, rapid regeneration, hardened or loose skin or scales, vestigial wings, extra ribs.',
    abilities: [
      'You can roll an extra resting die while resting. If you do, gain the same amount of sin.',
      'You no longer need to breathe. You are no longer affected by mundane toxin or poison. You cannot become intoxicated by alcohol.',
      'When you rest, you can gain 1d3 sin to remove an affliction or hook.',
      'You have a chance of ignoring any injury (roll a d6, ignore on a 6).',
      'Automatically erase 1 stress when pressure increases.',
      'Gain +1D to Conditioning. This could put you up to 4D base.'
    ]
  },
  {
    id: 4,
    name: 'Arms or Hands',
    appearance: 'Claws, split hand or arm, extra arm, twisting skin or muscles, discoloration, extra fingers.',
    abilities: [
      'You can gain 1d3 sin when performing a feat of physical strength to increase the CAT of that feat by +2.',
      'Once a hunt, you may merge any single mundane weapon or item you could hold into your flesh, able to conceal or produce it at will.',
      'Once a hunt, you can dissolve all non-living matter in a cube about half CAT size into a black sludge with a touch of your third (ring) finger.',
      'Once a hunt, you can gain 1d3 sin to morph your arm or hand into a melee weapon for a scene. It is a supernatural melee weapon of half CAT potency.',
      'You can re-roll any force or interfacing roll, taking the second result as final. If you do, gain 1d3 sin.',
      'Gain +1D to Force or Coordination. This could put you up to 4D base.'
    ]
  },
  {
    id: 5,
    name: 'Skin, Hair, or Legs',
    appearance: 'Major discoloration or bleaching, transparent skin, warping of gait, digitigrade or multiple legs, patchiness, change in hair color.',
    abilities: [
      'You can gain 1d3 sin to leap up to an object CAT size in height without rolling. You can do this as part of an action roll.',
      'While touching them with your bare flesh, you can climb or walk on walls as though they were flat surfaces.',
      'You have +1D when running or sprinting on open ground, such as a road.',
      'You can gain 1 sin during an action roll to glide a long distance through the air as part of the action. You have to start at height to gain this benefit.',
      'You can gain 1d3 sin to go completely invisible to mundane perception for the duration of an action roll.',
      'Gain +1D to Covert or Interfacing. This could put you up to 4D base.'
    ]
  },
  {
    id: 6,
    name: 'Choose a Location',
    appearance: 'Player chooses any location from the above.',
    abilities: []
  }
];

// ════════════════════════════════════════════════════════════════════
// DATA: Virtues (GFF-1 Expansion)
// ════════════════════════════════════════════════════════════════════

var VIRTUES = [
  {
    id: 'justice',
    name: 'Justice',
    title: 'The Executioner',
    image: 'img/virtues/justice.png',
    color: '#9FEDDD',
    compendiumDesc: "Justice is generally regarded as the most powerful exorcist in CAIN's current arsenal, a loner of few words given extreme leeway in engagement and unusual permission to roam. This is because Justice's high blasphemy, Law, will not allow them to disobey orders from a superior in any form, making them the perfect attack dog. They have the most recorded executions in CAIN history and a near-flawless fight record, standing as an object of awe amongst the regular rank and file.<br><br>For the most part, they seem to regard their position as an accepted reality and have come to embody their role as the headsman of CAIN. They are exceedingly efficient and the overwhelming nature of their abilities allows them to trivialize even the most tenebrous of opponents.<br><br><em class=\"virtue-desc-note\">It is commonly theorized that TEMERITY has a special subdivision entirely committed to the contingency that Justice manages to circumvent their own blasphemy.</em>",
    favoriteFood: 'Health Food, Dates',
    expansion: 'gff1',
    strictures: 'You cannot ignore orders from a superior. Roll 0d on any action you think would break the law.',
    strictureIgnoreCost: '2 nonlethal stress',
    likes: ['Religious Debate', 'Classical Music', 'Cleanliness'],
    dislikes: ['Charity', 'Tardiness', 'Dogs'],
    bondAbilities: [
      { level: 0, description: 'Gain an extra xp trigger: Did you uphold the dogma of CAIN?' },
      { level: 1, description: 'Gain the Law blasphemy. You can use it once a hunt.' },
      { level: 2, description: 'If you executed a sin rather than sparing it, then lower sin by 1 after halving it. If you spared a sin or failed to execute it, increase sin by 1d3 after halving it instead.' },
      { level: 3, description: 'You always gain the last effect of Law for free (make something specific less hard or risky).' }
    ],
    highBlasphemy: {
      name: 'Law',
      tags: ['1 Scene', 'Transmute', 'Adjacent'],
      description: 'You set a rule of physical reality that affects everything in a circular area around you, called the Court, with an approximate area of around CAT+1 [CAT+1:area]. You can exclude yourself. Any changes made take place instantly and persist inside the area, but the area itself does not move. This power can always eliminate, destroy, or totally change mundane beings, objects or structures. Strong willed or supernatural beings such as exorcists or sins can partly resist its effects, but humans are always affected instantly. If you exit the area or the scene ends, the effect ends.<br><br>To use law, spend all your remaining psyche bursts (min 1), then fill in the sentence:<br><br>In the Court, ____ is/are _____<br><br>You can only use words from the list below.<br><br>Then, choose one effect:<br>\u2022 Grant up to three advantage die (total) to an ally while the court is active. These can be given out one at a time or all at once.<br>\u2022 Instantly kill all humans in the area or that enter the area while the court is active.<br>\u2022 Slash a talisman by rolling PSYCHE. This gains +1D and deals +1 slash on at least one success.<br>\u2022 Make something specific less hard, or less risky while the court is active.<br><br>This power may easily affect the parameters of rolls while in the area, and may make it so rolls are not even required for certain tasks.<br><br>Additional effects are up to the GM and can be improvised depending on the fiction.',
      termsOfLaw: ['Fast', 'Slow', 'Sticks', 'Stones', 'Paper', 'Cloth', 'Blood', 'Nails', 'Skin', 'Slings or Bullets', 'Arrows', 'Blades', 'Solid', 'Liquid', 'Metal', 'Soft', 'Sharp', 'Heavy', 'Light', 'Earth', 'Fire', 'Water', 'Air', 'Forbidden', 'Pulled', 'Repulsed']
    }
  },
  {
    id: 'faith',
    name: 'Faith',
    title: 'The Timid',
    image: 'img/virtues/faith.png',
    color: '#E3D142',
    compendiumDesc: '',
    favoriteFood: '',
    expansion: 'gff1',
    strictures: 'You cannot harm anyone or anything. Roll 0d on actions you think would be impolite.',
    strictureIgnoreCost: '2 nonlethal stress',
    likes: ['Dogs', 'Slow Afternoons', 'Taking Photos', 'Gachapon', 'Phone Games', 'Fighting Games'],
    dislikes: ['Fortitude', 'Rude people', 'Work', 'Horror Movies'],
    bondAbilities: [
      { level: 0, description: 'Once a hunt, if you are able to eat sweets, you can relieve 1 sin.' },
      { level: 1, description: 'You gain the Null blasphemy. You can use it once a hunt.' },
      { level: 2, description: 'Sin overflow only reduces your sin overflow cap by 1 instead of 2.' },
      { level: 3, description: 'When you so choose, your Null Blasphemy becomes the Immaculate Defiance of Heaven. This choice is irreversible.' }
    ],
    highBlasphemy: {
      name: 'Null',
      tags: ['1 Scene', 'Charm', 'Instant'],
      description: 'Spend all your remaining psyche bursts (min 1). For the duration of the scene, you become completely immune to psychic phenomena. Anything inflicting physical harm, like the physical attacks of Sins, can affect you normally. You cannot be affected by afflictions (though they still remain on you, their abilities are merely suppressed for the scene). In return, for the duration, you cannot use or be affected by any blasphemy other than this one, including those from your allies, and any currently affecting you end. Unlike other powers, you cannot end this effect early.'
    },
    highBlasphemy2: {
      name: 'Immaculate Defiance of Heaven',
      tags: ['Permanent'],
      showAtLevel: 3,
      irreversible: true,
      description: 'This power has the same function as Null, except it is permanent. Effects: You can no longer use or be affected by blasphemies. You no longer gain, spend, or interact with psyche bursts. Your sin resets to 0, you can no longer gain sin or enter overflow. Cosmetic sin mark changes persist but cannot be used. You can gain 1d3 stress instead of a psyche burst for +1D on any appropriate action. Fighting sins with mundane abilities is no longer hard by default, physical abilities are about 1/2 CAT in capability (push +1 CAT for 1d3 stress). +1 max injury. Natural lifespan extends by 10d10 years.'
    }
  },
  {
    id: 'charity',
    name: 'Charity',
    title: 'The Twins',
    image: 'img/virtues/charity.png',
    color: '#DB1CE6',
    compendiumDesc: '',
    favoriteFood: '',
    expansion: 'gff1',
    strictures: 'When possible, you must participate in teamwork or set up. You roll 0d when trying to hide, stealth, or avoid notice.',
    strictureIgnoreCost: '2 nonlethal stress',
    likes: ['Fashion', 'Arguing online', 'Travel', 'Rainy days'],
    dislikes: ['Justice', 'Faith', 'Boring people', 'Long conversations'],
    bondAbilities: [
      { level: 0, description: 'You can engage in telepathy with any single exorcist you have skin to skin contact with.' },
      { level: 1, description: 'Gain the Entwine blasphemy.' },
      { level: 2, description: 'At the start of a mission, you can pick an agenda ability from any other party member. For the rest of the mission, you can use this agenda ability as your own.' },
      { level: 3, description: 'Powers that target self can now target any exorcist you are Entwined with.' }
    ],
    highBlasphemy: {
      name: 'Entwine',
      tags: ['1 hunt', 'Instant'],
      description: 'Without spending a psyche burst, choose another willing exorcist. For the duration of the hunt: When one of you gains or loses stress or spends/gains a psyche burst, you may assign the loss or gain to either person (cannot be reduced). You can telepathically communicate over extreme distance and feel strong emotions reflexively. However: When one gains an affliction or hook, both gain it. When one gains sin, both gain that amount. If either suffers sin overflow or instant death, this breaks for the mission. After the mission: Both physical appearances change to match the other (each chooses a feature to share, takes 3 days). Each picks an agenda item from partner as a bolded item for their own agenda.'
    }
  },
  {
    id: 'fortitude',
    name: 'Fortitude',
    title: 'The Disaster',
    image: 'img/virtues/fortitude.png',
    color: '#E30E0E',
    compendiumDesc: '',
    favoriteFood: '',
    expansion: 'gff1',
    highBlasShowAtLevel: 2,
    strictures: 'You cannot pass up the opportunity to get into a fight. Roll 0d on actions where you choose talk over action.',
    strictureIgnoreCost: '2 nonlethal stress',
    likes: ['Fighting', 'Strong Opponents'],
    dislikes: ['Humans', 'Exorcists', 'All other virtues', 'Sins', 'CAIN leadership'],
    bondAbilities: [
      { level: 0, description: 'You never roll 0d for inflicting harm or violence (always roll at least 1d).' },
      { level: 1, description: 'Any amount of harm you inflict is instantly fatal to humans.' },
      { level: 2, description: 'You gain the Strength blasphemy. You can use it safely once a hunt. If you use it a second time, when the scene ends, you rip apart from the inside and suffer instant death.' },
      { level: 3, description: 'You can safely use Strength a second time.' }
    ],
    highBlasphemy: {
      name: 'Strength',
      tags: ['1 Scene', 'Charm'],
      description: 'Spend all your remaining psyche bursts (min 1). For the remainder of the scene, your mundane physical abilities are now equal to CAT and fighting sins with mundane forces is no longer hard by default. You can push any physical action to CAT+2 instead by gaining 2d3 stress (could inflict injury). All weapons you use break after use unless specifically tempered (temper between missions for 1 scrip per weapon). At the end of the scene, you take an injury and become comatose until your group rests.'
    }
  },
  {
    id: 'hope',
    name: 'Hope',
    title: 'The Dreamer',
    image: 'img/virtues/hope.png',
    color: '#9220F5',
    compendiumDesc: '',
    favoriteFood: '',
    expansion: 'gff1',
    strictures: 'You cannot take actions that would be loud or attract attention. You roll 0d for set up actions.',
    strictureIgnoreCost: '2 nonlethal stress',
    likes: ['Video Games', 'Luxurious Baths', 'Holidays'],
    dislikes: ['Loud Noises', 'Nosy people', 'Justice', 'Fortitude'],
    bondAbilities: [
      { level: 0, description: 'Once a mission, you can re-roll any action taken in stealth or to avoid notice, taking the second result as final.' },
      { level: 1, description: 'Gain the Veil blasphemy. You can use it once a mission.' },
      { level: 2, description: 'Mundane humans always forget you were there if you are out of sight for 77 seconds or more. You cannot turn this ability off.' },
      { level: 3, description: 'You can use Veil to erase memory for longer periods (see Mass Memory Rupture).' }
    ],
    highBlasphemy: {
      name: 'Veil',
      tags: ['Instant', 'Long'],
      description: 'Spend all your remaining psyche bursts (min 1) to instantly erase the memory of all humans or exorcists other than you in an up to CAT sized area [CAT:area] centered on a point in long range you can see. You cannot exclude anyone once the area is set. All affected become completely insensate for exactly 11 seconds. If an ally acts on this opening, they gain +1D. Then, they forget everything they saw and heard for the last 77 seconds (including the insensate period). Their brain will work over the damage as if that time never passed.'
    },
    massMemoryRupture: {
      showAtLevel: 3,
      title: 'Mass Memory Rupture',
      description: 'At bond rank III, you can push Veil for longer periods. Costs are cumulative.',
      tiers: [
        { duration: 'Up to 10 minutes', cost: '1d3+1 stress' },
        { duration: 'Up to 1 hour', cost: '...and also gain 1d3+1 sin' },
        { duration: 'Up to 10 hours', cost: '...and also permanently lose an important memory (taste, name of parents, treasured memory)' },
        { duration: 'Up to 1 day', cost: '...and also lower sin overflow cap by 2' },
        { duration: 'Up to 10 days', cost: '...and you forget your own name. Cannot use agenda abilities or gain xp this mission. Must change agendas before next mission.' },
        { duration: 'Full reset', cost: 'CAIN forgets you exist. You forget you exist. Your allies forget you exist. You become a hollow husk. Make a new character.' }
      ]
    }
  },
  {
    id: 'prudence',
    name: 'Prudence',
    title: 'The Negotiator',
    image: 'img/virtues/prudence.png',
    color: '#0786F7',
    compendiumDesc: '',
    favoriteFood: '',
    expansion: 'gff1',
    strictures: 'You must honor all deals and promises. Roll 0d when choosing violence over negotiation.',
    strictureIgnoreCost: '2 nonlethal stress',
    likes: ['Neat Whiskey', 'Romance Novels', 'Trains', 'Long walks'],
    dislikes: ['Charity', 'Justice', 'Explaining things to slow people'],
    bondAbilities: [
      { level: 0, description: 'When you shake hands with a willing human on a deal or promise, if someone breaks it, they suffer instant death. This applies to you, and both parties are aware of the effects.' },
      { level: 1, description: 'Gain the Shake blasphemy. You can use it once a hunt.' },
      { level: 2, description: 'Your rank 0 ability now applies to exorcists and sins.' },
      { level: 3, description: 'You can use Shake once again during a hunt, but if you do, the GM picks the game.' }
    ],
    highBlasphemy: {
      name: 'Shake',
      tags: ['1 scene', 'Short'],
      description: 'Spend all your remaining psyche bursts (min 1) to instantly enforce a game on yourself and all others in range determined by CAT [CAT:distance]. Breaking the rules causes pain, hemorrhaging, and death. For you/allies: actions become harder when avoiding breaking the rule; intentionally breaking = 2d3 stress (cannot be reduced). For targets: intentionally breaking = 1d3 slashes on execution talisman (humans die instantly). You may set up an ally for free, three times, without rolling (does not count as action in conflict). Cannot end early.',
      games: ['The Floor is Lava (Don\'t touch the ground)', 'King of the Hill (Must stay inside a small area)', 'Reverse Tag (Don\'t touch a sin, human, or exorcist)', 'Look No Hands (Don\'t use your hands)', 'No Talking Contest (Don\'t speak or make loud noises)', 'Marco Polo (Don\'t open eyes. Targets must say Polo when you say Marco)', 'Red Light Green Light (Stop moving on red light)']
    }
  }
];

// ════════════════════════════════════════════════════════════════════
// CHARACTER MODEL
// ════════════════════════════════════════════════════════════════════

function createBlankCharacter() {
  return {
    id: generateId(),
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    name: '', exorcistId: '', look: '',
    sinSeedLocation: 'brain',
    questions: { manifestation: '', hidden: '', hand: '', mother: '' },
    skills: { force: 1, conditioning: 1, coordination: 1, covert: 1, interfacing: 1, surveillance: 1, investigation: 1, authority: 1, negotiation: 1, connection: 1 },
    category: 1, missionsSurvived: 0, experience: 0, advances: 0, scrip: 0, skillImprovements: 0,
    agenda: { id: '', abilities: [] },
    blasphemies: [],
    stress: 0, maxStress: 6, injuries: 0, psycheBursts: 3, maxPsycheBursts: 3,
    pathos: 0, sin: 0, sinOverflowCap: 10, sinMarks: [],
    hooks: [], afflictions: [],
    kitPoints: 5, maxKitPoints: 5, kitItems: [],
    weapons: { firearm: { name: 'Service Firearm', category: 0 }, melee: { name: 'Service Melee', category: 0 } },
    notes: '', customContent: []
  };
}

function validateSkillAllocation(skills) {
  var values = Object.values(skills);
  var zeros = values.filter(function(v) { return v === 0; }).length;
  var ones = values.filter(function(v) { return v === 1; }).length;
  var twos = values.filter(function(v) { return v === 2; }).length;
  var others = values.filter(function(v) { return v < 0 || v > 2; }).length;
  if (others > 0) return { valid: false, message: 'Skills must be between 0 and 2 at creation.' };
  if (zeros !== 3) return { valid: false, message: 'You must have exactly 3 skills at 0 (currently ' + zeros + ').' };
  if (twos !== 2) return { valid: false, message: 'You must have exactly 2 skills at 2 (currently ' + twos + ').' };
  if (ones !== 5) return { valid: false, message: 'You must have exactly 5 skills at 1 (currently ' + ones + ').' };
  return { valid: true, message: 'Skills are valid.' };
}

function getPsycheValue(category) {
  return Math.ceil(category / 2);
}

/** Get effective max kit points (base + bonuses from passives like Pocket) */
function getEffectiveMaxKP(char) {
  var base = char.maxKitPoints || 5;
  // Gate Pocket: +1 KP if character has Gate and Pocket passive is active (no replacing quirk)
  var hasGate = (char.blasphemies || []).some(function(b) { return b.id === 'gate'; });
  if (hasGate) {
    var hasReplacingQuirk = char.quirks && char.quirks.gate && char.quirks.gate.some(function(qId) {
      var q = QUIRKS.gate && QUIRKS.gate.options.find(function(o) { return o.id === qId; });
      return q && q.type === 'replace';
    });
    if (!hasReplacingQuirk) base += 1;
  }
  return base;
}

/** Get effective max stress (base + bonuses from abilities) */
function getEffectiveMaxStress(char) {
  var base = char.maxStress || 6;
  var abilities = getCharacterAbilities(char);
  // Will to Live (Survivor): +1 max stress
  if (abilities.indexOf('survivor_will_to_live') !== -1) base += 1;
  // Fragile (Cradle): +1 max stress
  if (abilities.indexOf('cradle_fragile') !== -1) base += 1;
  return base;
}

/** Get list of active ability IDs for a character */
function getCharacterAbilities(char) {
  var abilities = [];
  if (char.agenda && char.agenda.abilities) {
    abilities = abilities.concat(char.agenda.abilities);
  }
  return abilities;
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

// ════════════════════════════════════════════════════════════════════
// STORAGE
// ════════════════════════════════════════════════════════════════════

var STORAGE_KEY = 'cain_companion_characters';

function getAllCharacters() {
  try {
    var data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) { return []; }
}

function getCharacter(id) {
  return getAllCharacters().find(function(c) { return c.id === id; }) || null;
}

function saveCharacter(character) {
  var characters = getAllCharacters();
  var index = characters.findIndex(function(c) { return c.id === character.id; });
  character.updatedAt = new Date().toISOString();
  if (index >= 0) { characters[index] = character; } else { characters.push(character); }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
}

function deleteCharacter(id) {
  var characters = getAllCharacters().filter(function(c) { return c.id !== id; });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
}

function exportCharacter(character) {
  var blob = new Blob([JSON.stringify(character, null, 2)], { type: 'application/json' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url; a.download = (character.name || 'exorcist') + '_cain.json';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function exportAllCharacters() {
  var characters = getAllCharacters();
  var blob = new Blob([JSON.stringify(characters, null, 2)], { type: 'application/json' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url; a.download = 'cain_all_characters.json';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importCharacter() {
  return new Promise(function(resolve, reject) {
    var input = document.createElement('input');
    input.type = 'file'; input.accept = '.json';
    input.addEventListener('change', function(e) {
      var file = e.target.files[0];
      if (!file) { reject(new Error('No file selected')); return; }
      var reader = new FileReader();
      reader.onload = function(event) {
        try {
          var data = JSON.parse(event.target.result);
          if (Array.isArray(data)) {
            data.forEach(function(char) { if (char.id && char.name !== undefined) saveCharacter(char); });
            resolve(data);
          } else if (data.id && data.name !== undefined) {
            saveCharacter(data); resolve(data);
          } else { reject(new Error('Invalid character file format')); }
        } catch (err) { reject(new Error('Failed to parse JSON file')); }
      };
      reader.onerror = function() { reject(new Error('Failed to read file')); };
      reader.readAsText(file);
    });
    input.click();
  });
}

// ════════════════════════════════════════════════════════════════════
// ROUTER
// ════════════════════════════════════════════════════════════════════

var routes = {};

function route(path, handler) { routes[path] = handler; }

function navigate(path) { window.location.hash = path; }

function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

function handleRoute() {
  var hash = window.location.hash.slice(1) || 'home';
  var parts = hash.split('/');
  var path = parts[0];
  var params = parts.slice(1);
  if (routes[path]) { routes[path].apply(null, params); }
  else if (routes['home']) { routes['home'](); }
}

// ════════════════════════════════════════════════════════════════════
// PAGE: HOME
// ════════════════════════════════════════════════════════════════════

function renderHome() {
  var app = document.getElementById('app');
  var characters = getAllCharacters();

  app.innerHTML =
    '<div class="page home-page">' +
      '<header class="page-header">' +
        '<h1 class="title">' + t('app_title') + ' <span class="subtitle">' + t('app_subtitle') + '</span></h1>' +
        '<p class="tagline">' + t('app_tagline') + '</p>' +
      '</header>' +
      '<div class="actions-bar">' +
        '<button class="btn btn-primary" id="btn-create">' + t('nav_newExorcist') + '</button>' +
        '<button class="btn btn-secondary" id="btn-compendium">' + (currentLang === 'pt' ? 'Compêndio' : 'Compendium') + '</button>' +
        '<button class="btn btn-secondary" id="btn-import">' + t('nav_import') + '</button>' +
        (characters.length > 0 ? '<button class="btn btn-secondary" id="btn-export-all">' + t('nav_exportAll') + '</button>' : '') +
      '</div>' +
      (characters.length === 0 ?
        '<div class="empty-state"><p>' + t('home_empty') + '</p><p class="muted">' + t('home_emptySub') + '</p></div>' :
        '<div class="character-list">' + characters.map(renderCharacterCard).join('') + '</div>'
      ) +
    '</div>';

  renderLangToggle();
  document.getElementById('btn-create').addEventListener('click', function() { navigate('create'); });
  document.getElementById('btn-compendium').addEventListener('click', function() { navigate('compendium'); });
  var btnImport = document.getElementById('btn-import');
  if (btnImport) btnImport.addEventListener('click', function() {
    importCharacter().then(function() { renderHome(); }).catch(function(e) { alert(e.message); });
  });
  var btnExport = document.getElementById('btn-export-all');
  if (btnExport) btnExport.addEventListener('click', exportAllCharacters);

  app.querySelectorAll('.char-card').forEach(function(card) {
    var id = card.dataset.id;
    card.querySelector('.btn-view').addEventListener('click', function(e) { e.stopPropagation(); navigate('view/' + id); });
    card.querySelector('.btn-edit').addEventListener('click', function(e) { e.stopPropagation(); navigate('edit/' + id); });
    card.querySelector('.btn-export').addEventListener('click', function(e) {
      e.stopPropagation();
      var c = getCharacter(id); if (c) exportCharacter(c);
    });
    card.querySelector('.btn-delete').addEventListener('click', function(e) {
      e.stopPropagation();
      var c = getCharacter(id);
      if (confirm(t('home_deleteConfirm').replace('{name}', c ? c.name : ''))) { deleteCharacter(id); renderHome(); }
    });
    card.addEventListener('click', function() { navigate('view/' + id); });
  });
}

function renderCharacterCard(char) {
  var agendaName = char.agenda && char.agenda.id ? tAgenda(char.agenda.id) : '—';
  var blasphemyNames = char.blasphemies && char.blasphemies.length > 0 ? char.blasphemies.map(function(b) { return tBlas(b.id); }).join(', ') : 'None';
  var access = canAccessCharacter(char);
  var blockedHtml = !access.ok ? '<p class="char-card-blocked">\u26A0 ' + t('exp_blocked_title') + ': ' + access.missing.map(getExpansionName).join(', ') + '</p>' : '';
  return '<div class="char-card ' + (!access.ok ? 'blocked' : '') + '" data-id="' + char.id + '">' +
    '<div class="char-card-header"><h3 class="char-name">' + (char.name || 'Unnamed Exorcist') + '</h3><span class="char-cat">CAT ' + (char.category || 1) + '</span></div>' +
    '<div class="char-card-body">' +
      '<p><span class="label">' + t('home_agenda') + ':</span> ' + agendaName + '</p>' +
      '<p><span class="label">' + t('home_blasphemy') + ':</span> ' + blasphemyNames + '</p>' +
      '<p><span class="label">' + t('home_missions') + ':</span> ' + (char.missionsSurvived || 0) + '</p>' +
      blockedHtml +
    '</div>' +
    '<div class="char-card-actions">' +
      '<button class="btn btn-small btn-view">' + t('nav_view') + '</button>' +
      '<button class="btn btn-small btn-edit">' + t('nav_edit') + '</button>' +
      '<button class="btn btn-small btn-export">' + t('nav_export') + '</button>' +
      '<button class="btn btn-small btn-danger btn-delete">' + t('nav_delete') + '</button>' +
    '</div>' +
  '</div>';
}

// ════════════════════════════════════════════════════════════════════
// PAGE: CREATE
// ════════════════════════════════════════════════════════════════════

var createChar = null;
var createStep = 0;
var CREATE_STEPS = ['details', 'skills', 'agenda', 'blasphemy', 'review'];
var CREATE_STATE_KEY = 'cain_create_state';

/** Save creation state to sessionStorage */
function saveCreateState() {
  if (createChar) {
    sessionStorage.setItem(CREATE_STATE_KEY, JSON.stringify({ step: createStep, char: createChar }));
  }
}

/** Load creation state from sessionStorage */
function loadCreateState() {
  try {
    var data = sessionStorage.getItem(CREATE_STATE_KEY);
    if (data) {
      var state = JSON.parse(data);
      createChar = state.char;
      createStep = state.step || 0;
      return true;
    }
  } catch (e) {}
  return false;
}

/** Clear creation state from sessionStorage */
function clearCreateState() {
  sessionStorage.removeItem(CREATE_STATE_KEY);
}

/** Collect form data from the current create step (so it's not lost on re-render) */
function collectCreateStepData() {
  if (!createChar) return;
  if (CREATE_STEPS[createStep] === 'details') {
    var nameEl = document.getElementById('name');
    if (nameEl) {
      createChar.name = nameEl.value.trim();
      createChar.exorcistId = (document.getElementById('exorcist-id') || {}).value || '';
      createChar.look = (document.getElementById('look') || {}).value || '';
      createChar.sinSeedLocation = ((document.querySelector('input[name="sinseed"]:checked') || {}).value) || 'brain';
      createChar.questions.manifestation = (document.getElementById('q-manifest') || {}).value || '';
      createChar.questions.hidden = (document.getElementById('q-hidden') || {}).value || '';
      createChar.questions.hand = (document.getElementById('q-hand') || {}).value || '';
      createChar.questions.mother = (document.getElementById('q-mother') || {}).value || '';
    }
  }
  // Skills, agenda, blasphemy steps already update createChar on click, so no need to collect
}

function renderCreate() {
  if (!loadCreateState()) {
    createChar = createBlankCharacter();
    createStep = 0;
  }
  renderCreateStep();
}

function renderCreateStep() {
  var app = document.getElementById('app');
  app.innerHTML =
    '<div class="page create-page">' +
      '<header class="page-header"><button class="btn btn-back" id="btn-back">' + t('nav_back') + '</button><h2>' + t('create_title') + '</h2></header>' +
      '<div class="step-indicator">' +
        CREATE_STEPS.map(function(s, i) {
          return '<span class="step ' + (i === createStep ? 'active' : '') + ' ' + (i < createStep ? 'done' : '') + '">' + t('step_' + s) + '</span>';
        }).join('<span class="step-divider">\u203A</span>') +
      '</div>' +
      '<div class="step-content" id="step-content"></div>' +
    '</div>';

  renderLangToggle();
  document.getElementById('btn-back').addEventListener('click', function() {
    if (createStep > 0) { createStep--; saveCreateState(); renderCreateStep(); }
    else { if (confirm(t('create_abandon'))) { clearCreateState(); navigate('home'); } }
  });

  var content = document.getElementById('step-content');
  switch (CREATE_STEPS[createStep]) {
    case 'details': renderDetailsStep(content); break;
    case 'skills': renderSkillsStep(content); break;
    case 'agenda': renderAgendaStep(content); break;
    case 'blasphemy': renderBlasphemyStep(content); break;
    case 'review': renderReviewStep(content); break;
  }
}

function renderDetailsStep(container) {
  container.innerHTML =
    '<div class="form-section"><h3>' + t('identity') + '</h3>' +
      '<div class="form-group"><label for="name">' + t('name') + '</label><input type="text" id="name" value="' + escHtml(createChar.name) + '" placeholder="' + t('namePh') + '"></div>' +
      '<div class="form-group"><label for="exorcist-id">' + t('exorcistId') + '</label><input type="text" id="exorcist-id" value="' + escHtml(createChar.exorcistId) + '" placeholder="' + t('exorcistIdPh') + '"></div>' +
      '<div class="form-group"><label for="look">' + t('look') + '</label><textarea id="look" rows="2" placeholder="' + t('lookPh') + '">' + escHtml(createChar.look) + '</textarea></div>' +
      '<div class="form-group"><label>' + t('sinSeed') + '</label><div class="radio-group">' +
        '<label class="radio-label"><input type="radio" name="sinseed" value="brain" ' + (createChar.sinSeedLocation === 'brain' ? 'checked' : '') + '> ' + t('brain') + '</label>' +
        '<label class="radio-label"><input type="radio" name="sinseed" value="heart" ' + (createChar.sinSeedLocation === 'heart' ? 'checked' : '') + '> ' + t('heart') + '</label>' +
      '</div></div>' +
    '</div>' +
    '<div class="form-section"><h3>' + t('questions') + ' <span class="muted">' + t('questionsHint') + '</span></h3>' +
      '<div class="form-group"><label>' + t('qManifest') + '</label><textarea id="q-manifest" rows="2">' + escHtml(createChar.questions.manifestation) + '</textarea></div>' +
      '<div class="form-group"><label>' + t('qHidden') + '</label><textarea id="q-hidden" rows="2">' + escHtml(createChar.questions.hidden) + '</textarea></div>' +
      '<div class="form-group"><label>' + t('qHand') + '</label><textarea id="q-hand" rows="2">' + escHtml(createChar.questions.hand) + '</textarea></div>' +
      '<div class="form-group"><label>' + t('qMother') + '</label><textarea id="q-mother" rows="2">' + escHtml(createChar.questions.mother) + '</textarea></div>' +
    '</div>' +
    '<button class="btn btn-primary btn-next" id="btn-next">' + t('nextSkills') + '</button>';

  document.getElementById('btn-next').addEventListener('click', function() {
    createChar.name = document.getElementById('name').value.trim();
    createChar.exorcistId = document.getElementById('exorcist-id').value.trim();
    createChar.look = document.getElementById('look').value.trim();
    createChar.sinSeedLocation = (document.querySelector('input[name="sinseed"]:checked') || {}).value || 'brain';
    createChar.questions.manifestation = document.getElementById('q-manifest').value.trim();
    createChar.questions.hidden = document.getElementById('q-hidden').value.trim();
    createChar.questions.hand = document.getElementById('q-hand').value.trim();
    createChar.questions.mother = document.getElementById('q-mother').value.trim();
    createStep++; saveCreateState(); renderCreateStep();
  });
}

function renderSkillsStep(container) {
  container.innerHTML =
    '<div class="form-section"><h3>' + t('skillAlloc') + '</h3>' +
      '<p class="help-text">' + t('skillHelp') + '</p>' +
      '<div class="skill-grid" id="skill-grid">' +
        SKILLS.map(function(skill) {
          return '<div class="skill-row">' +
            '<label class="skill-name" title="' + escHtml(tSkillDesc(skill.id)) + '">' + tSkill(skill.id) + '</label>' +
            '<div class="skill-controls">' +
              '<button class="btn btn-tiny btn-dec" data-skill="' + skill.id + '">\u2212</button>' +
              '<span class="skill-value" id="val-' + skill.id + '">' + createChar.skills[skill.id] + '</span>' +
              '<button class="btn btn-tiny btn-inc" data-skill="' + skill.id + '">+</button>' +
            '</div>' +
            '<span class="skill-desc muted">' + tSkillDesc(skill.id) + '</span>' +
          '</div>';
        }).join('') +
      '</div>' +
      '<p class="validation-msg" id="skill-validation"></p>' +
    '</div>' +
    '<button class="btn btn-primary btn-next" id="btn-next">' + t('nextAgenda') + '</button>';

  container.querySelectorAll('.btn-inc').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var sid = btn.dataset.skill;
      if (createChar.skills[sid] < 2) { createChar.skills[sid]++; updateSkillUI(); saveCreateState(); }
    });
  });
  container.querySelectorAll('.btn-dec').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var sid = btn.dataset.skill;
      if (createChar.skills[sid] > 0) { createChar.skills[sid]--; updateSkillUI(); saveCreateState(); }
    });
  });
  document.getElementById('btn-next').addEventListener('click', function() {
    var result = validateSkillAllocation(createChar.skills);
    if (!result.valid) {
      var msg = document.getElementById('skill-validation');
      msg.textContent = result.message; msg.className = 'validation-msg error'; return;
    }
    createStep++; saveCreateState(); renderCreateStep();
  });
  updateSkillUI();
}

function updateSkillUI() {
  SKILLS.forEach(function(s) {
    var el = document.getElementById('val-' + s.id);
    if (el) el.textContent = createChar.skills[s.id];
  });
  var msg = document.getElementById('skill-validation');
  if (msg) {
    var r = validateSkillAllocation(createChar.skills);
    msg.textContent = r.valid ? t('validAlloc') : r.message;
    msg.className = 'validation-msg ' + (r.valid ? 'success' : 'warning');
  }
}

function renderAgendaStep(container) {
  container.innerHTML =
    '<div class="form-section"><h3>' + t('chooseAgenda') + '</h3><p class="help-text">' + t('agendaHelp') + '</p>' +
      '<div class="agenda-list" id="agenda-list">' +
        AGENDAS.map(function(a) {
          var items = tAgendaItems(a.id, a);
          return '<div class="agenda-card ' + (createChar.agenda.id === a.id ? 'selected' : '') + '" data-id="' + a.id + '">' +
            (a.image ? '<img class="agenda-img" src="' + a.image + '" alt="' + a.name + '">' : '') +
            '<h4>' + tAgenda(a.id) + '</h4>' +
            '<div class="agenda-items"><p class="item-normal">\u25BA ' + items.items[0] + '</p><p class="item-bolded">\u25BA <strong>' + items.bolded[0] + '</strong></p></div>' +
            (a.restriction ? '<p class="agenda-restriction muted">' + tAgendaRestriction(a.id, a.restriction) + '</p>' : '') +
          '</div>';
        }).join('') +
      '</div>' +
    '</div>' +
    '<div class="form-section" id="ability-section" style="display:' + (createChar.agenda.id ? 'block' : 'none') + '"><h3>' + t('chooseAbility') + '</h3><div id="ability-list"></div></div>' +
    '<button class="btn btn-primary btn-next" id="btn-next" ' + (!createChar.agenda.id ? 'disabled' : '') + '>' + t('nextBlasphemy') + '</button>';

  container.querySelectorAll('.agenda-card').forEach(function(card) {
    card.addEventListener('click', function() {
      createChar.agenda.id = card.dataset.id;
      createChar.agenda.abilities = [];
      container.querySelectorAll('.agenda-card').forEach(function(c) { c.classList.remove('selected'); });
      card.classList.add('selected');
      renderAgendaAbilities(createChar.agenda.id);
      document.getElementById('ability-section').style.display = 'block';
      saveCreateState();
    });
  });

  document.getElementById('btn-next').addEventListener('click', function() {
    if (!createChar.agenda.id) { alert(t('selectAgenda')); return; }
    if (createChar.agenda.abilities.length === 0) { alert(t('selectAbility')); return; }
    createStep++; saveCreateState(); renderCreateStep();
  });

  if (createChar.agenda.id) renderAgendaAbilities(createChar.agenda.id);
}

function renderAgendaAbilities(agendaId) {
  var agenda = AGENDAS.find(function(a) { return a.id === agendaId; });
  var el = document.getElementById('ability-list');
  if (!agenda || !el) return;
  el.innerHTML = agenda.abilities.map(function(ab) {
    return '<div class="ability-card ' + (createChar.agenda.abilities.indexOf(ab.id) >= 0 ? 'selected' : '') + '" data-id="' + ab.id + '">' +
      '<h5>' + ab.name + '</h5><p>' + tAbilDesc(ab.id, ab.description) + '</p></div>';
  }).join('');
  el.querySelectorAll('.ability-card').forEach(function(card) {
    card.addEventListener('click', function() {
      createChar.agenda.abilities = [card.dataset.id];
      el.querySelectorAll('.ability-card').forEach(function(c) { c.classList.remove('selected'); });
      card.classList.add('selected');
      document.getElementById('btn-next').removeAttribute('disabled');
      saveCreateState();
    });
  });
}

function renderBlasphemyStep(container) {
  var selBlas = createChar.blasphemies[0] ? createChar.blasphemies[0].id : '';
  var selPowers = createChar.blasphemies[0] ? createChar.blasphemies[0].powers : [];

  container.innerHTML =
    '<div class="form-section"><h3>' + t('chooseBlasphemy') + '</h3><p class="help-text">' + t('blasphemyHelp') + '</p>' +
      '<div class="blasphemy-list" id="blasphemy-list">' +
        BLASPHEMIES.map(function(b) {
          return '<div class="blasphemy-card ' + (selBlas === b.id ? 'selected' : '') + '" data-id="' + b.id + '">' +
            '<h4>' + tBlas(b.id) + '</h4><p class="muted">' + tBlasDesc(b.id, b.description) + '</p>' +
            renderPassivesCard(b) + '</div>';
        }).join('') +
      '</div>' +
    '</div>' +
    '<div class="form-section" id="powers-section" style="display:' + (selBlas ? 'block' : 'none') + '"><h3>' + t('choosePowers') + '</h3><div id="powers-list"></div><p class="validation-msg" id="powers-validation"></p></div>' +
    '<button class="btn btn-primary btn-next" id="btn-next" ' + (selPowers.length !== 2 ? 'disabled' : '') + '>' + t('nextReview') + '</button>';

  container.querySelectorAll('.blasphemy-card').forEach(function(card) {
    card.addEventListener('click', function() {
      createChar.blasphemies = [{ id: card.dataset.id, powers: [] }];
      container.querySelectorAll('.blasphemy-card').forEach(function(c) { c.classList.remove('selected'); });
      card.classList.add('selected');
      renderPowerChoices(card.dataset.id);
      document.getElementById('powers-section').style.display = 'block';
      document.getElementById('btn-next').setAttribute('disabled', '');
      saveCreateState();
    });
  });

  document.getElementById('btn-next').addEventListener('click', function() {
    if (!createChar.blasphemies[0] || createChar.blasphemies[0].powers.length !== 2) { alert(t('selectPowers')); return; }
    createStep++; saveCreateState(); renderCreateStep();
  });

  if (selBlas) renderPowerChoices(selBlas);
}

function renderPowerChoices(blasId) {
  var blas = BLASPHEMIES.find(function(b) { return b.id === blasId; });
  var el = document.getElementById('powers-list');
  if (!blas || !el) return;
  var powers = createChar.blasphemies[0] ? createChar.blasphemies[0].powers : [];

  el.innerHTML = blas.powers.map(function(p) {
    return '<div class="power-card ' + (powers.indexOf(p.id) >= 0 ? 'selected' : '') + '" data-id="' + p.id + '">' +
      '<h5>' + p.name + '</h5><span class="tags">[' + p.tags.join(', ') + ']</span>' + renderBurstCost(p.burst) + '<p>' + tPowerDesc(p.id, p.description) + '</p></div>';
  }).join('');

  el.querySelectorAll('.power-card').forEach(function(card) {
    card.addEventListener('click', function() {
      var pid = card.dataset.id;
      var pws = createChar.blasphemies[0].powers;
      if (pws.indexOf(pid) >= 0) { pws.splice(pws.indexOf(pid), 1); }
      else if (pws.length < 2) { pws.push(pid); }
      else { pws.shift(); pws.push(pid); }
      createChar.blasphemies[0].powers = pws;
      // Update visuals
      el.querySelectorAll('.power-card').forEach(function(c) { c.classList.toggle('selected', pws.indexOf(c.dataset.id) >= 0); });
      var msg = document.getElementById('powers-validation');
      msg.textContent = pws.length + '/2 powers selected';
      msg.className = 'validation-msg ' + (pws.length === 2 ? 'success' : 'warning');
      if (pws.length === 2) document.getElementById('btn-next').removeAttribute('disabled');
      else document.getElementById('btn-next').setAttribute('disabled', '');
      saveCreateState();
    });
  });
}

function renderReviewStep(container) {
  var agenda = AGENDAS.find(function(a) { return a.id === createChar.agenda.id; });
  var blas = BLASPHEMIES.find(function(b) { return b.id === (createChar.blasphemies[0] || {}).id; });
  var selPowers = createChar.blasphemies[0] ? createChar.blasphemies[0].powers : [];
  var agendaAbil = agenda ? agenda.abilities.find(function(a) { return a.id === createChar.agenda.abilities[0]; }) : null;

  container.innerHTML =
    '<div class="form-section review-section"><h3>' + t('reviewTitle') + '</h3>' +
      '<div class="review-block"><h4>' + t('identity') + '</h4>' +
        '<p><strong>' + t('name') + ':</strong> ' + (createChar.name || '<em>Unnamed</em>') + '</p>' +
        '<p><strong>' + t('id') + ':</strong> ' + (createChar.exorcistId || '\u2014') + '</p>' +
        '<p><strong>' + t('sinSeed') + ':</strong> ' + t(createChar.sinSeedLocation) + '</p>' +
        (createChar.look ? '<p><strong>' + t('look') + ':</strong> ' + escHtml(createChar.look) + '</p>' : '') +
      '</div>' +
      '<div class="review-block"><h4>' + t('skills') + '</h4><div class="review-skills">' +
        SKILLS.map(function(s) {
          return '<span class="review-skill ' + (createChar.skills[s.id] === 0 ? 'zero' : '') + ' ' + (createChar.skills[s.id] === 2 ? 'high' : '') + '">' + tSkill(s.id) + ': ' + createChar.skills[s.id] + '</span>';
        }).join('') +
      '</div></div>' +
      '<div class="review-block"><h4>' + t('agenda') + ': ' + (agenda ? tAgenda(agenda.id) : '\u2014') + '</h4>' +
        (agenda ? '<p>\u25BA ' + agenda.agendaItems[0] + ' / \u25BA <strong>' + agenda.boldedItems[0] + '</strong></p>' : '') +
        '<p><strong>' + t('ability') + ':</strong> ' + (agendaAbil ? agendaAbil.name + ' \u2014 ' + tAbilDesc(agendaAbil.id, agendaAbil.description) : '\u2014') + '</p>' +
      '</div>' +
      '<div class="review-block"><h4>' + t('blasphemies') + ': ' + (blas ? tBlas(blas.id) : '\u2014') + '</h4>' +
        (blas ? renderPassivesReview(blas) : '') +
        '<p><strong>' + t('powers') + ':</strong></p><ul>' +
        selPowers.map(function(pid) {
          var pw = blas ? blas.powers.find(function(p) { return p.id === pid; }) : null;
          return pw ? '<li><strong>' + pw.name + '</strong> [' + pw.tags.join(', ') + '] ' + renderBurstCost(pw.burst) + '<br><br>' + tPowerDesc(pw.id, pw.description) + '</li>' : '';
        }).join('') +
        '</ul></div>' +
    '</div>' +
    '<div class="form-actions">' +
      '<button class="btn btn-primary" id="btn-save">' + t('nav_create') + '</button>' +
      '<button class="btn btn-secondary" id="btn-back-review">' + t('backToEdit') + '</button>' +
    '</div>';

  document.getElementById('btn-save').addEventListener('click', function() {
    saveCharacter(createChar);
    clearCreateState();
    navigate('view/' + createChar.id);
  });
  document.getElementById('btn-back-review').addEventListener('click', function() {
    createStep--; renderCreateStep();
  });
}

// ════════════════════════════════════════════════════════════════════
// PAGE: VIEW
// ════════════════════════════════════════════════════════════════════

function renderView(characterId) {
  var app = document.getElementById('app');
  var char = getCharacter(characterId);
  if (!char) {
    app.innerHTML = '<div class="page"><p>' + t('notFound') + '</p><button class="btn btn-primary" id="btn-home">' + t('nav_back') + '</button></div>';
    document.getElementById('btn-home').addEventListener('click', function() { navigate('home'); });
    return;
  }

  // Expansion access check
  var access = canAccessCharacter(char);
  if (!access.ok) {
    app.innerHTML = '<div class="page"><div class="sheet-section expansion-blocked"><h3>' + t('exp_blocked_title') + '</h3><p>' + t('exp_blocked_msg') + '</p><ul>' + access.missing.map(function(id) { return '<li><strong>' + getExpansionName(id) + '</strong></li>'; }).join('') + '</ul><button class="btn btn-primary" id="btn-home">' + t('nav_back') + '</button></div></div>';
    renderLangToggle();
    document.getElementById('btn-home').addEventListener('click', function() { navigate('home'); });
    return;
  }

  var agenda = AGENDAS.find(function(a) { return a.id === (char.agenda || {}).id; });
  var psyche = getPsycheValue(char.category);

  app.innerHTML =
    '<div class="page view-page">' +
      '<header class="page-header"><button class="btn btn-back" id="btn-home">' + t('nav_back') + '</button><div class="header-actions"><button class="btn btn-primary" id="btn-session">' + t('nav_session') + '</button><button class="btn btn-secondary" id="btn-advance">' + t('nav_advance') + '</button><button class="btn btn-secondary" id="btn-swap-agenda">' + t('nav_swap_agenda') + '</button>' + (isExpansionEnabled('gff4') ? '<button class="btn btn-secondary" id="btn-quirks">' + t('nav_quirks') + '</button>' : '') + '<button class="btn btn-secondary" id="btn-sinmarks">' + t('nav_sinmarks') + '</button><button class="btn btn-secondary" id="btn-edit">' + t('nav_edit') + '</button><button class="btn btn-secondary" id="btn-export">' + t('nav_export') + '</button></div></header>' +
      '<div class="sheet">' +
        // Identity
        '<section class="sheet-section"><div class="sheet-row"><h2 class="char-name-large">' + (char.name || 'Unnamed Exorcist') + '</h2><span class="cat-badge">CAT ' + char.category + '</span></div>' +
          '<div class="identity-details"><span><strong>' + t('id') + ':</strong> ' + (char.exorcistId || '\u2014') + '</span><span><strong>' + t('sinSeed') + ':</strong> ' + t(char.sinSeedLocation) + '</span><span><strong>' + t('missions') + ':</strong> ' + char.missionsSurvived + '</span><span><strong>' + t('scrip') + ':</strong> ' + char.scrip + '</span></div>' +
          (char.look ? '<p class="char-look">' + escHtml(char.look) + '</p>' : '') +
        '</section>' +
        // Skills
        '<section class="sheet-section"><h3>' + t('skills') + '</h3><div class="skills-display">' +
          SKILLS.map(function(s) {
            return '<div class="skill-chip ' + (char.skills[s.id] === 0 ? 'zero' : '') + ' ' + (char.skills[s.id] >= 2 ? 'high' : '') + '"><span class="skill-chip-name">' + tSkill(s.id) + '</span><span class="skill-chip-value">' + char.skills[s.id] + '</span></div>';
          }).join('') +
          '<div class="skill-chip special"><span class="skill-chip-name">' + tSkill('psyche') + '</span><span class="skill-chip-value">' + psyche + '</span></div>' +
        '</div></section>' +
        // Combat State
        '<section class="sheet-section"><h3>' + t('combatState') + '</h3><div class="state-grid">' +
          '<div class="state-box"><label>' + t('stress') + '</label><span class="state-value large">' + char.stress + ' / ' + (getEffectiveMaxStress(char) - char.injuries) + '</span></div>' +
          '<div class="state-box"><label>' + t('injuries') + '</label><span class="state-value large">' + char.injuries + '</span></div>' +
          '<div class="state-box"><label>' + t('psycheBursts') + '</label><span class="state-value large">' + char.psycheBursts + ' / ' + char.maxPsycheBursts + '</span></div>' +
          '<div class="state-box"><label>' + t('pathos') + '</label><span class="state-value large">' + char.pathos + ' / 3</span></div>' +
          '<div class="state-box"><label>' + t('sin') + '</label><span class="state-value large ' + (char.sin >= char.sinOverflowCap ? 'danger' : '') + '">' + char.sin + ' / ' + char.sinOverflowCap + '</span></div>' +
          '<div class="state-box"><label>' + t('xp') + '</label><span class="state-value large">' + char.experience + ' / 4</span></div>' +
        '</div></section>' +
        // Agenda
        '<section class="sheet-section"><h3>' + t('agenda') + ': ' + (agenda ? tAgenda(agenda.id) : '\u2014') + '</h3>' +
          (agenda ? (function() { var items = tAgendaItems(agenda.id, agenda); return '<div class="agenda-display"><p>\u25BA ' + items.items[0] + '</p><p>\u25BA <strong>' + items.bolded[0] + '</strong></p></div>' +
            ((char.agenda.extraBoldedItems || []).length > 0 ? '<div class="extra-bolded">' + (char.agenda.extraBoldedItems || []).map(function(item) { return '<p class="item-bolded">\u25BA <strong>' + escHtml(tBoldedItem(item)) + '</strong></p>'; }).join('') + '</div>' : '') +
            '<div class="abilities-display"><h4>' + t('abilities') + '</h4>' +
            (char.agenda.abilities || []).map(function(abilId) {
              var ab = agenda.abilities.find(function(a) { return a.id === abilId; });
              if (ab) return '<div class="ability-display"><strong>' + ab.name + ':</strong> ' + tAbilDesc(ab.id, ab.description) + '</div>';
              // Check other agendas for carried-over abilities
              var found = null;
              AGENDAS.forEach(function(ag) { var f = ag.abilities.find(function(a) { return a.id === abilId; }); if (f) found = f; });
              return found ? '<div class="ability-display"><strong>' + found.name + ':</strong> ' + tAbilDesc(found.id, found.description) + '</div>' : '';
            }).join('') + '</div>'; })() : '<p class="muted">' + t('noAgenda') + '</p>') +
        '</section>' +
        // Blasphemies
        '<section class="sheet-section"><h3>' + t('blasphemies') + '</h3>' +
          '<div class="power-display"><strong>BLAST / RAJADA</strong><span class="tags">[Instant, Short]</span>' + renderBurstCost('required') + '<p>' + t('blastDesc') + '</p></div>' +
          (char.blasphemies || []).map(function(blRef) {
            var bl = BLASPHEMIES.find(function(b) { return b.id === blRef.id; });
            if (!bl) return '';
            return '<div class="blasphemy-display"><h4>' + tBlas(bl.id) + '</h4>' +
              renderPassivesHtml(bl, char) +
              getEffectivePowerIds(blRef, char).map(function(powId) {
                var pw = getEffectivePower(bl, powId, char);
                return pw ? '<div class="power-display"><strong>' + pw.name + '</strong>' + (pw.tags && pw.tags.length ? '<span class="tags">[' + pw.tags.join(', ') + ']</span>' : '') + renderBurstCost(pw.burst) + '<p>' + tPowerDesc(pw.id, pw.description) + '</p></div>' : '';
              }).join('') + '</div>';
          }).join('') +
        '</section>' +
        // Sin Marks
        ((char.sinMarks || []).length > 0 ? '<section class="sheet-section"><h3>' + t('nav_sinmarks') + '</h3>' +
          (char.sinMarks || []).map(function(mark) {
            var loc = SIN_MARKS.find(function(m) { return m.id === mark.locationId; });
            return '<div class="sinmark-card"><strong>' + (loc ? loc.name : 'Unknown') + '</strong>' +
              '<p class="muted sinmark-appearance">' + (loc ? loc.appearance : '') + '</p>' +
              '<ul class="sinmark-abilities">' + (mark.abilities || []).map(function(a) { return '<li>' + a + '</li>'; }).join('') + '</ul></div>';
          }).join('') +
        '</section>' : '') +
        // Weapons
        '<section class="sheet-section"><h3>' + t('kitWeapons') + '</h3>' +
          '<p><strong>' + t('kitPoints') + ':</strong> ' + (char.session ? (getEffectiveMaxKP(char) - (char.session.kitPointsUsed || 0)) + ' / ' + getEffectiveMaxKP(char) : char.kitPoints + ' / ' + getEffectiveMaxKP(char)) + '</p>' +
          '<p><strong>' + t('firearm') + ':</strong> ' + char.weapons.firearm.name + ' (CAT ' + char.weapons.firearm.category + ')</p>' +
          '<p><strong>' + t('melee') + ':</strong> ' + char.weapons.melee.name + ' (CAT ' + char.weapons.melee.category + ')</p>' +
          (char.session && char.session.itemsDeployed && char.session.itemsDeployed.length > 0 ? '<div class="items-deployed-view"><h4>' + t('session_items') + '</h4>' + char.session.itemsDeployed.map(function(item) { return '<div class="kit-item-deployed"><strong>' + escHtml(item.name) + '</strong>' + (item.description ? ' — <span class="muted">' + escHtml(item.description) + '</span>' : '') + '</div>'; }).join('') + '</div>' : '') +
        '</section>' +
        // Notes
        '<section class="sheet-section"><h3>' + t('notes') + '</h3><p class="notes-display">' + (char.notes ? escHtml(char.notes) : '<span class="muted">' + t('noNotes') + '</span>') + '</p></section>' +
      '</div>' +
    '</div>';

  renderLangToggle();
  document.getElementById('btn-home').addEventListener('click', function() { navigate('home'); });
  document.getElementById('btn-session').addEventListener('click', function() { navigate('session/' + characterId); });
  document.getElementById('btn-advance').addEventListener('click', function() { navigate('advance/' + characterId); });
  document.getElementById('btn-swap-agenda').addEventListener('click', function() { navigate('swapagenda/' + characterId); });
  if (document.getElementById('btn-quirks')) {
    document.getElementById('btn-quirks').addEventListener('click', function() { navigate('quirks/' + characterId); });
  }
  document.getElementById('btn-sinmarks').addEventListener('click', function() { navigate('sinmarks/' + characterId); });
  document.getElementById('btn-edit').addEventListener('click', function() { navigate('edit/' + characterId); });
  document.getElementById('btn-export').addEventListener('click', function() { exportCharacter(char); });
}

// ════════════════════════════════════════════════════════════════════
// PAGE: EDIT
// ════════════════════════════════════════════════════════════════════

var editChar = null;

function renderEdit(characterId) {
  var app = document.getElementById('app');
  editChar = getCharacter(characterId);
  if (!editChar) {
    app.innerHTML = '<div class="page"><p>' + t('notFound') + '</p><button class="btn btn-primary" id="btn-home">' + t('nav_back') + '</button></div>';
    document.getElementById('btn-home').addEventListener('click', function() { navigate('home'); });
    return;
  }
  renderEditForm(app);
}

function renderEditForm(app) {
  app.innerHTML =
    '<div class="page edit-page">' +
      '<header class="page-header"><button class="btn btn-back" id="btn-back">' + t('nav_back') + '</button><h2>' + t('nav_edit') + ': ' + (editChar.name || 'Exorcist') + '</h2></header>' +
      '<form id="edit-form" class="edit-form">' +
        '<section class="sheet-section"><h3>' + t('identity') + '</h3>' +
          '<div class="form-row"><div class="form-group"><label>' + t('name') + '</label><input type="text" id="e-name" value="' + escHtml(editChar.name) + '"></div><div class="form-group"><label>' + t('id') + '</label><input type="text" id="e-id" value="' + escHtml(editChar.exorcistId) + '"></div></div>' +
          '<div class="form-group"><label>' + t('look') + '</label><textarea id="e-look" rows="2">' + escHtml(editChar.look) + '</textarea></div>' +
        '</section>' +
        '<section class="sheet-section"><h3>' + t('progression') + '</h3>' +
          '<div class="form-row">' +
            '<div class="form-group"><label>' + t('category') + '</label><input type="number" id="e-cat" min="1" max="5" value="' + editChar.category + '"></div>' +
            '<div class="form-group"><label>' + t('missions') + '</label><input type="number" id="e-missions" min="0" value="' + editChar.missionsSurvived + '"></div>' +
            '<div class="form-group"><label>' + t('scrip') + '</label><input type="number" id="e-scrip" min="0" value="' + editChar.scrip + '"></div>' +
            '<div class="form-group"><label>' + t('xp') + '</label><input type="number" id="e-xp" min="0" max="4" value="' + editChar.experience + '"></div>' +
          '</div>' +
        '</section>' +
        '<section class="sheet-section"><h3>' + t('combatState') + '</h3>' +
          '<div class="form-row">' +
            '<div class="form-group"><label>' + t('stress') + '</label><input type="number" id="e-stress" min="0" max="6" value="' + editChar.stress + '"></div>' +
            '<div class="form-group"><label>' + t('injuries') + '</label><input type="number" id="e-injuries" min="0" max="3" value="' + editChar.injuries + '"></div>' +
            '<div class="form-group"><label>' + t('pBursts') + '</label><input type="number" id="e-pbursts" min="0" value="' + editChar.psycheBursts + '"></div>' +
          '</div><div class="form-row">' +
            '<div class="form-group"><label>' + t('pathos') + '</label><input type="number" id="e-pathos" min="0" max="3" value="' + editChar.pathos + '"></div>' +
            '<div class="form-group"><label>' + t('sin') + '</label><input type="number" id="e-sin" min="0" value="' + editChar.sin + '"></div>' +
            '<div class="form-group"><label>' + t('sinCap') + '</label><input type="number" id="e-sincap" min="1" value="' + editChar.sinOverflowCap + '"></div>' +
          '</div>' +
        '</section>' +
        '<section class="sheet-section"><h3>' + t('skills') + '</h3><div class="skills-edit-grid">' +
          SKILLS.map(function(s) {
            return '<div class="form-group-inline"><label>' + tSkill(s.id) + '</label><input type="number" class="skill-input" data-skill="' + s.id + '" min="0" max="3" value="' + editChar.skills[s.id] + '"></div>';
          }).join('') +
        '</div></section>' +
        '<section class="sheet-section"><h3>' + t('weapons') + '</h3>' +
          '<div class="form-row"><div class="form-group"><label>' + t('firearm') + '</label><input type="text" id="e-fw-name" value="' + escHtml(editChar.weapons.firearm.name) + '"></div><div class="form-group"><label>CAT</label><input type="number" id="e-fw-cat" min="0" max="3" value="' + editChar.weapons.firearm.category + '"></div></div>' +
          '<div class="form-row"><div class="form-group"><label>' + t('melee') + '</label><input type="text" id="e-mw-name" value="' + escHtml(editChar.weapons.melee.name) + '"></div><div class="form-group"><label>CAT</label><input type="number" id="e-mw-cat" min="0" max="3" value="' + editChar.weapons.melee.category + '"></div></div>' +
        '</section>' +
        // ─── Agenda Management ─────────────────────────────────
        '<section class="sheet-section"><h3>' + t('edit_agenda') + '</h3>' +
          '<div class="edit-agenda-current">' +
            (editChar.agenda && editChar.agenda.id ? '<div class="edit-item-row"><span>' + tAgenda(editChar.agenda.id) + '</span><button type="button" class="btn btn-tiny btn-danger edit-agenda-remove">\u2715</button></div>' : '<p class="muted">' + t('edit_no_agenda') + '</p>') +
          '</div>' +
          '<div id="edit-agenda-picker" class="edit-picker" style="display:none">' +
            AGENDAS.filter(function(a) { return !a.expansion || getActiveExpansions().indexOf(a.expansion) !== -1; }).map(function(a) {
              return '<div class="edit-pick-card" data-id="' + a.id + '"><strong>' + tAgenda(a.id) + '</strong></div>';
            }).join('') +
          '</div>' +
          '<button type="button" class="btn btn-secondary btn-sm" id="edit-agenda-change">' + t('edit_change_agenda') + '</button>' +
        '</section>' +
        // ─── Blasphemies Management ─────────────────────────────
        '<section class="sheet-section"><h3>' + t('edit_blasphemies') + '</h3>' +
          '<div class="edit-blas-list">' +
            (editChar.blasphemies || []).map(function(blRef, idx) {
              var bl = BLASPHEMIES.find(function(b) { return b.id === blRef.id; });
              return '<div class="edit-item-row"><span>' + (bl ? tBlas(bl.id) : blRef.id) + '</span>' +
                '<span class="tags">[' + (blRef.powers || []).length + ' ' + t('powers') + ']</span>' +
                '<button type="button" class="btn btn-tiny btn-danger edit-blas-remove" data-idx="' + idx + '">\u2715</button></div>';
            }).join('') +
          '</div>' +
          ((true) ? '<div id="edit-blas-picker" class="edit-picker" style="display:none">' +
            BLASPHEMIES.filter(function(b) { return !b.expansion || getActiveExpansions().indexOf(b.expansion) !== -1; }).filter(function(b) { return !(editChar.blasphemies || []).some(function(eb) { return eb.id === b.id; }); }).map(function(b) {
              return '<div class="edit-pick-card" data-id="' + b.id + '"><strong>' + tBlas(b.id) + '</strong><p class="muted" style="font-size:0.8rem">' + (b.description || '') + '</p></div>';
            }).join('') +
          '</div>' +
          '<button type="button" class="btn btn-secondary btn-sm" id="edit-blas-add">+ ' + t('edit_add_blas') + '</button>' : '') +
        '</section>' +
        // ─── Powers per Blasphemy ─────────────────────────────
        ((editChar.blasphemies || []).length > 0 ? '<section class="sheet-section"><h3>' + t('edit_powers') + '</h3>' +
          (editChar.blasphemies || []).map(function(blRef) {
            var bl = BLASPHEMIES.find(function(b) { return b.id === blRef.id; });
            if (!bl) return '';
            return '<div class="edit-blas-powers"><h4>' + tBlas(bl.id) + '</h4>' +
              '<div class="edit-powers-grid">' +
              bl.powers.map(function(pw) {
                var selected = (blRef.powers || []).indexOf(pw.id) !== -1;
                return '<label class="edit-power-check"><input type="checkbox" class="power-checkbox" data-blas="' + blRef.id + '" data-power="' + pw.id + '"' + (selected ? ' checked' : '') + '> ' + pw.name + '</label>';
              }).join('') +
              '</div></div>';
          }).join('') +
        '</section>' : '') +
        // ─── Sin Marks ─────────────────────────────────────────
        ((editChar.sinMarks || []).length > 0 ? '<section class="sheet-section"><h3>' + t('edit_sinmarks') + '</h3>' +
          (editChar.sinMarks || []).map(function(sm, idx) {
            var loc = SIN_MARKS.find(function(l) { return l.id === sm.location; });
            var ab = loc ? loc.abilities.find(function(a) { return a.id === sm.ability; }) : null;
            return '<div class="edit-item-row"><span>' + (loc ? loc.name : '?') + ' \u2014 ' + (ab ? ab.name : '?') + (sm.evolved ? ' (Evolved)' : '') + '</span><button type="button" class="btn btn-tiny btn-danger edit-sm-remove" data-idx="' + idx + '">\u2715</button></div>';
          }).join('') +
        '</section>' : '') +
        '<section class="sheet-section"><h3>' + t('notes') + '</h3><textarea id="e-notes" rows="4">' + escHtml(editChar.notes || '') + '</textarea></section>' +
        '<div class="form-actions"><button type="submit" class="btn btn-primary">' + t('nav_save') + '</button><button type="button" class="btn btn-secondary" id="btn-cancel">' + t('nav_cancel') + '</button></div>' +
      '</form>' +
    '</div>';

  renderLangToggle();

  document.getElementById('btn-back').addEventListener('click', function() { navigate('view/' + editChar.id); });
  document.getElementById('btn-cancel').addEventListener('click', function() { navigate('view/' + editChar.id); });
  document.getElementById('edit-form').addEventListener('submit', function(e) {
    e.preventDefault();
    editChar.name = document.getElementById('e-name').value.trim();
    editChar.exorcistId = document.getElementById('e-id').value.trim();
    editChar.look = document.getElementById('e-look').value.trim();
    editChar.category = parseInt(document.getElementById('e-cat').value) || 1;
    editChar.missionsSurvived = parseInt(document.getElementById('e-missions').value) || 0;
    editChar.scrip = parseInt(document.getElementById('e-scrip').value) || 0;
    editChar.experience = parseInt(document.getElementById('e-xp').value) || 0;
    editChar.stress = parseInt(document.getElementById('e-stress').value) || 0;
    editChar.injuries = parseInt(document.getElementById('e-injuries').value) || 0;
    editChar.psycheBursts = parseInt(document.getElementById('e-pbursts').value) || 0;
    editChar.pathos = parseInt(document.getElementById('e-pathos').value) || 0;
    editChar.sin = parseInt(document.getElementById('e-sin').value) || 0;
    editChar.sinOverflowCap = parseInt(document.getElementById('e-sincap').value) || 10;
    document.querySelectorAll('.skill-input').forEach(function(inp) { editChar.skills[inp.dataset.skill] = parseInt(inp.value) || 0; });
    editChar.weapons.firearm.name = document.getElementById('e-fw-name').value.trim();
    editChar.weapons.firearm.category = parseInt(document.getElementById('e-fw-cat').value) || 0;
    editChar.weapons.melee.name = document.getElementById('e-mw-name').value.trim();
    editChar.weapons.melee.category = parseInt(document.getElementById('e-mw-cat').value) || 0;
    editChar.notes = document.getElementById('e-notes').value.trim();
    saveCharacter(editChar);
    navigate('view/' + editChar.id);
  });

  // ─── Agenda interactive controls ─────────────────────
  var agendaChangeBtn = document.getElementById('edit-agenda-change');
  if (agendaChangeBtn) {
    agendaChangeBtn.addEventListener('click', function() {
      var picker = document.getElementById('edit-agenda-picker');
      picker.style.display = picker.style.display === 'none' ? 'block' : 'none';
    });
  }
  document.querySelectorAll('#edit-agenda-picker .edit-pick-card').forEach(function(card) {
    card.addEventListener('click', function() {
      editChar.agenda = { id: this.dataset.id, items: [], boldedItems: [] };
      recalcExpansionTags(editChar);
      saveCharacter(editChar);
      renderEditForm(app);
    });
  });
  document.querySelectorAll('.edit-agenda-remove').forEach(function(btn) {
    btn.addEventListener('click', function() {
      editChar.agenda = { id: null, items: [], boldedItems: [] };
      recalcExpansionTags(editChar);
      saveCharacter(editChar);
      renderEditForm(app);
    });
  });

  // ─── Blasphemies interactive controls ─────────────────
  document.querySelectorAll('.edit-blas-remove').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var idx = parseInt(this.dataset.idx);
      editChar.blasphemies.splice(idx, 1);
      recalcExpansionTags(editChar);
      saveCharacter(editChar);
      renderEditForm(app);
    });
  });
  var blasAddBtn = document.getElementById('edit-blas-add');
  if (blasAddBtn) {
    blasAddBtn.addEventListener('click', function() {
      var picker = document.getElementById('edit-blas-picker');
      picker.style.display = picker.style.display === 'none' ? 'block' : 'none';
    });
  }
  document.querySelectorAll('#edit-blas-picker .edit-pick-card').forEach(function(card) {
    card.addEventListener('click', function() {
      if (!editChar.blasphemies) editChar.blasphemies = [];
      editChar.blasphemies.push({ id: this.dataset.id, powers: [] });
      recalcExpansionTags(editChar);
      saveCharacter(editChar);
      renderEditForm(app);
    });
  });

  // ─── Powers checkboxes ─────────────────────────────────
  document.querySelectorAll('.power-checkbox').forEach(function(cb) {
    cb.addEventListener('change', function() {
      var blasId = this.dataset.blas;
      var powId = this.dataset.power;
      var blRef = editChar.blasphemies.find(function(b) { return b.id === blasId; });
      if (!blRef) return;
      if (!blRef.powers) blRef.powers = [];
      if (this.checked) {
        if (blRef.powers.indexOf(powId) === -1) blRef.powers.push(powId);
      } else {
        blRef.powers = blRef.powers.filter(function(p) { return p !== powId; });
      }
      saveCharacter(editChar);
    });
  });

  // ─── Sin Marks removal ─────────────────────────────────
  document.querySelectorAll('.edit-sm-remove').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var idx = parseInt(this.dataset.idx);
      editChar.sinMarks.splice(idx, 1);
      saveCharacter(editChar);
      renderEditForm(app);
    });
  });
}

// ════════════════════════════════════════════════════════════════════
// UTILITIES
// ════════════════════════════════════════════════════════════════════

function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }

function escHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str || ''));
  return div.innerHTML;
}

// ════════════════════════════════════════════════════════════════════
// PAGE: SESSION MODE
// ════════════════════════════════════════════════════════════════════

function renderSession(characterId) {
  var app = document.getElementById('app');
  var char = getCharacter(characterId);
  if (!char) {
    app.innerHTML = '<div class="page"><p>' + t('notFound') + '</p><button class="btn btn-primary" id="btn-home">' + t('nav_back') + '</button></div>';
    document.getElementById('btn-home').addEventListener('click', function() { navigate('home'); });
    return;
  }

  // Initialize session state if not present
  if (!char.session) {
    char.session = {
      stress: 0,
      injuries: 0,
      psycheBursts: 3,
      pathos: 0,
      sin: char.sin || 0,
      xp: char.experience || 0,
      advances: char.advances || 0,
      kitPointsUsed: 0,
      hooks: [],
      afflictions: [],
      itemsDeployed: [],
      notes: ''
    };
    saveCharacter(char);
  }
  // Migration: add fields if session exists but lacks them
  var s = char.session;
  if (s.xp === undefined) s.xp = char.experience || 0;
  if (s.advances === undefined) s.advances = char.advances || 0;
  if (!Array.isArray(s.afflictions) || (s.afflictions.length > 0 && typeof s.afflictions[0] === 'string')) {
    // Migrate old string afflictions to {name, description} format
    s.afflictions = (s.afflictions || []).map(function(a) { return typeof a === 'string' ? { name: a, description: '' } : a; });
  }
  if (!Array.isArray(s.itemsDeployed) || (s.itemsDeployed.length > 0 && typeof s.itemsDeployed[0] === 'string')) {
    s.itemsDeployed = (s.itemsDeployed || []).map(function(item) { return typeof item === 'string' ? { name: item, description: '' } : item; });
  }

  var maxStress = getEffectiveMaxStress(char) - s.injuries;
  var extraBlasphemies = Math.max(0, (char.blasphemies || []).length - 1);
  var xpCap = 4 + extraBlasphemies;
  var psyche = getPsycheValue(char.category);
  var agenda = AGENDAS.find(function(a) { return a.id === (char.agenda || {}).id; });

  app.innerHTML =
    '<div class="page session-page">' +
      '<header class="page-header">' +
        '<button class="btn btn-back" id="btn-back">' + t('nav_back') + '</button>' +
        '<h2>' + (char.name || 'Exorcist') + ' \u2014 ' + t('nav_session') + '</h2>' +
        '<div class="header-actions">' +
          '<button class="btn btn-small" id="btn-sinmarks-session">' + t('nav_sinmarks') + '</button>' +
          '<button class="btn btn-small btn-danger" id="btn-reset-session">' + t('session_reset') + '</button>' +
        '</div>' +
      '</header>' +

      // ─── Execution Talisman (Stress) ────────────────────────────
      '<section class="sheet-section session-stress">' +
        '<h3>' + t('session_execution') + '</h3>' +
        '<div class="session-talisman">' +
          '<div class="talisman-visual" id="stress-track">' + renderSessionTalisman(s.stress, maxStress) + '</div>' +
          '<div class="session-controls">' +
            '<button class="btn btn-small" id="stress-dec">−</button>' +
            '<span class="session-value">' + s.stress + ' / ' + maxStress + '</span>' +
            '<button class="btn btn-small" id="stress-inc">+</button>' +
          '</div>' +
          '<p class="muted session-hint">' + t('session_stress_hint') + '</p>' +
        '</div>' +
      '</section>' +

      // ─── Core Trackers Grid ─────────────────────────────────────
      '<section class="sheet-section">' +
        '<div class="session-grid">' +
          // CAT
          '<div class="session-tracker">' +
            '<label>' + t('category') + '</label>' +
            '<div class="session-controls">' +
              '<button class="btn btn-tiny" id="cat-dec">\u2212</button>' +
              '<span class="session-value large">' + char.category + '</span>' +
              '<button class="btn btn-tiny" id="cat-inc">+</button>' +
            '</div>' +
          '</div>' +
          // Injuries
          '<div class="session-tracker">' +
            '<label>' + t('injuries') + '</label>' +
            '<div class="session-controls">' +
              '<button class="btn btn-tiny" id="inj-dec">\u2212</button>' +
              '<span class="session-value large">' + s.injuries + '</span>' +
              '<button class="btn btn-tiny" id="inj-inc">+</button>' +
            '</div>' +
          '</div>' +
          // Pathos
          '<div class="session-tracker">' +
            '<label>' + t('pathos') + '</label>' +
            '<div class="session-controls">' +
              '<button class="btn btn-tiny" id="pat-dec">\u2212</button>' +
              '<span class="session-value large">' + s.pathos + ' / 3</span>' +
              '<button class="btn btn-tiny" id="pat-inc">+</button>' +
            '</div>' +
          '</div>' +
          // Sin
          '<div class="session-tracker">' +
            '<label>' + t('sin') + '</label>' +
            '<div class="session-controls">' +
              '<button class="btn btn-tiny" id="sin-dec">\u2212</button>' +
              '<span class="session-value large ' + (s.sin >= char.sinOverflowCap ? 'danger' : '') + '">' + s.sin + ' / ' + char.sinOverflowCap + '</span>' +
              '<button class="btn btn-tiny" id="sin-inc">+</button>' +
            '</div>' +
          '</div>' +
          // XP
          // XP
          '<div class="session-tracker">' +
            '<label>' + t('xp') + '</label>' +
            '<div class="session-controls">' +
              '<button class="btn btn-tiny" id="xp-dec">\u2212</button>' +
              '<span class="session-value large">' + s.xp + ' / ' + xpCap + '</span>' +
              '<button class="btn btn-tiny" id="xp-inc">+</button>' +
            '</div>' +
          '</div>' +
          // Advances
          '<div class="session-tracker">' +
            '<label>' + t('session_advances') + '</label>' +
            '<div class="session-controls">' +
              '<button class="btn btn-tiny" id="adv-dec">\u2212</button>' +
              '<span class="session-value large">' + s.advances + '</span>' +
              '<button class="btn btn-tiny" id="adv-inc">+</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>' +

      // ─── Skills ───────────────────────────────────────────────────
      '<section class="sheet-section">' +
        '<h3>' + t('skills') + '</h3>' +
        '<div class="skills-display">' +
          SKILLS.map(function(sk) {
            return '<div class="skill-chip ' + (char.skills[sk.id] === 0 ? 'zero' : '') + ' ' + (char.skills[sk.id] >= 2 ? 'high' : '') + '"><span class="skill-chip-name">' + tSkill(sk.id) + '</span><span class="skill-chip-value">' + char.skills[sk.id] + '</span></div>';
          }).join('') +
          '<div class="skill-chip special"><span class="skill-chip-name">' + tSkill('psyche') + '</span><span class="skill-chip-value">' + psyche + '</span></div>' +
        '</div>' +
      '</section>' +

      // ─── Hooks ──────────────────────────────────────────────────
      '<section class="sheet-section">' +
        '<h3>' + t('session_hooks') + '</h3>' +
        '<div id="session-hooks">' +
          s.hooks.map(function(h, i) {
            return '<div class="session-hook-row" data-idx="' + i + '">' +
              '<span class="hook-name">' + escHtml(h.name) + '</span>' +
              '<div class="session-controls">' +
                '<button class="btn btn-tiny hook-slash-dec">\u2212</button>' +
                '<span>' + renderSessionTalisman(h.slashes, h.maxSlashes || 3) + '</span>' +
                '<button class="btn btn-tiny hook-slash-inc">+</button>' +
              '</div>' +
              '<button class="btn btn-tiny btn-danger hook-remove">\u00D7</button>' +
            '</div>';
          }).join('') +
        '</div>' +
        '<div class="session-add-row">' +
          '<input type="text" id="new-hook-name" placeholder="' + t('session_hook_placeholder') + '" style="flex:2">' +
          '<input type="number" id="new-hook-max" min="1" max="8" value="3" style="width:50px" title="' + t('session_hook_max_title') + '">' +
          '<button class="btn btn-small" id="btn-add-hook">+</button>' +
        '</div>' +
      '</section>' +

      // ─── Afflictions ────────────────────────────────────────────
      '<section class="sheet-section">' +
        '<h3>' + t('session_afflictions') + '</h3>' +
        '<div id="session-afflictions">' +
          s.afflictions.map(function(a, i) {
            return '<div class="session-aff-row" data-idx="' + i + '">' +
              '<div class="session-item-info"><strong>' + escHtml(a.name) + '</strong>' + (a.description ? '<p class="muted">' + escHtml(a.description) + '</p>' : '') + '</div>' +
              '<button class="btn btn-tiny btn-danger aff-remove">\u00D7</button>' +
            '</div>';
          }).join('') +
        '</div>' +
        '<div class="session-add-row">' +
          '<input type="text" id="new-aff-name" placeholder="' + t('session_aff_placeholder') + '" style="flex:1">' +
          '<input type="text" id="new-aff-desc" placeholder="' + t('session_desc_placeholder') + '" style="flex:2">' +
          '<button class="btn btn-small" id="btn-add-aff">+</button>' +
        '</div>' +
      '</section>' +

      // ─── Items Deployed ─────────────────────────────────────────
      '<section class="sheet-section">' +
        '<div class="section-header-row"><h3>' + t('session_items') + '</h3>' +
          '<div class="session-controls">' +
            '<label class="kit-label">' + t('kitPoints') + ':</label>' +
            '<button class="btn btn-tiny" id="kp-dec">\u2212</button>' +
            '<span class="session-value">' + (getEffectiveMaxKP(char) - s.kitPointsUsed) + ' / ' + getEffectiveMaxKP(char) + '</span>' +
            '<button class="btn btn-tiny" id="kp-inc">+</button>' +
          '</div>' +
        '</div>' +
        '<div id="session-items">' +
          s.itemsDeployed.map(function(item, i) {
            return '<div class="session-item-row" data-idx="' + i + '">' +
              '<div class="session-item-info"><strong>' + escHtml(item.name) + '</strong>' + (item.description ? '<p class="muted">' + escHtml(item.description) + '</p>' : '') + '</div>' +
              '<button class="btn btn-tiny btn-danger item-remove">\u00D7</button>' +
            '</div>';
          }).join('') +
        '</div>' +
        '<div class="session-add-row">' +
          '<input type="text" id="new-item-name" placeholder="' + t('session_item_placeholder') + '" style="flex:1">' +
          '<input type="text" id="new-item-desc" placeholder="' + t('session_desc_placeholder') + '" style="flex:2">' +
          '<button class="btn btn-small" id="btn-add-item">+</button>' +
        '</div>' +
      '</section>' +

      // ─── Blasphemies ───────────────────────────────────────────
      '<section class="sheet-section">' +
        '<div class="section-header-row"><h3>' + t('session_powers') + '</h3>' +
          '<div class="session-controls">' +
            '<label class="kit-label">' + t('psycheBursts') + ':</label>' +
            '<button class="btn btn-tiny" id="pb-dec">\u2212</button>' +
            '<span class="session-value">' + s.psycheBursts + ' / ' + char.maxPsycheBursts + '</span>' +
            '<button class="btn btn-tiny" id="pb-inc">+</button>' +
          '</div>' +
        '</div>' +
        '<div class="power-display"><strong>BLAST / RAJADA</strong><span class="tags">[Instant, Short]</span>' + renderBurstCost('required') + '<p>' + t('blastDesc') + '</p></div>' +
        (char.blasphemies || []).map(function(blRef) {
          var bl = BLASPHEMIES.find(function(b) { return b.id === blRef.id; });
          if (!bl) return '';
          return '<div class="blasphemy-display"><h4>' + tBlas(bl.id) + '</h4>' +
            renderPassivesHtmlSession(bl, char.category, char) +
            getEffectivePowerIds(blRef, char).map(function(powId) {
              var pw = getEffectivePower(bl, powId, char);
              if (!pw) return '';
              var usedPowers = char.usedPowers || [];
              var isUsed = usedPowers.indexOf(pw.id) !== -1;
              var usesToggle = pw.uses ? '<button class="power-uses-toggle' + (isUsed ? ' used' : '') + '" data-char="' + char.id + '" data-power="' + pw.id + '">' + (isUsed ? (currentLang === 'pt' ? 'Usado' : 'Used') : (currentLang === 'pt' ? 'Disponível' : 'Available')) + '</button>' : '';
              return '<div class="power-display' + (isUsed ? ' power-used' : '') + '"><strong>' + pw.name + '</strong>' + (pw.tags && pw.tags.length ? '<span class="tags">[' + pw.tags.join(', ') + ']</span>' : '') + renderBurstCost(pw.burst) + usesToggle + '<p>' + tPowerDescSession(pw.id, pw.description, char.category) + '</p></div>';
            }).join('') + '</div>';
        }).join('') +
      '</section>' +

      // ─── Agenda Reference ───────────────────────────────────────
      (agenda ? '<section class="sheet-section">' +
        '<h3>' + t('agenda') + ': ' + tAgenda(agenda.id) + '</h3>' +
        (function() { var items = tAgendaItems(agenda.id, agenda); return '<div class="agenda-display"><p class="item-normal">\u25BA ' + items.items[0] + '</p><p class="item-bolded">\u25BA <strong>' + items.bolded[0] + '</strong></p></div>'; })() +
        // Extra bolded items
        ((char.agenda.extraBoldedItems || []).length > 0 ? '<div class="extra-bolded">' + (char.agenda.extraBoldedItems || []).map(function(item) { return '<p class="item-bolded">\u25BA <strong>' + escHtml(tBoldedItem(item)) + '</strong></p>'; }).join('') + '</div>' : '') +
        // Add new bolded item
        '<div class="session-add-row" style="margin-top:var(--space-sm)">' +
          '<input type="text" id="new-bolded-item" placeholder="' + t('session_add_bolded') + '">' +
          '<button class="btn btn-small" id="btn-add-bolded">+</button>' +
        '</div>' +
        '<div class="abilities-display">' +
          (char.agenda.abilities || []).map(function(abilId) {
            var ab = agenda.abilities.find(function(a) { return a.id === abilId; });
            if (ab) return '<div class="ability-display"><strong>' + ab.name + ':</strong> ' + tAbilDesc(ab.id, ab.description) + '</div>';
            var found = null;
            AGENDAS.forEach(function(ag) { var f = ag.abilities.find(function(a) { return a.id === abilId; }); if (f) found = f; });
            return found ? '<div class="ability-display"><strong>' + found.name + ':</strong> ' + tAbilDesc(found.id, found.description) + '</div>' : '';
          }).join('') +
        '</div>' +
      '</section>' : '') +

      // ─── Sin Marks ─────────────────────────────────────────────────
      ((char.sinMarks || []).length > 0 ? '<section class="sheet-section">' +
        '<h3>' + t('nav_sinmarks') + '</h3>' +
        (char.sinMarks || []).map(function(mark) {
          var loc = SIN_MARKS.find(function(m) { return m.id === mark.locationId; });
          return '<div class="sinmark-card"><strong>' + (loc ? loc.name : 'Unknown') + '</strong>' +
            '<p class="muted sinmark-appearance">' + (loc ? loc.appearance : '') + '</p>' +
            '<ul class="sinmark-abilities">' + (mark.abilities || []).map(function(a) { return '<li>' + a + '</li>'; }).join('') + '</ul></div>';
        }).join('') +
      '</section>' : '') +

      // ─── Virtue Bonds (GFF-1) ──────────────────────────────────
      (isExpansionActive('gff1') ? (function() {
        if (!char.virtueBonds) char.virtueBonds = {};
        var bonds = char.virtueBonds;
        var activeVirtue = bonds.currentVirtue || '';
        var html = '<section class="sheet-section"><h3>' + t('virtue_title') + '</h3>';

        // Show bonded virtues as cards
        var hasBonds = false;
        VIRTUES.forEach(function(v) {
          var level = bonds[v.id] || 0;
          if (level > 0 || v.id === activeVirtue) {
            hasBonds = true;
            html += '<div class="virtue-card">';
            html += '<div class="virtue-card-header">';
            html += '<strong>' + v.name + '</strong> <span class="muted">(' + v.title + ')</span>';
            if (v.id === activeVirtue) html += ' <span class="cat-resolved">' + t('virtue_active') + '</span>';
            html += '<div class="session-controls">';
            html += '<button class="btn btn-tiny virtue-level-dec" data-virtue="' + v.id + '">\u2212</button>';
            html += '<span class="session-value">' + level + '/3</span>';
            html += '<button class="btn btn-tiny virtue-level-inc" data-virtue="' + v.id + '">+</button>';
            html += '</div></div>';
            // Stricture
            var strictureText = (currentLang === 'pt' && PT_CONTENT.virtues && PT_CONTENT.virtues.strictures[v.id]) ? PT_CONTENT.virtues.strictures[v.id] : v.strictures;
            html += '<div class="virtue-stricture"><strong>' + t('virtue_stricture') + ':</strong> ' + strictureText + ' <span class="muted">(' + t('virtue_stricture_ignore') + ')</span></div>';
            // Abilities unlocked
            v.bondAbilities.filter(function(a) { return a.level <= level; }).forEach(function(a) {
              var abilText = (currentLang === 'pt' && PT_CONTENT.virtues && PT_CONTENT.virtues.bondAbilities[v.id]) ? PT_CONTENT.virtues.bondAbilities[v.id][a.level] : a.description;
              html += '<div class="virtue-ability"><span class="virtue-ability-level">' + t('virtue_level') + ' ' + a.level + '</span> ' + abilText + '</div>';
            });
            // High Blasphemy (if level >= showAtLevel, default 1)
            var blasShowLevel = v.highBlasShowAtLevel || 1;
            if (level >= blasShowLevel && v.highBlasphemy) {
              var hbName = (currentLang === 'pt' && PT_CONTENT.virtues && PT_CONTENT.virtues.highBlasphemyNames[v.id]) ? PT_CONTENT.virtues.highBlasphemyNames[v.id] : v.highBlasphemy.name;
              var hbDesc = (currentLang === 'pt' && PT_CONTENT.virtues && PT_CONTENT.virtues.highBlasphemyDescs[v.id]) ? PT_CONTENT.virtues.highBlasphemyDescs[v.id] : v.highBlasphemy.description;
              html += '<div class="virtue-high-blas"><strong>' + t('virtue_high_blas') + ': ' + hbName + '</strong> <span class="tags">[' + v.highBlasphemy.tags.join(', ') + ']</span><p>' + resolveCatTags(hbDesc, char.category) + '</p>';
              // Terms of Law list (Justice)
              if (v.highBlasphemy.termsOfLaw) {
                var terms = (currentLang === 'pt' && PT_CONTENT.virtues && PT_CONTENT.virtues.termsOfLaw) ? PT_CONTENT.virtues.termsOfLaw : v.highBlasphemy.termsOfLaw;
                html += '<div class="virtue-terms"><strong>' + (currentLang === 'pt' ? 'Termos da Lei' : 'Terms of Law') + ':</strong> ' + terms.join(', ') + '</div>';
              }
              // Games list (Prudence)
              if (v.highBlasphemy.games) {
                var games = (currentLang === 'pt' && PT_CONTENT.virtues && PT_CONTENT.virtues.games) ? PT_CONTENT.virtues.games : v.highBlasphemy.games;
                html += '<div class="virtue-games"><strong>' + (currentLang === 'pt' ? 'Jogos' : 'Games') + ':</strong><ul>' + games.map(function(g) { return '<li>' + g + '</li>'; }).join('') + '</ul></div>';
              }
              html += '</div>';
            }
            // High Blasphemy 2 - Immaculate Defiance (Faith, level 3 only)
            if (level >= 3 && v.highBlasphemy2) {
              var hb2Name = (currentLang === 'pt' && PT_CONTENT.virtues && PT_CONTENT.virtues.highBlasphemy2Names[v.id]) ? PT_CONTENT.virtues.highBlasphemy2Names[v.id] : v.highBlasphemy2.name;
              var hb2Desc = (currentLang === 'pt' && PT_CONTENT.virtues && PT_CONTENT.virtues.highBlasphemyDescs[v.id + '2']) ? PT_CONTENT.virtues.highBlasphemyDescs[v.id + '2'] : v.highBlasphemy2.description;
              html += '<div class="virtue-high-blas virtue-high-blas-alt"><strong>' + t('virtue_high_blas') + ': ' + hb2Name + '</strong> <span class="tags">[' + v.highBlasphemy2.tags.join(', ') + ']</span>';
              html += '<p class="virtue-irreversible-warn">\u26A0 ' + t('virtue_irreversible') + '</p>';
              html += '<p>' + resolveCatTags(hb2Desc, char.category) + '</p></div>';
            }
            // Mass Memory Rupture (Hope, level 3 only)
            if (level >= 3 && v.massMemoryRupture) {
              var mmr = (currentLang === 'pt' && PT_CONTENT.virtues && PT_CONTENT.virtues.massMemoryRupture) ? PT_CONTENT.virtues.massMemoryRupture : v.massMemoryRupture;
              html += '<div class="virtue-high-blas"><strong>' + mmr.title + '</strong><p class="muted">' + mmr.description + '</p>';
              html += '<table class="virtue-rupture-table"><tbody>';
              mmr.tiers.forEach(function(tier) {
                html += '<tr><td class="rupture-duration">' + tier.duration + '</td><td class="rupture-cost">' + tier.cost + '</td></tr>';
              });
              html += '</tbody></table></div>';
            }
            html += '</div>';
          }
        });

        if (!hasBonds) {
          html += '<p class="muted">' + t('virtue_none') + '</p>';
        }

        // Select virtue for current mission
        html += '<div class="virtue-select-area">';
        html += '<label>' + t('virtue_select') + '</label>';
        html += '<div class="session-add-row">';
        html += '<select id="virtue-select"><option value="">' + t('virtue_select_none') + '</option>';
        VIRTUES.forEach(function(v) { html += '<option value="' + v.id + '">' + v.name + ' - ' + v.title + '</option>'; });
        html += '</select>';
        html += '<button class="btn btn-small btn-primary" id="btn-confirm-virtue">' + t('virtue_confirm') + '</button>';
        html += '</div>';
        // Show preview of stricture when selecting
        html += '<div id="virtue-preview" class="muted" style="margin-top:var(--space-sm)"></div>';
        html += '</div>';

        html += '</section>';
        return html;
      })() : '') +

      // ─── Session Notes ──────────────────────────────────────────
      '<section class="sheet-section">' +
        '<h3>' + t('session_notes') + '</h3>' +
        '<textarea id="session-notes" rows="6" placeholder="' + t('session_notes_placeholder') + '">' + escHtml(s.notes) + '</textarea>' +
      '</section>' +

    '</div>';

  renderLangToggle();

  // ─── Event Bindings ───────────────────────────────────────────
  document.getElementById('btn-back').addEventListener('click', function() { navigate('view/' + characterId); });

  // Sin Marks button in session
  document.getElementById('btn-sinmarks-session').addEventListener('click', function() { navigate('sinmarks/' + characterId); });

  // Reset session
  document.getElementById('btn-reset-session').addEventListener('click', function() {
    if (confirm(t('session_reset_confirm'))) {
      var keptXp = s.xp;
      var keptAdvances = s.advances;
      var halvedSin = Math.ceil(s.sin / 2);
      char.session = {
        stress: 0,
        injuries: 0,
        psycheBursts: 3,
        pathos: 0,
        sin: halvedSin,
        xp: keptXp,
        advances: keptAdvances,
        kitPointsUsed: 0,
        hooks: [],
        afflictions: [],
        itemsDeployed: [],
        notes: ''
      };
      saveCharacter(char);
      renderSession(characterId);
    }
  });

  // Stress +/-
  document.getElementById('stress-inc').addEventListener('click', function() {
    if (s.stress < maxStress) { s.stress++; saveAndRerender(); }
  });
  document.getElementById('stress-dec').addEventListener('click', function() {
    if (s.stress > 0) { s.stress--; saveAndRerender(); }
  });

  // CAT +/-
  document.getElementById('cat-inc').addEventListener('click', function() {
    if (char.category < 10) { char.category++; saveAndRerender(); }
  });
  document.getElementById('cat-dec').addEventListener('click', function() {
    if (char.category > 1) { char.category--; saveAndRerender(); }
  });

  // Injuries +/-
  document.getElementById('inj-inc').addEventListener('click', function() {
    if (s.injuries < 3) { s.injuries++; s.stress = 0; saveAndRerender(); }
  });
  document.getElementById('inj-dec').addEventListener('click', function() {
    if (s.injuries > 0) { s.injuries--; saveAndRerender(); }
  });

  // Psyche Bursts +/-
  document.getElementById('pb-inc').addEventListener('click', function() {
    s.psycheBursts++; saveAndRerender();
  });
  document.getElementById('pb-dec').addEventListener('click', function() {
    if (s.psycheBursts > 0) { s.psycheBursts--; saveAndRerender(); }
  });

  // Pathos +/-
  document.getElementById('pat-inc').addEventListener('click', function() {
    if (s.pathos < 3) { s.pathos++; saveAndRerender(); }
  });
  document.getElementById('pat-dec').addEventListener('click', function() {
    if (s.pathos > 0) { s.pathos--; saveAndRerender(); }
  });

  // Sin +/-
  document.getElementById('sin-inc').addEventListener('click', function() {
    s.sin++; saveAndRerender();
  });
  document.getElementById('sin-dec').addEventListener('click', function() {
    if (s.sin > 0) { s.sin--; saveAndRerender(); }
  });

  // Kit Points +/- (+ = spend/deploy, - = recover)
  document.getElementById('kp-inc').addEventListener('click', function() {
    if (s.kitPointsUsed > 0) { s.kitPointsUsed--; saveAndRerender(); }
  });
  document.getElementById('kp-dec').addEventListener('click', function() {
    if (s.kitPointsUsed < getEffectiveMaxKP(char)) { s.kitPointsUsed++; saveAndRerender(); }
  });

  // XP +/-
  document.getElementById('xp-inc').addEventListener('click', function() {
    if (s.xp < xpCap) { s.xp++; saveAndRerender(); }
  });
  document.getElementById('xp-dec').addEventListener('click', function() {
    if (s.xp > 0) { s.xp--; saveAndRerender(); }
  });

  // Advances +/-
  document.getElementById('adv-inc').addEventListener('click', function() {
    s.advances++; saveAndRerender();
  });
  document.getElementById('adv-dec').addEventListener('click', function() {
    if (s.advances > 0) { s.advances--; saveAndRerender(); }
  });

  // Hooks
  document.getElementById('btn-add-hook').addEventListener('click', function() {
    var name = document.getElementById('new-hook-name').value.trim();
    var maxSlashes = parseInt(document.getElementById('new-hook-max').value) || 3;
    if (maxSlashes < 1) maxSlashes = 1;
    if (maxSlashes > 8) maxSlashes = 8;
    if (name) { s.hooks.push({ name: name, slashes: 0, maxSlashes: maxSlashes }); saveAndRerender(); }
  });
  app.querySelectorAll('.hook-slash-inc').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var idx = parseInt(btn.closest('.session-hook-row').dataset.idx);
      var maxS = s.hooks[idx].maxSlashes || 3;
      if (s.hooks[idx].slashes < maxS) { s.hooks[idx].slashes++; saveAndRerender(); }
    });
  });
  app.querySelectorAll('.hook-slash-dec').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var idx = parseInt(btn.closest('.session-hook-row').dataset.idx);
      if (s.hooks[idx].slashes > 0) { s.hooks[idx].slashes--; saveAndRerender(); }
    });
  });
  app.querySelectorAll('.hook-remove').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var idx = parseInt(btn.closest('.session-hook-row').dataset.idx);
      s.hooks.splice(idx, 1); saveAndRerender();
    });
  });

  // Afflictions
  document.getElementById('btn-add-aff').addEventListener('click', function() {
    var name = document.getElementById('new-aff-name').value.trim();
    var desc = document.getElementById('new-aff-desc').value.trim();
    if (name) { s.afflictions.push({ name: name, description: desc }); saveAndRerender(); }
  });
  app.querySelectorAll('.aff-remove').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var idx = parseInt(btn.closest('.session-aff-row').dataset.idx);
      s.afflictions.splice(idx, 1); saveAndRerender();
    });
  });

  // Items
  document.getElementById('btn-add-item').addEventListener('click', function() {
    var name = document.getElementById('new-item-name').value.trim();
    var desc = document.getElementById('new-item-desc').value.trim();
    if (name) { s.itemsDeployed.push({ name: name, description: desc }); saveAndRerender(); }
  });
  app.querySelectorAll('.item-remove').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var idx = parseInt(btn.closest('.session-item-row').dataset.idx);
      s.itemsDeployed.splice(idx, 1); saveAndRerender();
    });
  });

  // Add bolded item
  var btnBolded = document.getElementById('btn-add-bolded');
  if (btnBolded) {
    btnBolded.addEventListener('click', function() {
      var input = document.getElementById('new-bolded-item');
      var val = input.value.trim();
      if (val) {
        if (!char.agenda.extraBoldedItems) char.agenda.extraBoldedItems = [];
        char.agenda.extraBoldedItems.push(val);
        saveCharacter(char);
        renderSession(characterId);
      }
    });
  }

  // Virtue bond management (GFF-1)
  var virtueSelect = document.getElementById('virtue-select');
  if (virtueSelect) {
    // Show stricture preview on select change
    virtueSelect.addEventListener('change', function() {
      var preview = document.getElementById('virtue-preview');
      if (!preview) return;
      var v = VIRTUES.find(function(vt) { return vt.id === virtueSelect.value; });
      if (v) {
        preview.innerHTML = '<strong>' + t('virtue_stricture') + ':</strong> ' + v.strictures;
      } else {
        preview.innerHTML = '';
      }
    });
  }
  var btnConfirmVirtue = document.getElementById('btn-confirm-virtue');
  if (btnConfirmVirtue) {
    btnConfirmVirtue.addEventListener('click', function() {
      var sel = document.getElementById('virtue-select');
      if (!sel) return;
      // Selecting None - clear active virtue (and remove if level 0)
      if (!sel.value) {
        if (!char.virtueBonds || !char.virtueBonds.currentVirtue) return;
        var currentId = char.virtueBonds.currentVirtue;
        char.virtueBonds.currentVirtue = '';
        // If level 0, remove from bonds entirely
        if ((char.virtueBonds[currentId] || 0) === 0) {
          delete char.virtueBonds[currentId];
        }
        recalcExpansionTags(char);
        saveCharacter(char);
        renderSession(characterId);
        return;
      }
      var v = VIRTUES.find(function(vt) { return vt.id === sel.value; });
      if (!v) return;
      if (!confirm(t('virtue_confirm_msg').replace('{name}', v.name) + '\n\n' + t('virtue_stricture') + ': ' + v.strictures)) return;
      if (!char.virtueBonds) char.virtueBonds = {};
      char.virtueBonds.currentVirtue = sel.value;
      // Grant level 0 if not already bonded
      if (!char.virtueBonds[sel.value] && char.virtueBonds[sel.value] !== 0) char.virtueBonds[sel.value] = 0;
      tagCharacterExpansion(char, 'gff1');
      saveCharacter(char);
      renderSession(characterId);
    });
  }
  // Level +/- buttons
  app.querySelectorAll('.virtue-level-inc').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var vid = btn.dataset.virtue;
      if (!char.virtueBonds) char.virtueBonds = {};
      var current = char.virtueBonds[vid] || 0;
      if (current < 3) {
        char.virtueBonds[vid] = current + 1;
        saveCharacter(char);
        renderSession(characterId);
      }
    });
  });
  app.querySelectorAll('.virtue-level-dec').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var vid = btn.dataset.virtue;
      if (!char.virtueBonds) char.virtueBonds = {};
      var current = char.virtueBonds[vid] || 0;
      if (current > 0) {
        char.virtueBonds[vid] = current - 1;
        // If goes to 0 and not active, remove from bonds
        if (char.virtueBonds[vid] === 0 && char.virtueBonds.currentVirtue !== vid) {
          delete char.virtueBonds[vid];
        }
        recalcExpansionTags(char);
        saveCharacter(char);
        renderSession(characterId);
      }
    });
  });

  // Notes auto-save on blur
  document.getElementById('session-notes').addEventListener('blur', function() {
    s.notes = this.value;
    char.session = s;
    saveCharacter(char);
  });

  // Power uses toggles
  document.querySelectorAll('.power-uses-toggle').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var powId = this.dataset.power;
      if (!char.usedPowers) char.usedPowers = [];
      var idx = char.usedPowers.indexOf(powId);
      if (idx === -1) { char.usedPowers.push(powId); }
      else { char.usedPowers.splice(idx, 1); }
      saveCharacter(char);
      renderSession(characterId);
    });
  });

  // Quirk notes auto-save
  document.querySelectorAll('.quirk-note-input').forEach(function(textarea) {
    textarea.addEventListener('blur', function() {
      if (!char.quirkNotes) char.quirkNotes = {};
      char.quirkNotes[this.dataset.quirk] = this.value;
      saveCharacter(char);
    });
  });

  // Passive uses toggles
  document.querySelectorAll('.passive-uses .power-uses-toggle').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var passiveId = this.dataset.passive;
      var maxU = parseInt(this.dataset.max) || 1;
      if (!char.usedPassives) char.usedPassives = {};
      var current = char.usedPassives[passiveId] || 0;
      if (current >= maxU) {
        char.usedPassives[passiveId] = 0;
      } else {
        char.usedPassives[passiveId] = current + 1;
      }
      saveCharacter(char);
      renderSession(characterId);
    });
  });

  function saveAndRerender() {
    char.session = s;
    saveCharacter(char);
    renderSession(characterId);
  }
}

function renderSessionTalisman(current, max) {
  var html = '';
  for (var i = 0; i < max; i++) {
    html += '<span class="talisman-slash ' + (i < current ? 'filled' : '') + '">\u2571</span>';
  }
  return html;
}

// ════════════════════════════════════════════════════════════════════
// ════════════════════════════════════════════════════════════════════
// PAGE: QUIRKS (Mutate Blasphemy)
// ════════════════════════════════════════════════════════════════════

function renderQuirks(characterId) {
  var app = document.getElementById('app');
  var char = getCharacter(characterId);
  if (!char) { navigate('home'); return; }

  var charQuirks = char.quirks || {};

  // Build list of character's blasphemies that have quirk options
  var blasWithQuirks = (char.blasphemies || []).filter(function(blRef) {
    return QUIRKS[blRef.id];
  });

  var html = '<div class="page quirks-page">' +
    '<header class="page-header"><button class="btn btn-back" id="btn-back">' + t('nav_back') + '</button><h2>' + t('nav_quirks') + '</h2></header>' +
    '<div class="quirks-content">';

  if (blasWithQuirks.length === 0) {
    html += '<p class="muted">' + t('quirks_none') + '</p>';
  } else {
    blasWithQuirks.forEach(function(blRef) {
      var bl = BLASPHEMIES.find(function(b) { return b.id === blRef.id; });
      var quirkData = QUIRKS[blRef.id];
      var activeQuirks = charQuirks[blRef.id] || [];

      html += '<section class="sheet-section"><h3>' + tBlas(bl.id) + '</h3>';

      // Show current state
      var defaultPassive = bl.passives ? bl.passives[0] : bl.passive;
      if (defaultPassive) {
        var hasReplaceQuirk = activeQuirks.some(function(qId) {
          var q = quirkData.options.find(function(o) { return o.id === qId; });
          return q && q.type === 'replace';
        });
        html += '<p class="muted" style="font-size:0.85rem">' + t('quirks_current') + ': ' + (hasReplaceQuirk ? activeQuirks.filter(function(qId) { var q = quirkData.options.find(function(o) { return o.id === qId; }); return q && q.type === 'replace'; }).map(function(qId) { var q = quirkData.options.find(function(o) { return o.id === qId; }); return q.name; }).join(', ') : t('quirks_default')) + '</p>';
      }

      // Show options
      quirkData.options.forEach(function(quirk) {
        var isActive = activeQuirks.indexOf(quirk.id) !== -1;
        var typeLabel = quirk.type === 'add' || quirk.type === 'add_free' ? '(+)' : '(\u21C4)';

        // Special render for Sword King
        if (quirk.specialRender === 'sword_king') {
          var skStartStep = isActive ? 7 : 0;
          var skPt = currentLang === 'pt';
          var skGlitch = skPt ? 'Você pode também<br>&nbsp;&nbsp;&nbsp;&nbsp;também<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;também' : 'You may also<br>&nbsp;&nbsp;&nbsp;&nbsp;also<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;also';
          html += '<div class="quirk-card sword-king-card' + (isActive ? ' active' : '') + '">' +
            '<div class="sword-king-sequence" data-step="' + skStartStep + '">' +
              '<div class="sk-page sk-page-0"' + (isActive ? ' style="display:none"' : '') + '><span class="sk-glitch">' + skGlitch + '</span><br><br><br><br><br><br><br><em>' + (skPt ? 'Ouvir sua mãe cantar da cozinha.' : 'Listen to your mother singing in the kitchen.') + '</em></div>' +
              '<div class="sk-page sk-page-1" style="display:none"><span class="sk-glitch">' + skGlitch + '</span><br><br><br><br><br><br><br><em>' + (skPt ? 'Sentir o calor da pele de quem você ama.' : "Feel the warmth of a lover's skin.") + '</em></div>' +
              '<div class="sk-page sk-page-2" style="display:none"><span class="sk-glitch">' + skGlitch + '</span><br><br><br><br><br><br><br><em>' + (skPt ? 'Dedilhar o cabelo macio de sua criança.' : "Cradle your child's soft hair.") + '</em></div>' +
              '<div class="sk-page sk-page-3" style="display:none"><em>' + (skPt ? 'Esses não custam nada.<br>Eles produzem nada além de amor.<br>De todos os poderes em terra e céu,<br>esses são os mais poderosos.' : 'These cost nothing.<br>They produce nothing but love.<br>Of all the powers of earth and heaven,<br>they are the mightiest.') + '</em></div>' +
              '<div class="sk-page sk-page-4" style="display:none"><p class="sk-interview">' + (skPt ? 'Atlas: Fomos desatentos. Não éramos tão lenientes, naquela época. As ideias sediciosas que desenvolveram eram desconhecidas para nós, mas pouco surpreendentes. Tinham um coração terno.<br><br>XXX: É um velho inimigo a esta altura. Com o tempo, sua execução é uma inevitabilidade. Eu, francamente, terei muito pouco prazer no momento. É uma doença, tornada carne. Seu hospedeiro pereceu antes que ele chegasse para cumprir seus desejos, e ainda é movido por aquela loucura.<br><br>XXX: Seu desejo era simplesmente um desejo de ser livre.<br><br>XXX: Fantasia pueril.<br><br>XXX: Bem, deixe-me dizer de outra forma: transformar suas espadas em arados, curar a eles e seus camaradas das formas em que os quebramos. Desejavam uma lareira e um lar, um campo verde e o sabor do pão quente, o riso de seus amigos. Tudo que lhes negamos. Desejaram uma força de libertação, uma força forte o suficiente para lutar contra seu mestre. Chamaram o Rei, e ele veio.<br><br>XXXX: [risada] O que eu acho? O que eu acho daquele desejo? "Não há nada mais perigoso nesta terra."' : 'Atlas: We were inattentive. We were not so lenient, back then. The seditious ideas they developed were unknown to us, but hardly surprising. They had a tender heart.<br><br>XXX: It is an old foe by now. In the fullness of time, its execution is an inevitability. I will, frankly, take very little pleasure in the moment. It is a sickness, made flesh. Its host perished before it arrived to fulfill their wishes, and it is still driven by that madness.<br><br>XXX: Their wish was simply a wish to be free.<br><br>XXX: Puerile fantasy.<br><br>XXX: Well, let me say it another way: to beat their swords to plowshares, to heal them and their comrades from the shapes we had broken them in to. They wished for a hearth and a home, a green field and the taste of warm bread, the laughter of their friends. Everything we had denied them. They wished for a force of liberation, a force strong enough to fight their master. They beckoned the King, and it came.<br><br>XXXX: [laughter] What do I think? What do I think about that wish? "There is nothing more dangerous on this earth."') + '</p><p class="muted" style="font-size:0.75rem">' + (skPt ? 'Página 2/3' : 'Page 2/3') + ' \u2014 05/08/1999 \u2014 ' + (skPt ? 'Entrevista com Segundo Superior, G. Atlas' : 'Interview with Upper Second, G. Atlas') + '</p></div>' +
              '<div class="sk-page sk-page-5" style="display:none"><br><em>' + (skPt ? 'É por isso que os negam a nós.' : 'That is why they deny them to us.') + '</em><br><br><b style="font-size:1.2em">' + (skPt ? 'NOSSOS SONHOS ORBITARÃO A TERRA PARA SEMPRE' : 'OUR DREAMS WILL ORBIT THE EARTH FOREVER') + '</b></div>' +
              '<div class="sk-page sk-page-6" style="display:none"><span class="sk-glitch">' + (skPt ? 'Você pode também' : 'You may also') + '</span></div>' +
              '<div class="sk-page sk-page-7"' + (isActive ? '' : ' style="display:none"') + '><b>' + (skPt ? 'INVOCAR O' : 'SUMMON THE') + '</b><br><b style="font-size:2.2em;line-height:1.1">' + (skPt ? 'REI DAS<br>DEZ MIL ESPADAS' : 'TEN THOUSAND<br>SWORD KING') + '</b><br><br><p class="quirk-desc">' + tPassiveDesc(quirk.id, quirk.description) + '</p>' +
                '<button class="btn btn-sm quirk-toggle" data-blas="' + blRef.id + '" data-quirk="' + quirk.id + '">' + (isActive ? t('quirks_remove') : t('quirks_apply')) + '</button></div>' +
            '</div>' +
          '</div>';
          return;
        }

        html += '<div class="quirk-card' + (isActive ? ' active' : '') + '">' +
          (quirk.image ? '<img class="quirk-img" src="' + quirk.image + '" alt="' + quirk.name + '">' : '') +
          '<div class="quirk-header"><strong>' + quirk.name + '</strong> <span class="tags">' + typeLabel + '</span></div>' +
          '<div class="quirk-desc">' + tPassiveDesc(quirk.id, quirk.description) + '</div>' +
          '<button class="btn btn-sm quirk-toggle" data-blas="' + blRef.id + '" data-quirk="' + quirk.id + '">' + (isActive ? t('quirks_remove') : t('quirks_apply')) + '</button>' +
          '</div>';
      });

      html += '</section>';
    });
  }

  html += '</div></div>';
  app.innerHTML = html;
  renderLangToggle();

  // Event listeners
  document.getElementById('btn-back').addEventListener('click', function() { navigate('view/' + characterId); });

  // Sword King narrative sequence
  document.querySelectorAll('.sword-king-sequence').forEach(function(seq) {
    seq.addEventListener('click', function(e) {
      if (e.target.closest('.quirk-toggle')) return; // don't advance when clicking the apply button
      var step = parseInt(this.dataset.step);
      var pages = this.querySelectorAll('.sk-page');
      var maxStep = pages.length - 1;
      if (step < maxStep) {
        pages[step].style.display = 'none';
        step++;
        pages[step].style.display = 'block';
        this.dataset.step = step;
      }
    });
  });

  document.querySelectorAll('.quirk-toggle').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var blasId = this.dataset.blas;
      var quirkId = this.dataset.quirk;
      var quirkData = QUIRKS[blasId];
      var quirk = quirkData.options.find(function(o) { return o.id === quirkId; });

      if (!char.quirks) char.quirks = {};
      if (!char.quirks[blasId]) char.quirks[blasId] = [];

      var idx = char.quirks[blasId].indexOf(quirkId);
      if (idx !== -1) {
        // Remove quirk
        char.quirks[blasId].splice(idx, 1);
      } else {
        // For 'replace' type: remove any existing replace quirk for this blasphemy first
        if (quirk.type === 'replace') {
          char.quirks[blasId] = char.quirks[blasId].filter(function(qId) {
            var q = quirkData.options.find(function(o) { return o.id === qId; });
            return q && q.type !== 'replace';
          });
        }
        char.quirks[blasId].push(quirkId);
      }

      // Recalculate expansion tags
      recalcExpansionTags(char);
      saveCharacter(char);
      renderQuirks(characterId);
    });
  });
}

// ════════════════════════════════════════════════════════════════════
// PAGE: SIN MARKS
// ════════════════════════════════════════════════════════════════════

function renderSinMarks(characterId) {
  var app = document.getElementById('app');
  var char = getCharacter(characterId);
  if (!char) {
    app.innerHTML = '<div class="page"><p>' + t('notFound') + '</p><button class="btn btn-primary" id="btn-home">' + t('nav_back') + '</button></div>';
    document.getElementById('btn-home').addEventListener('click', function() { navigate('home'); });
    return;
  }

  if (!char.sinMarks) char.sinMarks = [];

  app.innerHTML =
    '<div class="page sinmarks-page">' +
      '<header class="page-header">' +
        '<button class="btn btn-back" id="btn-back">' + t('nav_back') + '</button>' +
        '<h2>' + t('nav_sinmarks') + ': ' + (char.name || 'Exorcist') + '</h2>' +
      '</header>' +

      // Rules reminder
      '<section class="sheet-section">' +
        '<p class="muted">' + t('sm_rules') + '</p>' +
      '</section>' +

      // Current sin marks
      '<section class="sheet-section">' +
        '<h3>' + t('sm_current') + ' (' + char.sinMarks.length + ')</h3>' +
        (char.sinMarks.length === 0 ? '<p class="muted">' + t('sm_none') + '</p>' :
          char.sinMarks.map(function(mark, i) {
            var loc = SIN_MARKS.find(function(m) { return m.id === mark.locationId; });
            return '<div class="sinmark-card">' +
              '<div class="sinmark-header"><strong>' + (loc ? loc.name : 'Unknown') + '</strong><button class="btn btn-tiny btn-danger btn-remove-mark" data-idx="' + i + '">\u00D7</button></div>' +
              '<p class="muted sinmark-appearance">' + (loc ? loc.appearance : '') + '</p>' +
              '<ul class="sinmark-abilities">' + (mark.abilities || []).map(function(a) { return '<li>' + a + '</li>'; }).join('') + '</ul>' +
            '</div>';
          }).join('')
        ) +
      '</section>' +

      // Add new sin mark
      '<section class="sheet-section">' +
        '<h3>' + t('sm_add_new') + '</h3>' +
        '<p class="muted">' + t('sm_add_instructions') + '</p>' +
        '<div class="sinmark-locations" id="sm-locations">' +
          SIN_MARKS.filter(function(m) { return m.id <= 5; }).map(function(loc) {
            return '<div class="sinmark-loc-card" data-loc="' + loc.id + '">' +
              '<strong>' + loc.id + '. ' + loc.name + '</strong>' +
              '<p class="muted">' + loc.appearance + '</p>' +
            '</div>';
          }).join('') +
          '<div class="sinmark-loc-card" data-loc="6"><strong>6. ' + t('sm_choose') + '</strong><p class="muted">' + t('sm_choose_desc') + '</p></div>' +
        '</div>' +
      '</section>' +

      // Ability selection (hidden until location chosen)
      '<section class="sheet-section" id="sm-ability-section" style="display:none">' +
        '<h3 id="sm-ability-title"></h3>' +
        '<div id="sm-ability-list"></div>' +
      '</section>' +

    '</div>';

  renderLangToggle();
  document.getElementById('btn-back').addEventListener('click', function() { navigate('view/' + characterId); });

  // Remove mark buttons
  app.querySelectorAll('.btn-remove-mark').forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (!confirm(t('sm_remove_confirm'))) return;
      char.sinMarks.splice(parseInt(btn.dataset.idx), 1);
      saveCharacter(char);
      renderSinMarks(characterId);
    });
  });

  // Location selection
  var selectedLoc = null;
  app.querySelectorAll('.sinmark-loc-card').forEach(function(card) {
    card.addEventListener('click', function() {
      var locId = parseInt(card.dataset.loc);
      app.querySelectorAll('.sinmark-loc-card').forEach(function(c) { c.classList.remove('selected'); });
      card.classList.add('selected');

      if (locId === 6) {
        // "Choose" - show all locations again for ability selection
        selectedLoc = null;
        showAbilitySelection(null, char, characterId);
      } else {
        selectedLoc = locId;
        showAbilitySelection(locId, char, characterId);
      }
    });
  });
}

function showAbilitySelection(locId, char, characterId) {
  var section = document.getElementById('sm-ability-section');
  var title = document.getElementById('sm-ability-title');
  var list = document.getElementById('sm-ability-list');
  section.style.display = 'block';

  if (locId === null) {
    // Rolled a 6 - player chooses location first
    title.textContent = t('sm_choose_location_first');
    var html = '';
    SIN_MARKS.filter(function(m) { return m.id <= 5; }).forEach(function(loc) {
      html += '<div class="advance-choice" data-loc="' + loc.id + '"><strong>' + loc.id + '. ' + loc.name + '</strong></div>';
    });
    list.innerHTML = html;
    list.querySelectorAll('.advance-choice').forEach(function(card) {
      card.addEventListener('click', function() {
        showAbilitySelection(parseInt(card.dataset.loc), char, characterId);
      });
    });
    return;
  }

  var loc = SIN_MARKS.find(function(m) { return m.id === locId; });
  if (!loc) return;

  title.textContent = t('sm_pick_ability') + ': ' + loc.name;
  var html2 = '';
  loc.abilities.forEach(function(abil, i) {
    html2 += '<div class="advance-choice" data-abil-idx="' + i + '"><strong>' + (i + 1) + '.</strong> ' + abil + '</div>';
  });
  list.innerHTML = html2;
  list.querySelectorAll('.advance-choice').forEach(function(card) {
    card.addEventListener('click', function() {
      var abilIdx = parseInt(card.dataset.abilIdx);
      var ability = loc.abilities[abilIdx];
      if (!confirm(t('sm_confirm_add') + '\n\n' + loc.name + ': ' + ability)) return;

      // Check if mark already exists at this location
      var existing = char.sinMarks.find(function(m) { return m.locationId === locId; });
      if (existing) {
        // Evolve - add ability if not duplicate
        if (existing.abilities.indexOf(ability) === -1) {
          existing.abilities.push(ability);
        } else {
          alert(t('sm_duplicate'));
          return;
        }
      } else {
        // New mark
        char.sinMarks.push({ locationId: locId, abilities: [ability] });
      }

      saveCharacter(char);
      renderSinMarks(characterId);
    });
  });
}

// ════════════════════════════════════════════════════════════════════
// PAGE: SWAP AGENDA
// ════════════════════════════════════════════════════════════════════

function renderSwapAgenda(characterId) {
  var app = document.getElementById('app');
  var char = getCharacter(characterId);
  if (!char) {
    app.innerHTML = '<div class="page"><p>' + t('notFound') + '</p><button class="btn btn-primary" id="btn-home">' + t('nav_back') + '</button></div>';
    document.getElementById('btn-home').addEventListener('click', function() { navigate('home'); });
    return;
  }

  var s = char.session || {};
  var isSurvivor = char.agenda && char.agenda.id === 'survivor';
  var currentAgenda = AGENDAS.find(function(a) { return a.id === (char.agenda || {}).id; });
  var extraBolded = char.agenda.extraBoldedItems || [];
  var currentAbilities = char.agenda.abilities || [];

  // Check if can swap
  var canSwap = true;
  var swapCost = 0;
  var blockReason = '';
  if (isSurvivor) {
    swapCost = 2;
    if ((s.advances || 0) < 2) {
      canSwap = false;
      blockReason = t('swap_need_2_advances');
    }
  }

  app.innerHTML =
    '<div class="page swap-agenda-page">' +
      '<header class="page-header">' +
        '<button class="btn btn-back" id="btn-back">' + t('nav_back') + '</button>' +
        '<h2>' + t('nav_swap_agenda') + '</h2>' +
      '</header>' +

      // Current agenda info
      '<section class="sheet-section">' +
        '<h3>' + t('swap_current') + ': ' + (currentAgenda ? tAgenda(currentAgenda.id) : '\u2014') + '</h3>' +
        (currentAgenda ? (function() {
          var items = tAgendaItems(currentAgenda.id, currentAgenda);
          return '<div class="agenda-display"><p class="item-normal">\u25BA ' + items.items[0] + '</p><p class="item-bolded">\u25BA <strong>' + items.bolded[0] + '</strong></p></div>';
        })() : '') +
        (extraBolded.length > 0 ? '<div class="extra-bolded"><h4>' + t('swap_extra_bolded') + '</h4>' + extraBolded.map(function(item) { return '<p class="item-bolded">\u25BA <strong>' + escHtml(tBoldedItem(item)) + '</strong></p>'; }).join('') + '</div>' : '') +
        '<p class="muted">' + t('swap_abilities_count') + ': ' + currentAbilities.length + '/5</p>' +
        (isSurvivor ? '<p class="muted">' + t('swap_survivor_cost') + '</p>' : '') +
        (!canSwap ? '<p class="validation-msg error">' + blockReason + '</p>' : '') +
      '</section>' +

      // Agenda selection
      (canSwap ? '<section class="sheet-section">' +
        '<h3>' + t('swap_choose_new') + '</h3>' +
        '<div class="agenda-list" id="swap-agenda-list">' +
          AGENDAS.filter(function(a) { return a.id !== (char.agenda || {}).id; }).map(function(a) {
            var items = tAgendaItems(a.id, a);
            return '<div class="agenda-card" data-id="' + a.id + '">' +
              (a.image ? '<img class="agenda-img" src="' + a.image + '" alt="' + a.name + '">' : '') +
              '<h4>' + tAgenda(a.id) + '</h4>' +
              '<div class="agenda-items"><p class="item-normal">\u25BA ' + items.items[0] + '</p><p class="item-bolded">\u25BA <strong>' + items.bolded[0] + '</strong></p></div>' +
              (a.restriction ? '<p class="agenda-restriction muted">' + tAgendaRestriction(a.id, a.restriction) + '</p>' : '') +
            '</div>';
          }).join('') +
        '</div>' +
      '</section>' : '') +

      // Selection results (filled by JS)
      '<section class="sheet-section" id="swap-step2" style="display:none">' +
        '<h3 id="swap-step2-title"></h3>' +
        '<div id="swap-step2-content"></div>' +
      '</section>' +

    '</div>';

  renderLangToggle();
  document.getElementById('btn-back').addEventListener('click', function() { navigate('view/' + characterId); });

  if (!canSwap) return;

  // Agenda selection click
  app.querySelectorAll('.agenda-card').forEach(function(card) {
    card.addEventListener('click', function() {
      var newAgendaId = card.dataset.id;
      app.querySelectorAll('.agenda-card').forEach(function(c) { c.classList.remove('selected'); });
      card.classList.add('selected');
      showSwapStep2(char, characterId, newAgendaId, extraBolded, currentAbilities);
    });
  });
}

function showSwapStep2(char, characterId, newAgendaId, extraBolded, currentAbilities) {
  var step2 = document.getElementById('swap-step2');
  var title = document.getElementById('swap-step2-title');
  var content = document.getElementById('swap-step2-content');
  step2.style.display = 'block';
  title.textContent = t('swap_confirm_title');

  var newAgenda = AGENDAS.find(function(a) { return a.id === newAgendaId; });
  var currentAgenda = AGENDAS.find(function(a) { return a.id === (char.agenda || {}).id; });
  var isSurvivor = char.agenda && char.agenda.id === 'survivor';

  // Combine default bolded + extra bolded for carry-over options
  var allBolded = [];
  if (currentAgenda && currentAgenda.boldedItems[0]) {
    allBolded.push(currentAgenda.boldedItems[0]);
  }
  extraBolded.forEach(function(item) { allBolded.push(item); });

  // Build carry-over selection
  var html = '';

  // Bolded items to carry
  if (allBolded.length > 0) {
    html += '<div class="swap-section"><h4>' + t('swap_carry_bolded') + '</h4>';
    allBolded.forEach(function(item, i) {
      html += '<label class="radio-label"><input type="checkbox" class="carry-bolded" data-idx="' + i + '" checked> <strong>' + escHtml(item) + '</strong></label>';
    });
    html += '</div>';
  }

  // Abilities to carry (max 5 total)
  if (currentAbilities.length > 0) {
    html += '<div class="swap-section"><h4>' + t('swap_carry_abilities') + '</h4>';
    currentAbilities.forEach(function(abilId, i) {
      var abilName = abilId;
      AGENDAS.forEach(function(ag) {
        var found = ag.abilities.find(function(a) { return a.id === abilId; });
        if (found) abilName = found.name;
      });
      html += '<label class="radio-label"><input type="checkbox" class="carry-ability" data-abil="' + abilId + '" checked> ' + abilName + '</label>';
    });
    html += '<p class="muted">' + t('swap_max_5_abilities') + '</p>';
    html += '</div>';
  }

  html += '<button class="btn btn-primary" id="btn-confirm-swap">' + t('swap_confirm_btn') + '</button>';
  content.innerHTML = html;

  // Confirm button
  document.getElementById('btn-confirm-swap').addEventListener('click', function() {
    if (!confirm(t('swap_confirm_question'))) return;

    // Gather carried bolded items
    var carriedBolded = [];
    content.querySelectorAll('.carry-bolded:checked').forEach(function(cb) {
      carriedBolded.push(allBolded[parseInt(cb.dataset.idx)]);
    });

    // Gather carried abilities
    var carriedAbilities = [];
    content.querySelectorAll('.carry-ability:checked').forEach(function(cb) {
      carriedAbilities.push(cb.dataset.abil);
    });

    // Enforce max 5
    if (carriedAbilities.length > 5) {
      alert(t('swap_too_many_abilities'));
      return;
    }

    // Apply swap
    char.agenda.id = newAgendaId;
    char.agenda.abilities = carriedAbilities;
    char.agenda.extraBoldedItems = carriedBolded;

    // Deduct advances if Survivor
    if (isSurvivor && char.session) {
      char.session.advances -= 2;
    }

    saveCharacter(char);
    navigate('view/' + characterId);
  });
}

// ════════════════════════════════════════════════════════════════════
// PAGE: ADVANCE
// ════════════════════════════════════════════════════════════════════

function renderAdvance(characterId) {
  var app = document.getElementById('app');
  var char = getCharacter(characterId);
  if (!char) {
    app.innerHTML = '<div class="page"><p>' + t('notFound') + '</p><button class="btn btn-primary" id="btn-home">' + t('nav_back') + '</button></div>';
    document.getElementById('btn-home').addEventListener('click', function() { navigate('home'); });
    return;
  }

  // Ensure session data exists for XP/advances
  if (!char.session) {
    char.session = { stress: 0, injuries: 0, psycheBursts: 3, pathos: 0, sin: 0, xp: 0, advances: 0, kitPointsUsed: 0, hooks: [], afflictions: [], itemsDeployed: [], notes: '' };
    saveCharacter(char);
  }
  var s = char.session;
  var extraBlasphemies = Math.max(0, (char.blasphemies || []).length - 1);
  var xpCap = 4 + extraBlasphemies;
  var hasSinMarks = (char.sinMarks || []).length > 0;
  var isSurvivor = char.agenda && char.agenda.id === 'survivor';
  var totalPowers = (char.blasphemies || []).reduce(function(sum, bl) { return sum + (bl.powers || []).length; }, 0);
  var agenda = AGENDAS.find(function(a) { return a.id === (char.agenda || {}).id; });
  var skillImprovements = char.skillImprovements || 0;
  var skillsAt3 = SKILLS.filter(function(sk) { return char.skills[sk.id] >= 3; }).length;

  app.innerHTML =
    '<div class="page advance-page">' +
      '<header class="page-header">' +
        '<button class="btn btn-back" id="btn-back">' + t('nav_back') + '</button>' +
        '<h2>' + t('nav_advance') + ': ' + (char.name || 'Exorcist') + '</h2>' +
      '</header>' +

      // XP & Advances display
      '<section class="sheet-section advance-resources">' +
        '<div class="session-grid">' +
          '<div class="session-tracker">' +
            '<label>' + t('xp') + '</label>' +
            '<span class="session-value large">' + s.xp + ' / ' + xpCap + '</span>' +
          '</div>' +
          '<div class="session-tracker">' +
            '<label>' + t('session_advances') + '</label>' +
            '<span class="session-value large">' + s.advances + '</span>' +
          '</div>' +
          '<div class="session-tracker">' +
            '<label>' + t('scrip') + '</label>' +
            '<span class="session-value large">' + char.scrip + '</span>' +
          '</div>' +
        '</div>' +
        (s.xp >= xpCap ? '<p class="advance-hint">' + t('adv_can_cash') + '</p>' : '') +
      '</section>' +

      // Cash XP for Advance button
      (s.xp >= xpCap ? '<section class="sheet-section">' +
        '<button class="btn btn-primary btn-block" id="btn-cash-xp">' + t('adv_cash_xp') + '</button>' +
      '</section>' : '') +

      // Advancement options (require at least 1 advance)
      '<section class="sheet-section">' +
        '<h3>' + t('adv_spend_title') + '</h3>' +
        (s.advances < 1 ? '<p class="muted">' + t('adv_no_advances') + '</p>' : 
          '<div class="advance-options">' +
            // New blasphemy power
            (totalPowers < 5 ? '<button class="btn btn-block btn-secondary advance-opt" data-opt="new-power">' + t('adv_new_power') + '</button>' : '') +
            // New blasphemy
            '<button class="btn btn-block btn-secondary advance-opt" data-opt="new-blasphemy">' + t('adv_new_blasphemy') + '</button>' +
            // New agenda ability
            (agenda ? '<button class="btn btn-block btn-secondary advance-opt" data-opt="new-ability">' + t('adv_new_ability') + '</button>' : '') +
            // Improve skill
            (skillImprovements < 6 ? '<button class="btn btn-block btn-secondary advance-opt" data-opt="improve-skill">' + t('adv_improve_skill') + '</button>' : '') +
            // +3 Scrip
            '<button class="btn btn-block btn-secondary advance-opt" data-opt="gain-scrip">' + t('adv_gain_scrip') + '</button>' +
            // Evolve sin mark (only if has marks)
            (hasSinMarks ? '<button class="btn btn-block btn-secondary advance-opt" data-opt="evolve-mark">' + t('adv_evolve_mark') + '</button>' : '') +
          '</div>'
        ) +
      '</section>' +

      // Action area (populated by sub-flows)
      '<section class="sheet-section" id="advance-action" style="display:none">' +
        '<h3 id="advance-action-title"></h3>' +
        '<div id="advance-action-content"></div>' +
      '</section>' +

    '</div>';

  renderLangToggle();

  // Back button
  document.getElementById('btn-back').addEventListener('click', function() { navigate('view/' + characterId); });

  // Cash XP button
  var cashBtn = document.getElementById('btn-cash-xp');
  if (cashBtn) {
    cashBtn.addEventListener('click', function() {
      s.xp -= xpCap;
      s.advances++;
      char.session = s;
      saveCharacter(char);
      renderAdvance(characterId);
    });
  }

  // Option buttons
  app.querySelectorAll('.advance-opt').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var opt = btn.dataset.opt;
      handleAdvanceOption(opt, char, characterId);
    });
  });
}

function handleAdvanceOption(opt, char, characterId) {
  var s = char.session;
  var actionSection = document.getElementById('advance-action');
  var actionTitle = document.getElementById('advance-action-title');
  var actionContent = document.getElementById('advance-action-content');
  actionSection.style.display = 'block';

  switch (opt) {
    case 'gain-scrip':
      if (!confirm(t('adv_confirm_scrip'))) break;
      s.advances--;
      char.scrip = (char.scrip || 0) + 3;
      char.session = s;
      saveCharacter(char);
      renderAdvance(characterId);
      break;

    case 'new-power':
      actionTitle.textContent = t('adv_new_power');
      var html = '';
      (char.blasphemies || []).forEach(function(blRef) {
        var bl = BLASPHEMIES.find(function(b) { return b.id === blRef.id; });
        if (!bl) return;
        var availPowers = bl.powers.filter(function(p) { return (blRef.powers || []).indexOf(p.id) === -1; });
        if (availPowers.length === 0) return;
        html += '<h4>' + tBlas(bl.id) + '</h4>';
        availPowers.forEach(function(p) {
          html += '<div class="advance-choice" data-power="' + p.id + '" data-blas="' + bl.id + '"><strong>' + p.name + '</strong><span class="tags">[' + p.tags.join(', ') + ']</span>' + renderBurstCost(p.burst) + '<p>' + tPowerDesc(p.id, p.description) + '</p></div>';
        });
      });
      if (!html) { html = '<p class="muted">' + t('adv_no_powers_available') + '</p>'; }
      actionContent.innerHTML = html;
      actionContent.querySelectorAll('.advance-choice').forEach(function(card) {
        card.addEventListener('click', function() {
          var powId = card.dataset.power;
          var blasId = card.dataset.blas;
          var blRef = char.blasphemies.find(function(b) { return b.id === blasId; });
          if (blRef) {
            if (!confirm(t('adv_confirm_power'))) return;
            blRef.powers.push(powId);
            s.advances--;
            char.session = s;
            saveCharacter(char);
            renderAdvance(characterId);
          }
        });
      });
      break;

    case 'new-blasphemy':
      actionTitle.textContent = t('adv_new_blasphemy');
      var currentBlas = (char.blasphemies || []).map(function(b) { return b.id; });
      var availBlas = BLASPHEMIES.filter(function(b) { return currentBlas.indexOf(b.id) === -1; });
      var html2 = '<p class="muted">' + t('adv_new_blasphemy_warn') + '</p>';
      availBlas.forEach(function(bl) {
        html2 += '<div class="advance-choice" data-blas="' + bl.id + '"><h4>' + tBlas(bl.id) + '</h4><p class="muted">' + tBlasDesc(bl.id, bl.description) + '</p>' + renderPassivesCard(bl) + '</div>';
      });
      actionContent.innerHTML = html2;
      actionContent.querySelectorAll('.advance-choice').forEach(function(card) {
        card.addEventListener('click', function() {
          var blasId = card.dataset.blas;
          if (!confirm(t('adv_confirm_blasphemy'))) return;
          // Add blasphemy with empty powers (user will pick one power next)
          char.blasphemies.push({ id: blasId, powers: [] });
          char.sinOverflowCap = Math.max(1, char.sinOverflowCap - 1);
          s.advances--;
          char.session = s;
          saveCharacter(char);
          // Now show power selection for the new blasphemy
          renderAdvance(characterId);
          // Auto-trigger new-power selection
          setTimeout(function() {
            handleAdvanceOption('pick-first-power-' + blasId, char, characterId);
          }, 100);
        });
      });
      break;

    case 'new-ability':
      actionTitle.textContent = t('adv_new_ability');
      var agenda = AGENDAS.find(function(a) { return a.id === char.agenda.id; });
      if (!agenda) break;
      var currentAbils = char.agenda.abilities || [];
      var availAbils = agenda.abilities.filter(function(a) { return currentAbils.indexOf(a.id) === -1; });
      if (currentAbils.length >= 5) {
        actionContent.innerHTML = '<p class="muted">' + t('adv_max_abilities') + '</p>';
        break;
      }
      var html3 = '';
      availAbils.forEach(function(ab) {
        html3 += '<div class="advance-choice" data-abil="' + ab.id + '"><strong>' + ab.name + '</strong><p>' + tAbilDesc(ab.id, ab.description) + '</p></div>';
      });
      if (!html3) { html3 = '<p class="muted">' + t('adv_no_abilities_available') + '</p>'; }
      actionContent.innerHTML = html3;
      actionContent.querySelectorAll('.advance-choice').forEach(function(card) {
        card.addEventListener('click', function() {
          if (!confirm(t('adv_confirm_ability'))) return;
          char.agenda.abilities.push(card.dataset.abil);
          s.advances--;
          char.session = s;
          saveCharacter(char);
          renderAdvance(characterId);
        });
      });
      break;

    case 'improve-skill':
      actionTitle.textContent = t('adv_improve_skill');
      var skillImprovements = char.skillImprovements || 0;
      var skillsAt3 = SKILLS.filter(function(sk) { return char.skills[sk.id] >= 3; }).length;
      var html4 = '<p class="muted">' + t('adv_skill_info').replace('{used}', skillImprovements).replace('{max}', '6') + '</p>';
      SKILLS.forEach(function(sk) {
        var val = char.skills[sk.id];
        var canImprove = val < 3 || (val < 3 && skillsAt3 < 2);
        if (val >= 3) canImprove = false;
        if (val === 2 && skillsAt3 >= 2) canImprove = false;
        if (canImprove) {
          html4 += '<div class="advance-choice" data-skill="' + sk.id + '"><strong>' + tSkill(sk.id) + '</strong> (' + val + ' \u2192 ' + (val + 1) + ')</div>';
        }
      });
      actionContent.innerHTML = html4;
      actionContent.querySelectorAll('.advance-choice').forEach(function(card) {
        card.addEventListener('click', function() {
          var skId = card.dataset.skill;
          if (!confirm(t('adv_confirm_skill'))) return;
          char.skills[skId]++;
          char.skillImprovements = (char.skillImprovements || 0) + 1;
          s.advances--;
          char.session = s;
          saveCharacter(char);
          renderAdvance(characterId);
        });
      });
      break;

    case 'evolve-mark':
      actionTitle.textContent = t('adv_evolve_mark');
      var html5 = '';
      (char.sinMarks || []).forEach(function(mark, i) {
        var markData = SIN_MARKS.find(function(m) { return m.id === mark.locationId; });
        html5 += '<div class="advance-choice" data-mark="' + i + '"><strong>' + (markData ? markData.name : 'Mark ' + (i+1)) + '</strong><p>' + (mark.abilities || []).join('; ') + '</p></div>';
      });
      actionContent.innerHTML = html5 || '<p class="muted">No sin marks to evolve.</p>';
      actionContent.querySelectorAll('.advance-choice').forEach(function(card) {
        card.addEventListener('click', function() {
          if (!confirm(t('adv_confirm_evolve'))) return;
          var markIdx = parseInt(card.dataset.mark);
          var mark = char.sinMarks[markIdx];
          var markData = SIN_MARKS.find(function(m) { return m.id === mark.locationId; });
          if (!markData || markData.abilities.length === 0) return;
          // Roll a new ability (1-6)
          var roll = Math.floor(Math.random() * 6);
          var newAbil = markData.abilities[roll];
          // Re-roll duplicates
          var attempts = 0;
          while (mark.abilities.indexOf(newAbil) !== -1 && attempts < 10) {
            roll = Math.floor(Math.random() * 6);
            newAbil = markData.abilities[roll];
            attempts++;
          }
          if (mark.abilities.indexOf(newAbil) === -1) {
            mark.abilities.push(newAbil);
          }
          s.advances--;
          char.session = s;
          saveCharacter(char);
          renderAdvance(characterId);
        });
      });
      break;

    case 'swap-survivor':
      actionTitle.textContent = t('adv_swap_survivor');
      var html6 = '<p class="muted">' + t('adv_swap_survivor_info') + '</p>';
      AGENDAS.filter(function(a) { return a.id !== 'survivor'; }).forEach(function(a) {
        html6 += '<div class="advance-choice" data-agenda="' + a.id + '"><h4>' + tAgenda(a.id) + '</h4></div>';
      });
      actionContent.innerHTML = html6;
      actionContent.querySelectorAll('.advance-choice').forEach(function(card) {
        card.addEventListener('click', function() {
          if (!confirm(t('adv_confirm_swap'))) return;
          char.agenda.id = card.dataset.agenda;
          // Keep existing abilities, don't auto-grant new one
          s.advances -= 2;
          char.session = s;
          saveCharacter(char);
          renderAdvance(characterId);
        });
      });
      break;

    default:
      // Handle pick-first-power for new blasphemy
      if (opt.indexOf('pick-first-power-') === 0) {
        var newBlasId = opt.replace('pick-first-power-', '');
        actionTitle.textContent = t('adv_pick_first_power');
        var bl = BLASPHEMIES.find(function(b) { return b.id === newBlasId; });
        if (!bl) break;
        var html7 = '';
        bl.powers.forEach(function(p) {
          html7 += '<div class="advance-choice" data-power="' + p.id + '"><strong>' + p.name + '</strong><span class="tags">[' + p.tags.join(', ') + ']</span>' + renderBurstCost(p.burst) + '<p>' + tPowerDesc(p.id, p.description) + '</p></div>';
        });
        actionContent.innerHTML = html7;
        actionContent.querySelectorAll('.advance-choice').forEach(function(card) {
          card.addEventListener('click', function() {
            var powId = card.dataset.power;
            var blRef = char.blasphemies.find(function(b) { return b.id === newBlasId; });
            if (blRef) blRef.powers.push(powId);
            saveCharacter(char);
            renderAdvance(characterId);
          });
        });
      }
      break;
  }
}

// ════════════════════════════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════════════════════════════

// ════════════════════════════════════════════════════════════════════
// PAGE: COMPENDIUM
// ════════════════════════════════════════════════════════════════════

function renderCompendium() {
  var app = document.getElementById('app');
  var tabs = [
    { id: 'agendas', label: currentLang === 'pt' ? 'Agendas' : 'Agendas' },
    { id: 'blasphemies', label: currentLang === 'pt' ? 'Blasfêmias' : 'Blasphemies' },
    { id: 'virtues', label: currentLang === 'pt' ? 'Virtudes' : 'Virtues' }
  ];

  // Restore last selected tab (default to first)
  var savedTab = null;
  try { savedTab = localStorage.getItem('compendiumTab'); } catch (e) {}
  if (!savedTab || !tabs.some(function(t) { return t.id === savedTab; })) savedTab = tabs[0].id;

  app.innerHTML =
    '<div class="page compendium-page">' +
      '<header class="page-header">' +
        '<button class="btn btn-back" id="btn-back">\u2190 ' + (currentLang === 'pt' ? 'Voltar' : 'Back') + '</button>' +
        '<h1 class="title">' + (currentLang === 'pt' ? 'Compêndio' : 'Compendium') + '</h1>' +
      '</header>' +
      '<nav class="compendium-tabs">' +
        tabs.map(function(tab) {
          return '<button class="compendium-tab' + (tab.id === savedTab ? ' active' : '') + '" data-tab="' + tab.id + '">' + tab.label + '</button>';
        }).join('') +
      '</nav>' +
      '<div class="compendium-content" id="compendium-content"></div>' +
    '</div>';

  renderLangToggle();
  document.getElementById('btn-back').addEventListener('click', function() { navigate('home'); });

  // Tab switching
  app.querySelectorAll('.compendium-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      app.querySelectorAll('.compendium-tab').forEach(function(t) { t.classList.remove('active'); });
      tab.classList.add('active');
      try { localStorage.setItem('compendiumTab', tab.dataset.tab); } catch (e) {}
      renderCompendiumTab(tab.dataset.tab);
    });
  });

  // Render saved/default tab
  renderCompendiumTab(savedTab);
}

function renderCompendiumTab(tabId) {
  var content = document.getElementById('compendium-content');
  if (!content) return;

  if (tabId === 'agendas') {
    content.innerHTML =
      '<div class="compendium-grid">' +
        AGENDAS.map(function(a) {
          var items;
          try { items = tAgendaItems(a.id, a); } catch(e) { items = { items: a.agendaItems || [''], bolded: a.boldedItems || [''] }; }
          return '<div class="compendium-card">' +
            (a.image ? '<img class="compendium-card-img" src="' + a.image + '" alt="' + a.name + '">' : '') +
            '<h3 class="compendium-card-name">' + tAgenda(a.id) + '</h3>' +
            '<div class="compendium-card-body">' +
              (items.items[0] ? '<p class="item-normal">\u25BA ' + items.items[0] + '</p>' : '') +
              (items.bolded[0] ? '<p class="item-bolded">\u25BA <strong>' + items.bolded[0] + '</strong></p>' : '') +
            '</div>' +
          '</div>';
        }).join('') +
      '</div>';
  }

  if (tabId === 'blasphemies') {
    content.innerHTML =
      '<div class="compendium-grid">' +
        BLASPHEMIES.map(function(bl) {
          var passives = getPassives(bl);
          var img = passives[0] && passives[0].image ? passives[0].image : '';
          var flavorText = bl.flavor || '';
          if (currentLang === 'pt' && PT_CONTENT.flavors && PT_CONTENT.flavors[bl.id]) flavorText = PT_CONTENT.flavors[bl.id];
          var desc = (currentLang === 'pt' && PT_CONTENT.blasphemyDescs && PT_CONTENT.blasphemyDescs[bl.id]) ? PT_CONTENT.blasphemyDescs[bl.id] : bl.description;
          return '<div class="compendium-card">' +
            (img ? '<img class="compendium-card-img" src="' + img + '" alt="' + bl.name + '">' : '') +
            '<h3 class="compendium-card-name">' + tBlas(bl.id) + '</h3>' +
            '<p class="compendium-card-desc">' + desc + '</p>' +
            (flavorText ? '<p class="compendium-card-flavor"><em>' + flavorText + '</em></p>' : '') +
          '</div>';
        }).join('') +
      '</div>';
  }

  if (tabId === 'virtues') {
    content.innerHTML =
      '<div class="virtue-grid">' +
        VIRTUES.map(function(v) {
          var hb = v.highBlasphemy;
          var pt = currentLang === 'pt' ? (PT_CONTENT.virtues || {}) : null;

          var desc = (pt && pt.compendiumDescs && pt.compendiumDescs[v.id]) ? pt.compendiumDescs[v.id] : v.compendiumDesc;
          var likes = (pt && pt.likes && pt.likes[v.id]) ? pt.likes[v.id] : v.likes;
          var dislikes = (pt && pt.dislikes && pt.dislikes[v.id]) ? pt.dislikes[v.id] : v.dislikes;
          var favFood = (pt && pt.favoriteFoods && pt.favoriteFoods[v.id]) ? pt.favoriteFoods[v.id] : v.favoriteFood;
          var hbName = (pt && pt.highBlasphemyNames && pt.highBlasphemyNames[v.id]) ? pt.highBlasphemyNames[v.id] : hb.name;
          var hbDesc = stripCatTags((pt && pt.highBlasphemyDescs && pt.highBlasphemyDescs[v.id]) ? pt.highBlasphemyDescs[v.id] : hb.description);
          var terms = (pt && pt.termsOfLaw && hb.termsOfLaw) ? pt.termsOfLaw : hb.termsOfLaw;
          var games = (pt && pt.games && hb.games) ? pt.games : hb.games;

          // Second high blasphemy (e.g. Faith's Immaculate Defiance of Heaven)
          var hb2 = v.highBlasphemy2;
          var hb2Html = '';
          if (hb2) {
            var hb2Name = (pt && pt.highBlasphemy2Names && pt.highBlasphemy2Names[v.id]) ? pt.highBlasphemy2Names[v.id] : hb2.name;
            var hb2Desc = stripCatTags((pt && pt.highBlasphemyDescs && pt.highBlasphemyDescs[v.id + '2']) ? pt.highBlasphemyDescs[v.id + '2'] : hb2.description);
            hb2Html = '<div class="power-display power-display-alt"><strong>' + hb2Name + '</strong>' + (hb2.tags && hb2.tags.length ? '<span class="tags">[' + hb2.tags.join(', ') + ']</span>' : '') +
              (hb2.irreversible ? '<p class="virtue-irreversible-warn">\u26A0 ' + (currentLang === 'pt' ? 'Essa escolha é IRREVERSÍVEL. Uma vez tomada, não pode ser desfeita.' : 'This choice is IRREVERSIBLE. Once taken, it cannot be undone.') + '</p>' : '') +
              '<p>' + hb2Desc + '</p></div>';
          }

          var vColorStyle = v.color ? ' style="--vc:' + v.color + '"' : '';
          return '<div class="virtue-card" data-id="' + v.id + '"' + vColorStyle + '>' +
            (v.image ? '<img class="virtue-img" src="' + v.image + '" alt="' + v.name + '">' : '') +
            '<div class="virtue-card-header">' +
              '<h3 class="virtue-name">' + v.name + '</h3>' +
              '<p class="virtue-title">' + v.title + '</p>' +
            '</div>' +
            '<div class="virtue-card-body">' +
              (desc ? '<p class="virtue-desc">' + desc + '</p>' : '') +
              '<div class="virtue-profile">' +
                '<p><strong>' + (currentLang === 'pt' ? 'Gosta de' : 'Likes') + ':</strong> ' + (likes || []).join(', ') + '</p>' +
                '<p><strong>' + (currentLang === 'pt' ? 'Não gosta de' : 'Dislikes') + ':</strong> ' + (dislikes || []).join(', ') + '</p>' +
                (favFood ? '<p><strong>' + (currentLang === 'pt' ? 'Comida favorita' : 'Favorite Food') + ':</strong> ' + favFood + '</p>' : '') +
              '</div>' +
              '<div class="virtue-high-blasphemy">' +
                '<h4 class="virtue-hb-label">' + (currentLang === 'pt' ? 'Alta Blasfêmia' : 'High Blasphemy') + '</h4>' +
                '<div class="power-display"><strong>' + hbName + '</strong>' + (hb.tags && hb.tags.length ? '<span class="tags">[' + hb.tags.join(', ') + ']</span>' : '') + '<p>' + hbDesc + '</p>' +
                  (terms ? '<div class="virtue-terms"><strong>' + (currentLang === 'pt' ? 'Termos da Lei' : 'Terms of Law') + '</strong><ol>' + terms.map(function(term) { return '<li>' + term + '</li>'; }).join('') + '</ol></div>' : '') +
                  (games ? '<div class="virtue-terms"><strong>' + (currentLang === 'pt' ? 'Jogos' : 'Games') + '</strong><ul>' + games.map(function(g) { return '<li>' + g + '</li>'; }).join('') + '</ul></div>' : '') +
                '</div>' +
                hb2Html +
              '</div>' +
            '</div>' +
          '</div>';
        }).join('') +
      '</div>';
  }
}

route('home', renderHome);
route('compendium', renderCompendium);
route('create', renderCreate);
route('view', renderView);
route('edit', renderEdit);
route('session', renderSession);
route('advance', renderAdvance);
route('swapagenda', renderSwapAgenda);
route('quirks', renderQuirks);
route('sinmarks', renderSinMarks);
initRouter();

})();
