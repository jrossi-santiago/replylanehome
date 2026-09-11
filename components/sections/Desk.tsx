import Image from "next/image";
import { DeskCard } from "@/components/DeskCard";
import { GridBand } from "@/components/GridBand";
import { Lamp } from "@/components/Lamp";
import { askDraftLength, desk, deskCards } from "@/content/site";

export function Desk() {
  return (
    <GridBand id={desk.id} surface="paper" padClass="pb-16 pt-8 md:pb-24 md:pt-10">
      <h2 className="type-h2 mx-auto max-w-3xl text-center text-ink">{desk.h2}</h2>

      <div className="relative mt-12 overflow-hidden md:mt-16">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 top-[40%] overflow-hidden"
          aria-hidden="true"
        >
          <Image
            src="/halftone/hero-lane.png"
            alt=""
            width={2400}
            height={900}
            priority
            className="h-full w-full object-cover object-top"
          />
        </div>

        <div className="relative mx-auto w-full max-w-[640px] pb-6">
          <div className="mb-4 rounded-xl bg-snow px-4 py-3 shadow-card">
            <div className="flex items-center justify-between gap-3">
              <span className="font-head text-[15px] font-semibold text-ink">{desk.title}</span>
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

          <div className="space-y-4">
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

          <p className="mt-6 text-center font-body text-[15px] text-ink/70">{desk.caption}</p>
        </div>
      </div>
    </GridBand>
  );
}
