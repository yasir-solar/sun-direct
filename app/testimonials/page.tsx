import type { Metadata } from "next";
import Image from "next/image";
import { BreadcrumbSchema, Breadcrumbs } from "@/components/Primitives";

const customerVideos = [
  "/media/testimonials/customer-story-01.mp4",
  "/media/testimonials/customer-story-02.mp4",
  "/media/testimonials/customer-story-03.mp4",
  "/media/testimonials/customer-story-04.mp4",
  "/media/testimonials/customer-story-05.mp4",
  "/media/testimonials/customer-story-06.mp4",
] as const;

export const metadata: Metadata = {
  title: "Happy Solar homeowners",
  description: "Real stories from homeowners enjoying lower energy costs, greater control and a decision they would make again.",
  alternates: { canonical: "/testimonials/" },
};

export default function TestimonialsPage() {
  return <>
    <section className="page-hero testimonials-hero"><div className="container"><h1>Happy Solar homeowners</h1><p>Real stories from homeowners enjoying lower energy costs, greater control and a decision they would make again.</p></div></section>
    <BreadcrumbSchema current="Testimonials" path="/testimonials/"/><Breadcrumbs current="Testimonials"/>
    <section className="testimonials-proof section"><div className="container">
      <div className="testimonials-heading"><p className="kicker">After solar</p><h2>When a power bill turns into a credit.</h2><p>Two customer-supplied bill photos show micro-generation credits and a negative total due after solar production is applied.</p></div>
      <div className="testimonial-bill-grid">
        <figure className="testimonial-bill-card"><div className="testimonial-bill-visual"><Image src="/media/testimonials/microgeneration-credit.jpg" alt="Customer bill shown on a phone with micro-generation credits" fill sizes="(max-width: 760px) calc(100vw - 40px), 50vw"/></div><figcaption><span>Bill credit evidence</span><h3>Micro-generation credits in action.</h3><p>Energy exported from the system appears as credits directly on the customer statement.</p></figcaption></figure>
        <figure className="testimonial-bill-card"><div className="testimonial-bill-visual is-negative"><Image src="/media/testimonials/negative-bill-credit.jpg" alt="Customer phone displaying a negative total due after solar credits" fill sizes="(max-width: 760px) calc(100vw - 40px), 50vw"/></div><figcaption><span>Negative bill total</span><h3>A negative total due after solar.</h3><p>The supplied statement shows a credit balance after solar generation is accounted for.</p></figcaption></figure>
      </div>
      <p className="testimonials-disclaimer">Customer-supplied bill photos are shown with permission. Electricity use, solar production, retailer rates, credits, weather and bill outcomes vary by property and billing period.</p>
    </div></section>
    <section className="testimonials-homeowner section"><div className="container testimonials-homeowner-grid"><div className="testimonials-homeowner-photo"><Image src="/media/testimonials/solar-homeowner.jpeg" alt="Solar homeowner standing beside an electricity meter" fill sizes="(max-width: 760px) calc(100vw - 40px), 50vw"/></div><div><p className="kicker">Real homeowners</p><h2>Solar is personal. The results should be visible.</h2><p>From the first proposal through system activation, every project is built around the property, the energy use and the outcome the homeowner can understand.</p></div></div></section>
    <section className="testimonials-video-section section"><div className="container"><div className="testimonials-heading centered"><p className="kicker">Customer stories</p><h2>Hear from solar homeowners.</h2><p>Watch customer-supplied videos from the field.</p></div><div className="testimonials-video-grid">{customerVideos.map((src, index) => <article key={src}><video controls playsInline preload="metadata" aria-label={`Customer testimonial video ${index + 1}`}><source src={src} type="video/mp4"/>Your browser does not support embedded video.</video><p>Customer story {String(index + 1).padStart(2, "0")}</p></article>)}</div></div></section>
  </>;
}
