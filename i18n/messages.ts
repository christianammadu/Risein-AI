import type { AppLocale } from "@/i18n/routing";

export type IntlMessages = Record<
  string,
  Record<string, unknown>
>;

async function loadEnglishMessages(): Promise<IntlMessages> {
  const [
    common,
    home,
    services,
    portfolio,
    pricing,
    blog,
    about,
    contact,
  ] = await Promise.all([
    import("../messages/en/common.json"),
    import("../messages/en/home.json"),
    import("../messages/en/services.json"),
    import("../messages/en/portfolio.json"),
    import("../messages/en/pricing.json"),
    import("../messages/en/blog.json"),
    import("../messages/en/about.json"),
    import("../messages/en/contact.json"),
  ]);

  return {
    ...common.default,
    ...home.default,
    ...services.default,
    ...portfolio.default,
    ...pricing.default,
    ...blog.default,
    ...about.default,
    ...contact.default,
  };
}

async function loadEstonianMessages(): Promise<IntlMessages> {
  const [
    common,
    home,
    services,
    portfolio,
    pricing,
    blog,
    about,
    contact,
  ] = await Promise.all([
    import("../messages/et/common.json"),
    import("../messages/et/home.json"),
    import("../messages/et/services.json"),
    import("../messages/et/portfolio.json"),
    import("../messages/et/pricing.json"),
    import("../messages/et/blog.json"),
    import("../messages/et/about.json"),
    import("../messages/et/contact.json"),
  ]);

  return {
    ...common.default,
    ...home.default,
    ...services.default,
    ...portfolio.default,
    ...pricing.default,
    ...blog.default,
    ...about.default,
    ...contact.default,
  };
}

async function loadRussianMessages(): Promise<IntlMessages> {
  const [
    common,
    home,
    services,
    portfolio,
    pricing,
    blog,
    about,
    contact,
  ] = await Promise.all([
    import("../messages/ru/common.json"),
    import("../messages/ru/home.json"),
    import("../messages/ru/services.json"),
    import("../messages/ru/portfolio.json"),
    import("../messages/ru/pricing.json"),
    import("../messages/ru/blog.json"),
    import("../messages/ru/about.json"),
    import("../messages/ru/contact.json"),
  ]);

  return {
    ...common.default,
    ...home.default,
    ...services.default,
    ...portfolio.default,
    ...pricing.default,
    ...blog.default,
    ...about.default,
    ...contact.default,
  };
}

const messageLoaders: Record<
  AppLocale,
  () => Promise<IntlMessages>
> = {
  en: loadEnglishMessages,
  et: loadEstonianMessages,
  ru: loadRussianMessages,
};

export async function loadMessages(
  locale: AppLocale,
): Promise<IntlMessages> {
  return messageLoaders[locale]();
}