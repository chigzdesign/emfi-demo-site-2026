import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "secondary" | "inverse" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  showArrow?: boolean;
};

const variants = {
  primary: "bg-brand text-ink-inverse hover:bg-brand-hover",
  outline: "border border-line bg-page text-ink hover:bg-subtle",
  secondary:
    "border border-brand bg-page text-brand hover:border-brand hover:bg-brand hover:text-ink-inverse",
  inverse: "bg-page text-ink hover:bg-subtle",
  ghost:
    "border border-line-inverse/40 bg-transparent text-ink-inverse hover:bg-ink-inverse/5",
};

function ButtonArrow() {
  return (
    <ArrowRight
      size={14}
      aria-hidden
      className="emfi-btn-arrow shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-rotate-45"
    />
  );
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
  showArrow = true,
}: ButtonProps) {
  const classes = cn(
    "emfi-btn group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[13px] font-bold tracking-wide",
    variants[variant],
    className,
  );

  const content = (
    <>
      {children}
      {showArrow ? <ButtonArrow /> : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
