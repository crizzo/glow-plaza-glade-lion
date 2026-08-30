import type { DruidForm } from "@/lib/druid-data";
import { cn } from "@/lib/utils";

export function FormsGallery({
  forms,
  activeId,
  chromaIndex,
  scrollOnSelect,
  onSelect,
  onChroma,
  onToggleScroll,
}: {
  forms: DruidForm[];
  activeId: string;
  chromaIndex: number | null;
  scrollOnSelect: boolean;
  onSelect: (form: DruidForm) => void;
  onChroma: (index: number | null) => void;
  onToggleScroll: () => void;
}) {
  const active = forms.find((f) => f.id === activeId) ?? forms[0];

  return (
    <section id="forms" className="relative bg-skins px-6 py-24 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="skins-header mb-10">
          <p className="mb-3 font-display text-[0.68rem] tracking-[0.4em] text-primary uppercase">
            Shapeshift
          </p>
          <div className="mb-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-4xl font-semibold tracking-[-0.02em] text-fg sm:text-5xl">
              The forms
            </h2>
            <button
              type="button"
              onClick={onToggleScroll}
              className="skins-scroll-toggle inline-flex min-h-11 items-center gap-3 self-start border border-line bg-bg/30 px-3 py-2"
              aria-pressed={scrollOnSelect}
            >
              <span
                className={cn(
                  "relative h-[19px] w-[38px] rounded-full border border-line transition-colors",
                  scrollOnSelect ? "bg-primary/40" : "bg-bg/60",
                )}
              >
                <span
                  className={cn(
                    "absolute top-[2px] size-3.5 rounded-full bg-fg transition-[left] duration-200",
                    scrollOnSelect ? "left-[21px]" : "left-[2px]",
                  )}
                />
              </span>
              <span className="font-display text-[0.68rem] tracking-[0.14em] text-muted uppercase">
                Scroll to top on select ({scrollOnSelect ? "on" : "off"})
              </span>
            </button>
          </div>
          <div className="h-px w-full max-w-xs bg-linear-to-r from-primary via-transparent to-primary" />
          <p className="mt-3 font-display text-xs tracking-[0.2em] text-muted uppercase">
            {forms.length} aspects · selected {active.name}
          </p>
        </div>

        {active.chromas?.length ? (
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="font-display text-[0.62rem] tracking-[0.22em] text-muted uppercase">
              Chromas
            </span>
            <button
              type="button"
              title="Base"
              aria-label="Base chroma"
              onClick={() => onChroma(null)}
              className={cn(
                "size-11 rounded-full border-2 bg-bone transition-transform",
                chromaIndex === null ? "scale-110 border-fg" : "border-fg/20",
              )}
            />
            {active.chromas.map((c, i) => (
              <button
                key={c.name}
                type="button"
                title={c.name}
                aria-label={c.name}
                onClick={() => onChroma(i)}
                className={cn(
                  "size-11 rounded-full border-2 transition-transform",
                  chromaIndex === i ? "scale-110 border-fg" : "border-fg/20",
                )}
                style={{ background: c.swatch }}
              />
            ))}
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {forms.map((form) => {
            const on = form.id === activeId;
            return (
              <button
                key={form.id}
                type="button"
                onClick={() => onSelect(form)}
                className={cn(
                  "group relative min-h-[400px] overflow-hidden border text-left transition-[border-color,box-shadow] duration-300",
                  form.type === "CALAMITY" && "calamity-card",
                  on
                    ? "border-selected shadow-[0_0_24px_var(--theme-glow)]"
                    : "border-line hover:border-primary/70",
                )}
              >
                <img
                  src={form.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{ objectPosition: form.position }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-bg from-15% via-bg/25 to-transparent" />
                {form.chromas?.length ? <span className="skin-chroma-dot" /> : null}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span
                    className={cn(
                      "font-display text-[0.58rem] tracking-[0.22em] uppercase",
                      form.type === "CALAMITY" ? "text-accent" : "text-muted",
                    )}
                  >
                    {form.type}
                  </span>
                  <p className="mt-1 font-display text-xl text-fg">{form.name}</p>
                  <p className="font-display text-[0.68rem] tracking-[0.16em] text-primary uppercase">
                    {form.resource}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
