"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { navigation, resourceLinks, serviceLinks } from "@/data/site";
import { Icon } from "@/components/Icons";

export function Logo() {
  return <Link href="/" className="logo" aria-label="Sun Direct Renewable home"><span className="logo-image" aria-hidden="true"><Image src="/media/brand/sun-direct-renewable-logo.png" alt="" width={1499} height={530} priority /></span></Link>;
}

function Chevron() {
  return <span className="dropdown-chevron" aria-hidden="true"/>;
}

const moreLinks = [
  { label: "About Sun Direct", href: "/about", company: true },
  { label: "Contact Us", href: "/contact", company: true },
  ...resourceLinks.map((item) => ({ label: item.label, href: item.href, company: false })),
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 24);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const outside = (event: MouseEvent) => {
      if (open && !menuRef.current?.contains(event.target as Node) && !buttonRef.current?.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", key);
    window.addEventListener("mousedown", outside);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", key);
      window.removeEventListener("mousedown", outside);
    };
  }, [open]);

  const closeMobileMenu = () => {
    setOpen(false);
    setServicesOpen(false);
    setMoreOpen(false);
  };

  return <>
    <a className="skip-link" href="#main">Skip to main content</a>
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-shell">
        <Logo/>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <div className="nav-dropdown services-dropdown">
            <button aria-haspopup="true">Our Services <Chevron/></button>
            <div className="dropdown-menu service-menu">
              <div className="menu-panel-heading"><span>Solar solutions</span><strong>Designed for the way you use power</strong></div>
              <div className="service-menu-grid">
                {serviceLinks.map(item => <Link key={item.href} href={item.href}>
                  <span className="menu-link-icon"><Icon name={item.icon}/></span>
                  <strong>{item.label}</strong>
                  <small>{item.description}</small>
                  <span className="menu-link-arrow" aria-hidden="true">→</span>
                </Link>)}
              </div>
            </div>
          </div>
          <Link href="/our-process">Our Process</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/testimonials">Testimonials</Link>
          <div className="nav-dropdown more-dropdown">
            <button aria-haspopup="true">More <Chevron/></button>
            <div className="dropdown-menu resource-menu more-menu">
              <div className="menu-panel-heading"><span>Company & resources</span><strong>More ways we can help</strong></div>
              {moreLinks.map(item => <Link className={item.company ? "menu-company-link" : ""} key={item.href} href={item.href}><span>{item.label}</span><span aria-hidden="true">→</span></Link>)}
            </div>
          </div>
        </nav>
        <Link className="button button-small header-cta" href="/free-solar-assessment">Get Your Proposal</Link>
        <button ref={buttonRef} className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation" : "Open navigation"}><span/><span/><span/></button>
      </div>
      <nav ref={menuRef} id="mobile-menu" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation">
        <div className="mobile-accordion">
          <button type="button" onClick={() => setServicesOpen(!servicesOpen)} aria-expanded={servicesOpen} aria-controls="mobile-services">Our Services <Chevron/></button>
          {servicesOpen && <div id="mobile-services" className="mobile-accordion-panel">{serviceLinks.map(item => <Link key={item.href} href={item.href} onClick={closeMobileMenu}>{item.shortLabel}</Link>)}</div>}
        </div>
        <div className="mobile-simple-links">{navigation.slice(1, 3).map(item => <Link key={item.href} href={item.href} onClick={closeMobileMenu}>{item.label}</Link>)}<Link href="/testimonials" onClick={closeMobileMenu}>Testimonials</Link><Link href="/contact" onClick={closeMobileMenu}>Contact</Link></div>
        <div className="mobile-accordion">
          <button type="button" onClick={() => setMoreOpen(!moreOpen)} aria-expanded={moreOpen} aria-controls="mobile-more">More <Chevron/></button>
          {moreOpen && <div id="mobile-more" className="mobile-accordion-panel">{moreLinks.filter(item => item.href !== "/contact").map(item => <Link key={item.href} href={item.href} onClick={closeMobileMenu}>{item.label}</Link>)}</div>}
        </div>
        <Link className="button" href="/free-solar-assessment" onClick={closeMobileMenu}>Get Your Solar Proposal</Link>
      </nav>
    </header>
  </>;
}
