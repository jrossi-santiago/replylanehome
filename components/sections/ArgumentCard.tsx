import Image from "next/image";
import { GridBand } from "@/components/GridBand";
import { argument } from "@/content/site";

export function ArgumentCard() {
  return (
    <GridBand surface="paper">
      <div className="overflow-hidden rounded-xl bg-snow shadow-card md:grid md:grid-cols-2">
        <div className="relative aspect-[16/10] md:hidden">
          <Halftone />
        </div>
        <div className="flex flex-col justify-between gap-10 p-8 md:p-12">
          <h2 className="type-h2 text-ink">{argument.h2}</h2>
          <p className="font-body text-[16px] leading-[25px] text-ink/75">{argument.body}</p>
        </div>
        <div className="relative hidden min-h-[320px] md:block">
          <Halftone />
        </div>
      </div>
    </GridBand>
  );
}

function Halftone() {
  return (
    <Image
      src="/halftone/split-lane.png"
      alt=""
      fill
      className="object-cover"
      aria-hidden="true"
      sizes="(max-width: 768px) 100vw, 600px"
    />
  );
}
