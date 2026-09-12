import { urls } from "@/content/site";
import { variant } from "@/content/variant";

export function VariantAnti() {
  const { anti } = variant;

  return (
    <section className="relative overflow-hidden bg-snow px-4 pb-20 pt-8 md:px-6 md:pb-28 md:pt-12">
      <div className="variant-wash-foot pointer-events-none absolute inset-x-0 bottom-0 h-[70%]" />
      <div className="relative mx-auto max-w-[720px]">
        <p className="text-center font-serif text-[24px] leading-[1.4] text-ink/80 md:text-[32px] md:leading-[1.35]">
          {anti.lead}{" "}
          <strong className="whitespace-nowrap font-serif text-ink">
            {anti.promise}
          </strong>
        </p>
        <ul className="mx-auto mt-12 w-fit text-left md:mt-16">
          {anti.items.map((item) => (
            <li
              key={item}
              className="font-serif text-[32px] leading-[1.28] tracking-[-0.02em] text-ink md:text-[48px] md:leading-[1.22]"
            >
              <span className="text-clay">{anti.no}</span> {item}
            </li>
          ))}
        </ul>
        <div className="mt-14 text-center md:mt-16">
          <a
            href={urls.signup}
            className="inline-flex min-h-11 items-center rounded-full bg-clay px-5 font-head text-[15px] font-semibold text-paper no-underline hover:bg-clay/90"
          >
            {anti.primary}
          </a>
          <p className="mt-4 font-body text-[14px] font-medium text-ink/70 md:text-[15px]">
            {anti.trust}
          </p>
        </div>
      </div>
    </section>
  );
}
