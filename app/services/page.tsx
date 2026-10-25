import type { Metadata } from "next";
import { ArrowRight, Bot, CheckCircle2, Megaphone, MessageSquareText, Search, Sparkles, Workflow } from "lucide-react";
import { ConsultationCta } from "@/components/consultation-cta";
import { siteConfig } from "@/config/site";
import { T } from "@/components/language-provider";
import { InnerPageHeroVisual } from "@/components/inner-page-hero-visual";

export const metadata: Metadata = {
  title: "AI-Powered Digital Marketing Services",
  description: "Practical AI-powered marketing strategy, SEO, social media, paid advertising, content marketing, and automation for growing businesses.",
  alternates: { canonical: "/services" },
};

const serviceDetails = [Bot, Search, MessageSquareText, Megaphone, Sparkles, Workflow];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div className="page-hero-copy"><div className="breadcrumb"><a href="/"><T id="common.home" /></a><span>/</span><span><T id="services.label" /></span></div>
          <div className="eyebrow"><T id="services.eyebrow" /></div><h1><T id="services.title" /></h1><p><T id="services.intro" /></p></div>
          <InnerPageHeroVisual variant="services" />
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-heading centered" data-reveal>
            <div className="eyebrow"><T id="services.right" /></div><h2><T id="services.rightTitle" /></h2><p><T id="services.rightCopy" /></p>
          </div>
        </div>
      </section>

      <section className="services-page">
        <div className="container">
          <div className="section-heading" data-reveal><div className="eyebrow"><T id="services.help" /></div></div>
          {siteConfig.services.map((service, index) => {
            const Icon = serviceDetails[index];
            return (
              <article className="service-detail" id={service.slug} key={service.slug} data-reveal>
                <div className="service-index"><span>0{index + 1} / 06</span><div className="service-icon"><Icon /></div></div>
                <div className="service-body">
                  <h2><T id={`service.${index + 1}.title`} /></h2><p><T id={`service.${index + 1}.detail`} /></p>
                  <div className="outcome-box"><CheckCircle2 size={19} /><span><strong><T id="services.how" /></strong> <T id={`service.${index + 1}.outcome`} /></span></div>
                  <a className="text-link" style={{ marginTop: "1.5rem" }} href={siteConfig.bookingUrl}><T id="common.discuss" /> <ArrowRight size={16} /></a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-pad pale-section">
        <div className="container credibility-grid" data-reveal>
          <div>
            <div className="eyebrow"><T id="services.unsure" /></div><h2><T id="services.unsureTitle" /></h2><p><T id="services.unsureCopy1" /></p><p><T id="services.unsureCopy2" /></p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <a className="button" href={siteConfig.bookingUrl}><T id="common.book" /> <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <div className="container section-pad-top"><ConsultationCta /></div>
    </>
  );
}
