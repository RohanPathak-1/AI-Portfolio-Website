import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { BlogExplorer } from "@/components/blog-explorer";
import { ConsultationCta } from "@/components/consultation-cta";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "AI Marketing Insights & Digital Growth Strategies",
  description: "Practical AI marketing, SEO, lead generation, automation, and digital growth guidance for business owners.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage(){
  const featured=blogPosts[0];
  return <>
    <section className="page-hero"><div className="container"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Blog</span></div><div className="eyebrow">Ideas for better marketing decisions</div><h1>AI marketing insights & digital growth strategies.</h1><p>Practical tips, proven digital marketing approaches, and useful AI insights to help your business grow.</p></div></section>
    <section className="section-pad"><div className="container"><div className="section-heading"><div className="eyebrow">Featured insight</div></div><div className="featured-post"><BlogCard post={featured} featured/></div></div></section>
    <section className="section-pad pale-section"><div className="container"><div className="section-heading split-heading"><div><div className="eyebrow">Explore the journal</div><h2>Useful thinking for growing businesses.</h2></div><p>Search by topic or choose a category to find the most relevant guide.</p></div><BlogExplorer/></div></section>
    <section className="section-pad"><div className="container"><div className="credibility-grid"><div><div className="eyebrow">Put the ideas to work</div><h2>Not sure which strategy fits your business?</h2><p>A free consultation can help translate general advice into a focused set of priorities for your market, goals, and resources.</p></div><div style={{display:"flex",justifyContent:"flex-start"}}><Link className="button" href="/contact#book">Build my marketing plan <ArrowRight size={17}/></Link></div></div></div></section>
    <div className="container"><ConsultationCta compact/></div>
  </>;
}
