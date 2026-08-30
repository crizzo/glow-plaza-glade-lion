import { useEffect, useMemo, useState } from "react";
import {
  DEFAULT_FORM_ID,
  FORMS,
  KITS,
  formById,
  resolveColors,
  type Ability,
  type DruidForm,
} from "@/lib/druid-data";
import {
  applyTheme,
  readScrollOnSelect,
  readStoredChroma,
  readStoredForm,
  writeScrollOnSelect,
  writeStoredChroma,
  writeStoredForm,
} from "@/lib/theme";
import { Abilities } from "@/components/site/abilities";
import { Biography } from "@/components/site/biography";
import { FanNotice } from "@/components/site/fan-notice";
import { Footer } from "@/components/site/footer";
import { FormsGallery } from "@/components/site/forms-gallery";
import { Hero } from "@/components/site/hero";
import { Lineage } from "@/components/site/lineage";
import { Loader } from "@/components/site/loader";
import { Nav } from "@/components/site/nav";
import { SkillTree } from "@/components/site/skill-tree";

export function AppShell() {
  const [ready, setReady] = useState(false);
  const [formId, setFormId] = useState(DEFAULT_FORM_ID);
  const [chromaIndex, setChromaIndex] = useState<number | null>(null);
  const [ability, setAbility] = useState<Ability | null>(KITS.human[0] ?? null);
  const [scrollOnSelect, setScrollOnSelect] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const form = useMemo(() => formById(formId), [formId]);
  const colors = useMemo(() => resolveColors(form, chromaIndex), [form, chromaIndex]);
  const kit = KITS[form.kit];

  useEffect(() => {
    const stored = readStoredForm(DEFAULT_FORM_ID);
    const next = formById(stored);
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

  useEffect(() => {
    applyTheme(colors);
  }, [colors]);

  useEffect(() => {
    if (ability && !kit.some((a) => a.id === ability.id)) {
      setAbility(kit[0] ?? null);
    }
  }, [kit, ability]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const map: Record<string, string> = { "1": "human", "2": "bear", "3": "wolf", "4": "wyvern" };
      const id = map[e.key];
      if (id) selectForm(formById(id), false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  function selectForm(next: DruidForm, honorScroll = true) {
    setFormId(next.id);
    writeStoredForm(next.id);
    const stored = readStoredChroma(next.name);
    const valid =
      stored !== null && next.chromas && stored >= 0 && stored < next.chromas.length ? stored : null;
    setChromaIndex(valid);
    setAbility(KITS[next.kit][0] ?? null);
    if (honorScroll && scrollOnSelect) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function selectChroma(index: number | null) {
    setChromaIndex(index);
    writeStoredChroma(form.name, index);
  }

  function toggleScroll() {
    const next = !scrollOnSelect;
    setScrollOnSelect(next);
    writeScrollOnSelect(next);
  }

  return (
    <div className="theme-shift min-h-dvh bg-bg text-fg">
      {!ready ? <Loader /> : null}
      <FanNotice />
      <Nav />
      <main>
        <Hero form={form} isMobile={isMobile} />
        <Biography />
        <Abilities kit={form.kit} abilities={kit} selected={ability} onSelect={setAbility} />
        <SkillTree formKit={form.kit} />
        <FormsGallery
          forms={FORMS}
          activeId={form.id}
          chromaIndex={chromaIndex}
          scrollOnSelect={scrollOnSelect}
          onSelect={(f) => selectForm(f, true)}
          onChroma={selectChroma}
          onToggleScroll={toggleScroll}
        />
        <Lineage />
      </main>
      <Footer />
    </div>
  );
}
