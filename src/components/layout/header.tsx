"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks } from "@/content/nav";
import { Logo, LogoMark } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

function linkActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const submenuId = useId();

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [servicesOpen]);

  const servicesActive = linkActive(pathname, "/services");

  return (
    <header className="sticky top-0 z-50 bg-nav">
      <div className="mx-auto grid h-[72px] max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-6 md:px-10">
        <Link
          href="/"
          aria-label="EMFI home"
          className="justify-self-start"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex lg:gap-7" aria-label="Primary">
          {navLinks.map((link) =>
            "children" in link ? (
              <div
                key={link.href}
                className="relative flex h-[72px] items-center"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onFocus={() => setServicesOpen(true)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                    setServicesOpen(false);
                  }
                }}
              >
                <div className="flex items-center gap-1">
                  <Link
                    href={link.href}
                    className={cn(
                      "border-b pb-1 text-[15px] font-semibold transition-colors",
                      servicesActive
                        ? "border-ink-inverse font-bold text-ink-inverse"
                        : "border-transparent text-ink-inverse/80 hover:border-ink-inverse hover:text-ink-inverse",
                    )}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                  <button
                    type="button"
                    className={cn(
                      "-mr-1 flex min-h-8 min-w-8 items-center justify-center rounded-full text-ink-inverse/80 transition-colors hover:text-ink-inverse",
                      servicesActive && "text-ink-inverse",
                    )}
                    aria-expanded={servicesOpen}
                    aria-controls={submenuId}
                    aria-haspopup="true"
                    aria-label="Open Services menu"
                    onClick={() => setServicesOpen((value) => !value)}
                  >
                    <ChevronDown
                      size={15}
                      aria-hidden
                      className={cn("transition-transform", servicesOpen && "rotate-180")}
                    />
                  </button>
                </div>
                <div
                  id={submenuId}
                  hidden={!servicesOpen}
                  className={cn(
                    "absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-2",
                    !servicesOpen && "pointer-events-none",
                  )}
                >
                  <ul className="rounded-lg border border-line bg-page py-2 shadow-[var(--elevation-card-hover)]">
                    {link.children.map((item) => {
                      const active = pathname === item.href;
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              "block px-4 py-2.5 text-[14px] font-semibold transition-colors",
                              active
                                ? "bg-subtle font-bold text-ink"
                                : "text-ink-secondary hover:bg-subtle hover:text-ink",
                            )}
                            aria-current={active ? "page" : undefined}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "border-b pb-1 text-[15px] font-semibold transition-colors",
                  linkActive(pathname, link.href)
                    ? "border-ink-inverse font-bold text-ink-inverse"
                    : "border-transparent text-ink-inverse/80 hover:border-ink-inverse hover:text-ink-inverse",
                )}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <Link
            href="/"
            aria-label="EMFI"
            className="group relative text-ink-inverse"
            onClick={() => setOpen(false)}
          >
            <LogoMark decorative />
            <span
              role="tooltip"
              className="pointer-events-none absolute right-0 top-full z-[60] mt-2 whitespace-nowrap rounded-md bg-page px-2.5 py-1.5 text-[12px] font-semibold text-ink opacity-0 shadow-[var(--elevation-card-hover)] transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              Click Here to Login
            </span>
          </Link>
          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line-inverse text-ink-inverse lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line-inverse bg-nav px-6 py-8 lg:hidden">
          <div className="grid gap-5">
            {navLinks.map((link) =>
              "children" in link ? (
                <div key={link.href} className="grid gap-3">
                  <Link
                    href={link.href}
                    className={cn(
                      "text-[16px] font-semibold",
                      servicesActive ? "font-bold text-ink-inverse" : "text-ink-inverse/80",
                    )}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                  <div className="ml-1 grid gap-3 border-l border-line-inverse/25 pl-4">
                    {link.children.map((item) => {
                      const active = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "text-[15px] font-semibold",
                            active ? "font-bold text-ink-inverse" : "text-ink-inverse/70",
                          )}
                          aria-current={active ? "page" : undefined}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[16px] font-semibold",
                    linkActive(pathname, link.href)
                      ? "font-bold text-ink-inverse"
                      : "text-ink-inverse/80",
                  )}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ),
            )}
            <Button href="/contact" variant="inverse">
              Discuss your requirements
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
