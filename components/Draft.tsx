type Props = {
  text: string;
  count: number;
  actions?: boolean;
  className?: string;
};

export function Draft({ text, count, actions = true, className = "" }: Props) {
  return (
    <div className={`rounded-[10px] border border-ink/10 bg-paper/60 p-3 ${className}`}>
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="font-body text-[13px] font-medium text-ink/55">Draft</span>
        <span className="type-data text-ink/55">
          {count} / 280
        </span>
      </div>
      <p className="font-body text-[15px] leading-[22px] text-ink">{text}</p>
      {actions ? (
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="inline-flex min-h-9 items-center rounded-lg border border-ink/15 px-3 font-body text-[13px] font-medium text-ink">
            Copy
          </span>
          <span className="inline-flex min-h-9 items-center rounded-lg border border-ink/15 px-3 font-body text-[13px] font-medium text-ink">
            Regenerate
          </span>
          <span className="inline-flex min-h-9 items-center rounded-lg border border-ink/15 px-3 font-body text-[13px] font-medium text-ink">
            Hide author
          </span>
        </div>
      ) : null}
    </div>
  );
}
