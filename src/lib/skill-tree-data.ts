export type TreeTag =
  | "human"
  | "bear"
  | "wolf"
  | "wyvern"
  | "rage"
  | "defence"
  | "minion"
  | "unseen"
  | "shaman"
  | "oracle";

export type TreeKind = "start" | "small" | "notable" | "ascendancy" | "jewel";
export type TreeRegion = "main" | "shaman" | "oracle";

export type TreeNode = {
  id: string;
  name: string;
  kind: TreeKind;
  x: number;
  y: number;
  stats: string[];
  tags: TreeTag[];
  region: TreeRegion;
};

export type TreeEdge = { from: string; to: string };

export const WORLD: Record<TreeRegion, { w: number; h: number }> = {
  main: { w: 2400, h: 1700 },
  shaman: { w: 1100, h: 900 },
  oracle: { w: 1100, h: 900 },
};

export const REGION_LABELS: { region: TreeRegion; text: string; x: number; y: number }[] = [
  { region: "main", text: "BEAR", x: 480, y: 1120 },
  { region: "main", text: "WOLF", x: 1860, y: 1120 },
  { region: "main", text: "HIDE", x: 1200, y: 980 },
  { region: "main", text: "MAJI", x: 560, y: 500 },
  { region: "main", text: "WYVERN", x: 1780, y: 500 },
  { region: "main", text: "THE UNSEEN PATH", x: 1200, y: 36 },
  { region: "shaman", text: "SHAMAN", x: 550, y: 70 },
  { region: "oracle", text: "ORACLE", x: 550, y: 70 },
];

type Seed = TreeNode;

