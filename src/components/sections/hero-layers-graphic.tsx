"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { LogoMark } from "@/components/brand/logo";

// All 6 panes start hidden at centre. They reveal once, in 3 staged pairs,
// each pair finishing its move before the next starts: (layer 3 -> left,
// layer 6 -> right), then (layer 2 -> left, layer 5 -> right), then (layer
// 1 -> left, layer 4 -> right). Once all 6 are in place, EMFI ghosts in,
// solidifies, "Direct Access" reveals - then everything holds there. Plays
// once on mount, no loop.
const STAGE_DUR = 0.9;
const GAP = 0.3;

const STAGE1_START = 0.4;
const STAGE1_END = STAGE1_START + STAGE_DUR;
const STAGE2_START = STAGE1_END + GAP;
const STAGE2_END = STAGE2_START + STAGE_DUR;
const STAGE3_START = STAGE2_END + GAP;
const STAGE3_END = STAGE3_START + STAGE_DUR;

const ICON_START = STAGE3_END + GAP;
const ICON_SOLID = ICON_START + 0.6;
const TEXT_START = ICON_SOLID + 0.1;
const TEXT_VISIBLE = TEXT_START + 0.5;

// After the reveal finishes, hold for a while, fade the whole thing out,
// then start the reveal again from scratch.
const HOLD_DURATION = 10;
const FADE_OUT_DURATION = 0.6;
const CYCLE_DURATION =
  (TEXT_VISIBLE + HOLD_DURATION + FADE_OUT_DURATION) * 1000;

const PANE_COUNT = 6;
const LEFT_COUNT = 3;
const INNER_OFFSET = 115;
const STEP = 64;

// Per-pane (appearStart, appearEnd), indexed 0-5 for layers 1-6. Stage 1 =
// layers 3 & 6 (appear first). Stage 2 = layers 2 & 5. Stage 3 = layers 1 &
// 4 (appear last, right before the EMFI mark).
const PANE_WINDOWS: [number, number][] = [
  [STAGE3_START, STAGE3_END], // layer 1
  [STAGE2_START, STAGE2_END], // layer 2
  [STAGE1_START, STAGE1_END], // layer 3
  [STAGE3_START, STAGE3_END], // layer 4
  [STAGE2_START, STAGE2_END], // layer 5
  [STAGE1_START, STAGE1_END], // layer 6
];

// Layers 1 & 4 (innermost pair) are smallest, 2 & 5 (middle pair) a bit
// bigger, 3 & 6 (outermost pair) stay at the original full size.
const PANE_SIZE_CLASS = [
  "w-9 sm:w-10 md:w-12 h-[68%]", // layer 1
  "w-10 sm:w-12 md:w-14 h-[85%]", // layer 2
  "w-12 sm:w-14 md:w-16 h-full", // layer 3
  "w-9 sm:w-10 md:w-12 h-[68%]", // layer 4
  "w-10 sm:w-12 md:w-14 h-[85%]", // layer 5
  "w-12 sm:w-14 md:w-16 h-full", // layer 6
];

