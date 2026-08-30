export type ThemeColors = {
  primary: string;
  secondary: string;
  accent: string;
  glow: string;
  panelBg: string;
  abilityBg: string;
  skinsBg: string;
  border: string;
  selected: string;
};

const THEME_VARS: Record<keyof ThemeColors, string> = {
  primary: "--theme-primary",
  secondary: "--theme-secondary",
  accent: "--theme-accent",
  glow: "--theme-glow",
  panelBg: "--theme-panel",
  abilityBg: "--theme-ability",
  skinsBg: "--theme-skins",
  border: "--theme-border",
  selected: "--theme-selected",
};

export function applyTheme(colors: ThemeColors) {
  const root = document.documentElement;
  (Object.keys(THEME_VARS) as (keyof ThemeColors)[]).forEach((key) => {
    root.style.setProperty(THEME_VARS[key], colors[key]);
  });
}

export const STORAGE = {
  notice: "druid-fan-notice-closed",
  form: "druid-active-form",
  chromas: "druid-active-chromas",
  scrollOnSelect: "druid-scroll-on-select",
} as const;

export function readStoredForm(fallback: string) {
  try {
    return localStorage.getItem(STORAGE.form) ?? fallback;
  } catch {
    return fallback;
  }
}

export function writeStoredForm(id: string) {
  try {
    localStorage.setItem(STORAGE.form, id);
  } catch {
    /* ignore */
  }
}

export function readStoredChroma(formName: string): number | null {
  try {
    const raw = localStorage.getItem(STORAGE.chromas);
    if (!raw) return null;
    const map = JSON.parse(raw) as Record<string, number>;
    const n = map[formName];
    return typeof n === "number" ? n : null;
  } catch {
    return null;
  }
}

export function writeStoredChroma(formName: string, index: number | null) {
  try {
    const raw = localStorage.getItem(STORAGE.chromas);
    const map = raw ? (JSON.parse(raw) as Record<string, number>) : {};
    if (index === null) delete map[formName];
    else map[formName] = index;
    localStorage.setItem(STORAGE.chromas, JSON.stringify(map));
  } catch {
    /* ignore */
  }
}

export function readScrollOnSelect() {
  try {
    return localStorage.getItem(STORAGE.scrollOnSelect) !== "off";
  } catch {
    return true;
  }
}

export function writeScrollOnSelect(on: boolean) {
  try {
    localStorage.setItem(STORAGE.scrollOnSelect, on ? "on" : "off");
  } catch {
    /* ignore */
  }
}
