import type { Metadata } from "next";

import SimplePage from "@/components/shared/SimplePage";

export const metadata: Metadata = {
  title: "PersonaLab AI",
  description:
    "Test ideas and understand customer reactions with PersonaLab AI.",
};

export default function PersonaLabPage() {
  return (
    <SimplePage
      eyebrow="PersonaLab AI"
      title="Test your ideas before spending heavily on them"
      description="PersonaLab AI simulates how different customer types may react to a product service campaign or business idea."
      primaryLink={{
        label: "Discuss your idea",
        href: "/contact",
      }}
      secondaryLink={{
        label: "View our portfolio",
        href: "/portfolio",
      }}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Customer perspectives",
            text: "Review your idea from the viewpoint of different potential customer groups.",
          },
          {
            title: "Market feedback",
            text: "Identify possible concerns strengths objections and pricing reactions early.",
          },
          {
            title: "Better decisions",
            text: "Use structured insights to improve your idea before investing more time and money.",
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