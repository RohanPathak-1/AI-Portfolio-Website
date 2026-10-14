import Link from "next/link";
import {
  ArrowRight, BarChart3, Bot, Check, CircleGauge, Eye, Focus, Lightbulb,
  Megaphone, MessageSquareText, Search, Sparkles, Target, Workflow,
} from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { ConsultationCta } from "@/components/consultation-cta";
import { ProfileVisual } from "@/components/profile-visual";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/lib/blog";

const challenges = [
  [Target, "Not enough qualified leads", "Your marketing gets attention, but not enough conversations with the right prospects."],
  [Eye, "Low online visibility", "Potential customers struggle to find or understand what makes your business relevant."],
  [Megaphone, "Campaigns that underperform", "Advertising activity lacks the targeting, message, or landing-page support it needs."],
  [CircleGauge, "Visitors do not convert", "Your online presence does not make the next step clear, useful, and easy."],
  [Workflow, "Too much repetitive work", "Manual marketing tasks take time away from customers and business priorities."],
  [Lightbulb, "Unclear marketing priorities", "Too many channels and tools make it difficult to know where to focus first."],
];

const serviceIcons = [Bot, Search, MessageSquareText, Target, Sparkles, Workflow];

const benefits = [
  [Eye, "Improve visibility", "Show up more clearly where relevant customers are already looking."],
  [Focus, "Reach the right people", "Shape messages and channel choices around the audience most likely to benefit."],
  [Target, "Create lead opportunities", "Build clearer paths from initial interest to a useful business conversation."],
  [CircleGauge, "Improve conversion", "Remove friction and make each next step easier to understand and take."],
  [Workflow, "Streamline workflows", "Use practical automation to make repeatable marketing work more efficient."],
  [BarChart3, "Make informed decisions", "Focus on useful signals and refine the plan based on what you learn."],
];

