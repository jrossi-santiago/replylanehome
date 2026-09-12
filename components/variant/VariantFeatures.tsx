import Image from "next/image";
import { variant } from "@/content/variant";

export function VariantFeatures() {
  const { features } = variant;

  return (
    <section
      id={features.id}
      className="relative scroll-mt-24 px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-[720px] text-center">
        <p className="type-eyebrow">{features.eyebrow}</p>
        <h2 className="type-h2 mt-4 text-paper md:mt-5">{features.h2}</h2>
      </div>

      <div className="mx-auto mt-12 flex max-w-[720px] flex-col gap-6 md:mt-16 md:gap-8">
        {features.items.map((item, i) => (
          <article
            key={item.title}
            className="step-in surface-card overflow-hidden"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="px-5 pt-6 md:px-7 md:pt-7">
              <h3 className="type-h3 text-paper">{item.title}</h3>
              <p className="mt-3 max-w-xl font-body text-[15px] leading-[24px] text-muted md:text-[16px] md:leading-[25px]">
                {item.body}
                {item.link && item.href ? (
                  <>
                    {" "}
                    <a
                      href={item.href}
                      className="font-semibold text-clay underline decoration-clay/40 underline-offset-4 hover:decoration-clay"
                    >
                      {item.link}
                    </a>
                  </>
                ) : null}
              </p>
            </div>
            <div className="mt-5 overflow-hidden border-t border-paper/6 bg-surface-2 md:mt-6">
              <Image
                src={item.shot}
                alt={item.shotAlt}
                width={1200}
                height={900}
                sizes="(max-width: 720px) 100vw, 720px"
                className="h-auto w-full"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
