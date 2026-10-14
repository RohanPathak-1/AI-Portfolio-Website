import Link from "next/link";
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
          <p className="config-note">Contact details and social profiles are ready to configure before public launch.</p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/about">About Me</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Insights</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h2>Services</h2>
          {siteConfig.services.slice(0, 4).map((service) => (
            <Link href={`/services#${service.slug}`} key={service.slug}>{service.title}</Link>
          ))}
        </div>
        <div>
          <h2>Start a conversation</h2>
          <p>Let’s review your goals and find the most useful next step.</p>
          <Link className="footer-action" href={siteConfig.bookingUrl}>
            Book a free call <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <div><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Use</Link></div>
      </div>
    </footer>
  );
}
