import { Section } from "@/components/Section";
import { WhyLine } from "@/components/WhyLine";
import { whyOnDesk } from "@/content/site";

/** Why a post is on the page, and what never gets there. */
export function WhyOnDesk() {
  return (
    <Section surface="paper">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <h2 className="type-h2 text-ink">{whyOnDesk.h2}</h2>
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75 md:text-[17px]">
            {whyOnDesk.lead}
          </p>
          <div className="mt-8 rounded-xl bg-snow p-5 shadow-card">
            <p className="mb-2 font-mono text-[13px] text-ink/55">{whyOnDesk.exampleLabel}</p>
            <WhyLine>{whyOnDesk.exampleWhy}</WhyLine>
          </div>
          <p className="mt-8 font-body text-[16px] leading-[25px] font-medium text-ink">
            {whyOnDesk.close}
          </p>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <div className="rounded-xl bg-snow p-6 shadow-card md:p-8">
            <h3 className="type-h3 text-ink">{whyOnDesk.filtersTitle}</h3>
            <p className="mt-3 font-body text-[15px] leading-[22px] text-ink/60">
              {whyOnDesk.filtersLead}
            </p>
            <ul className="mt-5">
              {whyOnDesk.cheapRules.map((rule, i) => (
                <li
                  key={rule}
                  className={`font-body text-[16px] leading-[25px] text-ink ${
                    i > 0 ? "mt-3 border-t border-ink/12 pt-3" : ""
                  }`}
                >
                  {rule}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 space-y-4 rounded-xl border border-ink/12 p-6 md:p-8">
            {whyOnDesk.asksBar.map((p) => (
              <p
                key={p}
                className="font-body text-[16px] leading-[25px] text-ink/75"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
