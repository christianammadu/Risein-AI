import type { Metadata } from "next";

import { getPathname } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

type InternalPathname =
  | "/"
  | "/about"
  | "/services"
  | "/portfolio"
  | "/projects"
  | "/pricing"
  | "/blog"
  | "/opportunities"
  | "/community"
  | "/marketplace"
  | "/contact"
  | "/login";

type CreatePageMetadataOptions = {
  locale: AppLocale;
  pathname: InternalPathname;
  title: string;
  description: string;
  image?: string;
};

const openGraphLocales: Record<AppLocale, string> = {
  en: "en_US",
  et: "et_EE",
  ru: "ru_RU",
};

export function createPageMetadata({
  locale,
  pathname,
  title,
  description,
  image = "/opengraph-image.png",
}: CreatePageMetadataOptions): Metadata {
  const canonical = getPathname({
    locale,
    href: pathname,
  });

  const englishPath = getPathname({
    locale: "en",
    href: pathname,
  });

  const estonianPath = getPathname({
    locale: "et",
    href: pathname,
  });

  const russianPath = getPathname({
    locale: "ru",
    href: pathname,
  });

  return {
    title,
    description,

    alternates: {
      canonical,

      languages: {
        en: englishPath,
        et: estonianPath,
        ru: russianPath,
        "x-default": englishPath,
      },
    },

    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Risein AI",
      type: "website",
      locale: openGraphLocales[locale],
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}