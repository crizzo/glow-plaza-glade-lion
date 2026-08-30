import type { ThemeColors } from "@/lib/theme";

export type Ability = {
  id: string;
  name: string;
  key: string;
  tags: string[];
  description: string;
};

export type Chroma = {
  name: string;
  swatch: string;
  colors: ThemeColors;
};

export type FormType = "Classic" | "Aspect" | "Legacy" | "CALAMITY";

export type FormKit = "human" | "bear" | "wolf" | "wyvern";

export type DruidForm = {
  id: string;
  name: string;
  title: string;
  type: FormType;
  kit: FormKit;
  image: string;
  heroImage?: string;
  position: string;
  mobilePosition: string;
  blurb: string;
  resource: string;
  colors: ThemeColors;
  chromas?: Chroma[];
};

export type Lineage = {
  id: string;
  name: string;
  relation: string;
  image: string;
  quote: string;
  description: string;
  nodes: { name: string; text: string }[];
};

const moss: ThemeColors = {
  primary: "#6d8f68",
  secondary: "#3d5a42",
  accent: "#c9c0a8",
  glow: "rgba(109, 143, 104, 0.55)",
  panelBg: "rgba(28, 42, 32, 0.48)",
  abilityBg: "rgba(36, 56, 42, 0.78)",
  skinsBg: "rgba(22, 34, 26, 0.4)",
  border: "rgba(109, 143, 104, 0.38)",
  selected: "rgba(109, 143, 104, 0.72)",
};

const ember: ThemeColors = {
  primary: "#c45c2a",
  secondary: "#6b2e14",
  accent: "#e8c4a0",
  glow: "rgba(196, 92, 42, 0.6)",
  panelBg: "rgba(62, 28, 14, 0.48)",
  abilityBg: "rgba(86, 36, 16, 0.78)",
  skinsBg: "rgba(48, 22, 12, 0.4)",
  border: "rgba(196, 92, 42, 0.4)",
  selected: "rgba(212, 108, 48, 0.85)",
};

const moon: ThemeColors = {
  primary: "#8eb4c8",
  secondary: "#3a5568",
  accent: "#e8eef2",
  glow: "rgba(142, 180, 200, 0.58)",
  panelBg: "rgba(28, 42, 54, 0.5)",
  abilityBg: "rgba(36, 56, 72, 0.78)",
  skinsBg: "rgba(20, 32, 42, 0.42)",
  border: "rgba(142, 180, 200, 0.4)",
  selected: "rgba(168, 204, 220, 0.88)",
};

const copper: ThemeColors = {
  primary: "#c46a32",
  secondary: "#4a2818",
  accent: "#f0d0a0",
  glow: "rgba(196, 106, 50, 0.58)",
  panelBg: "rgba(58, 30, 16, 0.5)",
  abilityBg: "rgba(78, 38, 18, 0.78)",
  skinsBg: "rgba(42, 22, 12, 0.42)",
  border: "rgba(196, 106, 50, 0.4)",
  selected: "rgba(220, 124, 64, 0.88)",
};

const calamity: ThemeColors = {
  primary: "#d94a24",
  secondary: "#5a1a0c",
  accent: "#f2d2a0",
  glow: "rgba(217, 74, 36, 0.65)",
  panelBg: "rgba(72, 18, 10, 0.52)",
  abilityBg: "rgba(96, 24, 12, 0.8)",
  skinsBg: "rgba(52, 14, 8, 0.45)",
  border: "rgba(217, 74, 36, 0.45)",
  selected: "rgba(240, 96, 48, 0.9)",
};

const lunar: ThemeColors = {
  primary: "#d8e6ee",
  secondary: "#4a6270",
  accent: "#f7f4ee",
  glow: "rgba(216, 230, 238, 0.55)",
  panelBg: "rgba(36, 48, 58, 0.5)",
  abilityBg: "rgba(48, 64, 76, 0.78)",
  skinsBg: "rgba(24, 34, 42, 0.42)",
  border: "rgba(216, 230, 238, 0.38)",
  selected: "rgba(232, 242, 248, 0.92)",
};

const storm: ThemeColors = {
  primary: "#c4a060",
  secondary: "#3a4a58",
  accent: "#e8d8b0",
  glow: "rgba(196, 160, 96, 0.55)",
  panelBg: "rgba(42, 36, 22, 0.5)",
  abilityBg: "rgba(62, 50, 28, 0.78)",
  skinsBg: "rgba(32, 28, 16, 0.42)",
  border: "rgba(196, 160, 96, 0.4)",
  selected: "rgba(220, 188, 120, 0.88)",
};

