import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, CheckCircle2, Megaphone, MessageSquareText, Search, Sparkles, Workflow } from "lucide-react";
import { ConsultationCta } from "@/components/consultation-cta";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "AI-Powered Digital Marketing Services",
  description: "Practical AI-powered marketing strategy, SEO, social media, paid advertising, content marketing, and automation for growing businesses.",
  alternates: { canonical: "/services" },
};

const serviceDetails = [
  { icon: Bot, copy: "Build a clear marketing roadmap tailored to your business." },
  { icon: Search, copy: "Help more potential customers discover your business through search engines." },
  { icon: MessageSquareText, copy: "Strengthen your online presence and connect with your ideal audience." },
  { icon: Megaphone, copy: "Reach potential customers through targeted digital advertising." },
  { icon: Sparkles, copy: "Create useful content that builds trust and supports lead generation." },
  { icon: Workflow, copy: "Use AI tools to save time and simplify your marketing workflows." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Services</span></div>
          <div className="eyebrow">Practical solutions for growing businesses</div>
          <h1>AI-Powered Digital Marketing Services</h1>
          <p>I help small and medium-sized businesses improve their online marketing through practical, AI-powered solutions.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-heading centered">
            <div className="eyebrow">The right strategy</div>
            <h2>The Right Marketing Strategy Can Make a Big Difference</h2>
            <p>You don’t need to try every marketing tool or advertise everywhere. You need the right strategy to reach the right customers.</p>
          </div>
        </div>
      </section>

      <section className="services-page">
        <div className="container">
          <div className="section-heading"><div className="eyebrow">What I can help you with</div></div>
          {siteConfig.services.map((service, index) => {
            const detail = serviceDetails[index];
            const Icon = detail.icon;
            return (
              <article className="service-detail" id={service.slug} key={service.slug}>
                <div className="service-index"><span>0{index + 1} / 06</span><div className="service-icon"><Icon /></div></div>
                <div className="service-body">
                  <h2>{service.title}</h2>
                  <p>{detail.copy}</p>
                  <div className="outcome-box"><CheckCircle2 size={19} /><span><strong>How it helps:</strong> {service.outcome}</span></div>
                  <Link className="text-link" style={{ marginTop: "1.5rem" }} href={siteConfig.bookingUrl}>Discuss this service <ArrowRight size={16} /></Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-pad pale-section">
        <div className="container credibility-grid">
          <div>
            <div className="eyebrow">Not sure where to start?</div>
            <h2>Not Sure Which Service Your Business Needs?</h2>
            <p>That’s exactly what the free consultation is for.</p>
            <p>I’ll help you identify your marketing challenges, explore growth opportunities, and create a customized plan based on your business needs.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link className="button" href={siteConfig.bookingUrl}>Get My Free Digital Marketing Plan <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <div className="container section-pad-top"><ConsultationCta /></div>
    </>
  );
}
