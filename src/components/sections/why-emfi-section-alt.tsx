import Link from "next/link";
import { ArrowRight, Compass, MessageCircle, ShieldCheck } from "lucide-react";
import { home } from "@/content/home";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";

const whyIcons = [Compass, MessageCircle, ShieldCheck];

export function WhyEmfiSectionAlt() {
  return (
    <section className="relative overflow-hidden bg-inverse">
      <span
        aria-hidden
        className="emfi-cta-band-glow pointer-events-none absolute left-[-10%] top-[15%] h-[380px] w-[380px] rounded-full opacity-0 blur-[100px] md:h-[560px] md:w-[560px]"
        style={{ background: "var(--color-blue-100)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-[30%] right-[-10%] h-[360px] w-[360px] rounded-full opacity-10 blur-[110px]"
        style={{ background: "var(--color-blue-50)" }}
      />
      <span
        aria-hidden
        className="emfi-cta-band-glow pointer-events-none absolute right-[-15%] top-[-10%] h-[320px] w-[320px] rounded-full opacity-0 blur-[100px] md:h-[440px] md:w-[440px]"
        style={{ background: "var(--color-blue-200)", animationDelay: "-4s" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -top-[20%] left-[30%] h-[300px] w-[300px] rounded-full opacity-[0.06] blur-[120px]"
        style={{ background: "var(--color-blue-50)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-[-15%] left-[10%] h-[260px] w-[260px] rounded-full opacity-10 blur-[100px]"
        style={{ background: "var(--color-blue-100)" }}
      />

      <Container className="relative py-16 md:py-24">
        <FadeIn className="max-w-2xl">
          <Eyebrow inverse className="flex items-center gap-2">
            {home.whyEmfi.eyebrow}
            <span className="h-px w-6 bg-ink-inverse-muted/40" aria-hidden />
          </Eyebrow>
          <h2 className="text-4xl font-extrabold tracking-[-0.035em] text-ink-inverse md:text-5xl">
            {home.whyEmfi.title}
          </h2>
          <p className="mt-4 max-w-xl text-base font-medium leading-7 text-ink-inverse-muted">
            {home.whyEmfi.body}
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3">
          {home.whyEmfi.areas.map(([title, body], i) => {
            const Icon = whyIcons[i] ?? Compass;
            return (
              <FadeIn
                key={title}
                delay={i * 0.1}
                className="group relative overflow-hidden rounded-2xl border border-ink-inverse/10 bg-ink-inverse/[0.04] p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-ink-inverse/[0.08]"
              >
                <span
                  className="emfi-bar-grow absolute inset-x-0 top-0 h-[3px] origin-left"
                  style={{
                    background: "var(--color-blue-100)",
                    animationDelay: `${i * 0.12 + 0.15}s`,
                  }}
                  aria-hidden
                />
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ink-inverse/10 text-ink-inverse transition-colors duration-300 group-hover:bg-[color:var(--color-blue-100)] group-hover:text-ink">
                  <Icon size={28} />
                </span>
                <h3 className="mt-8 text-xl font-bold text-ink-inverse">
                  {title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-6 text-ink-inverse-muted">
                  {body}
                </p>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.3} className="mt-10">
          <Link
            href="/why-emfi"
            className="group inline-flex items-center gap-2 text-sm font-bold text-ink-inverse hover:text-brand"
          >
            {home.whyEmfi.cta}
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
