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
    <FadeIn
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative p-8 transition-colors duration-300 hover:bg-subtle md:p-9 ${
        index > 0 ? "border-t border-line md:border-l md:border-t-0" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-subtle text-2xl shadow-sm transition-transform duration-300 group-hover:scale-105">
          {meta.flag}
        </span>
        <div className="text-right">
          <p className="font-mono text-lg font-bold tabular-nums text-ink">
            {time || "--:--"}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted">
            Local time
          </p>
        </div>
      </div>
      <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.03em] text-ink">
        {city}
      </h3>
      <p className="mt-3 text-sm leading-6 text-ink-secondary">{detail}</p>
      <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-muted/70">
        {meta.coords}
      </p>
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

        <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-page shadow-sm">
          <div className="grid md:grid-cols-3">
            {home.globalPresence.locations.map(([city, detail], i) => (
              <LocationCard key={city} city={city} detail={detail} index={i} />
            ))}
          </div>
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
