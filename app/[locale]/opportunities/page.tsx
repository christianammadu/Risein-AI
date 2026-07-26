import Link from "next/link";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { setRequestLocale } from "next-intl/server";

import type { AppLocale } from "@/i18n/routing";

type Props = {
  params: Promise<{
    locale: AppLocale;
  }>;
};

export default async function OpportunitiesPage({
  params,
}: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <>
      <Navbar />

      <main className="min-h-screen px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-5xl font-bold">
            Opportunities
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Discover jobs scholarships grants internships
            funding competitions and business opportunities.
          </p>

          <Button asChild className="mt-8">
            <Link href={`/${locale}/contact`}>
              Get notified
            </Link>
          </Button>

          <div className="mt-16">
            <Card className="p-8">
              Opportunity listings will be available soon.
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}