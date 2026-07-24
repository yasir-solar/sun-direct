import type { Metadata } from "next";
import { BreadcrumbSchema, Breadcrumbs } from "@/components/Primitives";
import { QuoteForm } from "@/components/QuoteForm";

const inboxes = [
  { label: "General inquiries & solar assessments", email: "info@sundirect.ca" },
  { label: "Operations", email: "operations@sundirect.ca" },
  { label: "Our team", email: "team@sundirect.ca" },
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
    <section className="contact-form-section section section-soft"><div className="container quote-panel"><aside className="quote-side"><p className="kicker light">Contact us</p><h2>Tell us about your property.</h2><p>All website questions and solar assessments are sent to <a href="mailto:info@sundirect.ca">info@sundirect.ca</a>.</p><div className="footer-inbox-list contact-page-inbox-list">{inboxes.map(({ label, email }) => <a key={email} href={`mailto:${email}`}><span>{label}</span><strong>{email}</strong></a>)}</div></aside><QuoteForm/></div></section>
  </>;
}
