import type { Metadata } from "next";
import {
  ArrowRight,
  Bot,
  Calculator,
  Check,
  Database,
  Headphones,
  Lightbulb,
  Search,
  Settings,
  Workflow,
} from "lucide-react";
import {
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import { MarketingCta } from "@/components/marketing/marketing-cta";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionContainer } from "@/components/marketing/section-container";
import { SectionHeading } from "@/components/marketing/section-heading";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/seo";

type ServicesPageProps = {
  params: Promise<{
    locale: AppLocale;
  }>;
};

type ServiceKey =
  | "workflow"
  | "bookkeeping"
  | "support"
  | "assistant"
  | "integration"
  | "consulting";

const services: Array<{
  key: ServiceKey;
  icon: typeof Workflow;
}> = [
  {
    key: "workflow",
    icon: Workflow,
  },
  {
    key: "bookkeeping",
    icon: Calculator,
  },
  {
    key: "support",
    icon: Headphones,
  },
  {
    key: "assistant",
    icon: Bot,
  },
  {
    key: "integration",
    icon: Database,
  },
  {
    key: "consulting",
    icon: Lightbulb,
  },
];

const processSteps = [
  {
    key: "audit",
    number: "01",
    icon: Search,
  },
  {
    key: "plan",
    number: "02",
    icon: Lightbulb,
  },
  {
    key: "build",
    number: "03",
    icon: Settings,
  },
  {
    key: "improve",
    number: "04",
    icon: ArrowRight,
  },
] as const;

const engagementKeys = [
  "audit",
  "project",
  "support",
] as const;

export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "ServicesPage.metadata",
  });

  return createPageMetadata({
    locale,
    pathname: "/services",
    title: t("title"),
    description: t("description"),
  });
}

export default async function ServicesPage({
  params,
}: ServicesPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("ServicesPage");

  return (
    <>
      <Navbar />

      <main>
        <PageHero
          eyebrow={t("hero.eyebrow")}
          title={t("hero.title")}
          description={t("hero.description")}
          actions={
            <>
              <Link href="/contact">
                <Button className="w-full sm:w-auto">
                  {t("hero.primaryButton")}
                </Button>
              </Link>

              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="w-full border-white bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 sm:w-auto"
                >
                  {t("hero.secondaryButton")}
                </Button>
              </Link>
            </>
          }
        />

        <SectionContainer>
          <SectionHeading
            eyebrow={t("servicesSection.eyebrow")}
            title={t("servicesSection.title")}
            description={t(
              "servicesSection.description",
            )}
          />

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              const outcomes = [
                t(`services.${service.key}.outcome1`),
                t(`services.${service.key}.outcome2`),
                t(`services.${service.key}.outcome3`),
              ];

              return (
                <Card
                  key={service.key}
                  className="flex h-full flex-col p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>

                  <p className="mt-6 text-sm font-semibold text-blue-600">
                    {t(`services.${service.key}.label`)}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                    {t(`services.${service.key}.title`)}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {t(
                      `services.${service.key}.description`,
                    )}
                  </p>

                  <div className="mt-6 border-t border-slate-200 pt-6">
                    <p className="text-sm font-bold uppercase tracking-wide text-slate-950">
                      {t("servicesSection.outcomes")}
                    </p>

                    <ul className="mt-4 space-y-3">
                      {outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex gap-3 text-sm leading-6 text-slate-700"
                        >
                          <Check className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </SectionContainer>

        <SectionContainer background="slate">
          <SectionHeading
            eyebrow={t("process.eyebrow")}
            title={t("process.title")}
            description={t("process.description")}
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <Card
                  key={step.key}
                  className="relative h-full overflow-hidden p-7"
                >
                  <span className="absolute right-5 top-4 text-5xl font-black text-slate-100">
                    {step.number}
                  </span>

                  <div className="relative">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-950">
                      {t(`process.${step.key}.title`)}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {t(
                        `process.${step.key}.description`,
                      )}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </SectionContainer>

        <SectionContainer>
          <SectionHeading
            eyebrow={t("engagement.eyebrow")}
            title={t("engagement.title")}
            description={t(
              "engagement.description",
            )}
          />

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {engagementKeys.map((key) => (
              <Card
                key={key}
                className="flex h-full flex-col p-7"
              >
                <p className="text-sm font-semibold text-blue-600">
                  {t(`engagement.${key}.label`)}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  {t(`engagement.${key}.title`)}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {t(`engagement.${key}.description`)}
                </p>

                <div className="mt-6 rounded-xl bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-950">
                    {t(`engagement.${key}.bestForLabel`)}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {t(`engagement.${key}.bestFor`)}
                  </p>
                </div>

                <div className="mt-auto pt-7">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-800"
                  >
                    {t(`engagement.${key}.button`)}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer background="slate">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                {t("difference.eyebrow")}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {t("difference.title")}
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {t("difference.description")}
              </p>
            </div>

            <Card className="p-7 sm:p-8">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
                  {t("difference.servicesLabel")}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  {t("difference.servicesTitle")}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {t("difference.servicesDescription")}
                </p>
              </div>

              <div className="my-7 border-t border-slate-200" />

              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
                  {t("difference.solutionsLabel")}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  {t("difference.solutionsTitle")}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {t(
                    "difference.solutionsDescription",
                  )}
                </p>

                <Link
                  href="/portfolio"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-800"
                >
                  {t("difference.solutionsButton")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          </div>
        </SectionContainer>

        <MarketingCta
          title={t("cta.title")}
          description={t("cta.description")}
          action={
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800"
              >
                {t("cta.button")}
              </Button>
            </Link>
          }
        />
      </main>

      <Footer />
    </>
  );
}