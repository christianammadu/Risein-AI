"use client";

import {
  useLocale,
  useTranslations,
} from "next-intl";
import { useTransition } from "react";

import {
  usePathname,
  useRouter,
} from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

const localeOptions: Array<{
  value: AppLocale;
  flag: string;
  translationKey:
    | "english"
    | "estonian"
    | "russian";
}> = [
  {
    value: "en",
    flag: "🇬🇧",
    translationKey: "english",
  },
  {
    value: "et",
    flag: "🇪🇪",
    translationKey: "estonian",
  },
  {
    value: "ru",
    flag: "🇷🇺",
    translationKey: "russian",
  },
];

export function LanguageSwitcher() {
  const t = useTranslations(
    "LocaleSwitcher"
  );

  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();

  const [isPending, startTransition] =
    useTransition();

  function changeLanguage(
    nextLocale: AppLocale
  ) {
    if (nextLocale === locale) {
      return;
    }

    startTransition(() => {
      router.replace(pathname, {
        locale: nextLocale,
      });
    });
  }

  return (
    <label className="relative">
      <span className="sr-only">
        {t("label")}
      </span>

      <select
        value={locale}
        disabled={isPending}
        aria-label={t("label")}
        onChange={(event) =>
          changeLanguage(
            event.target.value as AppLocale
          )
        }
        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:cursor-wait disabled:opacity-60"
      >
        {localeOptions.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.flag}{" "}
            {t(option.translationKey)}
          </option>
        ))}
      </select>
    </label>
  );
}