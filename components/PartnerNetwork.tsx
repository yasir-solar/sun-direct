import Image from "next/image";
import { Icon } from "@/components/Icons";

const partners = [
  {
    name: "Solar Club",
    href: "https://solarclub.ca",
    logo: "/media/partners/solar-club.png",
    width: 719,
    height: 245,
    description: "A solar-focused electricity program serving Alberta micro-generators.",
  },
  {
    name: "Solar Alberta",
    href: "https://solaralberta.ca",
    logo: "/media/partners/solar-alberta.png",
    width: 1414,
    height: 1158,
    description: "A provincial resource for solar education, industry, and consumers.",
  },
] as const;

export function PartnerNetwork() {
  return <section className="partner-section" aria-labelledby="partners-title">
    <div className="container partner-layout">
      <div className="partner-intro">
        <span className="partner-icon"><Icon name="shield" /></span>
        <div>
          <h2 id="partners-title">Proud Alberta Solar Partners</h2>
          <p>Connected with organizations helping Albertans navigate solar energy, electricity programs, and informed project decisions.</p>
        </div>
      </div>
      <div className="partner-list">
        {partners.map((partner) => <a className="partner-card" key={partner.name} href={partner.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${partner.name} (opens in a new tab)`}>
          <span className={`partner-logo partner-logo-${partner.name === "Solar Club" ? "club" : "alberta"}`}>
            <Image src={partner.logo} alt={`${partner.name} logo`} width={partner.width} height={partner.height} sizes="(max-width: 760px) 150px, 180px" />
          </span>
          <span className="partner-copy"><strong>{partner.name}</strong><small>{partner.description}</small></span>
          <Icon name="arrow" className="partner-arrow" />
        </a>)}
      </div>
    </div>
  </section>;
}
