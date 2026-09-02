import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export function CtaBand({
  title,
  body,
  action,
  href = "/contact",
  eyebrow,
}: {
  title: string;
  body: string;
  action?: string;
  href?: string;
  eyebrow?: string;
}) {
  return (
    <section className="bg-page pb-10 pt-10 md:pb-14 md:pt-14">
      <Container>
        <div className="rounded-xl bg-inverse px-8 py-10 text-ink-inverse md:px-12 md:py-14">
          {eyebrow ? <Eyebrow inverse>{eyebrow}</Eyebrow> : null}
          <h2 className="max-w-4xl text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-lg font-medium text-ink-inverse-muted">{body}</p>
          {action ? (
            <div className="mt-7">
              <Button href={href} variant="inverse">
                {action}
              </Button>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
