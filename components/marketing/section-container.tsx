import type { ReactNode } from "react";

type Background =
  | "white"
  | "slate"
  | "blue"
  | "dark";

type Width =
  | "sm"
  | "md"
  | "lg"
  | "xl";

type SectionContainerProps = {
  children: ReactNode;
  background?: Background;
  width?: Width;
  className?: string;
};

const backgroundClasses: Record<
  Background,
  string
> = {
  white: "bg-white",
  slate: "bg-slate-50",
  blue: "bg-blue-600 text-white",
  dark: "bg-slate-950 text-white",
};

const widthClasses: Record<
  Width,
  string
> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

export function SectionContainer({
  children,
  background = "white",
  width = "xl",
  className = "",
}: SectionContainerProps) {
  return (
    <section
      className={[
        "py-24",
        backgroundClasses[background],
        className,
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto px-6",
          widthClasses[width],
        ].join(" ")}
      >
        {children}
      </div>
    </section>
  );
}