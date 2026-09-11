import { Icon } from "@/components/Icon";
import { Section } from "@/components/Section";
import { howItWorks } from "@/content/site";

/** Three steps, side by side, in order. */
export function HowItWorks() {
  return (
    <Section id={howItWorks.id} surface="paper">
      <h2 className="type-h2 max-w-2xl text-ink">{howItWorks.h2}</h2>
      <p className="mt-4 max-w-2xl font-body text-[16px] leading-[25px] text-ink/70 md:text-[17px]">
        {howItWorks.sub}
      </p>

      <ol className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
        {howItWorks.steps.map((step) => (
          <li
            key={step.n}
            className="flex flex-col rounded-xl bg-snow p-6 shadow-card md:p-7"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[13px] text-ink/50">Step {step.n}</span>
              <Icon name={step.icon} size={24} className="text-ink/70" />
            </div>
            <h3 className="type-h3 mt-5 text-ink">{step.h3}</h3>
            <p className="mt-3 font-head text-[17px] font-semibold leading-[24px] text-ink">
              {step.kicker}
            </p>
            {"parts" in step && step.parts
              ? step.parts.map((part) => (
                  <div key={part.label} className="mt-4">
                    <p className="font-body text-[15px] font-bold text-ink">{part.label}</p>
                    <p className="mt-1 font-body text-[16px] leading-[25px] text-ink/75">
                      {part.body}
                    </p>
                  </div>
                ))
              : null}
            {"body" in step && step.body ? (
              <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75">{step.body}</p>
            ) : null}
            {"note" in step && step.note ? (
              <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75">{step.note}</p>
            ) : null}
            {"foot" in step && step.foot ? (
              <p className="mt-auto pt-6 font-mono text-[13px] text-ink/50">{step.foot}</p>
            ) : null}
          </li>
        ))}
      </ol>

      <p className="mt-10 font-body text-[16px] leading-[25px] font-medium text-ink md:mt-12">
        {howItWorks.close}
      </p>
    </Section>
  );
}
