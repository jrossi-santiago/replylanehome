import { Draft } from "@/components/Draft";
import { Section } from "@/components/Section";
import { WhyLine } from "@/components/WhyLine";
import { askDraftLength, walkthrough } from "@/content/site";

/** One post, start to finish, in two columns of three steps. */
export function Walkthrough() {
  return (
    <Section surface="paper">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-[13px] text-ink/55">{walkthrough.label}</p>
        <h2 className="type-h2 mt-3 text-ink">{walkthrough.h2}</h2>
        <p className="mt-4 max-w-2xl font-body text-[16px] leading-[25px] text-ink/70">
          {walkthrough.disclosure}
        </p>

        <ol className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 md:mt-12 md:grid-cols-2">
          {walkthrough.steps.map((step) => (
            <li key={step.n} className="border-t border-ink/12 pt-5">
              <p className="font-head text-[18px] font-semibold text-ink">
                <span className="font-mono text-[13px] font-normal text-clay-deep">
                  {step.n} ·{" "}
                </span>
                {step.title}
              </p>
              {"body" in step && step.body ? (
                <p className="mt-3 font-body text-[16px] leading-[25px] text-ink/75">
                  {step.body}
                </p>
              ) : null}
              {"post" in step && step.post ? (
                <blockquote className="mt-4 rounded-xl bg-snow p-5 shadow-card">
                  <p className="font-body text-[15px] leading-[22px] text-ink">
                    {step.post}
                  </p>
                </blockquote>
              ) : null}
              {"why" in step && step.why ? (
                <div className="mt-3">
                  <WhyLine>{step.why}</WhyLine>
                </div>
              ) : null}
              {"draft" in step && step.draft ? (
                <div className="mt-4">
                  <Draft
                    text={step.draft}
                    count={askDraftLength}
                    actions={false}
                  />
                </div>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
