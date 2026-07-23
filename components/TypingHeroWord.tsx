"use client";

import { useEffect, useState } from "react";

const words = ["Savings", "Independence", "Value"] as const;

export function TypingHeroWord() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setReducedMotion(query.matches);
      setWordIndex(0);
      setPhase("typing");
      setText(query.matches ? words[0] : "");
    };
    updatePreference();
    query.addEventListener("change", updatePreference);
    return () => query.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setText(words[0]);
      return;
    }

    const word = words[wordIndex];
    const timeout = window.setTimeout(() => {
      if (phase === "typing") {
        if (text.length < word.length) setText(word.slice(0, text.length + 1));
        else setPhase("deleting");
        return;
      }

      if (text.length > 0) setText(text.slice(0, -1));
      else {
        setWordIndex((index) => (index + 1) % words.length);
        setPhase("typing");
      }
    }, phase === "typing" ? (text.length === word.length ? 2000 : 95) : (text.length ? 60 : 320));

    return () => window.clearTimeout(timeout);
  }, [phase, reducedMotion, text, wordIndex]);

  return <span className={`hero-typing-word${reducedMotion ? " is-static" : ""}`} aria-hidden="true"><span>{text}</span>{!reducedMotion && <i />}</span>;
}
