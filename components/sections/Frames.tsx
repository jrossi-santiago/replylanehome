import { PosterFrame } from "@/components/PosterFrame";
import { GridBand } from "@/components/GridBand";
import { frames } from "@/content/site";

export function Frames() {
  return (
    <GridBand surface="ink" padClass="py-10 md:py-14">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {frames.panels.map((panel) => (
          <PosterFrame
            key={panel.lines.join(" ")}
            sentence={panel.frame}
            fill={panel.fill}
            outline={panel.outline}
          >
            <div className="flex flex-1 flex-col justify-center">
              {panel.mark ? (
                <span
                  className="font-mark text-[34px] font-bold leading-none"
                  aria-hidden="true"
                >
                  ⏎
                </span>
              ) : null}
              <h2
                className={
                  panel.size === "lead"
                    ? "font-head text-[32px] font-semibold leading-[36px] tracking-[-0.03em] md:mt-0 md:text-[36px] md:leading-[40px]"
                    : "type-h2 mt-6"
                }
              >
                {panel.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              {panel.body ? (
                <p className="mt-5 max-w-[18rem] font-body text-[15px] leading-[22px] opacity-70">
                  {panel.body}
                </p>
              ) : null}
            </div>
            {panel.foot ? (
              <p className="pt-8 font-mono text-[11px] leading-[14px] tracking-[0.08em] opacity-55">
                {panel.foot}
              </p>
            ) : null}
          </PosterFrame>
        ))}
      </div>
    </GridBand>
  );
}
