"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { researchNotes, type ResearchNote } from "@/content/demos";
import { cn } from "@/lib/cn";

function unique(values: string[]) {
  return [...new Set(values)];
}

function FilterSelect({
  label,
  value,
  options,
  allLabel,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  allLabel: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block min-w-0 flex-1">
      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-ink-muted">
        {label}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1.5 w-full appearance-none rounded-md border border-line bg-page bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22><path fill=%22%236b7280%22 d=%22M1 1l5 5 5-5%22/></svg>')] bg-[length:12px] bg-[right_12px_center] bg-no-repeat py-2.5 pl-3 pr-8 text-sm text-ink outline-none focus:border-brand-focus"
      >
        <option value="">{allLabel}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function matchesQuery(note: ResearchNote, query: string) {
  const haystack = [
    note.title,
    note.id,
    note.isin,
    note.country,
    note.issuer,
    note.analyst,
    note.theme,
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

export function ResearchWorkbench() {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("");
  const [issuer, setIssuer] = useState("");
  const [theme, setTheme] = useState("");
  const [analyst, setAnalyst] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const countries = useMemo(() => unique(researchNotes.map((note) => note.country)).sort(), []);
  const issuers = useMemo(() => unique(researchNotes.map((note) => note.issuer)).sort(), []);
  const themes = useMemo(() => unique(researchNotes.map((note) => note.theme)).sort(), []);
  const analysts = useMemo(() => unique(researchNotes.map((note) => note.analyst)).sort(), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return researchNotes.filter((note) => {
      if (country && note.country !== country) return false;
      if (issuer && note.issuer !== issuer) return false;
      if (theme && note.theme !== theme) return false;
      if (analyst && note.analyst !== analyst) return false;
      if (q && !matchesQuery(note, q)) return false;
      return true;
    });
  }, [analyst, country, issuer, query, theme]);

  return (
    <div>
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1.15fr)_repeat(4,minmax(0,0.85fr))] lg:items-end">
        <label className="relative min-w-0">
          <span className="sr-only">Search research</span>
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted"
          />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search title, ISIN-style…"
            className="w-full rounded-md border border-line bg-page py-2.5 pl-10 pr-3 text-sm text-ink outline-none focus:border-brand-focus"
          />
        </label>
        <FilterSelect
          label="Country"
          value={country}
          options={countries}
          allLabel="All countries"
          onChange={setCountry}
        />
        <FilterSelect
          label="Issuer"
          value={issuer}
          options={issuers}
          allLabel="All issuers"
          onChange={setIssuer}
        />
        <FilterSelect
          label="Theme"
          value={theme}
          options={themes}
          allLabel="All themes"
          onChange={setTheme}
        />
        <FilterSelect
          label="Analyst"
          value={analyst}
          options={analysts}
          allLabel="All analysts"
          onChange={setAnalyst}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-sm text-ink-muted">
          No matching notes in this demonstration set.
        </p>
      ) : (
        <ul className="mt-6 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {filtered.map((note) => {
            const active = selected === note.id;
            return (
              <li key={note.id}>
                <button
                  type="button"
                  onClick={() => setSelected(active ? null : note.id)}
                  className={cn(
                    "w-full rounded-md border px-4 py-4 text-left transition-colors",
                    active
                      ? "border-brand bg-soft"
                      : "border-transparent hover:border-line hover:bg-subtle",
                  )}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-brand">
                      {note.theme}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-muted">
                      {note.id}
                    </p>
                  </div>
                  <p className="mt-3 text-lg font-bold leading-6 tracking-[-0.02em] text-ink">
                    {note.title}
                  </p>
                  <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[11px]">
                    {[
                      ["Country", note.country],
                      ["Issuer", note.issuer],
                      ["Analyst", note.analyst],
                    ].map(([label, value]) => (
                      <div key={label} className="flex gap-1.5">
                        <dt className="font-mono font-bold uppercase tracking-[0.12em] text-ink-muted">
                          {label}
                        </dt>
                        <dd className="text-ink-secondary">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-4 flex items-center justify-between border-t border-line pt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted">
                    <span>{note.isoDate}</span>
                    <span>{note.minutes} min</span>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
