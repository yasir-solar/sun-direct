"use client";

export function FAQList({ items }: { items: { question: string; answer: string }[] }) {
  return <div className="faq-list">{items.map((item, i) => <details key={item.question} open={i === 0}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div>;
}
