import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <Logo />
          <p>{siteConfig.tagline}</p>
          <p className="config-note">Let’s analyze your business, identify growth opportunities, and create a customized Digital Marketing Plan.</p>
        </div>
        <div>
          <h2>Explore</h2>
          <a href="/about">About Me</a>
          <a href="/services">Services</a>
          <a href="/blog">Insights</a>
          <a href="/contact">Contact</a>
        </div>
        <div>
          <h2>Services</h2>
          {siteConfig.services.slice(0, 4).map((service) => (
            <a href={`/services#${service.slug}`} key={service.slug}>{service.title}</a>
          ))}
        </div>
        <div>
          <h2>Start a conversation</h2>
          <p>Let’s review your goals and find the most useful next step.</p>
          <a className="footer-action" href={siteConfig.bookingUrl}>
            Book a free call <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <div><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Use</a></div>
      </div>
    </footer>
  );
}
