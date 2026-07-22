"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { installationMedia } from "@/data/media";

export function ProjectGallery({ limit }: { limit?: number }) {
  const categories = ["All", "Residential", "Agricultural", "Ground mount", "Installation"];
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const shown = installationMedia.filter(item => filter === "All" || item.category === filter).slice(0, limit);
  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive(index => index === null ? 0 : (index + 1) % shown.length);
      if (event.key === "ArrowLeft") setActive(index => index === null ? 0 : (index - 1 + shown.length) % shown.length);
      if (event.key === "Tab") {
        const controls = Array.from(document.querySelectorAll<HTMLElement>(".lightbox button"));
        if (!controls.length) return;
        const current = controls.indexOf(document.activeElement as HTMLElement);
        const next = event.shiftKey ? (current <= 0 ? controls.length - 1 : current - 1) : (current + 1) % controls.length;
        event.preventDefault(); controls[next].focus();
      }
    };
    window.addEventListener("keydown", key);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", key); lastFocus.current?.focus(); };
  }, [active, shown.length]);
  return <>
    {!limit && <div className="filters" role="group" aria-label="Filter installation gallery">{categories.map(category=><button key={category} className={filter===category?"active":""} onClick={()=>{setFilter(category);setActive(null)}}>{category}</button>)}</div>}
    <div className="installation-grid">{shown.map((item,index)=><button className={`installation-tile tile-${(index%6)+1}`} key={item.id} onClick={(event)=>{lastFocus.current=event.currentTarget;setActive(index)}} aria-label={`Open image: ${item.alt}`}><Image src={item.thumb} alt={item.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"/><span>{item.category}</span></button>)}</div>
    {active!==null&&shown[active]&&<div className="lightbox" role="dialog" aria-modal="true" aria-label="Installation image viewer" onMouseDown={event=>{if(event.target===event.currentTarget)setActive(null)}}><button ref={closeRef} className="lightbox-close" onClick={()=>setActive(null)} aria-label="Close image viewer">×</button><button className="lightbox-prev" onClick={()=>setActive((active-1+shown.length)%shown.length)} aria-label="Previous image">‹</button><figure><Image src={shown[active].src} alt={shown[active].alt} width={1800} height={1400} sizes="95vw"/><figcaption>{shown[active].alt}</figcaption></figure><button className="lightbox-next" onClick={()=>setActive((active+1)%shown.length)} aria-label="Next image">›</button></div>}
  </>;
}
