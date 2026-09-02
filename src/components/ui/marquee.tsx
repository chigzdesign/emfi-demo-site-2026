export function Marquee({ items }: { items: readonly string[] }) {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-line bg-page">
      <div className="emfi-marquee-track flex w-max items-center gap-10 py-4 md:gap-16">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 whitespace-nowrap font-mono text-[11px] font-bold tracking-[0.16em] text-ink-secondary md:gap-16"
            aria-hidden={i >= items.length}
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-brand" />
          </span>
        ))}
      </div>
    </div>
  );
}
