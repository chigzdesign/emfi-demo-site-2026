import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { home } from "@/content/home";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";

const stats = [
  { value: "10+ Years", label: "Institutional experience" },
  { value: "Multi-Jurisdictional", label: "UK · DIFC · Cayman" },
  { value: "Regulated", label: "Relevant regulated entities" },
] as const;

export function DecadeSectionAlt() {
  return (
    <section className="bg-page">
      <Container className="py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <FadeIn className="md:sticky md:top-28 md:self-start">
            <Eyebrow>{home.decade.eyebrow}</Eyebrow>
            <h2 className="mt-2 text-4xl font-extrabold tracking-[-0.035em] text-ink md:text-5xl">
              {home.decade.title}
            </h2>
            <p className="mt-4 max-w-md text-base font-medium leading-7 text-ink-secondary">
              {home.decade.body}
            </p>
            <div className="mt-8 flex flex-col items-start gap-6">

              <Link
                href={home.decade.ctaHref}
                className="group inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-brand"
              >
                {home.decade.cta}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                />
              </Link>
            </div>
          </FadeIn>

          <div className="flex flex-col divide-y divide-line md:self-start">
            {stats.map(({ value, label }, i) => (
              <FadeIn
                key={value}
                delay={i * 0.1}
                className="flex items-start gap-5 py-7 first:pt-0"
              >
                <span className="mt-1.5 font-mono text-xs font-bold text-brand">
                  0{i + 1}
                </span>
                <div>
                  <p className="text-2xl font-extrabold tracking-[-0.025em] text-ink md:text-[34px]">
                    {value}
                  </p>
                  <p className="mt-2 font-mono text-xs font-bold uppercase tracking-[0.14em] text-ink-muted">
                    {label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
