import { Fragment } from "react";
import Link from "next/link";
import { ArrowRight, FileSearch, Scale, ShieldCheck } from "lucide-react";
import { home } from "@/content/home";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";

const evidenceIcons = [Scale, ShieldCheck, FileSearch];

function EvidenceConnector() {
  return (
    <span
      className="ml-[46px] hidden h-4 w-px bg-line-strong/60 md:block"
      aria-hidden
    />
  );
}

export function EvidenceSection() {
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

          <div className="flex flex-col">
            {home.evidence.areas.map(([title, body], i) => {
              const Icon = evidenceIcons[i] ?? Scale;
              return (
                <Fragment key={title}>
                  <FadeIn
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="group relative flex gap-5 rounded-xl border border-line bg-page p-6 transition-colors duration-300 emfi-card-lift hover:border-brand/30">
                      <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-line bg-subtle text-ink transition-colors duration-300 group-hover:border-brand group-hover:text-brand">
                        <Icon size={18} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-mono text-[11px] font-bold text-ink-muted">
                          0{i + 1}
                        </p>
                        <h3 className="mt-1 text-lg font-bold text-ink">
                          {title}
                        </h3>
                        <p className="mt-1.5 text-sm font-medium leading-6 text-ink-secondary">
                          {body}
                        </p>
                      </div>
                      <ArrowRight
                        size={16}
                        aria-hidden
                        className="mt-1 shrink-0 self-start text-brand opacity-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:opacity-100"
                      />
                    </div>
                  </FadeIn>
                  {i < home.evidence.areas.length - 1 ? (
                    <EvidenceConnector />
                  ) : null}
                </Fragment>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
