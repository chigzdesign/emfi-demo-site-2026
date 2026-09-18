"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BarChart3, Landmark, PieChart, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/cn";
import { home } from "@/content/home";
import { LogoMark } from "@/components/brand/logo";

const CYCLE = 9;
const HOLD_END = 6.6;
const FADE_END = 7.4;
const SHOW = [0, 0, 1, 1, 0, 0];

const LAYER_STARTS = [0.05, 0.35, 0.65];
const CARD_STARTS = [2.3, 2.6, 2.9, 3.2];
const cardIcons = [Landmark, BarChart3, ShieldCheck, PieChart];

function fadeTimes(appearStart: number, appearEnd: number) {
  return [0, appearStart, appearEnd, HOLD_END, FADE_END, CYCLE].map(
    (t) => t / CYCLE,
  );
}

function Connector({ delay = 0 }: { delay?: number }) {
  return (
    <span
      className="relative hidden h-px w-6 shrink-0 sm:inline-flex md:w-10"
      aria-hidden
    >
      <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-line-strong/40" />
      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-line-strong/60" />
      <span
        className="emfi-chain-pulse absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand shadow-[0_0_8px_2px_var(--color-blue-100)]"
        style={{ animationDelay: `${delay}s` }}
      />
    </span>
  );
}

export function HeroInfrastructureGraphic({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  const reveal = (
    appearStart: number,
    appearDuration: number,
    extra?: Record<string, number[]>,
  ) => {
    if (reduceMotion) {
      return {
        animate: { opacity: 1, x: 0, y: 0, scale: 1 },
        transition: { duration: 0 },
      };
    }
    return {
      animate: { opacity: SHOW, ...extra },
      transition: {
        duration: CYCLE,
        repeat: Infinity,
        ease: "easeInOut" as const,
        times: fadeTimes(appearStart, appearStart + appearDuration),
      },
    };
  };

  return (
    <div
      aria-hidden
      className={cn(
        "flex w-full items-center justify-between gap-2 from-subtle to-page sm:gap-3 ",
        className,
      )}
    >
      <div className="flex items-center gap-2 md:gap-3">
        <span className="hidden shrink-0 flex-col font-mono text-[10px] font-bold uppercase leading-[1.5] tracking-[0.16em] text-ink-muted sm:flex">
          <span>Multiple</span>
          <span>Layers</span>
        </span>

        <div
          className="relative h-64 w-32 shrink-0 sm:h-72 sm:w-36 md:h-[22rem] md:w-44"
          style={{ perspective: 500 }}
        >
          <span
            className="absolute inset-x-[-10%] bottom-1 h-4 rounded-full bg-ink/15 blur-md"
            aria-hidden
          />
          {LAYER_STARTS.map((start, i) => {
            const { animate, transition } = reveal(start, 0.5, {
              x: [-8, -8, 0, 0, 4, 4],
              scale: [0.92, 0.92, 1, 1, 1.02, 1.02],
            });
            return (
              <motion.div
                key={i}
                className="emfi-glass-pane absolute inset-y-0"
                style={{
                  left: `${i * 30}%`,
                  width: "54%",
                  rotateY: -16 - i * 3,
                }}
                animate={animate}
                transition={transition}
              />
            );
          })}
        </div>
      </div>

      <Connector delay={0.3} />

      <div className="flex shrink-0 flex-col items-center gap-1.5">
        <motion.div
          className="relative flex h-10 w-10 items-center justify-center text-ink md:h-12 md:w-12"
          {...reveal(1.3, 0.5, { scale: [0.6, 0.6, 1, 1, 1.05, 1.05] })}
        >
          <span
            className="emfi-icon-pulse absolute inset-0 rounded-full bg-brand/25"
            style={{ animationDelay: "1.6s" }}
          />
          <LogoMark decorative className="relative h-7 w-7 md:h-8 md:w-8" />
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          {...reveal(1.5, 0.5)}
        >
          <span className="text-sm font-extrabold tracking-[-0.02em] text-ink md:text-base">
            EMFI
          </span>
          <span className="whitespace-nowrap font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-ink-muted md:text-[10px]">
            Direct access
          </span>
        </motion.div>
      </div>

      <Connector delay={2.0} />

      <div className="flex shrink-0 flex-col items-center gap-1.5 md:gap-2">
        {home.chainInfra.map((item, i) => {
          const Icon = cardIcons[i] ?? Landmark;
          const { animate, transition } = reveal(CARD_STARTS[i], 0.4, {
            x: [10, 10, 0, 0, -6, -6],
          });
          return (
            <motion.div
              key={item.name}
              className="flex w-32 items-center gap-1.5 rounded-lg border border-line bg-page/90 px-2.5 py-1.5 shadow-sm md:w-36 md:gap-2 md:px-3 md:py-2"
              animate={animate}
              transition={transition}
            >
              <Icon size={12} className="shrink-0 text-brand md:size-3.5" />
              <span className="whitespace-nowrap text-[11px] font-bold text-ink md:text-xs">
                {item.name}
              </span>
            </motion.div>
          );
        })}
        <motion.span
          className="mt-1 hidden whitespace-nowrap text-center font-mono text-[9px] font-bold uppercase leading-[1.5] tracking-[0.16em] text-ink-muted sm:block md:text-[10px]"
          {...reveal(3.4, 0.4)}
        >
          Institutional
          <br />
          infrastructure
        </motion.span>
      </div>
    </div>
  );
}
