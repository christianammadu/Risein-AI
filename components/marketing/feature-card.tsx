import type {
  ComponentType,
  ReactNode,
} from "react";

type FeatureCardTone =
  | "default"
  | "slate"
  | "blue"
  | "dark";

type FeatureCardAlignment =
  | "left"
  | "center";

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: ComponentType<{
    className?: string;
    "aria-hidden"?: boolean;
  }>;
  eyebrow?: string;
  footer?: ReactNode;
  tone?: FeatureCardTone;
  alignment?: FeatureCardAlignment;
  className?: string;
};

const toneStyles: Record<
  FeatureCardTone,
  {
    card: string;
    icon: string;
    eyebrow: string;
    title: string;
    description: string;
  }
> = {
  default: {
    card: "border-slate-200 bg-white",
    icon: "bg-blue-50 text-blue-600",
    eyebrow: "text-blue-600",
    title: "text-slate-950",
    description: "text-slate-600",
  },
  slate: {
    card: "border-slate-200 bg-slate-50",
    icon: "bg-white text-blue-600",
    eyebrow: "text-blue-600",
    title: "text-slate-950",
    description: "text-slate-600",
  },
  blue: {
    card: "border-blue-600 bg-blue-600",
    icon: "bg-white/15 text-white",
    eyebrow: "text-blue-100",
    title: "text-white",
    description: "text-blue-100",
  },
  dark: {
    card: "border-slate-800 bg-slate-950",
    icon: "bg-slate-800 text-blue-400",
    eyebrow: "text-blue-400",
    title: "text-white",
    description: "text-slate-300",
  },
};

export function FeatureCard({
  title,
  description,
  icon: Icon,
  eyebrow,
  footer,
  tone = "default",
  alignment = "left",
  className = "",
}: FeatureCardProps) {
  const styles = toneStyles[tone];

  const alignmentStyles =
    alignment === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <article
      className={[
        "flex h-full flex-col rounded-2xl border p-7 shadow-sm",
        alignmentStyles,
        styles.card,
        className,
      ].join(" ")}
    >
      {Icon ? (
        <div
          className={[
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
            styles.icon,
          ].join(" ")}
        >
          <Icon
            aria-hidden={true}
            className="h-6 w-6"
          />
        </div>
      ) : null}

      {eyebrow ? (
        <p
          className={[
            Icon ? "mt-6" : "",
            "text-sm font-semibold",
            styles.eyebrow,
          ].join(" ")}
        >
          {eyebrow}
        </p>
      ) : null}

      <h3
        className={[
          Icon || eyebrow ? "mt-5" : "",
          "text-xl font-bold",
          styles.title,
        ].join(" ")}
      >
        {title}
      </h3>

      <p
        className={[
          "mt-4 flex-1 leading-7",
          styles.description,
        ].join(" ")}
      >
        {description}
      </p>

      {footer ? (
        <div className="mt-6">
          {footer}
        </div>
      ) : null}
    </article>
  );
}