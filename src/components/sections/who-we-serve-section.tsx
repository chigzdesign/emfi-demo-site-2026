import Link from "next/link";
import { ArrowRight, Briefcase, Landmark, Users } from "lucide-react";
import { home } from "@/content/home";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";

const segmentIcons = [Landmark, Briefcase, Users];

export function WhoWeServeSection() {
  return (
    <section className="bg-page">
      <Container className="py-12 md:py-28">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-5">
          <FadeIn className="flex flex-col justify-center">
            <Eyebrow className="flex items-center gap-2">
              {home.whoWeServe.eyebrow}
              <span className="h-px w-6 bg-line-strong" aria-hidden />
            </Eyebrow>
            <h2 className="text-4xl font-extrabold tracking-[-0.035em] text-ink md:text-5xl">
              {home.whoWeServe.title}
            </h2>
            <p className="mt-4 text-lg font-medium text-ink-secondary">
              {home.whoWeServe.body}
            </p>
            <div className="mt-6">
              <Button href={home.whoWeServe.ctaHref} variant="outline">
                {home.whoWeServe.cta}
              </Button>
            </div>
          </FadeIn>

          {home.whoWeServe.segments.map(([title, body, cta, href], i) => {
            const Icon = segmentIcons[i] ?? Landmark;
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
      </Container>
    </section>
  );
}
