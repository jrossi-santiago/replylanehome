import { Icon } from "@/components/Icon";
import { Section } from "@/components/Section";
import { rules } from "@/content/site";

/** One statement, set big, then the two lists behind it. */
export function RulesBand() {
  return (
    <Section surface="ink">
      <div className="mx-auto max-w-[880px]">
        <Icon name="never_posts" size={28} className="text-clay" />
        <h2 className="mt-6 font-head text-[44px] font-extrabold leading-[0.98] tracking-[-0.035em] text-paper sm:text-[64px] md:text-[84px]">
          <span className="block">{rules.h2Lines[0]}</span>
          <span className="block text-clay">{rules.h2Lines[1]}</span>
          <span className="block">{rules.h2Lines[2]}</span>
        </h2>
        <p className="mt-8 max-w-xl font-body text-[16px] leading-[25px] text-paper/70 md:text-[17px] md:leading-[26px]">
          {rules.lead}
        </p>
        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-paper/15 pt-10 sm:grid-cols-2">
          <RuleList title={rules.neverTitle} items={rules.never} />
          <RuleList title={rules.alwaysTitle} items={rules.always} />
        </div>
        <p className="mt-10 font-body text-[16px] leading-[25px] font-medium text-paper">
          {rules.close}
        </p>
      </div>
    </Section>
  );
}

function RuleList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div>
      <h3 className="type-h3 text-paper">{title}</h3>
      <ul className="mt-4">
        {items.map((item, i) => (
          <li
            key={item}
            className={`font-body text-[16px] leading-[25px] text-paper/80 ${
              i > 0 ? "mt-3 border-t border-paper/12 pt-3" : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
