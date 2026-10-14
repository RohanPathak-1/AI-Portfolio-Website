import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target } from "lucide-react";
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
          <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>About Me</span></div>
          <div className="eyebrow">About Rohan Pathak</div>
          <h1>Helping Business Owners Grow with Smarter Marketing</h1>
          <p>Practical AI tools, proven Digital Marketing strategies, and solutions shaped around your business goals.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container content-grid">
          <ProfileVisual small />
          <div className="prose-block">
            <div className="eyebrow">Hi, I’m {siteConfig.name}</div>
            <h2>Every business deserves a clear and effective marketing strategy.</h2>
            <p>I’m an AI Marketing Expert passionate about helping small and medium-sized businesses grow online.</p>
            <p>My goal is simple: to help you attract more customers, generate better leads, and grow your business using proven Digital Marketing strategies and practical AI tools.</p>
            <p>I focus on understanding your business, identifying growth opportunities, and creating marketing solutions that make sense for your goals.</p>
          </div>
        </div>
      </section>

      <section className="section-pad pale-section">
        <div className="container content-grid">
          <div className="why-panel">
            <span className="mini-label">MY MISSION</span>
            <h2>Make AI-Powered Digital Marketing accessible and practical.</h2>
            <p>To make effective AI-Powered Digital Marketing accessible, practical, and valuable for growing businesses.</p>
          </div>
          <div className="prose-block">
            <div className="eyebrow">Let’s work on your business growth</div>
            <h2>Find a strategy that works for you.</h2>
            <p>Whether you’re struggling to attract customers or looking for better ways to market your business, let’s find a strategy that works for you.</p>
            <Link className="button" href={siteConfig.bookingUrl}>Book a Free Consultation Call <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="section-pad dark-section">
        <div className="container credibility-grid">
          <div>
            <div className="eyebrow light">A business-focused approach</div>
            <h2>Your goals guide the strategy.</h2>
            <p>We start by understanding your challenges, customers, and opportunities—then use the right marketing strategies and AI tools to help you move forward.</p>
          </div>
          <div className="deliverable-card">
            <span className="mini-label">THE FOCUS</span>
            <ul>
              <li><Target /> Attract more customers</li>
              <li><Target /> Generate better leads</li>
              <li><Target /> Improve your online marketing</li>
              <li><Target /> Build sustainable business growth</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="container section-pad-top"><ConsultationCta /></div>
    </>
  );
}
