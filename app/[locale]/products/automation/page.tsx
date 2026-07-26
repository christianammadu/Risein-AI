import type { Metadata } from "next";

import SimplePage from "@/components/shared/SimplePage";

export const metadata: Metadata = {
  title: "Business Automation",
  description:
    "Discover practical AI automation services from Risein AI.",
};

export default function AutomationPage() {
  return (
    <SimplePage
      eyebrow="AI Automation"
      title="Automate repetitive work and run your business smarter"
      description="We design practical workflows that connect your business tools reduce manual work and help your team save valuable time."
      primaryLink={{
        label: "Request an automation audit",
        href: "/contact",
      }}
      secondaryLink={{
        label: "View pricing",
        href: "/pricing",
      }}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Workflow automation",
            text: "Automate repetitive administrative sales finance and customer service tasks.",
          },
          {
            title: "Tool connections",
            text: "Connect forms spreadsheets email databases and other business applications.",
          },
          {
            title: "AI assistance",
            text: "Add AI-powered classification summaries responses and business insights to existing workflows.",
          },
        ].map((feature) => (
          <article
            key={feature.title}
            className="rounded-3xl border border-gray-200 bg-gray-50 p-7"
          >
            <h2 className="text-xl font-bold">{feature.title}</h2>
            <p className="mt-3 leading-7 text-gray-600">{feature.text}</p>
          </article>
        ))}
      </div>
    </SimplePage>
  );
}