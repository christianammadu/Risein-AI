import type {
  ComponentType,
  ReactNode,
} from "react";

type EmptyStateProps = {
  title: string;
  description: string;
  icon?: ComponentType<{
    className?: string;
    "aria-hidden"?: boolean;
  }>;
  action?: ReactNode;
  className?: string;
};

export function EmptyState({
  title,
  description,
  icon: Icon,
  action,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={[
        "mx-auto flex max-w-2xl flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center",
        className,
      ].join(" ")}
    >
      {Icon ? (
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
          <Icon
            aria-hidden={true}
            className="h-7 w-7"
          />
        </div>
      ) : null}

      <h3
        className={[
          Icon ? "mt-6" : "",
          "text-2xl font-bold text-slate-950",
        ].join(" ")}
      >
        {title}
      </h3>

      <p className="mt-4 max-w-xl leading-7 text-slate-600">
        {description}
      </p>

      {action ? (
        <div className="mt-7">
          {action}
        </div>
      ) : null}
    </div>
  );
}