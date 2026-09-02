"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  researchCategories,
  researchNotes,
  type ResearchCategory,
} from "@/content/demos";
import { DemoDisclaimer } from "@/components/demos/demo-disclaimer";
import { cn } from "@/lib/cn";

export function ResearchExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ResearchCategory>("All");

  const filtered = useMemo(() => {
    const byCategory =
      category === "All"
        ? researchNotes
        : researchNotes.filter((note) => note.category === category);
    const q = query.trim().toLowerCase();
    if (!q) return byCategory;
    return byCategory.filter((note) =>
      `${note.title} ${note.desk} ${note.category}`.toLowerCase().includes(q),
    );
  }, [category, query]);

  return (
    <div id="research-demo" className="rounded-lg border border-line bg-page p-6 md:p-8">
      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
        Interactive demonstration
      </p>
      <h3 className="mt-2 text-2xl font-bold text-ink">Explore EMFI Research</h3>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-secondary">
        Selected recent notes. Filter in place — this is not a library of
        country pages.
      </p>

      <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
        <label className="relative flex-1">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search research"
            className="w-full rounded-md border border-line bg-subtle py-3 pl-10 pr-4 text-sm text-ink outline-none focus:border-brand-focus"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {researchCategories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={cn(
                "rounded-full border px-4 py-2 font-mono text-[11px] font-bold tracking-[0.12em]",
                category === item
                  ? "border-brand bg-brand text-ink-inverse"
                  : "border-line text-ink-muted hover:border-ink hover:text-ink",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <ul className="mt-6 divide-y divide-line border-t border-line">
        {filtered.map((note) => (
          <li key={note.title} className="flex flex-col gap-1 py-4 md:flex-row md:items-baseline md:justify-between">
            <div>
              <p className="font-mono text-[10px] font-bold tracking-[0.14em] text-brand">
                {note.category}
              </p>
              <p className="mt-1 text-base font-semibold text-ink">{note.title}</p>
            </div>
            <p className="font-mono text-[11px] text-ink-muted">
              {note.date} / {note.desk}
            </p>
          </li>
        ))}
        {filtered.length === 0 ? (
          <li className="py-8 text-sm text-ink-muted">No matching notes in this demonstration set.</li>
        ) : null}
      </ul>

      <DemoDisclaimer />
    </div>
  );
}
