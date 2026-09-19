import Link from "next/link";
import { ArrowRight, BarChart3, PieChart, ShieldCheck } from "lucide-react";
import { home } from "@/content/home";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn, FadeInOnLoad } from "@/components/motion/fade-in";
import { HeroInfrastructureGraphic } from "@/components/sections/hero-infrastructure-graphic";
import { RelationshipChain } from "@/components/sections/relationship-chain";
import { HeroAtmosphere2 } from "@/components/sections/hero-atmosphere2";
import { PlatformSection } from "@/components/sections/platform-section";
import { WhyEmfiSection } from "@/components/sections/why-emfi-section";
import { EvidenceSection } from "@/components/sections/evidence-section";
import { WhoWeServeSection } from "@/components/sections/who-we-serve-section";
import { DecadeSection } from "@/components/sections/decade-section";
import { ClientPerspectiveSection } from "@/components/sections/client-perspective-section";
import { GlobalPresenceSection } from "@/components/sections/global-presence-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";

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
              <HeroInfrastructureGraphic />
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



      <WhyEmfiSection />

      <EvidenceSection />

      <WhoWeServeSection />
      <PlatformSection />
      <DecadeSection />


      <GlobalPresenceSection />

      <FinalCtaSection />
    </>
  );
}
