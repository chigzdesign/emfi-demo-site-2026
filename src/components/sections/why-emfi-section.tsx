import Link from "next/link";
import { ArrowRight, Compass, MessageCircle, ShieldCheck } from "lucide-react";
import { home } from "@/content/home";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";

const whyIcons = [Compass, MessageCircle, ShieldCheck];

export function WhyEmfiSection() {
  return (
    <section className="bg-page">
      <Container className="py-12 md:py-20">
        <FadeIn className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow className="flex items-center gap-2">
              {home.whyEmfi.eyebrow}
              <span className="h-px w-6 bg-line-strong" aria-hidden />
            </Eyebrow>
            <h2 className="text-4xl font-extrabold tracking-[-0.035em] text-ink md:text-5xl">
              {home.whyEmfi.title}
            </h2>
            <p className="mt-4 max-w-xl text-base font-medium leading-7 text-ink-secondary">
              {home.whyEmfi.body}
            </p>
          </div>
          <Link
            href="/why-emfi"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-ink hover:text-brand"
          >
            {home.whyEmfi.cta}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
            />
          </Link>
        </FadeIn>

        <div className="mt-12 border-t border-line md:mt-16">
          {home.whyEmfi.areas.map(([title, body], i) => {
            const Icon = whyIcons[i] ?? Compass;
            return (
              <FadeIn
                key={title}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="group grid items-center gap-4 border-b border-line py-8 md:grid-cols-[64px_1fr_1.2fr_28px] md:gap-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 group-hover:border-brand group-hover:text-brand">
                    <Icon size={20} />
                  </span>
                  <h3 className="text-2xl font-bold text-ink transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 md:text-[26px]">
                    {title}
                  </h3>
                  <p className="text-[15px] font-medium leading-7 text-ink-secondary">
                    {body}
                  </p>
                  <ArrowRight
                    size={18}
                    aria-hidden
                    className="hidden text-brand opacity-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:opacity-100 md:block"
                  />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
