import type { Metadata } from "next";
import {
  ArrowRight,
  Bot,
  Check,
  ClipboardList,
  FileText,
  Network,
  Settings,
  ShieldCheck,
  Sparkles,
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
import { StatusBadge } from "@/components/marketing/status-badge";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/seo";

type PricingPageProps = {
  params: Promise<{
    locale: AppLocale;
  }>;
};

type PlanKey =
  | "audit"
  | "starter"
  | "growth"
  | "support";

type Plan = {
  key: PlanKey;
  icon: typeof Workflow;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    key: "audit",
    icon: ClipboardList,
  },
  {
    key: "starter",
    icon: Workflow,
  },
  {
    key: "growth",
    icon: Sparkles,
    featured: true,
  },
  {
    key: "support",
    icon: Settings,
  },
];

const includedItems = [
  {
    key: "discovery",
    icon: ClipboardList,
  },
  {
    key: "design",
    icon: Network,
  },
  {
    key: "testing",
    icon: ShieldCheck,
  },
  {
    key: "handover",
    icon: FileText,
  },
] as const;

const customFeatures = [
  "feature1",
  "feature2",
  "feature3",
  "feature4",
  "feature5",
] as const;

const comparisons = [
  "audit",
  "starter",
  "growth",
  "support",
] as const;

const faqItems = [
  {
    question: "question1",
    answer: "answer1",
  },
  {
    question: "question2",
    answer: "answer2",
  },
  {
    question: "question3",
    answer: "answer3",
  },
  {
    question: "question4",
    answer: "answer4",
  },
  {
    question: "question5",
    answer: "answer5",
  },
  {
    question: "question6",
    answer: "answer6",
  },
] as const;

export async function generateMetadata({
  params,
}: PricingPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "PricingPage.metadata",
  });

  return createPageMetadata({
    locale,
    pathname: "/pricing",
    title: t("title"),
    description: t("description"),
  });
}

