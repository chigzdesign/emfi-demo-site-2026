import { home } from "@/content/home";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";

export function GlobalPresence() {
  return (
    <section>
      <Container className="py-12 md:py-16">
        <FadeIn>
          <Eyebrow>{home.presenceEyebrow}</Eyebrow>
          <h2 className="text-4xl font-bold tracking-[-0.035em] text-ink md:text-5xl">
            {home.presenceTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-lg font-medium leading-8 text-ink-secondary">
            {home.presenceBody}
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {home.locations.map(([city, entity, detail], i) => (
            <FadeIn key={city} delay={i * 0.08}>
              <article className="rounded-lg border border-line bg-card p-7 emfi-card-lift">
                <p className="font-mono text-[11px] font-bold tracking-[0.16em] text-brand">
                  0{i + 1}
                </p>
                <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.03em] text-ink">
                  {city}
                </h3>
                <p className="mt-2 text-sm font-semibold text-ink">{entity}</p>
                <p className="mt-3 text-sm leading-6 text-ink-secondary">{detail}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
