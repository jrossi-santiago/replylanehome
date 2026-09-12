import Image from "next/image";
import { variant } from "@/content/variant";

export function VariantHow() {
  const { how } = variant;

  return (
    <section
      id={how.id}
      className="relative scroll-mt-24 bg-snow px-4 pb-8 pt-24 md:px-6 md:pb-12 md:pt-32"
    >
      <div className="mx-auto max-w-[720px] text-center">
        <p className="font-head text-[11px] font-semibold uppercase tracking-[0.18em] text-clay">
          {how.eyebrow}
        </p>
        <h2 className="type-variant-display mt-5 text-ink md:mt-6">
          {how.h2}
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-body text-[17px] leading-[26px] text-ink/60 md:mt-7 md:text-[19px] md:leading-[28px]">
          {how.lead}
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-[920px] space-y-24 md:mt-24 md:space-y-32">
        {how.steps.map((step, i) => (
          <article
            key={step.eyebrow}
            className="variant-step"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <div className="mx-auto max-w-[640px] text-center">
              <p className="font-head text-[11px] font-semibold uppercase tracking-[0.18em] text-clay">
                {step.eyebrow}
              </p>
              <h3 className="mt-4 font-serif text-[32px] leading-[1.15] tracking-[-0.02em] text-ink md:text-[44px] md:leading-[1.1]">
                {step.h3}
              </h3>
              <p className="mx-auto mt-5 max-w-lg font-body text-[16px] leading-[25px] text-ink/60 md:text-[17px] md:leading-[26px]">
                {step.body}
              </p>
            </div>

            <div className="relative mx-auto mt-10 max-w-[760px] md:mt-12">
              <div className="overflow-hidden rounded-[28px] bg-[#f3f1ec] shadow-[0_20px_60px_rgb(21_15_10/0.08)]">
                <Image
                  src={step.shot}
                  alt={step.shotAlt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 760px) 100vw, 760px"
                  className="h-auto w-full"
                />
              </div>
              <ul className="mt-5 flex flex-wrap justify-center gap-2 md:mt-6 md:gap-3">
                {step.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-ink/10 bg-snow px-3.5 py-1.5 font-body text-[12px] font-medium text-ink/70 md:text-[13px]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
