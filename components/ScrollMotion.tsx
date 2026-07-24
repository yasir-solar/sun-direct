"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const revealTargets = [
  { selector: ".section-heading", style: "copy" },
  { selector: ".process-heading", style: "copy" },
  { selector: ".proposal-section .quote-side", direction: "left" },
  { selector: ".proposal-section .quote-form", direction: "right" },
  { selector: ".payment-heading", style: "copy" },
  { selector: ".payment-note", style: "scale" },
  { selector: ".agriculture-feature .feature-media", direction: "left" },
  { selector: ".agriculture-feature .feature-split > div:last-child", direction: "right" },
  { selector: ".video-intro", style: "copy" },
  { selector: ".gallery-action", style: "scale" },
  { selector: ".faq-list", style: "scale" },
  { selector: ".final-cta .container", style: "cta" },
  { selector: ".footer-bottom", style: "footer" },
];

const groupTargets = [
  { selector: ".trust-strip .container", style: "pop" },
  { selector: ".service-grid", style: "card" },
  { selector: ".payment-grid", style: "card" },
  { selector: ".installation-grid", style: "card" },
  { selector: ".video-grid", style: "card" },
  { selector: ".benefit-grid", style: "card" },
  { selector: ".footer-top", style: "footer" },
];

function directionFor(group: HTMLElement, index: number) {
  if (group.matches(".service-grid,.payment-grid")) return index % 3 === 0 ? "left" : index % 3 === 2 ? "right" : "up";
  if (group.matches(".installation-grid")) return index % 4 === 0 ? "left" : index % 4 === 3 ? "right" : "up";
  if (group.matches(".video-grid")) return index === 0 ? "left" : "right";
  if (group.matches(".benefit-grid")) return index % 3 === 0 ? "left" : index % 3 === 2 ? "right" : "up";
  return "up";
}

export function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const observed: HTMLElement[] = [];
    let observer: IntersectionObserver | undefined;
    let onScroll: (() => void) | undefined;
    const frame = window.requestAnimationFrame(() => {
      const root = document.documentElement;
      const revealItems = revealTargets.flatMap((target) => Array.from(document.querySelectorAll<HTMLElement>(target.selector)).map((element) => ({ element, target })));
      const groups = groupTargets.flatMap((target) => Array.from(document.querySelectorAll<HTMLElement>(target.selector)).map((element) => ({ element, target })));

      revealItems.forEach(({ element, target }, index) => {
        element.classList.add("motion-reveal");
        if (target.direction) element.dataset.motionDirection = target.direction;
        if (target.style) element.dataset.motionStyle = target.style;
        element.style.setProperty("--motion-order", String(index % 2));
        observed.push(element);
      });

      groups.forEach(({ element: group, target }) => {
        const children = Array.from(group.children).filter(
          (child): child is HTMLElement => child instanceof HTMLElement,
        );
        children.forEach((element, index) => {
          element.classList.add("motion-reveal");
          element.style.setProperty("--motion-order", String(index));
          element.dataset.motionDirection = directionFor(group, index);
          element.dataset.motionStyle = target.style;
          observed.push(element);
        });
      });

      root.classList.add("motion-ready");

      const motionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            (entry.target as HTMLElement).classList.add("motion-visible");
            observer?.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
      );
      observer = motionObserver;

      observed.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) element.classList.add("motion-visible");
        else motionObserver.observe(element);
      });

      const hero = document.querySelector<HTMLElement>(".solar-hero");
      let ticking = false;
      const updateHero = () => {
        if (!hero) return;
        const progress = Math.min(1, Math.max(0, window.scrollY / Math.max(hero.offsetHeight, 1)));
        hero.style.setProperty("--hero-progress", progress.toFixed(3));
        hero.style.setProperty("--hero-motion-y", `${progress * 38}px`);
        hero.style.setProperty("--hero-motion-scale", `${1.025 - progress * 0.025}`);
        ticking = false;
      };
      onScroll = () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(updateHero);
      };
      updateHero();
      window.addEventListener("scroll", onScroll, { passive: true });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
      if (onScroll) window.removeEventListener("scroll", onScroll);
      observed.forEach((element) => {
        element.classList.remove("motion-reveal", "motion-visible");
        element.style.removeProperty("--motion-order");
        delete element.dataset.motionDirection;
        delete element.dataset.motionStyle;
      });
      document.documentElement.classList.remove("motion-ready");
    };
  }, [pathname]);

  return null;
}
