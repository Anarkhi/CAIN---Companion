/**
 * CAIN RPG Agendas Data
 * Each agenda has agenda items (normal + bolded) and a list of abilities.
 */

export const AGENDAS = [
  {
    id: 'doomed',
    name: 'Doomed',
    image: 'img/agendas/doomed.png',
    agendaItems: ['Demonstrate your humanity'],
    boldedItems: ['Demonstrate your distance from humanity'],
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
    id: 'beast',
    name: 'Beast',
    image: 'img/agendas/beast.png',
    agendaItems: ['Get into a fight'],
    boldedItems: ['Hold Back'],
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
    id: 'firebug',
    name: 'Firebug',
    image: 'img/agendas/firebug.png',
    agendaItems: ['Solve Problems Creatively'],
    boldedItems: ['Take the simple solution'],
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
    id: 'guardian',
    name: 'Guardian',
    image: 'img/agendas/guardian.png',
    agendaItems: ['Protect your people'],
    boldedItems: ['Leave nobody behind'],
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
    id: 'loner',
    name: 'Loner',
    image: 'img/agendas/loner.png',
    agendaItems: ['Demonstrate your superior skill'],
    boldedItems: ['Let the mask slip'],
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
    id: 'hardline',
    name: 'Hardline',
    image: 'img/agendas/hardline.png',
    agendaItems: ['Follow Orders'],
    boldedItems: ['Disobey Orders'],
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
    id: 'machine',
    name: 'Machine',
    image: 'img/agendas/machine.png',
    agendaItems: ['Put the work before your own needs'],
    boldedItems: ['Take a break'],
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
    id: 'temperance',
    name: 'Temperance',
    image: 'img/agendas/temperance.png',
    agendaItems: ['Put people before the mission'],
    boldedItems: ['Harm someone intentionally'],
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
    id: 'torch',
    name: 'Torch',
    image: 'img/agendas/torch.png',
    agendaItems: ['Lead from the front'],
    boldedItems: ['Let another take the lead'],
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
    id: 'shadow',
    name: 'Shadow',
    image: 'img/agendas/shadow.png',
    agendaItems: ['Outshine your rival'],
    boldedItems: ['Let your rival outshine you'],
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
    id: 'sorcerer',
    name: 'Sorcerer',
    image: 'img/agendas/sorcerer.png',
    agendaItems: ['Demonstrate flashy displays of power'],
    boldedItems: ['Invite catastrophe'],
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
    id: 'songbird',
    name: 'Songbird',
    image: 'img/agendas/songbird.png',
    agendaItems: ['Get someone to do your bidding'],
    boldedItems: ['Do something selfless'],
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
    id: 'departed',
    name: 'Departed',
    image: 'img/agendas/departed.png',
    agendaItems: [''],
    boldedItems: [''],
    restriction: 'A character can only take this agenda if they are well and truly dead. You get its ability for free.',
    abilities: [
      { id: 'departed_that_terrible_weight', name: 'That Terrible Weight', description: "Once a session, the dead character can chip in when an ally makes a roll to let them re-roll the entire roll after they see the result, taking the second result as final." }
    ]
  },
  {
    id: 'moth',
    name: 'Moth',
    image: 'img/agendas/moth.png',
    agendaItems: ['Uncover hidden or uncomfortable truths about the world.'],
    boldedItems: ['Uncover hidden or uncomfortable truths about yourself.'],
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
    id: 'survivor',
    name: 'Survivor',
    image: 'img/agendas/survivor.png',
    agendaItems: [''],
    boldedItems: ['Survive'],
    restriction: 'Once taken, a character can only swap out of this agenda by spending two advances. Get its ability for free.',
    abilities: [
      { id: 'survivor_will_to_live', name: 'Will to Live', description: '+1 max stress. 1 in 6 chance of ignoring instant death (roll 1d6).' }
    ]
  },
  {
    id: 'demon',
    name: 'Demon',
    image: 'img/agendas/demon.png',
    agendaItems: ['Enrich yourself'],
    boldedItems: ['Give something valuable away'],
    restriction: 'You can spend scrip as kit points.',
    abilities: [
      { id: 'demon_black_market_stims', name: 'Black Market Stims', description: 'You can spend up to 2 scrip a mission as psyche bursts.' },
      { id: 'demon_supplier_connections', name: 'Supplier Connections', description: 'You gain a 1 scrip discount on all kit and aesthetic items, to a minimum of 1. This discount applies to all items at CAT 4+.' },
      { id: 'demon_shady_lender', name: 'Shady Lender', description: 'Between missions, you can choose to gain 1d3 scrip, but start the next mission with 1 injury.' },
      { id: 'demon_heartless', name: 'Heartless', description: 'You gain +1 scrip for executing sins.' },
      { id: 'demon_spotless', name: 'Spotless', description: 'Once a mission, you can destroy an aesthetic kit expansion you own worth 3 or more scrip instead of suffering an injury.' }
    ]
  }
];
