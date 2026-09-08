"use client";

import { motion } from "framer-motion";
import { whyEmfi } from "@/content/why-emfi";

const traditional = [
  { label: "CLIENT", x: 76, w: 120, pain: null },
  { label: "PRIME BROKER", x: 228, w: 120, pain: "MARKUP +" },
  { label: "GLOBAL CUSTODIAN", x: 380, w: 148, pain: "FEE LAYER" },
  { label: "SUB-CUSTODIAN", x: 532, w: 132, pain: "OPACITY" },
  { label: "EUROCLEAR", x: 684, w: 120, pain: null },
] as const;

export function RouteDiagram({ direct = false }: { direct?: boolean }) {
  if (direct) {
    return (
      <svg viewBox="0 0 760 230" className="w-full" role="img" aria-label="EMFI direct route">
        <motion.path
          d="M 155 95 L 302 95"
          stroke="var(--action-primary)"
          strokeWidth={2.5}
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
        <motion.polygon
          points="302,91 312,95 302,99"
          fill="var(--action-primary)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.85, duration: 0.15 }}
        />
        <motion.path
          d="M 458 95 L 605 95"
          stroke="var(--action-primary)"
          strokeWidth={2.5}
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.polygon
          points="605,91 615,95 605,99"
          fill="var(--action-primary)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.35, duration: 0.15 }}
        />
        <rect
          x={22}
          y={71}
          width={133}
          height={48}
          rx={8}
          fill="var(--bg-page)"
          stroke="var(--border-default)"
          strokeWidth={1.5}
        />
        <text
          x={88}
          y={100}
          fill="var(--text-muted)"
          textAnchor="middle"
          fontSize={13}
          fontFamily="var(--font-ibm-plex-mono), ui-monospace, monospace"
          fontWeight={600}
        >
          CLIENT
        </text>
        <rect x={312} y={67} width={156} height={56} rx={8} fill="var(--action-primary)" />
        <text
          x={390}
          y={96}
          fill="var(--text-inverse)"
          textAnchor="middle"
          fontSize={14}
          fontFamily="var(--font-ibm-plex-mono), ui-monospace, monospace"
          fontWeight={700}
        >
          EMFI
        </text>
        <text
          x={390}
          y={112}
          fill="var(--text-inverse)"
          textAnchor="middle"
          fontSize={10}
          fontFamily="var(--font-ibm-plex-mono), ui-monospace, monospace"
          fontWeight={500}
          letterSpacing={1}
        >
          DIRECT PARTICIPANT
        </text>
        <rect
          x={619}
          y={71}
          width={120}
          height={48}
          rx={8}
          fill="var(--bg-page)"
          stroke="var(--action-primary)"
          strokeWidth={1.5}
        />
        <text
          x={679}
          y={100}
          fill="var(--text-primary)"
          textAnchor="middle"
          fontSize={12}
          fontFamily="var(--font-ibm-plex-mono), ui-monospace, monospace"
          fontWeight={600}
        >
          EUROCLEAR
        </text>
        <text
          x={380}
          y={188}
          fill="var(--action-primary)"
          textAnchor="middle"
          fontSize={12}
          fontFamily="var(--font-ibm-plex-mono), ui-monospace, monospace"
          letterSpacing={2}
        >
          {whyEmfi.emfiCaption}
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 760 230" className="w-full" role="img" aria-label="Traditional route">
      {traditional.slice(0, -1).map((node, i) => {
        const x1 = node.x + node.w / 2;
        const x2 = traditional[i + 1].x - traditional[i + 1].w / 2;
        return (
          <g key={`conn-${node.label}`}>
            <line
              x1={x1}
              y1={83}
              x2={x2}
              y2={83}
              stroke="var(--text-secondary)"
              strokeWidth={1.5}
              strokeDasharray="5 4"
            />
            <polygon
              points={`${x2},79 ${x2 + 8},83 ${x2},87`}
              fill="var(--text-secondary)"
            />
          </g>
        );
      })}
      {traditional.map((node) => {
        const isIntermediary = node.pain !== null;
        return (
          <g key={node.label}>
            <rect
              x={node.x - node.w / 2}
              y={59}
              width={node.w}
              height={48}
              rx={8}
              fill={isIntermediary ? "var(--bg-subtle)" : "var(--bg-page)"}
              stroke="var(--border-strong)"
              strokeWidth={1.5}
            />
            <text
              x={node.x}
              y={88}
              fill="var(--text-primary)"
              textAnchor="middle"
              fontSize={11}
              fontFamily="var(--font-ibm-plex-mono), ui-monospace, monospace"
              fontWeight={600}
            >
              {node.label}
            </text>
            {node.pain ? (
              <text
                x={node.x}
                y={138}
                fill="var(--text-secondary)"
                textAnchor="middle"
                fontSize={11}
                fontFamily="var(--font-ibm-plex-mono), ui-monospace, monospace"
                fontWeight={500}
              >
                {node.pain}
              </text>
            ) : null}
          </g>
        );
      })}
      <text
        x={380}
        y={188}
        fill="var(--text-secondary)"
        textAnchor="middle"
        fontSize={12}
        fontFamily="var(--font-ibm-plex-mono), ui-monospace, monospace"
        letterSpacing={2}
      >
        {whyEmfi.traditionalCaption}
      </text>
    </svg>
  );
}
