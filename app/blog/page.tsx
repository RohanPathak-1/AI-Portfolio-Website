import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { BlogExplorer } from "@/components/blog-explorer";
import { ConsultationCta } from "@/components/consultation-cta";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "AI Marketing Tips & Business Growth Strategies",
  description: "Simple, practical advice for attracting customers, improving digital marketing, and growing your business using AI.",
  alternates: { canonical: "/blog" },
};

const topics = [
  "AI-Powered Marketing",
  "Digital Marketing Strategies",
  "Lead Generation",
  "Search Engine Optimization",
  "Social Media Growth",
  "Marketing Automation",
];

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><a href="/">Home</a><span>/</span><span>Blog</span></div>
          <div className="eyebrow">Practical ideas for smarter growth</div>
          <h1>AI Marketing Tips & Business Growth Strategies</h1>
          <p>Discover simple, practical advice to help you attract customers, improve your digital marketing, and grow your business using AI.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container content-grid" data-reveal>
          <div className="prose-block">
            <div className="eyebrow">Explore articles about</div>
            <h2>Marketing guidance you can put to work.</h2>
            <p>Browse practical ideas across the areas that matter most to online visibility, lead generation, and business growth.</p>
          </div>
          <div className="check-list">
            {topics.map((topic) => <article key={topic}><span><Check /></span><div><h3>{topic}</h3></div></article>)}
          </div>
        </div>
      </section>

      <section className="section-pad pale-section">
        <div className="container">
          <div className="section-heading split-heading" data-reveal>
            <div><div className="eyebrow">Explore the journal</div><h2>AI marketing insights for growing businesses.</h2></div>
            <p>Search by topic or choose a category to find the most relevant guide.</p>
          </div>
          <BlogExplorer />
        </div>
      </section>

      <section className="section-pad">
        <div className="container credibility-grid" data-reveal>
          <div>
            <div className="eyebrow">Personalized guidance</div>
            <h2>Need a Strategy Built Specifically for Your Business?</h2>
            <p>General marketing tips are helpful. A personalized strategy is even better.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <a className="button" href={siteConfig.bookingUrl}>Book a Free Consultation Call <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <div className="container"><ConsultationCta compact /></div>
    </>
  );
}
