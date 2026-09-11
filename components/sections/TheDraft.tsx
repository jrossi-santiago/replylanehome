import { Draft } from "@/components/Draft";
import { Section } from "@/components/Section";
import { askDraftLength, roomDraftLength, theDraft } from "@/content/site";

export function TheDraft() {
  const { ask, room } = theDraft.compare;
  return (
    <Section surface="paper">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <h2 className="type-h2 text-ink">{theDraft.h2}</h2>
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75 md:text-[17px]">
            {theDraft.lead}
          </p>
          <p className="mt-8 font-body text-[16px] leading-[25px] font-medium text-ink">
            {theDraft.close}
          </p>
          <p className="mt-3 font-body text-[15px] leading-[22px] text-ink/60">
            {theDraft.planNote}
          </p>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <div className="rounded-xl bg-snow p-6 shadow-card md:p-8">
            <p className="font-mono text-[13px] text-ink/55">
              {theDraft.rulesTitle}
            </p>
            <ul className="mt-4">
              {theDraft.rules.map((rule, i) => (
                <li
                  key={rule}
                  className={`font-body text-[16px] leading-[25px] text-ink ${
                    i > 0 ? "mt-3 border-t border-ink/12 pt-3" : ""
                  }`}
                >
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <h3 className="type-h3 mt-14 text-ink md:mt-16">
        {theDraft.compareTitle}
      </h3>
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
      <p className="mt-3 font-body text-[15px] leading-[22px] text-ink/70 italic">
        {post}
      </p>
      <div className="mt-4">
        <Draft text={draft} count={count} actions={false} />
      </div>
      <p className="mt-4 font-body text-[15px] leading-[22px] text-ink/70">
        {note}
      </p>
    </div>
  );
}
