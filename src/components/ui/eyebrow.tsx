import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  inverse = false,
  className,
}: {
  children: React.ReactNode;
  inverse?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.18em]",
        inverse ? "text-ink-inverse-muted" : "text-ink-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}
