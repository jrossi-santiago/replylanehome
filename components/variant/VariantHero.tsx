import Image from "next/image";
import { urls } from "@/content/site";
import { variant } from "@/content/variant";

export function VariantHero() {
  const { hero } = variant;

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -10%, rgb(215 108 64 / 0.22), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 20%, rgb(200 171 249 / 0.12), transparent 50%), #150f0a",
        }}
      />

      <div className="relative page-container pb-10 pt-14 text-center md:pb-14 md:pt-20">
        <p className="hero-rise hero-rise-1 font-head text-[36px] font-extrabold leading-none tracking-[-0.035em] text-paper md:text-[48px]">
          {hero.brand}
        </p>
        <h1 className="hero-rise hero-rise-2 type-display mt-5 text-paper md:mt-6">
          {hero.h1}
        </h1>
        <p className="hero-rise hero-rise-3 mx-auto mt-5 max-w-xl font-body text-[17px] leading-[26px] text-muted md:mt-6 md:text-[19px] md:leading-[28px]">
          {hero.sub}
        </p>

        <div className="hero-rise hero-rise-4 mx-auto mt-8 flex max-w-md flex-col gap-3 md:mt-10">
          <a href={urls.signup} className="btn-primary w-full gap-2 text-[16px]">
            {hero.primary}
            {hero.primaryArrow ? <span aria-hidden="true">→</span> : null}
          </a>
          <p className="font-body text-[13px] text-paper/45 md:text-[14px]">
            {hero.trust}
          </p>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[1100px] px-3 md:px-6">
        <div className="relative overflow-hidden rounded-t-[24px] border border-b-0 border-paper/10 bg-surface shadow-[0_-20px_60px_rgb(0_0_0/0.45)]">
          <Image
            src="/variant/hero-reply-list.jpg"
            alt={hero.shotAlt}
            width={1170}
            height={881}
            preload
            sizes="(max-width: 1100px) 100vw, 1100px"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
