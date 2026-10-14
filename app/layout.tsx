import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.websiteUrl),
  title: { default: `${siteConfig.name} | ${siteConfig.title}`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    url: "/",
  },
  twitter: { card: "summary_large_image", title: `${siteConfig.name} | ${siteConfig.title}`, description: siteConfig.description },
  icons: { icon: "/rohan-pathak-logo.png", shortcut: "/rohan-pathak-logo.png" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#071a2f" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    url: siteConfig.websiteUrl,
    description: siteConfig.description,
  };

  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
