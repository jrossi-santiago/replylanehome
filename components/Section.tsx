import type { ReactNode } from "react";
import { GridBand } from "@/components/GridBand";

type Props = {
  id?: string;
  surface?: "paper" | "ink";
  children: ReactNode;
  className?: string;
  ruleTop?: boolean;
  padClass?: string;
};

export function Section({
  id,
  surface = "paper",
  children,
  className = "",
  ruleTop = true,
  padClass = "py-16 md:py-24",
}: Props) {
  return (
    <GridBand
      id={id}
      surface={surface}
      ruleTop={ruleTop}
      className={className}
      padClass={padClass}
    >
      {children}
    </GridBand>
  );
}
