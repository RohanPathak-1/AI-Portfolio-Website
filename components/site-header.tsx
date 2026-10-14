"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Logo } from "./logo";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link className={pathname === item.href ? "active" : ""} href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="button button-small header-cta" href={siteConfig.bookingUrl}>
          Book a Free Call
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={`mobile-menu ${open ? "is-open" : ""}`} id="mobile-menu">
        <nav className="container" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link className={pathname === item.href ? "active" : ""} href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="button" href={siteConfig.bookingUrl} onClick={() => setOpen(false)}>Book a Free Consultation Call</Link>
        </nav>
      </div>
    </header>
  );
}
