import { variant } from "@/content/variant";

export function VariantFaq() {
  const { faq } = variant;

  return (
    <section className="relative bg-snow px-4 pb-20 pt-8 md:px-6 md:pb-28 md:pt-12">
      <div className="mx-auto max-w-[720px]">
        <div className="text-center">
          <p className="font-head text-[11px] font-semibold uppercase tracking-[0.18em] text-clay">
            {faq.eyebrow}
          </p>
          <h2 className="mt-5 font-serif text-[36px] leading-[1.1] tracking-[-0.03em] text-ink md:text-[52px] md:leading-[1.06]">
            {faq.h2}
          </h2>
        </div>

        <dl className="mt-14 md:mt-16">
          {faq.items.map((item, i) => (
            <div
              key={item.q}
              className={
                i === 0
                  ? "pb-8 md:pb-10"
                  : "border-t border-ink/10 py-8 md:py-10"
              }
            >
              <dt className="font-serif text-[24px] leading-[1.25] tracking-[-0.02em] text-ink md:text-[28px]">
                {item.q}
              </dt>
              <dd className="mt-3 max-w-xl font-body text-[16px] leading-[25px] text-ink/60 md:text-[17px] md:leading-[26px]">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
