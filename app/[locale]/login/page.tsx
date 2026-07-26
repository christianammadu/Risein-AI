import type { Metadata } from "next";

import SimplePage from "@/components/shared/SimplePage";

export const metadata: Metadata = {
  title: "Log in",
  description: "Log in to your Risein AI account.",
};

export default function LoginPage() {
  return (
    <SimplePage
      eyebrow="Account"
      title="Log in to Risein AI"
      description="Secure account access is being prepared and will become available soon."
      primaryLink={{
        label: "Return home",
        href: "/",
      }}
      secondaryLink={{
        label: "Create an account",
        href: "/signup",
      }}
    >
      <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 text-center sm:p-12">
        <h2 className="text-2xl font-bold">Login coming soon</h2>

        <p className="mt-4 leading-7 text-gray-600">
          You do not need an account to explore our current services and
          products.
        </p>
      </div>
    </SimplePage>
  );
}