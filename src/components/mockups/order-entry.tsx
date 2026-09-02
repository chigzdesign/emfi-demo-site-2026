import { ArrowRight } from "lucide-react";

const fields = [
  ["ISIN", "XS1987120934"],
  ["SIDE", "BUY"],
  ["QUANTITY", "2,500,000"],
  ["SETTLEMENT", "DVP"],
] as const;

export function OrderEntry() {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-card shadow-sm emfi-card-lift">
      <div className="flex items-center gap-2 border-b border-line bg-subtle px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-brand-focus" />
        <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
          EMFI PLATFORM · ORDER ENTRY
        </span>
      </div>
      <div className="grid gap-5 p-5 md:grid-cols-2">
        <div>
          <p className="font-mono text-[10px] text-ink-muted">NEW ORDER / FIXED INCOME</p>
          {fields.map(([label, value]) => (
            <div key={label} className="mt-4 border-b border-line pb-3 font-mono text-[11px]">
              <span className="text-ink-muted">{label}</span>
              <span className="float-right text-ink">{value}</span>
            </div>
          ))}
          <div className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3 font-mono text-[11px] text-ink-inverse">
            SUBMIT ORDER <ArrowRight size={13} />
          </div>
        </div>
        <div className="rounded-md border border-line bg-subtle p-4">
          <p className="font-mono text-[10px] text-ink-muted">MARKET SNAPSHOT</p>
          <div className="mt-10 font-mono text-3xl text-ink">98.4375</div>
          <div className="mt-3 font-mono text-[11px] text-brand">+0.18% today</div>
          <svg className="mt-10 h-20 w-full" viewBox="0 0 300 70" aria-hidden>
            <polyline
              points="0,58 40,48 80,54 120,30 160,40 205,18 245,29 300,8"
              fill="none"
              stroke="var(--action-primary)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
