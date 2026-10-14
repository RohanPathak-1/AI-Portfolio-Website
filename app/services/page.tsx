import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, CheckCircle2, Megaphone, MessageSquareText, Search, Sparkles, Workflow } from "lucide-react";
import { ConsultationCta } from "@/components/consultation-cta";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "AI-Powered Digital Marketing Services",
  description: "Explore practical AI marketing strategy, SEO, social media, paid advertising, content, and automation services for growing businesses.",
  alternates: { canonical: "/services" },
};

const serviceDetails = [
  { icon: Bot, intro: "Build a focused marketing direction based on your business, customers, competitive context, and available resources.", problems: ["Disconnected marketing activity","Unclear channel priorities","Too many tools without a plan"], deliverables: ["Business and marketing assessment","Audience research","Competitor analysis","Opportunity identification","AI tool recommendations","Personalized marketing plan"] },
  { icon: Search, intro: "Strengthen the foundations that help relevant customers discover and understand your business through search.", problems: ["Limited search visibility","Unclear keyword focus","Pages that do not match intent"], deliverables: ["Keyword research","On-page optimization","Technical SEO recommendations","Local SEO","Content optimization","Search visibility planning"] },
  { icon: MessageSquareText, intro: "Create a social presence that is purposeful, consistent, and designed around the platforms your audience actually uses.", problems: ["Inconsistent publishing","Low audience engagement","Content without a clear role"], deliverables: ["Social media strategy","Content planning","Audience engagement approach","Platform optimization","AI-assisted content workflows","Performance evaluation"] },
  { icon: Megaphone, intro: "Plan targeted campaigns and conversion journeys that give qualified prospects a clear reason to respond.", problems: ["Wasted advertising budget","Weak landing-page alignment","Incomplete conversion tracking"], deliverables: ["Google Ads strategy","Meta Ads strategy","Audience targeting","Campaign planning","Landing page optimization","Conversion tracking","Lead generation funnels"] },
  { icon: Sparkles, intro: "Turn customer questions and business expertise into a reliable content engine that supports visibility, trust, and demand.", problems: ["Irregular content creation","Generic or disconnected topics","Good ideas that never get reused"], deliverables: ["Blog content strategy","Search-focused planning","AI-assisted research and ideation","Marketing copywriting","Content repurposing","Editorial planning"] },
  { icon: Workflow, intro: "Improve the way inquiries are handled, information moves, and repetitive marketing tasks get completed.", problems: ["Slow or inconsistent follow-up","Manual administrative work","Disconnected lead information"], deliverables: ["Lead follow-up workflows","Email automation","CRM workflow recommendations","AI-assisted communication","Repetitive task automation","Process optimization"] },
];

const faqs = [
  ["What is AI-powered digital marketing?","It is the practical use of AI to support research, content, analysis, personalization, and repeatable marketing workflows. The strategy, decisions, and quality control remain human-led."],
  ["Is AI marketing suitable for small businesses?","It can be. The right approach starts small, focuses on a real business need, and uses only the tools that can improve quality, consistency, or efficiency."],
  ["Do I need a large marketing budget?","Not necessarily. The consultation considers your current resources and helps prioritize the channels and actions most appropriate for your stage."],
  ["How do you create a strategy for my business?","I begin with your goals, audience, offer, current marketing, and constraints. Then I identify opportunities and turn them into a focused, sequenced plan."],
  ["How long does it take to see results?","Timing varies by channel, market, starting point, and level of implementation. Paid campaigns can produce learning quickly; SEO and content usually require sustained effort. No outcome is guaranteed."],
  ["What happens during the free consultation?","We discuss your goals and challenges, review available information about your online presence, identify opportunities, and outline a customized actionable Digital Marketing Plan."],
  ["Can I start with just one service?","Yes. Services are modular. We can start with the highest-priority need and expand only when it makes business sense."],
];

export default function ServicesPage(){return <>
  <section className="page-hero"><div className="container"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Services</span></div><div className="eyebrow">Focused support for modern growth</div><h1>AI-powered digital marketing services to grow your business.</h1><p>From building your online presence to attracting qualified leads and improving marketing performance, I provide practical solutions powered by effective strategy and modern AI tools.</p></div></section>
  <section className="services-page"><div className="container">{siteConfig.services.map((service,index)=>{const detail=serviceDetails[index];const Icon=detail.icon;return <article className="service-detail" id={service.slug} key={service.slug}><div className="service-index"><span>0{index+1} / 06</span><div className="service-icon"><Icon/></div></div><div className="service-body"><h2>{service.title}</h2><p>{detail.intro}</p><div className="service-columns"><div><h3>Problems addressed</h3><ul>{detail.problems.map(item=><li key={item}>{item}</li>)}</ul></div><div><h3>Capabilities & deliverables</h3><ul>{detail.deliverables.map(item=><li key={item}>{item}</li>)}</ul></div></div><div className="outcome-box"><CheckCircle2 size={19}/><span><strong>Potential business benefit:</strong> {service.outcome}</span></div><Link className="text-link" style={{marginTop:"1.5rem"}} href={siteConfig.bookingUrl}>Discuss this service <ArrowRight size={16}/></Link></div></article>})}</div></section>
  <section className="section-pad pale-section"><div className="container"><div className="section-heading centered"><div className="eyebrow">Helpful answers</div><h2>Services FAQ</h2><p>A realistic view of what to expect before we begin.</p></div><div className="faq-list">{faqs.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
  <div className="container section-pad-top"><ConsultationCta/></div>
</>}
