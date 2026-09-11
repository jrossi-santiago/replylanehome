import { GridBand } from "@/components/GridBand";
import { circle } from "@/content/site";

export function Circle() {
  return (
    <GridBand id={circle.id} surface="ink">
      <p className="font-mono text-[13px] text-paper/50">{circle.label}</p>
      <h2 className="type-h2 mt-3 max-w-2xl text-paper">{circle.h2}</h2>
      <p className="mt-4 max-w-2xl font-body text-[16px] leading-[25px] text-paper/70 md:text-[17px]">
        {circle.lead}
      </p>

      <div className="mt-12 space-y-6 md:mt-16">
        <div className="rounded-xl bg-snow p-6 text-ink shadow-card md:p-8">
          <p className="font-mono text-[13px] text-ink/55">{circle.neglect.title}</p>
          <h3 className="type-h3 mt-2 text-ink">{circle.neglect.heading}</h3>
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75">
            {circle.neglect.lead}
          </p>
          <ul className="mt-6 space-y-4">
            {circle.neglect.items.map((item) => (
              <li key={item.name}>
                <p className="font-body text-[16px] font-bold leading-[25px] text-ink">
                  {item.name}
                </p>
                <p className="mt-1 font-body text-[16px] leading-[25px] text-ink/75">{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-body text-[15px] leading-[22px] text-ink/60">
            {circle.neglect.foot}
          </p>
        </div>

        <div className="rounded-xl bg-snow p-6 text-ink shadow-card md:p-8">
          <p className="font-mono text-[13px] text-ink/55">
            {circle.weeklyFive.title}
            {circle.weeklyFive.pro ? <ProMark /> : null}
          </p>
          <h3 className="type-h3 mt-2 text-ink">{circle.weeklyFive.heading}</h3>
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75">
            {circle.weeklyFive.body}
          </p>
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/70 italic">
            {circle.weeklyFive.analogy}
          </p>
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75">
            {circle.weeklyFive.bar}
          </p>
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75">
            {circle.weeklyFive.reject}
          </p>
        </div>

        <div className="rounded-xl bg-snow p-6 text-ink shadow-card md:p-8">
          <h3 className="type-h3 text-ink">{circle.finding.title}</h3>
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75">
            {circle.finding.body}
          </p>
        </div>

        <div className="rounded-xl bg-snow p-6 text-ink shadow-card md:p-8">
          <p className="font-mono text-[13px] text-ink/55">
            {circle.channels.title}
            {circle.channels.pro ? <ProMark /> : null}
          </p>
          <h3 className="type-h3 mt-2 text-ink">{circle.channels.heading}</h3>
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75">
            {circle.channels.body}
          </p>
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/75">
            {circle.channels.analogy}
          </p>
          <p className="mt-6 font-mono text-[13px] text-ink/55">{circle.channels.roomsLabel}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {circle.channels.rooms.map((room) => (
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

      <p className="mt-10 font-body text-[16px] leading-[25px] text-paper">
        {circle.close}
      </p>
    </GridBand>
  );
}

function ProMark() {
  return <span className="ml-2 font-mono text-[12px] tracking-normal text-ink/50">Pro</span>;
}
