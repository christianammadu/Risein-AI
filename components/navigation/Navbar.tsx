"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Link, usePathname } from "@/i18n/navigation";

const links = [
  {
    key: "services",
    href: "/services",
  },
  {
    key: "solutions",
    href: "/portfolio",
  },
  {
    key: "pricing",
    href: "/pricing",
  },
  {
    key: "blog",
    href: "/blog",
  },
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
  {
    key: "about",
    href: "/about",
  },
] as const;

export default function Navbar() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav
        aria-label={t("mainNavigation")}
        className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-6"
      >
        <Link
          href="/"
          className="shrink-0 text-2xl font-bold tracking-tight text-slate-950"
          aria-label={t("home")}
          onClick={closeMobileMenu}
        >
          Risein AI
        </Link>

        <div className="hidden items-center gap-4 xl:flex">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "text-[13px] font-semibold text-blue-600"
                    : "text-[13px] font-medium text-slate-700 transition hover:text-blue-600"
                }
              >
                {t(link.key)}
              </Link>
            );
          })}
        </div>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <LanguageSwitcher />

          <Link href="/login">
            <Button variant="outline">{t("signIn")}</Button>
          </Link>

          <Link href="/contact">
            <Button>{t("freeAudit")}</Button>
          </Link>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          onClick={() => setMobileOpen((current) => !current)}
        >
          {mobileOpen ? (
            <X aria-hidden="true" className="h-6 w-6" />
          ) : (
            <Menu aria-hidden="true" className="h-6 w-6" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-6 py-5 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => {
              const isActive =
                pathname === link.href ||
                pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    isActive
                      ? "rounded-lg bg-blue-50 px-3 py-2.5 font-semibold text-blue-700"
                      : "rounded-lg px-3 py-2.5 font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
                  }
                  onClick={closeMobileMenu}
                >
                  {t(link.key)}
                </Link>
              );
            })}

            <div className="my-3 border-t border-slate-200" />

            <LanguageSwitcher />

            <Link href="/login" onClick={closeMobileMenu}>
              <Button variant="outline" className="mt-2 w-full">
                {t("signIn")}
              </Button>
            </Link>

            <Link href="/contact" onClick={closeMobileMenu}>
              <Button className="w-full">{t("freeAudit")}</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}