export function HeroLayersGraphic({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const [cycle, setCycle] = useState(0);

  // Play once, hold, fade the whole thing out, then remount (fresh key)
  // to play the reveal again from scratch.
  useEffect(() => {
    if (reduceMotion) return;
    const timer = setTimeout(() => setCycle((c) => c + 1), CYCLE_DURATION);
    return () => clearTimeout(timer);
  }, [cycle, reduceMotion]);

  // Each element gets its own delay + duration (instead of one shared
  // keyframe timeline with `times`), so every animated property on it
  // - position, opacity, whatever - moves on the exact same clock and
  // can never drift out of sync with each other.
  const paneReveal = (finalOffset: number, windowIndex: number) => {
    const [appearStart, appearEnd] = PANE_WINDOWS[windowIndex];

    if (reduceMotion) {
      return {
        initial: { x: finalOffset, opacity: 1 },
        animate: { x: finalOffset, opacity: 1 },
        transition: { duration: 0 },
      };
    }
    return {
      initial: { x: 0, opacity: 0 },
      animate: { x: finalOffset, opacity: 1 },
      transition: {
        type: "tween" as const,
        delay: appearStart,
        duration: appearEnd - appearStart,
        ease: "easeInOut" as const,
      },
    };
  };

  const iconReveal = reduceMotion
    ? {
        initial: { opacity: 1, scale: 1 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0, scale: 0.4 },
        animate: { opacity: 1, scale: 1 },
        transition: {
          opacity: {
            delay: ICON_START,
            duration: ICON_SOLID - ICON_START,
            ease: "easeInOut" as const,
          },
          scale: {
            delay: ICON_START,
            type: "spring" as const,
            stiffness: 280,
            damping: 14,
          },
        },
      };

  const iconGlowReveal = reduceMotion
    ? null
    : {
        initial: { scale: 0.6, opacity: 0.55 },
        animate: { scale: 1.9, opacity: 0 },
        transition: {
          delay: ICON_START,
          duration: 0.9,
          ease: "easeOut" as const,
        },
      };

  const textReveal = reduceMotion
    ? {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0, y: 6 },
        animate: { opacity: 1, y: 0 },
        transition: {
          type: "tween" as const,
          delay: TEXT_START,
          duration: TEXT_VISIBLE - TEXT_START,
          ease: "easeInOut" as const,
        },
      };

  return (
    <div
      className={cn("relative h-72 w-full sm:h-80 md:h-[26rem]", className)}
      aria-hidden
    >
      <span
        className="absolute inset-x-[-10%] bottom-2 h-4 rounded-full bg-ink/10 blur-md"
        aria-hidden
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={cycle}
          className="absolute inset-0"
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_OUT_DURATION, ease: "easeInOut" }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ perspective: 600 }}
          >
            {Array.from({ length: PANE_COUNT }).map((_, i) => {
              const isLeft = i < LEFT_COUNT;
              const groupIndex = isLeft ? i : i - LEFT_COUNT;
              // Same inner gap (room for the logo) and step spacing on both
              // sides, so left and right fan out identically.
              const finalOffset = isLeft
                ? -(INNER_OFFSET + groupIndex * STEP)
                : INNER_OFFSET + groupIndex * STEP;
              // First 3 panes (the left group) stack in reverse order: pane
              // 0 (closest to centre) sits in front of pane 2 (furthest
              // out).
              const zIndex = isLeft
                ? LEFT_COUNT - groupIndex
                : 10 + groupIndex;
              // First 3 panes' edge (tilt) is mirrored against the last 3.
              const rotateY = isLeft
                ? 14 + groupIndex * 2
                : -14 - groupIndex * 2;

              return (
                <div
                  key={i}
                  className="absolute flex h-full items-center"
                  style={{
                    left: "50%",
                    // Panes are positioned by their left edge and extend
                    // rightward, so the left group needs an extra -100%
                    // shift to anchor by its right edge instead -
                    // otherwise its own width eats into the centre gap
                    // rather than extending outward, unbalancing the two
                    // sides. This static anchor lives on a wrapper so it
                    // doesn't fight the animated x.
                    transform: isLeft ? "translateX(-100%)" : undefined,
                    zIndex,
                  }}
                >
                  <motion.div
                    className={cn("emfi-glass-pane", PANE_SIZE_CLASS[i])}
                    style={{ rotateY, scaleX: isLeft ? 1 : -1 }}
                    {...paneReveal(finalOffset, i)}
                  />
                </div>
              );
            })}
          </div>

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3">
            <motion.div
              className="relative flex h-14 w-14 items-center justify-center text-ink sm:h-16 sm:w-16"
              {...iconReveal}
            >
              {iconGlowReveal && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-brand/30"
                  aria-hidden
                  {...iconGlowReveal}
                />
              )}
              <LogoMark decorative className="relative h-10 w-10 sm:h-12 sm:w-12" />
            </motion.div>
            <motion.div className="flex flex-col items-center" {...textReveal}>
              <span className="text-lg font-extrabold tracking-[-0.02em] text-ink sm:text-xl">
                EMFI
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink-muted">
                Direct Access
              </span>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
