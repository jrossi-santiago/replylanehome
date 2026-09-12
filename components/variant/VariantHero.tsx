import { ReplyListMock } from "@/components/ReplyListMock";
import { urls } from "@/content/site";
import { variant } from "@/content/variant";

export function VariantHero() {
  const { hero } = variant;

  return (
    <section id={hero.id} className="relative scroll-mt-24">
      <div className="variant-wash pointer-events-none absolute inset-x-0 top-0 h-[min(92vh,920px)]" />
      <div className="relative mx-auto max-w-4xl px-4 pb-10 pt-8 text-center md:px-6 md:pb-12 md:pt-14">
        <h1 className="type-variant-display text-ink">
          <span className="block">{hero.h1[0]}</span>
          <span className="block">{hero.h1[1]}</span>
        </h1>
        <p className="mx-auto mt-7 max-w-xl font-body text-[17px] leading-[26px] text-ink/65 md:mt-8 md:text-[19px] md:leading-[28px]">
          <span className="block">{hero.subLines[0]}</span>
          <span className="block">{hero.subLines[1]}</span>
        </p>
        <div className="mt-8">
          <a
            href={urls.signup}
            className="inline-flex min-h-11 items-center rounded-full bg-ink px-5 font-head text-[15px] font-semibold text-paper no-underline hover:bg-ink/90"
          >
            {hero.primary}
          </a>
        </div>
        <p className="mt-4 font-body text-[14px] font-medium text-ink/70 md:text-[15px]">
          {hero.trust}
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-[1080px] px-3 md:px-6">
        <div className="overflow-hidden rounded-t-[28px] bg-[#f3efe4] pt-3 shadow-[0_-12px_48px_rgb(21_15_10/0.08)] md:pt-4">
          <ReplyListMock
            lamp="working"
            className="mx-auto max-w-[920px] rounded-t-2xl rounded-b-none bg-[#efe9d8] md:p-6"
          />
        </div>
      </div>
    </section>
  );
}
