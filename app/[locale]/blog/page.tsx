import { setRequestLocale } from "next-intl/server";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";
import type { AppLocale } from "@/i18n/routing";

type BlogPageProps = {
  params: Promise<{
    locale: AppLocale;
  }>;
};

export default async function BlogPage({
  params,
}: BlogPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white px-6 pb-24 pt-32 text-gray-900">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Risein AI Blog
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Practical ideas for smarter business growth
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore useful insights about AI automation bookkeeping business
              growth career opportunities and digital tools.
            </p>
          </div>

          <section className="mt-16">
            <div className="rounded-3xl border border-gray-200 bg-gray-50 px-6 py-16 text-center sm:px-12">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Our first articles are coming soon
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
                We are preparing practical guides case studies and helpful
                resources for businesses professionals and entrepreneurs.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}