import type { Metadata } from "next";
import { BreadcrumbSchema, Breadcrumbs, FinalCTA, SectionHeading } from "@/components/Primitives";
import { ProjectGallery } from "@/components/ProjectGallery";
import { VideoShowcase } from "@/components/VideoShowcase";

export const metadata: Metadata = { title: "Solar Installation Gallery", description: "View authentic residential, rural, rooftop, ground-mounted and installation-progress solar photography supplied to Sun Direct Renewable.", alternates: { canonical: "/projects/" } };

export default function Projects(){return <><section className="page-hero projects-hero"><div className="container"><p className="kicker light">Installation gallery</p><h1>Real Solar Work, Seen Up Close</h1><p>Explore rooftops, rural arrays, ground-mounted systems, equipment and installation progress without unsupported project statistics.</p></div></section><BreadcrumbSchema current="Projects" path="/projects/"/><Breadcrumbs current="Projects"/><section className="section"><div className="wide-container"><SectionHeading kicker="Browse the gallery" title="Solar installations from multiple angles." text="Use the filters to focus on residential rooftops, agricultural settings, ground-mounts or installation details."/><ProjectGallery/></div></section><VideoShowcase/><FinalCTA/></>}
