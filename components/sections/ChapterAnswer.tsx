import { DeskCard } from "@/components/DeskCard";
import { FeatureChapter, SubFeature } from "@/components/FeatureChapter";
import { Icon } from "@/components/Icon";
import { Section } from "@/components/Section";
import { chapterAnswer, deskCards, mayaDraftLength } from "@/content/site";

export function ChapterAnswer() {
  return (
    <Section surface="paper">
      <FeatureChapter
        icon={chapterAnswer.icon}
        h2={chapterAnswer.h2}
        lede={chapterAnswer.lede}
      >
        {chapterAnswer.subs.map((sub, i) => (
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
  if (name === "maya-collapsed") {
    return <DeskCard card={deskCards.maya} forceClosed />;
  }
  if (name === "maya-draft") {
    return (
      <DeskCard
        card={deskCards.maya}
        draftOnly
        draftCount={mayaDraftLength}
        showWhy={false}
      />
    );
  }
  return (
    <div className="rounded-xl bg-snow p-4 shadow-card">
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex min-h-10 items-center rounded-lg bg-ink px-4 font-head text-[14px] font-semibold text-paper">
          Reply on X
        </span>
        <span className="inline-flex items-center gap-2 font-body text-[14px] text-ink/70">
          <Icon name="never_posts" size={20} />
          We never post as you.
        </span>
      </div>
    </div>
  );
}
