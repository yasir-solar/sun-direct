"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/Icons";
import type { SolarFaq, SolarFaqCategory } from "@/data/solarFaqs";

export function FAQExplorer({ categories, faqs }: { categories: SolarFaqCategory[]; faqs: SolarFaq[] }) {
  const [activeCategory, setActiveCategory] = useState<SolarFaqCategory | "All">("All");
  const [query, setQuery] = useState("");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const visibleFaqs = useMemo(() => {
    const search = query.trim().toLowerCase();
    return faqs.filter((faq) => (activeCategory === "All" || faq.category === activeCategory) && (!search || `${faq.question} ${faq.answer}`.toLowerCase().includes(search)));
  }, [activeCategory, faqs, query]);

  return <div className="faq-explorer">
    <div className="faq-category-nav" role="tablist" aria-label="FAQ categories"><button className={activeCategory === "All" ? "is-active" : ""} onClick={() => { setActiveCategory("All"); setOpenQuestion(null); }} role="tab" aria-selected={activeCategory === "All"}>All questions</button>{categories.map((category) => <button className={activeCategory === category ? "is-active" : ""} key={category} onClick={() => { setActiveCategory(category); setOpenQuestion(null); }} role="tab" aria-selected={activeCategory === category}>{category}</button>)}</div>
    <label className="faq-search"><Icon name="search" /><span className="sr-only">Search FAQ questions</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search solar questions" type="search" /></label>
    <p className="faq-results" aria-live="polite">{visibleFaqs.length} {visibleFaqs.length === 1 ? "answer" : "answers"} shown</p>
    <div className="faq-explorer-list">{visibleFaqs.map((faq) => {
      const isOpen = openQuestion === faq.question;
      const id = `faq-${faq.question.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
      return <article className={isOpen ? "is-open" : ""} key={faq.question}><p>{faq.category}</p><h3><button aria-controls={id} aria-expanded={isOpen} onClick={() => setOpenQuestion(isOpen ? null : faq.question)}>{faq.question}<span aria-hidden="true">{isOpen ? "−" : "+"}</span></button></h3><div id={id} hidden={!isOpen}><p>{faq.answer}</p></div></article>;
    })}</div>
    {!visibleFaqs.length && <div className="faq-empty"><Icon name="search" /><p>No matching question yet. Try another search term or choose a category.</p></div>}
  </div>;
}
