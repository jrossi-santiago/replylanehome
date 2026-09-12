"use client";

import { useState } from "react";
import { variant } from "@/content/variant";

export function VariantFaq() {
  const { faq } = variant;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id={faq.id}
      className="relative scroll-mt-24 px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-[720px]">
        <h2 className="type-h2 text-paper">{faq.h2}</h2>

        <div className="mt-10 space-y-3 md:mt-12">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="surface-card overflow-hidden">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-body text-[16px] font-semibold text-paper md:text-[17px]">
                    {item.q}
                  </span>
                  <span
                    className="font-body text-[22px] leading-none text-paper/55"
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <div className="border-t border-paper/6 px-5 pb-5 pt-3 md:px-6 md:pb-6">
                    <p className="max-w-xl font-body text-[15px] leading-[24px] text-muted md:text-[16px] md:leading-[25px]">
                      {item.a}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
