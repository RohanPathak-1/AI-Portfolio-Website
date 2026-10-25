"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { blogCategories, blogPosts, localizeBlogPost } from "@/lib/blog";
import { BlogCard } from "./blog-card";
import { useLanguage } from "./language-provider";

export function BlogExplorer() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const { locale, t } = useLanguage();
  const results = useMemo(() => blogPosts.filter((post) => {
    const categoryMatches = category === "All" || post.category === category;
    const localized = localizeBlogPost(post, locale);
    const searchable = `${localized.title} ${localized.excerpt} ${t(`blog.category.${post.category}`)}`.toLowerCase();
    return categoryMatches && searchable.includes(query.toLowerCase());
  }), [category, locale, query, t]);

  return (
    <div className="blog-explorer" data-reveal>
      <div className="blog-tools">
        <div className="category-list" aria-label={t("blog.filter")}>
          {blogCategories.map((item) => (
            <button className={category === item ? "active" : ""} type="button" key={item} onClick={() => setCategory(item)}>{item === "All" ? t("blog.all") : t(`blog.category.${item}`)}</button>
          ))}
        </div>
        <label className="search-field">
          <span className="sr-only">{t("blog.search")}</span>
          <Search size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t("blog.searchPlaceholder")} />
        </label>
      </div>
      {results.length ? (
        <div className="blog-grid">
          {results.map((post) => <BlogCard post={post} key={post.slug} />)}
        </div>
      ) : (
        <div className="empty-state"><h2>{t("blog.empty")}</h2><p>{t("blog.emptyCopy")}</p></div>
      )}
    </div>
  );
}
