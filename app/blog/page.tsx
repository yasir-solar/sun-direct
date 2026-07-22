import type { Metadata } from "next";
import { blogCategories } from "@/data/content";
import { Breadcrumbs, FinalCTA, SectionHeading } from "@/components/Primitives";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Solar Learning Centre",
  description: "Practical guidance about residential, commercial and agricultural solar in Calgary and Alberta.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return <>
    <section className="page-hero">
      <div className="container">
        <p className="kicker light">Resources</p>
        <h1>Understand Solar Before You Buy It</h1>
        <p>Practical Alberta solar guidance will be published here after each guide has been carefully reviewed.</p>
      </div>
    </section>
    <Breadcrumbs current="Solar Learning Centre"/>
    <section className="section blog-categories-section">
      <div className="container">
        <SectionHeading title="Learning centre categories" text="The article library is being prepared. These categories will stay in place while the first guides are reviewed for publication."/>
        <div className="blog-category-grid">
          {blogCategories.map((category, index) => <article className="blog-category-card" key={category.title}>
            <span className="blog-category-icon"><Icon name={category.title.includes("Agricultural") ? "leaf" : category.title.includes("Commercial") ? "building" : "sun"}/></span>
            <span className="blog-category-number">0{index + 1}</span>
            <h2>{category.title}</h2>
            <p>{category.description}</p>
            <span className="category-status">Guides coming later</span>
          </article>)}
        </div>
      </div>
    </section>
    <FinalCTA/>
  </>;
}