const seeds: Seed[] = [
  {
    id: "start",
    name: "The Druid",
    kind: "start",
    x: 1200,
    y: 1480,
    stats: ["Str / Int hybrid", "North-west of the Wraeclast tree", "Talisman · Shapeshift"],
    tags: ["human", "bear", "wolf", "wyvern"],
    region: "main",
  },
  {
    id: "insulating-hide",
    name: "Insulating Hide",
    kind: "notable",
    x: 1200,
    y: 1140,
    stats: [
      "+20% of Armour also applies to Elemental Damage while Shapeshifted",
      "20% faster start of Energy Shield Recharge while Shapeshifted",
    ],
    tags: ["defence", "bear", "wolf", "wyvern"],
    region: "main",
  },
  {
    id: "conall",
    name: "Conall the Hunted",
    kind: "notable",
    x: 1200,
    y: 820,
    stats: [
      "+15% of Armour also applies to Elemental Damage",
      "5% faster start of Energy Shield Recharge",
      "Immune to Bleeding while Shapeshifted",
    ],
    tags: ["defence", "bear", "wolf", "wyvern"],
    region: "main",
  },
  {
    id: "sudden-infuriation",
    name: "Sudden Infuriation",
    kind: "notable",
    x: 780,
    y: 1340,
    stats: ["Chance to gain Maximum Rage on Hit with Attacks", "The bear's first Rage engine"],
    tags: ["bear", "rage", "wolf"],
    region: "main",
  },
  {
    id: "grit",
    name: "Grit",
    kind: "notable",
    x: 420,
    y: 1180,
    stats: ["+1 to Maximum Endurance Charges", "Chance to gain an additional Endurance Charge"],
    tags: ["bear", "wolf", "defence"],
    region: "main",
  },
  {
    id: "guttural-roar",
    name: "Guttural Roar",
    kind: "notable",
    x: 620,
    y: 1000,
    stats: [
      "25% increased Warcry Speed",
      "Enemies in Warcry area are Debilitated",
      "Debilitated enemies have 20% reduced Movement Speed and deal 10% reduced Damage to you",
    ],
    tags: ["bear", "wolf"],
    region: "main",
  },
  {
    id: "heart-tissue",
    name: "Heart Tissue",
    kind: "notable",
    x: 300,
    y: 860,
    stats: ["8% of Damage taken Recouped as Life"],
    tags: ["defence", "bear"],
    region: "main",
  },
  {
    id: "blood-of-the-wolf",
    name: "Blood of the Wolf",
    kind: "notable",
    x: 1620,
    y: 1340,
    stats: [
      "15% increased amount of Life Leeched while Shapeshifted",
      "15% increased Life Regeneration Rate while Shapeshifted",
    ],
    tags: ["wolf"],
    region: "main",
  },
  {
    id: "among-the-hordes",
    name: "Among the Hordes",
    kind: "notable",
    x: 1980,
    y: 1180,
    stats: ["Minions and Companions have 10% increased Movement Speed"],
    tags: ["wolf", "minion"],
    region: "main",
  },
  {
    id: "voracious",
    name: "Voracious",
    kind: "notable",
    x: 1780,
    y: 1000,
    stats: ["15% increased Attack Speed while Leeching"],
    tags: ["wolf", "wyvern", "defence"],
    region: "main",
  },
  {
    id: "alchemical-oil",
    name: "Alchemical Oil",
    kind: "notable",
    x: 680,
    y: 620,
    stats: ["Exposure you inflict has 26% effect (from 20%)", "Shaman and caster oil for elemental setups"],
    tags: ["human", "shaman", "wyvern"],
    region: "main",
  },
  {
    id: "dimensional-weakspot",
    name: "Dimensional Weakspot",
    kind: "notable",
    x: 980,
    y: 420,
    stats: ["15% chance to invert enemy Elemental Resistances"],
    tags: ["human", "wyvern", "oracle"],
    region: "main",
  },
  {
    id: "sling-shots",
    name: "Sling Shots",
    kind: "notable",
    x: 1680,
    y: 620,
    stats: ["Increased chance to inflict Ailments with Projectiles", "Rolling Magma and Oil Barrage live here"],
    tags: ["wyvern"],
    region: "main",
  },
  {
    id: "unseen-cower",
    name: "Cower Before the First Ones",
    kind: "notable",
    x: 1200,
    y: 80,
    stats: [
      "30% increased Fire, Cold, Lightning, Physical and Chaos Damage",
      "Requires The Unseen Path (Oracle)",
    ],
    tags: ["unseen", "oracle", "human"],
    region: "main",
  },
  {
    id: "unseen-self",
    name: "Self Sacrificing",
    kind: "notable",
    x: 1600,
    y: 120,
    stats: [
      "20% reduced Spirit Reservation Efficiency of Skills",
      "40% increased Reservation Efficiency of Minion Skills",
      "Requires The Unseen Path (Oracle)",
    ],
    tags: ["unseen", "oracle", "minion", "wolf"],
    region: "main",
  },
  {
    id: "unseen-focus",
    name: "Meditative Focus",
    kind: "notable",
    x: 840,
    y: 120,
    stats: [
      "60% increased Stun Threshold while Channelling",
      "30% of Damage taken Recouped as Life while Channelling",
      "Requires The Unseen Path (Oracle)",
    ],
    tags: ["unseen", "oracle", "human", "wyvern"],
    region: "main",
  },
  {
    id: "unseen-leaves",
    name: "Rustle of the Leaves",
    kind: "notable",
    x: 420,
    y: 240,
    stats: [
      "40% increased Totem Placement Speed",
      "6% increased Spell Cast Speed",
      "Requires The Unseen Path (Oracle)",
    ],
    tags: ["unseen", "oracle", "human"],
    region: "main",
  },
  {
    id: "unseen-casting",
    name: "Powerful Casting",
    kind: "notable",
    x: 220,
    y: 500,
    stats: ["Increased Spell Damage per 10 Strength", "Requires The Unseen Path (Oracle)"],
    tags: ["unseen", "oracle", "human"],
    region: "main",
  },
  {
    id: "unseen-pursuit",
    name: "Limitless Pursuit",
    kind: "notable",
    x: 2140,
    y: 580,
    stats: [
      "4% increased Movement Speed",
      "Increased Cooldown Recovery Rate",
      "Requires The Unseen Path (Oracle)",
    ],
    tags: ["unseen", "oracle"],
    region: "main",
  },
  {
    id: "jewel-west",
    name: "Jewel Socket",
    kind: "jewel",
    x: 480,
    y: 720,
    stats: ["Socket a Jewel", "West of the grove, off Heart Tissue"],
    tags: ["defence", "bear"],
    region: "main",
  },
  {
    id: "jewel-north",
    name: "Jewel Socket",
    kind: "jewel",
    x: 1200,
    y: 560,
    stats: ["Socket a Jewel", "Between Conall and the Unseen Path"],
    tags: ["defence", "human"],
    region: "main",
  },
  {
    id: "jewel-east",
    name: "Jewel Socket",
    kind: "jewel",
    x: 1920,
    y: 820,
    stats: ["Socket a Jewel", "East of the grove, off Voracious"],
    tags: ["wolf", "minion"],
    region: "main",
  },

  {
    id: "shaman-start",
    name: "Shaman",
    kind: "start",
    x: 550,
    y: 740,
    stats: ["Wraeclast has suffered for too long.", "You are vengeance incarnate."],
    tags: ["shaman"],
    region: "shaman",
  },
  {
    id: "turning-seasons",
    name: "Turning of the Seasons",
    kind: "notable",
    x: 550,
    y: 500,
    stats: [
      "Enemies in your Presence have Exposure",
      "Gain 10% of Damage as Extra Damage of a random Element",
    ],
    tags: ["shaman", "human"],
    region: "shaman",
  },
  {
    id: "apocalypse",
    name: "Bringer of the Apocalypse",
    kind: "ascendancy",
    x: 550,
    y: 240,
    stats: ["Grants Skill: Apocalypse", "A rain of all elements after enough elemental damage"],
    tags: ["shaman", "human", "wyvern"],
    region: "shaman",
  },
  {
    id: "druidic-champion",
    name: "Druidic Champion",
    kind: "notable",
    x: 250,
    y: 620,
    stats: ["Every 2 Rage also grants 1% more Spell Damage"],
    tags: ["shaman", "rage", "human"],
    region: "shaman",
  },
  {
    id: "furious-wellspring",
    name: "Furious Wellspring",
    kind: "notable",
    x: 140,
    y: 420,
    stats: [
      "No inherent loss of Rage",
      "Regenerate 6% of maximum Rage per second",
      "Mana Regeneration Rate also applies to Rage Regeneration",
      "Skills have +5 to Rage cost",
      "+7 to Maximum Rage",
    ],
    tags: ["shaman", "rage", "bear"],
    region: "shaman",
  },
  {
    id: "wisdom-maji",
    name: "Wisdom of the Maji",
    kind: "notable",
    x: 250,
    y: 220,
    stats: ["Gain the benefits of Bonded modifiers on Runes and Idols"],
    tags: ["shaman"],
    region: "shaman",
  },
  {
    id: "reactive-growth",
    name: "Reactive Growth",
    kind: "notable",
    x: 850,
    y: 620,
    stats: [
      "10% less Elemental Damage taken",
      "Adapt to the highest Elemental Damage Type of each Hit",
      "10% less Damage taken of each Element per matching Adaptation",
      "Maximum 3 Adaptations",
    ],
    tags: ["shaman", "defence"],
    region: "shaman",
  },
  {
    id: "avatar-evolution",
    name: "Avatar of Evolution",
    kind: "notable",
    x: 960,
    y: 420,
    stats: [
      "5% of Physical Damage taken as Fire, Lightning, and Cold",
      "Adaptations last 5 seconds",
      "Double Adaptation Effect",
    ],
    tags: ["shaman", "defence"],
    region: "shaman",
  },
  {
    id: "sacred-flow",
    name: "Sacred Flow",
    kind: "notable",
    x: 850,
    y: 220,
    stats: ["+40 to Spirit for each of your empty Charm slots"],
    tags: ["shaman"],
    region: "shaman",
  },

  {
    id: "oracle-start",
    name: "Oracle",
    kind: "start",
    x: 550,
    y: 740,
    stats: ["There are many paths to achieve your goals…", "and you see them all."],
    tags: ["oracle"],
    region: "oracle",
  },
  {
    id: "unseen-path",
    name: "The Unseen Path",
    kind: "ascendancy",
    x: 850,
    y: 560,
    stats: ["Walk the Paths Not Taken", "Reveals Oracle-only clusters on the main passive tree"],
    tags: ["oracle", "unseen"],
    region: "oracle",
  },
  {
    id: "entwined",
    name: "Entwined Realities",
    kind: "notable",
    x: 960,
    y: 340,
    stats: [
      "Non-Keystone Passive Skills in Medium Radius of allocated Keystones",
      "can be allocated without being connected to your tree",
    ],
    tags: ["oracle"],
    region: "oracle",
  },
  {
    id: "fateful-vision",
    name: "Fateful Vision",
    kind: "notable",
    x: 250,
    y: 560,
    stats: ["Grants Skill: Align Fate", "A vision of yourself using a skill — match it for extra damage"],
    tags: ["oracle"],
    region: "oracle",
  },
  {
    id: "forced-outcome",
    name: "Forced Outcome",
    kind: "notable",
    x: 140,
    y: 360,
    stats: ["Inevitable Critical Hits"],
    tags: ["oracle"],
    region: "oracle",
  },
  {
    id: "converging-paths",
    name: "Converging Paths",
    kind: "notable",
    x: 550,
    y: 240,
    stats: [
      "Grants Skill: Moment of Vulnerability",
      "When an enemy is primed for Freeze, Stun or Electrocute, a damageable echo appears",
    ],
    tags: ["oracle"],
    region: "oracle",
  },
  {
    id: "harmony-within",
    name: "Harmony Within",
    kind: "notable",
    x: 250,
    y: 220,
    stats: [
      "Hit damage is taken from Mana before Life if Mana is higher than Life",
      "15% less maximum Life",
      "15% less maximum Mana",
    ],
    tags: ["oracle", "defence"],
    region: "oracle",
  },
  {
    id: "lesser-harm",
    name: "The Lesser Harm",
    kind: "notable",
    x: 850,
    y: 220,
    stats: ["Enemy Critical Hit Chance against you is Unlucky", "Damage of Enemies Hitting you is Unlucky"],
    tags: ["oracle", "defence"],
    region: "oracle",
  },
  {
    id: "unnamed-heartwood",
    name: "Unnamed Heartwood",
    kind: "notable",
    x: 550,
    y: 500,
    stats: ["+1 to maximum number of Summoned Totems", "Totems die 6 seconds after their Life is reduced to 0"],
    tags: ["oracle", "human"],
    region: "oracle",
  },
];

