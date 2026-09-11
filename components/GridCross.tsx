type Props = {
  surface?: "paper" | "ink";
  className?: string;
};

/** 9px + mark where horizontal and vertical hairlines meet. */
export function GridCross({ surface = "paper", className = "" }: Props) {
  const color =
    surface === "paper" ? "bg-[rgb(21_15_10_/0.12)]" : "bg-[rgb(236_232_218_/0.10)]";

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-[9px] w-[9px] ${className}`}
    >
      <span className={`absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 ${color}`} />
      <span className={`absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 ${color}`} />
    </span>
  );
}
