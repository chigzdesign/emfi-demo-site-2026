"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { home } from "@/content/home";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";

export function DecadeSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.3,
  });

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
              <div className="relative inline-flex flex-col gap-1.5 overflow-hidden rounded-xl border border-line bg-page px-6 py-5 shadow-sm">
                <span
                  className="absolute inset-y-0 left-0 w-1 bg-brand"
                  aria-hidden
                />
                <span className="font-mono text-xl font-extrabold tracking-tight text-ink">
                  {home.decade.badge}
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-ink-muted">
                  {home.decade.badgeSub}
                </span>
              </div>
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

          <div ref={timelineRef} className="relative">
            <span
              className="absolute left-0 top-1 bottom-1 w-[2px] bg-line-strong"
              aria-hidden
            />
            <motion.span
              className="absolute left-0 top-1 w-[2px] origin-top bg-brand"
              style={{ scaleY: progress, height: "calc(100% - 0.5rem)" }}
              aria-hidden
            />

            <div className="flex flex-col gap-10 pl-10 md:pl-12">
              {home.decade.milestones.map(([year, title, desc], i) => (
                <FadeIn
                  key={`${year}-${title}`}
                  delay={i * 0.05}
                  className="relative"
                >
                  <span
                    className="absolute -left-10 top-2 h-px w-10 bg-line-strong md:-left-12"
                    aria-hidden
                  />
                  <span
                    className="absolute -left-10 top-2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-line-strong bg-page md:-left-12"
                    aria-hidden
                  />
                  <motion.span
                    className="absolute -left-10 top-2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand md:-left-12"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    aria-hidden
                  />
                  <p className="font-mono text-xs font-bold text-brand">
                    {year}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-1.5 max-w-md text-sm font-medium leading-6 text-ink-secondary">
                    {desc}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
