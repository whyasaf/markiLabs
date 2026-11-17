"use client";

import { useEffect, useRef } from "react";

// Videolar sayfa açılışı (geçiş + başlık animasyonları) bitince başlar ve aynı anda değil birer birer
// yüklenir: birkaç videonun birlikte çözülmeye başlaması açılış animasyonunu takıltıyordu.
// Kapak görseli videonun ilk karesi olduğu için bekleme fark edilmez.
const START_AFTER = 900; // ms, bileşen ekrana geldikten sonra
const GAP = 250; // ms, iki video başlangıcı arası
let nextSlot = 0;

/** Sessiz döngü videosu: yalnızca ekrandayken yüklenir ve oynar, ekrandan çıkınca durur. */
export default function LazyVideo({ src, poster, className }: { src: string; poster: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mountedAt = performance.now();
    let visible = false;
    let timer = 0;
    let started = false;

    const start = () => {
      started = true;
      if (!v.src) v.src = src;
      if (visible && !reduce) v.play().catch(() => {});
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) {
          if (started) {
            if (!reduce) v.play().catch(() => {});
          } else if (!timer) {
            const now = performance.now();
            const at = Math.max(now, mountedAt + START_AFTER, nextSlot);
            nextSlot = at + GAP;
            timer = window.setTimeout(start, at - now);
          }
        } else {
          v.pause();
        }
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(v);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, [src]);

  return <video ref={ref} poster={poster} className={className} muted loop playsInline preload="none" aria-hidden />;
}
