"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { DemoDisclaimer } from "@/components/demos/demo-disclaimer";

type LookupResult = {
  security: string;
  type: string;
  price: string;
  bidOffer: string;
  currency: string;
  settlement: string;
};

export function SecurityLookup() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "done">(
    "idle",
  );
  const [error, setError] = useState("");
  const [result, setResult] = useState<LookupResult | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch(
        `/api/demo/security?q=${encodeURIComponent(query)}`,
      );
      const data = (await res.json()) as LookupResult & { error?: string };
      if (!res.ok) {
        setResult(null);
        setError(data.error ?? "Demonstration unavailable.");
        setStatus("error");
        return;
      }
      setResult(data);
      setStatus("done");
    } catch {
      setResult(null);
      setError("Demonstration unavailable.");
      setStatus("error");
    }
  }

  return (
    <div id="execution-demo" className="rounded-lg border border-line bg-page p-6 md:p-8">
      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
        Interactive demonstration
      </p>
      <h3 className="mt-2 text-2xl font-bold text-ink">Search a security</h3>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-secondary">
        Try “demo bond”, “XS0000000001”, or “Allfunds”. This is not trading
        access.
      </p>

      <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
        <label className="relative flex-1">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Security / ISIN / Issuer"
            className="w-full rounded-md border border-line bg-subtle py-3 pl-10 pr-4 text-sm text-ink outline-none focus:border-brand-focus"
          />
        </label>
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-brand px-6 py-3 text-[13px] font-bold text-ink-inverse disabled:opacity-60"
        >
          {status === "loading" ? "Looking up…" : "Look up"}
        </button>
      </form>

      {error ? (
        <p className="mt-4 text-sm text-ink-secondary">{error}</p>
      ) : null}

      {result ? (
        <dl className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            ["Security", result.security],
            ["Type", result.type],
            ["Price", result.price],
            ["Bid / Offer", result.bidOffer],
            ["Currency", result.currency],
            ["Settlement", result.settlement],
          ].map(([label, value]) => (
            <div key={label} className="rounded-md border border-line bg-subtle px-4 py-3">
              <dt className="font-mono text-[10px] tracking-[0.14em] text-ink-muted">
                {label}
              </dt>
              <dd className="mt-1 text-sm font-semibold text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <DemoDisclaimer />
    </div>
  );
}
