import type { Metadata } from "next";

import SimplePage from "@/components/shared/SimplePage";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Explore practical AI automation business and career resources from Risein AI.",
};

export default function ResourcesPage() {
  return (
    <SimplePage
      eyebrow="Resources"
      title="Useful resources for work and business growth"
      description="Explore practical guides templates tools and learning materials created for businesses professionals and entrepreneurs."
      primaryLink={{
        label: "Read our blog",
        href: "/blog",
      }}
      secondaryLink={{
        label: "Join our newsletter",
        href: "/#newsletter",
      }}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "AI and automation",
            text: "Practical guides for using AI tools and automating repetitive business tasks.",
          },
          {
            title: "Business growth",
            text: "Resources for improving operations marketing customer service and decision making.",
          },
          {
            title: "Career development",
            text: "Helpful information for building skills finding opportunities and growing professionally.",
          },
        ].map((resource) => (
          <article
            key={resource.title}
            className="rounded-3xl border border-gray-200 bg-gray-50 p-7"
          >
            <h2 className="text-xl font-bold">{resource.title}</h2>
            <p className="mt-3 leading-7 text-gray-600">{resource.text}</p>
          </article>
        ))}
      </div>
    </SimplePage>
  );
}