import { Draft } from "@/components/Draft";
import { Icon } from "@/components/Icon";
import { Lamp } from "@/components/Lamp";
import { Section } from "@/components/Section";
import { askDraftLength, briefDemo, deskCards, howItWorks } from "@/content/site";

export function HowItWorks() {
  return (
    <Section id={howItWorks.id} surface="ink">
      <h2 className="type-h2 max-w-2xl text-paper">{howItWorks.h2}</h2>
      <p className="mt-4 max-w-2xl font-body text-[16px] leading-[25px] text-paper/70 md:text-[17px]">
        {howItWorks.sub}
      </p>
      <div className="mt-12 space-y-12 md:mt-16 md:space-y-16">
        {howItWorks.steps.map((step) => (
          <div
            key={step.n}
            className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-6"
          >
            <div className="md:col-span-7">
              <p className="font-mono text-[13px] text-paper/50">{step.n}</p>
              <div className="mt-4 flex items-center gap-3">
                <Icon name={step.icon} size={24} className="text-paper" />
                <h3 className="type-h3 text-paper">{step.h3}</h3>
              </div>
              <p className="mt-4 font-head text-[18px] font-semibold leading-[24px] text-paper">
                {step.kicker}
              </p>
              {"parts" in step && step.parts
                ? step.parts.map((part) => (
                    <div key={part.label} className="mt-4">
                      <p className="font-body text-[15px] font-bold text-paper">{part.label}</p>
                      <p className="mt-1 font-body text-[16px] leading-[25px] text-paper/70">
                        {part.body}
                      </p>
                    </div>
                  ))
                : null}
              {"body" in step && step.body ? (
                <p className="mt-4 font-body text-[16px] leading-[25px] text-paper/70">
                  {step.body}
                </p>
              ) : null}
              {"note" in step && step.note ? (
                <p className="mt-4 font-body text-[16px] leading-[25px] text-paper/70">
                  {step.note}
                </p>
              ) : null}
              {"foot" in step && step.foot ? (
                <p className="mt-4 font-mono text-[13px] text-paper/50">{step.foot}</p>
              ) : null}
            </div>
            <div className="md:col-span-5">{illustration(step.n)}</div>
          </div>
        ))}
      </div>
      <p className="mt-12 font-body text-[16px] leading-[25px] text-paper md:mt-16">
        {howItWorks.close}
      </p>
    </Section>
  );
}

function illustration(n: string) {
  if (n === "1") {
    return (
      <div className="rounded-xl bg-snow p-4 text-ink shadow-card">
        <label className="block font-body text-[12px] text-ink/50">Website</label>
        <div className="mt-1 rounded-lg border border-ink/12 bg-paper px-3 py-2 font-mono text-[13px] text-ink">
          {briefDemo.url}
        </div>
        <p className="mt-4 font-body text-[12px] text-ink/50">Circle</p>
        <ul className="mt-1 space-y-1">
          {briefDemo.handles.map((h) => (
            <li key={h} className="font-mono text-[13px] text-ink">
              {h}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  if (n === "2") {
    return (
      <div className="flex items-center justify-between gap-3 rounded-xl bg-snow px-4 py-3 text-ink shadow-card">
        <span className="font-head text-[15px] font-semibold">Reply Desk</span>
        <span className="inline-flex items-center gap-2 type-data text-ink/60">
          <Lamp state="working" surface="light" />
          Scanning
        </span>
      </div>
    );
  }
  return (
    <div className="rounded-xl bg-snow p-4 text-ink shadow-card">
      <Draft text={deskCards.ask.draft} count={askDraftLength} actions={false} />
      <div className="mt-3 flex flex-wrap gap-2">
        <span className="inline-flex min-h-9 items-center rounded-lg border border-ink/15 px-3 font-body text-[13px] font-medium">
          Copy draft
        </span>
        <span className="inline-flex min-h-9 items-center rounded-lg bg-ink px-3 font-head text-[13px] font-semibold text-paper">
          Open on X
        </span>
      </div>
    </div>
  );
}
