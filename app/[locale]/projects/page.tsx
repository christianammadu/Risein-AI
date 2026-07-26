import { redirect } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

type ProjectsRedirectPageProps = {
  params: Promise<{
    locale: AppLocale;
  }>;
};

export default async function ProjectsRedirectPage({
  params,
}: ProjectsRedirectPageProps) {
  const { locale } = await params;

  redirect({
    href: "/portfolio",
    locale,
  });
}