import type { Metadata } from "next";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import { ConsultationCta } from "@/components/consultation-cta";
import { ProfileVisual } from "@/components/profile-visual";
import { siteConfig } from "@/config/site";

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
          <div className="breadcrumb"><a href="/">Home</a><span>/</span><span>About Me</span></div>
          <div className="eyebrow">About Rohan Pathak</div>
          <h1>Helping Business Owners Grow with Smarter Marketing</h1>
          <p>Hi, I’m Rohan Pathak, an AI Marketing Expert passionate about helping small and medium-sized businesses grow online.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container content-grid">
          <ProfileVisual small />
          <div className="prose-block">
            <div className="eyebrow">A clearer path to growth</div>
            <h2>Every business deserves an effective marketing strategy.</h2>
            <p>I believe every business deserves a clear and effective marketing strategy, regardless of its size.</p>
            <p>My goal is simple: to help you attract more customers, generate better leads, and grow your business using proven Digital Marketing strategies and practical AI tools.</p>
            <p>I focus on understanding your business, identifying growth opportunities, and creating marketing solutions that make sense for your goals.</p>
          </div>
        </div>
      </section>

      <section className="section-pad pale-section">
        <div className="container">
          <div className="section-heading centered">
            <div className="eyebrow">What guides the work</div>
            <h2>Practical marketing built around your business.</h2>
          </div>
          <div className="value-grid">
            <article className="value-card">
              <CheckCircle2 />
              <h3>My Mission</h3>
              <p>To make effective AI-Powered Digital Marketing accessible, practical, and valuable for growing businesses.</p>
            </article>
            <article className="value-card">
              <CheckCircle2 />
              <h3>My Approach</h3>
              <p>I start by understanding your goals, customers, and current marketing, then create a clear plan using the strategies and AI tools that fit your business.</p>
            </article>
            <article className="value-card">
              <CheckCircle2 />
              <h3>My Focus</h3>
              <p>Attract more customers, generate stronger leads, improve marketing efficiency, and support sustainable business growth.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad dark-section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow light">Who I help</div>
            <h2>Smarter marketing for ambitious growing businesses.</h2>
            <p>I work with business owners who want practical guidance, stronger marketing foundations, and a clear plan for reaching more customers.</p>
          </div>
          <div className="audience-list">
            {["Small business owners", "Medium-sized businesses", "Entrepreneurs", "Startup founders", "Local businesses", "Service-based businesses", "Growing teams"].map((item) => (
              <span key={item}><Building2 size={14} style={{ display: "inline", marginRight: 7 }} />{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container credibility-grid">
          <div>
            <div className="eyebrow">Let’s work on your business growth</div>
            <h2>Find a strategy that works for you.</h2>
            <p>Whether you’re struggling to attract customers or looking for better ways to market your business, let’s find a strategy that works for you.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <a className="button" href={siteConfig.bookingUrl}>Book a Free Consultation Call <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <div className="container"><ConsultationCta /></div>
    </>
  );
}
