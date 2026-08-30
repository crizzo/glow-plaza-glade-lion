import { STATS, SITE, type DruidForm } from "@/lib/druid-data";
import { RuneField } from "@/components/site/marks";
import { ChevronDown } from "lucide-react";

export function Hero({ form, isMobile }: { form: DruidForm; isMobile: boolean }) {
  const src = form.heroImage ?? form.image;
  const pos = isMobile ? form.mobilePosition : form.position;

  return (
    <section id="top" className="relative h-dvh min-h-[640px] overflow-hidden">
      <img
        src={src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-[object-position] duration-700"
        style={{ objectPosition: pos }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-bg via-bg/40 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-bg/25" />
      <RuneField />

      <div className="relative z-20 flex h-full flex-col justify-end px-6 pt-24 pb-16 sm:px-12 lg:px-20">
        <p
          className="stagger-in mb-4 font-display text-[0.68rem] tracking-[0.42em] text-primary uppercase"
          style={{ animationDelay: "80ms" }}
        >
          {SITE.eyebrow}
        </p>
        <h1
          aria-label="Druid"
          className="glitch stagger-in font-display text-[clamp(3.4rem,12vw,8.2rem)] leading-[0.9] font-semibold tracking-[-0.03em] text-fg"
          data-text="DRUID"
          style={{ animationDelay: "140ms", textShadow: "0 0 28px var(--theme-glow)" }}
        >
          DRUID
        </h1>
        <div
          className="stagger-in mt-4 flex items-center gap-3"
          style={{ animationDelay: "220ms" }}
        >
          <span className="h-px w-8 bg-primary" />
          <p className="font-display text-sm tracking-[0.22em] text-accent uppercase sm:text-base">
            {SITE.title}
          </p>
        </div>
        <p
          className="stagger-in mt-5 max-w-lg font-body text-lg text-fg/80 italic sm:text-xl"
          style={{ animationDelay: "300ms" }}
        >
          {form.blurb}
        </p>

        <dl
          className="stagger-in mt-8 flex flex-wrap gap-x-8 gap-y-4"
          style={{ animationDelay: "380ms" }}
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-[0.62rem] tracking-[0.28em] text-muted uppercase">
                {s.label}
              </dt>
              <dd className="mt-1 font-display text-sm tracking-[0.08em] text-fg">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a
        href="#origins"
        className="scroll-hint absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-muted"
      >
        <span className="font-display text-[0.62rem] tracking-[0.32em] uppercase">Scroll</span>
        <span className="h-8 w-px bg-linear-to-b from-primary to-transparent" />
        <ChevronDown className="size-4" strokeWidth={1.5} />
      </a>
    </section>
  );
}
