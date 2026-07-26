import type { Metadata } from "next";

import SimplePage from "@/components/shared/SimplePage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Risein AI terms of service.",
};

export default function TermsPage() {
  return (
    <SimplePage
      eyebrow="Legal"
      title="Terms of Service"
      description="These terms provide general rules for using the Risein AI website products and services."
    >
      <article className="space-y-8 rounded-3xl border border-gray-200 bg-gray-50 p-7 sm:p-10">
        <section>
          <h2 className="text-2xl font-bold">Using our website</h2>
          <p className="mt-3 leading-7 text-gray-600">
            You agree to use this website lawfully and not interfere with its
            security availability or operation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Services and information</h2>
          <p className="mt-3 leading-7 text-gray-600">
            Service descriptions prices and availability may be updated as our
            products and business develop.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-3 leading-7 text-gray-600">
            Questions about these terms can be sent to Riseinnai@gmail.com.
          </p>
        </section>
      </article>
    </SimplePage>
  );
}