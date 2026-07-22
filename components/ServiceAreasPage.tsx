import Image from "next/image";
import { CTA } from "@/components/Primitives";
import { Icon } from "@/components/Icons";
import { site } from "@/data/site";

const cities = [
  { name: "Calgary", text: "Our primary service market for homes, businesses, farms and acreage properties across the Calgary area.", services: ["Residential", "Commercial", "Agricultural"], image: "/media/installations/calgary-aerial.webp", alt: "Aerial view of a completed residential rooftop solar installation in the Calgary area", primary: true },
  { name: "Edmonton", text: "Property-specific solar planning for rooftop, commercial and larger energy-use projects in Alberta's capital region.", services: ["Residential", "Commercial", "Rooftop"], image: "/media/installations/multi-roof-home.webp", alt: "Detached home with rooftop solar panels installed across multiple roof levels", primary: false },
  { name: "Red Deer", text: "A practical review for Central Alberta properties balancing electricity use, available roof space and installation scope.", services: ["Residential", "Commercial", "Ground mount"], image: "/media/installations/residential-aerial.webp", alt: "Aerial view of solar arrays installed on a residential property", primary: false },
  { name: "Lethbridge", text: "Solar proposals shaped around the property, energy profile and current utility requirements in southern Alberta.", services: ["Residential", "Commercial", "Rooftop"], image: "/media/installations/roof-array-close.webp", alt: "Close view of a professionally installed rooftop solar array", primary: false },
  { name: "Medicine Hat", text: "Project assessment for homes, facilities, farms and rural sites where solar can fit the operating plan.", services: ["Residential", "Agricultural", "Ground mount"], image: "/media/installations/ground-mount.webp", alt: "Ground-mounted solar array across an open rural Alberta field", primary: false },
] as const;

const communities = ["Airdrie", "Cochrane", "Okotoks", "Chestermere", "Strathmore", "High River", "Rocky View County", "Grande Prairie", "Fort McMurray", "Brooks", "Rural Alberta"];

const coverageTypes = [
  { icon: "home", title: "Residential solar", text: "Rooftop systems organized around household energy use, roof suitability and future electricity plans.", href: "/residential-solar", cta: "Explore residential solar", featured: false },
  { icon: "building", title: "Commercial solar", text: "Practical reviews for facilities, operating loads, large rooftops and site-specific installation planning.", href: "/commercial-solar", cta: "Explore commercial solar", featured: false },
  { icon: "leaf", title: "Agricultural & farm solar", text: "Planning for barns, workshops, irrigation, acreages and ground-mounted systems built around the way the operation works.", href: "/agricultural-solar", cta: "Explore farm solar", featured: true },
] as const;

const confirmationSteps = [
  { icon: "map", title: "Share your address", text: "Send the property location, property type and a little context about your energy goals." },
  { icon: "search", title: "We review the property and utility area", text: "We consider the location, roof or land, electricity usage, utility requirements and installation scope." },
  { icon: "files", title: "Receive your custom solar proposal", text: "If the project is a fit, we’ll outline the next practical steps for your property." },
] as const;

