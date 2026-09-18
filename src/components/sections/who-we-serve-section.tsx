import Link from "next/link";
import { ArrowRight, Briefcase, Landmark, Users } from "lucide-react";
import { home } from "@/content/home";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";

const segmentIcons = [Landmark, Briefcase, Users];

export function WhoWeServeSection() {
  return (
    <section className="bg-page">
      <Container className="py-16 md:py-24">
        <FadeIn>
          <Eyebrow className="flex items-center gap-2">
            {home.whoWeServe.eyebrow}
            <span className="h-px w-6 bg-line-strong" aria-hidden />
          </Eyebrow>
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-[-0.035em] text-ink md:text-5xl">
            {home.whoWeServe.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg font-medium leading-8 text-ink-secondary">
            {home.whoWeServe.body}
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {home.whoWeServe.segments.map(([title, body, cta, href], i) => {
            const Icon = segmentIcons[i] ?? Landmark;
            return (
              <FadeIn key={title} delay={i * 0.08}>
                <article className="relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-page p-6 emfi-card-lift md:p-7">
                  <span
                    className="emfi-bar-grow absolute inset-x-0 top-0 h-[3px] origin-left bg-brand"
                    style={{ animationDelay: `${i * 0.12 + 0.15}s` }}
                    aria-hidden
                  />
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
                  <h3 className="relative mt-6 text-xl font-bold text-ink">
                    {title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-sm font-medium leading-6 text-ink-secondary">
                    {body}
                  </p>
                  <Link
                    href={href}
                    className="group relative mt-8 inline-flex items-center text-[12px] font-bold tracking-wide text-brand hover:underline"
                  >
                    {cta}
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

        <FadeIn delay={0.3} className="mt-10">
          <Link
            href={home.whoWeServe.ctaHref}
            className="group inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-brand"
          >
            {home.whoWeServe.cta}
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
