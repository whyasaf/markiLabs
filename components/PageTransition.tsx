"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1] as const;

type Origin = { x: number; y: number; max: number };

/**
 * Yolda olan geçiş: tıklama anında yazılır, delik açılmaya başlayınca silinir. Bileşenin dışında tutulur, çünkü
 * dil değişince (TR ↔ EN) en dış layout ([lang]) baştan kurulur ve bu bileşen de sıfırlanır; yeni kurulan
 * bileşen bekleyen geçişi buradan görüp mavi ekranla başlar ve deliği aynı noktadan açar.
 */
let pending: (Origin & { at: number }) | null = null;
const takePending = () => (pending && Date.now() - pending.at < 6000 ? pending : null);

/**
 * Sayfa geçişi: site içi bir linke tıklayınca tıklanan noktadan mavi bir daire büyüyüp ekranı kaplar,
 * ardından yeni sayfaya geçilir; mavinin içinde aynı noktadan bir delik açılır ve yeni sayfa oradan görünür.
 * Mavi ekran, sayfa geç yüklenirse yükleme ekranı işi de görür.
 *
 * Tıklama belge seviyesinde, React'ten önce yakalanır ve engellenir; Next'in Link'i engellenmiş tıklamada
 * kendi geçişini yapmaz (ama kendi onClick'i, örn. menünün kapanması, yine çalışır). Yeni sekme, değiştirici
 * tuşlar, dış adresler, indirmeler, aynı sayfadaki # linkleri ve data-no-transition taşıyan linkler olduğu gibi bırakılır.
 */
export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const reduce = useReducedMotion();

  // Sunucuda ve ilk yüklemede pending hep boş: başlangıç "idle", hydration uyuşur
  const [phase, setPhase] = useState<"idle" | "cover" | "reveal">(() => (takePending() ? "reveal" : "idle"));
  const [lastPath, setLastPath] = useState(pathname);
  const origin = useRef<Origin>(takePending() ?? { x: 0, y: 0, max: 0 });
  const cover = useMotionValue(0); // büyüyen mavi dairenin yarıçapı (px)
  const hole = useMotionValue(0); // mavinin içinde açılan deliğin yarıçapı (px)

  const clipPath = useTransform(cover, (r) => `circle(${r}px at ${origin.current.x}px ${origin.current.y}px)`);
  const mask = useTransform(
    hole,
    (r) => `radial-gradient(circle at ${origin.current.x}px ${origin.current.y}px, transparent ${r}px, #000 ${r + 1}px)`,
  );

  // Yeni sayfa geldi: kaplama sürüyorsa deliği açmaya geç (render sırasında, yeni sayfayla aynı karede)
  if (pathname !== lastPath) {
    setLastPath(pathname);
    if (phase === "cover") setPhase("reveal");
  }

  // Mavi ekransız geçişlerde (geri/ileri, data-no-transition) açılış yazıları beklemeden başlasın
  const phaseRef = useRef(phase);
  useLayoutEffect(() => {
    phaseRef.current = phase;
  });
  useLayoutEffect(() => {
    if (phaseRef.current === "idle") document.documentElement.style.setProperty("--page-delay", "0s");
  }, [pathname]);

  useEffect(() => {
    if (reduce) return;
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return;
      // data-no-transition: yakın sayfalar arası sekme gibi geçişler (örn. yasal metinler) geçişsiz kalır
      if (a.closest("[data-no-transition]")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return;

      e.preventDefault();
      // Klavyeyle (Enter) tıklamada fare konumu yok: linkin ortasından başla
      const box = a.getBoundingClientRect();
      const x = e.detail === 0 ? box.left + box.width / 2 : e.clientX;
      const y = e.detail === 0 ? box.top + box.height / 2 : e.clientY;
      origin.current = { x, y, max: Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)) + 2 };
      pending = { ...origin.current, at: Date.now() };

      hole.set(0);
      cover.set(0);
      setPhase("cover");
      animate(cover, origin.current.max, {
        duration: 0.55,
        ease: EASE,
        onComplete: () => router.push(url.pathname + url.search + url.hash),
      });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [reduce, router, cover, hole]);

  // Güvenlik: geçiş bir sebeple gerçekleşmezse mavi ekranda kalmasın
  useEffect(() => {
    if (phase !== "cover") return;
    const t = window.setTimeout(() => setPhase("reveal"), 5000);
    return () => window.clearTimeout(t);
  }, [phase]);

  useLayoutEffect(() => {
    if (phase !== "reveal") return;
    pending = null;
    // Sayfa açılış yazıları (.rise) delik açılırken başlasın
    document.documentElement.style.setProperty("--page-delay", "0.3s");
    const c = animate(hole, origin.current.max, { duration: 0.7, ease: EASE, onComplete: () => setPhase("idle") });
    return () => c.stop();
  }, [phase, hole]);

  if (phase === "idle") return null;
  return phase === "cover" ? (
    <motion.div key="cover" aria-hidden style={{ clipPath }} className="fixed inset-0 z-[80] bg-blue" />
  ) : (
    <motion.div
      key="reveal"
      aria-hidden
      style={{ maskImage: mask, WebkitMaskImage: mask }}
      className="pointer-events-none fixed inset-0 z-[80] bg-blue"
    />
  );
}
