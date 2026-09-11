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
      className={`absolute overflow-hidden whitespace-nowrap font-mono text-[10px] leading-[13px] tracking-[0.12em] ${className}`}
    >
      {loop}
    </span>
  );
}

/** Tall poster with running text sitting on all four edges. */
export function PosterFrame({ sentence, fill, outline, children }: Props) {
  const loop = Array.from({ length: 12 }, () => sentence).join(" · ");
  const color = outlineClass[outline];

  return (
    <article
      className={`relative flex h-full min-h-[20rem] flex-col overflow-hidden md:min-h-[28rem] ${fillClass[fill]}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 ${color} opacity-45 shadow-[inset_0_0_0_1px_currentColor]`}
        aria-hidden="true"
      />
      <div className={`pointer-events-none absolute inset-0 ${color}`} aria-hidden="true">
        <Edge loop={loop} className="top-2 right-4 left-4" />
        <Edge
          loop={loop}
          className="top-4 right-2 bottom-4 [writing-mode:vertical-rl]"
        />
        <Edge loop={loop} className="right-4 bottom-2 left-4" />
        <Edge
          loop={loop}
          className="top-4 bottom-4 left-2 [writing-mode:vertical-lr]"
        />
      </div>
      <div className="relative z-10 flex flex-1 flex-col px-9 py-10 md:px-11 md:py-12">
        {children}
      </div>
      <p className="sr-only">{sentence}</p>
    </article>
  );
}
