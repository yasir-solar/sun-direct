"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "./Icons";
import { processSteps } from "@/data/process";

export function SolarProcess() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: .12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <section ref={ref} id="our-process" className={`solar-process ${visible ? "is-visible" : ""}`} aria-labelledby="process-title">
    <div className="process-rays" aria-hidden="true"/>
    <div className="wide-container">
      <header className="process-heading"><p className="kicker">From proposal to power</p><h2 id="process-title">Our <span>Solar</span> Process</h2><p>Simple, transparent steps from proposal to activation.</p></header>
      <ol className="process-grid">{processSteps.map(([title, description, icon], index) => <li className="process-step" style={{"--step-delay":`${index * 80}ms`} as React.CSSProperties} key={title}>
        <div className="process-marker"><span>{index + 1}</span></div>
        <article><div className="process-icon"><Icon name={icon}/></div><p>Step {index + 1}</p><h3>{title}</h3><p>{description}</p></article>
      </li>)}</ol>
      <p className="process-disclaimer">Project steps and timelines may vary based on property conditions, financing, utility requirements, permits and inspection schedules.</p>
      <div className="process-finale"><Icon name="sun"/><p><strong>Clean Energy.</strong> <em>Real Savings.</em> <span>A Brighter Tomorrow.</span></p><Link className="button" href="/free-solar-assessment">Start Your Solar Journey <Icon name="arrow"/></Link></div>
    </div>
  </section>;
}
