import type { Metadata } from "next";

import SimplePage from "@/components/shared/SimplePage";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career and collaboration opportunities with Risein AI.",
};

export default function CareerPage() {
  return (
    <SimplePage
      eyebrow="Careers"
      title="Build useful technology with us"
      description="We are building practical AI automation products and services for businesses professionals and communities."
      primaryLink={{
        label: "Contact our team",
        href: "/contact",
      }}
      secondaryLink={{
        label: "View our projects",
        href: "/projects",
      }}
    >
      <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 text-center sm:p-12">
        <h2 className="text-2xl font-bold">No open positions yet</h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
          Future opportunities including internships partnerships and project
          collaborations will be published here.
        </p>
      </div>
    </SimplePage>
  );
}