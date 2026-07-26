import type { ReactNode } from "react";

type MarketingCtaProps = {
  title: string;
  description: string;
  action: ReactNode;
};

export function MarketingCta({
  title,
  description,
  action,
}: MarketingCtaProps) {
  return (
    <section className="bg-blue-600 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight">
          {title}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
          {description}
        </p>

        <div className="mt-8 flex justify-center">
          {action}
        </div>
      </div>
    </section>
  );
}