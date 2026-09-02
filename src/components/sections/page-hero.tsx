import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";
import { HeroAtmosphere } from "@/components/sections/hero-atmosphere";
import { HeroRotatingText } from "@/components/sections/hero-rotating-text";
import { cn } from "@/lib/cn";

function splitHeroTitle(titleLines: string[], hasAnimation: boolean) {
  if (hasAnimation) {
    return {
      boldLines: titleLines.slice(0, -1),
      lightLine: null as string | null,
      animatedLine: titleLines[titleLines.length - 1] ?? null,
    };
  }

  if (titleLines.length >= 2) {
    return {
      boldLines: titleLines.slice(0, -1),
      lightLine: titleLines[titleLines.length - 1] ?? null,
      animatedLine: null as string | null,
    };
  }

  const line = titleLines[0] ?? "";
  const sentences = line.split(/(?<=\.)\s+/).filter(Boolean);
  if (sentences.length >= 2) {
    return {
      boldLines: [sentences.slice(0, -1).join(" ")],
      lightLine: sentences[sentences.length - 1] ?? null,
      animatedLine: null as string | null,
    };
  }

  return {
    boldLines: titleLines,
    lightLine: null as string | null,
    animatedLine: null as string | null,
  };
}

export function PageHero({
  eyebrow,
  title,
  body,
  lead,
  children,
  className,
  rotatingWords,
  titlePrefix,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  lead?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  /** Typing words shown in brand weight, same pattern as the home hero */
  rotatingWords?: readonly string[];
  /** Optional static text on the same line before the animated word */
  titlePrefix?: string;
}) {
  const titleLines = title.split("\n").filter(Boolean);
  const hasAnimation = Boolean(rotatingWords && rotatingWords.length > 0);
  const { boldLines, lightLine, animatedLine } = splitHeroTitle(titleLines, hasAnimation);

  return (
    <section className={cn("relative overflow-hidden border-b border-line bg-page", className)}>
      <HeroAtmosphere compact />
      <Container className="relative py-12 lg:py-16">
        <FadeIn>
          {lead}
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="max-w-5xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-ink md:text-6xl lg:text-7xl">
            {boldLines.map((line) => (
              <span key={line} className="mt-1 block first:mt-0">
                {line}
              </span>
            ))}
            {lightLine ? (
              <span
                className={cn(
                  "block font-light tracking-[-0.03em] text-brand",
                  boldLines.length && "mt-1",
                )}
              >
                {lightLine}
              </span>
            ) : null}
            {hasAnimation ? (
              <span className={cn("block", (boldLines.length || lightLine) && "mt-1")}>
                {titlePrefix ? <span>{titlePrefix}{" "}</span> : null}
                {animatedLine ? <span>{animatedLine}{" "}</span> : null}
                <span className="font-light tracking-[-0.03em] text-brand">
                  <HeroRotatingText words={rotatingWords!} />
                </span>
              </span>
            ) : null}
          </h1>
          {body ? (
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-secondary">
              {body}
            </p>
          ) : null}
          {children}
        </FadeIn>
      </Container>
    </section>
  );
}
