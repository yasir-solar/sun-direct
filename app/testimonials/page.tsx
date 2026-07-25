import type { Metadata } from "next";
import { BreadcrumbSchema, Breadcrumbs } from "@/components/Primitives";

export const metadata: Metadata = {
  title: "Happy Solar homeowners",
  description: "Real stories from homeowners enjoying lower energy costs, greater control and a decision they would make again.",
  alternates: { canonical: "/testimonials/" },
};

export default function TestimonialsPage() {
  return <>
    <section className="page-hero testimonials-hero"><div className="container"><h1>Happy Solar homeowners</h1><p>Real stories from homeowners enjoying lower energy costs, greater control and a decision they would make again.</p></div></section>
    <BreadcrumbSchema current="Testimonials" path="/testimonials/"/><Breadcrumbs current="Testimonials"/>
  </>;
}
