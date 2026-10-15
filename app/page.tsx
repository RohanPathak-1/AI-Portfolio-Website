import {
  ArrowRight, Bot, Check, CircleGauge, Clock3, Eye, Megaphone,
  MessageSquareText, Search, Sparkles, Target, Workflow,
} from "lucide-react";
import { ConsultationCta } from "@/components/consultation-cta";
import { FocusCardGroup } from "@/components/focus-card-group";
import { ProfileVisual } from "@/components/profile-visual";
import { siteConfig } from "@/config/site";

const challenges = [
  [Target, "Not Enough Leads", "You’re struggling to attract potential customers."],
  [Eye, "Low Online Visibility", "People can’t easily find your business online."],
  [Megaphone, "Poor Marketing Results", "You’re spending time and money on marketing without seeing the results you want."],
  [CircleGauge, "Low Sales", "Visitors are finding your business but aren’t becoming paying customers."],
  [Clock3, "Not Enough Time", "Managing marketing alongside your business takes too much effort."],
];

const benefits = [
  [Eye, "Reach more potential customers", "Connect with more of the people who need what your business offers."],
  [Target, "Generate more qualified leads", "Create clearer paths that turn interest into valuable business conversations."],
  [Search, "Improve your online presence", "Make your business easier to discover, understand, and trust online."],
  [CircleGauge, "Turn more visitors into customers", "Improve the journey from first visit to meaningful action."],
  [Workflow, "Save time with smarter processes", "Use practical automation to reduce repetitive marketing work."],
  [Sparkles, "Build sustainable growth", "Follow a clear strategy designed to support long-term business growth."],
];

const serviceIcons = [Bot, Search, MessageSquareText, Megaphone, Sparkles, Workflow];

export default function HomePage() {
  return (
    <>
      <section className="hero section-pad">
        <div className="container hero-grid">
          <div className="hero-copy" data-hero-copy>
            <div className="eyebrow"><Sparkles size={15} /> AI-powered digital marketing</div>
            <h1>Grow Your Business with <span>AI-Powered</span> Digital Marketing</h1>
            <p className="hero-lead">Struggling to attract customers, generate leads, or increase sales? I help small and medium-sized businesses grow online using proven Digital Marketing strategies and powerful AI tools.</p>
            <div className="button-row">
              <a className="button" href={siteConfig.bookingUrl}>Book a Free Consultation Call <ArrowRight size={18} /></a>
              <a className="button button-secondary" href="/services">Explore My Services</a>
            </div>
            <div className="consultation-note">
              <span><Check size={15} /></span>
              <p>Get a customized Digital Marketing Plan for your business that you can start implementing immediately.</p>
            </div>
          </div>
          <ProfileVisual variant="hero" priority motion="hero" />
        </div>
      </section>

      <section className="section-pad challenges-section">
        <div className="container">
          <div className="section-heading centered" data-reveal>
            <div className="eyebrow">The challenge</div>
            <h2>Is Your Business Struggling to Grow Online?</h2>
            <p>Running a business is challenging. Growing it online shouldn’t have to be.</p>
          </div>
          <FocusCardGroup className="challenge-grid" reveal>
            {challenges.map(([Icon, title, copy], index) => (
              <article className="challenge-card" key={String(title)}>
                <span className="card-number">0{index + 1}</span>
                <div className="icon-box"><Icon /></div>
                <h3>{String(title)}</h3><p>{String(copy)}</p>
              </article>
            ))}
          </FocusCardGroup>
          <p className="bridge-copy"><strong>The good news? You don’t have to figure everything out alone.</strong></p>
        </div>
      </section>

      <section className="section-pad dark-section">
        <div className="container growth-grid" data-reveal>
          <div className="sticky-copy">
            <div className="eyebrow light">The solution</div>
            <h2>Smarter Marketing.<br />More Customers.<br /><span>Better Growth.</span></h2>
            <p>I help business owners turn marketing challenges into growth opportunities with AI-Powered Digital Marketing.</p>
            <a className="text-link light-link" href={siteConfig.bookingUrl}>Let’s Grow Your Business <ArrowRight size={16} /></a>
          </div>
          <FocusCardGroup className="benefit-list">
            {benefits.map(([Icon, title, copy], index) => (
              <article className="benefit-row" key={String(title)}>
                <span className="benefit-index">0{index + 1}</span><Icon />
                <div><h3>{String(title)}</h3><p>{String(copy)}</p></div>
              </article>
            ))}
          </FocusCardGroup>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-heading split-heading" data-reveal>
            <div><div className="eyebrow">What I can help with</div><h2>Digital Marketing Services Designed to Grow Your Business</h2></div>
            <p>Practical, AI-powered services shaped around your goals, customers, and growth opportunities.</p>
          </div>
          <FocusCardGroup className="service-grid" selectable={false} reveal>
            {siteConfig.services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <article className="service-card" key={service.slug}>
                  <div className="service-card-top"><div className="icon-box"><Icon /></div><span>0{index + 1}</span></div>
                  <h3>{service.title}</h3><p>{service.short}</p>
                  <a className="text-link" href={`/services#${service.slug}`}>Explore service <ArrowRight size={15} /></a>
                </article>
              );
            })}
          </FocusCardGroup>
          <div className="centered-action"><a className="button button-secondary" href="/services">Explore All Services <ArrowRight size={17} /></a></div>
        </div>
      </section>

      <section className="section-pad pale-section">
        <div className="container why-grid" data-reveal>
          <div className="why-panel">
            <span className="mini-label">WHY WORK WITH ME?</span>
            <h2>Your Business Deserves More Than Generic Marketing Advice</h2>
            <p>Every business is different. That’s why I focus on understanding your challenges before recommending solutions.</p>
          </div>
          <div className="check-list">
            {[
              ["Personalized Strategies", "Marketing plans built around your business."],
              ["AI-Powered Solutions", "Practical tools that make marketing more efficient."],
              ["Clear Action Plans", "Know what to do, why it matters, and where to start."],
              ["Business-Focused Approach", "Strategies designed to attract customers, generate leads, and support sales growth."],
            ].map(([title, copy]) => <article key={title}><span><Check /></span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section-pad process-section">
        <div className="container">
          <div className="section-heading centered" data-reveal><div className="eyebrow">How it works</div><h2>Your Business Growth Starts with 3 Simple Steps</h2></div>
          <FocusCardGroup className="process-grid" reveal>
            {[
              ["Book a Free Consultation", "Tell me about your business, goals, and marketing challenges."],
              ["Get Your Business Analyzed", "I’ll review your current marketing approach and identify opportunities for improvement."],
              ["Receive Your Customized Marketing Plan", "Get a practical Digital Marketing Plan with clear steps you can start implementing immediately."],
            ].map(([title, copy], index) => <article key={title}><span className="process-number">{index + 1}</span><div><small>Step {index + 1}</small><h3>{title}</h3><p>{copy}</p></div></article>)}
          </FocusCardGroup>
          <div className="centered-action"><a className="button" href={siteConfig.bookingUrl}>Book Your Free Consultation <ArrowRight size={17} /></a></div>
        </div>
      </section>

      <div className="container section-pad-top"><ConsultationCta /></div>
    </>
  );
}
