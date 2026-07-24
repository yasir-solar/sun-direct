import Link from "next/link";
import Image from "next/image";

const inboxes = [
  { label: "General inquiries", email: "info@sundirect.ca" },
  { label: "Operations", email: "operations@sundirect.ca" },
  { label: "Our team", email: "team@sundirect.ca" },
];

export function Footer() {
  return <footer className="footer footer-contact"><div className="footer-rays" aria-hidden="true"/><div className="footer-top container">
    <div className="footer-brand"><Link href="/" className="logo" aria-label="Sun Direct Renewable home"><span className="logo-image" aria-hidden="true"><Image src="/media/brand/sun-direct-renewable-logo.webp" alt="" width={512} height={243} /></span></Link><span className="location-pill">Based in Calgary, Alberta</span><p>Solar solutions for Alberta homes, businesses and farms, from the first conversation to system activation.</p></div>
    <div className="footer-contact-details"><p className="footer-label">Email us</p><h2>Start with the right inbox.</h2><div className="footer-inbox-list">{inboxes.map(({ label, email }) => <a key={email} href={`mailto:${email}`}><span>{label}</span><strong>{email}</strong></a>)}</div></div>
    <div className="footer-actions"><p className="footer-label">Learn more</p><Link className="button" href="/our-process/">Our Process</Link><Link className="footer-contact-link" href="/contact/">Contact Sun Direct Renewable <span aria-hidden="true">→</span></Link></div>
  </div><div className="footer-bottom container"><p><span className="footer-credit-desktop">Copyright © {new Date().getFullYear()} Sun Direct Renewable Inc. All rights reserved — Proudly serving Alberta with solar solutions.</span><span className="footer-credit-mobile">© {new Date().getFullYear()} Sun Direct Renewable Inc. | All rights reserved.</span></p></div></footer>;
}
