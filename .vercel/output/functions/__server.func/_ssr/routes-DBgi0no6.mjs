import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as RotateCcw, c as ChevronDown, i as Search, n as Type, o as Plus, s as Minus, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DBgi0no6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var moss = {
	primary: "#6d8f68",
	secondary: "#3d5a42",
	accent: "#c9c0a8",
	glow: "rgba(109, 143, 104, 0.55)",
	panelBg: "rgba(28, 42, 32, 0.48)",
	abilityBg: "rgba(36, 56, 42, 0.78)",
	skinsBg: "rgba(22, 34, 26, 0.4)",
	border: "rgba(109, 143, 104, 0.38)",
	selected: "rgba(109, 143, 104, 0.72)"
};
var ember = {
	primary: "#c45c2a",
	secondary: "#6b2e14",
	accent: "#e8c4a0",
	glow: "rgba(196, 92, 42, 0.6)",
	panelBg: "rgba(62, 28, 14, 0.48)",
	abilityBg: "rgba(86, 36, 16, 0.78)",
	skinsBg: "rgba(48, 22, 12, 0.4)",
	border: "rgba(196, 92, 42, 0.4)",
	selected: "rgba(212, 108, 48, 0.85)"
};
var moon = {
	primary: "#8eb4c8",
	secondary: "#3a5568",
	accent: "#e8eef2",
	glow: "rgba(142, 180, 200, 0.58)",
	panelBg: "rgba(28, 42, 54, 0.5)",
	abilityBg: "rgba(36, 56, 72, 0.78)",
	skinsBg: "rgba(20, 32, 42, 0.42)",
	border: "rgba(142, 180, 200, 0.4)",
	selected: "rgba(168, 204, 220, 0.88)"
};
var copper = {
	primary: "#c46a32",
	secondary: "#4a2818",
	accent: "#f0d0a0",
	glow: "rgba(196, 106, 50, 0.58)",
	panelBg: "rgba(58, 30, 16, 0.5)",
	abilityBg: "rgba(78, 38, 18, 0.78)",
	skinsBg: "rgba(42, 22, 12, 0.42)",
	border: "rgba(196, 106, 50, 0.4)",
	selected: "rgba(220, 124, 64, 0.88)"
};
var calamity = {
	primary: "#d94a24",
	secondary: "#5a1a0c",
	accent: "#f2d2a0",
	glow: "rgba(217, 74, 36, 0.65)",
	panelBg: "rgba(72, 18, 10, 0.52)",
	abilityBg: "rgba(96, 24, 12, 0.8)",
	skinsBg: "rgba(52, 14, 8, 0.45)",
	border: "rgba(217, 74, 36, 0.45)",
	selected: "rgba(240, 96, 48, 0.9)"
};
var lunar = {
	primary: "#d8e6ee",
	secondary: "#4a6270",
	accent: "#f7f4ee",
	glow: "rgba(216, 230, 238, 0.55)",
	panelBg: "rgba(36, 48, 58, 0.5)",
	abilityBg: "rgba(48, 64, 76, 0.78)",
	skinsBg: "rgba(24, 34, 42, 0.42)",
	border: "rgba(216, 230, 238, 0.38)",
	selected: "rgba(232, 242, 248, 0.92)"
};
var storm = {
	primary: "#c4a060",
	secondary: "#3a4a58",
	accent: "#e8d8b0",
	glow: "rgba(196, 160, 96, 0.55)",
	panelBg: "rgba(42, 36, 22, 0.5)",
	abilityBg: "rgba(62, 50, 28, 0.78)",
	skinsBg: "rgba(32, 28, 16, 0.42)",
	border: "rgba(196, 160, 96, 0.4)",
	selected: "rgba(220, 188, 120, 0.88)"
};
var WOLF_CHROMAS = [
	{
		name: "Moon",
		swatch: "#8eb4c8",
		colors: moon
	},
	{
		name: "Frost",
		swatch: "#d8e6ee",
		colors: lunar
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
			selected: "rgba(196, 72, 52, 0.88)"
		}
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
			selected: "rgba(232, 234, 238, 0.9)"
		}
	},
	{
		name: "Sage",
		swatch: "#6d8f68",
		colors: moss
	}
];
var BEAR_CHROMAS = [
	{
		name: "Ember",
		swatch: "#c45c2a",
		colors: ember
	},
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
			selected: "rgba(212, 196, 168, 0.88)"
		}
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
			selected: "rgba(228, 222, 214, 0.9)"
		}
	},
	{
		name: "Blood",
		swatch: "#8b2a22",
		colors: calamity
	}
];
var WYVERN_CHROMAS = [
	{
		name: "Copper",
		swatch: "#c46a32",
		colors: copper
	},
	{
		name: "Storm",
		swatch: "#c4a060",
		colors: storm
	},
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
			selected: "rgba(132, 180, 108, 0.88)"
		}
	},
	{
		name: "Nightfire",
		swatch: "#d94a24",
		colors: calamity
	}
];
var KITS = {
	human: [
		{
			id: "draiocht",
			name: "Draiocht",
			key: "P",
			tags: ["Passive", "Shapeshift"],
			description: "The old magic lives in the talisman. Casting a human spell returns you to man. Using an animal's primary attack becomes that beast. Spells persist after the change — volcanoes still spit, storms still drench — so the beast inherits the grove's work."
		},
		{
			id: "volcano",
			name: "Volcano",
			key: "Q",
			tags: [
				"Spell",
				"Fire",
				"Duration"
			],
			description: "Raise a scorching volcano from the ground. It erupts in stages as you channel, then keeps hurling magma after you shapeshift. Bear Rampage and Wyvern Rolling Magma detonate it harder."
		},
		{
			id: "entangle",
			name: "Entangle",
			key: "W",
			tags: [
				"Spell",
				"Physical",
				"Plant"
			],
			description: "Conjure rootbound fissures that slow and hold. Vines stack on a target, binding them for the wolf's freeze or the bear's slam."
		},
		{
			id: "thunderstorm",
			name: "Thunderstorm",
			key: "E",
			tags: [
				"Spell",
				"Lightning",
				"Duration"
			],
			description: "Call a drenching storm. Enemies under it take lightning and are soaked — freeze builds faster, shock lands easier. Cast it, then become the wolf."
		},
		{
			id: "tornado",
			name: "Tornado",
			key: "R",
			tags: [
				"Spell",
				"Physical",
				"Orb"
			],
			description: "A hunting wind that chases and hinders. Use it to pin a pack while you choose which skin to wear."
		}
	],
	bear: [
		{
			id: "rage",
			name: "Rage",
			key: "P",
			tags: ["Resource", "Bear"],
			description: "A hulking powerhouse of strength and brawn. Demolishing monsters builds Rage that empowers attacks and roars. Without it the bear is slow. With it, a walking calamity."
		},
		{
			id: "maul",
			name: "Maul",
			key: "Q",
			tags: [
				"Attack",
				"Strike",
				"Shapeshift"
			],
			description: "The primary swipe. Shapeshifts you into the Bear and is the surest way to generate Rage on hit."
		},
		{
			id: "furious-slam",
			name: "Furious Slam",
			key: "W",
			tags: [
				"Attack",
				"Slam",
				"AoE"
			],
			description: "A shockwave slam. Spend Rage for the enraged version: more damage, a wider radius, and Jagged Ground that slows whatever still stands."
		},
		{
			id: "ferocious-roar",
			name: "Ferocious Roar",
			key: "E",
			tags: [
				"Warcry",
				"Nova",
				"Meta"
			],
			description: "A warcry that drinks enemy power for Rage and empowers attacks to break armour. Socket another class's warcry to replace the effect at a steeper cost."
		},
		{
			id: "walking-calamity",
			name: "Walking Calamity",
			key: "R",
			tags: [
				"Attack",
				"Fire",
				"Glory"
			],
			description: "Build Glory at maximum Rage, then roar the sky down. Meteors fall. Fire damage and Rage regeneration follow. The grove remembers this as the last argument."
		}
	],
	wolf: [
		{
			id: "the-pack",
			name: "The Pack",
			key: "P",
			tags: ["Passive", "Minion"],
			description: "As a creature of the night, the wolf channels the Moon itself. Marked kills summon companions. A true alpha does not hunt alone — but a dead packmate cuts the damage you deal."
		},
		{
			id: "lunar-assault",
			name: "Lunar Assault",
			key: "Q",
			tags: [
				"Attack",
				"Cold",
				"Strike"
			],
			description: "A moon-cold swipe. Converts most physical to cold and builds chill and freeze far beyond a normal strike. The door into Wolf form."
		},
		{
			id: "pounce",
			name: "Pounce",
			key: "W",
			tags: [
				"Attack",
				"Mark",
				"Travel"
			],
			description: "Leap onto a target and apply Predator's Mark. Wolf minions leap with you. When the marked die, the pack grows. Other Mark gems can be socketed in its place."
		},
		{
			id: "cross-slash",
			name: "Cross Slash",
			key: "E",
			tags: [
				"Attack",
				"AoE",
				"Mark"
			],
			description: "Leap backward and cut a shockwave through marked enemies. Pulls and explodes ice fragments. The answer when a boss will not die to feed the pack."
		},
		{
			id: "lunar-blessing",
			name: "Lunar Blessing",
			key: "R",
			tags: [
				"Spell",
				"Buff",
				"Cold"
			],
			description: "The wolf goes white. Self and minions gain cold damage, attack speed, and movement. Spend Rage to keep the moon. Strikes call moonbeams."
		}
	],
	wyvern: [
		{
			id: "devour",
			name: "Devour",
			key: "P",
			tags: ["Attack", "Charge"],
			description: "A sight seldom seen in Wraeclast. The wyvern empowers itself by devouring the freshly dead — corpses and cullable foes grant Power Charges and life. It is a dragon, after all."
		},
		{
			id: "rend",
			name: "Rend",
			key: "Q",
			tags: [
				"Attack",
				"Melee",
				"Shapeshift"
			],
			description: "Leap in and slash. Consume a Power Charge to load the wings with lightning, turning later blasts into storms."
		},
		{
			id: "wing-blast",
			name: "Wing Blast",
			key: "W",
			tags: [
				"Attack",
				"Wind",
				"AoE"
			],
			description: "Launch backward, knocking foes and stunning those primed for Heavy Stun. Charged wings add lightning explosions. A chance at another Power Charge on the stun."
		},
		{
			id: "rolling-magma",
			name: "Rolling Magma",
			key: "E",
			tags: [
				"Attack",
				"Fire",
				"Projectile"
			],
			description: "Spit bouncing fire that chains. It wakes human-form Volcanoes and molten fissures on impact — the intended handshake between man and dragon."
		},
		{
			id: "flame-breath",
			name: "Flame Breath",
			key: "R",
			tags: [
				"Attack",
				"Fire",
				"Channel"
			],
			description: "Take the sky and rain a stream of flame. Consume a Power Charge for lightning infusion. Vulnerable while the channel holds. High ignite. A dragon's privilege."
		}
	]
};
var EXTRA_SKILLS = [
	{
		kit: "human",
		name: "Spell Totem",
		text: "Plant a totem that keeps casting a socketed spell. Charges stretch its life and damage."
	},
	{
		kit: "human",
		name: "Thrashing Vines",
		text: "Living plant lashes. Pairs with Entangle to keep a pack rooted for the beast."
	},
	{
		kit: "bear",
		name: "Rampage",
		text: "Roar, then spend Rage running a chain of slams. Volcanoes erupt harder under the feet."
	},
	{
		kit: "bear",
		name: "Fury of the Mountain",
		text: "Channeled slams that convert to fire and leave molten fissures. Rage on hit."
	},
	{
		kit: "wolf",
		name: "Shred",
		text: "Fast claws. Frozen targets shed ice fragments that the next cut detonates."
	},
	{
		kit: "wolf",
		name: "Arctic Howl",
		text: "A cold warcry that freezes primed enemies and empowers attacks with moon-cold."
	},
	{
		kit: "wyvern",
		name: "Oil Barrage",
		text: "Spit oil that slows and exposes. Power Charges turn it into an electrified stream."
	}
];
var FORMS = [
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
		blurb: "Staff in hand. The grove's spells are laid first — volcano, storm, root — then the man is gone.",
		resource: "Mana · Talisman",
		colors: moss
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
		colors: moss
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
		chromas: BEAR_CHROMAS
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
		colors: calamity
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
		chromas: WOLF_CHROMAS
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
		chromas: WOLF_CHROMAS
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
		chromas: WOLF_CHROMAS
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
		chromas: WYVERN_CHROMAS
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
		chromas: WYVERN_CHROMAS
	}
];
var LINEAGE = [{
	id: "oracle",
	name: "Oracle",
	relation: "Ascendancy",
	image: "/images/lineage/oracle.jpg",
	quote: "The unseen path is still a path.",
	description: "A druid of foresight. The Oracle does not guess — it stands in a future that has not happened and takes what that future already learned.",
	nodes: [
		{
			name: "Fateful Vision",
			text: "Anticipate the next action. Strike from a moment that has not arrived."
		},
		{
			name: "Moment of Vulnerability",
			text: "Enemies have a destined weak beat. The Oracle waits for it."
		},
		{
			name: "The Unseen Path",
			text: "Learn skills from alternate futures — things this life was never offered."
		}
	]
}, {
	id: "shaman",
	name: "Shaman",
	relation: "Ascendancy",
	image: "/images/lineage/shaman.jpg",
	quote: "Rage is a weather system.",
	description: "The elemental rage-caster. The Shaman does not spend Rage only on the bear's slam — it turns that heat into storms the grove itself would fear.",
	nodes: [{
		name: "Wisdom of the Maji",
		text: "New language on runes and idols. The old markings speak again."
	}, {
		name: "Bringer of the Apocalypse",
		text: "Rage becomes fire, lightning, and ending. A storm-lord's work."
	}]
}];
var BIO_PARAS = [
	"Once the Wildwood had a people. They kept the old pacts — bone, root, and moon — and walked as beast when the forest asked it of them. Then the Mists came, and the groves went quiet.",
	"He is what remains. A wanderer of Wraeclast, last keeper of Draiocht, who wears an Animal Talisman and becomes what the hunt requires: the bear that breaks the ground, the wolf that runs with the moon, the wyvern that eats the dead and calls the storm.",
	"Human hands still raise volcanoes and thunderstorms. Spells linger after the skin changes. Then the man is gone, and something older finishes the work."
];
var STATS = [
	{
		label: "Region",
		value: "Wraeclast"
	},
	{
		label: "Role",
		value: "Shapeshifter"
	},
	{
		label: "Attributes",
		value: "Str / Int"
	},
	{
		label: "Weapon",
		value: "Talisman"
	}
];
var SITE = {
	name: "The Druid",
	title: "The Last of the Druids",
	eyebrow: "Wraeclast",
	loaderStatus: "The grove remembers…",
	quote: "Ye defile the Wildwood no longer.",
	legal: "This is a non-commercial, fan-made site. Path of Exile 2 © Grinding Gear Games. GGG does not endorse or sponsor this project.",
	copyright: "Path of Exile 2 © Grinding Gear Games",
	notice: "Fan-made. Not affiliated with Grinding Gear Games."
};
var DEFAULT_FORM_ID = "human";
function formById(id) {
	return FORMS.find((f) => f.id === id) ?? FORMS[0];
}
function resolveColors(form, chromaIndex) {
	if (chromaIndex === null || !form.chromas?.length) return form.colors;
	return form.chromas[chromaIndex]?.colors ?? form.colors;
}
var THEME_VARS = {
	primary: "--theme-primary",
	secondary: "--theme-secondary",
	accent: "--theme-accent",
	glow: "--theme-glow",
	panelBg: "--theme-panel",
	abilityBg: "--theme-ability",
	skinsBg: "--theme-skins",
	border: "--theme-border",
	selected: "--theme-selected"
};
function applyTheme(colors) {
	const root = document.documentElement;
	Object.keys(THEME_VARS).forEach((key) => {
		root.style.setProperty(THEME_VARS[key], colors[key]);
	});
}
var STORAGE = {
	notice: "druid-fan-notice-closed",
	form: "druid-active-form",
	chromas: "druid-active-chromas",
	scrollOnSelect: "druid-scroll-on-select"
};
function readStoredForm(fallback) {
	try {
		return localStorage.getItem(STORAGE.form) ?? fallback;
	} catch {
		return fallback;
	}
}
function writeStoredForm(id) {
	try {
		localStorage.setItem(STORAGE.form, id);
	} catch {}
}
function readStoredChroma(formName) {
	try {
		const raw = localStorage.getItem(STORAGE.chromas);
		if (!raw) return null;
		const n = JSON.parse(raw)[formName];
		return typeof n === "number" ? n : null;
	} catch {
		return null;
	}
}
function writeStoredChroma(formName, index) {
	try {
		const raw = localStorage.getItem(STORAGE.chromas);
		const map = raw ? JSON.parse(raw) : {};
		if (index === null) delete map[formName];
		else map[formName] = index;
		localStorage.setItem(STORAGE.chromas, JSON.stringify(map));
	} catch {}
}
function readScrollOnSelect() {
	try {
		return localStorage.getItem(STORAGE.scrollOnSelect) !== "off";
	} catch {
		return true;
	}
}
function writeScrollOnSelect(on) {
	try {
		localStorage.setItem(STORAGE.scrollOnSelect, on ? "on" : "off");
	} catch {}
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Abilities({ kit, abilities, selected, onSelect }) {
	const extras = EXTRA_SKILLS.filter((s) => s.kit === kit);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		className: "relative px-6 py-24 sm:px-12 lg:px-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 font-display text-[0.68rem] tracking-[0.4em] text-primary uppercase",
					children: "Combat"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl font-semibold tracking-[-0.02em] text-fg sm:text-5xl",
					children: "Combat abilities"
				})] }), selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onSelect(null),
					className: "inline-flex min-h-11 items-center gap-2 border border-line px-4 font-display text-[0.68rem] tracking-[0.2em] text-muted uppercase transition-colors hover:border-primary hover:text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" }), "Close"]
				}) : null]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[1.1fr_0.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-2",
					children: abilities.map((ability, i) => {
						const active = selected?.id === ability.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onSelect(active ? null : ability),
							className: cn("ability-row flex w-full min-h-16 items-center gap-4 border border-transparent border-r-2 px-3 py-3 text-left transition-[background,border-color] duration-300", active ? "border-r-primary" : "hover:bg-panel"),
							"data-active": active,
							style: { animationDelay: `${i * 60}ms` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-11 shrink-0 place-items-center border border-line bg-bg/40 font-display text-sm text-primary",
								children: ability.key
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-lg tracking-wide text-fg",
									children: ability.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 flex flex-wrap gap-1.5",
									children: ability.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-[0.58rem] tracking-[0.16em] text-muted uppercase",
										children: t
									}, t))
								})]
							})]
						}) }, ability.id);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "border border-line bg-panel p-6 sm:p-8",
					children: [selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stagger-in",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-2 font-display text-[0.62rem] tracking-[0.32em] text-primary uppercase",
								children: [
									selected.key,
									" · ",
									selected.tags[0]
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-4 font-display text-3xl text-fg",
								children: selected.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-body text-lg leading-relaxed text-fg/85",
								children: selected.description
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-body text-lg text-muted italic",
						children: "Choose a skill. The kit follows the form you wear."
					}), extras.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-3 border-t border-line pt-6",
						children: extras.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm tracking-wide text-accent",
							children: s.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-body text-[1.05rem] text-muted",
							children: s.text
						})] }, s.name))
					}) : null]
				})]
			})]
		})
	});
}
function Biography() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "origins",
		className: "relative overflow-hidden px-6 py-24 sm:px-12 lg:px-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[url('/images/hero/wildwood.jpg')] bg-cover bg-center opacity-[0.14]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 font-display text-[0.68rem] tracking-[0.4em] text-primary uppercase",
						children: "Origins"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-8 font-display text-4xl font-semibold tracking-[-0.02em] text-fg sm:text-5xl",
						children: "Last of a quiet people"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "mb-10 border-l-2 border-primary pl-5 font-display text-xl text-accent italic sm:text-2xl",
						children: SITE.quote
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-5 font-body text-lg leading-relaxed text-fg/80",
						children: BIO_PARAS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p.slice(0, 24)))
					})
				]
			})
		]
	});
}
function FanNotice() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			if (localStorage.getItem(STORAGE.notice) === "1") return;
		} catch {}
		setOpen(true);
		const t = window.setTimeout(() => dismiss(), 15e3);
		return () => window.clearTimeout(t);
	}, []);
	function dismiss() {
		setOpen(false);
		try {
			localStorage.setItem(STORAGE.notice, "1");
		} catch {}
	}
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fan-notice fixed top-3 right-0 left-0 z-[90] mx-auto flex min-h-11 w-[min(92vw,520px)] items-center gap-3 overflow-hidden rounded-lg border border-fg/15 bg-linear-to-br from-bg/90 to-bg/70 px-4 py-3 backdrop-blur-md",
		role: "status",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "min-w-0 flex-1 text-center font-display text-[0.72rem] font-bold tracking-[0.08em] text-fg/90 uppercase",
				children: SITE.notice
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Dismiss notice",
				onClick: dismiss,
				className: "grid size-[26px] shrink-0 place-items-center rounded-full border border-fg/20 bg-bg/40 text-fg/70 transition-colors duration-200 hover:border-primary hover:text-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-xs leading-none",
					children: "x"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute right-0 bottom-0 left-0 h-0.5 origin-left bg-linear-to-r from-transparent via-primary to-transparent",
				style: { animation: "notice-progress 15s linear forwards" }
			})
		]
	});
}
function TalismanMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 200 200",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "100",
				cy: "100",
				r: "92",
				stroke: "currentColor",
				strokeOpacity: "0.28",
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "100",
				cy: "100",
				r: "78",
				stroke: "currentColor",
				strokeOpacity: "0.55",
				strokeWidth: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "currentColor",
				d: "M100 18c3 22 10 42 10 66 16-12 31-20 48-24-6 20-18 35-33 48 18 4 33 13 48 24-20 2-38-2-56-8 2 20 2 38 4 58H79c2-20 2-38 4-58-18 6-36 10-56 8 15-11 30-20 48-24-15-13-27-28-33-48 17 4 32 12 48 24 0-24 7-44 10-66z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "100",
				cy: "92",
				r: "6",
				fill: "currentColor",
				opacity: "0.9"
			})
		]
	});
}
var RUNES = [
	{
		x: "8%",
		y: "22%",
		rot: "18deg",
		delay: "0s",
		size: 34
	},
	{
		x: "86%",
		y: "18%",
		rot: "-22deg",
		delay: "0.6s",
		size: 28
	},
	{
		x: "12%",
		y: "68%",
		rot: "40deg",
		delay: "1.1s",
		size: 30
	},
	{
		x: "90%",
		y: "62%",
		rot: "-12deg",
		delay: "1.8s",
		size: 36
	},
	{
		x: "6%",
		y: "44%",
		rot: "8deg",
		delay: "0.3s",
		size: 22
	},
	{
		x: "93%",
		y: "40%",
		rot: "-30deg",
		delay: "1.4s",
		size: 24
	}
];
function RuneField() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 z-10 overflow-hidden",
		"aria-hidden": "true",
		children: RUNES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "rune-float absolute text-primary/35",
			style: {
				left: r.x,
				top: r.y,
				width: r.size,
				height: r.size,
				animationDelay: r.delay,
				["--rot"]: r.rot
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TalismanMark, { className: "h-full w-full" })
		}, `${r.x}-${r.y}`))
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden border-t border-line px-6 py-20 sm:px-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/hero/wildwood.jpg",
				alt: "",
				className: "absolute top-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-cover opacity-25 mix-blend-luminosity"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/75" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex max-w-3xl flex-col items-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TalismanMark, { className: "mb-6 size-16 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-[0.7rem] tracking-[0.42em] text-fg/70 uppercase",
						children: SITE.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-display text-[0.62rem] tracking-[0.28em] text-fg/30 uppercase",
						children: [
							SITE.title,
							" — ",
							SITE.eyebrow
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-8 h-px w-40 bg-linear-to-r from-transparent via-primary to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md font-display text-xl text-accent italic",
						children: SITE.quote
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 max-w-lg font-body text-sm leading-relaxed text-muted",
						children: SITE.legal
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-body text-sm text-faint",
						children: SITE.copyright
					})
				]
			})
		]
	});
}
function FormsGallery({ forms, activeId, chromaIndex, scrollOnSelect, onSelect, onChroma, onToggleScroll }) {
	const active = forms.find((f) => f.id === activeId) ?? forms[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "forms",
		className: "relative bg-skins px-6 py-24 sm:px-12 lg:px-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "skins-header mb-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 font-display text-[0.68rem] tracking-[0.4em] text-primary uppercase",
							children: "Shapeshift"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl font-semibold tracking-[-0.02em] text-fg sm:text-5xl",
								children: "The forms"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: onToggleScroll,
								className: "skins-scroll-toggle inline-flex min-h-11 items-center gap-3 self-start border border-line bg-bg/30 px-3 py-2",
								"aria-pressed": scrollOnSelect,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("relative h-[19px] w-[38px] rounded-full border border-line transition-colors", scrollOnSelect ? "bg-primary/40" : "bg-bg/60"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute top-[2px] size-3.5 rounded-full bg-fg transition-[left] duration-200", scrollOnSelect ? "left-[21px]" : "left-[2px]") })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-[0.68rem] tracking-[0.14em] text-muted uppercase",
									children: [
										"Scroll to top on select (",
										scrollOnSelect ? "on" : "off",
										")"
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full max-w-xs bg-linear-to-r from-primary via-transparent to-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 font-display text-xs tracking-[0.2em] text-muted uppercase",
							children: [
								forms.length,
								" aspects · selected ",
								active.name
							]
						})
					]
				}),
				active.chromas?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-[0.62rem] tracking-[0.22em] text-muted uppercase",
							children: "Chromas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							title: "Base",
							"aria-label": "Base chroma",
							onClick: () => onChroma(null),
							className: cn("size-11 rounded-full border-2 bg-bone transition-transform", chromaIndex === null ? "scale-110 border-fg" : "border-fg/20")
						}),
						active.chromas.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							title: c.name,
							"aria-label": c.name,
							onClick: () => onChroma(i),
							className: cn("size-11 rounded-full border-2 transition-transform", chromaIndex === i ? "scale-110 border-fg" : "border-fg/20"),
							style: { background: c.swatch }
						}, c.name))
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: forms.map((form) => {
						const on = form.id === activeId;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onSelect(form),
							className: cn("group relative min-h-[400px] overflow-hidden border text-left transition-[border-color,box-shadow] duration-300", form.type === "CALAMITY" && "calamity-card", on ? "border-selected shadow-[0_0_24px_var(--theme-glow)]" : "border-line hover:border-primary/70"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: form.image,
									alt: "",
									className: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]",
									style: { objectPosition: form.position }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-bg from-15% via-bg/25 to-transparent" }),
								form.chromas?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "skin-chroma-dot" }) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-0 bottom-0 p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("font-display text-[0.58rem] tracking-[0.22em] uppercase", form.type === "CALAMITY" ? "text-accent" : "text-muted"),
											children: form.type
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 font-display text-xl text-fg",
											children: form.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-[0.68rem] tracking-[0.16em] text-primary uppercase",
											children: form.resource
										})
									]
								})
							]
						}, form.id);
					})
				})
			]
		})
	});
}
function Hero({ form, isMobile }) {
	const src = form.heroImage ?? form.image;
	const pos = isMobile ? form.mobilePosition : form.position;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative h-dvh min-h-[640px] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover transition-[object-position] duration-700",
				style: { objectPosition: pos }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-r from-bg via-bg/40 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-bg via-transparent to-bg/25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RuneField, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-20 flex h-full flex-col justify-end px-6 pt-24 pb-16 sm:px-12 lg:px-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "stagger-in mb-4 font-display text-[0.68rem] tracking-[0.42em] text-primary uppercase",
						style: { animationDelay: "80ms" },
						children: SITE.eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						"aria-label": "Druid",
						className: "glitch stagger-in font-display text-[clamp(3.4rem,12vw,8.2rem)] leading-[0.9] font-semibold tracking-[-0.03em] text-fg",
						"data-text": "DRUID",
						style: {
							animationDelay: "140ms",
							textShadow: "0 0 28px var(--theme-glow)"
						},
						children: "DRUID"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stagger-in mt-4 flex items-center gap-3",
						style: { animationDelay: "220ms" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm tracking-[0.22em] text-accent uppercase sm:text-base",
							children: SITE.title
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "stagger-in mt-5 max-w-lg font-body text-lg text-fg/80 italic sm:text-xl",
						style: { animationDelay: "300ms" },
						children: form.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "stagger-in mt-8 flex flex-wrap gap-x-8 gap-y-4",
						style: { animationDelay: "380ms" },
						children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-display text-[0.62rem] tracking-[0.28em] text-muted uppercase",
							children: s.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 font-display text-sm tracking-[0.08em] text-fg",
							children: s.value
						})] }, s.label))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#origins",
				className: "scroll-hint absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-[0.62rem] tracking-[0.32em] uppercase",
						children: "Scroll"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-8 w-px bg-linear-to-b from-primary to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
						className: "size-4",
						strokeWidth: 1.5
					})
				]
			})
		]
	});
}
function Lineage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "lineage",
		className: "px-6 py-24 sm:px-12 lg:px-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 font-display text-[0.68rem] tracking-[0.4em] text-primary uppercase",
					children: "Ascendancy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-12 font-display text-4xl font-semibold tracking-[-0.02em] text-fg sm:text-5xl",
					children: "Lineage"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-8 md:grid-cols-2",
					children: LINEAGE.map((node) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "overflow-hidden border border-line bg-panel",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-72 sm:h-80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: node.image,
									alt: node.name,
									className: "absolute inset-0 h-full w-full object-cover",
									style: { objectPosition: node.id === "shaman" ? "50% 22%" : "50% 12%" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-4 left-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-[0.62rem] tracking-[0.28em] text-primary uppercase",
										children: node.relation
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-3xl text-fg",
										children: node.name
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4 font-display text-lg text-accent italic",
									children: node.quote
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-6 font-body text-lg leading-relaxed text-fg/85",
									children: node.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-4",
									children: node.nodes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-sm tracking-wide text-primary",
										children: n.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-body text-[1.05rem] text-muted",
										children: n.text
									})] }, n.name))
								})
							]
						})]
					}, node.id))
				})
			]
		})
	});
}
function Loader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-bg text-fg",
		"aria-label": "Loading the grove",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative size-[150px]",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "loader-ring absolute inset-[15px] rounded-full border border-primary/30 border-t-primary border-t-2" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "loader-glow absolute inset-[18px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--theme-primary)_28%,transparent)_0%,transparent_72%)] shadow-[0_0_36px_var(--theme-glow)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "loader-mark absolute inset-6 text-fg drop-shadow-[0_0_14px_var(--theme-glow)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TalismanMark, { className: "h-full w-full" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-2 font-display text-[0.65rem] tracking-[0.4em] text-fg/40 uppercase",
					children: SITE.eyebrow
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-xs tracking-[0.25em] text-primary/80 uppercase",
					children: SITE.loaderStatus
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-0.5 w-60 overflow-hidden bg-fg/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-primary",
					style: { animation: "loading-bar 2.1s var(--ease-out) forwards" }
				})
			})
		]
	});
}
var LINKS = [
	{
		href: "#origins",
		label: "Origins"
	},
	{
		href: "#skills",
		label: "Skills"
	},
	{
		href: "#tree",
		label: "Tree"
	},
	{
		href: "#forms",
		label: "Forms"
	},
	{
		href: "#lineage",
		label: "Lineage"
	}
];
function Nav() {
	const [solid, setSolid] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setSolid(window.scrollY > window.innerHeight * .72);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed top-0 right-0 left-0 z-40 flex items-center justify-between px-5 py-4 transition-[background,border-color,backdrop-filter] duration-300", solid ? "border-b border-line bg-bg/80 backdrop-blur-md" : "border-b border-transparent bg-transparent"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#top",
				className: "font-display text-[0.7rem] tracking-[0.32em] text-fg/80 uppercase transition-colors hover:text-primary",
				children: "The Druid"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "hidden items-center gap-6 sm:flex",
				"aria-label": "Sections",
				children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					className: "font-display text-[0.68rem] tracking-[0.22em] text-muted uppercase transition-colors hover:text-fg",
					children: l.label
				}, l.href))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-wrap items-center justify-end gap-1 sm:hidden",
				"aria-label": "Sections",
				children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					className: "grid min-h-11 place-items-center px-1.5 font-display text-[0.56rem] tracking-[0.1em] text-muted uppercase",
					children: l.label
				}, l.href))
			})
		]
	});
}
var WORLD = {
	main: {
		w: 2400,
		h: 1700
	},
	shaman: {
		w: 1100,
		h: 900
	},
	oracle: {
		w: 1100,
		h: 900
	}
};
var REGION_LABELS = [
	{
		region: "main",
		text: "BEAR",
		x: 480,
		y: 1120
	},
	{
		region: "main",
		text: "WOLF",
		x: 1860,
		y: 1120
	},
	{
		region: "main",
		text: "HIDE",
		x: 1200,
		y: 980
	},
	{
		region: "main",
		text: "MAJI",
		x: 560,
		y: 500
	},
	{
		region: "main",
		text: "WYVERN",
		x: 1780,
		y: 500
	},
	{
		region: "main",
		text: "THE UNSEEN PATH",
		x: 1200,
		y: 36
	},
	{
		region: "shaman",
		text: "SHAMAN",
		x: 550,
		y: 70
	},
	{
		region: "oracle",
		text: "ORACLE",
		x: 550,
		y: 70
	}
];
var seeds = [
	{
		id: "start",
		name: "The Druid",
		kind: "start",
		x: 1200,
		y: 1480,
		stats: [
			"Str / Int hybrid",
			"North-west of the Wraeclast tree",
			"Talisman · Shapeshift"
		],
		tags: [
			"human",
			"bear",
			"wolf",
			"wyvern"
		],
		region: "main"
	},
	{
		id: "insulating-hide",
		name: "Insulating Hide",
		kind: "notable",
		x: 1200,
		y: 1140,
		stats: ["+20% of Armour also applies to Elemental Damage while Shapeshifted", "20% faster start of Energy Shield Recharge while Shapeshifted"],
		tags: [
			"defence",
			"bear",
			"wolf",
			"wyvern"
		],
		region: "main"
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
			"Immune to Bleeding while Shapeshifted"
		],
		tags: [
			"defence",
			"bear",
			"wolf",
			"wyvern"
		],
		region: "main"
	},
	{
		id: "sudden-infuriation",
		name: "Sudden Infuriation",
		kind: "notable",
		x: 780,
		y: 1340,
		stats: ["Chance to gain Maximum Rage on Hit with Attacks", "The bear's first Rage engine"],
		tags: [
			"bear",
			"rage",
			"wolf"
		],
		region: "main"
	},
	{
		id: "grit",
		name: "Grit",
		kind: "notable",
		x: 420,
		y: 1180,
		stats: ["+1 to Maximum Endurance Charges", "Chance to gain an additional Endurance Charge"],
		tags: [
			"bear",
			"wolf",
			"defence"
		],
		region: "main"
	},
	{
		id: "guttural-roar",
		name: "Guttural Roar",
		kind: "notable",
		x: 620,
		y: 1e3,
		stats: [
			"25% increased Warcry Speed",
			"Enemies in Warcry area are Debilitated",
			"Debilitated enemies have 20% reduced Movement Speed and deal 10% reduced Damage to you"
		],
		tags: ["bear", "wolf"],
		region: "main"
	},
	{
		id: "heart-tissue",
		name: "Heart Tissue",
		kind: "notable",
		x: 300,
		y: 860,
		stats: ["8% of Damage taken Recouped as Life"],
		tags: ["defence", "bear"],
		region: "main"
	},
	{
		id: "blood-of-the-wolf",
		name: "Blood of the Wolf",
		kind: "notable",
		x: 1620,
		y: 1340,
		stats: ["15% increased amount of Life Leeched while Shapeshifted", "15% increased Life Regeneration Rate while Shapeshifted"],
		tags: ["wolf"],
		region: "main"
	},
	{
		id: "among-the-hordes",
		name: "Among the Hordes",
		kind: "notable",
		x: 1980,
		y: 1180,
		stats: ["Minions and Companions have 10% increased Movement Speed"],
		tags: ["wolf", "minion"],
		region: "main"
	},
	{
		id: "voracious",
		name: "Voracious",
		kind: "notable",
		x: 1780,
		y: 1e3,
		stats: ["15% increased Attack Speed while Leeching"],
		tags: [
			"wolf",
			"wyvern",
			"defence"
		],
		region: "main"
	},
	{
		id: "alchemical-oil",
		name: "Alchemical Oil",
		kind: "notable",
		x: 680,
		y: 620,
		stats: ["Exposure you inflict has 26% effect (from 20%)", "Shaman and caster oil for elemental setups"],
		tags: [
			"human",
			"shaman",
			"wyvern"
		],
		region: "main"
	},
	{
		id: "dimensional-weakspot",
		name: "Dimensional Weakspot",
		kind: "notable",
		x: 980,
		y: 420,
		stats: ["15% chance to invert enemy Elemental Resistances"],
		tags: [
			"human",
			"wyvern",
			"oracle"
		],
		region: "main"
	},
	{
		id: "sling-shots",
		name: "Sling Shots",
		kind: "notable",
		x: 1680,
		y: 620,
		stats: ["Increased chance to inflict Ailments with Projectiles", "Rolling Magma and Oil Barrage live here"],
		tags: ["wyvern"],
		region: "main"
	},
	{
		id: "unseen-cower",
		name: "Cower Before the First Ones",
		kind: "notable",
		x: 1200,
		y: 80,
		stats: ["30% increased Fire, Cold, Lightning, Physical and Chaos Damage", "Requires The Unseen Path (Oracle)"],
		tags: [
			"unseen",
			"oracle",
			"human"
		],
		region: "main"
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
			"Requires The Unseen Path (Oracle)"
		],
		tags: [
			"unseen",
			"oracle",
			"minion",
			"wolf"
		],
		region: "main"
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
			"Requires The Unseen Path (Oracle)"
		],
		tags: [
			"unseen",
			"oracle",
			"human",
			"wyvern"
		],
		region: "main"
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
			"Requires The Unseen Path (Oracle)"
		],
		tags: [
			"unseen",
			"oracle",
			"human"
		],
		region: "main"
	},
	{
		id: "unseen-casting",
		name: "Powerful Casting",
		kind: "notable",
		x: 220,
		y: 500,
		stats: ["Increased Spell Damage per 10 Strength", "Requires The Unseen Path (Oracle)"],
		tags: [
			"unseen",
			"oracle",
			"human"
		],
		region: "main"
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
			"Requires The Unseen Path (Oracle)"
		],
		tags: ["unseen", "oracle"],
		region: "main"
	},
	{
		id: "jewel-west",
		name: "Jewel Socket",
		kind: "jewel",
		x: 480,
		y: 720,
		stats: ["Socket a Jewel", "West of the grove, off Heart Tissue"],
		tags: ["defence", "bear"],
		region: "main"
	},
	{
		id: "jewel-north",
		name: "Jewel Socket",
		kind: "jewel",
		x: 1200,
		y: 560,
		stats: ["Socket a Jewel", "Between Conall and the Unseen Path"],
		tags: ["defence", "human"],
		region: "main"
	},
	{
		id: "jewel-east",
		name: "Jewel Socket",
		kind: "jewel",
		x: 1920,
		y: 820,
		stats: ["Socket a Jewel", "East of the grove, off Voracious"],
		tags: ["wolf", "minion"],
		region: "main"
	},
	{
		id: "shaman-start",
		name: "Shaman",
		kind: "start",
		x: 550,
		y: 740,
		stats: ["Wraeclast has suffered for too long.", "You are vengeance incarnate."],
		tags: ["shaman"],
		region: "shaman"
	},
	{
		id: "turning-seasons",
		name: "Turning of the Seasons",
		kind: "notable",
		x: 550,
		y: 500,
		stats: ["Enemies in your Presence have Exposure", "Gain 10% of Damage as Extra Damage of a random Element"],
		tags: ["shaman", "human"],
		region: "shaman"
	},
	{
		id: "apocalypse",
		name: "Bringer of the Apocalypse",
		kind: "ascendancy",
		x: 550,
		y: 240,
		stats: ["Grants Skill: Apocalypse", "A rain of all elements after enough elemental damage"],
		tags: [
			"shaman",
			"human",
			"wyvern"
		],
		region: "shaman"
	},
	{
		id: "druidic-champion",
		name: "Druidic Champion",
		kind: "notable",
		x: 250,
		y: 620,
		stats: ["Every 2 Rage also grants 1% more Spell Damage"],
		tags: [
			"shaman",
			"rage",
			"human"
		],
		region: "shaman"
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
			"+7 to Maximum Rage"
		],
		tags: [
			"shaman",
			"rage",
			"bear"
		],
		region: "shaman"
	},
	{
		id: "wisdom-maji",
		name: "Wisdom of the Maji",
		kind: "notable",
		x: 250,
		y: 220,
		stats: ["Gain the benefits of Bonded modifiers on Runes and Idols"],
		tags: ["shaman"],
		region: "shaman"
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
			"Maximum 3 Adaptations"
		],
		tags: ["shaman", "defence"],
		region: "shaman"
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
			"Double Adaptation Effect"
		],
		tags: ["shaman", "defence"],
		region: "shaman"
	},
	{
		id: "sacred-flow",
		name: "Sacred Flow",
		kind: "notable",
		x: 850,
		y: 220,
		stats: ["+40 to Spirit for each of your empty Charm slots"],
		tags: ["shaman"],
		region: "shaman"
	},
	{
		id: "oracle-start",
		name: "Oracle",
		kind: "start",
		x: 550,
		y: 740,
		stats: ["There are many paths to achieve your goals…", "and you see them all."],
		tags: ["oracle"],
		region: "oracle"
	},
	{
		id: "unseen-path",
		name: "The Unseen Path",
		kind: "ascendancy",
		x: 850,
		y: 560,
		stats: ["Walk the Paths Not Taken", "Reveals Oracle-only clusters on the main passive tree"],
		tags: ["oracle", "unseen"],
		region: "oracle"
	},
	{
		id: "entwined",
		name: "Entwined Realities",
		kind: "notable",
		x: 960,
		y: 340,
		stats: ["Non-Keystone Passive Skills in Medium Radius of allocated Keystones", "can be allocated without being connected to your tree"],
		tags: ["oracle"],
		region: "oracle"
	},
	{
		id: "fateful-vision",
		name: "Fateful Vision",
		kind: "notable",
		x: 250,
		y: 560,
		stats: ["Grants Skill: Align Fate", "A vision of yourself using a skill — match it for extra damage"],
		tags: ["oracle"],
		region: "oracle"
	},
	{
		id: "forced-outcome",
		name: "Forced Outcome",
		kind: "notable",
		x: 140,
		y: 360,
		stats: ["Inevitable Critical Hits"],
		tags: ["oracle"],
		region: "oracle"
	},
	{
		id: "converging-paths",
		name: "Converging Paths",
		kind: "notable",
		x: 550,
		y: 240,
		stats: ["Grants Skill: Moment of Vulnerability", "When an enemy is primed for Freeze, Stun or Electrocute, a damageable echo appears"],
		tags: ["oracle"],
		region: "oracle"
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
			"15% less maximum Mana"
		],
		tags: ["oracle", "defence"],
		region: "oracle"
	},
	{
		id: "lesser-harm",
		name: "The Lesser Harm",
		kind: "notable",
		x: 850,
		y: 220,
		stats: ["Enemy Critical Hit Chance against you is Unlucky", "Damage of Enemies Hitting you is Unlucky"],
		tags: ["oracle", "defence"],
		region: "oracle"
	},
	{
		id: "unnamed-heartwood",
		name: "Unnamed Heartwood",
		kind: "notable",
		x: 550,
		y: 500,
		stats: ["+1 to maximum number of Summoned Totems", "Totems die 6 seconds after their Life is reduced to 0"],
		tags: ["oracle", "human"],
		region: "oracle"
	}
];
var notableLinks = [
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
	["unseen-path", "lesser-harm"]
];
var SMALL_STATS = {
	"start|insulating-hide": {
		stats: ["8% increased Skill Speed while Shapeshifted"],
		tags: [
			"bear",
			"wolf",
			"wyvern"
		]
	},
	"insulating-hide|conall": {
		stats: ["10% increased Armour"],
		tags: ["defence"]
	},
	"conall|jewel-north": {
		stats: ["8% increased Energy Shield Recharge Rate"],
		tags: ["defence"]
	},
	"start|sudden-infuriation": {
		stats: ["12% increased Attack Damage"],
		tags: ["bear", "rage"]
	},
	"sudden-infuriation|grit": {
		stats: ["+8 to Strength"],
		tags: ["bear"]
	},
	"sudden-infuriation|guttural-roar": {
		stats: ["15% increased Warcry Buff Effect"],
		tags: ["bear", "wolf"]
	},
	"grit|heart-tissue": {
		stats: ["+12 to maximum Life"],
		tags: ["defence"]
	},
	"heart-tissue|jewel-west": {
		stats: ["8% increased Life Recoup Rate"],
		tags: ["defence"]
	},
	"guttural-roar|alchemical-oil": {
		stats: ["12% increased Elemental Damage"],
		tags: ["human", "shaman"]
	},
	"start|blood-of-the-wolf": {
		stats: ["10% increased Critical Hit Chance while Shapeshifted"],
		tags: ["wolf"]
	},
	"blood-of-the-wolf|among-the-hordes": {
		stats: ["Minions deal 12% increased Damage"],
		tags: ["wolf", "minion"]
	},
	"blood-of-the-wolf|voracious": {
		stats: ["8% increased Life Leech Rate"],
		tags: ["wolf", "wyvern"]
	},
	"voracious|jewel-east": {
		stats: ["10% increased amount of Life Leeched"],
		tags: ["wolf"]
	},
	"insulating-hide|alchemical-oil": {
		stats: ["+8 to Intelligence"],
		tags: ["human"]
	},
	"conall|dimensional-weakspot": {
		stats: ["12% increased Spell Damage"],
		tags: ["human"]
	},
	"alchemical-oil|dimensional-weakspot": {
		stats: ["10% increased Elemental Ailment Chance"],
		tags: ["human", "wyvern"]
	},
	"voracious|sling-shots": {
		stats: ["12% increased Projectile Damage"],
		tags: ["wyvern"]
	},
	"conall|sling-shots": {
		stats: ["8% increased Area of Effect"],
		tags: ["wyvern", "bear"]
	},
	"jewel-north|unseen-cower": {
		stats: ["8% increased Damage"],
		tags: ["unseen", "oracle"]
	},
	"dimensional-weakspot|unseen-cower": {
		stats: ["8% increased Elemental Damage"],
		tags: ["unseen", "oracle"]
	},
	"unseen-cower|unseen-self": {
		stats: ["Minions have 8% increased maximum Life"],
		tags: ["unseen", "minion"]
	},
	"unseen-cower|unseen-focus": {
		stats: ["8% increased Channelling Damage"],
		tags: ["unseen", "oracle"]
	},
	"alchemical-oil|unseen-leaves": {
		stats: ["8% increased Totem Damage"],
		tags: ["unseen", "human"]
	},
	"unseen-leaves|unseen-casting": {
		stats: ["4% increased Cast Speed"],
		tags: ["unseen", "human"]
	},
	"among-the-hordes|unseen-pursuit": {
		stats: ["3% increased Movement Speed"],
		tags: ["unseen"]
	},
	"sling-shots|unseen-pursuit": {
		stats: ["8% increased Cooldown Recovery Rate"],
		tags: ["unseen"]
	},
	"shaman-start|turning-seasons": {
		stats: ["12% increased Elemental Damage"],
		tags: ["shaman"]
	},
	"turning-seasons|apocalypse": {
		stats: ["+3% to all Elemental Resistances"],
		tags: ["shaman"]
	},
	"shaman-start|druidic-champion": {
		stats: ["+3 to Maximum Rage"],
		tags: ["shaman", "rage"]
	},
	"druidic-champion|furious-wellspring": {
		stats: ["12% increased Mana Regeneration Rate"],
		tags: ["shaman", "rage"]
	},
	"druidic-champion|wisdom-maji": {
		stats: ["10% increased Defences"],
		tags: ["shaman"]
	},
	"shaman-start|reactive-growth": {
		stats: ["+3% to all Elemental Resistances"],
		tags: ["shaman", "defence"]
	},
	"reactive-growth|avatar-evolution": {
		stats: ["10% increased Armour, Evasion and Energy Shield"],
		tags: ["shaman", "defence"]
	},
	"reactive-growth|sacred-flow": {
		stats: ["12% increased Life and Mana Recovery from Flasks"],
		tags: ["shaman"]
	},
	"oracle-start|unnamed-heartwood": {
		stats: ["12% increased Spell Damage"],
		tags: ["oracle"]
	},
	"oracle-start|fateful-vision": {
		stats: ["12% increased Critical Hit Chance"],
		tags: ["oracle"]
	},
	"oracle-start|unseen-path": {
		stats: ["8% increased Life and Mana Regeneration Rate"],
		tags: ["oracle", "unseen"]
	},
	"fateful-vision|forced-outcome": {
		stats: ["12% increased Critical Hit Chance"],
		tags: ["oracle"]
	},
	"fateful-vision|harmony-within": {
		stats: ["8% increased Life Regeneration Rate"],
		tags: ["oracle", "defence"]
	},
	"unnamed-heartwood|converging-paths": {
		stats: ["20% increased Immobilisation Buildup"],
		tags: ["oracle"]
	},
	"unseen-path|entwined": {
		stats: ["Grants 1 Passive Skill Point"],
		tags: ["oracle"]
	},
	"unseen-path|lesser-harm": {
		stats: ["Hits against you have 12% reduced Critical Damage Bonus"],
		tags: ["oracle", "defence"]
	}
};
var ORBIT_STATS = {
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
	"unseen-pursuit": [["3% increased Movement Speed"], ["6% increased Cooldown Recovery Rate"]]
};
function lerp(a, b, t) {
	return a + (b - a) * t;
}
function hasOrbit(n) {
	return n.region === "main" && n.kind === "notable";
}
function buildTree() {
	const nodes = seeds.map((s) => ({ ...s }));
	const byId = new Map(nodes.map((n) => [n.id, n]));
	const edges = [];
	const gateUse = /* @__PURE__ */ new Map();
	let smallIndex = 0;
	for (const n of [...nodes]) {
		if (!hasOrbit(n)) continue;
		const count = n.tags.includes("unseen") ? 3 : 4;
		const radius = n.tags.includes("unseen") ? 62 : 78;
		const stats = ORBIT_STATS[n.id] ?? [["+5 to Attributes"]];
		const ids = [];
		for (let i = 0; i < count; i++) {
			const a = -Math.PI / 2 + i * (2 * Math.PI) / count + .28;
			const id = `${n.id}-o${i}`;
			const line = stats[i % stats.length] ?? stats[0];
			nodes.push({
				id,
				name: line[0] ?? "Travel",
				kind: "small",
				x: n.x + Math.cos(a) * radius,
				y: n.y + Math.sin(a) * radius,
				stats: line,
				tags: n.tags,
				region: n.region
			});
			ids.push(id);
			edges.push({
				from: n.id,
				to: id
			});
		}
		for (let i = 0; i < ids.length; i++) edges.push({
			from: ids[i],
			to: ids[(i + 1) % ids.length]
		});
	}
	function gateOf(id) {
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
		const meta = SMALL_STATS[`${from}|${to}`] ?? {
			stats: ["+5 to Attributes"],
			tags: a.tags
		};
		const dist = Math.hypot(b.x - a.x, b.y - a.y);
		const count = a.region === "main" ? dist > 450 ? 3 : 2 : 1;
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
				region: a.region
			});
			edges.push({
				from: prev,
				to: id
			});
			prev = id;
		}
		edges.push({
			from: prev,
			to: dest
		});
	}
	return {
		nodes,
		edges
	};
}
var SKILL_TREE = buildTree();
var TREE_START = {
	main: "start",
	shaman: "shaman-start",
	oracle: "oracle-start"
};
var FILTERS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "human",
		label: "Human"
	},
	{
		id: "bear",
		label: "Bear"
	},
	{
		id: "wolf",
		label: "Wolf"
	},
	{
		id: "wyvern",
		label: "Wyvern"
	},
	{
		id: "rage",
		label: "Rage"
	},
	{
		id: "minion",
		label: "Pack"
	},
	{
		id: "defence",
		label: "Hide"
	},
	{
		id: "unseen",
		label: "Unseen"
	}
];
function clampK(k) {
	return Math.min(2.4, Math.max(.22, k));
}
function fitCam(el, region) {
	const vw = el.clientWidth;
	const vh = el.clientHeight;
	const { w, h } = WORLD[region];
	const k = clampK(Math.min(vw / w, vh / h) * .94);
	return {
		k,
		x: (vw - w * k) / 2,
		y: (vh - h * k) / 2
	};
}
function radius(kind) {
	if (kind === "start") return 26;
	if (kind === "ascendancy") return 20;
	if (kind === "notable") return 15;
	if (kind === "jewel") return 13;
	return 6;
}
function hexPoints(r) {
	return Array.from({ length: 6 }, (_, i) => {
		const a = Math.PI / 3 * i - Math.PI / 6;
		return `${Math.cos(a) * r},${Math.sin(a) * r}`;
	}).join(" ");
}
function octPoints(r) {
	return Array.from({ length: 8 }, (_, i) => {
		const a = Math.PI / 8 * (2 * i + 1);
		return `${Math.cos(a) * r},${Math.sin(a) * r}`;
	}).join(" ");
}
function neighborsOf(region) {
	const nodes = SKILL_TREE.nodes.filter((n) => n.region === region);
	const ids = new Set(nodes.map((n) => n.id));
	const map = /* @__PURE__ */ new Map();
	for (const n of nodes) map.set(n.id, []);
	for (const e of SKILL_TREE.edges) {
		if (!ids.has(e.from) || !ids.has(e.to)) continue;
		map.get(e.from)?.push(e.to);
		map.get(e.to)?.push(e.from);
	}
	return {
		nodes,
		map
	};
}
function shortestPath(adj, fromSet, target) {
	if (fromSet.has(target)) return [target];
	const prev = /* @__PURE__ */ new Map();
	const q = [];
	for (const id of fromSet) {
		q.push(id);
		prev.set(id, null);
	}
	let found = false;
	while (q.length) {
		const cur = q.shift();
		if (cur === target) {
			found = true;
			break;
		}
		for (const n of adj.get(cur) ?? []) {
			if (prev.has(n)) continue;
			prev.set(n, cur);
			q.push(n);
		}
	}
	if (!found) return null;
	const path = [];
	let walk = target;
	while (walk && !fromSet.has(walk)) {
		path.push(walk);
		walk = prev.get(walk) ?? null;
	}
	return path.reverse();
}
function connectedFrom(adj, start, allocated) {
	const seen = /* @__PURE__ */ new Set();
	const q = [start];
	seen.add(start);
	while (q.length) {
		const cur = q.pop();
		for (const n of adj.get(cur) ?? []) {
			if (!allocated.has(n) || seen.has(n)) continue;
			seen.add(n);
			q.push(n);
		}
	}
	return seen;
}
function labelAnchor(n) {
	if (n.y < 160) return "n";
	if (n.x < 520) return "w";
	if (n.x > 1880) return "e";
	return "s";
}
function SkillTree({ formKit }) {
	const [region, setRegion] = (0, import_react.useState)("main");
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [query, setQuery] = (0, import_react.useState)("");
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [hover, setHover] = (0, import_react.useState)(null);
	const [showNames, setShowNames] = (0, import_react.useState)(false);
	const [allocated, setAllocated] = (0, import_react.useState)(() => /* @__PURE__ */ new Set([TREE_START.main]));
	const [cam, setCam] = (0, import_react.useState)({
		x: 0,
		y: 0,
		k: .42
	});
	const drag = (0, import_react.useRef)(null);
	const viewport = (0, import_react.useRef)(null);
	const { nodes, map: adj } = (0, import_react.useMemo)(() => neighborsOf(region), [region]);
	const byId = (0, import_react.useMemo)(() => new Map(nodes.map((n) => [n.id, n])), [nodes]);
	const startId = TREE_START[region];
	const edges = (0, import_react.useMemo)(() => SKILL_TREE.edges.filter((e) => byId.has(e.from) && byId.has(e.to)), [byId]);
	const labels = (0, import_react.useMemo)(() => REGION_LABELS.filter((l) => l.region === region), [region]);
	const applyFit = (0, import_react.useCallback)(() => {
		const el = viewport.current;
		if (!el) return;
		setCam(fitCam(el, region));
	}, [region]);
	(0, import_react.useLayoutEffect)(() => {
		setAllocated(/* @__PURE__ */ new Set([startId]));
		setSelected(nodes.find((n) => n.id === startId) ?? null);
		setHover(null);
		applyFit();
	}, [
		region,
		startId,
		nodes,
		applyFit
	]);
	(0, import_react.useEffect)(() => {
		if (region !== "main") return;
		if (formKit === "bear" || formKit === "wolf" || formKit === "wyvern") setFilter(formKit);
		else setFilter("all");
	}, [formKit, region]);
	const q = query.trim().toLowerCase();
	const visible = (0, import_react.useCallback)((n) => {
		if (q && !`${n.name} ${n.stats.join(" ")}`.toLowerCase().includes(q)) return false;
		if (filter !== "all" && !n.tags.includes(filter) && n.kind !== "start") return false;
		return true;
	}, [filter, q]);
	const points = (0, import_react.useMemo)(() => {
		let p = 0;
		for (const id of allocated) {
			const n = byId.get(id);
			if (!n || n.kind === "start") continue;
			p += 1;
		}
		return p;
	}, [allocated, byId]);
	(0, import_react.useEffect)(() => {
		const el = viewport.current;
		if (!el) return;
		const onNativeWheel = (e) => {
			e.preventDefault();
			const rect = el.getBoundingClientRect();
			const mx = e.clientX - rect.left;
			const my = e.clientY - rect.top;
			const factor = e.deltaY < 0 ? 1.1 : .9;
			setCam((c) => {
				const nk = clampK(c.k * factor);
				const wx = (mx - c.x) / c.k;
				const wy = (my - c.y) / c.k;
				return {
					k: nk,
					x: mx - wx * nk,
					y: my - wy * nk
				};
			});
		};
		el.addEventListener("wheel", onNativeWheel, { passive: false });
		return () => el.removeEventListener("wheel", onNativeWheel);
	}, []);
	(0, import_react.useEffect)(() => {
		if (q.length < 3) return;
		const hit = nodes.find((n) => n.kind !== "small" && visible(n));
		const el = viewport.current;
		if (!hit || !el) return;
		const vw = el.clientWidth;
		const vh = el.clientHeight;
		setCam((c) => ({
			...c,
			x: vw / 2 - hit.x * c.k,
			y: vh / 2 - hit.y * c.k
		}));
	}, [
		q,
		nodes,
		visible
	]);
	function onPointerDown(e) {
		if (e.button !== 0) return;
		e.currentTarget.setPointerCapture(e.pointerId);
		drag.current = {
			x: e.clientX,
			y: e.clientY,
			cx: cam.x,
			cy: cam.y
		};
	}
	function onPointerMove(e) {
		if (!drag.current) return;
		const dx = e.clientX - drag.current.x;
		const dy = e.clientY - drag.current.y;
		setCam((c) => ({
			...c,
			x: drag.current.cx + dx,
			y: drag.current.cy + dy
		}));
	}
	function onPointerUp() {
		drag.current = null;
	}
	function clickNode(node) {
		setSelected(node);
		if (node.id === startId) return;
		setAllocated((prev) => {
			const next = new Set(prev);
			if (next.has(node.id)) {
				next.delete(node.id);
				return connectedFrom(adj, startId, next);
			}
			const path = shortestPath(adj, next, node.id);
			if (!path) return prev;
			for (const id of path) next.add(id);
			return next;
		});
	}
	function zoom(delta) {
		const el = viewport.current;
		const mx = el ? el.clientWidth / 2 : 0;
		const my = el ? el.clientHeight / 2 : 0;
		setCam((c) => {
			const nk = clampK(c.k * delta);
			const wx = (mx - c.x) / c.k;
			const wy = (my - c.y) / c.k;
			return {
				k: nk,
				x: mx - wx * nk,
				y: my - wy * nk
			};
		});
	}
	const regions = [
		{
			id: "main",
			label: "Wildwood"
		},
		{
			id: "shaman",
			label: "Shaman"
		},
		{
			id: "oracle",
			label: "Oracle"
		}
	];
	const tip = hover ?? selected;
	const tipPos = tip ? {
		left: cam.x + tip.x * cam.k,
		top: cam.y + tip.y * cam.k + radius(tip.kind) * cam.k + 10
	} : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "tree",
		className: "px-6 py-24 sm:px-12 lg:px-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 font-display text-[0.68rem] tracking-[0.4em] text-primary uppercase",
					children: "Passive"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl font-semibold tracking-[-0.02em] text-fg sm:text-5xl",
						children: "The grove tree"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl font-body text-lg text-muted",
						children: "Fan map of the Druid-side of Wraeclast — Wildwood clusters, Shaman, Oracle, and the Unseen Path. Click a notable to path from your start."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-sm tracking-[0.18em] text-muted uppercase",
						children: [points, " points allocated"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 flex flex-wrap gap-2",
					children: regions.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setRegion(r.id),
						className: cn("min-h-11 border px-4 font-display text-[0.68rem] tracking-[0.18em] uppercase transition-colors", region === r.id ? "border-primary bg-panel text-fg" : "border-line text-muted hover:border-primary hover:text-fg"),
						children: r.label
					}, r.id))
				}),
				region === "main" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 flex flex-wrap gap-2",
					children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(f.id),
						className: cn("min-h-11 border px-3 font-display text-[0.62rem] tracking-[0.16em] uppercase transition-colors", filter === f.id ? "border-primary text-primary" : "border-line text-muted hover:text-fg"),
						children: f.label
					}, f.id))
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex flex-wrap gap-2 lg:absolute lg:top-3 lg:right-3 lg:z-10 lg:mb-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex min-h-11 items-center gap-2 border border-line bg-bg/80 px-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-3.5 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: query,
										onChange: (e) => setQuery(e.target.value),
										placeholder: "Search notables",
										className: "w-36 bg-transparent font-body text-sm text-fg outline-none placeholder:text-faint sm:w-44"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Toggle names",
									"aria-pressed": showNames,
									onClick: () => setShowNames((v) => !v),
									className: cn("grid size-11 place-items-center border bg-bg/80 text-fg", showNames ? "border-primary text-primary" : "border-line"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Type, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Zoom in",
									onClick: () => zoom(1.18),
									className: "grid size-11 place-items-center border border-line bg-bg/80 text-fg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Zoom out",
									onClick: () => zoom(.85),
									className: "grid size-11 place-items-center border border-line bg-bg/80 text-fg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Reset tree",
									onClick: () => {
										setAllocated(/* @__PURE__ */ new Set([startId]));
										setSelected(nodes.find((n) => n.id === startId) ?? null);
										applyFit();
									},
									className: "grid size-11 place-items-center border border-line bg-bg/80 text-fg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: viewport,
							className: "tree-viewport relative h-[520px] overflow-hidden border border-line sm:h-[680px]",
							onPointerDown,
							onPointerMove,
							onPointerUp,
							onPointerCancel: onPointerUp,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									className: "h-full w-full touch-none select-none",
									role: "img",
									"aria-label": "Druid passive skill tree",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
											id: "grove-glow",
											cx: "50%",
											cy: "70%",
											r: "55%",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "0%",
												stopColor: "var(--theme-secondary)",
												stopOpacity: "0.35"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "100%",
												stopColor: "var(--color-bg)",
												stopOpacity: "0"
											})]
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											width: "100%",
											height: "100%",
											fill: "var(--color-bg)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											width: "100%",
											height: "100%",
											fill: "url(#grove-glow)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
											transform: `translate(${cam.x} ${cam.y}) scale(${cam.k})`,
											children: [
												labels.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
													x: l.x,
													y: l.y,
													textAnchor: "middle",
													fill: "var(--color-fg)",
													opacity: "0.07",
													fontFamily: "Cinzel, serif",
													fontSize: l.text.length > 8 ? 42 : 64,
													letterSpacing: "0.22em",
													className: "pointer-events-none",
													children: l.text
												}, l.text)),
												region === "main" ? [
													120,
													240,
													380
												].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
													cx: 1200,
													cy: 1480,
													r,
													fill: "none",
													stroke: "var(--theme-border)",
													strokeWidth: "1",
													opacity: "0.22"
												}, r)) : null,
												edges.map((e) => {
													const a = byId.get(e.from);
													const b = byId.get(e.to);
													if (!a || !b) return null;
													const on = allocated.has(a.id) && allocated.has(b.id);
													const dim = !visible(a) && !visible(b);
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
														opacity: dim ? .1 : 1,
														children: [on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
															x1: a.x,
															y1: a.y,
															x2: b.x,
															y2: b.y,
															stroke: "var(--theme-glow)",
															strokeWidth: 7,
															opacity: .45
														}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
															x1: a.x,
															y1: a.y,
															x2: b.x,
															y2: b.y,
															stroke: on ? "var(--theme-primary)" : "var(--theme-border)",
															strokeWidth: on ? 2.2 : 1.15,
															opacity: on ? .95 : .4
														})]
													}, `${e.from}-${e.to}`);
												}),
												nodes.map((n) => {
													const on = allocated.has(n.id);
													const isSel = selected?.id === n.id;
													const isHover = hover?.id === n.id;
													const r = radius(n.kind);
													const show = visible(n);
													const named = n.kind !== "small" && (showNames || isSel || isHover || q.length > 0 && show && n.kind !== "jewel");
													const fill = on ? "var(--theme-primary)" : "var(--color-bg)";
													const stroke = isSel ? "var(--theme-accent)" : on ? "var(--color-fg)" : "var(--theme-border)";
													const dir = labelAnchor(n);
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
														transform: `translate(${n.x} ${n.y})`,
														opacity: show ? 1 : .12,
														className: "cursor-pointer",
														onClick: (ev) => {
															ev.stopPropagation();
															clickNode(n);
														},
														onPointerDown: (ev) => ev.stopPropagation(),
														onPointerEnter: () => setHover(n),
														onPointerLeave: () => setHover((h) => h?.id === n.id ? null : h),
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
																r: Math.max(r, 16),
																fill: "transparent"
															}),
															n.kind !== "small" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
																r: r + 8,
																fill: "none",
																stroke: isSel || isHover ? "var(--theme-accent)" : "var(--theme-glow)",
																strokeWidth: isSel ? 1.6 : .8,
																opacity: isSel || isHover ? .9 : on ? .4 : .16
															}) : null,
															n.kind === "notable" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
																points: hexPoints(r),
																fill,
																stroke,
																strokeWidth: "1.5"
															}) : n.kind === "ascendancy" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
																points: octPoints(r),
																fill,
																stroke,
																strokeWidth: "1.8"
															}) : n.kind === "jewel" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
																points: `0,${-r} ${r},0 0,${r} ${-r},0`,
																fill: on ? "var(--theme-secondary)" : "var(--color-bg)",
																stroke,
																strokeWidth: "1.6"
															}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
																r,
																fill,
																stroke,
																strokeWidth: n.kind === "start" ? 2.6 : 1.3
															}),
															n.kind === "start" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
																r: 10,
																fill: "none",
																stroke: "var(--color-fg)",
																strokeWidth: "1.2",
																opacity: "0.7"
															}) : null,
															n.tags.includes("unseen") && n.kind !== "small" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
																r: r + 4,
																fill: "none",
																stroke: "var(--theme-accent)",
																strokeWidth: "1",
																strokeDasharray: "3 3",
																opacity: "0.7"
															}) : null,
															named ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
																x: dir === "e" ? r + 10 : dir === "w" ? -(r + 10) : 0,
																y: dir === "s" ? r + 16 : dir === "n" ? -(r + 8) : 4,
																textAnchor: dir === "e" ? "start" : dir === "w" ? "end" : "middle",
																className: "pointer-events-none",
																fill: "var(--color-fg)",
																fontFamily: "Cinzel, serif",
																fontSize: n.kind === "start" ? 13 : 11,
																letterSpacing: "0.05em",
																children: n.name
															}) : null
														]
													}, n.id);
												})
											]
										})
									]
								}),
								tip && tipPos && !showNames ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pointer-events-none absolute z-10 max-w-56 border border-line bg-bg/90 px-3 py-2",
									style: {
										left: tipPos.left,
										top: tipPos.top,
										transform: "translateX(-50%)"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-[0.62rem] tracking-[0.16em] text-primary uppercase",
										children: tip.kind
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-sm text-fg",
										children: tip.name
									})]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "pointer-events-none absolute bottom-3 left-3 font-display text-[0.58rem] tracking-[0.18em] text-muted uppercase",
									children: "Drag to pan · scroll to zoom · click to allocate"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						className: "border border-line bg-panel p-6",
						children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-2 font-display text-[0.62rem] tracking-[0.28em] text-primary uppercase",
								children: [
									selected.kind,
									" · ",
									selected.tags.slice(0, 3).join(" · ") || "travel"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-4 font-display text-2xl text-fg",
								children: selected.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-2 font-body text-lg leading-relaxed text-fg/85",
								children: selected.stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 font-display text-[0.62rem] tracking-[0.16em] text-muted uppercase",
								children: allocated.has(selected.id) ? "Allocated — click again to strip this branch" : "Click the node to path from your start"
							})
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-body text-lg text-muted italic",
							children: "Select a node on the tree."
						})
					})]
				})
			]
		})
	});
}
function AppShell() {
	const [ready, setReady] = (0, import_react.useState)(false);
	const [formId, setFormId] = (0, import_react.useState)(DEFAULT_FORM_ID);
	const [chromaIndex, setChromaIndex] = (0, import_react.useState)(null);
	const [ability, setAbility] = (0, import_react.useState)(KITS.human[0] ?? null);
	const [scrollOnSelect, setScrollOnSelect] = (0, import_react.useState)(true);
	const [isMobile, setIsMobile] = (0, import_react.useState)(false);
	const form = (0, import_react.useMemo)(() => formById(formId), [formId]);
	const colors = (0, import_react.useMemo)(() => resolveColors(form, chromaIndex), [form, chromaIndex]);
	const kit = KITS[form.kit];
	(0, import_react.useEffect)(() => {
		const next = formById(readStoredForm(DEFAULT_FORM_ID));
		setFormId(next.id);
		const chroma = readStoredChroma(next.name);
		setChromaIndex(chroma);
		setScrollOnSelect(readScrollOnSelect());
		applyTheme(resolveColors(next, chroma));
		const mq = window.matchMedia("(max-width: 700px)");
		const sync = () => setIsMobile(mq.matches);
		sync();
		mq.addEventListener("change", sync);
		const min = window.setTimeout(() => setReady(true), 2100);
		return () => {
			window.clearTimeout(min);
			mq.removeEventListener("change", sync);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		applyTheme(colors);
	}, [colors]);
	(0, import_react.useEffect)(() => {
		if (ability && !kit.some((a) => a.id === ability.id)) setAbility(kit[0] ?? null);
	}, [kit, ability]);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
			const id = {
				"1": "human",
				"2": "bear",
				"3": "wolf",
				"4": "wyvern"
			}[e.key];
			if (id) selectForm(formById(id), false);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	});
	function selectForm(next, honorScroll = true) {
		setFormId(next.id);
		writeStoredForm(next.id);
		const stored = readStoredChroma(next.name);
		const valid = stored !== null && next.chromas && stored >= 0 && stored < next.chromas.length ? stored : null;
		setChromaIndex(valid);
		setAbility(KITS[next.kit][0] ?? null);
		if (honorScroll && scrollOnSelect) window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	function selectChroma(index) {
		setChromaIndex(index);
		writeStoredChroma(form.name, index);
	}
	function toggleScroll() {
		const next = !scrollOnSelect;
		setScrollOnSelect(next);
		writeScrollOnSelect(next);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "theme-shift min-h-dvh bg-bg text-fg",
		children: [
			!ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, {}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FanNotice, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {
					form,
					isMobile
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Biography, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Abilities, {
					kit: form.kit,
					abilities: kit,
					selected: ability,
					onSelect: setAbility
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillTree, { formKit: form.kit }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormsGallery, {
					forms: FORMS,
					activeId: form.id,
					chromaIndex,
					scrollOnSelect,
					onSelect: (f) => selectForm(f, true),
					onChroma: selectChroma,
					onToggleScroll: toggleScroll
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lineage, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {});
}
//#endregion
export { Home as component };
