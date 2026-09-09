"use client";

import { motion, useReducedMotion } from "framer-motion";
import { brandSignPath } from "@/components/brand/logo";
import { about } from "@/content/about";

const CX = 160;
const CY = 168;
const RING = 92;
const MARK_SIZE = 72;
const MARK_VIEWBOX = 50;
const MARK_SCALE = MARK_SIZE / MARK_VIEWBOX;
const ease = [0.22, 1, 0.36, 1] as const;

function point(angle: number, radius: number) {
  const a = (angle * Math.PI) / 180;
  return {
    x: CX + Math.cos(a) * radius,
    y: CY + Math.sin(a) * radius,
  };
}

function tick(angle: number, inner: number, outer: number) {
  const a = point(angle, inner);
  const b = point(angle, outer);
  return { x1: a.x, y1: a.y, x2: b.x, y2: b.y };
}

const ARC = `M ${CX} ${CY - RING} A ${RING} ${RING} 0 0 1 ${CX} ${CY + RING}`;

export function DecadeHeroVisual() {
  const reduceMotion = useReducedMotion();
  const { from, to, mark, caption } = about.heroVisual;
  const label = `${from} to ${to}. ${mark}. ${caption}.`;

  return (
    <figure className="relative mx-auto w-full max-w-[17rem]" aria-label={label}>
      <svg viewBox="0 0 320 328" className="h-auto w-full" role="img" aria-hidden>
        <path
          d={ARC}
          fill="none"
          stroke="var(--action-primary)"
          strokeOpacity={0.18}
          strokeWidth={2.5}
          strokeLinecap="round"
        />
        {reduceMotion ? (
          <path
            d={ARC}
            fill="none"
            stroke="var(--action-primary)"
            strokeWidth={2.5}
            strokeLinecap="round"
          />
        ) : (
          <motion.path
            d={ARC}
            fill="none"
            stroke="var(--action-primary)"
            strokeWidth={2.5}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 0, 1, 1] }}
            transition={{
              duration: 8,
              times: [0, 0.08, 0.78, 1],
              repeat: Infinity,
              repeatDelay: 1.1,
              ease,
            }}
          />
        )}

        {Array.from({ length: 11 }, (_, i) => {
          const angle = -90 + i * 18;
          const t = tick(angle, RING - 7, RING + 7);
          const major = i === 0 || i === 10;
          return (
            <line
              key={i}
              x1={t.x1}
              y1={t.y1}
              x2={t.x2}
              y2={t.y2}
              stroke="var(--action-primary)"
              strokeOpacity={major ? 0.9 : 0.32}
              strokeWidth={major ? 2 : 1.25}
              strokeLinecap="round"
            />
          );
        })}

        <circle cx={CX} cy={CY - RING} r={3.5} fill="var(--action-primary)" />
        <circle cx={CX} cy={CY + RING} r={3.5} fill="var(--action-primary)" />

        {reduceMotion ? (
          <g>
            <circle
              cx={CX}
              cy={CY + RING}
              r={8}
              fill="color-mix(in srgb, var(--action-primary) 22%, transparent)"
            />
            <circle cx={CX} cy={CY + RING} r={3.5} fill="var(--action-primary)" />
          </g>
        ) : (
          <motion.g
            initial={{ rotate: -90 }}
            animate={{ rotate: [-90, -90, 90, 90] }}
            transition={{
              duration: 8,
              times: [0, 0.08, 0.78, 1],
              repeat: Infinity,
              repeatDelay: 1.1,
              ease,
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

        <g
          transform={`translate(${CX - MARK_SIZE / 2} ${CY - MARK_SIZE / 2}) scale(${MARK_SCALE})`}
        >
          <path fill="var(--bg-inverse)" d={brandSignPath} />
        </g>

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
          y={314}
          textAnchor="middle"
          fill="var(--action-primary)"
          fontSize={15}
          fontWeight={700}
          letterSpacing={2.4}
          fontFamily="var(--font-ibm-plex-mono), ui-monospace, monospace"
        >
          {to}
        </text>
      </svg>
      <p className="mx-auto mt-2 w-fit rounded-lg bg-inverse px-4 py-2.5 text-center font-mono text-[12px] font-extrabold uppercase tracking-[0.16em] text-ink-inverse">
        {caption}
      </p>
    </figure>
  );
}
