import { Icon } from "@/components/Icons";

const rates = [
  {
    title: "Pre-solar electricity rate",
    rate: "5.90",
    detail: "For eligible customers planning a solar installation before their system is live.",
    icon: "sun",
  },
  {
    title: "Standard electricity rate",
    rate: "5.90",
    detail: "An electricity rate option to review as your solar system moves toward activation.",
    icon: "power",
  },
  {
    title: "Solar export rate",
    rate: "35.00",
    detail: "An export-focused option to discuss when your system can send excess electricity to the grid.",
    icon: "chart",
  },
] as const;

export function SolarClubRates() {
  return <section className="section rate-section" aria-labelledby="electricity-rates-title">
    <div className="rate-orbit" aria-hidden="true" />
    <div className="container rate-shell">
      <div className="rate-heading">
        <p className="kicker light">Electricity rate options</p>
        <h2 id="electricity-rates-title">Understand the rates behind your solar plan.</h2>
        <p>Explore electricity rate options that can support your property before solar activation and when your system is ready to export excess energy.</p>
      </div>
      <div className="rate-grid">
        {rates.map((item) => <article className="rate-card" key={item.title}>
          <span className="rate-icon"><Icon name={item.icon} /></span>
          <h3>{item.title}</h3>
          <p className="rate-value"><strong>{item.rate}</strong><span>¢<small>/kWh</small></span></p>
          <p>{item.detail}</p>
        </article>)}
      </div>
      <div className="rate-footnote">
        <p><Icon name="shield" />Rates, eligibility, terms, fees, and switching options may change. We will help you review the available options for your property before you make a decision.</p>
        <a className="button button-secondary" href="/contact">Discuss your rate options <Icon name="arrow" /></a>
      </div>
    </div>
  </section>;
}
