export function SettlementChain({
  nodes,
}: {
  nodes: readonly (readonly [string, string])[];
}) {
  const count = nodes.length;
  const width = 1100;
  const boxWidth = 160;
  const start = 45;
  const end = width - 45 - boxWidth;
  const step = count > 1 ? (end - start) / (count - 1) : 0;
  const positions = nodes.map((_, i) => start + step * i);
  const lineStart = positions[0] + boxWidth / 2;
  const lineEnd = positions[count - 1] + boxWidth / 2;

  return (
    <div className="overflow-x-auto">
      <svg
        viewBox={`0 0 ${width} 270`}
        className="min-w-[720px] w-full"
        role="img"
        aria-label={nodes.map(([label]) => label).join(" to ")}
      >
        <line
          x1={lineStart}
          y1="130"
          x2={lineEnd}
          y2="130"
          stroke="var(--action-primary)"
          strokeWidth="2"
        />
        {positions.map((x) => (
          <circle
            key={x}
            cx={x + boxWidth / 2}
            cy="130"
            r="5"
            fill="var(--action-primary)"
          />
        ))}
        {nodes.map(([label, sub], i) => (
          <g key={label}>
            <rect
              x={positions[i]}
              y="75"
              width={boxWidth}
              height="110"
              rx="8"
              fill="var(--bg-page)"
              stroke={i === 1 ? "var(--action-primary)" : "var(--border-default)"}
              strokeWidth={i === 1 ? 2 : 1}
            />
            <text
              x={positions[i] + boxWidth / 2}
              y="112"
              fill="var(--text-primary)"
              fontSize="13"
              fontFamily="var(--font-ibm-plex-mono), ui-monospace, monospace"
              textAnchor="middle"
            >
              {label}
            </text>
            <text
              x={positions[i] + boxWidth / 2}
              y="140"
              fill="var(--text-muted)"
              fontSize="10"
              fontFamily="var(--font-ibm-plex-mono), ui-monospace, monospace"
              textAnchor="middle"
            >
              {sub}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
