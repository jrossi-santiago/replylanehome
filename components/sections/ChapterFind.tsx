import { DeskCard } from "@/components/DeskCard";
import { FeatureChapter, SubFeature } from "@/components/FeatureChapter";
import { Lamp } from "@/components/Lamp";
import { Section } from "@/components/Section";
import { chapterFind, deskCards, emptyDesk } from "@/content/site";

export function ChapterFind() {
  return (
    <Section id={chapterFind.id} surface="paper">
      <FeatureChapter
        icon={chapterFind.icon}
        h2={chapterFind.h2}
        lede={chapterFind.lede}
      >
        {chapterFind.subs.map((sub, i) => (
          <SubFeature
            key={sub.h3}
            h3={sub.h3}
            body={sub.body}
            points={[...sub.points]}
            reverse={i % 2 === 1}
            ruleTop={i > 0}
            illustration={<Illustration name={sub.illustration} />}
          />
        ))}
      </FeatureChapter>
    </Section>
  );
}

function Illustration({ name }: { name: string }) {
  if (name === "dcarrington") {
    return <DeskCard card={deskCards.dcarrington} forceClosed />;
  }
  if (name === "priyaships") {
    return <DeskCard card={deskCards.priyaships} forceClosed />;
  }
  return (
    <div className="rounded-xl bg-snow p-4 shadow-card">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="font-head text-[15px] font-semibold text-ink">Reply desk</span>
        <span className="inline-flex items-center gap-2 type-data text-ink/60">
          <Lamp state="done" surface="light" />
          {emptyDesk.status}
        </span>
      </div>
      <p className="font-body text-[16px] leading-[25px] text-ink/70">{emptyDesk.message}</p>
    </div>
  );
}
