import { getTranslations } from "next-intl/server";

import { Card } from "@/components/ui/card";

const reasonKeys = [
  "expertise",
  "businessFirst",
  "automation",
  "technology",
  "sme",
  "global",
] as const;

export default async function WhyChooseUsSection() {
  const t = await getTranslations("HomePage.whyChooseUs");

  return (
    <section className="bg-slate-50 py-24">
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasonKeys.map((reasonKey) => (
            <Card
              key={reasonKey}
              className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700">
                  ✓
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-950">
                    {t(`items.${reasonKey}.title`)}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {t(`items.${reasonKey}.description`)}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}