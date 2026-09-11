import { DeskCard } from "@/components/DeskCard";
import { GridBand } from "@/components/GridBand";
import { Lamp } from "@/components/Lamp";
import { askDraftLength, desk, deskCards } from "@/content/site";

/** The page itself, shown inside one card on a dark band. */
export function Desk() {
  return (
    <GridBand
      id={desk.id}
      surface="ink"
      padClass="pb-14 pt-14 md:pb-20 md:pt-20"
    >
      <div className="overflow-hidden rounded-2xl bg-snow text-ink shadow-card">
        <div className="grid grid-cols-1 gap-8 p-7 md:grid-cols-12 md:gap-10 md:p-12">
          <div className="md:col-span-5">
            <h2 className="type-h2 text-ink">{desk.h2}</h2>
            <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/70">
              {desk.lead}
            </p>
            <p className="mt-6 font-body text-[15px] leading-[22px] font-medium text-ink">
              {desk.caption}
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-xl bg-paper p-4 md:p-5">
              <div className="rounded-lg bg-snow px-4 py-3 shadow-card">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-head text-[15px] font-semibold text-ink">
                    {desk.title}
                  </span>
                  <span className="inline-flex items-center gap-2 type-data text-ink/60">
                    <Lamp state="done" surface="light" />
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
          </div>
        </div>
      </div>
    </GridBand>
  );
}
