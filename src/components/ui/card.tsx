import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
  highlight = false,
}: {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}) {
  return (
    <article
      className={cn(
        "rounded-lg border bg-card p-6 md:p-7 emfi-card-lift",
        highlight ? "border-brand-focus/30 bg-soft" : "border-line hover:bg-page",
        className,
      )}
    >
      {children}
    </article>
  );
}
