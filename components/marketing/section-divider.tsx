type SectionDividerSpacing =
  | "sm"
  | "md"
  | "lg";

type SectionDividerProps = {
  spacing?: SectionDividerSpacing;
  className?: string;
};

const spacingStyles: Record<
  SectionDividerSpacing,
  string
> = {
  sm: "my-8",
  md: "my-12",
  lg: "my-16",
};

export function SectionDivider({
  spacing = "md",
  className = "",
}: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={[
        "h-px w-full bg-slate-200",
        spacingStyles[spacing],
        className,
      ].join(" ")}
    />
  );
}