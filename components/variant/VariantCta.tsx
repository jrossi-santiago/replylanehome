import { urls } from "@/content/site";
import { variant } from "@/content/variant";

export function VariantCta() {
  const { cta } = variant;

  return (
    <section className="relative overflow-hidden px-4 py-20 md:px-6 md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 100%, rgb(215 108 64 / 0.18), transparent 60%), radial-gradient(ellipse 50% 50% at 80% 0%, rgb(200 171 249 / 0.1), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-[640px] text-center">
        <h2 className="type-h2 text-paper">{cta.h2}</h2>
        <p className="mx-auto mt-5 max-w-lg font-body text-[16px] leading-[25px] text-muted md:mt-6 md:text-[18px] md:leading-[28px]">
          {cta.body}
        </p>
        <div className="mx-auto mt-8 max-w-md md:mt-10">
          <a href={urls.signup} className="btn-primary w-full gap-2">
            {cta.primary}
            <span aria-hidden="true">→</span>
          </a>
          <p className="mt-3 font-body text-[13px] text-paper/45 md:text-[14px]">
            {cta.trust}
          </p>
        </div>
      </div>
    </section>
  );
}
