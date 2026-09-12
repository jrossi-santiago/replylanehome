import { GridBand } from "@/components/GridBand";
import { footer } from "@/content/site";

export function Footer() {
  return (
    <GridBand as="footer" surface="ink" padClass="py-10 md:py-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="inline-flex items-center gap-1.5 text-paper">
          <span
            className="font-mark text-[16px] font-bold leading-none"
            aria-hidden="true"
          >
            ⏎
          </span>
          <span className="font-head text-[16px] font-extrabold lowercase tracking-[-0.035em]">
            replylane
          </span>
        </p>
        <p className="font-mono text-[12px] text-paper/50">{footer.trust}</p>
        <p className="font-mono text-[12px] text-paper/50">{footer.copy}</p>
      </div>
    </GridBand>
  );
}
