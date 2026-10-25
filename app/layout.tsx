import type { Metadata, Viewport } from "next";
import { Manrope, Noto_Sans_Devanagari } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MotionController } from "@/components/motion-controller";
import { LanguageProvider, T } from "@/components/language-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { siteConfig } from "@/config/site";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const devanagari = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: "--font-devanagari", display: "swap" });

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
    <html lang="en" className={`${manrope.variable} ${devanagari.variable}`}>
      <body>
        <LanguageProvider>
          <MotionController />
          <ScrollProgress />
          <a className="skip-link" href="#main-content"><T id="skip" /></a>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        </LanguageProvider>
      </body>
    </html>
  );
}
