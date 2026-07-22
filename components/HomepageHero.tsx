"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { CTA } from "@/components/Primitives";

const heroImage = "/media/sun-direct-luxury-hero.webp";

export function HomepageHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 768) return;
    const hero = heroRef.current;
    if (!hero) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const progress = Math.min(1, Math.max(0, window.scrollY / Math.max(hero.offsetHeight, 1)));
      hero.style.setProperty("--hero-progress", progress.toFixed(3));
      hero.style.setProperty("--ray-x", `${(-8 + progress * 22).toFixed(2)}px`);
      hero.style.setProperty("--ray-y", `${(progress * 18).toFixed(2)}px`);
      hero.style.setProperty("--video-shift", `${(progress * 20).toFixed(2)}px`);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <section ref={heroRef} className="hero solar-hero">
    <Image className="hero-poster" src={heroImage} alt="Luxury Alberta home with rooftop solar panels illuminated by golden evening sunlight" fill priority sizes="100vw"/>
    <div className="hero-atmosphere" aria-hidden="true"/>
    <div className="hero-rays" aria-hidden="true"/>
    <div className="hero-shine" aria-hidden="true"/>
    <div className="hero-inner container">
      <div className="hero-copy">
        <p className="kicker">Calgary · Alberta</p>
        <h1>Turn Alberta Sunshine Into <span>Long-Term Savings</span></h1>
        <p>Custom solar solutions for Calgary homes, businesses and farms, managed from electricity-usage analysis through installation and system activation.</p>
        <div className="hero-actions"><CTA href="/free-solar-assessment">Get Your Solar Proposal</CTA><CTA href="#our-process" secondary>See Our Process</CTA></div>
        <div className="hero-services"><span>Residential</span><span>Commercial</span><span>Agricultural</span></div>
      </div>
    </div>
    <a href="#services" className="scroll-cue"><span/>Explore</a>
  </section>;
}
