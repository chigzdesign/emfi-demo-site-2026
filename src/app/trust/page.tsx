import { trust } from "@/content/trust";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/sections/page-hero";

export const metadata = {
  title: trust.title,
  description: trust.body,
};

export default function TrustPage() {
  return (
    <>
      <PageHero eyebrow={trust.eyebrow} title={trust.headline} body={trust.body} />

      <section className="border-b border-line bg-subtle">
        <Container className="py-6">
          <p className="max-w-4xl text-sm font-medium leading-6 text-ink-secondary">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-brand">
              Compliance draft
            </span>
            <span className="mt-2 block">{trust.draftNotice}</span>
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-12 md:py-16">
          <FadeIn>
            <Eyebrow>{trust.authorisedEyebrow}</Eyebrow>
            <h2 className="text-4xl font-bold tracking-[-0.025em] text-ink md:text-5xl">
              {trust.authorisedTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-secondary">
              {trust.authorisedBody}
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {trust.regulators.map((item, i) => (
              <FadeIn key={item.code} delay={i * 0.08}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block h-full rounded-lg border border-line bg-card p-7 emfi-card-lift hover:bg-page"
                >
                  <p className="font-mono text-sm font-bold tracking-[0.14em] text-brand">
                    {item.code}
                  </p>
                  <h3 className="mt-4 text-xl font-bold text-ink">{item.name}</h3>
                  <p className="mt-3 text-sm font-semibold text-ink">{item.entity}</p>
                  <p className="mt-3 text-sm leading-6 text-ink-secondary">{item.detail}</p>
                  <p className="mt-6 font-mono text-[11px] text-ink-muted">
                    Official register entry →
                  </p>
                </a>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-subtle">
        <Container className="py-12 md:py-16">
          <FadeIn>
            <Eyebrow>{trust.regulatedEyebrow}</Eyebrow>
            <h2 className="text-4xl font-bold tracking-[-0.025em] text-ink md:text-5xl">
              {trust.regulatedTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-secondary">
              {trust.regulatedBody}
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {trust.regimes.map((item) => (
              <article
                key={item.code}
                className={`rounded-lg border p-7 ${
                  item.prominence
                    ? "border-brand bg-inverse text-ink-inverse"
                    : "border-line bg-page text-ink"
                }`}
              >
                <p
                  className={`font-mono text-[11px] font-bold tracking-[0.14em] ${
                    item.prominence ? "text-ink-inverse-muted" : "text-brand"
                  }`}
                >
                  {item.code}
                </p>
                <h3 className="mt-3 text-xl font-bold">{item.name}</h3>
                <p
                  className={`mt-3 text-sm leading-6 ${
                    item.prominence ? "text-ink-inverse-muted" : "text-ink-secondary"
                  }`}
                >
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12 md:py-16">
          <FadeIn>
            <Eyebrow>{trust.auditableEyebrow}</Eyebrow>
            <h2 className="text-4xl font-bold tracking-[-0.025em] text-ink md:text-5xl">
              {trust.auditableTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-ink-secondary">
              {trust.auditableBody}
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {trust.auditors.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.08}>
                <Card>
                  <h3 className="text-2xl font-bold text-ink">{item.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink-secondary">{item.scope}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-subtle">
        <Container className="py-12 md:py-16">
          <FadeIn>
            <Eyebrow>{trust.credibilityEyebrow}</Eyebrow>
            <h2 className="text-4xl font-bold tracking-[-0.025em] text-ink">
              {trust.credibilityTitle}
            </h2>
          </FadeIn>
          <div className="mt-8 flex flex-wrap gap-3">
            {trust.credibilityItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-page px-6 py-3 text-sm font-bold text-ink"
              >
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12 md:py-16">
          <FadeIn>
            <Eyebrow>{trust.infraEyebrow}</Eyebrow>
            <h2 className="text-4xl font-bold tracking-[-0.025em] text-ink md:text-5xl">
              {trust.infraTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-secondary">
              {trust.infraBody}
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trust.infrastructure.map((item) => (
              <article key={item.name} className="rounded-lg border border-line bg-card p-6">
                <h3 className="text-xl font-bold text-ink">{item.name}</h3>
                <p className="mt-2 text-sm text-ink-secondary">{item.role}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-subtle">
        <Container className="py-12 md:py-16">
          <FadeIn>
            <Eyebrow>{trust.coverageEyebrow}</Eyebrow>
            <h2 className="text-4xl font-bold tracking-[-0.025em] text-ink">
              {trust.coverageTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-secondary">
              {trust.coverageBody}
            </p>
          </FadeIn>
          <div className="mt-8 flex flex-wrap gap-3">
            {trust.coverageItems.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-dashed border-line bg-page px-6 py-8 text-sm font-semibold text-ink-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12 md:py-16">
          <FadeIn>
            <Eyebrow>{trust.entitiesEyebrow}</Eyebrow>
            <h2 className="text-4xl font-bold tracking-[-0.025em] text-ink md:text-5xl">
              {trust.entitiesTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-secondary">
              {trust.entitiesBody}
            </p>
          </FadeIn>
          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                  <th className="py-3 pr-6 font-bold">Entity</th>
                  <th className="py-3 pr-6 font-bold">Jurisdiction</th>
                  <th className="py-3 pr-6 font-bold">Regulator</th>
                  <th className="py-3 font-bold">Role</th>
                </tr>
              </thead>
              <tbody>
                {trust.entities.map((row) => (
                  <tr key={row.name} className="border-b border-line">
                    <td className="py-4 pr-6 font-semibold text-ink">{row.name}</td>
                    <td className="py-4 pr-6 text-ink-secondary">{row.jurisdiction}</td>
                    <td className="py-4 pr-6 font-mono text-brand">{row.regulator}</td>
                    <td className="py-4 text-ink-secondary">{row.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10">
            <Button href="/contact">Discuss your requirements</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
