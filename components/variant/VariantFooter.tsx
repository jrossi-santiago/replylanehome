import Link from "next/link";
import { variant } from "@/content/variant";

export function VariantFooter() {
  const { footer } = variant;

  return (
    <footer className="border-t border-paper/8 px-4 py-10 md:px-6 md:py-12">
      <div className="mx-auto flex max-w-[920px] flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <Link
          href={variant.path}
          className="inline-flex items-center gap-2 text-paper no-underline"
        >
          <span
            className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-clay text-[12px] font-bold text-snow"
            aria-hidden="true"
          >
            ⏎
          </span>
          <span className="font-head text-[24px] leading-none tracking-[0.04em]">
            replylane
          </span>
        </Link>
        <p className="font-body text-[13px] text-paper/40">{footer.trust}</p>
        <p className="font-body text-[13px] text-paper/40">{footer.copy}</p>
      </div>
    </footer>
  );
}
