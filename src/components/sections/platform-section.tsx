import { Fragment } from "react";
import { Eye, Radar, Waypoints } from "lucide-react";
import { home } from "@/content/home";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

const platformIcons = [Radar, Waypoints, Eye];
const platformAccents = [
  "var(--color-blue-100)",
  "var(--color-blue-200)",
  "var(--color-blue-300)",
];

function PlatformConnector() {
  return (
    <span
      className="relative hidden h-px w-16 shrink-0 self-center md:mx-2 md:inline-flex lg:w-24"
      aria-hidden
    >
      <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-ink-inverse/25" />
    </span>
  );
}

export function PlatformSection() {
  return (
    <section
      className="relative overflow-hidden"
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

      <Container className="relative py-16 md:py-28">
        <FadeIn className="text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="font-mono text-[13px] font-bold uppercase tracking-[0.18em] text-ink-inverse-muted">
              {home.platformEyebrow}
            </span>
          </div>
          <h2 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-[-0.035em] text-ink-inverse md:text-5xl">
            {home.platformHeadline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium leading-8 text-ink-inverse-muted">
            {home.platformSubtitle}
          </p>
        </FadeIn>

        <div className="relative mt-14 flex flex-col gap-10 md:mt-20 md:flex-row md:items-start md:gap-0">
          {home.platformAreas.map(([title, body], i) => {
            const Icon = platformIcons[i] ?? Radar;
            const accent = platformAccents[i] ?? platformAccents[0];
            return (
              <Fragment key={title}>
                <FadeIn delay={i * 0.1} className="flex-1 text-center">
                  <div
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border"
                    style={{ borderColor: accent, color: accent }}
                  >
                    <Icon size={32} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-ink-inverse">
                    {title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[22rem] text-sm font-medium leading-6 text-ink-inverse-muted">
                    {body}
                  </p>
                </FadeIn>
                {i < home.platformAreas.length - 1 ? (
                  <PlatformConnector />
                ) : null}
              </Fragment>
            );
          })}
        </div>

        <FadeIn delay={0.3} className="mt-14 text-center">
          <Button href="#demo-section" variant="inverse">
            {home.platformCta}
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
