import { getTranslations } from "next-intl/server";

import { Card } from "@/components/ui/card";

const productKeys = [
  "tali",
  "personalab",
  "automations",
] as const;

export default async function ProductsSection() {
  const t = await getTranslations(
    "HomePage.products",
  );

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

        <div className="grid gap-8 md:grid-cols-3">
          {productKeys.map((productKey) => (
            <Card
              key={productKey}
              className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-lg font-bold text-blue-700">
                {t(`items.${productKey}.shortName`)}
              </div>

              <h3 className="text-2xl font-bold text-slate-950">
                {t(`items.${productKey}.title`)}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {t(
                  `items.${productKey}.description`,
                )}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}