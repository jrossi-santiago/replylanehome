import type { ReactNode } from "react";
import { GridCross } from "@/components/GridCross";

type Props = {
  surface?: "paper" | "ink";
  ruleTop?: boolean;
  children: ReactNode;
  className?: string;
  padClass?: string;
  id?: string;
  as?: "section" | "footer" | "div";
};

/** Container with vertical hairlines and optional top rule + crosses. */
export function GridBand({
  surface = "paper",
  ruleTop = true,
  children,
  className = "",
  padClass = "py-16 md:py-24",
  id,
  as: Tag = "section",
}: Props) {
  const bg = surface === "paper" ? "bg-paper text-ink" : "bg-ink text-paper band-ink";
  const rule = surface === "paper" ? "rule-paper" : "rule-ink";

  return (
    <Tag id={id} className={`relative ${bg} ${className}`}>
      <div className="page-container relative">
        <div className={`pointer-events-none absolute inset-y-0 left-4 w-px md:left-6 ${rule}`} aria-hidden="true" />
        <div className={`pointer-events-none absolute inset-y-0 right-4 w-px md:right-6 ${rule}`} aria-hidden="true" />
        {ruleTop ? (
          <>
            <div className={`absolute inset-x-4 top-0 h-px md:inset-x-6 ${rule}`} />
            <GridCross surface={surface} className="top-[-4px] left-4 -translate-x-1/2 md:left-6" />
            <GridCross surface={surface} className="top-[-4px] right-4 translate-x-1/2 md:right-6" />
          </>
        ) : null}
        <div className={`relative ${padClass}`}>{children}</div>
      </div>
    </Tag>
  );
}