export default function HomePage() {
  return (
    <>
      <section className="hero section-pad">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15} /> AI-powered strategy. Human-centered growth.</div>
            <h1>Grow your business <span>smarter</span> with AI-powered digital marketing.</h1>
            <p className="hero-lead">I help small and medium-sized business owners attract more customers, generate qualified leads, and improve marketing performance using practical AI tools and effective digital strategies.</p>
            <div className="button-row">
              <Link className="button" href={siteConfig.bookingUrl}>Book a Free Consultation Call <ArrowRight size={18} /></Link>
              <Link className="button button-secondary" href="/services">Explore My Services</Link>
            </div>
            <div className="consultation-note">
              <span><Check size={15} /></span>
              <p><strong>Leave with a clearer path forward.</strong> We’ll discuss your goals, uncover opportunities, and shape an actionable marketing plan.</p>
            </div>
          </div>
          <ProfileVisual />
        </div>
        <div className="container signal-bar" aria-label="Areas of focus">
          <span>Strategy first</span><span>Clear communication</span><span>Practical AI</span><span>Business outcomes</span>
        </div>
      </section>

      <section className="section-pad challenges-section">
        <div className="container">
          <div className="section-heading centered">
            <div className="eyebrow">Common growth challenges</div>
            <h2>Struggling to grow your business online?</h2>
            <p>Marketing can feel busy without creating clear momentum. These are the problems a focused strategy is designed to solve.</p>
          </div>
          <div className="challenge-grid">
            {challenges.map(([Icon, title, copy], index) => (
              <article className="challenge-card" key={String(title)}>
                <span className="card-number">0{index + 1}</span>
                <div className="icon-box"><Icon /></div>
                <h3>{String(title)}</h3><p>{String(copy)}</p>
              </article>
            ))}
          </div>
          <p className="bridge-copy">The answer is not simply doing more. It is choosing the right priorities, building a reliable system, and using AI where it creates genuine leverage.</p>
        </div>
      </section>

      <section className="section-pad dark-section">
        <div className="container growth-grid">
          <div className="sticky-copy">
            <div className="eyebrow light">A more useful marketing system</div>
            <h2>Smarter marketing.<br />Better opportunities.<br /><span>Sustainable growth.</span></h2>
            <p>AI becomes valuable when it supports a sound strategy. Together, we focus on the decisions and workflows that can make your marketing more relevant, consistent, and easier to improve.</p>
            <Link className="text-link light-link" href="/services">See how I can help <ArrowRight size={16} /></Link>
          </div>
          <div className="benefit-list">
            {benefits.map(([Icon, title, copy], index) => (
              <article className="benefit-row" key={String(title)}>
                <span className="benefit-index">0{index + 1}</span><Icon />
                <div><h3>{String(title)}</h3><p>{String(copy)}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-heading split-heading">
            <div><div className="eyebrow">What I can help with</div><h2>AI-powered digital marketing services</h2></div>
            <p>Six connected capabilities, shaped into the right mix for your business rather than sold as a one-size-fits-all package.</p>
          </div>
          <div className="service-grid">
            {siteConfig.services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <article className="service-card" key={service.slug}>
                  <div className="service-card-top"><div className="icon-box"><Icon /></div><span>0{index + 1}</span></div>
                  <h3>{service.title}</h3><p>{service.short}</p>
                  <Link className="text-link" href={`/services#${service.slug}`}>Explore service <ArrowRight size={15} /></Link>
                </article>
              );
            })}
          </div>
          <div className="centered-action"><Link className="button button-secondary" href="/services">View all service details <ArrowRight size={17} /></Link></div>
        </div>
      </section>

      <section className="section-pad pale-section">
        <div className="container why-grid">
          <div className="why-panel">
            <span className="mini-label">WHY THIS APPROACH</span>
            <h2>Marketing strategies built around your business.</h2>
            <p>No two businesses have the same customers, constraints, or opportunities. Your plan should reflect that.</p>
            <div className="strategy-map" aria-hidden="true">
              <div className="map-core">YOUR<br />BUSINESS</div>
              <span className="map-node node-a">Audience</span><span className="map-node node-b">Goals</span>
              <span className="map-node node-c">Channels</span><span className="map-node node-d">Systems</span>
            </div>
          </div>
          <div className="check-list">
            {[
              ["Personalized direction", "Recommendations reflect your goals, audience, resources, and stage of growth."],
              ["Business-first recommendations", "Tools and channels are selected for a practical reason, not because they are fashionable."],
              ["Practical use of AI", "AI supports research, content, analysis, and workflow—not empty automation for its own sake."],
              ["Clear communication", "Complex marketing ideas are translated into concrete priorities and next steps."],
              ["Data-informed improvement", "Useful signals guide iteration while context and judgment stay in the loop."],
              ["Meaningful outcomes", "The focus remains on visibility, qualified conversations, and better marketing operations."],
            ].map(([title, copy]) => <article key={title}><span><Check /></span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container about-preview">
          <ProfileVisual small />
          <div>
            <div className="eyebrow">Meet your AI marketing partner</div>
            <h2>A thoughtful, practical partner for your next stage of growth.</h2>
            <p>{siteConfig.biography}</p>
            <p>My mission is to make effective digital marketing more accessible to growing businesses—without unnecessary complexity, inflated promises, or disconnected tactics.</p>
            <Link className="button button-secondary" href="/about">Learn More About Me <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="section-pad process-section">
        <div className="container">
          <div className="section-heading centered"><div className="eyebrow">A clear way forward</div><h2>A simple process to start growing your business</h2></div>
          <div className="process-grid">
            {[
              ["Discover", "Understand your business, audience, goals, and most important challenges."],
              ["Analyze", "Review your online presence, current activity, and the opportunities worth exploring."],
              ["Strategize", "Build a tailored AI-powered digital marketing plan with clear priorities."],
              ["Implement & Improve", "Support agreed implementation, review relevant signals, and refine the approach."],
            ].map(([title, copy], index) => <article key={title}><span className="process-number">{index + 1}</span><div><small>Step {index + 1}</small><h3>{title}</h3><p>{copy}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section-pad credibility-section">
        <div className="container credibility-grid">
          <div><div className="eyebrow">Credibility through clarity</div><h2>Know exactly what you’ll get from the first conversation.</h2><p>Until verified testimonials, case studies, or certifications are added, this site builds trust the honest way: with a transparent process and concrete deliverables.</p></div>
          <div className="deliverable-card">
            <span className="mini-label">YOUR FREE CONSULTATION INCLUDES</span>
            <ul><li><Check /> Initial business and marketing assessment</li><li><Check /> Opportunity and priority identification</li><li><Check /> Practical, personalized recommendations</li><li><Check /> A customized actionable Digital Marketing Plan</li></ul>
            <Link className="button" href={siteConfig.bookingUrl}>Plan my consultation <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-heading split-heading"><div><div className="eyebrow">From the journal</div><h2>Insights on AI, marketing & business growth</h2></div><Link className="text-link" href="/blog">View all insights <ArrowRight size={15} /></Link></div>
          <div className="blog-grid">{blogPosts.map((post) => <BlogCard post={post} key={post.slug} />)}</div>
        </div>
      </section>

      <div className="container section-pad-top"><ConsultationCta /></div>
    </>
  );
}
