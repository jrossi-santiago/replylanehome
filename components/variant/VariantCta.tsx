import { urls } from "@/content/site";
import { variant } from "@/content/variant";

export function VariantCta() {
  const { cta } = variant;

  return (
    <section className="relative overflow-hidden bg-[#f6f3ee] px-4 py-24 md:px-6 md:py-32">
      <div className="variant-wash-foot pointer-events-none absolute inset-x-0 bottom-0 h-[75%]" />
      <div className="relative mx-auto max-w-[720px] text-center">
        <p className="font-head text-[11px] font-semibold uppercase tracking-[0.18em] text-clay">
          {cta.eyebrow}
        </p>
        <h2 className="mt-5 font-serif text-[40px] leading-[1.08] tracking-[-0.03em] text-ink md:text-[64px] md:leading-[1.04]">
          {cta.h2}
        </h2>
        <p className="mx-auto mt-6 max-w-lg font-body text-[17px] leading-[26px] text-ink/60 md:mt-7 md:text-[19px] md:leading-[28px]">
          {cta.body}
        </p>
        <div className="mt-10">
          <a
            href={urls.signup}
            className="inline-flex min-h-11 items-center rounded-full bg-clay px-6 font-head text-[15px] font-semibold text-paper no-underline hover:bg-clay/90"
          >
            {cta.primary}
          </a>
        </div>
        <p className="mt-5 font-body text-[14px] font-medium text-ink/55 md:text-[15px]">
          {cta.trust}
        </p>
      </div>
    </section>
  );
}
