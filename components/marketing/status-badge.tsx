type StatusBadgeProps = {
  children: React.ReactNode;
  tone?: "blue" | "green" | "amber" | "slate";
};

const toneClasses = {
  blue: "border-blue-200 bg-blue-50 text-blue-700",
  green:
    "border-emerald-200 bg-emerald-50 text-emerald-700",
  amber:
    "border-amber-200 bg-amber-50 text-amber-700",
  slate:
    "border-slate-200 bg-slate-50 text-slate-700",
};

export function StatusBadge({
  children,
  tone = "blue",
}: StatusBadgeProps) {
  return (
    <span
      className={[
        "inline-flex w-fit shrink-0 rounded-full border px-3 py-1 text-xs font-semibold",
        toneClasses[tone],
      ].join(" ")}
    >
      {children}
    </span>
  );
}