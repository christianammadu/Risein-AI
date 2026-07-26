import { redirect } from "next/navigation";

import { routing } from "@/i18n/routing";

export default function CommunityRedirectPage() {
  redirect(`/${routing.defaultLocale}/community`);
}
