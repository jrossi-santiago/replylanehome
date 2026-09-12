import { variant } from "@/content/variant";

export function VariantStory() {
  const { story } = variant;

  return (
    <section
      id={story.id}
      className="relative scroll-mt-24 px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-[560px]">
        <div className="mb-10 flex justify-center md:mb-12">
          <div className="float-soft flex h-28 w-28 items-center justify-center rounded-[28px] border border-paper/10 bg-surface shadow-card">
            <span
              className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-clay text-[28px] font-bold text-snow"
              aria-hidden="true"
            >
              ⏎
            </span>
          </div>
        </div>

        <p
          className="mb-8 text-center font-body text-[22px] text-paper/30"
          aria-hidden="true"
        >
          ↓
        </p>

        <div className="space-y-5 font-body text-[17px] leading-[28px] text-muted md:text-[18px] md:leading-[30px]">
          <p className="text-paper">{story.lead}</p>
          <p>{story.intro}</p>
          <p>
            {story.problem.split("goldmine of opportunities").map((part, i) =>
              i === 0 ? (
                <span key="a">{part}</span>
              ) : (
                <span key="b">
                  <strong className="font-semibold text-paper">
                    goldmine of opportunities
                  </strong>
                  {part}
                </span>
              ),
            )}
          </p>
          <p className="italic text-paper/55">{story.agitation}</p>
          <p className="pt-2 text-paper">{story.solutionLead}</p>
          <ol className="space-y-4 pt-1">
            {story.reasons.map((reason, i) => (
              <li key={reason} className="flex gap-3">
                <span className="font-head text-[28px] leading-none text-lilac">
                  {i + 1}.
                </span>
                <span>
                  {reason.includes("asking for what you sell") ? (
                    <>
                      Find posts where people are{" "}
                      <strong className="font-semibold text-paper">
                        asking for what you sell
                      </strong>{" "}
                      — not just talking.
                    </>
                  ) : (
                    reason
                  )}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
