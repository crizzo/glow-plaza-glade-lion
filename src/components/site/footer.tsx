import { SITE } from "@/lib/druid-data";
import { TalismanMark } from "@/components/site/marks";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line px-6 py-20 sm:px-12">
      <img
        src="/images/hero/wildwood.jpg"
        alt=""
        className="absolute top-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-cover opacity-25 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-bg/75" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <TalismanMark className="mb-6 size-16 text-primary" />
        <p className="font-display text-[0.7rem] tracking-[0.42em] text-fg/70 uppercase">
          {SITE.name}
        </p>
        <p className="mt-2 font-display text-[0.62rem] tracking-[0.28em] text-fg/30 uppercase">
          {SITE.title} — {SITE.eyebrow}
        </p>
        <div className="my-8 h-px w-40 bg-linear-to-r from-transparent via-primary to-transparent" />
        <p className="max-w-md font-display text-xl text-accent italic">{SITE.quote}</p>
        <p className="mt-10 max-w-lg font-body text-sm leading-relaxed text-muted">{SITE.legal}</p>
        <p className="mt-3 font-body text-sm text-faint">{SITE.copyright}</p>
      </div>
    </footer>
  );
}