export const WOLF_CHROMAS: Chroma[] = [
  {
    name: "Moon",
    swatch: "#8eb4c8",
    colors: moon,
  },
  {
    name: "Frost",
    swatch: "#d8e6ee",
    colors: lunar,
  },
  {
    name: "Blood",
    swatch: "#a33a2a",
    colors: {
      primary: "#a33a2a",
      secondary: "#4a1c18",
      accent: "#e8c8c0",
      glow: "rgba(163, 58, 42, 0.6)",
      panelBg: "rgba(58, 18, 16, 0.5)",
      abilityBg: "rgba(78, 24, 20, 0.78)",
      skinsBg: "rgba(42, 14, 12, 0.42)",
      border: "rgba(163, 58, 42, 0.4)",
      selected: "rgba(196, 72, 52, 0.88)",
    },
  },
  {
    name: "Night",
    swatch: "#6a7480",
    colors: {
      primary: "#c8cdd4",
      secondary: "#2a3038",
      accent: "#e8eaee",
      glow: "rgba(200, 205, 212, 0.45)",
      panelBg: "rgba(16, 18, 22, 0.55)",
      abilityBg: "rgba(32, 36, 42, 0.8)",
      skinsBg: "rgba(12, 14, 18, 0.48)",
      border: "rgba(200, 205, 212, 0.32)",
      selected: "rgba(232, 234, 238, 0.9)",
    },
  },
  {
    name: "Sage",
    swatch: "#6d8f68",
    colors: moss,
  },
];

export const BEAR_CHROMAS: Chroma[] = [
  { name: "Ember", swatch: "#c45c2a", colors: ember },
  {
    name: "Stone",
    swatch: "#8a7a68",
    colors: {
      primary: "#b8a890",
      secondary: "#4a4034",
      accent: "#e8dcc8",
      glow: "rgba(184, 168, 144, 0.5)",
      panelBg: "rgba(42, 36, 28, 0.5)",
      abilityBg: "rgba(58, 50, 40, 0.78)",
      skinsBg: "rgba(32, 28, 22, 0.42)",
      border: "rgba(184, 168, 144, 0.38)",
      selected: "rgba(212, 196, 168, 0.88)",
    },
  },
  {
    name: "Ash",
    swatch: "#6e6a66",
    colors: {
      primary: "#c4bfb8",
      secondary: "#3a3836",
      accent: "#ece8e2",
      glow: "rgba(196, 191, 184, 0.45)",
      panelBg: "rgba(28, 26, 24, 0.55)",
      abilityBg: "rgba(46, 42, 38, 0.8)",
      skinsBg: "rgba(20, 18, 16, 0.48)",
      border: "rgba(196, 191, 184, 0.32)",
      selected: "rgba(228, 222, 214, 0.9)",
    },
  },
  {
    name: "Blood",
    swatch: "#8b2a22",
    colors: calamity,
  },
];

export const WYVERN_CHROMAS: Chroma[] = [
  { name: "Copper", swatch: "#c46a32", colors: copper },
  { name: "Storm", swatch: "#c4a060", colors: storm },
  {
    name: "Venom",
    swatch: "#5a8a4a",
    colors: {
      primary: "#6a9a58",
      secondary: "#2a4024",
      accent: "#d4e0c4",
      glow: "rgba(106, 154, 88, 0.55)",
      panelBg: "rgba(24, 40, 22, 0.5)",
      abilityBg: "rgba(36, 58, 32, 0.78)",
      skinsBg: "rgba(18, 30, 16, 0.42)",
      border: "rgba(106, 154, 88, 0.4)",
      selected: "rgba(132, 180, 108, 0.88)",
    },
  },
  {
    name: "Nightfire",
    swatch: "#d94a24",
    colors: calamity,
  },
];

