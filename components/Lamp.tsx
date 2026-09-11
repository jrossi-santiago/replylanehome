type Props = {
  state: "working" | "done" | "failed";
  surface: "light" | "ink";
  className?: string;
};

/** 8px lilac status lamp. Lilac is never used for anything else. */
export function Lamp({ state, surface, className = "" }: Props) {
  const ring =
    surface === "light"
      ? "shadow-[0_0_0_1px_rgb(21_15_10_/0.85)]"
      : "";

  const fill =
    state === "failed"
      ? "bg-transparent border border-lilac"
      : "bg-lilac";

  const motion = state === "working" ? "lamp-working" : "";

  const label =
    state === "working" ? "Working" : state === "done" ? "Done" : "Failed";

  return (
    <span
      className={`inline-block h-2 w-2 shrink-0 rounded-[1px] ${fill} ${ring} ${motion} ${className}`}
      role="img"
      aria-label={label}
    />
  );
}
