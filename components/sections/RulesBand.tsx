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
          <ul className="mt-8">
            {rules.items.map((item, i) => (
              <li
                key={item}
                className={`font-head text-[20px] font-semibold leading-[26px] tracking-[-0.015em] text-ink md:text-[22px] ${
                  i > 0 ? "mt-4 border-t border-ink/12 pt-4" : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 font-body text-[15px] leading-[22px] text-ink/65">{rules.foot}</p>
        </TextFrame>
      </div>
    </Section>
  );
}