export const KITS: Record<FormKit, Ability[]> = {
  human: [
    {
      id: "draiocht",
      name: "Draiocht",
      key: "P",
      tags: ["Passive", "Shapeshift"],
      description:
        "The old magic lives in the talisman. Casting a human spell returns you to man. Using an animal's primary attack becomes that beast. Spells persist after the change — volcanoes still spit, storms still drench — so the beast inherits the grove's work.",
    },
    {
      id: "volcano",
      name: "Volcano",
      key: "Q",
      tags: ["Spell", "Fire", "Duration"],
      description:
        "Raise a scorching volcano from the ground. It erupts in stages as you channel, then keeps hurling magma after you shapeshift. Bear Rampage and Wyvern Rolling Magma detonate it harder.",
    },
    {
      id: "entangle",
      name: "Entangle",
      key: "W",
      tags: ["Spell", "Physical", "Plant"],
      description:
        "Conjure rootbound fissures that slow and hold. Vines stack on a target, binding them for the wolf's freeze or the bear's slam.",
    },
    {
      id: "thunderstorm",
      name: "Thunderstorm",
      key: "E",
      tags: ["Spell", "Lightning", "Duration"],
      description:
        "Call a drenching storm. Enemies under it take lightning and are soaked — freeze builds faster, shock lands easier. Cast it, then become the wolf.",
    },
    {
      id: "tornado",
      name: "Tornado",
      key: "R",
      tags: ["Spell", "Physical", "Orb"],
      description:
        "A hunting wind that chases and hinders. Use it to pin a pack while you choose which skin to wear.",
    },
  ],
  bear: [
    {
      id: "rage",
      name: "Rage",
      key: "P",
      tags: ["Resource", "Bear"],
      description:
        "A hulking powerhouse of strength and brawn. Demolishing monsters builds Rage that empowers attacks and roars. Without it the bear is slow. With it, a walking calamity.",
    },
    {
      id: "maul",
      name: "Maul",
      key: "Q",
      tags: ["Attack", "Strike", "Shapeshift"],
      description:
        "The primary swipe. Shapeshifts you into the Bear and is the surest way to generate Rage on hit.",
    },
    {
      id: "furious-slam",
      name: "Furious Slam",
      key: "W",
      tags: ["Attack", "Slam", "AoE"],
      description:
        "A shockwave slam. Spend Rage for the enraged version: more damage, a wider radius, and Jagged Ground that slows whatever still stands.",
    },
    {
      id: "ferocious-roar",
      name: "Ferocious Roar",
      key: "E",
      tags: ["Warcry", "Nova", "Meta"],
      description:
        "A warcry that drinks enemy power for Rage and empowers attacks to break armour. Socket another class's warcry to replace the effect at a steeper cost.",
    },
    {
      id: "walking-calamity",
      name: "Walking Calamity",
      key: "R",
      tags: ["Attack", "Fire", "Glory"],
      description:
        "Build Glory at maximum Rage, then roar the sky down. Meteors fall. Fire damage and Rage regeneration follow. The grove remembers this as the last argument.",
    },
  ],
  wolf: [
    {
      id: "the-pack",
      name: "The Pack",
      key: "P",
      tags: ["Passive", "Minion"],
      description:
        "As a creature of the night, the wolf channels the Moon itself. Marked kills summon companions. A true alpha does not hunt alone — but a dead packmate cuts the damage you deal.",
    },
    {
      id: "lunar-assault",
      name: "Lunar Assault",
      key: "Q",
      tags: ["Attack", "Cold", "Strike"],
      description:
        "A moon-cold swipe. Converts most physical to cold and builds chill and freeze far beyond a normal strike. The door into Wolf form.",
    },
    {
      id: "pounce",
      name: "Pounce",
      key: "W",
      tags: ["Attack", "Mark", "Travel"],
      description:
        "Leap onto a target and apply Predator's Mark. Wolf minions leap with you. When the marked die, the pack grows. Other Mark gems can be socketed in its place.",
    },
    {
      id: "cross-slash",
      name: "Cross Slash",
      key: "E",
      tags: ["Attack", "AoE", "Mark"],
      description:
        "Leap backward and cut a shockwave through marked enemies. Pulls and explodes ice fragments. The answer when a boss will not die to feed the pack.",
    },
    {
      id: "lunar-blessing",
      name: "Lunar Blessing",
      key: "R",
      tags: ["Spell", "Buff", "Cold"],
      description:
        "The wolf goes white. Self and minions gain cold damage, attack speed, and movement. Spend Rage to keep the moon. Strikes call moonbeams.",
    },
  ],
  wyvern: [
    {
      id: "devour",
      name: "Devour",
      key: "P",
      tags: ["Attack", "Charge"],
      description:
        "A sight seldom seen in Wraeclast. The wyvern empowers itself by devouring the freshly dead — corpses and cullable foes grant Power Charges and life. It is a dragon, after all.",
    },
    {
      id: "rend",
      name: "Rend",
      key: "Q",
      tags: ["Attack", "Melee", "Shapeshift"],
      description:
        "Leap in and slash. Consume a Power Charge to load the wings with lightning, turning later blasts into storms.",
    },
    {
      id: "wing-blast",
      name: "Wing Blast",
      key: "W",
      tags: ["Attack", "Wind", "AoE"],
      description:
        "Launch backward, knocking foes and stunning those primed for Heavy Stun. Charged wings add lightning explosions. A chance at another Power Charge on the stun.",
    },
    {
      id: "rolling-magma",
      name: "Rolling Magma",
      key: "E",
      tags: ["Attack", "Fire", "Projectile"],
      description:
        "Spit bouncing fire that chains. It wakes human-form Volcanoes and molten fissures on impact — the intended handshake between man and dragon.",
    },
    {
      id: "flame-breath",
      name: "Flame Breath",
      key: "R",
      tags: ["Attack", "Fire", "Channel"],
      description:
        "Take the sky and rain a stream of flame. Consume a Power Charge for lightning infusion. Vulnerable while the channel holds. High ignite. A dragon's privilege.",
    },
  ],
};

