import type { Metadata } from "next";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import { ConsultationCta } from "@/components/consultation-cta";
import { FocusCardGroup } from "@/components/focus-card-group";
import { ProfileVisual } from "@/components/profile-visual";
import { siteConfig } from "@/config/site";
import { T } from "@/components/language-provider";

export const metadata: Metadata = {
  title: "About Me",
  description: "Meet Rohan Pathak, an AI Marketing Expert helping small and medium-sized businesses grow with smarter digital marketing.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><a href="/"><T id="common.home" /></a><span>/</span><span><T id="about.label" /></span></div>
          <div className="eyebrow"><T id="about.eyebrow" /></div><h1><T id="about.title" /></h1><p><T id="about.intro" /></p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container content-grid">
          <ProfileVisual small variant="about" motion="about" />
          <div className="prose-block" data-reveal>
            <div className="eyebrow"><T id="about.path" /></div><h2><T id="about.strategy" /></h2><p><T id="about.p1" /></p><p><T id="about.p2" /></p><p><T id="about.p3" /></p>
          </div>
        </div>
      </section>

      <section className="section-pad pale-section">
        <div className="container">
          <div className="section-heading centered" data-reveal>
            <div className="eyebrow"><T id="about.guides" /></div><h2><T id="about.practical" /></h2>
          </div>
          <FocusCardGroup className="value-grid" reveal>
            <article className="value-card">
              <CheckCircle2 />
              <h3><T id="about.mission" /></h3><p><T id="about.missionCopy" /></p>
            </article>
            <article className="value-card">
              <CheckCircle2 />
              <h3><T id="about.approach" /></h3><p><T id="about.approachCopy" /></p>
            </article>
            <article className="value-card">
              <CheckCircle2 />
              <h3><T id="about.focus" /></h3><p><T id="about.focusCopy" /></p>
            </article>
          </FocusCardGroup>
        </div>
      </section>

      <section className="section-pad dark-section">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div className="eyebrow light"><T id="about.who" /></div><h2><T id="about.whoTitle" /></h2><p><T id="about.whoCopy" /></p>
          </div>
          <div className="audience-list">
            {[1,2,3,4,5,6,7].map((item) => (
              <span key={item}><Building2 size={14} style={{ display: "inline", marginRight: 7 }} /><T id={`about.audience.${item}`} /></span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container credibility-grid" data-reveal>
          <div>
            <div className="eyebrow"><T id="about.work" /></div><h2><T id="about.find" /></h2><p><T id="about.findCopy" /></p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <a className="button" href={siteConfig.bookingUrl}><T id="common.book" /> <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <div className="container"><ConsultationCta /></div>
    </>
  );
}
