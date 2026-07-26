import type { Metadata } from "next";
import {
  Bot,
  CheckCircle2,
  Clock3,
  Mail,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";
import {
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import SmartContactForm from "@/components/contact/SmartContactForm";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionContainer } from "@/components/marketing/section-container";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";
import { Card } from "@/components/ui/card";
import type { AppLocale } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/seo";

type ContactPageProps = {
  params: Promise<{
    locale: AppLocale;
  }>;
  searchParams: Promise<{
    interest?: string | string[];
  }>;
};

const contactBenefits = [
  {
    key: "practical",
    icon: Bot,
  },
  {
    key: "response",
    icon: Clock3,
  },
  {
    key: "clear",
    icon: MessageSquareText,
  },
] as const;

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "ContactPage.metadata",
  });

  return createPageMetadata({
    locale,
    pathname: "/contact",
    title: t("title"),
    description: t("description"),
  });
}

export default async function ContactPage({
  params,
  searchParams,
}: ContactPageProps) {
  const { locale } = await params;
  const resolvedSearchParams =
    await searchParams;

  setRequestLocale(locale);

  const t = await getTranslations(
    "ContactPage",
  );

  const interestValue =
    typeof resolvedSearchParams.interest ===
    "string"
      ? resolvedSearchParams.interest
      : undefined;

  return (
    <>
      <Navbar />

      <main>
        <PageHero
          eyebrow={t("hero.eyebrow")}
          title={t("hero.title")}
          description={t("hero.description")}
        />

        <SectionContainer>
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                {t("details.eyebrow")}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {t("details.title")}
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {t("details.description")}
              </p>

              <div className="mt-8 space-y-4">
                {contactBenefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <Card
                      key={benefit.key}
                      className="flex items-start gap-4 p-5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="font-bold text-slate-950">
                          {t(
                            `details.benefits.${benefit.key}.title`,
                          )}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {t(
                            `details.benefits.${benefit.key}.description`,
                          )}
                        </p>
                      </div>
                    </Card>
                  );
                })}
              </div>

              <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />

                  <p className="font-bold text-slate-950">
                    {t("details.emailTitle")}
                  </p>
                </div>

                <p className="mt-3 text-slate-700">
                  {t("details.emailDescription")}
                </p>

                <a
                  href="mailto:Riseinnai@gmail.com"
                  className="mt-3 inline-block font-bold text-blue-700 hover:text-blue-900"
                >
                  Riseinnai@gmail.com
                </a>
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                {t("details.privacy")}
              </div>
            </div>

            <SmartContactForm
              initialInterest={interestValue}
            />
          </div>
        </SectionContainer>

        <SectionContainer background="slate">
          <div className="mx-auto max-w-3xl text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-blue-600" />

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950">
              {t("expectation.title")}
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              {t("expectation.description")}
            </p>
          </div>
        </SectionContainer>
      </main>

      <Footer />
    </>
  );
}