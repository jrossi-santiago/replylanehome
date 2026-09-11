import { Icon } from "@/components/Icon";
import { Section } from "@/components/Section";
import { twoKinds } from "@/content/site";

export function TwoKinds() {
  return (
    <Section surface="paper">
      <h2 className="type-h2 max-w-2xl text-ink">{twoKinds.h2}</h2>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {twoKinds.lanes.map((lane) => (
          <div key={lane.name} className="rounded-xl bg-snow p-6 shadow-card md:p-8">
            <Icon
              name={lane.name === "Asks" ? "ask" : "room"}
              size={24}
              className="text-ink"
            />
            <h3 className="type-h3 mt-4 text-ink">{lane.heading}</h3>
            <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75">{lane.body}</p>
            <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/70 italic">
              {lane.analogy}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-8 max-w-2xl font-body text-[16px] leading-[25px] text-ink/75">
        {twoKinds.footnote}
      </p>
      <p className="mt-4 max-w-2xl font-body text-[16px] leading-[25px] text-ink/75">
        {twoKinds.saved}
      </p>
    </Section>
  );
}
