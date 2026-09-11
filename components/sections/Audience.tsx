import { Icon } from "@/components/Icon";
import { Section } from "@/components/Section";
import { audience } from "@/content/site";

export function Audience() {
  return (
    <Section surface="paper">
      <h2 className="type-h2 text-ink">{audience.h2}</h2>
      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-0">
        <div className="md:pr-10">
          <h3 className="type-h3 text-ink">{audience.forTitle}</h3>
          <ul className="mt-6 space-y-4">
            {audience.forLines.map((line) => (
              <li key={line} className="flex gap-3">
                <Icon name="check" size={20} className="mt-0.5 shrink-0 text-ink" />
                <span className="font-body text-[16px] leading-[25px] text-ink">{line}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-ink/12 pt-10 md:border-t-0 md:border-l md:pt-0 md:pl-10">
          <h3 className="type-h3 text-ink">{audience.notTitle}</h3>
          <ul className="mt-6 space-y-4">
            {audience.notLines.map((line) => (
              <li key={line} className="flex gap-3">
                <Icon name="not_this" size={20} className="mt-0.5 shrink-0 text-ink" />
                <span className="font-body text-[16px] leading-[25px] text-ink">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
