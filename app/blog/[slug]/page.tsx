import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog-card";
import { getBlogPost, blogPosts, formatDate } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams(){return blogPosts.map((post)=>({slug:post.slug}));}

export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {slug}=await params; const post=getBlogPost(slug); if(!post)return {};
  return {title:post.title,description:post.metaDescription,alternates:{canonical:`/blog/${post.slug}`},openGraph:{type:"article",title:post.title,description:post.metaDescription,publishedTime:post.publishedAt,authors:[post.author]}};
}

export default async function BlogArticlePage({params}:Props){
  const {slug}=await params; const post=getBlogPost(slug); if(!post)notFound();
  const related=blogPosts.filter((item)=>item.slug!==post.slug).slice(0,2);
  return <>
    <article>
      <header className="article-header article-shell"><div className="breadcrumb" style={{justifyContent:"center"}}><Link href="/blog">Insights</Link><span>/</span><span>{post.category}</span></div><div className="article-meta"><span>{post.category}</span><time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time><span>{post.readingTime}</span></div><h1>{post.title}</h1><p>{post.metaDescription}</p></header>
      <div className="container"><div className={`blog-visual article-cover visual-${post.visual}`} role="img" aria-label={`Abstract editorial artwork for ${post.title}`}><span className="visual-lines"/><span className="visual-kicker">{post.category}</span></div></div>
      <div className="article-shell article-content">{post.intro.map((paragraph,index)=><p className={index===0?"lead":""} key={paragraph}>{paragraph}</p>)}{post.sections.map(section=><section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs?.map(paragraph=><p key={paragraph}>{paragraph}</p>)}{section.bullets&&<ul>{section.bullets.map(item=><li key={item}>{item}</li>)}</ul>}</section>)}<aside className="article-inline-cta"><h2>Turn insight into an actionable plan.</h2><p>Let’s connect these ideas to your actual goals, audience, and marketing resources.</p><Link className="button" href="/contact#book">Book a Free Consultation Call <ArrowRight size={17}/></Link></aside><Link className="text-link" href="/blog"><ArrowLeft size={15}/> Back to all insights</Link></div>
    </article>
    <section className="section-pad pale-section"><div className="container"><div className="section-heading"><div className="eyebrow">Keep exploring</div><h2>Related insights</h2></div><div className="blog-grid">{related.map(item=><BlogCard post={item} key={item.slug}/>)}</div></div></section>
  </>;
}
