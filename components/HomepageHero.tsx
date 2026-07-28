import { CTA } from "@/components/Primitives";
import { TypingWord } from "@/components/TypingWord";

export function HomepageHero() {
  return <section className="hero solar-hero">
    <video
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      controls={false}
      disablePictureInPicture
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/media/videos/homepage-hero-solar-v2.mp4" type="video/mp4" />
    </video>
    <div className="hero-atmosphere" aria-hidden="true"/>
    <div className="hero-rays" aria-hidden="true"/>
    <div className="hero-shine" aria-hidden="true"/>
    <div className="hero-inner container">
      <div className="hero-copy">
        <p className="kicker">Alberta solar planning</p>
        <h1>
          <span className="sr-only">Turn Alberta Sunshine Into Savings, Independence, and Value.</span>
          <span className="hero-heading-visual" aria-hidden="true">
            <span className="hero-title-prefix">Turn Alberta Sunshine Into</span>
            <TypingWord />
          </span>
        </h1>
        <p>Custom solar solutions for Alberta homes, businesses and farms, managed from electricity-usage analysis through installation and system activation.</p>
        <div className="hero-actions"><CTA href="/free-solar-assessment">Get Your Solar Proposal</CTA><CTA href="#our-process" secondary>See Our Process</CTA></div>
        <div className="hero-services"><span>Residential</span><span>Commercial</span><span>Agricultural</span></div>
      </div>
    </div>
    <a href="#services" className="scroll-cue"><span/>Explore</a>
  </section>;
}
