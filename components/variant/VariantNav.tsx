"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { urls } from "@/content/site";
import { variant } from "@/content/variant";

export function VariantNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-paper/8 bg-ink/90 backdrop-blur-md">
        <nav
          aria-label="Primary"
          className="page-container flex h-16 items-center justify-between gap-4"
        >
          <Link
            href={variant.path}
            className="inline-flex items-center gap-2 text-paper no-underline"
          >
            <span
              className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-clay text-[15px] font-bold text-snow"
              aria-hidden="true"
            >
              ⏎
            </span>
            <span className="font-head text-[18px] font-extrabold leading-none tracking-[-0.035em] text-paper">
              replylane
            </span>
            <span className="sr-only">replylane home</span>
          </Link>

          <ul className="hidden items-center gap-7 md:flex">
            {variant.nav.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-body text-[14px] font-medium text-paper/70 no-underline transition-colors hover:text-paper"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href={urls.login}
              className="font-body text-[14px] font-medium text-paper/70 no-underline hover:text-paper"
            >
              {variant.nav.login}
            </a>
            <a href={urls.signup} className="btn-primary min-h-10 rounded-xl px-4 text-[14px]">
              {variant.nav.signup}
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-paper md:hidden"
            aria-expanded={open}
            aria-controls="variant-mobile-menu"
            aria-label={variant.nav.menu}
            onClick={() => setOpen(true)}
          >
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className="h-px w-full bg-paper" />
              <span className="h-px w-full bg-paper" />
              <span className="h-px w-full bg-paper" />
            </span>
          </button>
        </nav>
      </header>

      {/* Outside the blurred header so Safari doesn't trap position:fixed */}
      {open ? (
        <div
          id="variant-mobile-menu"
          className="fixed inset-0 z-[60] bg-ink md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="page-container flex h-16 items-center justify-between border-b border-paper/8">
            <Link
              href={variant.path}
              className="inline-flex items-center gap-2 text-paper no-underline"
              onClick={() => setOpen(false)}
            >
              <span
                className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-clay text-[15px] font-bold text-snow"
                aria-hidden="true"
              >
                ⏎
              </span>
              <span className="font-head text-[18px] font-extrabold leading-none tracking-[-0.035em]">
                replylane
              </span>
            </Link>
            <button
              type="button"
              className="font-body text-[15px] font-medium text-paper"
              onClick={() => setOpen(false)}
            >
              {variant.nav.close}
            </button>
          </div>
          <div className="page-container flex flex-col gap-5 bg-ink pt-10">
            {variant.nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-head text-[28px] font-semibold leading-none tracking-[-0.03em] text-paper no-underline"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={urls.login}
              className="mt-4 font-body text-[17px] text-paper/70 no-underline"
              onClick={() => setOpen(false)}
            >
              {variant.nav.login}
            </a>
            <a
              href={urls.signup}
              className="btn-primary mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              {variant.nav.signup}
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
