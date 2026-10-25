import type { Metadata } from "next";
import { ArrowRight, Bot, ClipboardCheck, Lightbulb, MessagesSquare, SearchCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FocusCardGroup } from "@/components/focus-card-group";
import { T } from "@/components/language-provider";
import { InnerPageHeroVisual } from "@/components/inner-page-hero-visual";

export const metadata: Metadata = {
  title: "Contact & Free Consultation",
  description: "Book a free consultation to identify marketing opportunities and receive a customized Digital Marketing Plan for your business.",
  alternates: { canonical: "/contact" },
};

const contactBenefits: Array<[LucideIcon, number]> = [
  [MessagesSquare, 1], [SearchCheck, 2], [Lightbulb, 3], [Bot, 4], [ClipboardCheck, 5],
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div className="page-hero-copy"><div className="breadcrumb"><a href="/"><T id="common.home" /></a><span>/</span><span><T id="contact.label" /></span></div>
          <div className="eyebrow"><T id="contact.eyebrow" /></div><h1><T id="contact.title" /></h1><p><T id="contact.intro" /></p></div>
          <InnerPageHeroVisual variant="contact" />
        </div>
      </section>

      <section className="section-pad">
        <div className="container contact-grid" data-reveal>
          <div>
            <div className="booking-panel" id="book">
              <div className="eyebrow light"><T id="common.freeConsultation" /></div><h2><T id="contact.book" /></h2><p><T id="contact.bookCopy" /></p>
              <a className="button button-light" href="/contact#message"><T id="common.book" /> <ArrowRight size={16} /></a>
            </div>
            <FocusCardGroup className="contact-benefits">
              {contactBenefits.map(([Icon, item]) => <article key={item}><Icon size={21} /><div><h3><T id={`contact.benefit.${item}.title`} /></h3><p><T id={`contact.benefit.${item}.copy`} /></p></div></article>)}
            </FocusCardGroup>
          </div>
          <div id="message">
            <div className="eyebrow"><T id="contact.prefer" /></div><p><T id="contact.preferCopy" /></p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
