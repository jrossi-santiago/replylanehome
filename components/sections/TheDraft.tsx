import { Draft } from "@/components/Draft";
import { Section } from "@/components/Section";
import { askDraftLength, roomDraftLength, theDraft } from "@/content/site";

export function TheDraft() {
  const { ask, room } = theDraft.compare;
  return (
    <Section surface="paper" ruleTop={true}>
      <h2 className="type-h2 max-w-2xl text-ink">{theDraft.h2}</h2>
      <p className="mt-4 max-w-2xl font-body text-[16px] leading-[25px] text-ink/75 md:text-[17px]">
        {theDraft.lead}
      </p>
      <p className="mt-10 font-mono text-[13px] text-ink/55">{theDraft.rulesTitle}</p>
      <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5">
        {theDraft.rules.map((rule) => (
          <li key={rule} className="font-body text-[16px] leading-[25px] text-ink">
            {rule}
          </li>
        ))}
      </ul>
      <h3 className="type-h3 mt-12 text-ink">{theDraft.compareTitle}</h3>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <CompareColumn
          label={ask.label}
          post={ask.post}
          draft={ask.draft}
          count={askDraftLength}
          note={ask.note}
        />
        <CompareColumn
          label={room.label}
          post={room.post}
          draft={room.draft}
          count={roomDraftLength}
          note={room.note}
        />
      </div>
      <p className="mt-10 font-body text-[16px] leading-[25px] font-medium text-ink">
        {theDraft.close}
      </p>
      <p className="mt-3 font-body text-[15px] leading-[22px] text-ink/60">{theDraft.planNote}</p>
    </Section>
  );
}

function CompareColumn({
  label,
  post,
  draft,
  count,
  note,
}: {
  label: string;
  post: string;
  draft: string;
  count: number;
  note: string;
}) {
  return (
    <div className="rounded-xl bg-snow p-5 shadow-card md:p-6">
      <p className="font-mono text-[13px] text-ink/55">{label}</p>
      <p className="mt-3 font-body text-[15px] leading-[22px] text-ink/70 italic">{post}</p>
      <div className="mt-4">
        <Draft text={draft} count={count} actions={false} />
      </div>
      <p className="mt-4 font-body text-[15px] leading-[22px] text-ink/70">{note}</p>
    </div>
  );
}
