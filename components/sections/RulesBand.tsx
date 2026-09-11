import { Icon } from "@/components/Icon";
import { Section } from "@/components/Section";
import { TextFrame } from "@/components/TextFrame";
import { rules } from "@/content/site";

export function RulesBand() {
  return (
    <Section surface="ink" padClass="pb-8 pt-16 md:pb-10 md:pt-24">
      <div className="mx-auto max-w-[720px]">
        <TextFrame
          sentence={rules.frame}
          tone="snow"
          className="rounded-xl bg-snow text-ink shadow-card"
        >
          <Icon name="never_posts" size={28} className="text-ink" />
          <h2 className="type-h2 mt-4 text-ink">{rules.h2}</h2>
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/70">{rules.lead}</p>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
            <RuleList title={rules.neverTitle} items={rules.never} />
            <RuleList title={rules.alwaysTitle} items={rules.always} />
          </div>
          <p className="mt-8 font-body text-[16px] leading-[25px] font-medium text-ink">
            {rules.close}
          </p>
        </TextFrame>
      </div>
    </Section>
  );
}

function RuleList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div>
      <h3 className="type-h3 text-ink">{title}</h3>
      <ul className="mt-4">
        {items.map((item, i) => (
          <li
            key={item}
            className={`font-body text-[16px] leading-[25px] text-ink ${
              i > 0 ? "mt-3 border-t border-ink/12 pt-3" : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
