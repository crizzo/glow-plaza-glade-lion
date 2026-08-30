import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#origins", label: "Origins" },
  { href: "#skills", label: "Skills" },
  { href: "#tree", label: "Tree" },
  { href: "#forms", label: "Forms" },
  { href: "#lineage", label: "Lineage" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-40 flex items-center justify-between px-5 py-4 transition-[background,border-color,backdrop-filter] duration-300",
        solid
          ? "border-b border-line bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <a
        href="#top"
        className="font-display text-[0.7rem] tracking-[0.32em] text-fg/80 uppercase transition-colors hover:text-primary"
      >
        The Druid
      </a>
      <nav className="hidden items-center gap-6 sm:flex" aria-label="Sections">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="font-display text-[0.68rem] tracking-[0.22em] text-muted uppercase transition-colors hover:text-fg"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <nav
        className="flex flex-wrap items-center justify-end gap-1 sm:hidden"
        aria-label="Sections"
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="grid min-h-11 place-items-center px-1.5 font-display text-[0.56rem] tracking-[0.1em] text-muted uppercase"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
