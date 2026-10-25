"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BlogPost, formatDate, localizeBlogPost } from "@/lib/blog";
import { BlogCard } from "./blog-card";
import { useLanguage } from "./language-provider";

export function BlogArticle({ post, related }: { post: BlogPost; related: BlogPost[] }) {
  const { locale, t } = useLanguage();
  const localized = localizeBlogPost(post, locale);

  return <>
    <article lang={locale}>
      <header className="article-header article-shell">
        <div className="breadcrumb" style={{ justifyContent: "center" }}><a href="/blog">{t("footer.insights")}</a><span>/</span><span>{t(`blog.category.${post.category}`)}</span></div>
        <div className="article-meta"><span>{t(`blog.category.${post.category}`)}</span><time dateTime={post.publishedAt}>{formatDate(post.publishedAt, locale)}</time><span>{localized.readingTime}</span></div>
        <h1>{localized.title}</h1><p>{localized.metaDescription}</p>
      </header>
      <div className="container"><div className="article-cover"><Image className="article-image" src={post.image.src} alt={post.image.alt[locale]} width={1536} height={1024} priority sizes="(max-width: 1228px) calc(100vw - 48px), 1180px" /></div></div>
      <div className="article-shell article-content">
        {localized.intro.map((paragraph, index) => <p className={index === 0 ? "lead" : ""} key={paragraph}>{paragraph}</p>)}
        {localized.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}
        <aside className="article-inline-cta"><h2>{t("blog.turn")}</h2><p>{t("blog.turnCopy")}</p><a className="button" href="/contact#book">{t("common.book")} <ArrowRight size={17} /></a></aside>
        <a className="text-link" href="/blog"><ArrowLeft size={15} /> {t("blog.back")}</a>
      </div>
    </article>
    <section className="section-pad pale-section"><div className="container"><div className="section-heading"><div className="eyebrow">{t("blog.keep")}</div><h2>{t("blog.related")}</h2></div><div className="blog-grid">{related.map((item) => <BlogCard post={item} key={item.slug} />)}</div></div></section>
  </>;
}
