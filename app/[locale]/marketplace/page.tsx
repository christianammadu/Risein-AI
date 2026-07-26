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

export default async function MarketplacePage({
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
            Risein AI Marketplace
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Our marketplace is currently being prepared.
            Soon businesses and professionals will discover
            AI tools templates digital products and services.
          </p>

          <Button asChild className="mt-8">
            <Link href={`/${locale}/contact`}>
              Join the waiting list
            </Link>
          </Button>

          <div className="mt-16">
            <Card className="p-8">
              Marketplace launching soon.
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}