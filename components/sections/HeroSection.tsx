import { getTranslations } from "next-intl/server";

import { SectionContainer } from "@/components/marketing/section-container";
import { StatCard } from "@/components/marketing/stat-card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default async function HeroSection() {
  const t = await getTranslations(
    "HomePage.hero"
  );

  const stats = [
    {
      key: "timeSaved",
      title: t("stats.timeSaved.title"),
      description: t(
        "stats.timeSaved.description"
      ),
    },
    {
      key: "bookkeeping",
      title: t("stats.bookkeeping.title"),
      description: t(
        "stats.bookkeeping.description"
      ),
    },
    {
      key: "validation",
      title: t("stats.validation.title"),
      description: t(
        "stats.validation.description"
      ),
    },
  ];

  return (
    <SectionContainer>
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          {t("eyebrow")}
        </span>

        <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
          {t("titleLine1")}

          <br />

          {t("titleLine2")}

          <br />

          {t("titleLine3")}
        </h1>

        <p className="mt-8 text-xl leading-8 text-gray-600">
          {t("description")}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <Link href="/contact">
            <Button>
              {t("primaryButton")}
            </Button>
          </Link>

          <Link href="/services">
            <Button variant="outline">
              {t("secondaryButton")}
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <StatCard
              key={stat.key}
              title={stat.title}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}