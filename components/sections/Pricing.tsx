import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { pricing, urls } from "@/content/site";

export function Pricing() {
  return (
    <Section id={pricing.id} surface="paper">
      <div className="max-w-2xl">
        <h2 className="type-h2 text-ink">{pricing.h2}</h2>
        <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/70 md:text-[17px]">
          {pricing.lede}
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {pricing.plans.map((plan) => (
          <div
            key={plan.name}
            className="flex flex-col rounded-xl bg-snow p-8 shadow-card"
          >
            <p className="font-head text-[18px] font-semibold text-ink">
              {plan.name}
            </p>
            <p className="mt-4 flex items-baseline gap-1">
              <span className="font-head text-[40px] font-semibold leading-none tracking-[-0.02em] text-ink">
                {plan.price}
              </span>
              {plan.period ? (
                <span className="font-mono text-[14px] text-ink/55">
                  {plan.period}
                </span>
              ) : null}
            </p>
            <p className="mt-3 min-h-11 font-body text-[15px] leading-[22px] text-ink/70">
              {plan.tagline}
            </p>
            <ul className="mt-8 space-y-3">
              {pricing.rows.map((row) => {
                const value = plan.name === "Free" ? row.free : row.pro;
                return (
                  <li key={row.feature} className="flex justify-between gap-4">
                    <span className="font-body text-[15px] leading-[22px] text-ink">
                      {row.feature}
                    </span>
                    <span
                      className={`shrink-0 font-body text-[15px] leading-[22px] ${
                        value === "—" ? "text-ink/40" : "text-ink"
                      }`}
                    >
                      {value}
                    </span>
                  </li>
                );
              })}
            </ul>
            <Button href={urls.signup} className="mt-8 w-full">
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-8 space-y-2">
        {pricing.notes.map((note) => (
          <p key={note} className="font-mono text-[13px] text-ink/55">
            {note}
          </p>
        ))}
      </div>
    </Section>
  );
}
