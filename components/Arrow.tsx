import type { CSSProperties } from "react";

/** Kalın, uçları yuvarlatılmış modern ok (yazı karakteri "→" yerine). */
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path d="M4.5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M13 6.5 18.5 12 13 17.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Yuvarlak içinde sabit ok. */
export function ArrowCircle({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <span aria-hidden className={`relative inline-flex shrink-0 items-center justify-center rounded-full ${className}`} style={style}>
      <Arrow className="h-[44%] w-[44%]" />
    </span>
  );
}

/**
 * Butonun içinde, okun arkasında duran daire. Üst öğede `group relative isolate overflow-hidden` olmalı:
 * üzerine gelince daire okun olduğu yerden büyüyüp bütün butonu kaplar.
 * `className` dairenin boyutunu, sağdan uzaklığını ve rengini verir (ok dairesiyle aynı olmalı).
 */
export function FillBubble({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute top-1/2 -z-10 -translate-y-1/2 rounded-full transition-transform duration-700 ease-[cubic-bezier(.65,0,.35,1)] group-hover:scale-[16] ${className}`}
    />
  );
}
