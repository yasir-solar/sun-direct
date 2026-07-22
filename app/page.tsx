import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA, FinalCTA, SectionHeading } from "@/components/Primitives";
import { Icon } from "@/components/Icons";
import { trustPoints, site } from "@/data/site";
import { commonFaqs } from "@/data/content";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQList } from "@/components/FAQ";
import { SolarProcess } from "@/components/SolarProcess";
import { ProjectGallery } from "@/components/ProjectGallery";
import { VideoShowcase } from "@/components/VideoShowcase";
import { HomepageHero } from "@/components/HomepageHero";
import { SolarPaymentOptions } from "@/components/SolarPaymentOptions";
import { PartnerNetwork } from "@/components/PartnerNetwork";

export const metadata: Metadata = { title: { absolute: "Solar Installation Calgary | Sun Direct Renewable" }, description: site.description, alternates: { canonical: "/" } };

const services = [
  {title:"Residential Solar",text:"A rooftop system shaped around your household usage, roof and long-term energy goals.",href:"/residential-solar",image:"/media/installations/multi-roof-home.webp",label:"Explore Residential"},
  {title:"Commercial Solar",text:"A practical proposal for large rooftops, daytime electricity demand and operational planning.",href:"/commercial-solar",image:"/media/installations/metal-roof-installation.webp",label:"Explore Commercial"},
  {title:"Agricultural Solar",text:"Rooftop and ground-mount options designed around rural loads, working buildings and expansion.",href:"/agricultural-solar",image:"/media/installations/ground-mount.webp",label:"Explore Agricultural"},
] as const;
const benefits = [
  { title: "Usage-led system planning", text: "Your electricity history shapes system size, priorities and the first design direction." },
  { title: "Clear savings assumptions", text: "Production, rates and usage assumptions are presented clearly so the proposal is easier to evaluate." },
  { title: "Rooftop and ground-mount options", text: "Available roof planes and land are compared against access, shading and long-term property plans." },
  { title: "Guidance through approvals", text: "Permitting, utility requirements and project documents stay connected through each approval stage." },
  { title: "Property-first installation planning", text: "Equipment, access and construction details are organized around how the property actually operates." },
  { title: "Support through activation", text: "Commissioning, monitoring and handover give you a clear path from installation to everyday use." },
];

export default function Home() { return <>
  <HomepageHero/>
  <div className="trust-strip"><div className="container">{trustPoints.map((point,index)=><div className="trust-item" key={point}><Icon name={["chart","sun","building","power"][index]}/>{point}</div>)}</div></div>
  <section id="services" className="section"><div className="container"><SectionHeading kicker="Solar for the way you use power" title="One energy source. Three property-specific strategies." text="Sun Direct Renewable organizes every proposal around electricity demand, available space and the path from approvals to activation."/><div className="service-grid premium-services">{services.map((service,index)=><article key={service.title} className={`service-card ${index===2?"featured":""}`}><Image src={service.image} alt={index===0?"Residential home with solar panels across several roof sections":index===1?"Solar panel installation in progress on a large metal roof":"Ground-mounted solar array extending across a rural field"} fill sizes="(max-width:760px) 100vw, 33vw"/><div className="service-index">0{index+1}</div><div className="service-card-content"><p className="kicker light">{index===0?"For homeowners":index===1?"For organizations":"For farms & acreages"}</p><h2>{service.title}</h2><p>{service.text}</p><Link href={service.href} className="text-link">{service.label} <Icon name="arrow"/></Link></div></article>)}</div></div></section>
  <SolarProcess/>
  <section className="section proposal-section"><div className="container quote-panel"><aside className="quote-side"><p className="kicker light">Start with the facts</p><h2>Your proposal begins with real electricity use.</h2><p>Share the property and usage information that helps shape a responsible system conversation.</p><ul className="check-list">{["No instant savings claims","No one-size-fits-all system","Clear proposal inputs"].map(x=><li key={x}><Icon name="check"/>{x}</li>)}</ul></aside><QuoteForm compact/></div></section>
  <SolarPaymentOptions/>
  <PartnerNetwork/>
  <section className="section agriculture-feature"><div className="container feature-split dark-copy"><div className="feature-media"><Image src="/media/installations/ground-mount.webp" alt="Long ground-mounted solar array on open rural land" fill sizes="(max-width:760px) 100vw, 50vw"/></div><div><SectionHeading kicker="Agricultural solar" title="Solar planned around the way your operation works." text="Farm buildings, grain operations, workshops, irrigation, cold storage, greenhouses and rural ground-mounts each require a different energy and site review."/><ul className="check-list">{["Historical consumption","Seasonal load profile","Roof or land area","Service capacity","Equipment schedules","Expansion plans"].map(x=><li key={x}><Icon name="check"/>{x}</li>)}</ul><CTA href="/agricultural-solar">Request a Farm Proposal</CTA></div></div></section>
  <section className="section gallery-home"><div className="wide-container"><SectionHeading kicker="Real installation work" title="Panels, rooflines and systems from the field." text="Explore authentic supplied installation photography across rooftops, rural properties, ground-mounted arrays and active job sites."/><ProjectGallery limit={8}/><div className="gallery-action"><CTA href="/projects">View All Installations</CTA></div></div></section>
  <VideoShowcase/>
  <section id="why-sun-direct" className="section why-section"><div className="container"><SectionHeading kicker="Why Sun Direct Renewable" title="Clear thinking at every stage of the project." text="Six practical principles keep the proposal readable, the decisions connected and the project moving with purpose." align="center"/><div className="benefit-grid">{benefits.map((item,index)=><article className="benefit-card" key={item.title}><span>0{index+1}</span><div className="benefit-icon"><Icon name={["chart","files","sun","shield","wrench","power"][index]}/></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
  <section className="section faq-section"><div className="container"><SectionHeading kicker="Common questions" title="Useful answers before you request a proposal." align="center"/><FAQList items={commonFaqs}/></div></section>
  <FinalCTA/>
  </>; }
