import type { ComponentType } from "react";

type IconCircleSize =
  | "sm"
  | "md"
  | "lg";

type IconCircleTone =
  | "blue"
  | "slate"
  | "white"
  | "dark";

type IconCircleProps = {
  icon: ComponentType<{
    className?: string;
    "aria-hidden"?: boolean;
  }>;
  size?: IconCircleSize;
  tone?: IconCircleTone;
  className?: string;
};

const sizeStyles: Record<
  IconCircleSize,
  {
    container: string;
    icon: string;
  }
> = {
  sm: {
    container: "h-10 w-10",
    icon: "h-5 w-5",
  },
  md: {
    container: "h-12 w-12",
    icon: "h-6 w-6",
  },
  lg: {
    container: "h-16 w-16",
    icon: "h-8 w-8",
  },
};

const toneStyles: Record<
  IconCircleTone,
  string
> = {
  blue: "bg-blue-50 text-blue-600",
  slate: "bg-slate-100 text-slate-700",
  white: "bg-white text-blue-600",
  dark: "bg-slate-800 text-blue-400",
};

export function IconCircle({
  icon: Icon,
  size = "md",
  tone = "blue",
  className = "",
}: IconCircleProps) {
  const dimensions = sizeStyles[size];

  return (
    <div
      className={[
        "flex shrink-0 items-center justify-center rounded-full",
        dimensions.container,
        toneStyles[tone],
        className,
      ].join(" ")}
    >
      <Icon
        aria-hidden={true}
        className={dimensions.icon}
      />
    </div>
  );
}