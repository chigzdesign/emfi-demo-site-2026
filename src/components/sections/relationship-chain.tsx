import Image from "next/image";
import { home } from "@/content/home";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { HeroRotatingText } from "@/components/sections/hero-rotating-text";

function ChainConnector({ delay = 0 }: { delay?: number }) {
  return (
    <span className="relative inline-flex h-4 w-12 items-center md:w-20" aria-hidden>
      <span className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-ink-inverse-muted/30" />
      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink-inverse-muted/70" />
      <span
        className="emfi-chain-pulse absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink-inverse shadow-[0_0_10px_3px_var(--color-blue-100)]"
        style={{ animationDelay: `${delay}s` }}
      />
    </span>
  );
}


export function RelationshipChain() {
  const segments = home.chainTitle.split("→").map((segment) => segment.trim());
  const lead = segments.slice(0, -1);
  const infraWords = home.chainInfra.map((item) => item.name);

  return (
    <section className="relative overflow-hidden bg-inverse">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/globle-img.png"
          alt=""
          fill
          className="emfi-globe-photo object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-inverse via-inverse/55 to-inverse/10" />
      </div>

      <Container className="relative z-10 py-16 md:py-28">
        <FadeIn className="flex flex-col items-center text-center">
          <Eyebrow inverse>{home.chainEyebrow}</Eyebrow>
          <span className="mb-8 h-px w-10 bg-ink-inverse-muted/40" aria-hidden />

          <h2 className="flex flex-wrap items-center justify-center gap-3 text-4xl font-extrabold tracking-[-0.03em] text-ink-inverse md:gap-4 md:text-6xl">
            {lead.map((segment, i) => (
              <span key={segment} className="flex items-center gap-3 md:gap-4">
                {segment}
                <ChainConnector delay={i * 1.1} />
              </span>
            ))}
            <span className="text-ink-inverse-muted">
              <HeroRotatingText words={infraWords} />
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-ink-inverse-muted">
            {home.chainBody}
          </p>

          <div className="mt-8">
            <Button href="/trust" variant="inverse">
              {home.chainCta}
            </Button>
          </div>
        </FadeIn>

        <div className="relative z-10 mt-24 pt-8 md:mt-14 md:pt-10">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
            {home.chainInfra.map((item, i) => (
              <FadeIn
                key={item.name}
                delay={i * 0.06}
                className="flex items-center gap-3"
              >
                <span className="font-mono text-[12px] font-bold uppercase tracking-[0.18em] text-ink-inverse-muted">
                  {item.name}
                </span>
                {i < home.chainInfra.length - 1 ? (
                  <span className="h-4 w-px bg-line-inverse/50" aria-hidden />
                ) : null}
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
