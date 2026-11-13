"use client";

import { useId, useRef, type ReactNode } from "react";
import { motion, useScroll, useSpring, type MotionValue } from "framer-motion";

type Box = [number, number];

function Ribbon({ d, view, length, className }: { d: string; view: Box; length: MotionValue<number>; className: string }) {
  const gid = useId().replace(/:/g, "");
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 -top-24 -bottom-24 -z-10 h-[calc(100%+12rem)] w-full overflow-visible ${className}`}
      viewBox={`0 0 ${view[0]} ${view[1]}`}
      preserveAspectRatio="none"
      fill="none"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2={view[0]} y2={view[1]} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1f45ff" />
          <stop offset="1" stopColor="#7d93ff" />
        </linearGradient>
      </defs>
      <motion.path
        d={d}
        stroke={`url(#${gid})`}
        strokeWidth={34}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        style={{ pathLength: length }}
      />
    </svg>
  );
}

/**
 * Lusion tarzı şerit: kalın, kıvrımlı mavi bir çizgi; sayfa aşağı kaydıkça çizilir, yukarı çıkınca geri silinir.
 * İçeriğin arkasında durur, tıklamaları engellemez.
 * - `d` / `view`: masaüstü yolu ve çizim alanı (bölümün oranına yakın seçilmeli, yoksa kıvrımlar basıklaşır)
 * - `dMobile` / `viewMobile`: telefon için ayrı yol; verilmezse telefonda şerit gösterilmez
 * - `end`: bölümün sonu ekranın neresine gelince çizim bitsin (0 = üst, 1 = alt). Uzun, opak bir panelle
 *   biten bölümlerde büyük tutulur ki çizim panel görünürken tamamlansın.
 */
export default function ScrollLine({
  d,
  view = [1440, 900],
  dMobile,
  viewMobile = [390, 1100],
  end = 0.35,
  children,
  className = "",
}: {
  d: string;
  view?: Box;
  dMobile?: string;
  viewMobile?: Box;
  end?: number;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.95", `end ${end}`] });
  // Kaydırmayı yumuşatarak takip etsin
  const length = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <div ref={ref} data-scroll-line className={`relative isolate overflow-x-clip ${className}`}>
      <Ribbon d={d} view={view} length={length} className="hidden md:block" />
      {dMobile && <Ribbon d={dMobile} view={viewMobile} length={length} className="md:hidden" />}
      {children}
    </div>
  );
}