export default async function PricingPage({
  params,
}: PricingPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("PricingPage");

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
              <Link
                href={{
                  pathname: "/contact",
                  query: {
                    interest: "audit",
                  },
                }}
              >
                <Button
                  className="w-full !bg-white !text-blue-700 shadow-sm hover:!bg-blue-50 hover:!text-blue-800 sm:w-auto"
                >
                  {t("hero.primaryButton")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="w-full !border-white !bg-transparent !text-white hover:!bg-white hover:!text-blue-700 sm:w-auto"
                >
                  {t("hero.secondaryButton")}
                </Button>
              </Link>
            </>
          }
        />

        <SectionContainer>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => {
              const Icon = plan.icon;

              const features = [
                t(`plans.${plan.key}.feature1`),
                t(`plans.${plan.key}.feature2`),
                t(`plans.${plan.key}.feature3`),
                t(`plans.${plan.key}.feature4`),
                t(`plans.${plan.key}.feature5`),
              ];

              return (
                <Card
                  key={plan.key}
                  className={[
                    "relative flex h-full flex-col overflow-hidden p-0",
                    plan.featured
                      ? "border-2 border-blue-600 shadow-xl"
                      : "border-slate-200",
                  ].join(" ")}
                >
                  {plan.featured ? (
                    <div className="bg-blue-600 px-5 py-2 text-center text-sm font-semibold text-white">
                      {t("billing.recommended")}
                    </div>
                  ) : null}

                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon className="h-6 w-6" />
                      </div>

                      {plan.key === "audit" ? (
                        <StatusBadge tone="green">
                          {t("billing.free")}
                        </StatusBadge>
                      ) : null}
                    </div>

                    <h2 className="mt-6 text-2xl font-bold text-slate-950">
                      {t(`plans.${plan.key}.name`)}
                    </h2>

                    <div className="mt-5">
                      <span className="text-4xl font-bold tracking-tight text-slate-950">
                        {t(`plans.${plan.key}.price`)}
                      </span>

                      <p className="mt-2 text-sm font-medium text-slate-500">
                        {t(`plans.${plan.key}.billing`)}
                      </p>
                    </div>

                    <p className="mt-6 leading-7 text-slate-600">
                      {t(`plans.${plan.key}.description`)}
                    </p>

                    <ul className="mt-7 flex-1 space-y-4">
                      {features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                            <Check className="h-3.5 w-3.5" />
                          </span>

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={{
                        pathname: "/contact",
                        query: {
                          interest: plan.key,
                        },
                      }}
                      className="mt-8 block"
                    >
                      <Button
                        variant={
                          plan.featured
                            ? "default"
                            : "outline"
                        }
                        className={[
                          "w-full",
                          plan.featured
                            ? "!bg-blue-600 !text-white hover:!bg-blue-700"
                            : "!border-blue-600 !bg-white !text-blue-700 hover:!bg-blue-50",
                        ].join(" ")}
                      >
                        {t(`plans.${plan.key}.button`)}

                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </SectionContainer>

        <SectionContainer background="slate">
          <SectionHeading
            eyebrow={t("included.eyebrow")}
            title={t("included.title")}
            description={t("included.description")}
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {includedItems.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.key}
                  className="p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-950">
                    {t(`included.${item.key}Title`)}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {t(`included.${item.key}Description`)}
                  </p>
                </Card>
              );
            })}
          </div>
        </SectionContainer>

        <SectionContainer background="dark">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                {t("custom.eyebrow")}
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight !text-white md:text-5xl">
                {t("custom.title")}
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 !text-slate-200">
                {t("custom.description")}
              </p>

              <Link
                href={{
                  pathname: "/contact",
                  query: {
                    interest: "custom-ai",
                  },
                }}
                className="mt-8 inline-block"
              >
                <Button className="!bg-white !text-blue-700 shadow-sm hover:!bg-blue-50 hover:!text-blue-800">
                  {t("custom.button")}

                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <Card className="!border-slate-700 !bg-slate-900 p-7 !text-white shadow-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
                <Bot className="h-6 w-6" />
              </div>

              <ul className="mt-7 space-y-5">
                {customFeatures.map((featureKey) => (
                  <li
                    key={featureKey}
                    className="flex items-start gap-3 text-base font-medium leading-7 !text-slate-100"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>

                    <span className="!text-slate-100">
                      {t(`custom.${featureKey}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </SectionContainer>

        <SectionContainer>
          <SectionHeading
            eyebrow={t("comparison.eyebrow")}
            title={t("comparison.title")}
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {comparisons.map((comparison) => (
              <Card
                key={comparison}
                className="p-7"
              >
                <h3 className="text-xl font-bold text-slate-950">
                  {t(`comparison.${comparison}Title`)}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {t(`comparison.${comparison}Description`)}
                </p>
              </Card>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer
          background="slate"
          width="md"
        >
          <SectionHeading
            eyebrow={t("faq.eyebrow")}
            title={t("faq.title")}
          />

          <div className="mt-14 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950">
                  <span>{t(`faq.${item.question}`)}</span>

                  <span
                    aria-hidden="true"
                    className="text-2xl font-normal text-blue-600 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-4xl border-t border-slate-100 pt-4 leading-7 text-slate-600">
                  {t(`faq.${item.answer}`)}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="font-bold text-amber-950">
              {t("notice.title")}
            </h3>

            <p className="mt-3 leading-7 text-amber-900">
              {t("notice.description")}
            </p>
          </div>
        </SectionContainer>

        <MarketingCta
          title={t("cta.title")}
          description={t("cta.description")}
          action={
            <Link
              href={{
                pathname: "/contact",
                query: {
                  interest: "general",
                },
              }}
            >
              <Button
                variant="outline"
                className="!border-white !bg-white !text-blue-700 hover:!bg-blue-50 hover:!text-blue-800"
              >
                {t("cta.button")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          }
        />
      </main>

      <Footer />
    </>
  );
}