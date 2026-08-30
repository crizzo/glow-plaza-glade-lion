import { SITE } from "@/lib/druid-data";
import { TalismanMark } from "@/components/site/marks";

export function Loader() {
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-bg text-fg"
      aria-label="Loading the grove"
    >
      <div className="relative size-[150px]" aria-hidden="true">
        <div className="loader-ring absolute inset-[15px] rounded-full border border-primary/30 border-t-primary border-t-2" />
        <div className="loader-glow absolute inset-[18px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--theme-primary)_28%,transparent)_0%,transparent_72%)] shadow-[0_0_36px_var(--theme-glow)]" />
        <div className="loader-mark absolute inset-6 text-fg drop-shadow-[0_0_14px_var(--theme-glow)]">
          <TalismanMark className="h-full w-full" />
        </div>
      </div>
      <div className="text-center">
        <div className="mb-2 font-display text-[0.65rem] tracking-[0.4em] text-fg/40 uppercase">
          {SITE.eyebrow}
        </div>
        <div className="font-display text-xs tracking-[0.25em] text-primary/80 uppercase">
          {SITE.loaderStatus}
        </div>
      </div>
      <div className="h-0.5 w-60 overflow-hidden bg-fg/10">
        <div className="h-full bg-primary" style={{ animation: "loading-bar 2.1s var(--ease-out) forwards" }} />
      </div>
    </div>
  );
}
