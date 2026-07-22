import Image from "next/image";
import type { PageContent } from "@/data/content";
import { FAQList } from "@/components/FAQ";
import { Icon } from "@/components/Icons";
import { Breadcrumbs, CTA, FinalCTA, SectionHeading } from "@/components/Primitives";
import { site } from "@/data/site";

type ServiceKind = "residential" | "commercial" | "agricultural";

type ServiceConfig = {
  label: string;
  heroImage: string;
  heroAlt: string;
  primaryCta: string;
  proof: string[];
  introTitle: string;
  introText: string;
  introImage: string;
  introAlt: string;
  priorities: string[];
  values: { icon: string; title: string; text: string }[];
  reviewTitle: string;
  reviewText: string;
  reviewImage: string;
  reviewAlt: string;
  reviewItems: string[];
  processText: string;
  process: { title: string; text: string }[];
};

const configs: Record<ServiceKind, ServiceConfig> = {
  residential: {
    label: "Residential solar for Alberta homes",
    heroImage: "/media/installations/multi-roof-home.webp",
    heroAlt: "Detached Alberta home with solar panels installed across multiple roof levels",
    primaryCta: "Get Your Home Solar Proposal",
    proof: ["Usage-led system sizing", "Roof and shade review", "Guidance through activation"],
    introTitle: "A home energy plan shaped around real life.",
    introText: "Your roof is only one part of the decision. We connect household electricity use, usable roof area, future plans and approval requirements before recommending a system.",
    introImage: "/media/installations/residential-aerial.webp",
    introAlt: "Aerial view of a residential property with a carefully planned solar array",
    priorities: ["Twelve months of electricity usage", "Roof condition, orientation and shade", "Electrical service and available capacity", "Future loads such as an EV, heat pump or hot tub", "Monitoring and battery-readiness where appropriate"],
    values: [
      { icon: "home", title: "Designed for your property", text: "Panel placement and system size respond to your roof, household consumption and the way you expect your energy needs to change." },
      { icon: "chart", title: "Clear production assumptions", text: "We explain the inputs behind estimated annual production so the proposal is easier to evaluate and compare." },
      { icon: "shield", title: "One connected process", text: "Design, permits, utility coordination, installation and activation stay connected from the first review onward." },
    ],
    reviewTitle: "What makes a responsible home solar proposal?",
    reviewText: "The strongest proposal makes the important trade-offs visible. It should show why a layout fits the property and where actual performance may vary.",
    reviewImage: "/media/installations/roof-array-close.webp",
    reviewAlt: "Close view of a professionally installed residential rooftop solar array",
    reviewItems: ["Historical energy profile", "Usable roof planes", "Shading and seasonal conditions", "Equipment and layout assumptions", "Micro-generation requirements", "A practical installation path"],
    processText: "A simple path from the first electricity bill to a commissioned rooftop system.",
    process: [
      { title: "Understand the home", text: "Review usage, property details and future energy goals." },
      { title: "Shape the system", text: "Assess roof conditions and prepare a property-specific layout." },
      { title: "Coordinate the project", text: "Organize approvals, electrical planning and installation timing." },
      { title: "Install and activate", text: "Complete installation, commissioning and monitoring setup." },
    ],
  },
  commercial: {
    label: "Commercial solar built around operations",
    heroImage: "/media/installations/metal-roof-installation.webp",
    heroAlt: "Large commercial solar installation being completed on a metal roof",
    primaryCta: "Request a Commercial Assessment",
    proof: ["Operating-load review", "Roof and land options", "Capital-planning clarity"],
    introTitle: "Treat solar like the long-term business asset it is.",
    introText: "Commercial solar needs more than a panel count. We bring the facility, operating schedule, electrical demand, roof lifecycle and project priorities into one practical assessment.",
    introImage: "/media/installations/system-equipment.webp",
    introAlt: "Solar electrical equipment and controls installed at a working property",
    priorities: ["Annual and interval electricity use", "Daytime demand and operating schedules", "Roof structure, lifecycle and site constraints", "Electrical capacity and interconnection needs", "Construction access and disruption planning", "Portfolio reporting and sustainability objectives"],
    values: [
      { icon: "building", title: "Facility-first design", text: "We compare the available roof or land with the facility's load profile, operating realities and long-term property plans." },
      { icon: "chart", title: "A visible business case", text: "Key assumptions, production estimates and project variables are organized so decision-makers can assess the opportunity clearly." },
      { icon: "files", title: "Decision-ready planning", text: "Technical requirements, approval steps and implementation considerations are presented in a format that supports internal review." },
    ],
    reviewTitle: "A complete commercial review, not a generic estimate.",
    reviewText: "Every facility has a different relationship between roof area, electricity demand and project constraints. The review should be rigorous enough to support the next business decision.",
    reviewImage: "/media/installations/ground-mount.webp",
    reviewAlt: "Large ground-mounted solar array suitable for a commercial or rural site",
    reviewItems: ["Load and tariff profile", "Rooftop versus ground mount", "Roof and electrical capacity", "Construction sequencing", "Current program eligibility", "Monitoring and reporting needs"],
    processText: "A structured route from preliminary fit to an installation plan your team can evaluate.",
    process: [
      { title: "Qualify the opportunity", text: "Review usage, site data, priorities and project constraints." },
      { title: "Develop the concept", text: "Compare layouts, production assumptions and technical fit." },
      { title: "Build the project plan", text: "Coordinate approvals, capital timing and implementation details." },
      { title: "Deliver and monitor", text: "Install, commission and establish a clear monitoring view." },
    ],
  },
  agricultural: {
    label: "Agricultural solar for rural Alberta",
    heroImage: "/media/installations/ground-mount.webp",
    heroAlt: "Long ground-mounted solar array across an open rural property",
    primaryCta: "Request a Farm Solar Proposal",
    proof: ["Seasonal-load analysis", "Rooftop and ground mount", "Expansion-aware planning"],
    introTitle: "Solar planned around the way the farm works.",
    introText: "Farms rarely use electricity in a flat, predictable way. We look at seasonal loads, working buildings, available land, service capacity and future expansion before shaping the project.",
    introImage: "/media/installations/rural-rooftop.webp",
    introAlt: "Solar panels installed across the roof of a rural working property",
    priorities: ["Barns, shops and working buildings", "Irrigation, pumping and ventilation", "Grain handling and seasonal equipment", "Refrigeration, cold storage and greenhouses", "Available land and access for ground mounts", "Future buildings, equipment and electrical loads"],
    values: [
      { icon: "leaf", title: "Built around farm loads", text: "System planning starts with when and where energy is used across the operation—not a generic residential profile." },
      { icon: "ruler", title: "Flexible site options", text: "Rooftops and ground mounts are compared against usable area, service location, access, working traffic and expansion plans." },
      { icon: "wrench", title: "Practical rural planning", text: "Utility requirements, equipment schedules and installation logistics are addressed early so the concept fits the property." },
    ],
    reviewTitle: "The details that shape a durable farm solar project.",
    reviewText: "A rural site can offer excellent options, but the right design depends on load timing, service capacity and how the property needs to function for years to come.",
    reviewImage: "/media/installations/metal-roof-installation.webp",
    reviewAlt: "Solar panels being installed on a large metal roof",
    reviewItems: ["Seasonal electricity patterns", "Major equipment schedules", "Rural service capacity", "Roof and land suitability", "Utility and approval requirements", "Long-term farm expansion"],
    processText: "A farm-specific process that keeps operations and future growth in view.",
    process: [
      { title: "Map the operation", text: "Review bills, seasonal loads, equipment and expansion plans." },
      { title: "Compare site options", text: "Assess working roofs, available land and electrical access." },
      { title: "Plan around the farm", text: "Coordinate approvals, logistics and a practical installation window." },
      { title: "Install and support", text: "Commission the system and establish ongoing monitoring." },
    ],
  },
};

