import type { ReactNode } from "react";
import { facts } from "@/content/site";
import { GridBand } from "@/components/GridBand";
import { GridCross } from "@/components/GridCross";

export function FactsRow() {
  return (
    <GridBand surface="paper" padClass="py-10 md:py-14">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {facts.map((f, i) => (
          <div
            key={f.number}
            className={`relative px-0 py-8 md:px-8 md:py-4 ${
              i > 0 ? "border-t border-ink/12 md:border-t-0 md:border-l md:border-ink/12" : ""
            }`}
          >
            {i > 0 ? (
              <>
                <GridCross className="top-0 left-0 hidden -translate-x-1/2 md:block" />
                <GridCross className="bottom-0 left-0 hidden -translate-x-1/2 md:block" />
              </>
            ) : null}
            <p className="font-head text-[48px] font-semibold leading-none tracking-[-0.03em] text-ink">
              {f.number}
            </p>
            <p className="mt-3 font-body text-[15px] leading-[22px] text-ink/70">{f.label}</p>
          </div>
        ))}
      </div>
    </GridBand>
  );
}
