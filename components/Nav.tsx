"use client";

import { useEffect, useState } from "react";
import { nav, urls } from "@/content/site";
import { Button } from "./Button";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
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
    <header
      className={`sticky top-0 z-50 bg-paper ${
        scrolled ? "border-b border-ink/12" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="page-container flex h-16 items-center justify-between gap-4"
      >
        <a href="/" className="inline-flex items-center gap-1.5 text-ink no-underline">
          <span className="font-mark text-[18px] font-bold leading-none" aria-hidden="true">
            ⏎
          </span>
          <span className="font-head text-[18px] font-extrabold lowercase tracking-[-0.035em]">
            replylane
          </span>
          <span className="sr-only">replylane home</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-[15px] text-ink/80 no-underline hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={urls.login}
            className="font-body text-[15px] text-ink no-underline hover:opacity-70"
          >
            {nav.login}
          </a>
          <Button href={urls.signup}>{nav.cta}</Button>
        </div>

        <button
          type="button"
          className="font-body text-[15px] font-medium text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          {nav.menu}
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 bg-paper md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="page-container flex h-16 items-center justify-between">
            <a href="/" className="inline-flex items-center gap-1.5 text-ink no-underline">
              <span className="font-mark text-[18px] font-bold" aria-hidden="true">
                ⏎
              </span>
              <span className="font-head text-[18px] font-extrabold lowercase tracking-[-0.035em]">
                replylane
              </span>
            </a>
            <button
              type="button"
              className="font-body text-[15px] font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              {nav.close}
            </button>
          </div>
          <div className="page-container flex flex-col gap-6 pt-8">
            {nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-head text-[22px] font-semibold text-ink no-underline"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={urls.login}
              className="font-head text-[22px] font-semibold text-ink no-underline"
            >
              {nav.login}
            </a>
            <Button href={urls.signup} className="self-start">
              {nav.cta}
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
