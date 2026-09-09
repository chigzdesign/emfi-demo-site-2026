import Link from "next/link";
import { footer } from "@/content/nav";
import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";

function OfficeBlock({
  office,
}: {
  office: (typeof footer.offices)[number];
}) {
  return (
    <address className="not-italic">
      <div className="flex items-baseline gap-3">
        <p className="text-[15px] font-bold tracking-[-0.02em] text-ink-inverse">
          {office.city}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-inverse/50">
          {office.region}
        </p>
      </div>
      <p className="mt-2 text-[12px] font-semibold text-ink-inverse/80">
        {office.entity}
      </p>
      <p className="mt-2 max-w-xs text-[12px] font-medium leading-5">
        {office.lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
      <div className="mt-3 space-y-1 text-[12px] font-medium">
        <a
          href={`mailto:${office.email}`}
          className="block text-ink-inverse transition-opacity hover:opacity-80"
        >
          {office.email}
        </a>
      </div>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-inverse/45">
        {office.note}
      </p>
    </address>
  );
}

export function Footer() {
  const [london, dubai] = footer.offices;

  return (
    <footer className="border-t-2 border-ink-inverse-muted bg-footer text-ink-inverse-muted">
      <Container className="py-8 md:py-10">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
          <div>
            <div className="text-ink-inverse">
              <Logo />
            </div>
            <p className="mt-4 max-w-sm text-[13px] font-medium leading-6">
              {footer.tagline}
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-inverse/55">
              {footer.entities}
            </p>
          </div>

          <div>
            <Eyebrow inverse>{footer.servicesHeading}</Eyebrow>
            <nav
              className="mt-1 grid gap-2.5 text-[13px] font-medium"
              aria-label="Footer services"
            >
              {footer.services.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="transition-colors hover:text-ink-inverse"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <Eyebrow inverse>{footer.companyHeading}</Eyebrow>
            <nav
              className="mt-1 grid gap-2.5 text-[13px] font-medium"
              aria-label="Footer company"
            >
              {footer.company.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="transition-colors hover:text-ink-inverse"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t border-line-inverse/40 pt-7">
          <Eyebrow inverse>{footer.locationsHeading}</Eyebrow>
          <div className="mt-5 grid gap-8 lg:grid-cols-3 lg:gap-10">
            <OfficeBlock office={london} />
            <OfficeBlock office={dubai} />
            <div>
              <div className="flex items-baseline gap-3">
                <p className="text-[15px] font-bold tracking-[-0.02em] text-ink-inverse">
                  {footer.cayman.city}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-inverse/50">
                  {footer.cayman.region}
                </p>
              </div>
              <p className="mt-2 text-[12px] font-semibold text-ink-inverse/80">
                {footer.cayman.entity}
              </p>
              <p className="mt-2 max-w-xs text-[12px] font-medium leading-5">
                {footer.cayman.note}
              </p>
              <a
                href={`mailto:${footer.cayman.email}`}
                className="mt-3 block text-[12px] font-medium text-ink-inverse transition-opacity hover:opacity-80"
              >
                {footer.cayman.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-line-inverse/40 pt-5">
          <p className="max-w-4xl text-[11px] font-medium leading-5">
            {footer.legal}
          </p>
          <p className="mt-1.5 max-w-4xl text-[11px] font-medium leading-5 text-ink-inverse/45">
            {footer.legalDetail}
          </p>
        </div>
      </Container>
    </footer>
  );
}
