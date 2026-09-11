import { Icon } from "@/components/Icon";
import { Section } from "@/components/Section";
import { lists } from "@/content/site";

/** Three numbered rows: the whole product, one line each. */
export function Lists() {
  return (
    <Section surface="paper">
      <h2 className="type-h2 max-w-2xl text-ink">{lists.h2}</h2>
      <p className="mt-4 max-w-2xl font-body text-[16px] leading-[25px] text-ink/70 md:text-[17px]">
        {lists.lead}
      </p>
      <ul className="mt-10 md:mt-14">
        {lists.rows.map((row) => (
          <li
            key={row.n}
            className="grid grid-cols-1 items-start gap-4 border-t border-ink/12 py-8 md:grid-cols-12 md:gap-6 md:py-10"
          >
            <p className="font-head text-[22px] font-extrabold leading-none tracking-[-0.02em] text-clay-deep md:col-span-1">
              {row.n}
            </p>
            <div className="md:col-span-6">
              <h3 className="type-h3 text-ink">{row.title}</h3>
              <p className="mt-2 font-mono text-[13px] text-ink/50">
                {row.appLabel}
              </p>
            </div>
            <div className="md:col-span-4">
              <p className="font-body text-[16px] leading-[25px] text-ink/75">
                {row.body}
              </p>
            </div>
            <div className="md:col-span-1 md:justify-self-end">
              <Icon name={row.icon} size={28} className="text-ink/70" />
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-2xl border-t border-ink/12 pt-8 font-body text-[16px] leading-[25px] font-medium text-ink">
        {lists.foot}
      </p>
    </Section>
  );
}
