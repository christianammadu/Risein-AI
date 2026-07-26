import Link from "next/link";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";

type SimplePageProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLink?: {
    label: string;
    href: string;
  };
  secondaryLink?: {
    label: string;
    href: string;
  };
  children?: React.ReactNode;
};

export default function SimplePage({
  eyebrow = "Risein AI",
  title,
  description,
  primaryLink,
  secondaryLink,
  children,
}: SimplePageProps) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white px-6 pb-24 pt-32 text-gray-900">
        <div className="mx-auto max-w-6xl">
          <section className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              {eyebrow}
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              {description}
            </p>

            {(primaryLink || secondaryLink) && (
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                {primaryLink && (
                  <Link
                    href={primaryLink.href}
                    className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    {primaryLink.label}
                  </Link>
                )}

                {secondaryLink && (
                  <Link
                    href={secondaryLink.href}
                    className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-50"
                  >
                    {secondaryLink.label}
                  </Link>
                )}
              </div>
            )}
          </section>

          {children && (
            <section className="mx-auto mt-16 max-w-5xl">
              {children}
            </section>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}