"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { home } from "@/content/home";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";

const locationMeta: Record<string, { flag: string; timeZone: string; coords: string }> = {
  London: { flag: "🇬🇧", timeZone: "Europe/London", coords: "51.51°N, 0.13°W" },
  Dubai: { flag: "🇦🇪", timeZone: "Asia/Dubai", coords: "25.20°N, 55.27°E" },
  "Cayman Islands": {
    flag: "🇰🇾",
    timeZone: "America/Cayman",
    coords: "19.31°N, 81.25°W",
  },
};

function useLocalTime(timeZone: string) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date()),
      );
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, [timeZone]);

  return time;
}

function LocationCard({
  city,
  detail,
  index,
}: {
  city: string;
  detail: string;
  index: number;
}) {
  const meta = locationMeta[city] ?? {
    flag: "🌍",
    timeZone: "UTC",
    coords: "",
  };
  const time = useLocalTime(meta.timeZone);

  return (
    <FadeIn delay={index * 0.08}>
      <article className="relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-page p-6 emfi-card-lift hover:bg-card md:p-7">
        <span
          className="emfi-bar-grow absolute inset-x-0 top-0 h-[3px] origin-left bg-brand"
          style={{ animationDelay: `${index * 0.12 + 0.15}s` }}
          aria-hidden
        />
        <span
          className="pointer-events-none absolute bottom-1 right-3 select-none text-7xl font-black leading-none text-ink/[0.05]"
          aria-hidden
        >
          0{index + 1}
        </span>

        <div className="relative flex items-center justify-between">
          <span className="font-mono text-[11px] font-bold text-ink-muted">
            0{index + 1}
          </span>
          <span className="relative flex h-12 w-12 items-center justify-center">
            <span
              className="emfi-icon-pulse absolute inset-0 rounded-full bg-brand/30"
              style={{ animationDelay: `${index * 0.4}s` }}
              aria-hidden
            />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-brand text-2xl text-ink-inverse shadow-sm">
              {meta.flag}
            </span>
          </span>
        </div>
        <h3 className="relative mt-6 text-2xl font-bold text-ink">{city}</h3>
        <p className="relative mt-4 flex-1 font-medium leading-7 text-ink-secondary">
          {detail}
        </p>
        <div className="relative mt-8 flex items-center justify-between border-t border-line pt-4">
          <div>
            <p className="font-mono text-lg font-bold tabular-nums text-ink">
              {time || "--:--"}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted">
              Local time
            </p>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-muted/70">
            {meta.coords}
          </p>
        </div>
      </article>
    </FadeIn>
  );
}

export function GlobalPresenceSection() {
  return (
    <section className="relative overflow-hidden bg-subtle">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(var(--border-strong) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 35%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 35%, black 30%, transparent 100%)",
        }}
      />

      <Container className="relative py-16 md:py-24">
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

        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-5">
          {home.globalPresence.locations.map(([city, detail], i) => (
            <LocationCard key={city} city={city} detail={detail} index={i} />
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
