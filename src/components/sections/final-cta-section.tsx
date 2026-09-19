import { home } from "@/content/home";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

export function FinalCtaSection() {
  return (
    <section className="bg-page">
      <Container className="py-12 md:py-20">
        <div
          className="relative overflow-hidden rounded-3xl px-6 py-14 text-center md:px-16 md:py-20"
          style={{ background: "var(--color-blue-500)" }}
        >
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

          <div className="relative z-10">
            <FadeIn>
              <h2 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-[-0.035em] text-ink-inverse md:text-6xl">
                {home.finalCta.title}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-8 text-ink-inverse-muted">
                {home.finalCta.body}
              </p>
            </FadeIn>

            <FadeIn
              delay={0.25}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              <Button
                href={home.finalCta.primaryHref}
                variant="inverse"
                className="bg-[color:var(--color-blue-100)] text-ink hover:bg-[color:var(--color-blue-200)]"
              >
                {home.finalCta.primaryCta}
              </Button>
              <Button href={home.finalCta.secondaryHref} variant="ghost">
                {home.finalCta.secondaryCta}
              </Button>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
