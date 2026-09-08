import Image from "next/image";
import { about } from "@/content/about";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/cn";

const cardHover =
  "rounded-lg border border-line transition-[translate,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:-translate-y-[3px] group-hover:border-ink/25 group-hover:shadow-[var(--elevation-card-hover)]";

export function ProfessionalStanding() {
  return (
    <section>
      <Container className="py-12 md:py-16">
        <FadeIn>
          <Eyebrow>{about.standingEyebrow}</Eyebrow>
          <h2 className="text-4xl font-bold tracking-[-0.025em] text-ink md:text-5xl">
            {about.standingTitle}
          </h2>
        </FadeIn>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {about.standingMarks.map((item, i) => (
            <FadeIn key={item.name} delay={i * 0.08}>
              <div className="group h-full">
                <article
                  className={`flex h-[8.5rem] items-center justify-center bg-page px-7 ${cardHover}`}
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={item.logoWidth}
                    height={item.logoHeight}
                    className={cn(
                      "h-14 w-auto max-w-[240px] object-contain grayscale transition-[filter,opacity] duration-300 group-hover:grayscale-0",
                      "ink" in item && item.ink
                        ? "opacity-55 group-hover:opacity-100"
                        : undefined,
                    )}
                    unoptimized
                  />
                </article>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
