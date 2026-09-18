import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { home } from "@/content/home";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";

export function GlobalPresenceSection() {
  return (
    <section className="bg-subtle">
      <Container className="py-16 md:py-24">
        <FadeIn>
          <Eyebrow className="flex items-center gap-2">
            {home.globalPresence.eyebrow}
            <span className="h-px w-6 bg-line-strong" aria-hidden />
          </Eyebrow>
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-[-0.035em] text-ink md:text-5xl">
            {home.globalPresence.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg font-medium leading-8 text-ink-secondary">
            {home.globalPresence.body}
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {home.globalPresence.locations.map(([city, detail], i) => (
            <FadeIn key={city} delay={i * 0.08}>
              <article className="rounded-lg border border-line bg-page p-7 emfi-card-lift">
                <p className="font-mono text-[11px] font-bold tracking-[0.16em] text-brand">
                  0{i + 1}
                </p>
                <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.03em] text-ink">
                  {city}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink-secondary">
                  {detail}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-10">
          <Link
            href={home.globalPresence.ctaHref}
            className="group inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-brand"
          >
            {home.globalPresence.cta}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
            />
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
