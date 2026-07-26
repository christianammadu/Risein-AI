import type { Metadata } from "next";

import SimplePage from "@/components/shared/SimplePage";

export const metadata: Metadata = {
  title: "TaLi SmartBookkeeper",
  description:
    "Manage everyday business records through WhatsApp and Telegram with TaLi SmartBookkeeper.",
};

export default function TaliPage() {
  return (
    <SimplePage
      eyebrow="TaLi SmartBookkeeper"
      title="Simple bookkeeping through the messaging apps you already use"
      description="TaLi helps small businesses record sales purchases stock debts and everyday financial activity through WhatsApp and Telegram."
      primaryLink={{
        label: "Request a demonstration",
        href: "/contact",
      }}
      secondaryLink={{
        label: "Explore our projects",
        href: "/projects",
      }}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Record transactions",
            text: "Capture sales purchases expenses and other business transactions through simple messages.",
          },
          {
            title: "Track stock and debts",
            text: "Monitor inventory customer debts supplier balances and important business records.",
          },
          {
            title: "Understand your business",
            text: "Receive summaries reports and useful insights without complicated accounting software.",
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