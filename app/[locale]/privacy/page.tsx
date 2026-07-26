import type { Metadata } from "next";

import SimplePage from "@/components/shared/SimplePage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Risein AI privacy policy.",
};

export default function PrivacyPage() {
  return (
    <SimplePage
      eyebrow="Legal"
      title="Privacy Policy"
      description="This page explains how Risein AI handles information submitted through our website and services."
    >
      <article className="space-y-8 rounded-3xl border border-gray-200 bg-gray-50 p-7 sm:p-10">
        <section>
          <h2 className="text-2xl font-bold">Information we collect</h2>
          <p className="mt-3 leading-7 text-gray-600">
            We may collect information you voluntarily provide through contact
            forms newsletter forms service requests and account registration.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">How information is used</h2>
          <p className="mt-3 leading-7 text-gray-600">
            Information may be used to respond to enquiries provide requested
            services improve the website and communicate important updates.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-3 leading-7 text-gray-600">
            Privacy questions can be sent to Riseinnai@gmail.com.
          </p>
        </section>
      </article>
    </SimplePage>
  );
}