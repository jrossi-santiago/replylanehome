import { DeskCard } from "@/components/DeskCard";
import { FeatureChapter, SubFeature } from "@/components/FeatureChapter";
import { GridBand } from "@/components/GridBand";
import { digestPreview, chapterOps, savedEmpty } from "@/content/site";

export function ChapterOps() {
  return (
    <GridBand surface="ink">
      <FeatureChapter
        icon={chapterOps.icon}
        h2={chapterOps.h2}
        lede={chapterOps.lede}
        surface="ink"
      >
        {chapterOps.subs.map((sub, i) => (
          <SubFeature
            key={sub.h3}
            h3={sub.h3}
            body={sub.body}
            points={[...sub.points]}
            reverse={i % 2 === 1}
            ruleTop={i > 0}
            pro={sub.pro}
            surface="ink"
            illustration={<Illustration name={sub.illustration} />}
          />
        ))}
      </FeatureChapter>
    </GridBand>
  );
}

function Illustration({ name }: { name: string }) {
  if (name === "saved-empty") {
    return (
      <div className="rounded-xl bg-snow p-5 text-ink shadow-card">
        <p className="font-body text-[16px] leading-[25px] text-ink/70">{savedEmpty}</p>
      </div>
    );
  }
  if (name === "channel") {
    return (
      <div className="rounded-xl bg-snow p-5 text-ink shadow-card">
        <p className="font-head text-[16px] font-semibold">Launch week</p>
        <p className="mt-2 type-data text-ink/50">Channel</p>
      </div>
    );
  }
  return (
    <div className="rounded-xl bg-snow p-5 text-ink shadow-card">
      <p className="type-data text-ink/50">From</p>
      <p className="font-body text-[15px] font-medium">{digestPreview.from}</p>
      <p className="mt-3 type-data text-ink/50">Subject</p>
      <p className="font-body text-[15px] font-medium">{digestPreview.subject}</p>
      <ul className="mt-4 space-y-2 border-t border-ink/10 pt-4">
        {digestPreview.lines.map((line) => (
          <li key={line} className="type-why">
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}
