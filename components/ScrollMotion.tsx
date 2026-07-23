"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const revealSelectors = [
  ".section-heading",
  ".process-heading",
  ".quote-panel",
  ".feature-media",
  ".feature-split > div:last-child",
  ".video-intro",
  ".faq-list",
  ".final-cta .container",
  ".page-hero .container",
  ".content-card",
].join(",");

const groupSelectors = [
  ".trust-strip .container",
  ".service-grid",
  ".process-grid",
  ".installation-grid",
  ".video-grid",
  ".benefit-grid",
  ".blog-grid",
].join(",");

export function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const observed: HTMLElement[] = [];
    let observer: IntersectionObserver | undefined;
    let onScroll: (() => void) | undefined;
    const frame = window.requestAnimationFrame(() => {
      const root = document.documentElement;
      const revealItems = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors));
      const groups = Array.from(document.querySelectorAll<HTMLElement>(groupSelectors));

      revealItems.forEach((element, index) => {
        element.classList.add("motion-reveal");
        if (element.matches(".feature-media")) element.dataset.motionDirection = "left";
        if (element.matches(".feature-split > div:last-child")) element.dataset.motionDirection = "right";
        element.style.setProperty("--motion-order", String(index % 2));
        observed.push(element);
      });

      groups.forEach((group) => {
        const children = Array.from(group.children).filter(
          (child): child is HTMLElement => child instanceof HTMLElement,
        );
        children.forEach((element, index) => {
          element.classList.add("motion-reveal");
          element.style.setProperty("--motion-order", String(index));
          if (group.matches(".service-grid") && index % 3 === 0) element.dataset.motionDirection = "left";
          if (group.matches(".service-grid") && index % 3 === 2) element.dataset.motionDirection = "right";
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
        hero.style.setProperty("--hero-motion-scale", `${1.04 - progress * 0.04}`);
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
      });
      document.documentElement.classList.remove("motion-ready");
    };
  }, [pathname]);

  return null;
}
