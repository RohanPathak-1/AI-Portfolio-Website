"use client";

import { useLanguage } from "./language-provider";

export function ArticleLanguageNote() {
  const { locale, t } = useLanguage();
  return locale === "ne" ? <p className="article-language-note" role="note">{t("blog.englishOnly")}</p> : null;
}
