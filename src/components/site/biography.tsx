import { BIO_PARAS, SITE } from "@/lib/druid-data";

export function Biography() {
  return (
    <section id="origins" className="relative overflow-hidden px-6 py-24 sm:px-12 lg:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/hero/wildwood.jpg')] bg-cover bg-center opacity-[0.14]" />
      <div className="absolute inset-0 bg-bg/80" />
      <div className="relative mx-auto max-w-3xl">
        <p className="mb-3 font-display text-[0.68rem] tracking-[0.4em] text-primary uppercase">
          Origins
        </p>
        <h2 className="mb-8 font-display text-4xl font-semibold tracking-[-0.02em] text-fg sm:text-5xl">
          Last of a quiet people
        </h2>
        <blockquote className="mb-10 border-l-2 border-primary pl-5 font-display text-xl text-accent italic sm:text-2xl">
          {SITE.quote}
        </blockquote>
        <div className="space-y-5 font-body text-lg leading-relaxed text-fg/80">
          {BIO_PARAS.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
