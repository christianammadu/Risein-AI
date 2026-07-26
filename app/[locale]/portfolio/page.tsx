import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  Check,
  Clock3,
  MessageCircle,
  PackageSearch,
  Sparkles,
  Users,
  WalletCards,
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

type SolutionsPageProps = {
  params: Promise<{
    locale: AppLocale;
  }>;
};

const taliFeatures = [
  {
    key: "transactions",
    icon: WalletCards,
  },
  {
    key: "inventory",
    icon: PackageSearch,
  },
  {
    key: "debts",
    icon: Clock3,
  },
  {
    key: "reports",
    icon: BarChart3,
  },
] as const;

const personaFeatures = [
  "personas",
  "validation",
  "feedback",
  "recommendations",
] as const;

const platformSolutions = [
  {
    key: "opportunities",
    icon: BriefcaseBusiness,
  },
  {
    key: "community",
    icon: Users,
  },
  {
    key: "marketplace",
    icon: BookOpen,
  },
] as const;

export async function generateMetadata({
  params,
}: SolutionsPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "PortfolioPage.metadata",
  });

  return createPageMetadata({
    locale,
    pathname: "/portfolio",
    title: t("title"),
    description: t("description"),
  });
}

export default async function SolutionsPage({
  params,
}: SolutionsPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("PortfolioPage");

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
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 sm:w-auto">
                  {t("hero.primaryButton")}
                </Button>
              </Link>

              <Link href="/services">
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
            eyebrow={t("introduction.eyebrow")}
            title={t("introduction.title")}
            description={t("introduction.description")}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="p-7">
              <Bot className="h-7 w-7 text-blue-600" />

              <p className="mt-5 text-3xl font-black text-slate-950">
                {t("introduction.stat1.value")}
              </p>

              <p className="mt-2 leading-7 text-slate-600">
                {t("introduction.stat1.label")}
              </p>
            </Card>

            <Card className="p-7">
              <MessageCircle className="h-7 w-7 text-blue-600" />

              <p className="mt-5 text-3xl font-black text-slate-950">
                {t("introduction.stat2.value")}
              </p>

              <p className="mt-2 leading-7 text-slate-600">
                {t("introduction.stat2.label")}
              </p>
            </Card>

            <Card className="p-7">
              <Sparkles className="h-7 w-7 text-blue-600" />

              <p className="mt-5 text-3xl font-black text-slate-950">
                {t("introduction.stat3.value")}
              </p>

              <p className="mt-2 leading-7 text-slate-600">
                {t("introduction.stat3.label")}
              </p>
            </Card>
          </div>
        </SectionContainer>

        <SectionContainer background="slate">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                {t("tali.eyebrow")}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                {t("tali.title")}
              </h2>

              <p className="mt-4 text-xl font-semibold text-blue-600">
                {t("tali.subtitle")}
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {t("tali.description")}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                  {t("tali.status")}
                </span>

                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                  WhatsApp
                </span>

                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                  Telegram
                </span>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 font-bold text-blue-600 transition hover:text-blue-800"
              >
                {t("tali.button")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <Card className="overflow-hidden border-blue-100 p-3 shadow-xl">
              <div className="rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">
                      TaLi SmartBookkeeper
                    </p>

                    <p className="mt-1 text-xl font-bold">
                      {t("tali.previewTitle")}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600">
                    <Bot className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-8 rounded-2xl bg-slate-900 p-5">
                  <p className="text-sm text-slate-400">
                    {t("tali.previewUser")}
                  </p>

                  <p className="mt-2 leading-7">
                    {t("tali.previewMessage")}
                  </p>
                </div>

                <div className="mt-4 rounded-2xl bg-blue-600 p-5">
                  <p className="font-semibold">
                    {t("tali.previewResponse")}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-blue-100">
                    {t("tali.previewDetails")}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {taliFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card key={feature.key} className="h-full p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {t(`tali.features.${feature.key}.title`)}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {t(
                      `tali.features.${feature.key}.description`,
                    )}
                  </p>
                </Card>
              );
            })}
          </div>
        </SectionContainer>

        <SectionContainer>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Card className="order-2 overflow-hidden p-3 shadow-xl lg:order-1">
              <div className="rounded-2xl bg-gradient-to-br from-violet-50 to-blue-50 p-6 sm:p-8">
                <p className="text-sm font-bold uppercase tracking-widest text-violet-700">
                  {t("persona.previewEyebrow")}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-slate-950">
                  {t("persona.previewTitle")}
                </h3>

                <div className="mt-7 space-y-4">
                  {personaFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex gap-3 rounded-xl bg-white p-4 shadow-sm"
                    >
                      <Check className="mt-1 h-5 w-5 shrink-0 text-violet-600" />

                      <div>
                        <p className="font-bold text-slate-950">
                          {t(
                            `persona.features.${feature}.title`,
                          )}
                        </p>

                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {t(
                            `persona.features.${feature}.description`,
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <div className="order-1 lg:order-2">
              <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
                {t("persona.eyebrow")}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                {t("persona.title")}
              </h2>

              <p className="mt-4 text-xl font-semibold text-violet-600">
                {t("persona.subtitle")}
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {t("persona.description")}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
                  {t("persona.status")}
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                  AI Personas
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                  Market Validation
                </span>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 font-bold text-violet-600 transition hover:text-violet-800"
              >
                {t("persona.button")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer background="slate">
          <SectionHeading
            eyebrow={t("platforms.eyebrow")}
            title={t("platforms.title")}
            description={t("platforms.description")}
          />

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {platformSolutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <Card
                  key={solution.key}
                  className="flex h-full flex-col p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>

                  <p className="mt-6 text-sm font-semibold text-blue-600">
                    {t(`platforms.${solution.key}.label`)}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-slate-950">
                    {t(`platforms.${solution.key}.title`)}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {t(
                      `platforms.${solution.key}.description`,
                    )}
                  </p>

                  <div className="mt-auto pt-7">
                    <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                      {t(`platforms.${solution.key}.status`)}
                    </span>
                  </div>
                </Card>
              );
            })}
          </div>
        </SectionContainer>

        <SectionContainer>
          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                  {t("custom.eyebrow")}
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  {t("custom.title")}
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {t("custom.description")}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <ul className="space-y-4">
                  {(["one", "two", "three", "four"] as const).map(
                    (item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-slate-700"
                      >
                        <Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                        <span>{t(`custom.items.${item}`)}</span>
                      </li>
                    ),
                  )}
                </ul>

                <Link href="/services">
                  <Button className="mt-7 w-full sm:w-auto">
                    {t("custom.button")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
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