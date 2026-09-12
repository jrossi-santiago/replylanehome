import { GridBand } from "@/components/GridBand";
import { ReplyListMock } from "@/components/ReplyListMock";
import { desk } from "@/content/site";

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
            <ReplyListMock />
          </div>
        </div>
      </div>
    </GridBand>
  );
}
