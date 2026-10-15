import { ArrowRight, CalendarDays } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ConsultationCta({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`consultation-cta ${compact ? "compact" : ""}`}>
      <div className="cta-orbit" aria-hidden="true"><span /><span /><span /></div>
      <div>
        <div className="eyebrow light"><CalendarDays size={15} /> Free strategic consultation</div>
        <h2>Your Business Has Growth Potential. Let’s Unlock It.</h2>
        <p>Discover what’s holding your marketing back and get a clear, personalized plan to attract more customers and grow your business.</p>
      </div>
      <div className="cta-action">
        <a className="button button-light" href={siteConfig.bookingUrl}>Book a Free Consultation Call <ArrowRight size={17} /></a>
        <small>Free consultation. Personalized recommendations. Clear next steps.</small>
      </div>
    </section>
  );
}
