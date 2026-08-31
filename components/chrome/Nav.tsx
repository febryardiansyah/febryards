"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MonogramMark } from "@/components/ornament/Monogram";
import { profile } from "@/data/profile";

const links = [
  { href: "/", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-40 w-full border-b border-[var(--color-rule)] bg-[var(--color-bg)]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 font-display text-lg text-[var(--color-fg)] sm:text-xl"
          >
            <MonogramMark className="h-7 w-7 shrink-0" />
            <span className="hidden sm:inline">febry/</span>
          </Link>

          <ul className="hidden items-center gap-1 sm:flex sm:gap-2">
            {links.map((l) => {
              const active =
                l.href === "/"
                  ? pathname === "/" || pathname.startsWith("/about")
                  : pathname.startsWith(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                      active
                        ? "bg-[var(--color-pill)] text-[var(--color-bg)]"
                        : "text-[var(--color-fg)] hover:bg-[var(--color-rule)]"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
            <li className="ml-1 shrink-0">
              <a
                href="https://drive.google.com/file/d/1CC8hQ_k18P-dIc7tBLFDbbB0wguUo4jU/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--color-rule)] px-4 py-1.5 text-sm transition-colors hover:border-[var(--color-fg)]"
              >
                CV →
              </a>
            </li>
          </ul>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-rule)] text-[var(--color-fg)] transition-colors hover:border-[var(--color-fg)] sm:hidden"
          >
            <span
              aria-hidden
              className={`absolute h-px w-4 bg-current transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              aria-hidden
              className={`absolute h-px w-4 bg-current transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={`fixed inset-0 z-30 origin-top bg-[var(--color-bg)] transition-[clip-path,opacity] duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] sm:hidden ${
          open
            ? "pointer-events-auto opacity-100 [clip-path:inset(0_0_0_0)]"
            : "pointer-events-none opacity-0 [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <div className="flex h-full flex-col px-4 pb-8 pt-20">
          <p className="bracket mb-6 text-[var(--color-fg)]">[ NAVIGATE ]</p>

          <ul className="flex flex-col">
            {links.map((l, i) => {
              const active =
                l.href === "/"
                  ? pathname === "/" || pathname.startsWith("/about")
                  : pathname.startsWith(l.href);
              return (
                <li
                  key={l.href}
                  className={`border-b border-[var(--color-rule)] transition-all duration-500 ease-out ${
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
                >
                  <Link
                    href={l.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between py-5 text-[var(--color-fg)]"
                  >
                    <span
                      className={`font-display text-3xl tracking-tight ${
                        active ? "italic-accent" : ""
                      }`}
                    >
                      {l.label}
                    </span>
                    <span
                      aria-hidden
                      className="text-2xl text-[var(--color-muted)] transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-auto pt-8">
            <p className="bracket mb-3">[ ELSEWHERE ]</p>
            <ul className="mb-5 flex flex-wrap gap-2">
              {profile.socials.map((s, i) => (
                <li
                  key={s.label}
                  className={`transition-all duration-500 ease-out ${
                    open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${120 + links.length * 70 + i * 50}ms` : "0ms" }}
                >
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-rule)] px-3 py-1.5 text-xs text-[var(--color-fg)] transition-colors hover:border-[var(--color-fg)]"
                  >
                    <span>{s.label}</span>
                    <span aria-hidden className="text-[var(--color-muted)]">↗</span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://drive.google.com/file/d/1CC8hQ_k18P-dIc7tBLFDbbB0wguUo4jU/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="block w-full rounded-full border border-[var(--color-fg)] px-5 py-4 text-center text-sm transition-colors hover:bg-[var(--color-fg)] hover:text-[var(--color-bg)]"
            >
              Download CV →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
