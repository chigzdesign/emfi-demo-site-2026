"use client";

import { motion, useReducedMotion } from "framer-motion";
import { about } from "@/content/about";

const ease = [0.22, 1, 0.36, 1] as const;

export function DecadeHeroVisual() {
  const reduceMotion = useReducedMotion();
  const { from, to, mark, caption } = about.heroVisual;
  const label = `${from} to ${to}. ${mark}. ${caption}.`;

  return (
    <figure className="relative w-full" aria-label={label}>
      <svg viewBox="0 0 720 168" className="w-full" role="img" aria-hidden>
        <line
          x1={92}
          y1={78}
          x2={628}
          y2={78}
          stroke="var(--border-strong)"
          strokeWidth={1.5}
        />
        <motion.line
          x1={92}
          y1={78}
          x2={304}
          y2={78}
          stroke="var(--action-primary)"
          strokeWidth={1.5}
          strokeLinecap="round"
          initial={reduceMotion ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease }}
        />
        <motion.line
          x1={416}
          y1={78}
          x2={628}
          y2={78}
          stroke="var(--action-primary)"
          strokeWidth={1.5}
          strokeLinecap="round"
          initial={reduceMotion ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: reduceMotion ? 0 : 0.55, ease }}
        />
        {reduceMotion ? null : (
          <>
            <motion.circle
              cy={78}
              r={9}
              fill="color-mix(in srgb, var(--action-primary) 28%, transparent)"
              initial={{ cx: 92, opacity: 0 }}
              animate={{ cx: [92, 92, 628, 628], opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 8,
                delay: 1.6,
                repeat: Infinity,
                ease: [0.4, 0, 0.2, 1],
              }}
            />
            <motion.circle
              cy={78}
              r={3.5}
              fill="var(--action-primary)"
              initial={{ cx: 92, opacity: 0 }}
              animate={{ cx: [92, 92, 628, 628], opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 8,
                delay: 1.6,
                repeat: Infinity,
                ease: [0.4, 0, 0.2, 1],
              }}
            />
          </>
        )}
        <rect
          x={304}
          y={54}
          width={112}
          height={48}
          rx={8}
          fill="var(--bg-page)"
          stroke="var(--action-primary)"
          strokeWidth={1.5}
        />
        <text
          x={360}
          y={84}
          textAnchor="middle"
          fill="var(--text-primary)"
          fontSize={20}
          fontWeight={800}
          letterSpacing={1.2}
          fontFamily="var(--font-inter), ui-sans-serif, system-ui, sans-serif"
        >
          {mark}
        </text>
        <text
          x={48}
          y={83}
          textAnchor="middle"
          fill="var(--action-primary)"
          fontSize={13}
          fontWeight={700}
          letterSpacing={1.4}
          fontFamily="var(--font-ibm-plex-mono), ui-monospace, monospace"
        >
          {from}
        </text>
        <text
          x={672}
          y={83}
          textAnchor="middle"
          fill="var(--action-primary)"
          fontSize={13}
          fontWeight={700}
          letterSpacing={1.4}
          fontFamily="var(--font-ibm-plex-mono), ui-monospace, monospace"
        >
          {to}
        </text>
        <text
          x={360}
          y={138}
          textAnchor="middle"
          fill="var(--text-muted)"
          fontSize={11}
          fontWeight={700}
          letterSpacing={3.2}
          fontFamily="var(--font-ibm-plex-mono), ui-monospace, monospace"
        >
          {caption.toUpperCase()}
        </text>
      </svg>
    </figure>
  );
}
