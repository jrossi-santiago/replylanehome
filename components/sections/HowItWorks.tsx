import { Icon } from "@/components/Icon";
import { Lamp } from "@/components/Lamp";
import { Section } from "@/components/Section";
import { deskCards, howItWorks, mayaDraftLength } from "@/content/site";
import { Draft } from "@/components/Draft";
import { briefDemo } from "@/content/site";

export function HowItWorks() {
  return (
    <Section id={howItWorks.id} surface="ink">
      <h2 className="type-h2 max-w-2xl text-paper">{howItWorks.h2}</h2>
      <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
        {howItWorks.steps.map((step) => (
          <div key={step.n}>
            <p className="font-mono text-[13px] text-paper/50">{step.n}</p>
            <Icon name={step.icon} size={24} className="mt-4 text-paper" />
            <h3 className="type-h3 mt-4 text-paper">{step.h3}</h3>
            <p className="mt-3 font-body text-[16px] leading-[25px] text-paper/70">
              {step.body}
            </p>
            <div className="mt-6">{illustration(step.n)}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function illustration(n: string) {
  if (n === "01") {
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
  if (n === "02") {
    return (
      <div className="flex items-center justify-between gap-3 rounded-xl bg-snow px-4 py-3 text-ink shadow-card">
        <span className="font-head text-[15px] font-semibold">Reply desk</span>
        <span className="inline-flex items-center gap-2 type-data text-ink/60">
          <Lamp state="working" surface="light" />
          Scanning
        </span>
      </div>
    );
  }
  return (
    <div className="rounded-xl bg-snow p-4 text-ink shadow-card">
      <Draft text={deskCards.maya.draft} count={mayaDraftLength} actions={false} />
      <div className="mt-3 flex gap-2">
        <span className="inline-flex min-h-9 items-center rounded-lg border border-ink/15 px-3 font-body text-[13px] font-medium">
          Copy
        </span>
        <span className="inline-flex min-h-9 items-center rounded-lg bg-ink px-3 font-head text-[13px] font-semibold text-paper">
          Reply on X
        </span>
      </div>
    </div>
  );
}
