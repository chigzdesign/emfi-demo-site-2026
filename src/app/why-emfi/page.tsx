import { whyEmfi } from "@/content/why-emfi";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { RouteDiagram } from "@/components/diagrams/route-diagram";

export const metadata = {
  title: whyEmfi.title,
  description: whyEmfi.body,
};

export default function WhyEmfiPage() {
  return (
    <>
      <PageHero
        eyebrow={whyEmfi.eyebrow}
        title={whyEmfi.headline}
        body={whyEmfi.body}
      />

      <section className="bg-subtle">
        <Container className="py-12 md:py-16">
          <FadeIn>
            <Eyebrow>{whyEmfi.compareEyebrow}</Eyebrow>
            <h2 className="text-4xl font-bold tracking-[-0.025em] text-ink md:text-5xl">
              {whyEmfi.compareTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-7 text-ink-secondary">
              {whyEmfi.compareBody}
            </p>
          </FadeIn>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <FadeIn>
              <article className="relative overflow-hidden rounded-lg bg-card p-8 emfi-card-lift">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-ink-secondary">
                      {whyEmfi.traditionalLabel}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-ink">
                      {whyEmfi.traditionalTitle}
                    </h3>
                  </div>
                  <div className="rounded-md border border-line-strong px-3 py-1.5">
                    <span className="font-mono text-[10px] text-ink">
                      {whyEmfi.traditionalNodes}
                    </span>
                  </div>
                </div>
                <RouteDiagram />
                <div className="mt-2 flex items-center gap-3 border-t border-line pt-5">
                  <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                  <p className="text-sm text-ink-secondary">{whyEmfi.traditionalFoot}</p>
                </div>
              </article>
            </FadeIn>
            <FadeIn delay={0.1}>
              <article className="relative overflow-hidden rounded-lg bg-soft p-8 emfi-card-lift">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-brand">
                      {whyEmfi.emfiLabel}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-ink">{whyEmfi.emfiTitle}</h3>
                  </div>
                  <div className="rounded-md border border-brand/30 px-3 py-1.5">
                    <span className="font-mono text-[10px] text-brand">{whyEmfi.emfiNodes}</span>
                  </div>
                </div>
                <RouteDiagram direct />
                <div className="mt-2 flex items-center gap-3 border-t border-brand/20 pt-5">
                  <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <p className="text-sm text-brand">{whyEmfi.emfiFoot}</p>
                </div>
              </article>
            </FadeIn>
          </div>
        </Container>
      </section>

      {whyEmfi.pillars.map((pillar, i) => (
        <section key={pillar.key} className={i % 2 === 1 ? "bg-subtle" : ""}>
          <Container className="py-12 md:py-16">
            <FadeIn>
              <Eyebrow>{pillar.title}</Eyebrow>
              <h2 className="max-w-3xl text-4xl font-bold tracking-[-0.025em] text-ink md:text-5xl">
                {pillar.claim}
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-ink-secondary">
                {pillar.body}
              </p>
            </FadeIn>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Card>
                <p className="font-mono text-[11px] font-bold tracking-[0.14em] text-brand">
                  Demonstration
                </p>
                <p className="mt-3 text-base font-medium text-ink">{pillar.demonstration}</p>
              </Card>
              <Card>
                <p className="font-mono text-[11px] font-bold tracking-[0.14em] text-brand">
                  Evidence
                </p>
                <p className="mt-3 text-base font-medium text-ink">{pillar.evidence}</p>
              </Card>
            </div>
            {"storyTitle" in pillar && pillar.storyTitle ? (
              <article className="mt-8 rounded-lg border border-line bg-page p-7 md:p-9">
                <p className="font-mono text-[11px] font-bold tracking-[0.14em] text-brand">
                  Lapa
                </p>
                <h3 className="mt-3 text-2xl font-bold text-ink">{pillar.storyTitle}</h3>
                <p className="mt-4 max-w-3xl text-base leading-7 text-ink-secondary">
                  {pillar.storyBody}
                </p>
              </article>
            ) : null}
          </Container>
        </section>
      ))}

      <CtaBand
        eyebrow={whyEmfi.trustCtaEyebrow}
        title={whyEmfi.trustCtaTitle}
        body={whyEmfi.trustCtaBody}
        action={whyEmfi.trustCta}
        href="/trust"
      />
    </>
  );
}
