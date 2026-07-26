import type { Metadata } from "next";
import {
  Bot,
  Compass,
  Handshake,
  Lightbulb,
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

type AboutPageProps = {
  params: Promise<{
    locale: AppLocale;
  }>;
};

const valueKeys = [
  {
    key: "practical",
    icon: Lightbulb,
  },
  {
    key: "human",
    icon: Handshake,
  },
  {
    key: "responsible",
    icon: Compass,
  },
  {
    key: "improvement",
    icon: Bot,
  },
] as const;

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "AboutPage.metadata",
  });

  return createPageMetadata({
    locale,
    pathname: "/about",
    title: t("title"),
    description: t("description"),
  });
}

export default async function AboutPage({
  params,
}: AboutPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("AboutPage");

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
                <Button>{t("hero.primaryButton")}</Button>
              </Link>

              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="border-white !bg-transparent !text-white hover:!bg-white hover:!text-blue-700"
                >
                  {t("hero.secondaryButton")}
                </Button>
              </Link>
            </>
          }
        />

        <SectionContainer>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                {t("mission.eyebrow")}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {t("mission.title")}
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>{t("mission.description1")}</p>
              <p>{t("mission.description2")}</p>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer background="slate">
          <SectionHeading
            eyebrow={t("values.eyebrow")}
            title={t("values.title")}
            description={t("values.description")}
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {valueKeys.map((value) => {
              const Icon = value.icon;

              return (
                <Card
                  key={value.key}
                  className="h-full p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-950">
                    {t(`values.${value.key}.title`)}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {t(
                      `values.${value.key}.description`,
                    )}
                  </p>
                </Card>
              );
            })}
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