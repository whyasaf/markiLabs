"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

type Token = { text: string; accent?: boolean };

function Word({ token, i, n, progress }: { token: Token; i: number; n: number; progress: MotionValue<number> }) {
  const start = i / n;
  const opacity = useTransform(progress, [start, start + 1 / n], [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className={token.accent ? "text-blue" : undefined}>
      {token.text}{" "}
    </motion.span>
  );
}

/**
 * Kaydırdıkça kelime kelime koyulaşan büyük metin. "*kelime*" ile işaretlenenler mavi olur.
 * Hareketi azaltanlarda metin CSS ile (globals.css .manifesto) baştan tam görünür; sunucu/tarayıcı çıktısı aynı kalır.
 */
export default function Manifesto({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });

  const tokens: Token[] = text
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => (w.startsWith("*") ? { text: w.replace(/\*/g, ""), accent: true } : { text: w }));

  return (
    <p ref={ref} className="manifesto text-[clamp(36px,5.4vw,84px)] font-medium leading-[1.08] tracking-[-0.04em]">
      {tokens.map((t, i) => (
        <Word key={i} token={t} i={i} n={tokens.length} progress={scrollYProgress} />
      ))}
    </p>
  );
}
