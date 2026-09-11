import type { ReactNode } from "react";
import { GridBand } from "@/components/GridBand";
import { follow } from "@/content/site";

/** The accounts you follow: the quiet list, the weekly five, adding, topic rooms. */
export function Follow() {
  return (
    <GridBand id={follow.id} surface="paper">
      <div className="max-w-2xl">
        <p className="font-mono text-[13px] text-ink/55">{follow.label}</p>
        <h2 className="type-h2 mt-3 text-ink">{follow.h2}</h2>
        <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/70 md:text-[17px]">
          {follow.lead}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
        <Card
          title={follow.neglect.title}
          heading={follow.neglect.heading}
          className="md:col-span-2"
        >
          <p className="mt-4 max-w-2xl font-body text-[16px] leading-[25px] text-ink/75">
            {follow.neglect.lead}
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {follow.neglect.items.map((item) => (
              <li key={item.name} className="border-t border-ink/12 pt-4">
                <p className="font-body text-[16px] font-bold leading-[25px] text-ink">
                  {item.name}
                </p>
                <p className="mt-1 font-body text-[16px] leading-[25px] text-ink/75">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-[13px] text-ink/55">
            {follow.neglect.foot}
          </p>
        </Card>

        <Card
          title={follow.weeklyFive.title}
          pro={follow.weeklyFive.pro}
          heading={follow.weeklyFive.heading}
        >
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75">
            {follow.weeklyFive.body}
          </p>
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/70 italic">
            {follow.weeklyFive.analogy}
          </p>
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75">
            {follow.weeklyFive.bar}
          </p>
          <p className="mt-auto pt-6 font-mono text-[13px] text-ink/55">
            {follow.weeklyFive.reject}
          </p>
        </Card>

        <Card
          title={follow.channels.title}
          pro={follow.channels.pro}
          heading={follow.channels.heading}
        >
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75">
            {follow.channels.body}
          </p>
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75">
            {follow.channels.analogy}
          </p>
          <p className="mt-auto pt-6 font-mono text-[13px] text-ink/55">
            {follow.channels.roomsLabel}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {follow.channels.rooms.map((room) => (
              <li
                key={room}
                className="inline-flex items-center rounded-md border border-ink/15 px-2.5 py-1 font-body text-[13px] text-ink"
              >
                {room}
              </li>
            ))}
          </ul>
        </Card>

        <Card heading={follow.finding.title} className="md:col-span-2">
          <p className="mt-4 max-w-3xl font-body text-[16px] leading-[25px] text-ink/75">
            {follow.finding.body}
          </p>
        </Card>
      </div>

      <p className="mt-10 font-body text-[16px] leading-[25px] font-medium text-ink">
        {follow.close}
      </p>
    </GridBand>
  );
}

function Card({
  title,
  pro,
  heading,
  children,
  className = "",
}: {
  title?: string;
  pro?: boolean;
  heading: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col rounded-xl bg-snow p-6 shadow-card md:p-8 ${className}`}
    >
      {title ? (
        <p className="font-mono text-[13px] text-ink/55">
          {title}
          {pro ? (
            <span className="ml-2 font-mono text-[12px] tracking-normal text-clay-deep">
              Pro
            </span>
          ) : null}
        </p>
      ) : null}
      <h3 className={`type-h3 text-ink ${title ? "mt-2" : ""}`}>{heading}</h3>
      {children}
    </div>
  );
}
