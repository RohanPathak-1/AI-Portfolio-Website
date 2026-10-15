"use client";

import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Logo } from "./logo";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "./language-provider";

const navigation = [
  { href: "/", label: "nav.home" },
  { href: "/about", label: "nav.about" },
  { href: "/services", label: "nav.services" },
  { href: "/blog", label: "nav.blog" },
  { href: "/contact", label: "nav.contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label={t("nav.primary")}>
          {navigation.map((item) => (
            <a className={pathname === item.href ? "active" : ""} href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {t(item.label)}
            </a>
          ))}
        </nav>
        <LanguageSwitcher />
        <a className="button button-small header-cta" href={siteConfig.bookingUrl}>{t("common.book")}</a>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? t("nav.close") : t("nav.open")}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={`mobile-menu ${open ? "is-open" : ""}`} id="mobile-menu">
        <nav className="container" aria-label={t("nav.mobile")}>
          <LanguageSwitcher mobile />
          {navigation.map((item) => (
            <a className={pathname === item.href ? "active" : ""} href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {t(item.label)}
            </a>
          ))}
          <a className="button" href={siteConfig.bookingUrl} onClick={() => setOpen(false)}>{t("common.book")}</a>
        </nav>
      </div>
    </header>
  );
}
