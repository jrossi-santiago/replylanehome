import { testimonials } from "@/content/testimonials";

/** Renders nothing while the testimonials array is empty. */
export function TestimonialPair() {
  if (testimonials.length === 0) return null;
  return (
    <div className="page-container grid gap-6 py-16 md:grid-cols-2">
      {testimonials.map((t) => (
        <figure key={t.handle} className="rounded-xl bg-snow p-6 shadow-card">
          <blockquote className="font-body text-[16px] leading-[25px] text-ink">
            {t.quote}
          </blockquote>
          <figcaption className="mt-4 type-data text-ink/55">@{t.handle}</figcaption>
        </figure>
      ))}
    </div>
  );
}
