import Link from "next/link";
import { ArrowRight, BarChart3, PieChart, ShieldCheck } from "lucide-react";
import { home } from "@/content/home";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn, FadeInOnLoad } from "@/components/motion/fade-in";
import { LogoLoop } from "@/components/brand/logo-loop";
import { HeroAtmosphere2 } from "@/components/sections/hero-atmosphere2";
import { RelationshipChain } from "@/components/sections/relationship-chain";
import { GlobalPresence } from "@/components/sections/global-presence";
import { CtaBand } from "@/components/sections/cta-band";

const serviceIcons = [BarChart3, ShieldCheck, PieChart];

export const metadata = {
  title: {
    absolute: home.title,
  },
  description: home.hero.body,
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-page">
        <HeroAtmosphere2 />
        <Container className="relative py-12 lg:py-28">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.18fr)] lg:gap-10">
            <div>
              <FadeInOnLoad>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-subtle px-3 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="emfi-live-dot absolute inline-flex h-2 w-2 rounded-full bg-brand" />
                  </span>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink-muted">
                    {home.hero.mockupLabel} · {home.hero.mockupStatus}
                  </span>
                </div>
              </FadeInOnLoad>
              <FadeInOnLoad delay={0.08}>
                <h1
                  className="text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-ink md:text-5xl lg:text-[58px]"
                  aria-label={`${home.hero.headline} ${home.hero.headlineAccent}`}
                >
                  <span className="block">{home.hero.headline}</span>
                  <span className="block font-light tracking-[-0.03em] text-brand">{home.hero.headlineAccent}</span>
                </h1>
              </FadeInOnLoad>
              <FadeInOnLoad delay={0.2}>
                <p className="mt-5 max-w-xl text-lg font-medium leading-[1.65] text-ink-secondary md:text-[19px]">
                  {home.hero.body}
                </p>
              </FadeInOnLoad>
              <FadeInOnLoad delay={0.28}>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Button href="/contact">{home.hero.primaryCta}</Button>
                  <Button href="/services" variant="outline">
                    {home.hero.secondaryCta}
                  </Button>
                </div>
              </FadeInOnLoad>
            </div>

            <FadeInOnLoad delay={0.18}>
              <div className="emfi-float flex items-center justify-center">
                <LogoLoop className="h-56 w-56 md:h-80 md:w-80 lg:h-[420px] lg:w-[420px]" />
              </div>
            </FadeInOnLoad>
          </div>
        </Container>
      </section>

      <RelationshipChain />

      <section>
        <Container className="py-12 md:py-28">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-5">
            <FadeIn className="flex flex-col justify-center">
              <Eyebrow className="flex items-center gap-2">
                {home.servicesEyebrow}
                <span className="h-px w-6 bg-line-strong" aria-hidden />
              </Eyebrow>
              <h2 className="text-4xl font-extrabold tracking-[-0.035em] text-ink md:text-5xl">
                {home.servicesTitle}
              </h2>
              <p className="mt-4 text-lg font-medium text-ink-secondary">
                {home.servicesBody}
              </p>
              <div className="mt-6">
                <Button href="/services" variant="outline">
                  {home.hero.secondaryCta}
                </Button>
              </div>
            </FadeIn>

            {home.services.map(([title, body, href], i) => {
              const Icon = serviceIcons[i] ?? BarChart3;
              const active = i === 1;

              return (
                <FadeIn key={title} delay={i * 0.08}>
                  <article
                    className={cn(
                      "relative flex h-full flex-col overflow-hidden rounded-lg border p-6 emfi-card-lift md:p-7",
                      active
                        ? "border-brand/20 bg-brand-soft text-ink"
                        : "border-line bg-page text-ink hover:bg-card",
                    )}
                  >
                    <span
                      className="emfi-bar-grow absolute inset-x-0 top-0 h-[3px] origin-left bg-brand"
                      style={{ animationDelay: `${i * 0.12 + 0.15}s` }}
                      aria-hidden
                    />
                    <span
                      className="pointer-events-none absolute bottom-1 right-3 select-none text-7xl font-black leading-none text-ink/[0.05]"
                      aria-hidden
                    >
                      0{i + 1}
                    </span>

                    <div className="relative flex items-center justify-between">
                      <span className="font-mono text-[11px] font-bold text-ink-muted">
                        0{i + 1}
                      </span>
                      <span className="relative flex h-9 w-9 items-center justify-center">
                        <span
                          className="emfi-icon-pulse absolute inset-0 rounded-full bg-brand/30"
                          style={{ animationDelay: `${i * 0.4}s` }}
                          aria-hidden
                        />
                        <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-brand text-ink-inverse shadow-sm">
                          <Icon size={16} />
                        </span>
                      </span>
                    </div>
                    <h3 className="relative mt-6 text-2xl font-bold">{title}</h3>
                    <p className="relative mt-4 flex-1 font-medium leading-7 text-ink-secondary">
                      {body}
                    </p>
                    <Link
                      href={href}
                      className="group relative mt-10 inline-flex items-center text-[12px] font-bold tracking-wide text-brand hover:underline"
                    >
                      {home.servicesCta}
                      <ArrowRight
                        size={14}
                        className="ml-2 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                      />
                    </Link>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-subtle">
        <Container className="py-12 md:py-16">
          <FadeIn>
            <Eyebrow>{home.demoEyebrow}</Eyebrow>
            <h2 className="max-w-3xl text-4xl font-extrabold tracking-[-0.035em] text-ink md:text-5xl">
              {home.demoTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-lg font-medium leading-8 text-ink-secondary">
              {home.demoBody}
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {home.demos.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.06}>
                <Link
                  href={item.href}
                  className="block rounded-lg border border-line bg-page p-6 emfi-card-lift hover:bg-card"
                >
                  <p className="font-mono text-[10px] font-bold tracking-[0.14em] text-brand">
                    {item.label}
                  </p>
                  <h3 className="mt-4 text-lg font-bold text-ink">{item.title}</h3>
                  <span className="mt-6 inline-flex items-center text-[12px] font-bold text-ink">
                    Open <ArrowRight size={13} className="ml-2" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12 md:py-16">
          <FadeIn>
            <Eyebrow>{home.whyEyebrow}</Eyebrow>
            <h2 className="max-w-3xl text-4xl font-extrabold tracking-[-0.035em] text-ink md:text-5xl">
              {home.whyTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-lg font-medium leading-8 text-ink-secondary">
              {home.whyBody}
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {home.why.map(([title, body], i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <Card>
                  <h3 className="text-2xl font-bold text-ink">{title}</h3>
                  <p className="mt-4 text-sm font-medium leading-7 text-ink-secondary">
                    {body}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/why-emfi" variant="outline">
              {home.whyCta}
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-subtle">
        <Container className="py-12 md:py-16">
          <FadeIn>
            <Eyebrow>{home.voiceEyebrow}</Eyebrow>
            <h2 className="max-w-3xl text-4xl font-extrabold tracking-[-0.035em] text-ink md:text-5xl">
              {home.voiceTitle}
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {home.quotes.map((quote, i) => (
              <FadeIn key={quote.name} delay={i * 0.08}>
                <article className="flex h-full flex-col rounded-xl border border-line bg-page p-7 md:p-8 emfi-card-lift">
                  <p className="font-mono text-[10px] font-bold tracking-[0.14em] text-brand">
                    {quote.lens}
                  </p>
                  <p className="mt-5 flex-1 text-xl font-medium leading-8 tracking-[-0.02em] text-ink">
                    {quote.text}
                  </p>
                  <p className="mt-6 text-sm font-bold text-ink">{quote.name}</p>
                  <p className="mt-1 font-mono text-[11px] text-ink-muted">
                    {quote.firm}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12 md:py-16">
          <FadeIn>
            <Eyebrow>{home.trustEyebrow}</Eyebrow>
            <h2 className="max-w-3xl text-4xl font-extrabold tracking-[-0.035em] text-ink md:text-5xl">
              {home.trustTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-lg font-medium leading-8 text-ink-secondary">
              {home.trustBody}
            </p>
          </FadeIn>
          <div className="mt-8 flex flex-wrap gap-3">
            {home.trustSignals.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-subtle px-5 py-3 font-mono text-[12px] font-bold tracking-[0.12em] text-ink"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/trust">{home.trustCta}</Button>
          </div>
        </Container>
      </section>

      <GlobalPresence />

      <section className="bg-subtle">
        <Container className="py-12 md:py-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <FadeIn>
              <Eyebrow>{home.anniversaryEyebrow}</Eyebrow>
              <h2 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-[-0.035em] text-ink md:text-6xl">
                {home.anniversaryTitle}
              </h2>
            </FadeIn>
            <div className="h-fit rounded-lg border-2 border-brand bg-page p-5 font-mono text-xl font-bold text-brand">
              {home.anniversaryBadge}
              <br />
              <span className="text-sm font-bold">{home.anniversaryBadgeSub}</span>
            </div>
          </div>
          <div className="relative mt-10 md:mt-12">
            <span
              aria-hidden
              className="pointer-events-none absolute bottom-2 left-2 top-2 w-0.5 bg-brand md:bottom-auto md:left-[8px] md:right-[8px] md:top-2 md:h-0.5 md:w-auto"
            />
            <div className="grid gap-8 md:grid-cols-7 md:gap-4">
              {home.milestones.map(([year, title, desc], i) => (
                <FadeIn
                  key={`${year}-${title}`}
                  delay={i * 0.05}
                  className="relative pl-8 md:min-h-[220px] md:pl-0"
                >
                  <span className="absolute left-0 top-0 z-10 block h-4 w-4 rounded-sm bg-brand ring-[6px] ring-subtle md:relative md:mb-5" />
                  <p className="font-mono text-xs font-bold text-brand">{year}</p>
                  <h3 className="mt-3 text-sm font-bold leading-5 text-ink">{title}</h3>
                  <p className="mt-2 text-sm font-medium leading-5 text-ink-secondary">
                    {desc}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand title={home.ctaTitle} body={home.ctaBody} action={home.ctaButton} />
    </>
  );
}
