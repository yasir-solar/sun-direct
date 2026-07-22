import { Icon } from "@/components/Icons";

const rates = [
  {
    title: "Pre-solar rate",
    rate: "5.90",
    detail: "For eligible customers planning a solar installation before their system is live.",
    icon: "sun",
  },
  {
    title: "Low rate",
    rate: "5.90",
    detail: "The published one-year rate for sites registered as micro-generators.",
    icon: "power",
  },
  {
    title: "High export rate",
    rate: "35.00",
    detail: "A published option for members exporting excess electricity to the grid.",
    icon: "chart",
  },
] as const;

export function SolarClubRates() {
  return <section className="section rate-section" aria-labelledby="solar-club-rates-title">
    <div className="rate-orbit" aria-hidden="true" />
    <div className="container rate-shell">
      <div className="rate-heading">
        <p className="kicker light">Solar Club rate snapshot</p>
        <h2 id="solar-club-rates-title">Understand the rates behind your solar plan.</h2>
        <p>Solar Club publishes distinct electricity rates for eligible Alberta customers before and after solar activation. These are Solar Club rates—not Sun Direct Renewable rates.</p>
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
        <p><Icon name="shield" />Rates, eligibility, terms, fees, and switching options are set by Solar Club and may change. Confirm all current details directly with Solar Club before making a decision.</p>
        <a className="button button-secondary" href="https://solarclub.ca" target="_blank" rel="noopener noreferrer">View current Solar Club rates <Icon name="arrow" /></a>
      </div>
    </div>
  </section>;
}
