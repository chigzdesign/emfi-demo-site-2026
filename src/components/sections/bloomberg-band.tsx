import { demo } from "@/content/platform";
import { Container } from "@/components/layout/container";

export function BloombergBand() {
  return (
    <section className="bg-subtle">
      <Container className="py-10 md:py-12">
        <div className="overflow-hidden rounded-lg border border-line bg-inverse text-ink-inverse">
          <div className="flex items-center gap-2 border-b border-line-inverse px-5 py-3 font-mono text-[10px] tracking-[0.16em] text-ink-inverse-muted">
            <span className="h-2 w-2 rounded-full bg-ink-inverse/30" />
            <span className="h-2 w-2 rounded-full bg-ink-inverse/30" />
            <span className="h-2 w-2 rounded-full bg-ink-inverse" />
            <span className="ml-2">{demo.bloombergEyebrow}</span>
          </div>
          <div className="grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-12">
            <p className="text-xl leading-8 md:text-2xl">
              {demo.bloombergBody}{" "}
              <span className="font-mono font-semibold">{demo.bloombergCode}</span>.
            </p>
            <div className="rounded-md border border-line-inverse bg-brand-hover/40 p-5">
              <p className="font-mono text-[10px] tracking-[0.18em] text-ink-inverse-muted">
                BLOOMBERG PROFESSIONAL
              </p>
              <p className="mt-4 font-mono text-4xl font-bold tracking-[-0.04em] md:text-5xl">
                {demo.bloombergCode}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