const notableLinks: [string, string][] = [
  ["start", "insulating-hide"],
  ["insulating-hide", "conall"],
  ["conall", "jewel-north"],
  ["start", "sudden-infuriation"],
  ["sudden-infuriation", "grit"],
  ["sudden-infuriation", "guttural-roar"],
  ["grit", "heart-tissue"],
  ["heart-tissue", "jewel-west"],
  ["guttural-roar", "alchemical-oil"],
  ["start", "blood-of-the-wolf"],
  ["blood-of-the-wolf", "among-the-hordes"],
  ["blood-of-the-wolf", "voracious"],
  ["voracious", "jewel-east"],
  ["insulating-hide", "alchemical-oil"],
  ["conall", "dimensional-weakspot"],
  ["alchemical-oil", "dimensional-weakspot"],
  ["voracious", "sling-shots"],
  ["conall", "sling-shots"],
  ["jewel-north", "unseen-cower"],
  ["dimensional-weakspot", "unseen-cower"],
  ["unseen-cower", "unseen-self"],
  ["unseen-cower", "unseen-focus"],
  ["alchemical-oil", "unseen-leaves"],
  ["unseen-leaves", "unseen-casting"],
  ["among-the-hordes", "unseen-pursuit"],
  ["sling-shots", "unseen-pursuit"],

  ["shaman-start", "turning-seasons"],
  ["turning-seasons", "apocalypse"],
  ["shaman-start", "druidic-champion"],
  ["druidic-champion", "furious-wellspring"],
  ["druidic-champion", "wisdom-maji"],
  ["shaman-start", "reactive-growth"],
  ["reactive-growth", "avatar-evolution"],
  ["reactive-growth", "sacred-flow"],

  ["oracle-start", "unnamed-heartwood"],
  ["oracle-start", "fateful-vision"],
  ["oracle-start", "unseen-path"],
  ["fateful-vision", "forced-outcome"],
  ["fateful-vision", "harmony-within"],
  ["unnamed-heartwood", "converging-paths"],
  ["unseen-path", "entwined"],
  ["unseen-path", "lesser-harm"],
];