export const EXTRA_SKILLS: { kit: FormKit; name: string; text: string }[] = [
  {
    kit: "human",
    name: "Spell Totem",
    text: "Plant a totem that keeps casting a socketed spell. Charges stretch its life and damage.",
  },
  {
    kit: "human",
    name: "Thrashing Vines",
    text: "Living plant lashes. Pairs with Entangle to keep a pack rooted for the beast.",
  },
  {
    kit: "bear",
    name: "Rampage",
    text: "Roar, then spend Rage running a chain of slams. Volcanoes erupt harder under the feet.",
  },
  {
    kit: "bear",
    name: "Fury of the Mountain",
    text: "Channeled slams that convert to fire and leave molten fissures. Rage on hit.",
  },
  {
    kit: "wolf",
    name: "Shred",
    text: "Fast claws. Frozen targets shed ice fragments that the next cut detonates.",
  },
  {
    kit: "wolf",
    name: "Arctic Howl",
    text: "A cold warcry that freezes primed enemies and empowers attacks with moon-cold.",
  },
  {
    kit: "wyvern",
    name: "Oil Barrage",
    text: "Spit oil that slows and exposes. Power Charges turn it into an electrified stream.",
  },
];

export const FORMS: DruidForm[] = [
  {
    id: "human",
    name: "The Druid",
    title: "Human form",
    type: "Classic",
    kit: "human",
    image: "/images/forms/human.jpg",
    heroImage: "/images/hero/wildwood.jpg",
    position: "62% 18%",
    mobilePosition: "50% 10%",
    blurb:
      "Staff in hand. The grove's spells are laid first — volcano, storm, root — then the man is gone.",
    resource: "Mana · Talisman",
    colors: moss,
  },
  {
    id: "exile",
    name: "Wildwood Exile",
    title: "Human form",
    type: "Legacy",
    kit: "human",
    image: "/images/forms/exile.jpg",
    position: "50% 16%",
    mobilePosition: "50% 12%",
    blurb: "What remains of a people. Hooded, alone, still keeping the pacts.",
    resource: "Mana · Talisman",
    colors: moss,
  },
  {
    id: "bear",
    name: "Bear Form",
    title: "Shapeshift",
    type: "Classic",
    kit: "bear",
    image: "/images/forms/bear.jpg",
    position: "50% 18%",
    mobilePosition: "48% 14%",
    blurb: "Brawn and broken earth. Rage turns a slow beast into a calamity.",
    resource: "Rage",
    colors: ember,
    chromas: BEAR_CHROMAS,
  },
  {
    id: "calamity",
    name: "Walking Calamity",
    title: "Bear form",
    type: "CALAMITY",
    kit: "bear",
    image: "/images/forms/calamity.jpg",
    position: "50% 14%",
    mobilePosition: "50% 12%",
    blurb: "Glory spent. Meteors. The last argument of the mountain.",
    resource: "Rage · Glory",
    colors: calamity,
  },
  {
    id: "wolf",
    name: "Wolf Form",
    title: "Shapeshift",
    type: "Classic",
    kit: "wolf",
    image: "/images/forms/wolf.jpg",
    position: "52% 16%",
    mobilePosition: "50% 12%",
    blurb: "Moon, mark, and pack. Fast enough to freeze a name in the air.",
    resource: "Moon · Pack",
    colors: moon,
    chromas: WOLF_CHROMAS,
  },
  {
    id: "lunar",
    name: "Lunar Blessing",
    title: "Wolf form",
    type: "Aspect",
    kit: "wolf",
    image: "/images/forms/lunar.jpg",
    position: "50% 18%",
    mobilePosition: "50% 14%",
    blurb: "The wolf goes white. Moonbeams answer every strike.",
    resource: "Moon · Rage",
    colors: lunar,
    chromas: WOLF_CHROMAS,
  },
  {
    id: "pack",
    name: "Pack Alpha",
    title: "Wolf form",
    type: "Classic",
    kit: "wolf",
    image: "/images/forms/pack.jpg",
    position: "48% 20%",
    mobilePosition: "50% 16%",
    blurb: "Marked kills swell the hunt. An alpha is a chorus, not a solo.",
    resource: "Pack",
    colors: moon,
    chromas: WOLF_CHROMAS,
  },
  {
    id: "wyvern",
    name: "Wyvern Form",
    title: "Shapeshift",
    type: "Classic",
    kit: "wyvern",
    image: "/images/forms/wyvern.jpg",
    position: "55% 16%",
    mobilePosition: "52% 12%",
    blurb: "Talon, oil, and fire. The dead are a resource. The sky is a weapon.",
    resource: "Power Charges",
    colors: copper,
    chromas: WYVERN_CHROMAS,
  },
  {
    id: "storm",
    name: "Stormwyrm",
    title: "Wyvern form",
    type: "Aspect",
    kit: "wyvern",
    image: "/images/forms/storm.jpg",
    position: "50% 28%",
    mobilePosition: "50% 22%",
    blurb: "Wings charged. Fire and lightning in the same breath.",
    resource: "Power Charges · Lightning",
    colors: storm,
    chromas: WYVERN_CHROMAS,
  },
];

