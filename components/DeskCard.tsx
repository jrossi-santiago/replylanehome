import { Draft } from "./Draft";
import { WhyLine } from "./WhyLine";

export type DeskCardData = {
  kind: "ask" | "window";
  label: string;
  handle: string;
  initial: string;
  age: string;
  why: string;
  post: string;
  draft?: string;
  open?: boolean;
};

type Props = {
  card: DeskCardData;
  showWhy?: boolean;
  forceOpen?: boolean;
  forceClosed?: boolean;
  draftOnly?: boolean;
  actionsBar?: boolean;
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
  actionsBar,
  enterClass = "",
  className = "",
  draftCount,
}: Props) {
  const open = forceClosed ? false : forceOpen ?? card.open;
  const count = draftCount ?? (card.draft ? card.draft.length : 0);

  if (draftOnly && card.draft) {
    return (
      <div className={`rounded-xl bg-snow p-4 shadow-card ${enterClass} ${className}`}>
        <Draft text={card.draft} count={count} />
      </div>
    );
  }

  if (actionsBar) {
    return (
      <div className={`rounded-xl bg-snow p-4 shadow-card ${enterClass} ${className}`}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex min-h-10 items-center rounded-lg bg-ink px-4 font-head text-[14px] font-semibold text-paper">
            Reply on X
          </span>
          <span className="font-body text-[14px] text-ink/70">We never post as you.</span>
        </div>
      </div>
    );
  }

  return (
    <article className={`${enterClass} ${className}`}>
      {showWhy ? <WhyLine>{card.why}</WhyLine> : null}
      <div className="rounded-xl bg-snow p-4 shadow-card">
        <div className="mb-3 flex items-center gap-2">
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-paper font-head text-[13px] font-semibold text-ink"
          >
            {card.initial}
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <span className="font-body text-[14px] font-medium text-ink">@{card.handle}</span>
              <span className="type-data text-ink/45">{card.age}</span>
            </div>
            <span className="type-data text-ink/55">{card.label}</span>
          </div>
        </div>
        <p className="font-body text-[15px] leading-[22px] text-ink">{card.post}</p>
        {open && card.draft ? (
          <div className="mt-3">
            <Draft text={card.draft} count={count} />
            <div className="mt-3">
              <span className="inline-flex min-h-10 items-center rounded-lg bg-ink px-4 font-head text-[14px] font-semibold text-paper">
                Reply on X
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}
