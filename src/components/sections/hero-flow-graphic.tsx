"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { useReducedMotion } from "framer-motion";
import { BarChart3, Landmark, PieChart, ShieldCheck, User } from "lucide-react";
import { cn } from "@/lib/cn";
import { LogoMark } from "@/components/brand/logo";

const CLIENT_X = 2;
const CLIENT_W = 15;
const EMFI_X = 30;
const EMFI_W = 20;
const DEST_X = 64;
const DEST_W = 34;
const HUB_Y = 50;

const institutions = [
  { name: "Euroclear", role: "Securities / depository", icon: Landmark, y: 12 },
  { name: "Allfunds", role: "Fund infrastructure", icon: BarChart3, y: 38 },
  { name: "NatWest", role: "Banking / cash", icon: ShieldCheck, y: 62 },
  { name: "Santander", role: "Banking / cash", icon: PieChart, y: 88 },
];

function useElementSize<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [size, setSize] = useState({ width: 740, height: 300 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      if (width > 0 && height > 0) setSize({ width, height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, size] as const;
}

// The client/EMFI badges are centered inside wider flex columns (for the
// caption underneath), so their real edges don't sit at the column's
// percentage boundaries. Measure the actual badge elements so the
// connecting line touches the visible box instead of stopping short of it.
function useEdgeX(
  containerRef: RefObject<HTMLElement | null>,
  boxRef: RefObject<HTMLElement | null>,
  side: "left" | "right",
  deps: unknown[],
) {
  const [x, setX] = useState(0);

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const box = boxRef.current;
      if (!container || !box) return;
      const containerRect = container.getBoundingClientRect();
      const boxRect = box.getBoundingClientRect();
      setX((side === "left" ? boxRect.left : boxRect.right) - containerRect.left);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return x;
}

export function HeroFlowGraphic({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const [containerRef, size] = useElementSize<HTMLDivElement>();
  const clientBoxRef = useRef<HTMLSpanElement>(null);
  const emfiBoxRef = useRef<HTMLSpanElement>(null);

  // Work in real pixel space (via ResizeObserver) rather than a stretched
  // 0-100 viewBox, so the bezier fan-out isn't skewed by the container's
  // wide aspect ratio.
  const px = (pct: number) => (pct / 100) * size.width;
  const py = (pct: number) => (pct / 100) * size.height;

  // The client/EMFI badges are centered inside wider flex columns, so their
  // real edges don't line up with the column's percentage boundaries.
  // Measure the actual visible boxes instead of guessing from the %s.
  const clientRightX = useEdgeX(containerRef, clientBoxRef, "right", [size]);
  const emfiLeftX = useEdgeX(containerRef, emfiBoxRef, "left", [size]);
  const emfiRightX = useEdgeX(containerRef, emfiBoxRef, "right", [size]);

  const clientPath = `M${clientRightX || px(CLIENT_X + CLIENT_W)},${py(HUB_Y)} H${emfiLeftX || px(EMFI_X)}`;
  const routePath = (y: number) => {
    const startX = emfiRightX || px(EMFI_X + EMFI_W);
    const startY = py(HUB_Y);
    const endX = px(DEST_X);
    const endY = py(y);
    const midX1 = startX + (endX - startX) * 0.32;
    const midY1 = startY + (endY - startY) * 0.35;
    const midX2 = startX + (endX - startX) * 0.68;
    const midY2 = endY;
    return `M${startX},${startY} C${midX1},${midY1} ${midX2},${midY2} ${endX},${endY}`;
  };

  return (
    <div
      className={cn("relative overflow-hidden rounded-3xl p-px", className)}
      style={{
        background:
          "linear-gradient(135deg, rgba(45,212,191,0.55) 0%, rgba(11,26,51,0) 38%, rgba(11,26,51,0) 62%, rgba(244,63,94,0.45) 100%)",
      }}
    >
      <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-[#0b1a33] px-5 py-6 sm:px-7 sm:py-7">
        <span
          aria-hidden
          className="emfi-cta-band-glow pointer-events-none absolute left-[-10%] top-[15%] h-[220px] w-[220px] rounded-full opacity-0 blur-[80px] md:h-[300px] md:w-[300px]"
          style={{ background: "var(--color-blue-100)" }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-[30%] right-[-10%] h-[200px] w-[200px] rounded-full opacity-10 blur-[90px]"
          style={{ background: "var(--color-blue-50)" }}
        />
        <span
          aria-hidden
          className="emfi-cta-band-glow pointer-events-none absolute right-[-15%] top-[-10%] h-[180px] w-[180px] rounded-full opacity-0 blur-[80px] md:h-[240px] md:w-[240px]"
          style={{ background: "var(--color-blue-200)", animationDelay: "-4s" }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -top-[20%] left-[30%] h-[170px] w-[170px] rounded-full opacity-[0.06] blur-[100px]"
          style={{ background: "var(--color-blue-50)" }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-[-15%] left-[10%] h-[150px] w-[150px] rounded-full opacity-10 blur-[80px]"
          style={{ background: "var(--color-blue-100)" }}
        />

        <div className="relative overflow-x-auto">
          <div
            ref={containerRef}
            className="relative h-[260px] min-w-[540px] sm:h-[300px] md:h-[320px]"
          >
            <svg
              viewBox={`0 0 ${size.width} ${size.height}`}
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <path
                d={clientPath}
                fill="none"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1.5"
              />
              {institutions.map((item) => (
                <path
                  key={item.name}
                  d={routePath(item.y)}
                  fill="none"
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="1.5"
                />
              ))}

              {!reduceMotion && (
                <>
                  <circle r="3" fill="#5eead4">
                    <animateMotion
                      dur="1.8s"
                      repeatCount="indefinite"
                      path={clientPath}
                    />
                  </circle>
                  {institutions.map((item, i) => (
                    <circle key={item.name} r="2.5" fill="#93c5fd">
                      <animateMotion
                        dur="2.4s"
                        begin={`${i * 0.35}s`}
                        repeatCount="indefinite"
                        path={routePath(item.y)}
                      />
                    </circle>
                  ))}
                </>
              )}
            </svg>

            <div
              className="absolute flex -translate-y-1/2 flex-col items-center gap-2 text-center"
              style={{ left: `${CLIENT_X}%`, width: `${CLIENT_W}%`, top: `${HUB_Y}%` }}
            >
              <span
                ref={clientBoxRef}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white sm:h-14 sm:w-14"
              >
                <User size={20} />
              </span>
              <span className="text-[11px] font-bold text-white sm:text-xs">
                Client
              </span>
            </div>

            <div
              className="absolute flex -translate-y-1/2 flex-col items-center gap-3 text-center"
              style={{ left: `${EMFI_X}%`, width: `${EMFI_W}%`, top: `${HUB_Y}%` }}
            >
              <span className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24 md:h-28 md:w-28">
                <span
                  className="absolute inset-[-16px] rounded-[26px] border border-blue-200/10 sm:inset-[-20px] sm:rounded-[30px]"
                  aria-hidden
                />
                <span
                  className="absolute inset-[-8px] rounded-[22px] border border-blue-200/20 sm:inset-[-10px] sm:rounded-[26px]"
                  aria-hidden
                />
                <span
                  ref={emfiBoxRef}
                  className="absolute inset-0 flex items-center justify-center rounded-2xl border border-blue-300/40 bg-white/5 shadow-[0_0_40px_-6px_rgba(147,197,253,0.6)]"
                >
                  <LogoMark decorative className="h-9 w-9 text-white sm:h-10 sm:w-10 md:h-11 md:w-11" />
                </span>
              </span>
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-white/50 sm:text-[10px]">
                One Partner
              </span>
            </div>

            {institutions.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="group absolute flex -translate-y-1/2 items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-3.5 shadow-[0_10px_30px_-14px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-colors duration-300 hover:border-teal-200/40 hover:bg-white/[0.08]"
                  style={{ left: `${DEST_X}%`, width: `${DEST_W}%`, top: `${item.y}%` }}
                >
                  <span className="relative flex h-10 w-10 shrink-0 items-center justify-center">
                    <span
                      className="absolute inset-[-4px] rounded-full border border-teal-200/15 transition-colors duration-300 group-hover:border-teal-200/40"
                      aria-hidden
                    />
                    <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon size={16} />
                    </span>
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[12px] font-bold text-white sm:text-sm">
                      {item.name}
                    </p>
                    <p className="truncate font-mono text-[8px] uppercase tracking-wide text-white/40 sm:text-[9px]">
                      {item.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
