import { Section } from "@/components/Section";
import { WhyLine } from "@/components/WhyLine";
import { whyOnDesk } from "@/content/site";

export function WhyOnDesk() {
  return (
    <Section surface="paper">
      <h2 className="type-h2 max-w-2xl text-ink">{whyOnDesk.h2}</h2>
      <p className="mt-4 max-w-2xl font-body text-[16px] leading-[25px] text-ink/75 md:text-[17px]">
        {whyOnDesk.lead}
      </p>
      <div className="mt-8 max-w-xl">
        <WhyLine>{whyOnDesk.exampleWhy}</WhyLine>
      </div>
      <h3 className="type-h3 mt-12 text-ink">{whyOnDesk.filtersTitle}</h3>
      <p className="mt-4 max-w-2xl font-body text-[16px] leading-[25px] text-ink/75">
        {whyOnDesk.filtersLead}
      </p>
      <ul className="mt-6 max-w-2xl list-disc space-y-2 pl-5">
        {whyOnDesk.cheapRules.map((rule) => (
          <li key={rule} className="font-body text-[16px] leading-[25px] text-ink">
            {rule}
          </li>
        ))}
      </ul>
      <div className="mt-8 max-w-2xl space-y-4">
        {whyOnDesk.asksBar.map((p) => (
          <p key={p} className="font-body text-[16px] leading-[25px] text-ink/75">
            {p}
          </p>
        ))}
      </div>
      <p className="mt-8 max-w-2xl font-body text-[16px] leading-[25px] font-medium text-ink">
        {whyOnDesk.close}
      </p>
    </Section>
  );
}
