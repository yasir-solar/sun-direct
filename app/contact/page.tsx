import type { Metadata } from "next";
import { BreadcrumbSchema, Breadcrumbs } from "@/components/Primitives";
import { QuoteForm } from "@/components/QuoteForm";

const inboxes = [
  { label: "General inquiries & solar assessments", email: "info@sundirect.ca", detail: "Every website inquiry and solar assessment is directed to this inbox." },
  { label: "Operations", email: "operations@sundirect.ca", detail: "For project coordination and operational communication." },
  { label: "Our team", email: "team@sundirect.ca", detail: "For general team communication and follow-up." },
];

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Sun Direct Renewable about solar for a Calgary or Alberta home, business, farm or rural property.",
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return <>
    <section className="page-hero contact-hero"><div className="container"><p className="kicker light">Contact Sun Direct Renewable</p><h1>Let&apos;s talk about your solar plans.</h1><p>Choose the inbox that fits your message, or send your solar assessment directly to our general inquiries team.</p></div></section>
    <BreadcrumbSchema current="Contact" path="/contact/"/><Breadcrumbs current="Contact"/>
    <section className="contact-inboxes section"><div className="container"><div className="contact-inboxes-heading"><p className="kicker">Email us</p><h2>Reach the right team directly.</h2><p>For any website question or solar assessment, use <a href="mailto:info@sundirect.ca">info@sundirect.ca</a>.</p></div><div className="contact-inbox-grid">{inboxes.map(({ label, email, detail }) => <a className="contact-inbox-card" key={email} href={`mailto:${email}`}><span>{label}</span><strong>{email}</strong><p>{detail}</p><b>Send email <i aria-hidden="true">→</i></b></a>)}</div></div></section>
    <section className="contact-form-section section section-soft"><div className="container quote-panel"><aside className="quote-side"><p className="kicker light">Solar assessment</p><h2>Tell us about your property.</h2><p>All assessment requests from this form are addressed to <a href="mailto:info@sundirect.ca">info@sundirect.ca</a>.</p><a className="button button-secondary" href="mailto:info@sundirect.ca">Email info@sundirect.ca</a></aside><QuoteForm/></div></section>
  </>;
}
