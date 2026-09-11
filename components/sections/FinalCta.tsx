import Image from "next/image";
import { Button } from "@/components/Button";
import { GridBand } from "@/components/GridBand";
import { TextFrame } from "@/components/TextFrame";
import { finalCta, urls } from "@/content/site";

export function FinalCta() {
  return (
    <GridBand surface="ink" className="overflow-hidden" padClass="relative py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] opacity-90"
        aria-hidden="true"
      >
        <Image
          src="/halftone/hero-lane-invert.png"
          alt=""
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      <div className="relative mx-auto max-w-[720px]">
        <TextFrame
          sentence={finalCta.frame}
          tone="snow"
          className="rounded-xl bg-snow text-ink shadow-card"
        >
          <h2 className="type-h2 text-ink">{finalCta.h2}</h2>
          <p className="mt-4 font-body text-[16px] leading-[25px] text-ink/70">
            {finalCta.body}
          </p>
          <div className="mt-8">
            <Button href={urls.signup}>{finalCta.primary}</Button>
          </div>
          <p className="mt-4 font-body text-[15px] font-medium text-ink">{finalCta.trust}</p>
        </TextFrame>
      </div>
    </GridBand>
  );
}
