import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "et", "ru"],

  defaultLocale: "en",

  localePrefix: "always",

  localeDetection: true,

  pathnames: {
    "/": "/",

    "/services": {
      en: "/services",
      et: "/teenused",
      ru: "/uslugi",
    },

    /**
     * Internal pathname: /portfolio
     * Public localized pathname: /solutions
     */
    "/portfolio": {
      en: "/solutions",
      et: "/lahendused",
      ru: "/resheniya",
    },

    /**
     * Legacy route retained only for redirection.
     */
    "/projects": {
      en: "/projects",
      et: "/projektid",
      ru: "/proekty",
    },

    "/pricing": {
      en: "/pricing",
      et: "/hinnad",
      ru: "/tseny",
    },

    "/blog": {
      en: "/blog",
      et: "/blogi",
      ru: "/blog",
    },

    "/opportunities": {
      en: "/opportunities",
      et: "/voimalused",
      ru: "/vozmozhnosti",
    },

    "/community": {
      en: "/community",
      et: "/kogukond",
      ru: "/soobshchestvo",
    },

    "/marketplace": {
      en: "/marketplace",
      et: "/turg",
      ru: "/marketpleys",
    },

    "/about": {
      en: "/about",
      et: "/meist",
      ru: "/o-nas",
    },

    "/contact": {
      en: "/contact",
      et: "/kontakt",
      ru: "/kontakty",
    },

    "/login": {
      en: "/login",
      et: "/sisselogimine",
      ru: "/vhod",
    },
    "/privacy": {
  en: "/privacy",
  et: "/privaatsus",
  ru: "/konfidentsialnost",
    },

"/terms": {
  en: "/terms",
  et: "/kasutustingimused",
  ru: "/usloviya",
    },
  },
});

export type AppLocale =
  (typeof routing.locales)[number];