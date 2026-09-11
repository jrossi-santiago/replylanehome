import type { IconName } from "@/content/icons";
import { iconPaths } from "@/content/icons";

type Props = {
  name: IconName;
  size?: 20 | 24 | 28;
  className?: string;
};

export function Icon({ name, size = 24, className }: Props) {
  const stroke = size === 20 ? 2.1 : 1.9;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d={iconPaths[name]}
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
