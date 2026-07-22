import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./solar.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap", variable: "--font-poppins" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url), title: { default: site.title, template: "%s | Sun Direct Renewable" }, description: site.description,
  alternates: { canonical: "/" }, robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "en_CA", siteName: site.name, title: site.title, description: site.description, images: [{ url: "/media/sun-direct-luxury-hero.webp", width: 1672, height: 941, alt: "Luxury Alberta home with rooftop solar panels illuminated by golden evening sunlight" }] },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/media/sun-direct-luxury-hero.webp"] },
  manifest: "/site.webmanifest", icons: { icon: "/favicon.svg" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#123d2b" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name, url: site.url, logo: `${site.url}/favicon.svg`, areaServed: "Alberta", address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" } },
    { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, publisher: { "@id": `${site.url}/#organization` }, inLanguage: "en-CA" },
  ]};
  return <html lang="en-CA"><body className={poppins.variable}><SmoothScroll/><Header/><main id="main">{children}</main><Footer/><div className="mobile-cta"><Link href="/our-process">Our Process</Link><Link className="button" href="/free-solar-assessment">Get Proposal</Link></div><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>;
}
