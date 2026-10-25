import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { BlogExplorer } from "@/components/blog-explorer";
import { ConsultationCta } from "@/components/consultation-cta";
import { siteConfig } from "@/config/site";
import { T } from "@/components/language-provider";
import { InnerPageHeroVisual } from "@/components/inner-page-hero-visual";

export const metadata: Metadata = {
  title: "AI Marketing Tips & Business Growth Strategies",
  description: "Simple, practical advice for attracting customers, improving digital marketing, and growing your business using AI.",
  alternates: { canonical: "/blog" },
};

const topics = [1, 2, 3, 4, 5, 6];

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div className="page-hero-copy"><div className="breadcrumb"><a href="/"><T id="common.home" /></a><span>/</span><span><T id="blog.label" /></span></div>
          <div className="eyebrow"><T id="blog.eyebrow" /></div><h1><T id="blog.title" /></h1><p><T id="blog.intro" /></p></div>
          <InnerPageHeroVisual variant="blog" />
        </div>
      </section>

      <section className="section-pad">
        <div className="container content-grid" data-reveal>
          <div className="prose-block">
            <div className="eyebrow"><T id="blog.exploreAbout" /></div><h2><T id="blog.guidance" /></h2><p><T id="blog.guidanceCopy" /></p>
          </div>
          <div className="check-list">
            {topics.map((topic) => <article key={topic}><span><Check /></span><div><h3><T id={`blog.topic.${topic}`} /></h3></div></article>)}
          </div>
        </div>
      </section>

      <section className="section-pad pale-section">
        <div className="container">
          <div className="section-heading split-heading" data-reveal>
            <div><div className="eyebrow"><T id="blog.journal" /></div><h2><T id="blog.insights" /></h2></div><p><T id="blog.searchCopy" /></p>
          </div>
          <BlogExplorer />
        </div>
      </section>

      <section className="section-pad">
        <div className="container credibility-grid" data-reveal>
          <div>
            <div className="eyebrow"><T id="blog.personal" /></div><h2><T id="blog.strategy" /></h2><p><T id="blog.strategyCopy" /></p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <a className="button" href={siteConfig.bookingUrl}><T id="common.book" /> <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <div className="container"><ConsultationCta compact /></div>
    </>
  );
}