export function ServiceAreasPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Solar Installation Across Alberta",
    description: "Residential, commercial and agricultural solar project assessments across Alberta, subject to property and project review.",
    provider: { "@id": `${site.url}/#organization` },
    areaServed: ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "Medicine Hat", "Alberta"].map((name) => ({ "@type": "AdministrativeArea", name })),
    url: `${site.url}/service-areas/`,
  };

  return <>
    <section className="areas-hero">
      <Image src="/media/installations/ground-mount.webp" alt="Ground-mounted solar array across an open Alberta landscape" fill priority sizes="100vw" />
      <div className="areas-hero-rays" aria-hidden="true" />
      <div className="container areas-hero-inner">
        <p className="service-label">Sun Direct Renewable · Alberta</p>
        <h1>Solar Installation Across Alberta</h1>
        <p>Solar planning for residential, commercial and agricultural properties—from rooftops and working buildings to acreage and ground-mounted systems.</p>
        <div className="areas-hero-actions"><CTA href="/free-solar-assessment">Get Your Solar Proposal</CTA><CTA href="#coverage" secondary>Check Your Service Area</CTA></div>
        <div className="areas-hero-proof"><span><Icon name="home" />Residential</span><span><Icon name="building" />Commercial</span><span><Icon name="leaf" />Agricultural</span></div>
      </div>
    </section>

    <section className="section areas-cities" aria-labelledby="service-cities-title">
      <div className="container">
        <div className="areas-heading"><p className="kicker">Main service cities</p><h2 id="service-cities-title">An Alberta solar conversation that starts with your property.</h2><p>Our team reviews each project around the site, electricity use, and the practical path to installation—not a generic city template.</p></div>
        <div className="areas-city-grid">
          {cities.map((city) => <article className={`areas-city-card${city.primary ? " is-primary" : ""}`} key={city.name}>
            <Image src={city.image} alt={city.alt} fill sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 33vw" />
            <div className="areas-city-overlay" />
            <div className="areas-city-content"><span className="areas-city-pin"><Icon name="map" />{city.primary ? "Primary service market" : "Alberta service area"}</span><h3>{city.name}</h3><p>{city.text}</p><div className="areas-tags">{city.services.map((service) => <span key={service}>{service}</span>)}</div><CTA href="/free-solar-assessment">Request a proposal</CTA></div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section areas-coverage" id="coverage" aria-labelledby="coverage-title">
      <div className="coverage-sun" aria-hidden="true" />
      <div className="container areas-coverage-layout">
        <div className="areas-coverage-copy"><p className="kicker">Beyond the main cities</p><h2 id="coverage-title">Solar Solutions Across Alberta</h2><p>Sun Direct Renewable may assess projects throughout Alberta. Coverage is confirmed after we review the property location, project type, energy usage, roof or land availability, utility requirements, and installation scope.</p><div className="coverage-checks">{["Property location", "Project type", "Energy usage", "Roof or land availability", "Utility requirements", "Installation scope"].map((item) => <span key={item}><Icon name="check" />{item}</span>)}</div></div>
        <aside className="areas-community-panel"><p>Communities we may assess</p><div>{communities.map((community) => <span key={community}><Icon name="map" />{community}</span>)}</div><small>Service availability is confirmed after address and project review.</small></aside>
      </div>
    </section>

    <section className="section areas-types" aria-labelledby="coverage-types-title">
      <div className="container"><div className="areas-heading center"><p className="kicker">Built for different properties</p><h2 id="coverage-types-title">Coverage that fits the way you use power.</h2><p>Whether the project is a home, working facility or rural operation, the review begins with the practical realities of the site.</p></div><div className="areas-type-grid">{coverageTypes.map((type) => <article className={`areas-type-card${type.featured ? " is-featured" : ""}`} key={type.title}><div className="areas-type-icon"><Icon name={type.icon} /></div><h3>{type.title}</h3><p>{type.text}</p><a href={type.href}>{type.cta} <Icon name="arrow" /></a></article>)}</div></div>
    </section>

    <section className="section areas-confirmation" aria-labelledby="confirmation-title">
      <div className="container"><div className="areas-heading center"><p className="kicker">A clear next step</p><h2 id="confirmation-title">How service-area confirmation works.</h2></div><div className="areas-step-grid">{confirmationSteps.map((step, index) => <article key={step.title}><span>0{index + 1}</span><div><Icon name={step.icon} /></div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div>
    </section>

    <section className="areas-final-cta"><div className="areas-final-rays" aria-hidden="true" /><div className="container"><div><p className="kicker light">Alberta project review</p><h2>Not Sure If We Serve Your Area?</h2><p>Send us your property address and electricity usage. We’ll confirm coverage and review the next steps for your project.</p></div><CTA href="/free-solar-assessment">Check My Property</CTA></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
  </>;
}
