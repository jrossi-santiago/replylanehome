import type { ReactNode } from "react";

type Props = {
  sentence: string;
  tone: "ink" | "snow";
  children: ReactNode;
  className?: string;
};

function Edge({
  sentence,
  className,
}: {
  sentence: string;
  className: string;
}) {
  const loop = Array.from({ length: 24 }, () => sentence).join(" · ");
  return (
    <span aria-hidden="true" className={`type-frame pointer-events-none absolute whitespace-nowrap ${className}`}>
      {loop}
    </span>
  );
}

/** Static running-text frame around a card. Edges are aria-hidden; sentence also appears inside. */
export function TextFrame({ sentence, tone, children, className = "" }: Props) {
  const color = tone === "ink" ? "text-clay" : "text-clay-deep";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className={`absolute inset-0 ${color}`}>
        <Edge sentence={sentence} className="top-2 left-3 right-3" />
        <Edge
          sentence={sentence}
          className="top-3 right-2 origin-top-right translate-x-full rotate-90"
        />
        <Edge sentence={sentence} className="bottom-2 left-3 right-3" />
        <Edge
          sentence={sentence}
          className="bottom-3 left-2 origin-bottom-left -translate-x-full -rotate-90"
        />
      </div>
      <div className="relative z-10 px-8 py-10 sm:px-10 sm:py-12">{children}</div>
      <p className="sr-only">{sentence}</p>
    </div>
  );
}
