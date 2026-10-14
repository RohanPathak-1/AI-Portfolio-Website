import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ConsultationCta({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`consultation-cta ${compact ? "compact" : ""}`}>
      <div className="cta-orbit" aria-hidden="true"><span /><span /><span /></div>
      <div>
        <div className="eyebrow light"><CalendarDays size={15} /> Free strategic consultation</div>
        <h2>Ready to take your business to the next level?</h2>
        <p>Let’s review your business, uncover marketing opportunities, and create a customized Digital Marketing Plan you can start putting into action.</p>
      </div>
      <div className="cta-action">
        <Link className="button button-light" href={siteConfig.bookingUrl}>Book a Free Consultation Call <ArrowRight size={17} /></Link>
        <small>No pressure. Practical recommendations you can use.</small>
      </div>
    </section>
  );
}
