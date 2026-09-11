import Image from "next/image";
import { GridBand } from "@/components/GridBand";
import { promise } from "@/content/site";

/** Split card: one big statement, one picture, one short paragraph. */
export function PlainPromise() {
  return (
    <GridBand surface="ink" padClass="py-14 md:py-20">
      <div className="overflow-hidden rounded-2xl bg-snow text-ink shadow-card">
        <div className="grid grid-cols-1 gap-8 p-7 md:grid-cols-12 md:gap-10 md:p-12">
          <div className="flex flex-col justify-between md:col-span-7">
            <h2 className="type-display text-ink">
              {promise.h2Lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-8 max-w-md font-body text-[16px] leading-[25px] text-ink/70 md:mt-12">
              {promise.body}
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-square w-full max-w-full overflow-hidden rounded-lg bg-paper">
              <Image
                src="/halftone/split-lane.png"
                alt=""
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 font-mono text-[13px] text-ink/55">{promise.caption}</p>
          </div>
        </div>
      </div>
    </GridBand>
  );
}
