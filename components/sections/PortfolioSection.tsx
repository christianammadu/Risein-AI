import Link from "next/link";
import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const projectKeys = [
  "tali",
  "personalab",
  "automation",
  "seo",
] as const;

export default async function PortfolioSection() {
  const t = await getTranslations("HomePage.portfolio");

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            {t("eyebrow")}
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projectKeys.map((projectKey, index) => (
            <Card
              key={projectKey}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-sm font-bold text-blue-700">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-2xl font-bold text-slate-950">
                {t(`items.${projectKey}.title`)}
              </h3>

              <p className="mb-8 mt-4 flex-1 leading-7 text-slate-600">
                {t(`items.${projectKey}.description`)}
              </p>

              <div>
                <Button variant="outline" asChild>
                  <Link href="/portfolio">
                    {t("button")}
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/portfolio">
              {t("viewAllButton")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}