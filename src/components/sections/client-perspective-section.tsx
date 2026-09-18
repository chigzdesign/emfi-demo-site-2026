"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { home } from "@/content/home";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function ClientPerspectiveSection() {
  const [active, setActive] = useState(0);
  const quote = home.quotes[active];
  const descriptor = home.clientPerspective.descriptors[quote.firm] ?? quote.lens;

  return (
    <section className="bg-page">
      <Container className="py-16 md:py-24">
        <FadeIn className="max-w-2xl">
          <Eyebrow className="flex items-center gap-2">
            {home.clientPerspective.eyebrow}
            <span className="h-px w-6 bg-line-strong" aria-hidden />
          </Eyebrow>
          <h2 className="text-4xl font-extrabold tracking-[-0.035em] text-ink md:text-5xl">
            {home.clientPerspective.title}
          </h2>
          <p className="mt-4 text-lg font-medium leading-8 text-ink-secondary">
            {home.clientPerspective.body}
          </p>
        </FadeIn>

        <FadeIn
          delay={0.15}
          className="relative mt-14 overflow-hidden rounded-2xl border border-line bg-subtle p-8 md:p-14"
        >
          <motion.span
            aria-hidden
            initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute -right-4 -top-6 text-line-strong/40 md:-top-8"
          >
            <Quote size={96} strokeWidth={1.5} />
          </motion.span>

          <AnimatePresence mode="wait">
            <motion.div
              key={quote.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
                {descriptor}
              </p>
              <p className="mt-6 max-w-3xl text-2xl font-medium leading-[1.5] tracking-[-0.01em] text-ink md:text-3xl">
                &ldquo;{quote.text}&rdquo;
              </p>
              <p className="mt-8 text-sm font-bold text-ink">{quote.name}</p>
              <p className="mt-1 font-mono text-[11px] text-ink-muted">
                {quote.firm}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="relative mt-10 flex flex-wrap items-center gap-3 border-t border-line pt-8">
            {home.quotes.map((q, i) => {
              const isActive = i === active;
              return (
                <button
                  key={q.name}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className="relative flex items-center gap-3 rounded-full border border-line bg-page px-3 py-2 text-left transition-colors duration-300 hover:bg-card"
                >
                  {isActive ? (
                    <motion.span
                      layoutId="client-perspective-active-tab"
                      className="absolute inset-0 rounded-full border-2 border-brand bg-brand-soft"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  <span
                    className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors duration-300 ${
                      isActive
                        ? "bg-brand text-ink-inverse"
                        : "bg-subtle text-ink"
                    }`}
                  >
                    {initials(q.name)}
                  </span>
                  <span className="relative z-10 pr-1">
                    <span className="block text-xs font-bold text-ink">
                      {q.name}
                    </span>
                    <span className="block font-mono text-[10px] text-ink-muted">
                      {q.firm}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-8">
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
