"use client";

import { useLanguage } from "./language-provider";

export function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const { locale, setLocale, t } = useLanguage();
  return <div className={`language-switcher ${mobile ? "mobile" : ""}`} role="group" aria-label={t("language.label")}>
    <button type="button" aria-pressed={locale === "en"} onClick={() => setLocale("en")}>EN</button>
    <span aria-hidden="true">|</span>
    <button type="button" lang="ne" aria-pressed={locale === "ne"} onClick={() => setLocale("ne")}>नेपाली</button>
  </div>;
}
