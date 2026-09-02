const rows = [
  ["XS1987120934", "EMFI 4.75 2029", "$2,461,000", "+1.82%"],
  ["GB00B03MLX29", "UK Treasury Gilt", "$1,048,750", "+0.64%"],
  ["US912810TM67", "US Treasury Note", "$1,205,400", "-0.22%"],
  ["IE00BF5LKP58", "iShares Core ETF", "$689,220", "+2.41%"],
] as const;

export function PortfolioView() {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-card shadow-sm emfi-card-lift">
      <div className="flex items-center gap-2 border-b border-line bg-subtle px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-brand-focus" />
        <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
          EMFI PLATFORM · PORTFOLIO VIEW
        </span>
      </div>
      <div className="flex min-h-[320px]">
        <aside className="hidden w-44 shrink-0 border-r border-line bg-subtle p-4 font-mono text-[11px] text-ink-muted sm:block">
          <p className="mb-7 text-brand">PORTFOLIO</p>
          {["Overview", "Positions", "Transactions", "Reports"].map((item, i) => (
            <div
              key={item}
              className={`mb-5 pl-3 ${i === 0 ? "border-l-2 border-brand text-ink" : ""}`}
            >
              {item}
            </div>
          ))}
        </aside>
        <div className="min-w-0 flex-1 p-5">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-[10px] text-ink-muted">MODEL PORTFOLIO / 18 JUN 2026</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">Positions</h3>
            </div>
            <span className="font-mono text-[10px] text-brand">NAV $5,404,370</span>
          </div>
          <div className="mt-6 overflow-x-auto">
            <div className="min-w-[560px] font-mono text-[11px]">
              <div className="grid grid-cols-[1.3fr_1.3fr_1fr_.8fr] border-b border-line pb-3 text-ink-muted">
                <span>ISIN</span>
                <span>DESCRIPTION</span>
                <span>MARKET VALUE</span>
                <span>P&L</span>
              </div>
              {rows.map((row) => (
                <div
                  key={row[0]}
                  className="grid grid-cols-[1.3fr_1.3fr_1fr_.8fr] border-b border-line py-4 text-ink-secondary last:border-0"
                >
                  <span className="text-brand">{row[0]}</span>
                  <span>{row[1]}</span>
                  <span>{row[2]}</span>
                  <span className={row[3].startsWith("-") ? "text-ink-muted" : "text-brand"}>
                    {row[3]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
