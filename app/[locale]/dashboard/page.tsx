import type { Metadata } from "next";

import SimplePage from "@/components/shared/SimplePage";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Access your Risein AI account and services.",
};

export default function DashboardPage() {
  return (
    <SimplePage
      eyebrow="Dashboard"
      title="Your Risein AI workspace"
      description="The customer dashboard is being prepared. It will provide access to services requests projects resources and account information."
      primaryLink={{
        label: "Return home",
        href: "/",
      }}
      secondaryLink={{
        label: "Contact support",
        href: "/contact",
      }}
    >
      <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 text-center sm:p-12">
        <h2 className="text-2xl font-bold">Dashboard coming soon</h2>

        <p className="mt-4 leading-7 text-gray-600">
          Account features are currently under development.
        </p>
      </div>
    </SimplePage>
  );
}