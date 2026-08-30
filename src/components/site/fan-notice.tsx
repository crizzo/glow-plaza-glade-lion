import { useEffect, useState } from "react";
import { SITE } from "@/lib/druid-data";
import { STORAGE } from "@/lib/theme";

export function FanNotice() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE.notice) === "1") return;
    } catch {
      /* ignore */
    }
    setOpen(true);
    const t = window.setTimeout(() => dismiss(), 15000);
    return () => window.clearTimeout(t);
  }, []);

  function dismiss() {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE.notice, "1");
    } catch {
      /* ignore */
    }
  }

  if (!open) return null;

  return (
    <div
      className="fan-notice fixed top-3 right-0 left-0 z-[90] mx-auto flex min-h-11 w-[min(92vw,520px)] items-center gap-3 overflow-hidden rounded-lg border border-fg/15 bg-linear-to-br from-bg/90 to-bg/70 px-4 py-3 backdrop-blur-md"
      role="status"
    >
      <p className="min-w-0 flex-1 text-center font-display text-[0.72rem] font-bold tracking-[0.08em] text-fg/90 uppercase">
        {SITE.notice}
      </p>
      <button
        type="button"
        aria-label="Dismiss notice"
        onClick={dismiss}
        className="grid size-[26px] shrink-0 place-items-center rounded-full border border-fg/20 bg-bg/40 text-fg/70 transition-colors duration-200 hover:border-primary hover:text-fg"
      >
        <span className="font-display text-xs leading-none">x</span>
      </button>
      <span
        className="absolute right-0 bottom-0 left-0 h-0.5 origin-left bg-linear-to-r from-transparent via-primary to-transparent"
        style={{ animation: "notice-progress 15s linear forwards" }}
      />
    </div>
  );
}
