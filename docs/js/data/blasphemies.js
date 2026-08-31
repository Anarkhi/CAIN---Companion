/**
 * CAIN RPG Blasphemies Data
 * Each blasphemy has a passive ability and multiple powers (pick 2 at creation).
 * All exorcists also have BLAST as a base blasphemy.
 * Sourced from bundle.js (source of truth for displayed content).
 */

export const BLASPHEMIES = [
  {
    id: 'tension',
    name: 'Tension',
    flavor: "Fact: Tension users are highly likely to experience 'locked in' syndrome episodes at least semi-regularly until they are able to master their powers. See field manual.",
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
        description: 'When you or a visible ally in short range of you would mark stress from external harm, you can intervene by answering the following questions: Can you reach your target in time? Is there any part of the environment you can use to shield your target? Is your heart in this? You create a flash tension field of incredible strength, blocking damage. For each yes answer, roll 1d6. For every 2+ rolled reduce stress suffered by 1, and for every 6 rolled reduce it by 2. This could reduce stress suffered to 0. After using this power, lose its use until you rest.'
      },
      {
        id: 'tension_stasis',
        name: 'Stasis',
        tags: ['1 scene', 'Curse', 'Short'],
        burst: 'required',
        description: "With a gesture, you can lock yourself or a CAT sized group of humans or exorcists in a tension cage that covers them like a second skin, paralyzing them. If a human is hostile or unwilling, roll PSYCHE, and only spend the burst on success. Once trapped, your target is locked in, unable to move or act for the scene, and is immune to all harm and effects from the outside. The effect only ends once the scene passes and you cannot end it earlier. They can be moved around like a (very stiff) object and are fully sensate while inside, though they can see as though looking through a thick pane of glass and don't need to breathe."
      },
      {
        id: 'tension_severance',
        name: 'Severance',
        tags: ['Instant', 'Short'],
        burst: 'required',
        description: 'You can project a tension field of incredible strength over any edge, as obvious as a blade and as subtle as a fingernail, and use it as a cutting implement. Roll PSYCHE to cut an object or opponent with a clean and decisive blow, only spending a psyche burst on success. Gain +1D if you are striking to protect another person. Gain +1D against immobile objects or opponents.'
      },
      {
        id: 'tension_malleate',
        name: 'Malleate',
        tags: ['Until rest', 'Transmute', 'Adjacent'],
        burst: 'required',
        description: 'You can invert and infuse a tension field to make an area of nonliving matter incredibly pliable and soft. The size of this block of matter you can affect is affected by CAT. Choose one of the following effects, then you may gain or grant +1D when you or any ally next acts to take advantage of this power: Rubber (bouncy and springy), Mud (thick, pliable and sticky, difficult to move through), or Liquid (melts into liquid). This power may easily affect the parameters of rolls, such as difficulty and risk. When the effect expires, the matter slowly reverts to its original state and form.'
      },
      {
        id: 'tension_fortress',
        name: 'Fortress',
        tags: ['Until rest', 'Summon', 'Short'],
        burst: 'required',
        uses: 'scene',
        description: 'Once a scene, you can create a spot tension field with a size determined by up to CAT that appears as a large plane of shimmering force, invisible to humans. It can only exist as a flat plane (no bends or curves), and intersect or overlap any nonliving material, but otherwise is as hard as a solid object and prevents all living and nonliving matter and energy from crossing it. It has a 2+CAT talisman for its durability, which can take damage and be ticked up like an execution talisman by opponents. The field lasts until destroyed, until used again, or until rest.'
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
        description: 'Create a fierce blast of destructive energy at a location in range with blast area up to CAT. Roll PSYCHE, gain +1D for each yes answer: Are you willing to cause indiscriminate harm? Are you willing to let anger control the outcome? If at least one yes, area is ALWAYS max CAT and allies in area take 2 stress.'
      },
      {
        id: 'ardence_sabre',
        name: 'Sabre',
        tags: ['Instant', 'CAT range'],
        burst: 'required',
        description: 'Release a blast of energy in a highly destructive beam. The beam goes in a straight line in a range equal to CAT, piercing through walls, doors, and obstructions effortlessly. It is extremely loud and bright. Roll PSYCHE for its effects, only spending a psyche burst on success. You may optionally lift the limiter on this ability when using it. If you do, for every 6 result you roll when using this ability, this ability inflicts 1 extra slash on a talisman, but you also take 2 stress, which could kill you or cause you an injury. This stress cannot be reduced or ignored in any way.'
      },
      {
        id: 'ardence_void',
        name: 'Void',
        tags: ['Instant', 'Short'],
        burst: 'required',
        description: 'Create a flash vacuum by burning the air. Affects area up to CAT. Choose: Weak (sucks in loose objects), Medium (humans/exorcists thrown off feet), or Strong (sins/vehicles affected, glass shattered). Grant +1D for taking advantage.'
      },
      {
        id: 'ardence_hell',
        name: 'Hell',
        tags: ['Until Rest', 'Transmute', 'Adjacent'],
        burst: 'required',
        description: 'Dump energy into the ground and anything touching it in CAT+2 area. Choose hot or cold. Effects: Simmer (discomfort), Poach (deadly area for humans), or Boil (deadly to humans, 2 stress to sins/exorcists remaining longer than a scene).'
      },
      {
        id: 'ardence_storm',
        name: 'Storm',
        tags: ['Entire Hunt', 'Transmute', 'Extreme'],
        burst: 'variable',
        description: 'Spend any number of psyche bursts to affect microclimate in CAT+2 area. Choose effects: Clear, Rain, Fog, Cold, Gale. One choice per burst spent. Lasts whole mission. Lose use until rest.'
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
        description: "Many of your Flux powers give you this hook. When the hook resolves, roll 1d6: 1. Permanently add to your agenda 'Prove that you are the real you.' If you gain this result again, you immediately suffer sin overflow. 2. Mysterious injuries open up. You take an injury, which could kill you. 3. You disappear until rest. You return if there's a conflict scene. When you return, you take 2 stress. 4. You find you are wearing someone else's clothes. Erase your entire kit this mission, but regain any spent kit points. 5. Your body is different. For the remainder of this mission, pick a skill you have 1 or more dice in. It now rolls 0d. After the mission, you revert. 6. Your face looks a little different. The changes are permanent."
      }
    ],
    powers: [
      {
        id: 'flux_stop',
        name: 'Stop',
        tags: ['Instant', 'Transmute', 'Self'],
        burst: 'variable',
        description: 'You spend up to three psyche bursts to stop local time in an area around you equal to CAT. Roll 1d6 per psyche burst spent and add them together - that is how many seconds you have. You can perform one activity then the effect ends. You cannot use psychic powers during. Then, gain temporal instability.'
      },
      {
        id: 'flux_quickening',
        name: 'Quickening',
        tags: ['Instant', 'Adjacent'],
        burst: 'required',
        description: 'You can accelerate the natural healing of your body or those of others. Immediately heal 1d3 stress on yourself or another target. If your target is injured, increase this by +1. You may heal a CAT sized group of dying or injured humans in short range. Then, gain temporal instability.'
      },
      {
        id: 'flux_reversal',
        name: 'Reversal',
        tags: ['Instant', 'Adjacent'],
        burst: 'required',
        description: "By touching an object up to CAT size, you can reverse its passage through time for the last hour. This could physically move the object, revert damage on an object, etc. If it would cause damage or impact, roll PSYCHE for it. It cannot reverse life on non-living matter, such as corpses, but can temporarily move them and revert damage. You can stop this effect by willing it."
      },
      {
        id: 'flux_schism',
        name: 'Schism',
        tags: ['1 Scene', 'Transmute', 'Adjacent'],
        burst: 'required',
        description: "You can create a bubble of altered time equal to CAT area, opening a window into one day in the past or future. Things removed from the bubble from the past or future timeline simply disappear until they move back into the bubble. The bubble represents an alternate timeline, so anything altered inside of it will not show up in the present or future timeline. Gain or grant +1D when you or any ally next acts to take advantage of this power."
      },
      {
        id: 'flux_stutter',
        name: 'Stutter',
        tags: ['Instant', 'CAT range'],
        burst: 'required',
        description: 'You can briefly reverse time in order to alter causality for any event that happened as a result of an action roll made by you or a visible ally in CAT range, instantly after you see the result. Re-roll the action roll completely, taking the second result as final. When you use this power, gain temporal instability. If you use it again before you rest, gain 1d3 temporal instability instead.'
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
        description: "With a touch, you can imbue velocity into yourself or another object or living being and send it flying. The combined size of the object or being and the range you send them must equal your CAT+2 or less. Once sent flying, the direction of your target cannot be changed. You can alternately remove all velocity by touching an object or person of CAT+2 size. Roll PSYCHE for this power's effects, only spending a psyche burst on success."
      },
      {
        id: 'vector_lift',
        name: 'Lift',
        tags: ['1 scene', 'Charm', 'Self'],
        burst: 'required',
        description: "Reverse gravity's effect on yourself and a CAT sized group. Benefits: walk/climb vertical surfaces, slow fall at will (no fall damage), glide CAT range distance (need height)."
      },
      {
        id: 'vector_current',
        name: 'Current',
        tags: ['Until rest', 'Transmute', 'CAT+2 range'],
        burst: 'required',
        description: 'Create a persistent Vector force in a line CAT+2 long, street width. Pushes in one direction. Allies moving with it gain +1D. Moving against it is hard. Actions against those struggling gain +1D. Dismiss at will.'
      },
      {
        id: 'vector_bullet',
        name: 'Bullet',
        tags: ['Instant', 'CAT+1 range'],
        burst: 'required',
        description: 'Imbue velocity into air at fingertips creating pressurized air bullets. Roll PSYCHE, only spend burst on success. +1D from elevated position. +1D when shooting to disarm/distract/disable.'
      },
      {
        id: 'vector_finesse',
        name: 'Finesse',
        tags: ['Instant', 'CAT range'],
        burst: 'none',
        description: "Passive: Manipulate threads of force for fine motor skills at half CAT range. Need line of sight but path can be blocked. Can pick up/move objects no bigger than a laptop. Roll relevant skill."
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
      description: "You gain +1 KP. You can stow or retrieve items inside your pocket, which can hold a combined total of items worth up to 3 KP. Items are stored in an extra-dimensional space, hidden and safe. The pocket is attached to your clothes and if they are destroyed, items inside pop out."
    },
    powers: [
      {
        id: 'gate_tear',
        name: 'Tear',
        tags: ['Until Rest', 'Summon', 'CAT range'],
        burst: 'required',
        description: 'Create two connected points in CAT range (must see both). A portal connects them. Objects/beings up to half CAT can move through. Momentum preserved. Grant +1D for taking advantage.'
      },
      {
        id: 'gate_pinch',
        name: 'Pinch',
        tags: ['Instant', 'Special range'],
        burst: 'required',
        description: 'Move a single being/object you can see next to you by pinching space. Combined size + distance must be CAT+2 or less. Roll PSYCHE for unwilling targets. Target appears next to you, ignoring obstructions. Grant +1D for taking advantage.'
      },
      {
        id: 'gate_bloom',
        name: 'Bloom',
        tags: ['1 scene', 'Summon', 'Short'],
        burst: 'required',
        description: 'Create CAT+1 controllable duplicates of your limbs on surfaces in short range. Stuck in place. Control like normal limbs, make action rolls through them. You take stress they would take. Gain or grant +1D for taking advantage.'
      },
      {
        id: 'gate_maze',
        name: 'Maze',
        tags: ['Entire Hunt', 'Transmute', 'Adjacent'],
        burst: 'required',
        description: "Rearrange CAT area: create/remove doors and windows, add corridors, change gravity direction inside rooms, resize rooms, rearrange furniture. Cannot remove rooms entirely. Admin rolls 1d6 per choice - on a 1, Admin gains one use against you. Grant +1D for taking advantage."
      },
      {
        id: 'gate_transmission',
        name: 'Transmission',
        tags: ['Instant', 'CAT+2 range'],
        burst: 'required',
        description: "Instantly teleport to any area in CAT+2 range. Admin asks: Are you familiar? Can you see destination? Are you calm? Rolls 1d6 per 'no'. On a 1, off target. On double 1, also take 2d3 stress."
      }
    ]
  },
  {
    id: 'smother',
    name: 'Smother',
    flavor: "...outweighed by utility, therefore users of this blasphemy are good candidates for organ transplantation (see TM ref 4456).",
    description: 'Suppress the innate properties of the universe. Lie to God.',
    passive: {
      id: 'smother_absentia',
      name: 'Absentia',
      image: 'img/passives/absentia.png',
      description: "You can improve the CAT of any of your Smother powers by +2 when you use them, to a max CAT of 7. However, when you do, gain the Absentia Hook. When the hook fills up, you take an injury and black out. When you wake up, you are missing a body part (roll 1d6): 1. Eye, 2. Nose, 3. Ear, 4. Finger, 5. Toe, 6. Nothing. Missing parts might make some rolls hard or risky."
    },
    powers: [
      {
        id: 'smother_abstract',
        name: 'Abstract',
        tags: ['1 scene', 'Transmute', 'Short'],
        burst: 'required',
        description: "Remove recognizable properties of CAT+1 objects. Chosen objects can no longer be used for intended purpose and no one can recognize them. Weapons can't fire, doors can't open, etc. Grant +1D for taking advantage."
      },
      {
        id: 'smother_smooth',
        name: 'Smooth',
        tags: ['1 scene', 'Transmute', 'Short'],
        burst: 'required',
        description: 'Remove friction from a CAT sized group or area. Targets become incredibly slippery. Hard for anyone to stand/climb/move normally in area. Roll PSYCHE for hostile targets, only spend burst on success. Grant +1D for taking advantage.'
      },
      {
        id: 'smother_hollow',
        name: 'Hollow',
        tags: ['Until Rest', 'Charm', 'Adjacent'],
        burst: 'required',
        description: "Remove weight from a single object/human/exorcist (to 1 lb). Size must be CAT or lower. Can end any time. Roll PSYCHE for creative uses, only spend burst on success. Grant +1D for taking advantage. This power ends on its previous target if used again."
      },
      {
        id: 'smother_blind',
        name: 'Blind',
        tags: ['1 scene', 'Transmute', 'Adjacent'],
        burst: 'required',
        description: 'CAT number of objects/beings/locations you touch cease producing sound, reflecting light, or both. Targeting a person allows effect to move with them. Targeting location affects area, can filter to allow light/sound inside but not exit. Grant +1D for taking advantage.'
      },
      {
        id: 'smother_dark_age',
        name: 'Dark Age',
        tags: ['Until Rest', 'Charm', 'Short'],
        burst: 'required',
        description: 'Produce a strong field disabling technology in CAT area (moves with you). Choose up to 3: Electricity, Internet, Combustion engines, Running Water, Open fires, Door handles/latches/etc. Grant +1D for taking advantage. Can end willingly but must end all at once.'
      }
    ]
  },
  {
    id: 'whisper',
    name: 'Whisper',
    flavor: "This alter self usually manifests in puberty and only you can see it, remaining invisible even to other exorcists. Common belief holds the 'shadow' seen is a component of your own future death.",
    description: 'Your shadow is animate and hungry. It knows the future.',
    passive: {
      id: 'whisper_shadow',
      name: 'Shadow',
      image: 'img/passives/shadow.png',
      description: "You harbor a separate being (your shadow) that follows you everywhere. Intangible, invisible to everyone. Has its own mind and senses, moves in short range. Retreats in bright light. Talking to it costs 1 stress after any interaction ends. It has no obligation to tell you the truth unless you use your powers. The Admin answers for it."
    },
    powers: [
      {
        id: 'whisper_omen',
        name: 'Omen',
        tags: ['Instant', 'Self'],
        burst: 'required',
        description: "Ask your shadow 'What will happen if I X'. Get a brief impression of the future. Gain +1D when you or an ally next acts on the answer. Pre-roll the risk die - you can back out, but if you follow through later, use the pre-rolled die."
      },
      {
        id: 'whisper_shiver',
        name: 'Shiver',
        tags: ['1 scene', 'Charm', 'Self'],
        burst: 'required',
        description: "When looking for something, send a psychic pulse to CAT range. While target is in range, feel cold/discomfort. Never hard to track while active. +1D in short range to track/locate."
      },
      {
        id: 'whisper_dissect',
        name: 'Dissect',
        tags: ['Instant', 'CAT range'],
        burst: 'required',
        description: "Examine a human/exorcist in CAT range, roll PSYCHE. Ask one question per success (3 words max answer): Is this person lying? Main emotion? Where from? Where going? Grant +1D when acting on answers."
      },
      {
        id: 'whisper_precognition',
        name: 'Precognition',
        tags: ['Instant', 'Self'],
        burst: 'required',
        description: "Flash back to a vision of the present moment. Make an action roll in the past - could change situation or set up allies. Cannot alter established facts. Take 1 nonlethal stress if complicated, 3 if convoluted."
      },
      {
        id: 'whisper_omnipresence',
        name: 'Omnipresence',
        tags: ['Instant', 'CAT+2 range'],
        burst: 'none',
        uses: 'rest',
        description: "When an ally is in a scene without you (in CAT+2 range), walk in having predicted events. Roll PSYCHE, choose per success: nobody following, hidden, can enter without distraction, have a useful tool. Lose use until rest."
      }
    ]
  },
  {
    id: 'edit',
    name: 'Edit',
    flavor: "Fact: CAIN doctrine clearly states the existence of 'alternate' realities is currently unproven.",
    description: 'The way things are is not the way they had to be. Filter threads of possibilities.',
    passive: {
      id: 'edit_mimic',
      name: 'Mimic',
      image: 'img/passives/mimic.png',
      description: "Alter minor appearance when resting: body features, aesthetics, age (13-88). Always look faintly similar. Clothes change to fit. Cannot hide sin marks or restore missing parts."
    },
    powers: [
      {
        id: 'edit_uniform',
        name: 'Uniform',
        tags: ['Until Rest', 'Charm', 'Self'],
        burst: 'required',
        description: "Make yourself officially part of any profession/group with 5+ members, with uniform, equipment, ID, etc. Reality alters to accommodate. Grant +1D for taking advantage."
      },
      {
        id: 'edit_absurd',
        name: 'Absurd',
        tags: ['1 scene', 'Curse', 'Short'],
        burst: 'required',
        description: "Swap up to a group of humans/exorcists with alternate timeline versions. Can change: what they're wearing, physical appearances. Roll PSYCHE for hostile targets. Grant +1D for taking advantage."
      },
      {
        id: 'edit_utility',
        name: 'Utility',
        tags: ['Until Rest', 'Short'],
        burst: 'required',
        description: "Cause any mundane object/tool/vehicle (fits in small room) to appear on a surface. No KP cost. Admin chooses drawback(s): used/poor quality, someone's real item, 'off' somehow, missing parts. Disappears after rest."
      },
      {
        id: 'edit_filter',
        name: 'Filter',
        tags: ['1 scene', 'Transmute', 'Adjacent'],
        burst: 'required',
        description: "Produce field in small room area (must contain you). +1D to examine contents. Can: make matter transparent/opaque, change lighting, move objects without touching, pin objects in space, safely dissect inanimate objects."
      },
      {
        id: 'edit_copy',
        name: 'Copy',
        tags: ['1 scene', 'Summon', 'Adjacent'],
        burst: 'required',
        description: "Create a temporary exact copy (doppelganger) of a human or exorcist. Simple, obedient, limited intelligence. Follows 1-2 sentence instructions. Dissolves when scene ends or takes harm. Rolls just 1d6 for anything."
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
      description: "You have the forbidden ability to bind Sins. You have the obedient essence of a minor sin bound to you. Your BOUND SIN is animalistic in form - you determine what form it takes. It can understand language but cannot speak, and is invisible to humans. It follows simple orders, uses your skills, CAT 0 capabilities. If it takes any stress, it is banished for the scene (or absorb stress to prevent). In a conflict scene, sacrifice your action to let it act."
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
        description: "If you have the bind blasphemy and are either CAT 5 or on the brink of death, you can beckon the infinite blue. Summoning the King immediately initiates an apocalyptic force in an area around the size of a town (around CAT 5), centered on you. Sins and exorcists in the area, including you, roll 1d6 and add their category. If the result is 9 or higher, they survive, otherwise they are obliterated. Everything else in the area CAT 5 or under is annihilated. Summoning the King can only be done once in a game of CAIN."
      },
      {
        id: 'bind_forbidden_spirit',
        name: 'Forbidden Spirit',
        tags: ['Instant', 'Self'],
        burst: 'required',
        description: "You can empower your sin for one action. The action gains +1D and causes it to undergo a monstrous transformation. It becomes a size equal to CAT+1 and can easily move, lift, strike, or throw objects or beings of an equal size. Roll PSYCHE for its effects. After the action, it reverts. When absorbing stress for your sin as a consequence of this action, take 1 less."
      },
      {
        id: 'bind_surrender',
        name: 'Surrender',
        tags: ['Until Rest', 'Charm', 'Self'],
        burst: 'required',
        description: "Draw on your sin's energy to partially fuse with its essence. Manifest a temporary sin mark and roll for location and ability, which you gain until rest. You may gain 1 sin to re-roll the mark ability, any number of times while active. If you hit sin overflow while active and successfully resist, you manifest the chosen sin mark permanently."
      },
      {
        id: 'bind_horde_spirit',
        name: 'Horde Spirit',
        tags: ['1 scene', 'Self'],
        burst: 'required',
        description: "Empower sin for scene. Next traversal/movement action gains +1D. Can transform into vehicle/creature up to CAT size, CAT speed, partly visible, room for half CAT passengers. Can glide short distance."
      },
      {
        id: 'bind_hunter_spirit',
        name: 'Hunter Spirit',
        tags: ['1 scene', 'Self'],
        burst: 'required',
        description: "Empower sin for scene. Next tracking/observation action gains +1D. Can separate to extreme range, telepathic communication, gains flight and enhanced senses. Can dissociate to use sin's senses instead of yours."
      },
      {
        id: 'bind_penumbra',
        name: 'Penumbra',
        tags: ['Until Rest', 'Summon', 'Adjacent'],
        burst: 'required',
        description: "Create a circle up to CAT+1 size. Choose: White mantle (blocks sins) or Black mantle (blocks humans/exorcists, invisible to humans). Can invert (prevent exit). Has 4+CAT talisman for durability."
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
      description: "You and allies you rest with can enter your psychic palace while resting. Improves resting rolls for you and one ally by +1. Palace is a mental dream space (large home/mansion). Harm shunts people out. Entering leaves body defenseless and insensate."
    },
    powers: [
      {
        id: 'palace_cellar',
        name: 'Cellar',
        tags: ['Instant', 'Charm', 'Infinite Range'],
        burst: 'required',
        description: "Simulate situations inside your palace. Set up half CAT allies even if not physically present. Describe training/preparation for current situation. Setup is never risky but cannot lower risk. Take 1d3 nonlethal stress to re-roll on failure."
      },
      {
        id: 'palace_foyer',
        name: 'Foyer',
        tags: ['1 scene', 'Summon'],
        burst: 'required',
        description: "Your palace has a tulpa (servant). Active: Aid on research/crafting/investigation (+1D, extra slash per 6), OR briefly manifest as real person for scene (CAT 0, rolls 2d for butler tasks, 0d otherwise, harm banishes)."
      },
      {
        id: 'palace_library',
        name: 'Library',
        tags: ['Instant', 'Self'],
        burst: 'none',
        description: "Access library of psychic information. +1D on any investigation/research roll. Afterwards Admin rolls 1d6 for: rare info? forbidden? pertinent to a group? For each 1, take 2 nonlethal stress."
      },
      {
        id: 'palace_bar',
        name: 'Bar',
        tags: ['Instant', 'Self'],
        burst: 'none',
        uses: 'scene',
        description: "Once a scene, open any closed door to your actual physical bar (well stocked, snacks, drinks). Roll 1d3+1 charges when resting inside. Spend: 1 charge = erase 1 stress, 2 charges = untick 1 on all hooks, 3 charges = remove an injury."
      },
      {
        id: 'palace_parlor',
        name: 'Parlor',
        tags: ['1 scene', 'Investigation area'],
        burst: 'required',
        description: "Name a person/group in investigation area to bring their psychic shadow into palace. Willing targets: actual consciousness (body goes unconscious). Unwilling: psychic copy (roll PSYCHE). Not obligated to behave differently. Grant +1D for taking advantage."
      }
    ]
  },
  {
    id: 'jaunt',
    name: 'Jaunt',
    flavor: "Jaunt users are the most likely of all exorcists to 'hollow' during sleep and leave an empty shell. This occurrence is very rare but its cause is unknown and it is 100% fatal.",
    description: 'Slice the body and soul with a carving knife.',
    passive: {
      id: 'jaunt_ghostwire',
      name: 'Ghostwire',
      image: 'img/passives/ghostwire.png',
      description: "Join your mind telepathically with CAT number of willing people you touch. Within long distance: talk telepathically, sense ambient emotions. Lasts until used again, someone goes unconscious, or connection closed."
    },
    powers: [
      {
        id: 'jaunt_threads',
        name: 'Threads',
        tags: ['Until Rest', 'Charm', 'Self'],
        burst: 'required',
        description: "Close your eyes and see through eyelids: see living beings through walls (CAT range), see grace traces like trails of light, +1D to track living beings/sins. Cannot see non-living matter (effectively blind). Ends when you open eyes or rest."
      },
      {
        id: 'jaunt_possession',
        name: 'Possession',
        tags: ['1 Scene', 'Curse', 'Short'],
        burst: 'required',
        description: "Possess a human, animal, or corpse you can see for a scene. Your real body is defenseless. Can't force self-harm. Uses your skills but target's body/equipment. Kicked out if body takes harm. Grant +1D for taking advantage."
      },
      {
        id: 'jaunt_geist',
        name: 'Geist',
        tags: ['1 scene', 'Self'],
        burst: 'required',
        description: "Shunt perception out of body, roam CAT+2 range as psychic energy. Fly at CAT speed, invisible, pass through walls. Cannot interact with or be affected by physical world. Can't use own powers. If form destroyed: 1 stress, power ends, can't reuse until scene passes."
      },
      {
        id: 'jaunt_passenger',
        name: 'Passenger',
        tags: ['1 Scene', 'Curse', 'Extreme'],
        burst: 'required',
        description: "Pull half CAT willing people into your body. They share control and senses. Can surrender control for them to use their skills with your body/gear. They can't use psychic powers. You suffer their consequences."
      },
      {
        id: 'jaunt_desecrate',
        name: 'Desecrate',
        tags: ['Instant', 'Adjacent'],
        burst: 'none',
        uses: 'rest',
        description: "Force life into CAT group of corpses by touching eyes. Ask 3 total questions. Can't reuse on same corpses. Accesses memories (needs head/brain). Must answer truthfully within their knowledge. Lose use until rest."
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
      description: 'At mission start, roll on the resonance table (1d3 then 1d6). When using a resonant item, gain +1D. Spend a psyche burst any time to roll additional resonance. Keep up to three, benefit from one at a time.'
    },
    powers: [
      {
        id: 'sympathy_psychometry',
        name: 'Psychometry',
        tags: ['Instant', 'Adjacent'],
        burst: 'none',
        uses: 'rest',
        description: "Touch objects to view their memories (back CAT days). Roll PSYCHE, ask per success: Where has it been? Who touched it? What used for? What connected to? Memories are impressionistic. Lose use until rest."
      },
      {
        id: 'sympathy_bond',
        name: 'Bond',
        tags: ['1 Scene', 'Charm'],
        burst: 'required',
        description: "Bond with held item: gain resonance, use as CAT 0 weapon, item becomes indestructible, recalls to hand from short range. Can discharge for supernatural CAT strike (roll PSYCHE with +1D), then ends and destroys item."
      },
      {
        id: 'sympathy_amplify',
        name: 'Amplify',
        tags: ['1 Scene', 'Summon', 'Adjacent'],
        burst: 'required',
        description: "Expand mundane properties of a non-weapon item to extreme levels (up to CAT scale). Auto-resonance with it. Example: light brightness, car speed, door strength. Item is still mundane. Affects difficulty/risk."
      },
      {
        id: 'sympathy_diplomacy',
        name: 'Diplomacy',
        tags: ['Instant', 'Short'],
        burst: 'required',
        description: "Make a simple request of an object or ask yes/no question. Door can open/hold shut without key, computer can turn off/find info, car can start without key. Affect objects up to CAT size. Roll PSYCHE or social skill if needed."
      },
      {
        id: 'sympathy_alliance',
        name: 'Alliance',
        tags: ['1 Scene', 'Summon', 'Short'],
        burst: 'required',
        description: "An object up to CAT size in short range can now set up an ally, rolling 1d6 (or PSYCHE if resonant). Object can take/cause consequences. Allies must interact with it. Object doesn't actually move but fortune bends around it."
      }
    ]
  },
  {
    id: 'tongue',
    name: 'Tongue',
    expansion: 'gff3',
    flavor: "...rooted in the language center of the brain, suggesting connections to recorded manifestations of 'ecstatic speech' and 'divine language'.",
    description: 'Your word is law.',
    passive: {
      id: 'tongue_the_word',
      name: 'The Word',
      image: 'img/passives/tongue.png',
      description: "Your powers have no effect if you can't speak or sound is suppressed. Using the same power more than once before resting has ramping effects: 2nd time: +1 CAT (min 2), take 1 irreducible stress. 3rd time: +2 CAT (min 3, max 7), +1D, take 3 irreducible stress, anyone in short range deafened for hunt. 4th time: CAT 7, automatic successes, then suffer instant death. Anyone in short range permanently deafened."
    },
    powers: [
      { id: 'tongue_bang', name: 'Bang', tags: ['Instant', 'CAT range'], burst: 'required', description: "You say 'bang'. Massive influx of force affecting half CAT area with center in range. Affects everything except you. Roll PSYCHE, only spend burst on success. +1D if environment is quiet. +1D if favorable acoustics." },
      { id: 'tongue_silence', name: 'Silence', tags: ['1 scene', 'Transmute', 'Long'], burst: 'required', description: "You say 'silence' and choose area up to CAT size. Everything stops producing noise. Anything mundane that makes loud noise stops functioning. Your powers that create loud noise don't work inside. Grant +1D for taking advantage." },
      { id: 'tongue_narrate', name: 'Narrate', tags: ['Instant', 'Short'], burst: 'required', description: "Pick up to CAT group, an object/location, and a verb. Narrate: '(He/she/they) was/were (verb)ing the (noun).' Roll PSYCHE, only spend burst on success. On success it becomes true. Cannot create anything, change anyone, or directly harm anyone." },
      { id: 'tongue_die', name: 'Die', tags: ['Instant', 'Curse'], burst: 'required', description: "You say 'die' and instantly kill all humans in area up to CAT size centered on you. Not optional, no choosing. At end of hunt: if killed one person, permanently fill 1 sin box. If killed more than one, permanently fill 1d3 sin boxes." },
      { id: 'tongue_snap_click_pop', name: 'Snap, Click, Pop', tags: ['Instant', 'Short'], burst: 'required', description: "Say 'Snap', 'Click', or 'Pop' to produce an effect that would normally produce that sound. 'Click' to open a locked door, push a button. 'Snap' to break a weapon or arm. 'Pop' to blow a tire or shoot a gun. Roll PSYCHE if risky or unclear. Otherwise always successful. Grant +1D for taking advantage." }
    ]
  },
  {
    id: 'track',
    name: 'Track',
    expansion: 'gff3',
    flavor: "Fact: The loose or leftover cursed objects created by this power are curated in Temerity archive 52.",
    description: 'Check, one two, one two.',
    passive: {
      id: 'track_playlist',
      name: 'Playlist',
      image: 'img/passives/track.png',
      hasNotes: true,
      description: "You have a powerful cursed object - a music player (tape player or cd player with headphones). Doesn't take KP, can form/reform it at will. Make a real playlist of 6 songs at start of each hunt. Some powers key off this playlist. Music can be heard diagetically if you choose."
    },
    powers: [
      { id: 'track_vibe', name: 'Vibe', tags: ['1 scene', 'Self', 'Charm'], burst: 'required', uses: 'scene', description: "Play a track. Decide if Melancholy, Chill, or Angsty. Melancholy: erase 1 stress on failed rolls. Angst: +1D after gaining injury/hook/affliction. Chill: erase 1 stress at end of scene if no risky/hard rolls." },
      { id: 'track_replay', name: 'Replay', tags: ['Whole Mission', 'Charm', 'Short'], burst: 'required', description: "Passive: Record a 10-second activity (keep 3 recordings). Active: Spend burst to replay a psychic double. Tangible, can inflict harm, de-manifests after 10 seconds. Roll PSYCHE if effects unclear." },
      { id: 'track_boost', name: 'Boost', tags: ['Instant', 'Short'], burst: 'none', uses: 'scene', description: "Once a scene before a PSYCHE roll. Pick a track, record first 3 digits of track length. For each die matching a recorded digit, +1 CAT (min +1, max +3, max CAT 7)." },
      { id: 'track_shuffle', name: 'Shuffle', tags: ['Instant', 'Transmute', 'CAT area'], burst: 'required', description: "Choose any number of objects/vehicles/people in area (half CAT size max). Instantly swap positions and momentum. Must swap similar size/mass. Roll PSYCHE if needed. Grant +1D for taking advantage." },
      { id: 'track_title', name: 'Title', tags: ['Instant', 'Short', 'Summon'], burst: 'required', description: "Play a track. Manifest a psychic manifestation based on any part of the title, up to CAT in size. Can create: object from title, human/animal from title, or energy/weather/force from title. Tangible but has aura of unreality. Roll PSYCHE if harmful/risky." }
    ]
  },
  {
    id: 'wire',
    name: 'Wire',
    expansion: 'gff3',
    flavor: "Fact: WIRE has only been discovered by CAIN in the last two years. Users may develop the ability to 'hear' phone lines and electric signals. Involuntary body modification is common.",
    description: "They're like veins, if you really think about it. You can even hear its heartbeat.",
    passive: {
      id: 'wire_main_artery',
      name: 'Main Artery',
      image: 'img/passives/wire.png',
      description: "You have a cell phone with better features (wireless internet access). Doesn't take KP. You can produce or remove it at will, forming it from psychic energy, even if you lose it."
    },
    powers: [
      { id: 'wire_disk', name: 'Disk', tags: ['Instant', 'Adjacent'], burst: 'required', description: "Touch a willing human/exorcist or object of CAT size and store them as a CD. Keep up to CAT+1 CDs. Reset between missions. Person stored is in stasis, no awareness. Putting CD in disk drive lets you read info. Activate CD to release contents in short range." },
      { id: 'wire_terminal', name: 'Terminal', tags: ['Until rest', 'Self', 'Charm'], burst: 'required', description: "Manifest a computer terminal from your body. Activities are hard while moving/under duress. Has fast internet regardless of location. Others can use your skills to gather info through it. First time in a scene: +1D." },
      { id: 'wire_deck', name: 'Deck', tags: ['1 Scene', 'Adjacent', 'Curse'], burst: 'required', description: "Flip a keyboard out from any object/person. While typing, interact with subject as if it were a computer. Roll PSYCHE or interfacing (whichever higher). First time per keyboard: +1D." },
      { id: 'wire_surge', name: 'Surge', tags: ['Instant', 'CAT+2 range'], burst: 'required', description: "Transpose yourself and up to CAT group through a phone line or networked computer, appearing instantly on the other side. Must see destination, know phone number, or know network address. Otherwise Admin decides where you end up." },
      { id: 'wire_call', name: 'Call', tags: ['Instant'], burst: 'required', description: "Call any human, sin, or exorcist. Only spend burst if they pick up. If they had no phone, one manifests. The phone disintegrates when you rest." }
    ]
  },
  {
    id: 'mother',
    name: 'Mother',
    expansion: 'gff3',
    flavor: "...continued efforts to contain Mother are showing reduced effectiveness.",
    description: "SHE WON'T GET OUT OF MY HEAD.",
    passive: {
      id: 'mother_knows_best',
      name: "Mother's Embrace",
      image: 'img/passives/mother.png',
      description: "When you sin overflow, you may gain a Mother's Mark instead of a regular sin mark, and roll 2d6 picking lowest if you choose to keep control. Mother's Mark does not lower sin overflow cap but counts as a sin mark otherwise. Roll 1d6 for aspect: 1. New eye in forehead, 2. Patch loses color/gains stripes, 3. New pupil in eye, 4. New tongue, 5. New limb (elongated), 6. Spiraling patterns."
    },
    powers: [
      { id: 'mother_unravel', name: 'Unravel', tags: ['Until Rest', 'Self', 'Charm'], burst: 'required', description: "Unravel your body into a pulsing mass. Can reform body parts anywhere in mass. Cannot use own psychic powers. Can spread through small spaces, spread over CAT area, or compact to luggage size. Roll PSYCHE for effects. Humans are terrified (+1D). Reform when resting or ending power." },
      { id: 'mother_polyp', name: 'Polyp', tags: ['Entire Hunt', 'Charm', 'Adjacent'], burst: 'none', description: "Remove and place your eyes/mouth on a person/surface. See and speak from them normally. Roll PSYCHE for unwilling targets. Take stress they would take. Can take 1 stress to use a blasphemy power from them at CAT+2 range. +1D if grants advantage." },
      { id: 'mother_knot', name: 'Knot', tags: ['Entire Hunt', 'Self'], burst: 'none', description: "When taking stress, capture as a knot (reduce by 2 per knot, max 3 knots). At end of any scene with knots, roll 1d6: 1-3: 1d3 stress + burst knot, 4-5: 1 stress + burst knot, 6: no stress + burst knot. Burst stress is 2 irreducible." },
      { id: 'mother_colony', name: 'Colony', tags: ['Self', 'Ally', 'Short'], burst: 'none', description: "Gain 1d3 stress, then you or an ally in range gains a fleshy shield that absorbs 2 stress from external harm. If already has shield, increase by +2 but also take 1d3 stress." },
      { id: 'mother_coil', name: 'Coil', tags: ['Instant', 'Short'], burst: 'required', description: "Your limb peels apart and lashes at target in short range like a whip. Roll PSYCHE for effects. +1D if 3 or fewer stress boxes remaining. +2 CAT if sin overflowed this mission." }
    ]
  }
];
