import Link from "next/link";
import { about } from "@/content/about";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/sections/page-hero";
import { DecadeHeroVisual } from "@/components/diagrams/decade-hero-visual";
import { PersonCard } from "@/components/sections/person-card";

export const metadata = {
  title: "About",
  description: about.body,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={about.headline}
        body={about.body}
        visual={<DecadeHeroVisual />}
      />

      <section className="border-b border-line bg-subtle">
        <Container className="py-12 md:py-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <FadeIn>
              <Eyebrow>{about.yearsEyebrow}</Eyebrow>
              <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-ink md:text-6xl">
                {about.yearsTitle}
              </h2>
            </FadeIn>
            {/* <div className="h-fit rounded-lg border-2 border-brand bg-page p-5 font-mono text-xl text-brand">
              {about.badge}
              <br />
              <span className="text-sm">{about.badgeSub}</span>
            </div> */}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {about.themes.map((theme) => (
              <span
                key={theme}
                className="rounded-full border border-line bg-page px-4 py-2 text-[12px] font-semibold text-ink"
              >
                {theme}
              </span>
            ))}
          </div>
          <div className="relative mt-10 md:mt-12">
            <span
              aria-hidden
              className="pointer-events-none absolute bottom-2 left-2 top-2 w-0.5 bg-brand md:bottom-auto md:left-[8px] md:right-[8px] md:top-2 md:h-0.5 md:w-auto"
            />
            <div className="grid gap-8 md:grid-cols-7 md:gap-4">
              {about.milestones.map(([year, title, desc], i) => (
                <FadeIn
                  key={`${year}-${title}`}
                  delay={i * 0.05}
                  className="relative pl-8 md:min-h-[220px] md:pl-0"
                >
                  <span className="absolute left-0 top-0 z-10 block h-4 w-4 rounded-sm bg-brand ring-[6px] ring-subtle md:relative md:mb-5" />
                  <p className="font-mono text-xs font-bold text-brand">{year}</p>
                  <h3 className="mt-3 text-sm font-bold leading-5 text-ink">{title}</h3>
                  <p className="mt-2 text-sm font-medium leading-5 text-ink-secondary">
                    {desc}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-page">
        <Container className="py-12 md:py-16">
          <FadeIn>
            <Eyebrow>{about.geographyEyebrow}</Eyebrow>
            <h2 className="text-4xl font-bold tracking-[-0.025em] text-ink md:text-5xl">
              {about.geographyTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-ink-secondary">
              {about.geographyBody}
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {about.geography.map((place, i) => (
              <FadeIn key={place.city} delay={i * 0.08}>
                <Card className="h-full">
                  <h3 className="text-3xl font-extrabold tracking-[-0.03em] text-ink">
                    {place.city}
                  </h3>
                  <p className="mt-3 text-sm font-semibold text-ink">{place.role}</p>
                  <p className="mt-3 text-sm leading-6 text-ink-secondary">{place.note}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-muted">
            {about.entitiesNote}{" "}
            <Link href="/trust" className="font-semibold text-brand hover:underline">
              {about.entitiesCta}
            </Link>
            .
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-12 md:py-16">
          <FadeIn>
            <Eyebrow>{about.peopleEyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold">{about.peopleTitle}</h2>
          </FadeIn>
          <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {about.people.map((person, i) => (
              <FadeIn key={person.name} delay={i * 0.04} className="h-full">
                <PersonCard person={person} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