const SMALL_STATS: Record<string, { stats: string[]; tags: TreeTag[] }> = {
  "start|insulating-hide": { stats: ["8% increased Skill Speed while Shapeshifted"], tags: ["bear", "wolf", "wyvern"] },
  "insulating-hide|conall": { stats: ["10% increased Armour"], tags: ["defence"] },
  "conall|jewel-north": { stats: ["8% increased Energy Shield Recharge Rate"], tags: ["defence"] },
  "start|sudden-infuriation": { stats: ["12% increased Attack Damage"], tags: ["bear", "rage"] },
  "sudden-infuriation|grit": { stats: ["+8 to Strength"], tags: ["bear"] },
  "sudden-infuriation|guttural-roar": { stats: ["15% increased Warcry Buff Effect"], tags: ["bear", "wolf"] },
  "grit|heart-tissue": { stats: ["+12 to maximum Life"], tags: ["defence"] },
  "heart-tissue|jewel-west": { stats: ["8% increased Life Recoup Rate"], tags: ["defence"] },
  "guttural-roar|alchemical-oil": { stats: ["12% increased Elemental Damage"], tags: ["human", "shaman"] },
  "start|blood-of-the-wolf": { stats: ["10% increased Critical Hit Chance while Shapeshifted"], tags: ["wolf"] },
  "blood-of-the-wolf|among-the-hordes": { stats: ["Minions deal 12% increased Damage"], tags: ["wolf", "minion"] },
  "blood-of-the-wolf|voracious": { stats: ["8% increased Life Leech Rate"], tags: ["wolf", "wyvern"] },
  "voracious|jewel-east": { stats: ["10% increased amount of Life Leeched"], tags: ["wolf"] },
  "insulating-hide|alchemical-oil": { stats: ["+8 to Intelligence"], tags: ["human"] },
  "conall|dimensional-weakspot": { stats: ["12% increased Spell Damage"], tags: ["human"] },
  "alchemical-oil|dimensional-weakspot": { stats: ["10% increased Elemental Ailment Chance"], tags: ["human", "wyvern"] },
  "voracious|sling-shots": { stats: ["12% increased Projectile Damage"], tags: ["wyvern"] },
  "conall|sling-shots": { stats: ["8% increased Area of Effect"], tags: ["wyvern", "bear"] },
  "jewel-north|unseen-cower": { stats: ["8% increased Damage"], tags: ["unseen", "oracle"] },
  "dimensional-weakspot|unseen-cower": { stats: ["8% increased Elemental Damage"], tags: ["unseen", "oracle"] },
  "unseen-cower|unseen-self": { stats: ["Minions have 8% increased maximum Life"], tags: ["unseen", "minion"] },
  "unseen-cower|unseen-focus": { stats: ["8% increased Channelling Damage"], tags: ["unseen", "oracle"] },
  "alchemical-oil|unseen-leaves": { stats: ["8% increased Totem Damage"], tags: ["unseen", "human"] },
  "unseen-leaves|unseen-casting": { stats: ["4% increased Cast Speed"], tags: ["unseen", "human"] },
  "among-the-hordes|unseen-pursuit": { stats: ["3% increased Movement Speed"], tags: ["unseen"] },
  "sling-shots|unseen-pursuit": { stats: ["8% increased Cooldown Recovery Rate"], tags: ["unseen"] },
  "shaman-start|turning-seasons": { stats: ["12% increased Elemental Damage"], tags: ["shaman"] },
  "turning-seasons|apocalypse": { stats: ["+3% to all Elemental Resistances"], tags: ["shaman"] },
  "shaman-start|druidic-champion": { stats: ["+3 to Maximum Rage"], tags: ["shaman", "rage"] },
  "druidic-champion|furious-wellspring": { stats: ["12% increased Mana Regeneration Rate"], tags: ["shaman", "rage"] },
  "druidic-champion|wisdom-maji": { stats: ["10% increased Defences"], tags: ["shaman"] },
  "shaman-start|reactive-growth": { stats: ["+3% to all Elemental Resistances"], tags: ["shaman", "defence"] },
  "reactive-growth|avatar-evolution": { stats: ["10% increased Armour, Evasion and Energy Shield"], tags: ["shaman", "defence"] },
  "reactive-growth|sacred-flow": { stats: ["12% increased Life and Mana Recovery from Flasks"], tags: ["shaman"] },
  "oracle-start|unnamed-heartwood": { stats: ["12% increased Spell Damage"], tags: ["oracle"] },
  "oracle-start|fateful-vision": { stats: ["12% increased Critical Hit Chance"], tags: ["oracle"] },
  "oracle-start|unseen-path": { stats: ["8% increased Life and Mana Regeneration Rate"], tags: ["oracle", "unseen"] },
  "fateful-vision|forced-outcome": { stats: ["12% increased Critical Hit Chance"], tags: ["oracle"] },
  "fateful-vision|harmony-within": { stats: ["8% increased Life Regeneration Rate"], tags: ["oracle", "defence"] },
  "unnamed-heartwood|converging-paths": { stats: ["20% increased Immobilisation Buildup"], tags: ["oracle"] },
  "unseen-path|entwined": { stats: ["Grants 1 Passive Skill Point"], tags: ["oracle"] },
  "unseen-path|lesser-harm": { stats: ["Hits against you have 12% reduced Critical Damage Bonus"], tags: ["oracle", "defence"] },
};

