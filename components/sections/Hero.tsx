import { Button } from "@/components/Button";
import { GridBand } from "@/components/GridBand";
import { Lamp } from "@/components/Lamp";
import { hero, urls } from "@/content/site";

export function Hero() {
  return (
    <GridBand surface="paper" ruleTop={false} padClass="pb-8 pt-14 md:pb-10 md:pt-20">
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
    </GridBand>
  );
}