export const LINEAGE: Lineage[] = [
  {
    id: "oracle",
    name: "Oracle",
    relation: "Ascendancy",
    image: "/images/lineage/oracle.jpg",
    quote: "The unseen path is still a path.",
    description:
      "A druid of foresight. The Oracle does not guess — it stands in a future that has not happened and takes what that future already learned.",
    nodes: [
      {
        name: "Fateful Vision",
        text: "Anticipate the next action. Strike from a moment that has not arrived.",
      },
      {
        name: "Moment of Vulnerability",
        text: "Enemies have a destined weak beat. The Oracle waits for it.",
      },
      {
        name: "The Unseen Path",
        text: "Learn skills from alternate futures — things this life was never offered.",
      },
    ],
  },
  {
    id: "shaman",
    name: "Shaman",
    relation: "Ascendancy",
    image: "/images/lineage/shaman.jpg",
    quote: "Rage is a weather system.",
    description:
      "The elemental rage-caster. The Shaman does not spend Rage only on the bear's slam — it turns that heat into storms the grove itself would fear.",
    nodes: [
      {
        name: "Wisdom of the Maji",
        text: "New language on runes and idols. The old markings speak again.",
      },
      {
        name: "Bringer of the Apocalypse",
        text: "Rage becomes fire, lightning, and ending. A storm-lord's work.",
      },
    ],
  },
];

export const BIO_PARAS = [
  "Once the Wildwood had a people. They kept the old pacts — bone, root, and moon — and walked as beast when the forest asked it of them. Then the Mists came, and the groves went quiet.",
  "He is what remains. A wanderer of Wraeclast, last keeper of Draiocht, who wears an Animal Talisman and becomes what the hunt requires: the bear that breaks the ground, the wolf that runs with the moon, the wyvern that eats the dead and calls the storm.",
  "Human hands still raise volcanoes and thunderstorms. Spells linger after the skin changes. Then the man is gone, and something older finishes the work.",
];

export const STATS = [
  { label: "Region", value: "Wraeclast" },
  { label: "Role", value: "Shapeshifter" },
  { label: "Attributes", value: "Str / Int" },
  { label: "Weapon", value: "Talisman" },
];

export const SITE = {
  name: "The Druid",
  title: "The Last of the Druids",
  eyebrow: "Wraeclast",
  loaderStatus: "The grove remembers…",
  quote: "Ye defile the Wildwood no longer.",
  legal:
    "This is a non-commercial, fan-made site. Path of Exile 2 © Grinding Gear Games. GGG does not endorse or sponsor this project.",
  copyright: "Path of Exile 2 © Grinding Gear Games",
  notice: "Fan-made. Not affiliated with Grinding Gear Games.",
};

export const DEFAULT_FORM_ID = "human";

export function formById(id: string) {
  return FORMS.find((f) => f.id === id) ?? FORMS[0];
}

export function resolveColors(form: DruidForm, chromaIndex: number | null): ThemeColors {
  if (chromaIndex === null || !form.chromas?.length) return form.colors;
  const chroma = form.chromas[chromaIndex];
  return chroma?.colors ?? form.colors;
}
