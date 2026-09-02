"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Phase = "typing" | "deleting";

export function HeroRotatingText({
  words,
  className,
  typeMs = 55,
  deleteMs = 35,
  holdMs = 2200,
}: {
  words: readonly string[];
  className?: string;
  typeMs?: number;
  deleteMs?: number;
  holdMs?: number;
}) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [chars, setChars] = useState(0);
  const word = words[index] ?? words[0] ?? "";
  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b), "");

  useEffect(() => {
    if (words.length === 0) return;

    if (reduced) {
      setChars(word.length);
      return;
    }

    if (phase === "typing") {
      if (chars >= word.length) {
        if (words.length <= 1) return;
        const id = window.setTimeout(() => setPhase("deleting"), holdMs);
        return () => window.clearTimeout(id);
      }
      const id = window.setTimeout(() => setChars((c) => c + 1), typeMs);
      return () => window.clearTimeout(id);
    }

    if (chars <= 0) {
      const id = window.setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }, typeMs);
      return () => window.clearTimeout(id);
    }

    const id = window.setTimeout(() => setChars((c) => c - 1), deleteMs);
    return () => window.clearTimeout(id);
  }, [chars, deleteMs, holdMs, phase, reduced, typeMs, word.length, words.length]);

  return (
    <span
      className={`relative inline-block ${className ?? ""}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="invisible whitespace-pre" aria-hidden>
        {longest}
      </span>
      <span className="absolute inset-x-0 top-0 whitespace-pre">
        {word.slice(0, chars)}
        <span
          className="ml-0.5 inline-block h-[0.85em] w-[2px] translate-y-[0.1em] bg-brand align-baseline animate-pulse"
          aria-hidden
        />
      </span>
    </span>
  );
}
