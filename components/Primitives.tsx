import Link from "next/link";
import { Icon } from "./Icons";
import { site } from "@/data/site";

export function SectionHeading({ kicker, title, text, align = "left" }: { kicker?: string; title: string; text?: string; align?: "left"|"center" }) {
  return <div className={`section-heading ${align === "center" ? "center" : ""}`}>{kicker && <p className="kicker">{kicker}</p>}<h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export function CTA({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return <Link className={`button ${secondary ? "button-secondary" : ""}`} href={href}>{children}<Icon name="arrow" /></Link>;
}

export function Breadcrumbs({ current }: { current: string }) {
  return <nav className="breadcrumbs container" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span aria-current="page">{current}</span></nav>;
}

export function BreadcrumbSchema({ current, path }: { current: string; path: string }) {
  const schema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` }, { "@type": "ListItem", position: 2, name: current, item: `${site.url}${path}` }] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function Disclaimer({ children }: { children: React.ReactNode }) {
  return <aside className="disclaimer"><Icon name="shield"/><p>{children}</p></aside>;
}

export function FinalCTA({ farm = false }: { farm?: boolean }) {
  return <section className="final-cta"><div className="cta-orbit" aria-hidden="true"/><div className="container"><div><p className="kicker light">Your next step</p><h2>{farm ? "Plan Solar Around the Way Your Farm Works" : "Turn Sunlight Into a Smarter Energy Plan"}</h2><p>Share your electricity usage and property details. We’ll organize the information needed to shape a clear solar proposal.</p></div><CTA href="/free-solar-assessment">{farm ? "Request a Farm Proposal" : "Get Your Solar Proposal"}</CTA></div></section>;
}
