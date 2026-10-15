import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Logo } from "./logo";
import { T } from "./language-provider";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <Logo />
          <p><T id="footer.tagline" /></p>
          <p className="config-note"><T id="footer.note" /></p>
        </div>
        <div>
          <h2><T id="footer.explore" /></h2>
          <a href="/about"><T id="nav.about" /></a>
          <a href="/services"><T id="nav.services" /></a>
          <a href="/blog"><T id="footer.insights" /></a>
          <a href="/contact"><T id="nav.contact" /></a>
        </div>
        <div>
          <h2><T id="nav.services" /></h2>
          {siteConfig.services.slice(0, 4).map((service, index) => (
            <a href={`/services#${service.slug}`} key={service.slug}><T id={`service.${index + 1}.title`} /></a>
          ))}
        </div>
        <div>
          <h2><T id="footer.start" /></h2>
          <p><T id="footer.startCopy" /></p>
          <a className="footer-action" href={siteConfig.bookingUrl}>
            <T id="footer.book" /> <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {siteConfig.name}. <T id="footer.rights" /></p>
        <div><a href="/privacy"><T id="footer.privacy" /></a><a href="/terms"><T id="footer.terms" /></a></div>
      </div>
    </footer>
  );
}
