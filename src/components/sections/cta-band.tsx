import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";

function CtaContent({
  title,
  body,
  action,
  href,
  eyebrow,
  asLabel,
  className,
}: {
  title: string;
  body: string;
  action?: string;
  href: string;
  eyebrow?: string;
  asLabel?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("px-8 py-10 text-ink-inverse md:px-12 md:py-14", className)}>
      {eyebrow ? <Eyebrow inverse>{eyebrow}</Eyebrow> : null}
      <h2 className="max-w-4xl text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">
        {title}
      </h2>
      <p className="mt-6 max-w-3xl text-lg font-medium text-ink-inverse-muted">{body}</p>
      {action ? (
        <div className="mt-7">
          <Button
            href={asLabel ? undefined : href}
            as={asLabel ? "span" : undefined}
            variant="inverse"
            className={asLabel ? "group-hover:bg-subtle" : undefined}
          >
            {action}
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export function CtaBand({
  title,
  body,
  action,
  href = "/contact",
  eyebrow,
  sectionLink = false,
}: {
  title: string;
  body: string;
  action?: string;
  href?: string;
  eyebrow?: string;
  sectionLink?: boolean;
}) {
  const content = (
    <CtaContent
      title={title}
      body={body}
      action={action}
      href={href}
      eyebrow={eyebrow}
      asLabel={sectionLink}
      className={sectionLink ? "relative z-10" : "rounded-xl bg-inverse"}
    />
  );

  if (sectionLink) {
    return (
      <section className="bg-page">
        <Link
          href={href}
          aria-label={action ?? title}
          className="emfi-cta-section group relative block cursor-pointer overflow-hidden bg-page pb-10 pt-10 md:pb-14 md:pt-14"
        >
          <span aria-hidden className="emfi-cta-fill" />
          <Container>{content}</Container>
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-page pb-10 pt-10 md:pb-14 md:pt-14">
      <Container>{content}</Container>
    </section>
  );
}
