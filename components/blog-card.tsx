"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { BlogPost, formatDate, localizeBlogPost } from "@/lib/blog";
import { useLanguage } from "./language-provider";

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  const { locale, t } = useLanguage();
  const localized = localizeBlogPost(post, locale);
  return (
    <article className={`blog-card ${featured ? "featured" : ""}`} data-reveal>
      <a href={`/blog/${post.slug}`} className="blog-visual" aria-label={`${t("blog.read")}: ${localized.title}`}>
        <Image className="blog-image" src={post.image.src} alt={post.image.alt[locale]} fill sizes={featured ? "(max-width: 980px) 100vw, 50vw" : "(max-width: 650px) 100vw, (max-width: 980px) 50vw, 33vw"} />
      </a>
      <div className="blog-card-content">
        <div className="article-meta"><span>{t(`blog.category.${post.category}`)}</span><time dateTime={post.publishedAt}>{formatDate(post.publishedAt, locale)}</time></div>
        <h2><a href={`/blog/${post.slug}`}>{localized.title}</a></h2>
        <p>{localized.excerpt}</p>
        <a className="text-link" href={`/blog/${post.slug}`}>{t("blog.read")} <ArrowUpRight size={15} /></a>
      </div>
    </article>
  );
}
