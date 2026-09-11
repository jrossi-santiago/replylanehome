import Image from "next/image";
import { Button } from "@/components/Button";
import { DeskCard } from "@/components/DeskCard";
import { GridBand } from "@/components/GridBand";
import { Lamp } from "@/components/Lamp";
import { deskCards, hero, mayaDraftLength, urls } from "@/content/site";

export function Hero() {
  return (
    <GridBand surface="paper" ruleTop={false} padClass="pb-0 pt-14 md:pt-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-5 inline-flex items-center justify-center gap-2">
          <Lamp state="done" surface="light" />
          <span className="font-mono text-[13px] text-ink/70">{hero.eyebrow}</span>
        </p>
        <h1 className="type-display text-ink">
          {hero.h1Before}
          <span className="text-clay-deep">{hero.h1Accent}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl font-body text-[16px] leading-[25px] text-ink/70 md:text-[17px] md:leading-[26px]">
          {hero.subline}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href={urls.signup}>{hero.primary}</Button>
          <Button href="#desk" variant="secondary">
            {hero.secondary}
          </Button>
        </div>
        <p className="mt-4 font-body text-[15px] font-medium text-ink">{hero.trust}</p>
      </div>

      <div id="desk" className="relative mt-14 overflow-hidden md:mt-20">
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

        <div className="relative mx-auto w-full max-w-[640px] pb-10">
          <div className="mb-4 flex items-center justify-between gap-3 rounded-xl bg-snow px-4 py-3 shadow-card">
            <span className="font-head text-[15px] font-semibold text-ink">
              {hero.deskTitle}
            </span>
            <span className="inline-flex items-center gap-2 type-data text-ink/60">
              <Lamp state="done" surface="light" />
              {hero.deskStatus}
            </span>
          </div>

          <div className="space-y-4">
            <DeskCard
              card={deskCards.maya}
              draftCount={mayaDraftLength}
              enterClass="hero-card-enter hero-card-enter-1"
            />
            <DeskCard
              card={deskCards.dcarrington}
              enterClass="hero-card-enter hero-card-enter-2"
            />
            <div className="hidden sm:block">
              <DeskCard
                card={deskCards.priyaships}
                enterClass="hero-card-enter hero-card-enter-3"
              />
            </div>
          </div>

          <p className="mt-6 text-center font-body text-[15px] text-ink/70">
            {hero.closing}
          </p>
        </div>
      </div>
    </GridBand>
  );
}
