import Link from "next/link";
import Image from "next/image";

const inboxes = [
  { label: "General inquiries", email: "info@sundirect.ca" },
  { label: "Operations", email: "operations@sundirect.ca" },
  { label: "Our team", email: "team@sundirect.ca" },
];

export function Footer() {
  return <footer className="footer footer-contact"><div className="footer-rays" aria-hidden="true"/><div className="footer-top container">
    <div className="footer-brand"><Link href="/" className="logo" aria-label="Sun Direct Renewable home"><span className="logo-image" aria-hidden="true"><Image src="/media/brand/sun-direct-renewable-logo.png" alt="" width={1774} height={887} /></span></Link><span className="location-pill">Based in Calgary, Alberta</span><p>Solar solutions for Alberta homes, businesses and farms, from the first conversation to system activation.</p></div>
    <div className="footer-contact-details"><p className="footer-label">Email us</p><div className="footer-inbox-list">{inboxes.map(({ label, email }) => <a key={email} href={`mailto:${email}`}><span>{label}</span><strong>{email}</strong></a>)}</div></div>
    <nav className="footer-nav" aria-label="Services"><h2>Services</h2><Link href="/residential-solar/">Residential Solar</Link><Link href="/commercial-solar/">Commercial Solar</Link><Link href="/agricultural-solar/">Agricultural Solar</Link><Link href="/projects/">Ground-Mounted Solar</Link><Link href="/free-solar-assessment/">Solar Proposal</Link><Link href="/our-process/#savings-report">Savings Analysis</Link></nav>
    <nav className="footer-nav" aria-label="Resources"><h2>Resources</h2><Link href="/our-process/">Our Process</Link><Link href="/how-solar-works/">How Solar Works</Link><Link href="/solar-panels-calgary/">Calgary Solar</Link><Link href="/solar-incentives-financing/">Incentives &amp; Financing</Link><Link href="/faq/">FAQ</Link><Link href="/blog/">Blog</Link><Link href="/service-areas/">Service Areas</Link></nav>
    <nav className="footer-nav" aria-label="Company"><h2>Company</h2><Link href="/about/">About</Link><Link href="/projects/">Projects</Link><Link href="/contact/">Contact</Link><Link href="/privacy-policy/">Privacy Policy</Link><Link href="/terms/">Terms</Link><Link href="/accessibility/">Accessibility</Link></nav>
  </div><div className="footer-bottom container"><p><span className="footer-credit-desktop">Copyright © {new Date().getFullYear()} Sun Direct Renewable Inc. All rights reserved — Proudly serving Alberta with solar solutions.</span><span className="footer-credit-mobile">© {new Date().getFullYear()} Sun Direct Renewable Inc. | All rights reserved.</span></p></div></footer>;
}