export function ServiceBusinessPage({ page, kind }: { page: PageContent; kind: ServiceKind }) {
  const config = configs[kind];
  const faqSchema = page.faq ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) } : null;
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.url }, { "@type": "ListItem", position: 2, name: page.title, item: `${site.url}/${page.slug}/` }] };
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: page.title, description: page.description, serviceType: config.label, areaServed: { "@type": "AdministrativeArea", name: "Alberta" }, provider: { "@id": `${site.url}/#organization` }, url: `${site.url}/${page.slug}/` };

  return <>
    <section className="service-page-hero">
      <Image src={config.heroImage} alt={config.heroAlt} fill priority sizes="100vw" />
      <div className="container service-page-hero-inner">
        <p className="service-label">{config.label}</p>
        <h1>{page.title}</h1>
        <p className="service-hero-intro">{page.intro}</p>
        <div className="service-hero-actions"><CTA href="/free-solar-assessment">{config.primaryCta}</CTA><CTA href="#service-process" secondary>See How It Works</CTA></div>
        <div className="service-proof-strip">{config.proof.map((item) => <div key={item}><Icon name="check"/><span>{item}</span></div>)}</div>
      </div>
    </section>

    <Breadcrumbs current={page.title}/>

    <section className="section service-intro-section">
      <div className="container service-intro-grid">
        <div className="service-intro-copy">
          <SectionHeading title={config.introTitle} text={config.introText}/>
          <ul className="service-dot-list">{config.priorities.map((item) => <li key={item}>{item}</li>)}</ul>
          <CTA href="/free-solar-assessment">Start Your Property Review</CTA>
        </div>
        <div className="service-intro-media"><Image src={config.introImage} alt={config.introAlt} fill sizes="(max-width: 900px) 100vw, 48vw"/></div>
      </div>
    </section>

    <section className="section service-value-section">
      <div className="container">
        <SectionHeading title="Clarity where the project decisions matter." text="A strong solar project connects the energy profile, the property and the path to installation." align="center"/>
        <div className="service-value-grid">{config.values.map((value, index) => <article className="service-value-card" key={value.title}><span className="service-card-number">0{index + 1}</span><div className="service-value-icon"><Icon name={value.icon}/></div><h2>{value.title}</h2><p>{value.text}</p></article>)}</div>
      </div>
    </section>

    <section className="section service-review-section">
      <div className="container service-review-grid">
        <div className="service-review-media"><Image src={config.reviewImage} alt={config.reviewAlt} fill sizes="(max-width: 900px) 100vw, 47vw"/></div>
        <div className="service-review-copy">
          <SectionHeading title={config.reviewTitle} text={config.reviewText}/>
          <ul className="service-review-list">{config.reviewItems.map((item) => <li key={item}><Icon name="check"/><span>{item}</span></li>)}</ul>
          <p className="service-review-note"><Icon name="shield"/>Production, savings, incentives and timelines vary by site. A property-specific assessment is required.</p>
        </div>
      </div>
    </section>

    <section className="section service-process-section" id="service-process">
      <div className="container">
        <SectionHeading title="A clear path from assessment to activation." text={config.processText}/>
        <div className="service-process-grid">{config.process.map((step, index) => <article className="service-process-step" key={step.title}><div><span>0{index + 1}</span><Icon name={index === 0 ? "search" : index === 1 ? "ruler" : index === 2 ? "files" : "power"}/></div><h2>{step.title}</h2><p>{step.text}</p></article>)}</div>
      </div>
    </section>

    {page.faq && <section className="section section-soft service-faq-section"><div className="container"><SectionHeading title={`Questions about ${kind === "agricultural" ? "farm" : kind} solar`} text="Straight answers help you decide whether the next step makes sense for your property." align="center"/><FAQList items={page.faq}/></div></section>}
    <FinalCTA farm={kind === "agricultural"}/>
    {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>} 
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}/>
  </>;
}
