import { EXTRA_SKILLS, type Ability, type FormKit } from "@/lib/druid-data";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export function Abilities({
  kit,
  abilities,
  selected,
  onSelect,
}: {
  kit: FormKit;
  abilities: Ability[];
  selected: Ability | null;
  onSelect: (ability: Ability | null) => void;
}) {
  const extras = EXTRA_SKILLS.filter((s) => s.kit === kit);

  return (
    <section id="skills" className="relative px-6 py-24 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 font-display text-[0.68rem] tracking-[0.4em] text-primary uppercase">
              Combat
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.02em] text-fg sm:text-5xl">
              Combat abilities
            </h2>
          </div>
          {selected ? (
            <button
              type="button"
              onClick={() => onSelect(null)}
              className="inline-flex min-h-11 items-center gap-2 border border-line px-4 font-display text-[0.68rem] tracking-[0.2em] text-muted uppercase transition-colors hover:border-primary hover:text-fg"
            >
              <X className="size-3.5" />
              Close
            </button>
          ) : null}
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ol className="space-y-2">
            {abilities.map((ability, i) => {
              const active = selected?.id === ability.id;
              return (
                <li key={ability.id}>
                  <button
                    type="button"
                    onClick={() => onSelect(active ? null : ability)}
                    className={cn(
                      "ability-row flex w-full min-h-16 items-center gap-4 border border-transparent border-r-2 px-3 py-3 text-left transition-[background,border-color] duration-300",
                      active ? "border-r-primary" : "hover:bg-panel",
                    )}
                    data-active={active}
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <span className="grid size-11 shrink-0 place-items-center border border-line bg-bg/40 font-display text-sm text-primary">
                      {ability.key}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-lg tracking-wide text-fg">
                        {ability.name}
                      </span>
                      <span className="mt-1 flex flex-wrap gap-1.5">
                        {ability.tags.map((t) => (
                          <span
                            key={t}
                            className="font-display text-[0.58rem] tracking-[0.16em] text-muted uppercase"
                          >
                            {t}
                          </span>
                        ))}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <aside className="border border-line bg-panel p-6 sm:p-8">
            {selected ? (
              <div className="stagger-in">
                <p className="mb-2 font-display text-[0.62rem] tracking-[0.32em] text-primary uppercase">
                  {selected.key} · {selected.tags[0]}
                </p>
                <h3 className="mb-4 font-display text-3xl text-fg">{selected.name}</h3>
                <p className="font-body text-lg leading-relaxed text-fg/85">{selected.description}</p>
              </div>
            ) : (
              <p className="font-body text-lg text-muted italic">
                Choose a skill. The kit follows the form you wear.
              </p>
            )}
            {extras.length ? (
              <ul className="mt-8 space-y-3 border-t border-line pt-6">
                {extras.map((s) => (
                  <li key={s.name}>
                    <p className="font-display text-sm tracking-wide text-accent">{s.name}</p>
                    <p className="mt-1 font-body text-[1.05rem] text-muted">{s.text}</p>
                  </li>
                ))}
              </ul>
            ) : null}
          </aside>
        </div>
      </div>
    </section>
  );
}
