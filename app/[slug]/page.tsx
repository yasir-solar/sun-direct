import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { pages } from "@/data/content";
import { Breadcrumbs, Disclaimer, FinalCTA, SectionHeading } from "@/components/Primitives";
import { FAQList } from "@/components/FAQ";
import { site } from "@/data/site";
import { ServiceBusinessPage } from "@/components/ServiceBusinessPage";
import { ServiceAreasPage } from "@/components/ServiceAreasPage";
import { SolarIncentivesPage } from "@/components/SolarIncentivesPage";
import { SolarFaqPage } from "@/components/SolarFaqPage";

const pageMedia: Record<string,{src:string;alt:string}> = {
  "residential-solar": { src: "/media/installations/multi-roof-home.webp", alt: "Detached home with solar panels installed across multiple roof levels" },
  "commercial-solar": { src: "/media/installations/metal-roof-installation.webp", alt: "Large solar installation in progress on a metal roof" },
  "agricultural-solar": { src: "/media/installations/ground-mount.webp", alt: "Long ground-mounted solar array across open rural land" },
  "about": { src: "/media/installations/installer-at-work.webp", alt: "Solar installer working beside panels on a residential roof" },
  "how-solar-works": { src: "/media/installations/system-equipment.webp", alt: "Exterior solar electrical equipment installed below rooftop panels" },
  "solar-panels-calgary": { src: "/media/installations/calgary-aerial.webp", alt: "Aerial view of a residential rooftop solar array" },
};

export function generateStaticParams(){ return pages.map(page=>({slug:page.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const page=pages.find(x=>x.slug===slug);if(!page)return{};const title=slug==="service-areas"?"Solar Installation Across Alberta | Sun Direct Renewable":slug==="solar-incentives-financing"?"Solar Incentives and Financing in Alberta | Sun Direct Renewable":slug==="faq"?"Solar FAQs Alberta | Sun Direct Renewable":page.title;const description=slug==="service-areas"?"Explore residential, commercial and agricultural solar service areas across Calgary, Edmonton, Red Deer, Lethbridge, Medicine Hat and communities throughout Alberta.":slug==="solar-incentives-financing"?"Explore current Alberta solar incentives, Calgary CEIP financing, micro-generation credits and business tax options for homes, businesses and farms.":slug==="faq"?"Get clear answers about solar costs, savings, Alberta winters, micro-generation, permits, installation, financing, commercial systems, and farm solar.":page.description;const isFullTitle=slug==="service-areas"||slug==="solar-incentives-financing"||slug==="faq";return{title:isFullTitle?{absolute:title}:title,description,alternates:{canonical:`/${page.slug}`},openGraph:{title,description,url:`/${page.slug}`}}}

export default async function ContentPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const page=pages.find(x=>x.slug===slug); if(!page)notFound(); const media=pageMedia[slug];
  if(slug === "service-areas") return <ServiceAreasPage/>;
  if(slug === "solar-incentives-financing") return <SolarIncentivesPage/>;
  if(slug === "faq") return <SolarFaqPage/>;
  const serviceKind = slug === "residential-solar" ? "residential" : slug === "commercial-solar" ? "commercial" : slug === "agricultural-solar" ? "agricultural" : null;
  if(serviceKind) return <ServiceBusinessPage page={page} kind={serviceKind}/>;
  const faqSchema=page.faq?{"@context":"https://schema.org","@type":"FAQPage",mainEntity:page.faq.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}}))}:null;
  return <><section className="page-hero"><div className="container"><p className="kicker light">Sun Direct Renewable - Alberta</p><h1>{page.title}</h1><p>{page.intro}</p></div></section><Breadcrumbs current={page.title}/>{media&&<div className="page-feature-image container"><Image src={media.src} alt={media.alt} fill sizes="(max-width:760px) 100vw, 1280px"/></div>}<section className="section"><div className="container"><div className="content-sections">{page.sections.map(section=><article className="content-card" key={section.title}><h2>{section.title}</h2><p>{section.text}</p>{section.bullets&&<ul>{section.bullets.map(item=><li key={item}>{item}</li>)}</ul>}{section.note&&<Disclaimer>{section.note}</Disclaimer>}</article>)}</div></div></section>{page.faq&&<section className="section section-soft"><div className="container"><SectionHeading kicker="Frequently asked questions" title={`What to know about ${page.slug.includes("agricultural")?"farm solar":"solar"}`} align="center"/><FAQList items={page.faq}/></div></section>}<FinalCTA farm={page.slug==="agricultural-solar"}/>{faqSchema&&<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:site.url},{"@type":"ListItem",position:2,name:page.title,item:`${site.url}/${page.slug}/`}]})}}/></>;
}
