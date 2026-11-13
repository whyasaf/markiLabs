"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Lusion'daki kart girişi: kart aşağıdan gelirken biraz küçük başlar, kaydırdıkça normal boyutuna büyür.
 * Doğrudan kaydırmaya bağlıdır (zamanlı animasyon değil). Hareketi azaltanlarda globals.css .scale-in ile kapalı.
 */
export function ScaleIn({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.55"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  return (
    <motion.div ref={ref} style={{ scale }} className="scale-in origin-bottom">
      {children}
    </motion.div>
  );
}
