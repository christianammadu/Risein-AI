import Link from "next/link";
import {
  BookOpen,
  Handshake,
  Lightbulb,
  MessagesSquare,
} from "lucide-react";
import { setRequestLocale } from "next-intl/server";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { AppLocale } from "@/i18n/routing";

const benefits = [
  {
    icon: MessagesSquare,
    title: "Ask and Discuss",
    description:
      "Ask practical questions and learn from other professionals founders and job seekers.",
  },
  {
    icon: BookOpen,
    title: "Learn Together",
    description:
      "Share useful guides lessons tools and learning resources.",
  },
  {
    icon: Handshake,
    title: "Build Connections",
    description:
      "Connect with people across Estonia Germany Nigeria Kenya and the wider international community.",
  },
  {
    icon: Lightbulb,
    title: "Share Opportunities",
    description:
      "Help other members discover jobs grants scholarships events and business opportunities.",
  },
];

type CommunityPageProps = {
  params: Promise<{
    locale: AppLocale;
  }>;
};

export default async function CommunityPage({
  params,
}: CommunityPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <>
      <Navbar />

      <main>
        <section className="bg-slate-950 py-24 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Risein AI Community
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-6xl">
              A community for learning sharing and growth
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              Risein AI will connect professionals founders students job
              seekers and businesses through useful conversations and shared
              opportunities.
            </p>

            <Button asChild className="mt-9">
              <Link href={`/${locale}/contact`}>
                Register Your Interest
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center text-blue-900">
              Community accounts and discussions will be activated during the
              authentication and dashboard stage.
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <Card
                    key={benefit.title}
                    className="p-6"
                  >
                    <Icon className="h-8 w-8 text-blue-600" />

                    <h2 className="mt-5 text-xl font-bold">
                      {benefit.title}
                    </h2>

                    <p className="mt-4 leading-7 text-slate-600">
                      {benefit.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}