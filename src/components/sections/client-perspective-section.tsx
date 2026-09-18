import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { home } from "@/content/home";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";

export function ClientPerspectiveSection() {
  return (
    <section className="bg-page">
      <Container className="py-16 md:py-24">
        <FadeIn>
          <Eyebrow className="flex items-center gap-2">
            {home.clientPerspective.eyebrow}
            <span className="h-px w-6 bg-line-strong" aria-hidden />
          </Eyebrow>
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-[-0.035em] text-ink md:text-5xl">
            {home.clientPerspective.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg font-medium leading-8 text-ink-secondary">
            {home.clientPerspective.body}
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {home.quotes.map((quote, i) => (
            <FadeIn key={quote.name} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-xl border border-line bg-card p-7 md:p-8 emfi-card-lift">
                <p className="font-mono text-[10px] font-bold uppercase leading-[1.5] tracking-[0.1em] text-brand">
                  {home.clientPerspective.descriptors[quote.firm] ?? quote.lens}
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

        <FadeIn delay={0.3} className="mt-10">
          <Link
            href={home.clientPerspective.ctaHref}
            className="group inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-brand"
          >
            {home.clientPerspective.cta}
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
