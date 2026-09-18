import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { home } from "@/content/home";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";

export function DecadeSection() {
  return (
    <section className="bg-subtle">
      <Container className="py-16 md:py-24">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <FadeIn className="max-w-2xl">
            <Eyebrow>{home.decade.eyebrow}</Eyebrow>
            <h2 className="mt-2 text-4xl font-extrabold tracking-[-0.035em] text-ink md:text-5xl">
              {home.decade.title}
            </h2>
            <p className="mt-4 text-lg font-medium leading-8 text-ink-secondary">
              {home.decade.body}
            </p>
          </FadeIn>
          <FadeIn
            delay={0.1}
            className="h-fit shrink-0 rounded-lg border-2 border-brand bg-page p-5 font-mono text-xl font-bold text-brand"
          >
            {home.decade.badge}
            <br />
            <span className="text-sm font-bold">{home.decade.badgeSub}</span>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:mt-16 md:grid-cols-4">
          {home.decade.milestones.map(([year, title, desc], i) => (
            <FadeIn
              key={`${year}-${title}`}
              delay={i * 0.05}
              className="relative border-l-2 border-line pl-5"
            >
              <span
                className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-brand"
                aria-hidden
              />
              <p className="font-mono text-xs font-bold text-brand">{year}</p>
              <h3 className="mt-2 text-sm font-bold leading-5 text-ink">
                {title}
              </h3>
              <p className="mt-1.5 text-sm font-medium leading-5 text-ink-secondary">
                {desc}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-10">
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
        </FadeIn>
      </Container>
    </section>
  );
}
