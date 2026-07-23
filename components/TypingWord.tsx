"use client";

import { useEffect, useState } from "react";

const words = ["Savings", "Independence", "Value"] as const;
type Phase = "typing" | "holding" | "deleting" | "pausing";

export function TypingWord() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      const shouldReduceMotion = mediaQuery.matches;
      setReducedMotion(shouldReduceMotion);
      setWordIndex(0);
      setPhase("typing");
      setText(shouldReduceMotion ? words[0] : "");
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const word = words[wordIndex];
    const timeout = window.setTimeout(() => {
      if (phase === "typing") {
        const nextText = word.slice(0, text.length + 1);
        setText(nextText);
        if (nextText === word) setPhase("holding");
        return;
      }

      if (phase === "holding") {
        setPhase("deleting");
        return;
      }

      if (phase === "deleting") {
        const nextText = text.slice(0, -1);
        setText(nextText);
        if (!nextText) setPhase("pausing");
        return;
      }

      setWordIndex((index) => (index + 1) % words.length);
      setPhase("typing");
    }, phase === "typing" ? 90 : phase === "holding" ? 1800 : phase === "deleting" ? 55 : 300);

    return () => window.clearTimeout(timeout);
  }, [phase, reducedMotion, text, wordIndex]);

  return <span className={`hero-typing-word${reducedMotion ? " is-static" : ""}`} aria-hidden="true"><span>{text}</span>{!reducedMotion && <i />}</span>;
}
