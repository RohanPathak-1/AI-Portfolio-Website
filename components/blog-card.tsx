import { ArrowUpRight } from "lucide-react";
import { BlogPost, formatDate } from "@/lib/blog";

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <article className={`blog-card ${featured ? "featured" : ""}`} data-reveal>
      <a href={`/blog/${post.slug}`} className={`blog-visual visual-${post.visual}`} aria-label={`Read ${post.title}`}>
        <span className="visual-lines" aria-hidden="true" />
        <span className="visual-kicker">{post.category}</span>
        <span className="visual-number">0{post.slug === "what-is-ai-powered-marketing" ? 3 : post.slug.includes("seven") ? 2 : 1}</span>
      </a>
      <div className="blog-card-content">
        <div className="article-meta"><span>{post.category}</span><time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time></div>
        <h2><a href={`/blog/${post.slug}`}>{post.title}</a></h2>
        <p>{post.excerpt}</p>
        <a className="text-link" href={`/blog/${post.slug}`}>Read article <ArrowUpRight size={15} /></a>
      </div>
    </article>
  );
}
