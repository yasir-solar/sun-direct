import Image from "next/image";
import { CTA } from "@/components/Primitives";
import { TypingWord } from "@/components/TypingWord";

const heroImage = "/media/sun-direct-luxury-hero.webp";

export function HomepageHero() {
  return <section className="hero solar-hero">
    <Image className="hero-poster" src={heroImage} alt="Luxury Alberta home with rooftop solar panels illuminated by golden evening sunlight" fill priority sizes="100vw"/>
    <div className="hero-atmosphere" aria-hidden="true"/>
    <div className="hero-rays" aria-hidden="true"/>
    <div className="hero-shine" aria-hidden="true"/>
    <div className="hero-inner container">
      <div className="hero-copy">
        <p className="kicker">Calgary · Alberta</p>
        <h1>
          <span className="sr-only">Turn Alberta Sunshine Into Savings, Independence, and Value.</span>
          <span className="hero-heading-visual" aria-hidden="true">
            <span className="hero-title-prefix">Turn Alberta Sunshine Into</span>
            <TypingWord />
          </span>
        </h1>
        <p>Custom solar solutions for Calgary homes, businesses and farms, managed from electricity-usage analysis through installation and system activation.</p>
        <div className="hero-actions"><CTA href="/free-solar-assessment">Get Your Solar Proposal</CTA><CTA href="#our-process" secondary>See Our Process</CTA></div>
        <div className="hero-services"><span>Residential</span><span>Commercial</span><span>Agricultural</span></div>
      </div>
    </div>
    <a href="#services" className="scroll-cue"><span/>Explore</a>
  </section>;
}
