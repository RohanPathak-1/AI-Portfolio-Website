import { ArrowRight, CalendarDays } from "lucide-react";
import { siteConfig } from "@/config/site";
import { T } from "./language-provider";

export function ConsultationCta({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`consultation-cta ${compact ? "compact" : ""}`} data-reveal>
      <div className="cta-orbit" aria-hidden="true"><span /><span /><span /></div>
      <div>
        <div className="eyebrow light"><CalendarDays size={15} /> <T id="common.freeConsultation" /></div>
        <h2><T id="cta.title" /></h2>
        <p><T id="cta.copy" /></p>
      </div>
      <div className="cta-action">
        <a className="button button-light" href={siteConfig.bookingUrl}><T id="common.book" /> <ArrowRight size={17} /></a>
        <small><T id="cta.note" /></small>
      </div>
    </section>
  );
}
