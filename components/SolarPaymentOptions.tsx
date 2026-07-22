import { CTA } from "@/components/Primitives";
import { Icon } from "@/components/Icons";

const paymentOptions = [
  {
    title: "Cash Purchase",
    label: "Custom Quote",
    description: "Own your system from day one with a proposal shaped around your property and energy use.",
    icon: "sun",
    benefits: [
      "Full system ownership",
      "Maximum long-term value potential",
      "No monthly financing payment",
      "Eligible incentives reviewed during assessment",
      "Custom proposal based on actual electricity usage",
    ],
    cta: "Request Cash Pricing",
    href: "/free-solar-assessment?option=cash",
    popular: false,
  },
  {
    title: "Solar Financing",
    label: "Financing Options Available",
    description: "Plan the project cost over time while keeping the benefits that come with system ownership.",
    icon: "chart",
    benefits: [
      "Spread project cost over time",
      "Flexible payment options where available",
      "Keep ownership benefits",
      "Designed around budget and electricity usage",
      "Subject to approval and lender terms",
    ],
    cta: "Explore Financing",
    href: "/solar-incentives-financing",
    popular: true,
  },
  {
    title: "Commercial & Farm Solutions",
    label: "Based on System Design",
    description: "Get project-specific planning for larger loads, rooftops, ground mounts and operating sites.",
    icon: "building",
    benefits: [
      "Custom pricing for larger systems",
      "Commercial rooftops and ground mounts",
      "Agricultural and high-usage properties",
      "Detailed production and savings analysis",
      "Project-specific financing or ownership options",
    ],
    cta: "Request Custom Pricing",
    href: "/free-solar-assessment?option=commercial-farm",
    popular: false,
  },
] as const;

export function SolarPaymentOptions() {
  return <section className="section payment-section" aria-labelledby="payment-options-title">
    <div className="payment-glow" aria-hidden="true" />
    <div className="container payment-shell">
      <div className="payment-heading">
        <h2 id="payment-options-title">Flexible Ways to Go Solar</h2>
        <p>Choose the path that best fits your property, energy goals, and budget.</p>
      </div>
      <div className="payment-grid">
        {paymentOptions.map((option) => <article className={`payment-card${option.popular ? " is-popular" : ""}`} key={option.title}>
          {option.popular && <span className="popular-badge">Most Popular</span>}
          <div className="payment-icon"><Icon name={option.icon} /></div>
          <div className="payment-card-copy">
            <h3>{option.title}</h3>
            <p>{option.description}</p>
          </div>
          <strong className="payment-label">{option.label}</strong>
          <ul>{option.benefits.map((benefit) => <li key={benefit}><Icon name="check" /><span>{benefit}</span></li>)}</ul>
          <CTA href={option.href}>{option.cta}</CTA>
        </article>)}
      </div>
      <p className="payment-note"><Icon name="shield" />System pricing, financing availability, estimated savings, incentives, and payment terms vary by property, electricity usage, equipment, project size, lender approval, and current program eligibility.</p>
    </div>
  </section>;
}
