/**
 * CAIN RPG Cursed Items Data
 * From LEBA Association Homebrew
 * 
 * Cursed Items are specialized weapons created from executed sins.
 * Available at CAT 2+, cost 5 scrip, pulled out for 3 KP.
 * Each sin type has: appearance guidelines, curse effects, and selectable effects.
 */

export const CURSED_ITEMS = [
  {
    id: 'ogre',
    name: 'Ogre',
    source: 'leba',
    appearance: 'Giant, overwhelming, cold, filthy...',
    curse: 'Shrouds the area in darkness; Vomits miasma; Makes you suffocating to others; Does something dark, crushing, or vile.',
    effects: [
      {
        id: 'ogre_the_cold',
        name: 'The Cold',
        description: 'On round 3+ during a conflict scene, you deal +1 slash on your first action made with this item each round.'
      },
      {
        id: 'ogre_dirty_fumes',
        name: 'Dirty Fumes',
        description: 'You may exhume a puff of dense fog from this item, gain or grant +1D on the next roll taking advantage of this effect.'
      },
      {
        id: 'ogre_bulging_mass',
        name: 'Bulging Mass',
        description: 'Actions done to break down a CAT sized door, wall, or physical barrier with this item have a reduced difficulty.'
      }
    ]
  },
  {
    id: 'idol',
    name: 'Idol',
    source: 'leba',
    appearance: 'Glamorous, beautiful, cultic, fleshy...',
    curse: 'Entangle the hearts of others; Whispers disturbing secrets; Makes you obsessive; Does something emotionally crushing, manipulative, or shocking.',
    effects: [
      {
        id: 'idol_plastic_heart',
        name: 'Plastic Heart',
        description: "By warping flesh, you can modify up to CAT people's face and physique for the next CAT hours thanks to this item."
      },
      {
        id: 'idol_stockholm_love',
        name: 'Stockholm Love',
        description: 'You may captivate a captor or hostage with this item, gain or grant +1D on the next roll taking advantage of this effect.'
      },
      {
        id: 'idol_sweet_nothing',
        name: 'Sweet Nothing',
        description: "You are able to talk to others up to CAT distance with this item. They can talk back and you can speak in voices you've heard before."
      }
    ]
  },
  {
    id: 'hound',
    name: 'Hound',
    source: 'leba',
    appearance: 'Bloody, ragged, torn and mangled, brutal...',
    curse: 'Kill the innocents; Fire into the surrounding crowd; Makes you aggressive; Does something violent, obliterating, or maniac.',
    effects: [
      {
        id: 'hound_bloody_spikes',
        name: 'Bloody Spikes',
        description: 'You may expand an array of large spikes from your blood up to CAT area. If impaling a creature, slash their talisman once.'
      },
      {
        id: 'hound_revengeance',
        name: 'Revengeance',
        description: 'Actions done to pursue, move to, or jump up to a target in CAT distance with this item have a reduced difficulty.'
      },
      {
        id: 'hound_sharpen_eye',
        name: 'Sharpen Eye',
        description: 'Your service weapon is able to fire up to extreme range without being hard, including with this item or your other ranged weapons.'
      }
    ]
  },
  {
    id: 'centipede',
    name: 'Centipede',
    source: 'leba',
    appearance: 'Biological, venomous, bone-chilling, sadistic...',
    curse: 'Thrashes around uncontrollably; Injects venom in your veins; Makes you seethe; Does something messy, spiteful, or dripping with venom.',
    effects: [
      {
        id: 'centipede_hundred_bites',
        name: 'Hundred Bites',
        description: 'Actions done to restrain a target, or hold on to a structure, up to CAT size, with this item have a reduced difficulty.'
      },
      {
        id: 'centipede_venom_sack',
        name: 'Venom Sack',
        description: 'When using BLAST with this item, you may fire a venom projectile to target at long range instead of melee or short.'
      },
      {
        id: 'centipede_raging_spite',
        name: 'Raging Spite',
        description: 'When you would fail a roll with this item, you may gain one additional pathos, however you take 1d3 stress after consequences.'
      }
    ]
  },
  {
    id: 'toad',
    name: 'Toad',
    source: 'leba',
    appearance: 'Priceless, rich, bloated, sneaky, tricked...',
    curse: 'Swallows and steals thoughtlessly; Flood the room with mud; Makes you selfish; Does something crafty, flashy, or shocking.',
    effects: [
      {
        id: 'toad_sticky_finger',
        name: 'Sticky Finger',
        description: 'You may hide any thing worth up to 3 KP into this item. However, you can only hide one thing at a time for the duration.'
      },
      {
        id: 'toad_bag_of_holding',
        name: 'Bag of Holding',
        description: 'Once per scene, you may pull out a random item worth up to 3 KP at any moment, the item is always useful in some way.'
      },
      {
        id: 'toad_lucky_quarter',
        name: 'Lucky Quarter',
        description: 'You may use divine agony with this item once even if divine agony has already been used during this scene.'
      }
    ]
  },
  {
    id: 'lord',
    name: 'Lord',
    source: 'leba',
    appearance: 'Silver-made, shining, righteous, stony...',
    curse: 'Judges, jury, and execute all; Fires godly lasers indiscriminately; Makes you zealous; Does something righteous, scathing, or dominating.',
    effects: [
      {
        id: 'lord_plated_heart',
        name: 'Plated Heart',
        description: 'While wielding this item, you take -1 stress from slashing attacks, however any actions to aid another living being has -1D.'
      },
      {
        id: 'lord_divine_light',
        name: 'Divine Light',
        description: 'You may create a blinding flash of light with this item, gain or grant +1D on the next roll taking advantage of this effect.'
      },
      {
        id: 'lord_rightful_scale',
        name: 'Rightful Scale',
        description: 'Actions done to call upon, command, or give orders to a CAT sized area of people with this item have a reduced difficulty.'
      }
    ]
  },
  {
    id: 'mass_produced',
    name: 'Mass Produced Sin',
    source: 'leba',
    restriction: 'Available to all XO regardless of sample collection (no kill required)',
    appearance: 'Controlled, monitored, restrained, modern...',
    curse: 'Break out of their restrain; Enrages others to violence; Makes you go berserk; Does something violent, uncontrolled, or straight-forward.',
    effects: [
      {
        id: 'mass_produced_type_a',
        name: 'Type-A Serum',
        description: "1/hunt, you can increase your physical strength by this item's CAT for the rest of the current scene."
      },
      {
        id: 'mass_produced_type_b',
        name: 'Type-B Serum',
        description: '1/hunt, you can go fully invisible to gain +1D to hide, assassinate, or any covert rolls for the rest of the current scene.'
      },
      {
        id: 'mass_produced_type_c',
        name: 'Type-C Serum',
        description: '1/hunt, you may take control of a CAT sized group of humans in the area. This lasts until the end of the current scene.'
      }
    ]
  },
  {
    id: 'drifter',
    name: 'Drifter',
    source: 'leba',
    restriction: 'Available to all XO regardless of sample collection (no kill required)',
    appearance: 'Elusive, flickering, invisible, supernatural...',
    curse: 'Summon a corresponding drifter; Birth an anomaly; Makes you paranoid; Does something strange, abnormal, or disturbing.',
    effects: [
      {
        id: 'drifter_deja_vu_glass',
        name: 'Deja Vu Glass',
        description: "1/hunt, you may experience a 'deja vu' to gain +1D to your action roll, but take 1d3+1 stress if you never did this action before."
      },
      {
        id: 'drifter_strain_of_hair',
        name: 'Strain of Hair',
        description: '1/hunt, you may restrain a target before their risk dice is rolled. The admin rolls two risk dice and picks the highest.'
      },
      {
        id: 'drifter_worms_worms',
        name: 'Worms Worms',
        description: '1/hunt, you may remove a hook from you or an ally in close range. Then, the target takes stress equal to unfilled ticks on it (min 1).'
      }
    ]
  },
  {
    id: 'imago',
    name: 'Imago',
    source: 'leba',
    restriction: 'Available to XO who successfully killed an Imago before it became a full sin.',
    appearance: 'Cocooned, stillbirthed, insectoid, modulable...',
    curse: 'Infects others with sin; Open a rift to the psychic sea; Makes your desire outward; Does something sinful, psychic, or too familiar.',
    effects: [
      {
        id: 'imago_adaptive_shell',
        name: 'Adaptive Shell',
        description: 'While wielding this item, you may gain 1 sin to take -1 stress from attacks from sins, traces, drifters, or anomalies.'
      },
      {
        id: 'imago_fetus_seed',
        name: 'Fetus Seed',
        description: '1/hunt, when you sin overflow you may take an injury to temporarily negate a sin mark you have in affecting your resist roll.'
      },
      {
        id: 'imago_masked_bloom',
        name: 'Masked Bloom',
        description: 'Actions done to talk with, relate, or connect to mundane humans with this item have a reduced difficulty.'
      }
    ]
  },
  {
    id: 'mothers_favorite',
    name: "Mother's Favorite",
    source: 'leba',
    restriction: 'Mother users may birth a Mother Cursed Item for 3 scrip rather than pay 5.',
    appearance: 'Armored, spiraling pattern, coral, double jointed...',
    curse: "Inject someone with Mother; Mother knows best, sweetie; Makes you LOVED; Does something heavy, growing, or sharp.",
    effects: [
      {
        id: 'mothers_favorite_stay_at_home',
        name: 'Stay at Home',
        description: 'While wielding this item, you take -1 stress from any mundane weapon of CAT equal or lower than this item.'
      },
      {
        id: 'mothers_favorite_eat_your_meal',
        name: 'Eat Your Meal',
        description: "This item can 'eat' any corpse to create a field of coral to CAT radius, grant +1D to the next roll taking advantage of this effect."
      },
      {
        id: 'mothers_favorite_get_to_bed',
        name: 'Get to Bed',
        description: "During rest, you may spend bonding time with a fellow XO, with consent. Then, create a Mother's Sugar under your control."
      }
    ]
  },
  {
    id: 'husk_item',
    name: 'Husk',
    source: 'leba',
    appearance: 'Fleshy, bone-woven, eyeful, uncomfortable...',
    curse: "Devours flesh carelessly; Mimics voices you heard before; Makes you hollow; Does something unhuman, manipulative, or terrifying.",
    effects: [
      {
        id: 'husk_item_camouflage',
        name: 'Camouflage',
        description: 'While wielding this item, you may take 1d3 stress to turn invisible for the duration of an action that involves this item.'
      },
      {
        id: 'husk_item_osteomancy',
        name: 'Osteomancy',
        description: 'You may take 1d3 stress to learn CAT number of facts about a human you know the name of with this item.'
      },
      {
        id: 'husk_item_mimicry',
        name: 'Mimicry',
        description: 'Actions done to flee, hide, or stay hidden in plain sights or in crowds with this item have a reduced difficulty.'
      }
    ]
  },
  {
    id: 'garden_item',
    name: 'Garden',
    source: 'leba',
    appearance: 'Enormous, plant-fiber, wooden, gentle...',
    curse: 'Restrains your surroundings with plants; Command the wildlife; Makes you aloof; Does something overprotective, restrained, or slow.',
    effects: [
      {
        id: 'garden_item_floating_leaf',
        name: 'Floating Leaf',
        description: 'You may float in the air while wielding this item however you take +1 stress from consequences while you are floating.'
      },
      {
        id: 'garden_item_gentle_breeze',
        name: 'Gentle Breeze',
        description: "While wielding this item during rest, you may increase the value of one of your or one of your ally's dice result by +1."
      },
      {
        id: 'garden_item_rooted_leg',
        name: 'Rooted Leg',
        description: 'Actions done to stay balanced, hold, or protect against a CAT sized force with this item have a reduced difficulty.'
      }
    ]
  },
  {
    id: 'heron',
    name: 'Heron',
    source: 'leba',
    note: 'For the Heron sin type made by Phroge',
    appearance: 'Multiplied or dual, starved, crooked, feathery...',
    curse: 'Separate others from the scene; Breed paranoia around; Makes you bastardly; Does something vicious, manipulative, or cowardly.',
    effects: [
      {
        id: 'heron_cowardly_wing',
        name: 'Cowardly Wing',
        description: 'You may take 1 nonlethal stress to fly with this item for the duration of your action. Gain +1D to all rolls done to flee from a scene.'
      },
      {
        id: 'heron_multiplicity',
        name: 'Multiplicity',
        description: 'You may make a second or more copy of this weapon at the cost of 1 KP per copy instead of 3 (Original still costs 3).'
      },
      {
        id: 'heron_envious_grin',
        name: 'Envious Grin',
        description: "You gain +1D to convince a person to hurt, distract, or switch sides with this item. This doesn't work during conflict scenes."
      }
    ]
  },
  {
    id: 'pyre',
    name: 'Pyre',
    source: 'leba',
    note: 'For the Pyre sin type made by Lifthrasir',
    appearance: 'Burning, explosive, bloated, damaged or wrecked...',
    curse: 'Blow up its surrounding; Cause a Flashpoint within the area; Makes you burn inside; Does something frustrating, boiling, or explosive.',
    effects: [
      {
        id: 'pyre_annihilation',
        name: 'Annihilation',
        description: '1/hunt, you can explode yourself by taking an injury to inflict slashes to all living beings in a CAT radius equal to your injuries.'
      },
      {
        id: 'pyre_burned_heart',
        name: 'Burned Heart',
        description: 'While wielding this item, 1/scene when you take stress, you may inflict 1 slash to any talisman in the same room.'
      },
      {
        id: 'pyre_seething_wire',
        name: 'Seething Wire',
        description: 'Actions done with this item inflict one more slash on any talisman at pressure 3 or higher, or if you are on Brink of death.'
      }
    ]
  }
];

/**
 * Cursed Item Rules Summary:
 * - Available starting at CAT 2
 * - Base cost: 5 scrip (Mother users pay 3 for Mother's Favorite)
 * - Pulled out for 3 KP
 * - Scales with service weapon's CAT
 * - One effect at purchase, additional effect per upgrade
 * - Each effect comes with an additional curse
 * - Max effects = service weapon's CAT + 1
 * - Can replace effects for 2 scrip between missions
 * - If lost: docked service weapon's CAT + 2 scrip
 */
