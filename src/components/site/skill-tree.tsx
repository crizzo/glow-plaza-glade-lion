import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  FILTERS,
  REGION_LABELS,
  SKILL_TREE,
  TREE_START,
  WORLD,
  type TreeNode,
  type TreeRegion,
  type TreeTag,
} from "@/lib/skill-tree-data";
import { cn } from "@/lib/utils";
import { Minus, Plus, RotateCcw, Search, Type } from "lucide-react";

type Camera = { x: number; y: number; k: number };

function clampK(k: number) {
  return Math.min(2.4, Math.max(0.22, k));
}

function fitCam(el: HTMLElement, region: TreeRegion): Camera {
  const vw = el.clientWidth;
  const vh = el.clientHeight;
  const { w, h } = WORLD[region];
  const k = clampK(Math.min(vw / w, vh / h) * 0.94);
  return { k, x: (vw - w * k) / 2, y: (vh - h * k) / 2 };
}

function radius(kind: TreeNode["kind"]) {
  if (kind === "start") return 26;
  if (kind === "ascendancy") return 20;
  if (kind === "notable") return 15;
  if (kind === "jewel") return 13;
  return 6;
}

function hexPoints(r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    return `${Math.cos(a) * r},${Math.sin(a) * r}`;
  }).join(" ");
}

function octPoints(r: number) {
  return Array.from({ length: 8 }, (_, i) => {
    const a = (Math.PI / 8) * (2 * i + 1);
    return `${Math.cos(a) * r},${Math.sin(a) * r}`;
  }).join(" ");
}

function neighborsOf(region: TreeRegion) {
  const nodes = SKILL_TREE.nodes.filter((n) => n.region === region);
  const ids = new Set(nodes.map((n) => n.id));
  const map = new Map<string, string[]>();
  for (const n of nodes) map.set(n.id, []);
  for (const e of SKILL_TREE.edges) {
    if (!ids.has(e.from) || !ids.has(e.to)) continue;
    map.get(e.from)?.push(e.to);
    map.get(e.to)?.push(e.from);
  }
  return { nodes, map };
}

function shortestPath(adj: Map<string, string[]>, fromSet: Set<string>, target: string) {
  if (fromSet.has(target)) return [target];
  const prev = new Map<string, string | null>();
  const q: string[] = [];
  for (const id of fromSet) {
    q.push(id);
    prev.set(id, null);
  }
  let found = false;
  while (q.length) {
    const cur = q.shift()!;
    if (cur === target) {
      found = true;
      break;
    }
    for (const n of adj.get(cur) ?? []) {
      if (prev.has(n)) continue;
      prev.set(n, cur);
      q.push(n);
    }
  }
  if (!found) return null;
  const path: string[] = [];
  let walk: string | null = target;
  while (walk && !fromSet.has(walk)) {
    path.push(walk);
    walk = prev.get(walk) ?? null;
  }
  return path.reverse();
}

function connectedFrom(adj: Map<string, string[]>, start: string, allocated: Set<string>) {
  const seen = new Set<string>();
  const q = [start];
  seen.add(start);
  while (q.length) {
    const cur = q.pop()!;
    for (const n of adj.get(cur) ?? []) {
      if (!allocated.has(n) || seen.has(n)) continue;
      seen.add(n);
      q.push(n);
    }
  }
  return seen;
}

function labelAnchor(n: TreeNode) {
  if (n.y < 160) return "n" as const;
  if (n.x < 520) return "w" as const;
  if (n.x > 1880) return "e" as const;
  return "s" as const;
}

