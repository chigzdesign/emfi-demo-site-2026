import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { trust } from "@/content/trust";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";

export const metadata = {
  title: trust.title,
  description: trust.body,
};

const cardHover =
  "rounded-lg border border-line transition-[translate,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:-translate-y-[3px] group-hover:border-ink/25 group-hover:shadow-[var(--elevation-card-hover)]";

export default function TrustPage() {
  return (
    <>
      <PageHero title={trust.headline} body={trust.body} />

      <section>
        <Container className="py-12 md:py-16">
          <FadeIn>
            <Eyebrow>{trust.authorisedEyebrow}</Eyebrow>
            <h2 className="text-4xl font-bold tracking-[-0.025em] text-ink md:text-5xl">
              {trust.authorisedTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-secondary">
              {trust.authorisedBody}
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {trust.regulators.map((item, i) => (
              <FadeIn key={item.code} delay={i * 0.08}>
                <div className="group relative h-[8.5rem]">
                <article
                  tabIndex={0}
                  className={`absolute inset-0 overflow-hidden bg-card outline-none group-hover:z-10 group-hover:bg-page focus-visible:ring-2 focus-visible:ring-brand-focus ${cardHover}`}
                >
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-center overflow-visible px-4 transition-[right] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:right-[66%] group-hover:px-3 group-focus-within:right-[66%] group-focus-within:px-3">
                    <span
                      className={
                        item.mark
                          ? "relative h-20 w-20 overflow-hidden rounded-full transition-[width,height] duration-300 group-hover:h-16 group-hover:w-16 group-focus-within:h-16 group-focus-within:w-16"
                          : "flex items-center justify-center"
                      }
                    >
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={item.logoWidth}
                        height={item.logoHeight}
                        className={
                          item.mark
                            ? "h-20 w-20 object-cover grayscale transition-[filter,width,height] duration-300 group-hover:h-16 group-hover:w-16 group-hover:grayscale-0 group-focus-within:h-16 group-focus-within:w-16 group-focus-within:grayscale-0"
                            : "h-20 w-auto max-h-20 max-w-[13rem] overflow-visible object-contain object-center grayscale transition-[filter,max-height,max-width] duration-300 group-hover:max-h-12 group-hover:max-w-[8.5rem] group-hover:grayscale-0 group-focus-within:max-h-12 group-focus-within:max-w-[8.5rem] group-focus-within:grayscale-0"
                        }
                        unoptimized
                      />
                    </span>
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex w-[66%] flex-col justify-center border-l border-transparent pr-5 pl-3 text-left opacity-0 transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-focus-within:opacity-100">
                    <h3 className="text-base font-bold leading-snug text-ink md:text-lg">{item.name}</h3>
                    <ul className="mt-1.5 flex flex-col gap-0.5">
                      {item.entries.map((entry) => (
                        <li key={entry.href}>
                          <a
                            href={entry.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pointer-events-auto inline-flex items-center gap-1 text-xs font-medium text-brand hover:underline"
                          >
                            {entry.entity}
                            <ArrowUpRight size={13} aria-hidden className="shrink-0" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
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
            <Eyebrow>{trust.regulatedEyebrow}</Eyebrow>
            <h2 className="text-4xl font-bold tracking-[-0.025em] text-ink md:text-5xl">
              {trust.regulatedTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-secondary">
              {trust.regulatedBody}
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {trust.regimes.map((item, i) => (
              <FadeIn key={item.code} delay={i * 0.06}>
                <div className="group h-full">
                <article className={`h-full bg-page p-7 text-ink ${cardHover}`}>
                  <p className="font-mono text-[11px] font-bold tracking-[0.14em] text-brand">
                    {item.code}
                  </p>
                  <h3 className="mt-3 text-xl font-bold">{item.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink-secondary">{item.body}</p>
                </article>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12 md:py-16">
          <FadeIn>
            <Eyebrow>{trust.auditableEyebrow}</Eyebrow>
            <h2 className="text-4xl font-bold tracking-[-0.025em] text-ink md:text-5xl">
              {trust.auditableTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-ink-secondary">
              {trust.auditableBody}
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {trust.auditors.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.08}>
                <div className="group h-full">
                <article className={`flex h-full flex-col bg-page px-7 py-8 text-ink ${cardHover}`}>
                  <div className="flex h-20 items-center">
                    <Image
                      src={item.logo}
                      alt=""
                      width={item.logoWidth}
                      height={item.logoHeight}
                      className="h-14 w-auto max-w-[240px] object-contain object-left"
                      unoptimized
                    />
                  </div>
                  <h3 className="mt-6 text-base font-semibold text-ink">{item.name}</h3>
                  <p className="mt-1 text-xs leading-5 text-ink-muted">{item.scope}</p>
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
            <Eyebrow>{trust.entitiesEyebrow}</Eyebrow>
            <h2 className="text-4xl font-bold tracking-[-0.025em] text-ink md:text-5xl">
              {trust.entitiesTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-secondary">
              {trust.entitiesBody}
            </p>
          </FadeIn>
          <div className="mt-8 space-y-4">
            {trust.entities.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.05}>
                <div className="group">
                  <article className={`bg-page p-7 ${cardHover}`}>
                    <h3 className="font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink">
                      {item.name}
                    </h3>
                    <div className="mt-4 grid gap-6 border-t border-line pt-5 sm:grid-cols-2">
                      <div>
                        <p className="text-lg font-bold text-ink">{item.jurisdiction}</p>
                        <p className="mt-1 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink-muted">
                          Jurisdiction
                        </p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-ink">{item.regulator}</p>
                        <p className="mt-1 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink-muted">
                          Regulator
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:items-start">
                      <div>
                        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink-muted">
                          Role
                        </p>
                        <p className="mt-1 text-sm leading-6 text-ink-secondary">{item.role}</p>
                      </div>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline sm:justify-self-start"
                      >
                        View official register
                        <ArrowRight
                          size={14}
                          aria-hidden
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </a>
                    </div>
                  </article>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title={trust.ctaTitle} body={trust.ctaBody} action={trust.ctaButton} />
    </>
  );
}
