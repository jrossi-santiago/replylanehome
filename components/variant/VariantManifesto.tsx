import { variant } from "@/content/variant";

export function VariantManifesto() {
  const { manifesto } = variant;

  return (
    <section
      id={manifesto.id}
      className="relative scroll-mt-24 bg-snow px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-[720px]">
        <p className="mb-10 text-center font-head text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/45 md:mb-14">
          {manifesto.label}
          <span className="text-ink/25"> · {manifesto.note}</span>
        </p>
        <p className="font-serif text-[24px] leading-[1.42] text-ink/80 md:text-[32px] md:leading-[1.38]">
          <em className="mr-1.5 inline-block font-serif text-[42px] italic leading-none text-ink md:text-[58px]">
            {manifesto.drop}
          </em>
          {manifesto.first}
        </p>
        {manifesto.paragraphs.map((para) => (
          <p
            key={para}
            className="mt-8 font-serif text-[24px] leading-[1.42] text-ink/80 md:mt-10 md:text-[32px] md:leading-[1.38]"
          >
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}