export function SkillTree({ formKit }: { formKit: TreeTag | "human" | "bear" | "wolf" | "wyvern" }) {
  const [region, setRegion] = useState<TreeRegion>("main");
  const [filter, setFilter] = useState<TreeTag | "all">("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<TreeNode | null>(null);
  const [hover, setHover] = useState<TreeNode | null>(null);
  const [showNames, setShowNames] = useState(false);
  const [allocated, setAllocated] = useState<Set<string>>(() => new Set([TREE_START.main]));
  const [cam, setCam] = useState<Camera>({ x: 0, y: 0, k: 0.42 });
  const drag = useRef<{ x: number; y: number; cx: number; cy: number } | null>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const clickLock = useRef(0);

  const { nodes, map: adj } = useMemo(() => neighborsOf(region), [region]);
  const byId = useMemo(() => new Map(nodes.map((n) => [n.id, n])), [nodes]);
  const startId = TREE_START[region];
  const edges = useMemo(
    () => SKILL_TREE.edges.filter((e) => byId.has(e.from) && byId.has(e.to)),
    [byId],
  );
  const labels = useMemo(() => REGION_LABELS.filter((l) => l.region === region), [region]);

  const applyFit = useCallback(() => {
    const el = viewport.current;
    if (!el) return;
    setCam(fitCam(el, region));
  }, [region]);

  useLayoutEffect(() => {
    setAllocated(new Set([startId]));
    setSelected(nodes.find((n) => n.id === startId) ?? null);
    setHover(null);
    applyFit();
  }, [region, startId]);

  useEffect(() => {
    if (region !== "main") return;
    if (formKit === "bear" || formKit === "wolf" || formKit === "wyvern") {
      setFilter(formKit);
    } else {
      setFilter("all");
    }
  }, [formKit, region]);

  const q = query.trim().toLowerCase();
  const visible = useCallback(
    (n: TreeNode) => {
      if (q && !`${n.name} ${n.stats.join(" ")}`.toLowerCase().includes(q)) return false;
      if (filter !== "all" && !n.tags.includes(filter) && n.kind !== "start") return false;
      return true;
    },
    [filter, q],
  );

  const points = useMemo(() => {
    let p = 0;
    for (const id of allocated) {
      const n = byId.get(id);
      if (!n || n.kind === "start") continue;
      p += 1;
    }
    return p;
  }, [allocated, byId]);

  useEffect(() => {
    const el = viewport.current;
    if (!el) return;
    const onNativeWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const factor = e.deltaY < 0 ? 1.1 : 0.9;
      setCam((c) => {
        const nk = clampK(c.k * factor);
        const wx = (mx - c.x) / c.k;
        const wy = (my - c.y) / c.k;
        return { k: nk, x: mx - wx * nk, y: my - wy * nk };
      });
    };
    el.addEventListener("wheel", onNativeWheel, { passive: false });
    return () => el.removeEventListener("wheel", onNativeWheel);
  }, []);

  useEffect(() => {
    if (q.length < 3) return;
    const hit = nodes.find((n) => n.kind !== "small" && visible(n));
    const el = viewport.current;
    if (!hit || !el) return;
    const vw = el.clientWidth;
    const vh = el.clientHeight;
    setCam((c) => ({ ...c, x: vw / 2 - hit.x * c.k, y: vh / 2 - hit.y * c.k }));
  }, [q, nodes, visible]);

  function onPointerDown(e: React.PointerEvent) {
    if (e.button !== 0) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    drag.current = { x: e.clientX, y: e.clientY, cx: cam.x, cy: cam.y };
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.x;
    const dy = e.clientY - drag.current.y;
    setCam((c) => ({ ...c, x: drag.current!.cx + dx, y: drag.current!.cy + dy }));
  }
  function onPointerUp() {
    drag.current = null;
  }

  function clickNode(node: TreeNode) {
    setSelected(node);
    if (node.id === startId) return;
    const now = performance.now();
    if (now - clickLock.current < 140) return;
    clickLock.current = now;
    setAllocated((prev) => {
      const next = new Set(prev);
      if (next.has(node.id)) {
        next.delete(node.id);
        return connectedFrom(adj, startId, next);
      }
      const path = shortestPath(adj, next, node.id);
      if (!path) return prev;
      for (const id of path) next.add(id);
      return next;
    });
  }

  function zoom(delta: number) {
    const el = viewport.current;
    const mx = el ? el.clientWidth / 2 : 0;
    const my = el ? el.clientHeight / 2 : 0;
    setCam((c) => {
      const nk = clampK(c.k * delta);
      const wx = (mx - c.x) / c.k;
      const wy = (my - c.y) / c.k;
      return { k: nk, x: mx - wx * nk, y: my - wy * nk };
    });
  }

  const regions: { id: TreeRegion; label: string }[] = [
    { id: "main", label: "Wildwood" },
    { id: "shaman", label: "Shaman" },
    { id: "oracle", label: "Oracle" },
  ];

  const tip = hover ?? selected;
  const tipPos = tip
    ? { left: cam.x + tip.x * cam.k, top: cam.y + tip.y * cam.k + radius(tip.kind) * cam.k + 10 }
    : null;

  return (
    <section id="tree" className="px-6 py-24 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-display text-[0.68rem] tracking-[0.4em] text-primary uppercase">
          Passive
        </p>
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.02em] text-fg sm:text-5xl">
              The grove tree
            </h2>
            <p className="mt-3 max-w-xl font-body text-lg text-muted">
              Fan map of the Druid-side of Wraeclast — Wildwood clusters, Shaman, Oracle, and the
              Unseen Path. Click a notable to path from your start.
            </p>
          </div>
          <p className="font-display text-sm tracking-[0.18em] text-muted uppercase">
            {points} points allocated
          </p>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {regions.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setRegion(r.id)}
              className={cn(
                "min-h-11 border px-4 font-display text-[0.68rem] tracking-[0.18em] uppercase transition-colors",
                region === r.id
                  ? "border-primary bg-panel text-fg"
                  : "border-line text-muted hover:border-primary hover:text-fg",
              )}
            >
              {r.label}
            </button>
          ))}
        </div>

        {region === "main" ? (
          <div className="mb-4 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={cn(
                  "min-h-11 border px-3 font-display text-[0.62rem] tracking-[0.16em] uppercase transition-colors",
                  filter === f.id ? "border-primary text-primary" : "border-line text-muted hover:text-fg",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        ) : null}

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="relative">
            <div className="mb-2 flex flex-wrap gap-2 lg:absolute lg:top-3 lg:right-3 lg:z-10 lg:mb-0">
              <label className="flex min-h-11 items-center gap-2 border border-line bg-bg/80 px-3">
                <Search className="size-3.5 text-muted" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search notables"
                  className="w-36 bg-transparent font-body text-sm text-fg outline-none placeholder:text-faint sm:w-44"
                />
              </label>
              <button
                type="button"
                aria-label="Toggle names"
                aria-pressed={showNames}
                onClick={() => setShowNames((v) => !v)}
                className={cn(
                  "grid size-11 place-items-center border bg-bg/80 text-fg",
                  showNames ? "border-primary text-primary" : "border-line",
                )}
              >
                <Type className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Zoom in"
                onClick={() => zoom(1.18)}
                className="grid size-11 place-items-center border border-line bg-bg/80 text-fg"
              >
                <Plus className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Zoom out"
                onClick={() => zoom(0.85)}
                className="grid size-11 place-items-center border border-line bg-bg/80 text-fg"
              >
                <Minus className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Reset tree"
                onClick={() => {
                  setAllocated(new Set([startId]));
                  setSelected(nodes.find((n) => n.id === startId) ?? null);
                  applyFit();
                }}
                className="grid size-11 place-items-center border border-line bg-bg/80 text-fg"
              >
                <RotateCcw className="size-4" />
              </button>
            </div>

            <div
              ref={viewport}
              className="tree-viewport relative h-[520px] overflow-hidden border border-line sm:h-[680px]"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            >
              <svg className="h-full w-full touch-none select-none" role="img" aria-label="Druid passive skill tree">
                <defs>
                  <radialGradient id="grove-glow" cx="50%" cy="70%" r="55%">
                    <stop offset="0%" stopColor="var(--theme-secondary)" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="var(--color-bg)" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="100%" height="100%" fill="var(--color-bg)" />
                <rect width="100%" height="100%" fill="url(#grove-glow)" />
                <g transform={`translate(${cam.x} ${cam.y}) scale(${cam.k})`}>
                  {labels.map((l) => (
                    <text
                      key={l.text}
                      x={l.x}
                      y={l.y}
                      textAnchor="middle"
                      fill="var(--color-fg)"
                      opacity="0.11"
                      fontFamily="Cinzel, serif"
                      fontSize={l.text.length > 8 ? 42 : 64}
                      letterSpacing="0.22em"
                      className="pointer-events-none"
                    >
                      {l.text}
                    </text>
                  ))}
                  {region === "main"
                    ? [120, 240, 380].map((r) => (
                        <circle
                          key={r}
                          cx={1200}
                          cy={1480}
                          r={r}
                          fill="none"
                          stroke="var(--theme-border)"
                          strokeWidth="1"
                          opacity="0.22"
                        />
                      ))
                    : null}
                  {edges.map((e) => {
                    const a = byId.get(e.from);
                    const b = byId.get(e.to);
                    if (!a || !b) return null;
                    const on = allocated.has(a.id) && allocated.has(b.id);
                    const dim = !visible(a) && !visible(b);
                    return (
                      <g key={`${e.from}-${e.to}`} opacity={dim ? 0.1 : 1}>
                        {on ? (
                          <line
                            x1={a.x}
                            y1={a.y}
                            x2={b.x}
                            y2={b.y}
                            stroke="var(--theme-glow)"
                            strokeWidth={7}
                            opacity={0.45}
                          />
                        ) : null}
                        <line
                          x1={a.x}
                          y1={a.y}
                          x2={b.x}
                          y2={b.y}
                          stroke={on ? "var(--theme-primary)" : "var(--theme-border)"}
                          strokeWidth={on ? 2.2 : 1.15}
                          opacity={on ? 0.95 : 0.4}
                        />
                      </g>
                    );
                  })}
                  {nodes.map((n) => {
                    const on = allocated.has(n.id);
                    const isSel = selected?.id === n.id;
                    const isHover = hover?.id === n.id;
                    const r = radius(n.kind);
                    const show = visible(n);
                    const named =
                      n.kind !== "small" &&
                      (showNames || isSel || isHover || (q.length > 0 && show && n.kind !== "jewel"));
                    const fill = on ? "var(--theme-primary)" : "var(--color-bg)";
                    const stroke = isSel
                      ? "var(--theme-accent)"
                      : on
                        ? "var(--color-fg)"
                        : "var(--theme-border)";
                    const dir = labelAnchor(n);
                    return (
                      <g
                        key={n.id}
                        data-node={n.id}
                        transform={`translate(${n.x} ${n.y})`}
                        opacity={show ? 1 : 0.12}
                        className="cursor-pointer"
                        onClick={(ev) => {
                          ev.stopPropagation();
                          clickNode(n);
                        }}
                        onPointerDown={(ev) => ev.stopPropagation()}
                        onPointerEnter={() => setHover(n)}
                        onPointerLeave={() => setHover((h) => (h?.id === n.id ? null : h))}
                      >
                        <circle r={Math.max(r, 16)} fill="transparent" />
                        {n.kind !== "small" ? (
                          <circle
                            r={r + 8}
                            fill="none"
                            stroke={isSel || isHover ? "var(--theme-accent)" : "var(--theme-glow)"}
                            strokeWidth={isSel ? 1.6 : 0.8}
                            opacity={isSel || isHover ? 0.9 : on ? 0.4 : 0.16}
                          />
                        ) : null}
                        {n.kind === "notable" ? (
                          <polygon points={hexPoints(r)} fill={fill} stroke={stroke} strokeWidth="1.5" />
                        ) : n.kind === "ascendancy" ? (
                          <polygon points={octPoints(r)} fill={fill} stroke={stroke} strokeWidth="1.8" />
                        ) : n.kind === "jewel" ? (
                          <polygon
                            points={`0,${-r} ${r},0 0,${r} ${-r},0`}
                            fill={on ? "var(--theme-secondary)" : "var(--color-bg)"}
                            stroke={stroke}
                            strokeWidth="1.6"
                          />
                        ) : (
                          <circle r={r} fill={fill} stroke={stroke} strokeWidth={n.kind === "start" ? 2.6 : 1.3} />
                        )}
                        {n.kind === "start" ? (
                          <circle r={10} fill="none" stroke="var(--color-fg)" strokeWidth="1.2" opacity="0.7" />
                        ) : null}
                        {n.tags.includes("unseen") && n.kind !== "small" ? (
                          <circle
                            r={r + 4}
                            fill="none"
                            stroke="var(--theme-accent)"
                            strokeWidth="1"
                            strokeDasharray="3 3"
                            opacity="0.7"
                          />
                        ) : null}
                        {named ? (
                          <text
                            x={dir === "e" ? r + 10 : dir === "w" ? -(r + 10) : 0}
                            y={dir === "s" ? r + 16 : dir === "n" ? -(r + 8) : 4}
                            textAnchor={dir === "e" ? "start" : dir === "w" ? "end" : "middle"}
                            className="pointer-events-none"
                            fill="var(--color-fg)"
                            fontFamily="Cinzel, serif"
                            fontSize={n.kind === "start" ? 13 : 11}
                            letterSpacing="0.05em"
                          >
                            {n.name}
                          </text>
                        ) : null}
                      </g>
                    );
                  })}
                </g>
              </svg>
              {tip && tipPos && !showNames ? (
                <div
                  className="pointer-events-none absolute z-10 max-w-56 border border-line bg-bg/90 px-3 py-2"
                  style={{ left: tipPos.left, top: tipPos.top, transform: "translateX(-50%)" }}
                >
                  <p className="font-display text-[0.62rem] tracking-[0.16em] text-primary uppercase">
                    {tip.kind}
                  </p>
                  <p className="font-display text-sm text-fg">{tip.name}</p>
                </div>
              ) : null}
              <p className="pointer-events-none absolute bottom-3 left-3 font-display text-[0.58rem] tracking-[0.18em] text-muted uppercase">
                Drag to pan · scroll to zoom · click to allocate
              </p>
            </div>
          </div>

          <aside className="border border-line bg-panel p-6">
            {selected ? (
              <div>
                <p className="mb-2 font-display text-[0.62rem] tracking-[0.28em] text-primary uppercase">
                  {selected.kind} · {selected.tags.slice(0, 3).join(" · ") || "travel"}
                </p>
                <h3 className="mb-4 font-display text-2xl text-fg">{selected.name}</h3>
                <ul className="space-y-2 font-body text-lg leading-relaxed text-fg/85">
                  {selected.stats.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <p className="mt-6 font-display text-[0.62rem] tracking-[0.16em] text-muted uppercase">
                  {allocated.has(selected.id)
                    ? "Allocated — click again to strip this branch"
                    : "Click the node to path from your start"}
                </p>
              </div>
            ) : (
              <p className="font-body text-lg text-muted italic">Select a node on the tree.</p>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
