import Image from "next/image";
import { urls } from "@/content/site";
import { variant } from "@/content/variant";

function CheckIcon({ muted = false }: { muted?: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className={muted ? "text-paper/25" : "text-lilac"}
    >
      <path
        d="M4.5 9.5 7.5 12.5 13.5 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className="text-paper/25"
    >
      <path
        d="M5.5 5.5 12.5 12.5M12.5 5.5 5.5 12.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function VariantPricing() {
  const { pricing } = variant;

  return (
    <section
      id={pricing.id}
      className="relative scroll-mt-24 px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-[720px] text-center">
        <p className="type-eyebrow">{pricing.eyebrow}</p>
        <h2 className="type-h2 mt-4 text-paper md:mt-5">{pricing.h2}</h2>
        <p className="mx-auto mt-5 max-w-xl font-body text-[16px] leading-[25px] text-muted md:mt-6 md:text-[18px] md:leading-[28px]">
          {pricing.lede}
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-[880px] overflow-hidden rounded-[24px] border border-paper/8 md:mt-14">
        <Image
          src={pricing.shot}
          alt={pricing.shotAlt}
          width={1400}
          height={788}
          sizes="(max-width: 880px) 100vw, 880px"
          className="h-auto w-full"
        />
      </div>

      <div className="mx-auto mt-10 grid max-w-[880px] grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 md:gap-6">
        {pricing.plans.map((plan) => (
          <div key={plan.name} className="surface-card flex flex-col p-6 md:p-7">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-paper/45">
              {plan.name}
            </p>
            <p className="mt-3 flex items-baseline gap-1">
              <span className="font-head text-[64px] leading-none tracking-[0.02em] text-paper">
                {plan.price}
              </span>
              {plan.period ? (
                <span className="font-body text-[15px] text-paper/45">
                  {plan.period}
                </span>
              ) : null}
            </p>
            <p className="mt-3 font-body text-[15px] leading-[23px] text-muted">
              {plan.tagline}
            </p>

            <ul className="mt-7 space-y-3">
              {plan.included.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 font-body text-[15px] leading-[22px] text-paper/85"
                >
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
              {plan.excluded.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 font-body text-[15px] leading-[22px] text-paper/35"
                >
                  <CrossIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <a href={urls.signup} className="btn-primary w-full gap-2">
                {plan.cta}
                <span aria-hidden="true">→</span>
              </a>
              <p className="mt-3 text-center font-body text-[13px] text-paper/45">
                {pricing.dueToday}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-[720px] space-y-2 text-center md:mt-12">
        {pricing.notes.map((note) => (
          <p key={note} className="font-body text-[14px] leading-[21px] text-paper/40">
            {note}
          </p>
        ))}
      </div>
    </section>
  );
}
