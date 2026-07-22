"use client";

export function FAQList({ items, initiallyOpen = true }: { items: { question: string; answer: string }[]; initiallyOpen?: boolean }) {
  return <div className="faq-list">{items.map((item, i) => <details key={item.question} open={initiallyOpen && i === 0}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div>;
}
