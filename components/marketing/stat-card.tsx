type StatCardProps = {
  title: string;
  description: string;
  className?: string;
};

export function StatCard({
  title,
  description,
  className = "",
}: StatCardProps) {
  return (
    <div
      className={[
        "rounded-xl border p-6",
        className,
      ].join(" ")}
    >
      <h3 className="text-lg font-bold">
        {title}
      </h3>

      <p className="mt-2 text-gray-600">
        {description}
      </p>
    </div>
  );
}