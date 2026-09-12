import Link from "next/link";
import { GridBand } from "@/components/GridBand";
import { footer } from "@/content/site";

type Props = {
  compareHref?: string;
  compareLabel?: string;
};

export function Footer({ compareHref, compareLabel }: Props) {
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
        {compareHref && compareLabel ? (
          <p className="font-mono text-[12px] text-paper/50">
            <Link
              href={compareHref}
              className="text-paper/70 no-underline hover:text-paper"
            >
              {compareLabel}
            </Link>
          </p>
        ) : null}
        <p className="font-mono text-[12px] text-paper/50">{footer.copy}</p>
      </div>
    </GridBand>
  );
}