const ORBIT_STATS: Record<string, string[][]> = {
  "insulating-hide": [["8% increased Armour while Shapeshifted"], ["+6% to all Elemental Resistances"]],
  conall: [["10% increased Armour"], ["6% faster start of Energy Shield Recharge"]],
  "sudden-infuriation": [["12% increased Attack Damage"], ["+2 to Maximum Rage"]],
  grit: [["+1% chance to gain an Endurance Charge on Kill"], ["+10 to Strength"]],
  "guttural-roar": [["15% increased Warcry Speed"], ["Warcry Skills have 10% increased Area of Effect"]],
  "heart-tissue": [["+12 to maximum Life"], ["4% of Damage taken Recouped as Life"]],
  "blood-of-the-wolf": [["10% increased Life Regeneration Rate"], ["8% increased amount of Life Leeched"]],
  "among-the-hordes": [["Minions deal 10% increased Damage"], ["Companions have 8% increased Movement Speed"]],
  voracious: [["10% increased Life Leech Rate"], ["8% increased Attack Speed"]],
  "alchemical-oil": [["12% increased Elemental Damage"], ["Exposure you inflict has 8% increased Effect"]],
  "dimensional-weakspot": [["10% increased Elemental Damage"], ["8% increased chance to inflict Elemental Ailments"]],
  "sling-shots": [["12% increased Projectile Damage"], ["10% increased chance to inflict Ailments"]],
  "unseen-cower": [["8% increased Damage"], ["+4% to all Elemental Resistances"]],
  "unseen-self": [["Minions have 8% increased maximum Life"], ["8% increased Minion Damage"]],
  "unseen-focus": [["10% increased Stun Threshold"], ["8% of Damage taken Recouped as Life"]],
  "unseen-leaves": [["10% increased Totem Placement Speed"], ["4% increased Cast Speed"]],
  "unseen-casting": [["8% increased Spell Damage"], ["+8 to Strength"]],
  "unseen-pursuit": [["3% increased Movement Speed"], ["6% increased Cooldown Recovery Rate"]],
};

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function hasOrbit(n: TreeNode) {
  return n.region === "main" && n.kind === "notable";
}

