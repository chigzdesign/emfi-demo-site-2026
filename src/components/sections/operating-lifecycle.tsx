"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  BarChart3,
  BookOpen,
  Building2,
  FileText,
  Landmark,
  LineChart,
  RefreshCw,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";

const LIFECYCLE_ICONS: LucideIcon[] = [
  Building2,
  LineChart,
  Landmark,
  Shield,
  RefreshCw,
  BarChart3,
  FileText,
  BookOpen,
];

type LifecycleStep = {
  num: string;
  title: string;
  body: string;
};

export function OperatingLifecycle({
  eyebrow,
  titleLead,
  titleAccent,
  body,
  hint,
  steps,
}: {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  body: string;
  hint: string;
  steps: readonly LifecycleStep[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxX, setMaxX] = useState(0);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      const viewport = viewportRef.current;
      if (!track || !viewport) return;
      setMaxX(Math.max(0, track.scrollWidth - viewport.clientWidth));
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (trackRef.current) observer.observe(trackRef.current);
    if (viewportRef.current) observer.observe(viewportRef.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [steps.length]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const index = Math.min(
      steps.length - 1,
      Math.max(0, Math.floor(value * steps.length)),
    );
    setActive(index);
  });

  if (reduced) {
    return (
      <section id="operating-model" className="scroll-mt-24 border-y border-line">
        <Container className="py-12 md:py-16">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-[-0.03em] text-ink md:text-6xl">
            <span className="block">{titleLead}</span>
            <span className="mt-1 block text-brand">{titleAccent}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-ink-secondary">
            {body}
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = LIFECYCLE_ICONS[i] ?? Building2;
              return (
                <article key={step.num}>
                  <div className="flex h-12 w-12 items-center justify-center border border-brand bg-inverse text-ink-inverse">
                    <Icon size={20} strokeWidth={1.5} aria-hidden />
                  </div>
                  <p className="mt-5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-brand">
                    {step.num}
                  </p>
                  <h3 className="mt-2 text-base font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-ink-secondary">
                    {step.body}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      id="operating-model"
      ref={sectionRef}
      className="relative scroll-mt-24 h-[340vh] border-y border-line bg-page"
    >
      <div className="sticky top-[72px] flex h-[calc(100vh-72px)] items-center overflow-hidden">
        <Container className="w-full py-8">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-[-0.03em] text-ink md:text-6xl">
            <span className="block">{titleLead}</span>
            <span className="mt-1 block text-brand">{titleAccent}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-ink-secondary">
            {body}
          </p>

          <div ref={viewportRef} className="relative mt-12 overflow-hidden">
            <div className="absolute left-0 right-0 top-[27px] h-px bg-line" />
            <motion.div
              className="absolute left-0 top-[26.5px] h-0.5 origin-left bg-brand"
              style={{ width: progressWidth }}
            />
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex w-max gap-10 pt-8 md:gap-14"
            >
              {steps.map((step, i) => {
                const Icon = LIFECYCLE_ICONS[i] ?? Building2;
                const isActive = i === active;
                return (
                  <article
                    key={step.num}
                    className="w-[190px] shrink-0 md:w-[220px]"
                  >
                    <div
                      className={cn(
                        "flex h-[54px] w-[54px] items-center justify-center border transition-colors duration-300",
                        isActive
                          ? "border-brand bg-inverse text-ink-inverse"
                          : "border-line bg-subtle text-ink-muted",
                      )}
                    >
                      <Icon size={22} strokeWidth={1.5} aria-hidden />
                    </div>
                    <p
                      className={cn(
                        "mt-5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] transition-colors duration-300",
                        isActive ? "text-brand" : "text-ink-muted",
                      )}
                    >
                      {step.num}
                    </p>
                    <h3
                      className={cn(
                        "mt-2 text-base font-bold transition-colors duration-300",
                        isActive ? "text-ink" : "text-ink-secondary",
                      )}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-2 text-sm font-medium leading-6 transition-colors duration-300",
                        isActive ? "text-ink-secondary" : "text-ink-muted",
                      )}
                    >
                      {step.body}
                    </p>
                  </article>
                );
              })}
            </motion.div>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-line pt-4">
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-ink-muted">
              {hint}
            </p>
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-brand">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(steps.length).padStart(2, "0")}
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
