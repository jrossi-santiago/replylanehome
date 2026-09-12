import Link from "next/link";
import { variant } from "@/content/variant";

export function VariantFooter() {
  const { footer } = variant;

  return (
    <footer className="border-t border-ink/8 bg-snow px-4 py-10 md:px-6 md:py-12">
      <div className="mx-auto flex max-w-[920px] flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <Link
          href={variant.path}
          className="inline-flex items-center gap-1.5 text-ink no-underline"
        >
          <span
            className="font-mark text-[16px] font-bold leading-none"
            aria-hidden="true"
          >
            ⏎
          </span>
          <span className="font-head text-[16px] font-extrabold lowercase tracking-[-0.035em]">
            replylane
          </span>
        </Link>
        <p className="font-body text-[13px] text-ink/45">{footer.trust}</p>
        <p className="font-body text-[13px] text-ink/45">{footer.copy}</p>
      </div>
    </footer>
  );
}