function buildTree() {
  const nodes: TreeNode[] = seeds.map((s) => ({ ...s }));
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const edges: TreeEdge[] = [];
  const gateUse = new Map<string, number>();
  let smallIndex = 0;

  for (const n of [...nodes]) {
    if (!hasOrbit(n)) continue;
    const count = n.tags.includes("unseen") ? 3 : 4;
    const radius = n.tags.includes("unseen") ? 62 : 78;
    const stats = ORBIT_STATS[n.id] ?? [["+5 to Attributes"]];
    const ids: string[] = [];
    for (let i = 0; i < count; i++) {
      const a = -Math.PI / 2 + (i * (2 * Math.PI)) / count + 0.28;
      const id = `${n.id}-o${i}`;
      const line = stats[i % stats.length] ?? stats[0]!;
      nodes.push({
        id,
        name: line[0] ?? "Travel",
        kind: "small",
        x: n.x + Math.cos(a) * radius,
        y: n.y + Math.sin(a) * radius,
        stats: line,
        tags: n.tags,
        region: n.region,
      });
      ids.push(id);
      edges.push({ from: n.id, to: id });
    }
    for (let i = 0; i < ids.length; i++) {
      edges.push({ from: ids[i]!, to: ids[(i + 1) % ids.length]! });
    }
  }

  function gateOf(id: string) {
    const n = byId.get(id);
    if (!n || !hasOrbit(n)) return id;
    const count = n.tags.includes("unseen") ? 3 : 4;
    const used = gateUse.get(id) ?? 0;
    gateUse.set(id, used + 1);
    return `${id}-o${used % count}`;
  }

  for (const [from, to] of notableLinks) {
    const a = byId.get(from);
    const b = byId.get(to);
    if (!a || !b) continue;
    const key = `${from}|${to}`;
    const meta = SMALL_STATS[key] ?? { stats: ["+5 to Attributes"], tags: a.tags };
    const dist = Math.hypot(b.x - a.x, b.y - a.y);
    const count = a.region === "main" ? (dist > 450 ? 3 : 2) : 1;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len = dist || 1;
    const px = -dy / len;
    const py = dx / len;
    let prev = from;
    const dest = gateOf(to);
    const destNode = nodes.find((n) => n.id === dest) ?? b;
    for (let i = 1; i <= count; i++) {
      const t = i / (count + 1);
      const j = Math.sin(t * Math.PI) * (a.region === "main" ? 18 : 0);
      const id = `s${smallIndex++}`;
      nodes.push({
        id,
        name: meta.stats[0] ?? "Travel",
        kind: "small",
        x: lerp(a.x, destNode.x, t) + px * j,
        y: lerp(a.y, destNode.y, t) + py * j,
        stats: meta.stats,
        tags: meta.tags,
        region: a.region,
      });
      edges.push({ from: prev, to: id });
      prev = id;
    }
    edges.push({ from: prev, to: dest });
  }

  return { nodes, edges };
}

export const SKILL_TREE = buildTree();

export const TREE_START: Record<TreeRegion, string> = {
  main: "start",
  shaman: "shaman-start",
  oracle: "oracle-start",
};

export const FILTERS: { id: TreeTag | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "human", label: "Human" },
  { id: "bear", label: "Bear" },
  { id: "wolf", label: "Wolf" },
  { id: "wyvern", label: "Wyvern" },
  { id: "rage", label: "Rage" },
  { id: "minion", label: "Pack" },
  { id: "defence", label: "Hide" },
  { id: "unseen", label: "Unseen" },
];
