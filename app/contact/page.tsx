import type { Metadata } from "next";
import { ArrowRight, Bot, ClipboardCheck, Lightbulb, MessagesSquare, SearchCheck } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FocusCardGroup } from "@/components/focus-card-group";

export const metadata: Metadata = {
  title: "Contact & Free Consultation",
  description: "Book a free consultation to identify marketing opportunities and receive a customized Digital Marketing Plan for your business.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><a href="/">Home</a><span>/</span><span>Contact</span></div>
          <div className="eyebrow">Start with a useful conversation</div>
          <h1>Let’s Talk About Growing Your Business</h1>
          <p>Have questions about your marketing? Not sure why you’re struggling to attract customers or generate sales? Let’s find out what’s holding your business back.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container contact-grid" data-reveal>
          <div>
            <div className="booking-panel" id="book">
              <div className="eyebrow light">Free strategic consultation</div>
              <h2>Book Your Free Consultation</h2>
              <p>Let’s analyze your business, identify growth opportunities, and create a customized Digital Marketing Plan you can start implementing immediately.</p>
              <a className="button button-light" href="/contact#message">Book a Free Consultation Call <ArrowRight size={16} /></a>
            </div>
            <FocusCardGroup className="contact-benefits">
              {[
                [MessagesSquare, "Discuss your goals", "We’ll talk through your business goals and marketing challenges."],
                [SearchCheck, "Review your marketing", "We’ll review your existing marketing efforts."],
                [Lightbulb, "Identify opportunities", "We’ll identify opportunities to attract more customers."],
                [Bot, "Explore the right tools", "We’ll explore AI tools and Digital Marketing strategies suitable for your business."],
                [ClipboardCheck, "Create your plan", "You’ll receive a customized Digital Marketing Plan you can start implementing immediately."],
              ].map(([Icon, title, copy]) => <article key={String(title)}><Icon size={21} /><div><h3>{String(title)}</h3><p>{String(copy)}</p></div></article>)}
            </FocusCardGroup>
          </div>
          <div id="message">
            <div className="eyebrow">Prefer to send a message?</div>
            <p>Tell me a little about your business, and I’ll get back to you.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
