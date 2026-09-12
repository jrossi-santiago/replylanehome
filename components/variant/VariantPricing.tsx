import Image from "next/image";
import { urls } from "@/content/site";
import { variant } from "@/content/variant";

export function VariantPricing() {
  const { pricing } = variant;

  return (
    <section
      id={pricing.id}
      className="relative scroll-mt-24 bg-snow px-4 pb-20 pt-24 md:px-6 md:pb-28 md:pt-32"
    >
      <div className="mx-auto max-w-[720px] text-center">
        <p className="font-head text-[11px] font-semibold uppercase tracking-[0.18em] text-clay">
          {pricing.eyebrow}
        </p>
        <h2 className="mt-5 font-serif text-[36px] leading-[1.1] tracking-[-0.03em] text-ink md:text-[52px] md:leading-[1.06]">
          {pricing.h2}
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-body text-[17px] leading-[26px] text-ink/60 md:text-[19px] md:leading-[28px]">
          {pricing.lede}
        </p>
      </div>

      <div className="relative mx-auto mt-14 max-w-[880px] md:mt-16">
        <div className="overflow-hidden rounded-[28px]">
          <Image
            src={pricing.shot}
            alt={pricing.shotAlt}
            width={1400}
            height={788}
            sizes="(max-width: 880px) 100vw, 880px"
            className="h-auto w-full"
          />
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-[880px] grid-cols-1 gap-12 md:mt-20 md:grid-cols-2 md:gap-16">
        {pricing.plans.map((plan) => (
          <div key={plan.name} className="text-center md:text-left">
            <p className="font-head text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/45">
              {plan.name}
            </p>
            <p className="mt-3 flex items-baseline justify-center gap-1 md:justify-start">
              <span className="font-serif text-[56px] leading-none tracking-[-0.03em] text-ink">
                {plan.price}
              </span>
              {plan.period ? (
                <span className="font-body text-[15px] text-ink/45">
                  {plan.period}
                </span>
              ) : null}
            </p>
            <p className="mt-4 font-body text-[16px] leading-[24px] text-ink/60">
              {plan.tagline}
            </p>
            <ul className="mt-8 space-y-3">
              {plan.points.map((point) => (
                <li
                  key={point}
                  className="font-body text-[16px] leading-[24px] text-ink/80"
                >
                  {point}
                </li>
              ))}
            </ul>
            <a
              href={urls.signup}
              className="mt-8 inline-flex min-h-11 items-center rounded-full bg-clay px-5 font-head text-[15px] font-semibold text-paper no-underline hover:bg-clay/90"
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-[720px] space-y-2 text-center md:mt-16">
        {pricing.notes.map((note) => (
          <p
            key={note}
            className="font-body text-[14px] leading-[21px] text-ink/45"
          >
            {note}
          </p>
        ))}
      </div>
    </section>
  );
}
