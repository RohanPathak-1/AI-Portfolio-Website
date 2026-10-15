"use client";

import { siteConfig } from "@/config/site";
import { T, useLanguage } from "./language-provider";

export function Logo() {
  const { t } = useLanguage();
  return (
    <a className="brand-mark" href="/" aria-label={t("brand.home")}>
      <span className="brand-symbol" aria-hidden="true">
        <img src="/rohan-pathak-logo.png" alt="" />
      </span>
      <span>
        <strong>{siteConfig.name}</strong>
        <small><T id="brand.title" /></small>
      </span>
    </a>
  );
}
