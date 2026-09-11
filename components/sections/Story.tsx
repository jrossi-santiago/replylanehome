import { GridBand } from "@/components/GridBand";
import { story } from "@/content/site";

function Mark({ children }: { children: string }) {
  return <span className="bg-clay/25 px-1 py-0.5 text-ink">{children}</span>;
}

/** The problem, told once, with the sentences that matter marked. */
export function Story() {
  return (
    <GridBand surface="paper">
      <div className="mx-auto max-w-[680px]">
        <p className="font-mono text-[13px] text-ink/55">{story.label}</p>
        <h2 className="type-h2 mt-3 text-ink">{story.h2}</h2>
        <div className="mt-8 space-y-6">
          {story.paragraphs.map((para) => (
            <p
              key={para.parts.map((p) => p.text).join("")}
              className="font-body text-[18px] leading-[29px] text-ink md:text-[19px] md:leading-[31px]"
            >
              {para.parts.map((part) =>
                "mark" in part && part.mark ? (
                  <Mark key={part.text}>{part.text}</Mark>
                ) : (
                  <span key={part.text}>{part.text}</span>
                ),
              )}
            </p>
          ))}
        </div>
        <p className="mt-8 font-body text-[16px] leading-[25px] text-ink/75">
          {story.close}
        </p>
      </div>
    </GridBand>
  );
}
