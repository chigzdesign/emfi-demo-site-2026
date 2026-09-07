import { ArrowRight } from "lucide-react";
import { whyEmfi } from "@/content/why-emfi";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { RouteDiagram } from "@/components/diagrams/route-diagram";

export const metadata = {
  title: whyEmfi.title,
  description: whyEmfi.body,
};

const cardHover =
  "rounded-lg border border-line transition-[translate,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:-translate-y-[3px] group-hover:border-ink/25 group-hover:shadow-[var(--elevation-card-hover)]";

export default function WhyEmfiPage() {
  return (
    <>
      <PageHero title={whyEmfi.headline} body={whyEmfi.body} />

      <section className="bg-subtle">
        <Container className="py-12 md:py-16">
          <FadeIn>
            <Eyebrow>{whyEmfi.compareEyebrow}</Eyebrow>
            <h2 className="text-4xl font-bold tracking-[-0.025em] text-ink md:text-5xl">
              {whyEmfi.compareTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-secondary">
              {whyEmfi.compareBody}
            </p>
          </FadeIn>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <FadeIn>
              <div className="group h-full">
                <article className={`relative overflow-hidden bg-card p-8 ${cardHover}`}>
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
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="group h-full">
                <article className={`relative overflow-hidden bg-soft p-8 ${cardHover}`}>
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
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12 md:py-16">
          <FadeIn>
            <Eyebrow>{whyEmfi.responsiveEyebrow}</Eyebrow>
            <h2 className="text-4xl font-bold tracking-[-0.025em] text-ink md:text-5xl">
              {whyEmfi.responsiveTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-secondary">
              {whyEmfi.responsiveBody}
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {whyEmfi.responsiveCards.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.08}>
                <div className="group h-full">
                  <article className={`h-full bg-page p-7 text-ink ${cardHover}`}>
                    <p className="font-mono text-[11px] font-bold tracking-[0.14em] text-brand">
                      {item.label}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {item.points.map((point) => (
                        <li key={point} className="text-base font-medium leading-7 text-ink">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-subtle">
        <Container className="py-12 md:py-16">
          <FadeIn>
            <Eyebrow>{whyEmfi.accountableEyebrow}</Eyebrow>
            <h2 className="text-4xl font-bold tracking-[-0.025em] text-ink md:text-5xl">
              {whyEmfi.accountableTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-secondary">
              {whyEmfi.accountableBody}
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {whyEmfi.accountableCards.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.08}>
                <div className="group h-full">
                  <article className={`flex h-full flex-col bg-page p-7 text-ink ${cardHover}`}>
                    <p className="font-mono text-[11px] font-bold tracking-[0.14em] text-brand">
                      {item.label}
                    </p>
                    <p className="mt-4 text-xl font-bold leading-snug">{item.body}</p>
                    {"href" in item && item.href ? (
                      <a
                        href={item.href}
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                      >
                        See the evidence
                        <ArrowRight
                          size={14}
                          aria-hidden
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </a>
                    ) : null}
                  </article>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title={whyEmfi.ctaTitle} body={whyEmfi.ctaBody} action={whyEmfi.ctaButton} />
    </>
  );
}
