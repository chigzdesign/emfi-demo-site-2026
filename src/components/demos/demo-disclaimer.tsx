import { demoDisclaimer, demoDisclaimerNote } from "@/content/demos";

export function DemoDisclaimer() {
  return (
    <aside className="mt-5 rounded-md border border-line bg-subtle px-4 py-3">
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-brand">
        Demonstration only
      </p>
      <p className="mt-2 text-[12px] font-medium leading-5 text-ink-secondary">
        {demoDisclaimer}
      </p>
      <p className="mt-2 text-[11px] leading-5 text-ink-muted">
        {demoDisclaimerNote}
      </p>
    </aside>
  );
}
