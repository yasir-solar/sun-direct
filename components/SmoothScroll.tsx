"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scrollToHash(behavior: ScrollBehavior) {
  const hash = window.location.hash;
  if (!hash) return;
  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!target) return;
  target.scrollIntoView({ behavior, block: "start" });
}

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => scrollToHash(prefersReducedMotion() ? "auto" : "smooth"));
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const element = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href*="#"]') : null;
      if (!element || element.target === "_blank") return;

      const url = new URL(element.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return;

      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;

      event.preventDefault();
      window.history.pushState(null, "", url.hash);
      target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
