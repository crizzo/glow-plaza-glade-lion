import { LINEAGE } from "@/lib/druid-data";

export function Lineage() {
  return (
    <section id="lineage" className="px-6 py-24 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-display text-[0.68rem] tracking-[0.4em] text-primary uppercase">
          Ascendancy
        </p>
        <h2 className="mb-12 font-display text-4xl font-semibold tracking-[-0.02em] text-fg sm:text-5xl">
          Lineage
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {LINEAGE.map((node) => (
            <article key={node.id} className="overflow-hidden border border-line bg-panel">
              <div className="relative h-72 sm:h-80">
                <img
                  src={node.image}
                  alt={node.name}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: node.id === "shaman" ? "50% 22%" : "50% 12%" }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="font-display text-[0.62rem] tracking-[0.28em] text-primary uppercase">
                    {node.relation}
                  </p>
                  <h3 className="font-display text-3xl text-fg">{node.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4 font-display text-lg text-accent italic">{node.quote}</p>
                <p className="mb-6 font-body text-lg leading-relaxed text-fg/85">{node.description}</p>
                <ul className="space-y-4">
                  {node.nodes.map((n) => (
                    <li key={n.name}>
                      <p className="font-display text-sm tracking-wide text-primary">{n.name}</p>
                      <p className="mt-1 font-body text-[1.05rem] text-muted">{n.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
