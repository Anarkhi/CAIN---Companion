/**
 * Portuguese (Brazil) locale - UI strings and game term translations
 * Based on the fan translation by ZackVanHellsing, Jonas (brothersloth) & LadyBatatita
 */
export const PTBR = {
  // ─── App ─────────────────────────────────────────────────────────
  app: {
    title: 'CAIN',
    subtitle: 'Companion',
    tagline: 'Limpe a mancha.',
    loading: 'Carregando...',
    language: 'PT'
  },

  // ─── Navigation & Actions ────────────────────────────────────────
  nav: {
    home: 'Início',
    back: '← Voltar',
    newExorcist: '+ Novo Exorcista',
    importChar: 'Importar Personagem',
    exportAll: 'Exportar Todos',
    export: 'Exportar JSON',
    edit: 'Editar',
    view: 'Ver',
    delete: 'Excluir',
    save: 'Salvar Alterações',
    cancel: 'Cancelar',
    create: 'Criar Exorcista'
  },

  // ─── Home Page ───────────────────────────────────────────────────
  home: {
    emptyTitle: 'Nenhum exorcista registrado.',
    emptySubtitle: 'Crie um novo personagem ou importe um arquivo JSON.',
    agenda: 'Agenda',
    blasphemy: 'Blasfêmia',
    missionsSurvived: 'Missões Sobrevividas',
    deleteConfirm: 'Excluir {name}? Essa ação não pode ser desfeita.'
  },

  // ─── Create Page ─────────────────────────────────────────────────
  create: {
    title: 'Criar Exorcista',
    abandon: 'Abandonar a criação do personagem?',
    steps: {
      details: 'Detalhes',
      skills: 'Perícias',
      agenda: 'Agenda',
      blasphemy: 'Blasfêmia',
      review: 'Revisão'
    },
    // Details step
    identity: 'Identidade',
    name: 'Nome',
    namePlaceholder: 'Nome do exorcista',
    exorcistId: 'ID do Exorcista',
    exorcistIdPlaceholder: 'ex. XXX0357',
    look: 'Aparência / Descrição',
    lookPlaceholder: 'Descreva a aparência',
    sinSeedLocation: 'Localização da Semente Profana',
    brain: 'Cérebro',
    heart: 'Coração',
    questions: 'Perguntas',
    questionsHint: '(compartilhe com seu Admin)',
    qManifest: 'Como você manifestou seus poderes pela primeira vez?',
    qHidden: 'O que você esconde nas partes mais profundas de si?',
    qHand: 'Sua mão é sua mão?',
    qMother: 'Você se lembra do rosto de sua mãe?',
    nextSkills: 'Próximo: Perícias →',
    // Skills step
    skillAllocation: 'Alocação de Perícias',
    skillHelp: 'Todas as perícias começam em 1. Aumente <strong>duas</strong> para 2, reduza <strong>três</strong> para 0.',
    validAllocation: '✓ Alocação válida',
    nextAgenda: 'Próximo: Agenda →',
    // Agenda step
    chooseAgenda: 'Escolha Sua Agenda',
    agendaHelp: 'Sua agenda descreve motivações e concede habilidades.',
    chooseAbility: 'Escolha Uma Habilidade',
    nextBlasphemy: 'Próximo: Blasfêmia →',
    selectAgenda: 'Selecione uma agenda.',
    selectAbility: 'Selecione uma habilidade.',
    // Blasphemy step
    chooseBlasphemy: 'Escolha Sua Blasfêmia',
    blasphemyHelp: 'Escolha uma blasfêmia, depois escolha <strong>dois poderes</strong>. Todos os exorcistas também possuem RAJADA.',
    choosePowers: 'Escolha Dois Poderes',
    powersSelected: '{n}/2 poderes selecionados',
    nextReview: 'Próximo: Revisão →',
    selectPowers: 'Selecione exatamente 2 poderes.',
    // Review step
    reviewTitle: 'Revise Seu Exorcista',
    reviewIdentity: 'Identidade',
    reviewSkills: 'Perícias',
    reviewAgenda: 'Agenda',
    reviewBlasphemy: 'Blasfêmia',
    passive: 'Passiva',
    powers: 'Poderes',
    ability: 'Habilidade',
    backToEdit: '← Voltar para Edição'
  },

  // ─── View Page ───────────────────────────────────────────────────
  view: {
    notFound: 'Personagem não encontrado.',
    skills: 'Perícias',
    combatState: 'Estado de Combate',
    stress: 'Estresse',
    injuries: 'Ferimentos',
    psycheBursts: 'Pulsos Psíquicos',
    pathos: 'Piedade',
    sin: 'Pecado',
    xp: 'XP',
    agenda: 'Agenda',
    abilities: 'Habilidades',
    blasphemies: 'Blasfêmias',
    blastDesc: 'Gaste um pulso psíquico e role PSIQUE para produzir energia psíquica concentrada. Escala com CAT.',
    kitWeapons: 'Kit & Armas',
    kitPoints: 'Pontos de Kit',
    firearm: 'Arma de Fogo',
    melee: 'Arma Branca',
    notes: 'Anotações',
    noNotes: 'Sem anotações.',
    noAgenda: 'Nenhuma agenda selecionada.',
    id: 'ID',
    sinSeed: 'Semente Profana',
    missions: 'Missões',
    scrip: 'Scrip'
  },

  // ─── Edit Page ───────────────────────────────────────────────────
  edit: {
    title: 'Editar: {name}',
    identity: 'Identidade',
    progression: 'Progressão',
    category: 'Categoria',
    missions: 'Missões',
    combatState: 'Estado de Combate',
    stress: 'Estresse',
    injuries: 'Ferimentos',
    pBursts: 'Pulsos Ps.',
    pathos: 'Piedade',
    sin: 'Pecado',
    sinCap: 'Limite Pecado',
    skills: 'Perícias',
    weapons: 'Armas',
    notes: 'Anotações',
    scrip: 'Scrip',
    xp: 'XP (0-4)'
  },

  // ─── Game Terms ──────────────────────────────────────────────────
  skills: {
    force: 'Força',
    conditioning: 'Atletismo',
    coordination: 'Coordenação',
    covert: 'Furtividade',
    interfacing: 'Interface',
    surveillance: 'Observação',
    investigation: 'Investigação',
    authority: 'Autoridade',
    negotiation: 'Negociação',
    connection: 'Conexão',
    psyche: 'Psique',
    // Descriptions
    force_desc: 'Aplicar força direta ou violência. Esmagar, lutar, cortar, agarrar.',
    conditioning_desc: 'Deslocar-se a pé. Correr, escalar, nadar, equilibrar.',
    coordination_desc: 'Usar coordenação motora. Atirar, arremessar, pegar.',
    covert_desc: 'Mover-se furtivamente. Esgueirar, abrir fechaduras, roubar.',
    interfacing_desc: 'Usar, entender, construir ou consertar tecnologia. Dirigir, hackear, reparar.',
    surveillance_desc: 'Usar seu poder de observação. Examinar, rastrear, localizar.',
    investigation_desc: 'Examinar algo em detalhe ou descobrir informações. Pesquisar, estudar, investigar.',
    authority_desc: 'Exercer liderança e força de vontade. Liderar, organizar, ordenar, intimidar.',
    negotiation_desc: 'Confiar em suas palavras para influenciar outros. Convencer, mentir, negociar.',
    connection_desc: 'Conectar-se aos outros e usar essas conexões. Intuir, ter empatia, criar redes.',
    psyche_desc: 'Usar seus poderes sobrenaturais. Igual à metade do seu CAT, arredondado para cima.'
  },

  agendas: {
    doomed: 'Amaldiçoado',
    beast: 'Fera',
    firebug: 'Vagalume',
    guardian: 'Guardião',
    loner: 'Solitário',
    hardline: 'Rigoroso',
    machine: 'Máquina',
    temperance: 'Temperança',
    torch: 'Tocha',
    shadow: 'Sombra',
    sorcerer: 'Feiticeiro',
    songbird: 'Canário'
  },

  blasphemyNames: {
    tension: 'Tensão',
    ardence: 'Ardor',
    flux: 'Fluxo',
    vector: 'Vetor',
    gate: 'Portão',
    smother: 'Sufoco',
    whisper: 'Sussurro',
    edit: 'Edit',
    bind: 'Vínculo',
    palace: 'Palácio',
    jaunt: 'Assombração',
    sympathy: 'Simpatia'
  }
};
