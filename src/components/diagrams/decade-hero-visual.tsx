"use client";

import { motion, useReducedMotion } from "framer-motion";
import { about } from "@/content/about";

const CX = 160;
const CY = 168;
const RING = 92;

function tick(i: number, inner: number, outer: number) {
  const a = ((i * 36 - 90) * Math.PI) / 180;
  const c = Math.cos(a);
  const s = Math.sin(a);
  return {
    x1: CX + c * inner,
    y1: CY + s * inner,
    x2: CX + c * outer,
    y2: CY + s * outer,
  };
}

export function DecadeHeroVisual() {
  const reduceMotion = useReducedMotion();
  const { from, to, mark, caption } = about.heroVisual;
  const label = `${from} to ${to}. ${mark}. ${caption}.`;

  return (
    <figure className="relative mx-auto w-full max-w-[17rem]" aria-label={label}>
      <svg viewBox="0 0 320 360" className="h-auto w-full" role="img" aria-hidden>
        <text
          x={CX}
          y={CY + 38}
          textAnchor="middle"
          fill="var(--action-primary)"
          fillOpacity={0.12}
          fontSize={168}
          fontWeight={800}
          letterSpacing={-10}
          fontFamily="var(--font-inter), ui-sans-serif, system-ui, sans-serif"
        >
          10
        </text>
        <circle
          cx={CX}
          cy={CY}
          r={RING + 16}
          fill="none"
          stroke="var(--action-primary)"
          strokeOpacity={0.22}
          strokeWidth={1.25}
        />
        <circle
          cx={CX}
          cy={CY}
          r={RING}
          fill="none"
          stroke="var(--action-primary)"
          strokeWidth={2.5}
        />
        {Array.from({ length: 10 }, (_, i) => {
          const t = tick(i, RING - 7, RING + 7);
          return (
            <line
              key={i}
              x1={t.x1}
              y1={t.y1}
              x2={t.x2}
              y2={t.y2}
              stroke="var(--action-primary)"
              strokeOpacity={i % 5 === 0 ? 0.9 : 0.35}
              strokeWidth={i % 5 === 0 ? 2 : 1.25}
              strokeLinecap="round"
            />
          );
        })}
        <circle cx={CX} cy={CY - RING} r={3.5} fill="var(--action-primary)" />
        <circle cx={CX} cy={CY + RING} r={3.5} fill="var(--action-primary)" />
        {reduceMotion ? null : (
          <motion.g
            initial={{ rotate: -90 }}
            animate={{ rotate: 270 }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
            transformTemplate={({ rotate }) => `rotate(${rotate} ${CX} ${CY})`}
          >
            <circle
              cx={CX + RING}
              cy={CY}
              r={8}
              fill="color-mix(in srgb, var(--action-primary) 22%, transparent)"
            />
            <circle cx={CX + RING} cy={CY} r={3.5} fill="var(--action-primary)" />
          </motion.g>
        )}
        <rect
          x={CX - 58}
          y={CY - 24}
          width={116}
          height={48}
          rx={10}
          fill="var(--bg-inverse)"
        />
        <text
          x={CX}
          y={CY + 7}
          textAnchor="middle"
          fill="var(--text-inverse)"
          fontSize={22}
          fontWeight={800}
          letterSpacing={4.2}
          fontFamily="var(--font-inter), ui-sans-serif, system-ui, sans-serif"
        >
          {mark}
        </text>
        <text
          x={CX}
          y={42}
          textAnchor="middle"
          fill="var(--action-primary)"
          fontSize={15}
          fontWeight={700}
          letterSpacing={2.4}
          fontFamily="var(--font-ibm-plex-mono), ui-monospace, monospace"
        >
          {from}
        </text>
        <text
          x={CX}
          y={318}
          textAnchor="middle"
          fill="var(--action-primary)"
          fontSize={15}
          fontWeight={700}
          letterSpacing={2.4}
          fontFamily="var(--font-ibm-plex-mono), ui-monospace, monospace"
        >
          {to}
        </text>
        <text
          x={CX}
          y={344}
          textAnchor="middle"
          fill="var(--text-muted)"
          fontSize={10}
          fontWeight={700}
          letterSpacing={2.4}
          fontFamily="var(--font-ibm-plex-mono), ui-monospace, monospace"
        >
          {caption.toUpperCase()}
        </text>
      </svg>
    </figure>
  );
}
