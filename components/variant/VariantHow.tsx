import Image from "next/image";
import { urls } from "@/content/site";
import { variant } from "@/content/variant";

export function VariantHow() {
  const { how } = variant;

  return (
    <section id={how.id} className="relative scroll-mt-24 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-[720px] text-center">
        <p className="type-eyebrow">{how.eyebrow}</p>
        <h2 className="type-h2 mt-4 text-paper md:mt-5">{how.h2}</h2>
      </div>

      <div className="mx-auto mt-12 flex max-w-[640px] flex-col items-center md:mt-16">
        {how.steps.map((step, i) => (
          <div key={step.n} className="flex w-full flex-col items-center">
            <article
              className="step-in surface-card w-full overflow-hidden"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="overflow-hidden bg-surface-2">
                <Image
                  src={step.shot}
                  alt={step.shotAlt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 640px) 100vw, 640px"
                  className="h-auto w-full"
                />
              </div>
              <div className="px-5 py-7 text-left md:px-7 md:py-8">
                <h3 className="type-h3 text-paper">
                  {step.n}. {step.h3}
                </h3>
                <p className="mt-4 font-body text-[15px] leading-[24px] text-muted md:text-[16px] md:leading-[25px]">
                  {step.body}
                </p>
              </div>
            </article>

            {i < how.steps.length - 1 ? (
              <p
                className="py-6 font-body text-[22px] text-paper/35"
                aria-hidden="true"
              >
                ↓
              </p>
            ) : null}
          </div>
        ))}

        <p className="py-4 font-body text-[22px] text-paper/35" aria-hidden="true">
          ↓
        </p>

        <div className="w-full max-w-md text-center">
          <a href={urls.signup} className="btn-primary w-full gap-2">
            {how.midCta.primary}
            <span aria-hidden="true">→</span>
          </a>
          <p className="mt-3 font-body text-[13px] text-paper/45">
            {how.midCta.trust}
          </p>
        </div>
      </div>
    </section>
  );
}
