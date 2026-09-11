import { GridBand } from "@/components/GridBand";
import { follow } from "@/content/site";

export function Follow() {
  return (
    <GridBand id={follow.id} surface="paper">
      <p className="font-mono text-[13px] text-ink/55">{follow.label}</p>
      <h2 className="type-h2 mt-3 max-w-2xl text-ink">{follow.h2}</h2>
      <p className="mt-4 max-w-2xl font-body text-[16px] leading-[25px] text-ink/70 md:text-[17px]">
        {follow.lead}
      </p>

      <div className="mt-12 space-y-6 md:mt-16">
        <div className="rounded-xl bg-snow p-6 text-ink shadow-card md:p-8">
          <p className="font-mono text-[13px] text-ink/55">{follow.neglect.title}</p>
          <h3 className="type-h3 mt-2 text-ink">{follow.neglect.heading}</h3>
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75">
            {follow.neglect.lead}
          </p>
          <ul className="mt-6 space-y-4">
            {follow.neglect.items.map((item) => (
              <li key={item.name}>
                <p className="font-body text-[16px] font-bold leading-[25px] text-ink">
                  {item.name}
                </p>
                <p className="mt-1 font-body text-[16px] leading-[25px] text-ink/75">{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-body text-[15px] leading-[22px] text-ink/60">
            {follow.neglect.foot}
          </p>
        </div>

        <div className="rounded-xl bg-snow p-6 text-ink shadow-card md:p-8">
          <p className="font-mono text-[13px] text-ink/55">
            {follow.weeklyFive.title}
            {follow.weeklyFive.pro ? <ProMark /> : null}
          </p>
          <h3 className="type-h3 mt-2 text-ink">{follow.weeklyFive.heading}</h3>
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75">
            {follow.weeklyFive.body}
          </p>
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/70 italic">
            {follow.weeklyFive.analogy}
          </p>
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75">
            {follow.weeklyFive.bar}
          </p>
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75">
            {follow.weeklyFive.reject}
          </p>
        </div>

        <div className="rounded-xl bg-snow p-6 text-ink shadow-card md:p-8">
          <h3 className="type-h3 text-ink">{follow.finding.title}</h3>
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75">
            {follow.finding.body}
          </p>
        </div>

        <div className="rounded-xl bg-snow p-6 text-ink shadow-card md:p-8">
          <p className="font-mono text-[13px] text-ink/55">
            {follow.channels.title}
            {follow.channels.pro ? <ProMark /> : null}
          </p>
          <h3 className="type-h3 mt-2 text-ink">{follow.channels.heading}</h3>
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75">
            {follow.channels.body}
          </p>
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75">
            {follow.channels.analogy}
          </p>
          <p className="mt-6 font-mono text-[13px] text-ink/55">{follow.channels.roomsLabel}</p>
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
        </div>
      </div>

      <p className="mt-10 font-body text-[16px] leading-[25px] font-medium text-ink">
        {follow.close}
      </p>
    </GridBand>
  );
}

function ProMark() {
  return <span className="ml-2 font-mono text-[12px] tracking-normal text-ink/50">Pro</span>;
}
