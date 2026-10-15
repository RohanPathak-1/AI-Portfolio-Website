"use client";

import { ArrowUpRight } from "lucide-react";
import { BlogPost, formatDate } from "@/lib/blog";
import { useLanguage } from "./language-provider";

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  const { locale, t } = useLanguage();
  return (
    <article className={`blog-card ${featured ? "featured" : ""}`} data-reveal>
      <a href={`/blog/${post.slug}`} className={`blog-visual visual-${post.visual}`} aria-label={`Read ${post.title}`}>
        <span className="visual-lines" aria-hidden="true" />
        <span className="visual-kicker">{t(`blog.category.${post.category}`)}</span>
        <span className="visual-number">0{post.slug === "what-is-ai-powered-marketing" ? 3 : post.slug.includes("seven") ? 2 : 1}</span>
      </a>
      <div className="blog-card-content">
        <div className="article-meta"><span>{t(`blog.category.${post.category}`)}</span><time dateTime={post.publishedAt}>{formatDate(post.publishedAt, locale)}</time></div>
        <h2><a href={`/blog/${post.slug}`}>{post.title}</a></h2>
        <p>{post.excerpt}</p>
        {locale === "ne" && <small className="language-note">{t("blog.englishOnly")}</small>}
        <a className="text-link" href={`/blog/${post.slug}`}>{t("blog.read")} <ArrowUpRight size={15} /></a>
      </div>
    </article>
  );
}
