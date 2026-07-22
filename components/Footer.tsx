import Link from "next/link";
import { Logo } from "./Header";
import { site } from "@/data/site";

const process = ["Proposal","Savings Report","Approval","Documentation","Site Survey","CAD / Permit","Installation","Activation"];

export function Footer() {
  return <footer className="footer"><div className="footer-rays" aria-hidden="true"/><div className="footer-top container">
    <div className="footer-brand"><Logo/><p>Sun Direct Renewable designs solar solutions for Alberta homes, businesses and farms. We guide customers from electricity-usage analysis through design, approvals, installation and system activation.</p><span className="location-pill">Calgary, Alberta</span></div>
    <div><h2>Services</h2><Link href="/residential-solar">Residential Solar</Link><Link href="/commercial-solar">Commercial Solar</Link><Link href="/agricultural-solar">Agricultural Solar</Link><Link href="/projects">Ground-Mounted Solar</Link><Link href="/free-solar-assessment">Solar Proposal</Link><Link href="/our-process#savings-report">Savings Analysis</Link></div>
    <div><h2>Process</h2>{process.map((label,index)=><Link key={label} href={`/our-process#step-${index+1}`}>{label}</Link>)}</div>
    <div><h2>Resources</h2><Link href="/how-solar-works">How Solar Works</Link><Link href="/solar-incentives-financing">Incentives & Financing</Link><Link href="/faq">FAQ</Link><Link href="/blog">Blog</Link><Link href="/service-areas">Service Areas</Link></div>
    <div><h2>Company</h2><Link href="/about">About</Link><Link href="/projects">Projects</Link><Link href="/contact">Contact</Link><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms">Terms</Link><Link href="/accessibility">Accessibility</Link></div>
  </div><div className="footer-bottom container"><p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p><p>Solar production, savings, project costs, bill offset, timelines and approval requirements vary based on energy usage, property conditions, utility rules, system design, equipment, weather, permits and inspection schedules.</p></div></footer>;
}
