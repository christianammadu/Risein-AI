type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  alignment = "center",
  theme = "light",
}: SectionHeadingProps) {
  const isCentered = alignment === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={
        isCentered
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl"
      }
    >
      {eyebrow ? (
        <p
          className={
            isDark
              ? "text-sm font-semibold uppercase tracking-[0.2em] text-blue-300"
              : "text-sm font-semibold uppercase tracking-[0.2em] text-blue-600"
          }
        >
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={[
          eyebrow ? "mt-4" : "",
          "text-4xl font-bold tracking-tight md:text-5xl",
          isDark ? "text-white" : "text-slate-950",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={[
            "mt-5 text-lg leading-8",
            isDark
              ? "text-slate-300"
              : "text-slate-600",
          ].join(" ")}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}