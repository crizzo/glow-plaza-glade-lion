export function TalismanMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="92" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.2" />
      <circle cx="100" cy="100" r="78" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" />
      <path
        fill="currentColor"
        d="M100 18c3 22 10 42 10 66 16-12 31-20 48-24-6 20-18 35-33 48 18 4 33 13 48 24-20 2-38-2-56-8 2 20 2 38 4 58H79c2-20 2-38 4-58-18 6-36 10-56 8 15-11 30-20 48-24-15-13-27-28-33-48 17 4 32 12 48 24 0-24 7-44 10-66z"
      />
      <circle cx="100" cy="92" r="6" fill="currentColor" opacity="0.9" />
    </svg>
  );
}

const RUNES = [
  { x: "8%", y: "22%", rot: "18deg", delay: "0s", size: 34 },
  { x: "86%", y: "18%", rot: "-22deg", delay: "0.6s", size: 28 },
  { x: "12%", y: "68%", rot: "40deg", delay: "1.1s", size: 30 },
  { x: "90%", y: "62%", rot: "-12deg", delay: "1.8s", size: 36 },
  { x: "6%", y: "44%", rot: "8deg", delay: "0.3s", size: 22 },
  { x: "93%", y: "40%", rot: "-30deg", delay: "1.4s", size: 24 },
];

export function RuneField() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden" aria-hidden="true">
      {RUNES.map((r) => (
        <span
          key={`${r.x}-${r.y}`}
          className="rune-float absolute text-primary/35"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
            animationDelay: r.delay,
            ["--rot" as string]: r.rot,
          }}
        >
          <TalismanMark className="h-full w-full" />
        </span>
      ))}
    </div>
  );
}
