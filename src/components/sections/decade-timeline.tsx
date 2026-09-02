"use client";

import { home } from "@/content/home";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";

export function DecadeTimeline() {
  return (
    <section className="border-y border-line bg-page">
      <Container className="py-12 md:py-16">
        <FadeIn>
          <Eyebrow>{home.anniversaryEyebrow}</Eyebrow>
          <h2 className="max-w-2xl text-4xl font-bold tracking-[-0.035em] text-ink md:text-5xl">
            {home.anniversaryTitle}
          </h2>
        </FadeIn>

        <div className="mt-8 overflow-x-auto">
          <ol className="relative flex min-w-[720px] justify-between gap-4 pt-2">
            <span
              aria-hidden
              className="absolute left-3 right-3 top-[19px] h-px bg-line-strong"
            />
            {home.timeline.map(([year, label], i) => {
              const last = i === home.timeline.length - 1;
              return (
                <li key={year} className="relative z-10 flex flex-1 flex-col items-center text-center">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ring-4 ring-subtle ${
                      last ? "bg-brand" : "bg-brand-focus"
                    }`}
                  />
                  <span
                    className={`mt-4 font-mono text-[11px] tracking-[0.14em] ${
                      last ? "font-semibold text-brand" : "text-ink-muted"
                    }`}
                  >
                    {year}
                  </span>
                  <span
                    className={`mt-2 max-w-[110px] text-sm leading-5 ${
                      last ? "font-semibold text-ink" : "text-ink-secondary"
                    }`}
                  >
                    {label}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
