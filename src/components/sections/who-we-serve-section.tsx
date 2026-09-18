"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Briefcase, Landmark, Users } from "lucide-react";
import { home } from "@/content/home";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";

const segmentIcons = [Landmark, Briefcase, Users];

const cardThemes = [
  {
    card: "bg-brand-soft",
    text: "text-ink",
    textMuted: "text-ink/60",
    icon: "bg-page text-ink",
    pill: "bg-ink text-ink-inverse",
  },
  {
    card: "bg-ink",
    text: "text-ink-inverse",
    textMuted: "text-ink-inverse-muted",
    icon: "bg-ink-inverse/10 text-ink-inverse",
    pill: "bg-brand-soft text-ink",
  },
  {
    card: "bg-brand-soft",
    text: "text-ink",
    textMuted: "text-ink/60",
    icon: "bg-page text-ink",
    pill: "bg-ink text-ink-inverse",
  },
];

export function WhoWeServeSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 300) + 16;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  return (
    <section className="bg-page">
      <Container className="py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
          <FadeIn>
            <Eyebrow className="flex items-center gap-2">
              {home.whoWeServe.eyebrow}
              <span className="h-px w-6 bg-line-strong" aria-hidden />
            </Eyebrow>
            <h2 className="text-4xl font-extrabold tracking-[-0.035em] text-ink md:text-5xl">
              {home.whoWeServe.title}
            </h2>
            <p className="mt-4 max-w-sm text-base font-medium leading-7 text-ink-secondary">
              {home.whoWeServe.body}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => scrollByCard(-1)}
                disabled={atStart}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-subtle text-ink-muted transition-colors disabled:cursor-default disabled:opacity-40"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => scrollByCard(1)}
                disabled={atEnd}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-ink-inverse transition-opacity disabled:cursor-default disabled:opacity-40"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </FadeIn>

          <div
            ref={scrollerRef}
            onScroll={handleScroll}
            className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-2 [scrollbar-width:none] md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {home.whoWeServe.segments.map(([title, body, cta, href], i) => {
              const Icon = segmentIcons[i] ?? Landmark;
              const theme = cardThemes[i % cardThemes.length];
              return (
                <FadeIn
                  key={title}
                  delay={i * 0.08}
                  data-card
                  className={`flex w-[270px] shrink-0 snap-start flex-col justify-between rounded-2xl p-7 md:w-[300px] ${theme.card}`}
                >
                  <div>
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-full ${theme.icon}`}
                    >
                      <Icon size={22} />
                    </span>
                    <p
                      className={`mt-6 font-mono text-[11px] font-bold uppercase tracking-[0.14em] ${theme.textMuted}`}
                    >
                      {home.whoWeServe.eyebrow}
                    </p>
                    <h3 className={`mt-2 text-lg font-bold ${theme.text}`}>
                      {title}
                    </h3>
                    <p className={`mt-3 text-sm font-medium leading-6 ${theme.textMuted}`}>
                      {body}
                    </p>
                  </div>
                  <Link
                    href={href}
                    className={`mt-8 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-bold ${theme.pill}`}
                  >
                    {cta}
                    <ArrowRight size={13} />
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
