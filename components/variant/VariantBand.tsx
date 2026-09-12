import { urls } from "@/content/site";
import { variant } from "@/content/variant";

/** Full-bleed clay statement — same energy as the mymind orange screen. */
export function VariantBand() {
  const { band } = variant;

  return (
    <section className="relative mt-24 overflow-hidden bg-clay px-4 py-24 md:mt-32 md:px-6 md:py-32">
      <div className="mx-auto max-w-[720px] text-center">
        <p className="font-head text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
          {band.eyebrow}
        </p>
        <h2 className="mt-6 font-serif text-[36px] leading-[1.08] tracking-[-0.03em] text-ink md:text-[56px] md:leading-[1.05]">
          {band.h2}
        </h2>
        <p className="mx-auto mt-7 max-w-xl font-body text-[17px] leading-[26px] text-snow/90 md:mt-8 md:text-[19px] md:leading-[28px]">
          {band.body}
        </p>
        <div className="mt-10">
          <a
            href={urls.signup}
            className="inline-flex min-h-11 items-center gap-2 font-head text-[13px] font-semibold uppercase tracking-[0.14em] text-snow no-underline hover:text-snow/85"
          >
            <span
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-snow/70"
              aria-hidden="true"
            >
              →
            </span>
            {band.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
