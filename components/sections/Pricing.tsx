import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
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
      <div className="mt-12 grid grid-cols-1 gap-6 md:max-w-md">
        {pricing.plans.map((plan) => (
          <div key={plan.name} className="rounded-xl bg-snow p-8 shadow-card">
            <p className="font-head text-[18px] font-semibold text-ink">{plan.name}</p>
            <p className="mt-4 flex items-baseline gap-1">
              <span className="font-head text-[40px] font-semibold leading-none tracking-[-0.02em] text-ink">
                {plan.price}
              </span>
              <span className="font-mono text-[14px] text-ink/55">{plan.period}</span>
            </p>
            <ul className="mt-8 space-y-3">
              {plan.rows.map((row) => (
                <li key={row} className="flex gap-3">
                  <Icon name="check" size={20} className="mt-0.5 shrink-0 text-ink" />
                  <span className="font-body text-[15px] leading-[22px] text-ink">{row}</span>
                </li>
              ))}
            </ul>
            <Button href={urls.signup} className="mt-8 w-full">
              {plan.cta}
            </Button>
            <p className="mt-3 text-center font-body text-[15px] font-medium text-ink">
              {plan.trust}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-8 font-mono text-[13px] text-ink/55">{pricing.foot}</p>
    </Section>
  );
}
