import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-[11px] tracking-[0.2em] text-brand">404 / PAGE NOT FOUND</p>
      <h1 className="mt-6 text-7xl font-extrabold tracking-[-0.06em] md:text-9xl">404</h1>
      <p className="mt-7 max-w-md text-lg leading-7 text-ink-secondary">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-12 inline-flex items-center gap-3 rounded-full border border-line px-7 py-4 text-[13px] font-semibold tracking-wide text-ink hover:bg-subtle"
      >
        <ArrowLeft size={14} />
        RETURN TO HOME
      </Link>
    </div>
  );
}
