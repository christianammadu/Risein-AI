import type { ReactNode } from "react";

type FeatureGridColumns =
  | 2
  | 3
  | 4;

type FeatureGridProps = {
  children: ReactNode;
  columns?: FeatureGridColumns;
  className?: string;
};

const columnStyles: Record<
  FeatureGridColumns,
  string
> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

export function FeatureGrid({
  children,
  columns = 3,
  className = "",
}: FeatureGridProps) {
  return (
    <div
      className={[
        "grid gap-8",
        columnStyles[columns],
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}