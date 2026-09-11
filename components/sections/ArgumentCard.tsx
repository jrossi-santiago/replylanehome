import { GridBand } from "@/components/GridBand";
import { argument } from "@/content/site";

export function ArgumentCard() {
  return (
    <GridBand surface="paper">
      <p className="font-mono text-[13px] text-ink/55">{argument.label}</p>
      <h2 className="type-h2 mt-3 max-w-2xl text-ink">{argument.h2}</h2>
      <p className="mt-4 max-w-2xl font-body text-[16px] leading-[25px] text-ink/75 md:text-[17px] md:leading-[26px]">
        {argument.lead}
      </p>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {argument.cards.map((card) => (
          <div key={card.h3} className="rounded-xl bg-snow p-6 shadow-card md:p-8">
            <h3 className="type-h3 text-ink">{card.h3}</h3>
            <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75">{card.body}</p>
            {"quote" in card && card.quote ? (
              <p className="mt-4 font-body text-[16px] leading-[25px] text-ink">{card.quote}</p>
            ) : null}
            <p className="mt-4 font-body text-[16px] leading-[25px] font-medium text-ink">
              {card.sting}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 max-w-2xl space-y-4">
        {argument.close.map((p) => (
          <p key={p} className="font-body text-[16px] leading-[25px] text-ink/75">
            {p}
          </p>
        ))}
      </div>
    </GridBand>
  );
}
