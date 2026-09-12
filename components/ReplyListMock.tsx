import { DeskCard } from "@/components/DeskCard";
import { Lamp } from "@/components/Lamp";
import { askDraftLength, desk, deskCards } from "@/content/site";

type Props = {
  className?: string;
  lamp?: "working" | "done";
};

/** The reply list screen, drawn in code from the same cards as the live product. */
export function ReplyListMock({ className = "", lamp = "done" }: Props) {
  return (
    <div className={`rounded-xl bg-paper p-4 md:p-5 ${className}`}>
      <div className="rounded-lg bg-snow px-4 py-3 shadow-card">
        <div className="flex items-center justify-between gap-3">
          <span className="font-head text-[15px] font-semibold text-ink">
            {desk.title}
          </span>
          <span className="inline-flex items-center gap-2 type-data text-ink/60">
            <Lamp state={lamp} surface="light" />
            {desk.count}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1">
            {desk.tabs.map((tab, i) => (
              <span
                key={tab}
                className={
                  i === 0
                    ? "inline-flex items-center rounded-md bg-ink px-2.5 py-1 font-body text-[13px] font-medium text-paper"
                    : "inline-flex items-center rounded-md px-2.5 py-1 font-body text-[13px] text-ink/55"
                }
              >
                {tab}
              </span>
            ))}
          </div>
          <span className="inline-flex min-h-9 items-center rounded-lg bg-ink px-3 font-head text-[13px] font-semibold text-paper">
            {desk.scan}
          </span>
        </div>
      </div>

      <div className="mt-4 space-y-4">
        <DeskCard
          card={deskCards.ask}
          draftCount={askDraftLength}
          enterClass="hero-card-enter hero-card-enter-1"
        />
        <DeskCard
          card={deskCards.outage}
          enterClass="hero-card-enter hero-card-enter-2"
        />
        <DeskCard
          card={deskCards.changelog}
          enterClass="hero-card-enter hero-card-enter-3"
        />
      </div>
    </div>
  );
}
