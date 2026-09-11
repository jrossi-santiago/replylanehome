import type { ReactNode } from "react";

export type PosterFill = "ink" | "paper";
export type PosterOutline = "lilac" | "clay" | "paper" | "ink";

type Props = {
  sentence: string;
  fill: PosterFill;
  outline: PosterOutline;
  children: ReactNode;
};

const fillClass: Record<PosterFill, string> = {
  ink: "bg-ink text-paper",
  paper: "bg-paper text-ink",
};

const outlineClass: Record<PosterOutline, string> = {
  lilac: "text-lilac",
  clay: "text-clay",
  paper: "text-paper",
  ink: "text-ink",
};

function Edge({ loop, className }: { loop: string; className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none shrink-0 overflow-hidden whitespace-nowrap font-mono text-[10px] leading-[13px] tracking-[0.16em] ${className}`}
    >
      {loop}
    </span>
  );
}

/** Tall poster with running text on all four edges. */
export function PosterFrame({ sentence, fill, outline, children }: Props) {
  const loop = Array.from({ length: 8 }, () => sentence).join(" · ");
  const color = outlineClass[outline];

  return (
    <article
      className={`flex h-full min-h-[26rem] flex-col overflow-hidden md:min-h-[32rem] ${fillClass[fill]}`}
    >
      <Edge loop={loop} className={`px-3 py-2 ${color}`} />
      <div className="flex min-h-0 flex-1">
        <Edge
          loop={loop}
          className={`px-2 py-3 [writing-mode:vertical-lr] ${color}`}
        />
        <div className="relative flex min-w-0 flex-1 flex-col px-7 py-6 md:px-8 md:py-10">
          {children}
        </div>
        <Edge
          loop={loop}
          className={`px-2 py-3 [writing-mode:vertical-rl] ${color}`}
        />
      </div>
      <Edge loop={loop} className={`px-3 py-2 ${color}`} />
      <p className="sr-only">{sentence}</p>
    </article>
  );
}
