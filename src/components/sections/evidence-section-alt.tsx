import Link from "next/link";
import { ArrowRight, FileSearch, Scale, ShieldCheck } from "lucide-react";
import { home } from "@/content/home";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";

const evidenceIcons = [Scale, ShieldCheck, FileSearch];

export function EvidenceSectionAlt() {
  return (
    <section className="border-t border-ink/15 bg-subtle">
      <Container className="py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <FadeIn className="md:sticky md:top-28 md:self-start">
            <Eyebrow className="flex items-center gap-2">
              {home.evidence.eyebrow}
              <span className="h-px w-6 bg-line-strong" aria-hidden />
            </Eyebrow>
            <h2 className="text-4xl font-extrabold tracking-[-0.035em] text-ink md:text-5xl">
              {home.evidence.title}
            </h2>
            <p className="mt-4 max-w-md text-base font-medium leading-7 text-ink-secondary">
              {home.evidence.body}
            </p>
            <div className="mt-8">
              <Link
                href={home.evidence.ctaHref}
                className="group inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-brand"
              >
                {home.evidence.cta}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                />
              </Link>
            </div>
          </FadeIn>

          <div className="relative">
            <span
              className="absolute left-6 top-6 bottom-6 w-px bg-line-strong"
              aria-hidden
            />
            <div className="flex flex-col gap-10">
              {home.evidence.areas.map(([title, body], i) => {
                const Icon = evidenceIcons[i] ?? Scale;
                return (
                  <FadeIn
                    key={title}
                    delay={i * 0.12}
                    className="group relative flex gap-6"
                  >
                    <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-line bg-page font-mono text-sm font-bold text-ink transition-colors duration-300 group-hover:border-brand group-hover:text-brand">
                      0{i + 1}
                    </span>
                    <div className="pt-1.5">
                      <div className="flex items-center gap-2 text-brand">
                        <Icon size={15} />
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink-muted">
                          Evidence
                        </span>
                      </div>
                      <h3 className="mt-2 text-xl font-bold text-ink">
                        {title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm font-medium leading-6 text-ink-secondary">
                        {body}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
