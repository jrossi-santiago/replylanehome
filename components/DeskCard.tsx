import { Draft } from "./Draft";
import { WhyLine } from "./WhyLine";

export type DeskCardData = {
  kind: "ask" | "room";
  label: string;
  age: string;
  replies: string;
  followers?: string;
  why: string;
  post: string;
  draft?: string;
  open?: boolean;
  actions?: readonly string[];
};

type Props = {
  card: DeskCardData;
  showWhy?: boolean;
  forceOpen?: boolean;
  forceClosed?: boolean;
  draftOnly?: boolean;
  enterClass?: string;
  className?: string;
  draftCount?: number;
};

export function DeskCard({
  card,
  showWhy = true,
  forceOpen,
  forceClosed,
  draftOnly,
  enterClass = "",
  className = "",
  draftCount,
}: Props) {
  const open = forceClosed ? false : (forceOpen ?? card.open);
  const count = draftCount ?? (card.draft ? card.draft.length : 0);

  if (draftOnly && card.draft) {
    return (
      <div className={`rounded-xl bg-snow p-4 shadow-card ${enterClass} ${className}`}>
        <Draft text={card.draft} count={count} />
      </div>
    );
  }

  const meta = [card.age, card.replies, card.followers].filter(Boolean).join(" · ");

  return (
    <article className={`${enterClass} ${className}`}>
      {showWhy ? <WhyLine>{card.why}</WhyLine> : null}
      <div className="rounded-xl bg-snow p-4 shadow-card">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className={
              card.kind === "ask"
                ? "inline-flex items-center rounded-md bg-ink px-2 py-0.5 font-mono text-[12px] text-paper"
                : "inline-flex items-center rounded-md border border-ink/15 px-2 py-0.5 font-mono text-[12px] text-ink/70"
            }
          >
            {card.label}
          </span>
          <span className="type-data text-ink/45">{meta}</span>
        </div>
        <p className="font-body text-[15px] leading-[22px] text-ink">{card.post}</p>
        {open && card.draft ? (
          <div className="mt-3">
            <Draft text={card.draft} count={count} actions={false} />
            {card.actions && card.actions.length > 0 ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {card.actions.map((action) => {
                  const primary = action === "Open on X";
                  return (
                    <span
                      key={action}
                      className={
                        primary
                          ? "inline-flex min-h-9 items-center rounded-lg bg-ink px-3 font-head text-[13px] font-semibold text-paper"
                          : "inline-flex min-h-9 items-center rounded-lg border border-ink/15 px-3 font-body text-[13px] font-medium text-ink"
                      }
                    >
                      {action}
                    </span>
                  );
                })}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
