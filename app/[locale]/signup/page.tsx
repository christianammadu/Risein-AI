import type { Metadata } from "next";

import SimplePage from "@/components/shared/SimplePage";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Create a Risein AI account.",
};

export default function SignupPage() {
  return (
    <SimplePage
      eyebrow="Account"
      title="Create your Risein AI account"
      description="Account registration is being prepared. You can still explore our services contact us and join our newsletter."
      primaryLink={{
        label: "Contact us",
        href: "/contact",
      }}
      secondaryLink={{
        label: "Return home",
        href: "/",
      }}
    >
      <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 text-center sm:p-12">
        <h2 className="text-2xl font-bold">Registration coming soon</h2>

        <p className="mt-4 leading-7 text-gray-600">
          We are building a secure and simple account experience.
        </p>
      </div>
    </SimplePage>
  );
}