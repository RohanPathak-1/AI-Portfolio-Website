import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, Compass, Handshake, Target } from "lucide-react";
import { ConsultationCta } from "@/components/consultation-cta";
import { ProfileVisual } from "@/components/profile-visual";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Me",
  description: "Meet Rohan Pathak, an AI Marketing Expert focused on practical, business-first digital marketing for growing companies.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <>
    <section className="page-hero"><div className="container"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>About Me</span></div><div className="eyebrow">A practical partner for growth</div><h1>Helping businesses grow through smarter digital marketing.</h1><p>Clear strategy, thoughtful use of AI, and a commitment to recommendations that make sense for your business.</p></div></section>
    <section className="section-pad"><div className="container content-grid"><ProfileVisual small /><div className="prose-block"><div className="eyebrow">Hello, I’m {siteConfig.name}</div><h2>Marketing should create clarity—not more complexity.</h2><p>{siteConfig.biography}</p><p>I believe the strongest marketing starts with a clear understanding of the business, the customer, and the decision someone needs to make. AI can then help research, create, analyze, and automate more efficiently—without replacing sound judgment.</p><div className="placeholder-note"><strong>Personal story placeholder:</strong> {siteConfig.storyPlaceholder}</div></div></div></section>
    <section className="section-pad pale-section"><div className="container"><div className="section-heading centered"><div className="eyebrow">What guides the work</div><h2>Practical marketing, built on clear principles.</h2></div><div className="value-grid">
      {[[Compass,"My mission","To help small and medium-sized businesses access effective AI-powered marketing strategies that make business growth more achievable."],[Handshake,"My commitment","Clear communication, honest recommendations, and a collaborative process from first conversation to next steps."],[Target,"My focus","Useful marketing objectives, relevant audiences, and systems that support consistent improvement over time."]].map(([Icon,title,copy])=><article className="value-card" key={String(title)}><Icon/><h3>{String(title)}</h3><p>{String(copy)}</p></article>)}
    </div></div></section>
    <section className="section-pad"><div className="container content-grid"><div className="prose-block"><div className="eyebrow">My approach</div><h2>A customized strategy, not a standard formula.</h2><p>Every engagement begins by understanding what your business is trying to achieve, how customers currently find you, and where marketing friction is holding you back.</p><div className="check-list" style={{marginTop:"2rem"}}>{["Understand individual business needs","Select suitable marketing channels","Apply practical AI tools","Prioritize measurable marketing objectives","Build a tailored, usable roadmap","Improve based on meaningful signals"].map(item=><article key={item}><span><CheckCircle2/></span><div><h3>{item}</h3></div></article>)}</div></div><div className="why-panel"><span className="mini-label">THE WORKING PHILOSOPHY</span><h2>Technology serves the strategy.</h2><p>AI can accelerate research, content workflows, analysis, and follow-up. It creates the most value when it supports a thoughtful plan and responsible human review.</p><Link className="text-link" href="/services">Explore the services <ArrowRight size={16}/></Link></div></div></section>
    <section className="section-pad dark-section"><div className="container"><div className="section-heading"><div className="eyebrow light">Who I work with</div><h2>Built for ambitious businesses that value a clearer way forward.</h2><p>This approach is suited to business owners who want practical guidance, stronger marketing foundations, and a partner who can make modern tools easier to use.</p></div><div className="audience-list">{["Small business owners","Medium-sized businesses","Entrepreneurs","Startup founders","Local businesses","Service-based businesses","Growing teams"].map(item=><span key={item}><Building2 size={14} style={{display:"inline",marginRight:7}}/>{item}</span>)}</div></div></section>
    <div className="container section-pad-top"><ConsultationCta/></div>
  </>;
}
