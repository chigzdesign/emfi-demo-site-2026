import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";
import { HeroAtmosphere } from "@/components/sections/hero-atmosphere";
import { HeroTypedLastWord } from "@/components/sections/hero-rotating-text";
import { cn } from "@/lib/cn";

function splitHeroTitle(titleLines: string[]) {
  if (titleLines.length >= 2) {
    return {
      boldLines: titleLines.slice(0, -1),
      lastLine: titleLines[titleLines.length - 1] ?? "",
    };
  }

  const line = titleLines[0] ?? "";
  const sentences = line.split(/(?<=\.)\s+/).filter(Boolean);
  if (sentences.length >= 2) {
    return {
      boldLines: [sentences.slice(0, -1).join(" ")],
      lastLine: sentences[sentences.length - 1] ?? "",
    };
  }

  return {
    boldLines: [] as string[],
    lastLine: line,
  };
}

export function PageHero({
  title,
  body,
  lead,
  children,
  className,
  rotatingWords,
}: {
  title: string;
  body?: string;
  lead?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  /** Optional alternate last words. Defaults to the headline's last word. */
  rotatingWords?: readonly string[];
}) {
  const titleLines = title.split("\n").filter(Boolean);
  const { boldLines, lastLine } = splitHeroTitle(titleLines);

  return (
    <section className={cn("relative overflow-hidden border-b border-line bg-page", className)}>
      <HeroAtmosphere compact />
      <Container className="relative py-12 lg:py-16">
        <FadeIn>
          {lead}
          <h1
            className="max-w-5xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-ink md:text-6xl lg:text-7xl"
            aria-label={title.replace(/\n/g, " ")}
          >
            {boldLines.map((line) => (
              <span key={line} className="mt-1 block first:mt-0">
                {line}
              </span>
            ))}
            <HeroTypedLastWord
              text={lastLine}
              words={rotatingWords}
              className={cn(boldLines.length && "mt-1")}
            />
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
