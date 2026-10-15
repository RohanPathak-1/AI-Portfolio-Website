import {
  ArrowRight, Bot, Check, CircleGauge, Clock3, Eye, Megaphone,
  MessageSquareText, Search, Sparkles, Target, Workflow,
} from "lucide-react";
import { ConsultationCta } from "@/components/consultation-cta";
import { FocusCardGroup } from "@/components/focus-card-group";
import { ProfileVisual } from "@/components/profile-visual";
import { siteConfig } from "@/config/site";
import { T } from "@/components/language-provider";

const challenges = [
  [Target, "home.challenge.1"], [Eye, "home.challenge.2"], [Megaphone, "home.challenge.3"],
  [CircleGauge, "home.challenge.4"], [Clock3, "home.challenge.5"],
];

const benefits = [
  [Eye, "home.benefit.1"], [Target, "home.benefit.2"], [Search, "home.benefit.3"],
  [CircleGauge, "home.benefit.4"], [Workflow, "home.benefit.5"], [Sparkles, "home.benefit.6"],
];

const serviceIcons = [Bot, Search, MessageSquareText, Megaphone, Sparkles, Workflow];

export default function HomePage() {
  return (
    <>
      <section className="hero section-pad">
        <div className="container hero-grid">
          <div className="hero-copy" data-hero-copy>
            <div className="eyebrow"><Sparkles size={15} /> <T id="home.eyebrow" /></div>
            <h1><T id="home.hero1" /> <span><T id="home.hero2" /></span> <T id="home.hero3" /></h1>
            <p className="hero-lead"><T id="home.lead" /></p>
            <div className="button-row">
              <a className="button" href={siteConfig.bookingUrl}><T id="common.book" /> <ArrowRight size={18} /></a>
              <a className="button button-secondary" href="/services"><T id="common.exploreServices" /></a>
            </div>
            <div className="consultation-note">
              <span><Check size={15} /></span>
              <p><T id="home.plan" /></p>
            </div>
          </div>
          <ProfileVisual variant="hero" priority motion="hero" />
        </div>
      </section>

      <section className="section-pad challenges-section">
        <div className="container">
          <div className="section-heading centered" data-reveal>
            <div className="eyebrow"><T id="home.challengeEyebrow" /></div><h2><T id="home.challengeTitle" /></h2><p><T id="home.challengeIntro" /></p>
          </div>
          <FocusCardGroup className="challenge-grid" reveal>
            {challenges.map(([Icon, key], index) => (
              <article className="challenge-card" key={String(key)}>
                <span className="card-number">0{index + 1}</span>
                <div className="icon-box"><Icon /></div>
                <h3><T id={`${String(key)}.title`} /></h3><p><T id={`${String(key)}.copy`} /></p>
              </article>
            ))}
          </FocusCardGroup>
          <p className="bridge-copy"><strong><T id="home.goodNews" /></strong></p>
        </div>
      </section>

      <section className="section-pad dark-section">
        <div className="container growth-grid" data-reveal>
          <div className="sticky-copy">
            <div className="eyebrow light"><T id="home.solution" /></div>
            <h2><T id="home.smarter" /><br /><T id="home.customers" /><br /><span><T id="home.growth" /></span></h2>
            <p><T id="home.solutionCopy" /></p><a className="text-link light-link" href={siteConfig.bookingUrl}><T id="home.grow" /> <ArrowRight size={16} /></a>
          </div>
          <FocusCardGroup className="benefit-list">
            {benefits.map(([Icon, key], index) => (
              <article className="benefit-row" key={String(key)}>
                <span className="benefit-index">0{index + 1}</span><Icon />
                <div><h3><T id={`${String(key)}.title`} /></h3><p><T id={`${String(key)}.copy`} /></p></div>
              </article>
            ))}
          </FocusCardGroup>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-heading split-heading" data-reveal>
            <div><div className="eyebrow"><T id="home.help" /></div><h2><T id="home.servicesTitle" /></h2></div><p><T id="home.servicesCopy" /></p>
          </div>
          <FocusCardGroup className="service-grid" selectable={false} reveal>
            {siteConfig.services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <article className="service-card" key={service.slug}>
                  <div className="service-card-top"><div className="icon-box"><Icon /></div><span>0{index + 1}</span></div>
                  <h3><T id={`service.${index + 1}.title`} /></h3><p><T id={`service.${index + 1}.short`} /></p>
                  <a className="text-link" href={`/services#${service.slug}`}><T id="common.learn" /> <ArrowRight size={15} /></a>
                </article>
              );
            })}
          </FocusCardGroup>
          <div className="centered-action"><a className="button button-secondary" href="/services"><T id="home.exploreAll" /> <ArrowRight size={17} /></a></div>
        </div>
      </section>

      <section className="section-pad pale-section">
        <div className="container why-grid" data-reveal>
          <div className="why-panel">
            <span className="mini-label"><T id="home.why" /></span><h2><T id="home.whyTitle" /></h2><p><T id="home.whyCopy" /></p>
          </div>
          <div className="check-list">
            {[
              "home.why.1", "home.why.2", "home.why.3", "home.why.4",
            ].map((key) => <article key={key}><span><Check /></span><div><h3><T id={`${key}.title`} /></h3><p><T id={`${key}.copy`} /></p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section-pad process-section">
        <div className="container">
          <div className="section-heading centered" data-reveal><div className="eyebrow"><T id="home.how" /></div><h2><T id="home.processTitle" /></h2></div>
          <FocusCardGroup className="process-grid" reveal>
            {[
              "home.process.1", "home.process.2", "home.process.3",
            ].map((key, index) => <article key={key}><span className="process-number">{index + 1}</span><div><small><T id="home.step" /> {index + 1}</small><h3><T id={`${key}.title`} /></h3><p><T id={`${key}.copy`} /></p></div></article>)}
          </FocusCardGroup>
          <div className="centered-action"><a className="button" href={siteConfig.bookingUrl}><T id="home.bookYour" /> <ArrowRight size={17} /></a></div>
        </div>
      </section>

      <div className="container section-pad-top"><ConsultationCta /></div>
    </>
  );
}
