"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { urls } from "@/content/site";
import { variant } from "@/content/variant";

export function VariantNav() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none sticky top-0 z-50">
      <div
        className={`pointer-events-auto transition-[width,margin,border-radius,box-shadow,background-color] duration-300 ease-out ${
          compact
            ? "mx-auto mt-3 w-[min(920px,calc(100%-24px))] rounded-full bg-snow shadow-[0_8px_30px_rgb(21_15_10/0.10)]"
            : "w-full bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className={`flex h-16 items-center justify-between gap-4 ${
            compact ? "px-5 md:px-6" : "page-container"
          }`}
        >
          <Link
            href={variant.path}
            className="inline-flex items-center gap-1.5 text-ink no-underline"
          >
            <span
              className="font-mark text-[18px] font-bold leading-none"
              aria-hidden="true"
            >
              ⏎
            </span>
            <span className="font-head text-[18px] font-extrabold lowercase tracking-[-0.035em]">
              replylane
            </span>
            <span className="sr-only">replylane home</span>
          </Link>

          <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
            {variant.nav.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-flex items-center gap-1.5 font-body text-[15px] text-ink/70 no-underline hover:text-ink"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: l.dot }}
                    aria-hidden="true"
                  />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href={urls.login}
              className="font-body text-[15px] text-ink/70 no-underline hover:text-ink"
            >
              {variant.nav.login}
            </a>
            <a
              href={urls.signup}
              className="inline-flex min-h-9 items-center rounded-full bg-clay px-4 font-head text-[14px] font-semibold text-paper no-underline hover:bg-clay/90"
            >
              {variant.nav.signup}
            </a>
          </div>

          <button
            type="button"
            className="font-body text-[15px] font-medium text-ink md:hidden"
            aria-expanded={open}
            aria-controls="variant-mobile-menu"
            onClick={() => setOpen(true)}
          >
            {variant.nav.menu}
          </button>
        </nav>
      </div>

      {open ? (
        <div
          id="variant-mobile-menu"
          className="pointer-events-auto fixed inset-0 z-50 bg-snow md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="page-container flex h-16 items-center justify-between">
            <Link
              href={variant.path}
              className="inline-flex items-center gap-1.5 text-ink no-underline"
            >
              <span className="font-mark text-[18px] font-bold" aria-hidden="true">
                ⏎
              </span>
              <span className="font-head text-[18px] font-extrabold lowercase tracking-[-0.035em]">
                replylane
              </span>
            </Link>
            <button
              type="button"
              className="font-body text-[15px] font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              {variant.nav.close}
            </button>
          </div>
          <div className="page-container flex flex-col gap-6 pt-8">
            {variant.nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-2 font-head text-[22px] font-semibold text-ink no-underline"
                onClick={() => setOpen(false)}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: l.dot }}
                  aria-hidden="true"
                />
                {l.label}
              </a>
            ))}
            <a
              href={urls.login}
              className="font-head text-[22px] font-semibold text-ink no-underline"
              onClick={() => setOpen(false)}
            >
              {variant.nav.login}
            </a>
            <a
              href={urls.signup}
              className="inline-flex min-h-11 w-fit items-center rounded-full bg-clay px-5 font-head text-[15px] font-semibold text-paper no-underline"
            >
              {variant.nav.signup}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
