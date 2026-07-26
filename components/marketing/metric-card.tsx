type MetricCardTone =
  | "default"
  | "slate"
  | "blue"
  | "dark";

type MetricCardProps = {
  value: string;
  label: string;
  description?: string;
  tone?: MetricCardTone;
  className?: string;
};

const toneStyles: Record<
  MetricCardTone,
  {
    card: string;
    value: string;
    label: string;
    description: string;
  }
> = {
  default: {
    card: "border-slate-200 bg-white",
    value: "text-slate-950",
    label: "text-slate-800",
    description: "text-slate-600",
  },
  slate: {
    card: "border-slate-200 bg-slate-50",
    value: "text-slate-950",
    label: "text-slate-800",
    description: "text-slate-600",
  },
  blue: {
    card: "border-blue-600 bg-blue-600",
    value: "text-white",
    label: "text-blue-50",
    description: "text-blue-100",
  },
  dark: {
    card: "border-slate-800 bg-slate-950",
    value: "text-white",
    label: "text-slate-100",
    description: "text-slate-300",
  },
};

export function MetricCard({
  value,
  label,
  description,
  tone = "default",
  className = "",
}: MetricCardProps) {
  const styles = toneStyles[tone];

  return (
    <article
      className={[
        "rounded-2xl border p-7 text-center shadow-sm",
        styles.card,
        className,
      ].join(" ")}
    >
      <p
        className={[
          "text-4xl font-bold tracking-tight",
          styles.value,
        ].join(" ")}
      >
        {value}
      </p>

      <h3
        className={[
          "mt-3 text-lg font-semibold",
          styles.label,
        ].join(" ")}
      >
        {label}
      </h3>

      {description ? (
        <p
          className={[
            "mt-3 leading-7",
            styles.description,
          ].join(" ")}
        >
          {description}
        </p>
      ) : null}
    </article>
  );
}