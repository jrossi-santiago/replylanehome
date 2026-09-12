import Image from "next/image";
import { urls } from "@/content/site";
import { variant } from "@/content/variant";

export function VariantHero() {
  const { hero } = variant;

  return (
    <section id={hero.id} className="relative -mt-16 scroll-mt-24 pt-16">
      <div className="variant-wash pointer-events-none absolute inset-x-0 top-0 h-[min(100vh,980px)]" />
      <div className="relative mx-auto max-w-5xl px-4 pb-8 pt-16 text-center md:px-6 md:pb-10 md:pt-20">
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
            className="inline-flex min-h-11 items-center rounded-full bg-clay px-6 font-head text-[15px] font-semibold text-paper no-underline hover:bg-clay/90"
          >
            {hero.primary}
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-3 pb-4 md:px-6">
        <div className="overflow-hidden rounded-t-[28px] shadow-[0_-12px_48px_rgb(21_15_10/0.10)]">
          <Image
            src="/variant/hero-reply-list.jpg"
            alt={hero.shotAlt}
            width={1170}
            height={881}
            preload
            sizes="(max-width: 1200px) 100vw, 1140px"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
