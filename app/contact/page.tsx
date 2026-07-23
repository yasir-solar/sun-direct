import type { Metadata } from "next";
import { BreadcrumbSchema, Breadcrumbs } from "@/components/Primitives";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Sun Direct Renewable about solar for a Calgary or Alberta home, business, farm or rural property.",
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return <>
    <section className="page-hero">
      <div className="container">
        <p className="kicker light">Start a conversation</p>
        <h1>Let&apos;s Build the Right Solar Proposal</h1>
        <p>Share your electricity use, property type and goals. We&apos;ll organize the information needed to discuss the next step.</p>
      </div>
    </section>
    <BreadcrumbSchema current="Contact" path="/contact/"/>
    <Breadcrumbs current="Contact"/>
    <section className="section section-soft">
      <div className="container quote-panel">
        <aside className="quote-side">
          <p className="kicker light">Calgary, Alberta</p>
          <h2>A better conversation starts with the property.</h2>
          <p>Residential, commercial, agricultural, rooftop and ground-mounted opportunities are reviewed through the proposal form.</p>
          <ul className="check-list"><li>Usage-led review</li><li>Property-specific questions</li><li>Clear process guidance</li></ul>
        </aside>
        <QuoteForm/>
      </div>
    </section>
  </>;
}
