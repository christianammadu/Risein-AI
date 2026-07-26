import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: PageHeroProps) {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          {eyebrow}
        </p>

        <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300">
          {description}
        </p>

        {actions ? (
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            {actions}
          </div>
        ) : null}
      </div>
    </section>
  );
}