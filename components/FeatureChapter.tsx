import type { ReactNode } from "react";
import type { IconName } from "@/content/icons";
import { Icon } from "./Icon";
import { GridCross } from "./GridCross";

type Point = { icon: IconName; title: string; line: string };

type SubProps = {
  h3: string;
  body: string;
  points: Point[];
  illustration: ReactNode;
  reverse?: boolean;
  pro?: boolean;
  surface?: "paper" | "ink";
  ruleTop?: boolean;
};

export function SubFeature({
  h3,
  body,
  points,
  illustration,
  reverse = false,
  pro = false,
  surface = "paper",
  ruleTop = true,
}: SubProps) {
  const textColor = surface === "ink" ? "text-paper" : "text-ink";
  const muted = surface === "ink" ? "text-paper/70" : "text-ink/70";
  const rule = surface === "paper" ? "rule-paper" : "rule-ink";

  return (
    <div className="relative">
      {ruleTop ? (
        <div className="relative mb-12 md:mb-16">
          <div className={`absolute inset-x-0 top-0 h-px ${rule}`} />
          <GridCross surface={surface} className="top-[-4px] left-0 -translate-x-1/2" />
          <GridCross surface={surface} className="top-[-4px] right-0 translate-x-1/2" />
        </div>
      ) : null}
      <div
        className={`grid grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-6 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="md:col-span-5">
          <h3 className={`type-h3 ${textColor}`}>
            {h3}
            {pro ? (
              <span className="ml-2 font-mono text-[12px] font-normal tracking-normal text-inherit opacity-60">
                Pro
              </span>
            ) : null}
          </h3>
          <p className={`mt-3 font-body text-[16px] leading-[25px] ${muted}`}>{body}</p>
          {points.length > 0 ? (
            <ul className="mt-6 space-y-4">
              {points.map((p) => (
                <li key={p.title} className="flex gap-3">
                  <Icon name={p.icon} size={20} className={`mt-0.5 shrink-0 ${textColor}`} />
                  <div>
                    <p className={`font-body text-[15px] font-bold leading-[22px] ${textColor}`}>
                      {p.title}
                    </p>
                    <p className={`font-body text-[15px] leading-[22px] ${muted}`}>{p.line}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="md:col-span-6 md:col-start-7">{illustration}</div>
      </div>
    </div>
  );
}

type ChapterProps = {
  icon: IconName;
  h2: string;
  lede: string;
  children: ReactNode;
  surface?: "paper" | "ink";
  id?: string;
};

export function FeatureChapter({
  icon,
  h2,
  lede,
  children,
  surface = "paper",
  id,
}: ChapterProps) {
  const textColor = surface === "ink" ? "text-paper" : "text-ink";
  const muted = surface === "ink" ? "text-paper/70" : "text-ink/70";

  return (
    <div id={id} className="space-y-16 md:space-y-20">
      <header className="md:max-w-[58%]">
        <Icon name={icon} size={28} className={`mb-4 ${textColor}`} />
        <h2 className={`type-h2 ${textColor}`}>{h2}</h2>
        <p className={`mt-4 font-body text-[16px] leading-[25px] md:text-[17px] md:leading-[26px] ${muted}`}>
          {lede}
        </p>
      </header>
      <div className="space-y-16 md:space-y-20">{children}</div>
    </div>
  );
}
