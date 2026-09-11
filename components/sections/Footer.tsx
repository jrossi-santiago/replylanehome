import { GridBand } from "@/components/GridBand";
import { footer } from "@/content/site";

export function Footer() {
  return (
    <GridBand as="footer" surface="ink" padClass="py-14 md:py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-head text-[16px] font-extrabold lowercase tracking-[-0.035em] text-paper">
            replylane
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="font-body text-[13px] font-medium text-paper/50">
            {footer.productTitle}
          </p>
          <ul className="mt-3 space-y-2">
            {footer.product.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="font-body text-[15px] text-paper/80 no-underline hover:text-paper"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="font-body text-[13px] font-medium text-paper/50">
            {footer.legalTitle}
          </p>
          <ul className="mt-3 space-y-2">
            {footer.legal.map((l) => (
              <li key={l.label}>
                {l.href ? (
                  <a
                    href={l.href}
                    className="font-body text-[15px] text-paper/80 no-underline hover:text-paper"
                  >
                    {l.label}
                  </a>
                ) : (
                  <span className="font-body text-[15px] text-paper/40">{l.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-2 border-t border-paper/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[12px] text-paper/50">{footer.copy}</p>
        <p className="font-mono text-[12px] text-paper/50">{footer.trust}</p>
      </div>
    </GridBand>
  );
}
