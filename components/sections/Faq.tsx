import { Section } from "@/components/Section";
import { faq } from "@/content/site";

export function Faq() {
  return (
    <Section surface="paper">
      <h2 className="type-h2 text-ink">{faq.h2}</h2>
      <dl className="mt-12 max-w-2xl divide-y divide-ink/12">
        {faq.items.map((item, i) => (
          <div key={item.q} className={i === 0 ? "pb-6" : "py-6"}>
            <dt className="font-head text-[18px] font-semibold leading-[24px] text-ink">
              {item.q}
            </dt>
            <dd className="mt-2 font-body text-[16px] leading-[25px] text-ink/75">{item.a}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
