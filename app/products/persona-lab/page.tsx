import { redirect } from "next/navigation";

import { routing } from "@/i18n/routing";

export default function ProductsPersonaLabRedirectPage() {
  redirect("/" + routing.defaultLocale + "/products/persona-lab");
}
