"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { navigation, resourceLinks, serviceLinks } from "@/data/site";
import { Icon } from "@/components/Icons";

export function Logo() {
  return <Link href="/" className="logo" aria-label="Sun Direct Renewable home"><span className="logo-image" aria-hidden="true"><Image src="/favicon.svg" alt="" width={52} height={52} priority /></span><span className="logo-type"><strong>Sun Direct</strong><b>Renewable</b></span></Link>;
}

function Chevron() {
  return <span className="dropdown-chevron" aria-hidden="true"/>;
}

export function Header() {
  const [open, setOpen] = useState(false);
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

  const closeMobileMenu = () => setOpen(false);

  return <>
    <a className="skip-link" href="#main">Skip to main content</a>
    <div className="announcement"><span className="announcement-sun" aria-hidden="true"/>Solar proposals designed around Alberta properties and real electricity use.</div>
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
          <div className="nav-dropdown resources-dropdown">
            <button aria-haspopup="true">Resources <Chevron/></button>
            <div className="dropdown-menu resource-menu">
              <div className="menu-panel-heading"><span>Learn before you decide</span><strong>Solar planning resources</strong></div>
              {resourceLinks.map(item => <Link key={item.href} href={item.href}><span>{item.label}</span><span aria-hidden="true">→</span></Link>)}
            </div>
          </div>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="button button-small header-cta" href="/free-solar-assessment">Get Your Proposal</Link>
        <button ref={buttonRef} className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation" : "Open navigation"}><span/><span/><span/></button>
      </div>
      <nav ref={menuRef} id="mobile-menu" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation">
        <Link className="mobile-primary-link" href="/" onClick={closeMobileMenu}>Home</Link>
        <div className="mobile-menu-group"><p>Our Services</p>{serviceLinks.map(item => <Link key={item.href} href={item.href} onClick={closeMobileMenu}><span className="mobile-link-icon"><Icon name={item.icon}/></span><span><strong>{item.shortLabel}</strong><small>{item.description}</small></span></Link>)}</div>
        <div className="mobile-menu-main">{navigation.slice(1).map(item => <Link key={item.href} href={item.href} onClick={closeMobileMenu}>{item.label}</Link>)}</div>
        <div className="mobile-menu-group mobile-resources"><p>Resources</p>{resourceLinks.map(item => <Link key={item.href} href={item.href} onClick={closeMobileMenu}>{item.label}</Link>)}</div>
        <Link className="button" href="/free-solar-assessment" onClick={closeMobileMenu}>Get Your Solar Proposal</Link>
      </nav>
    </header>
  </>;
}
