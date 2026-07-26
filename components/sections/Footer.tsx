import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

const companyLinks = [
  {
    key: "about",
    href: "/about",
  },
  {
    key: "services",
    href: "/services",
  },
  {
    key: "solutions",
    href: "/portfolio",
  },
  {
    key: "blog",
    href: "/blog",
  },
  {
    key: "contact",
    href: "/contact",
  },
] as const;

const platformLinks = [
  {
    key: "opportunities",
    href: "/opportunities",
  },
  {
    key: "community",
    href: "/community",
  },
  {
    key: "marketplace",
    href: "/marketplace",
  },
] as const;

export default async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold"
              aria-label="Risein.ee"
            >
              Risein AI
            </Link>

            <p className="mt-5 max-w-sm leading-7 text-slate-400">
              {t("description")}
            </p>
          </div>

          <div>
            <h2 className="font-semibold">
              {t("company")}
            </h2>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition hover:text-white"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold">
              {t("platform")}
            </h2>

            <ul className="mt-5 space-y-3">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition hover:text-white"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold">
              {t("contact")}
            </h2>

            <div className="mt-5 space-y-3 text-slate-400">
              <a
                href="mailto:riseinnai@gmail.com"
                className="transition hover:text-white"
              >
                riseinnai@gmail.com
              </a>

              <p>{t("location")}</p>
            </div>

            <ul className="mt-6 space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {t("privacy")}
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {t("terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-800 pt-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Risein AI.{" "}
          {t("rights")}
        </div>
      </div>
    </footer>
  );
}