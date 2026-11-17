"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";
import HeroTrail from "@/components/HeroTrail";
import Reel, { type ReelText } from "@/components/Reel";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Açılışta kelime kelime, maskenin altından yükselen satır */
function Words({ text, delay, reduce }: { text: string; delay: number; reduce: boolean | null }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 1, delay: delay + i * 0.08, ease: EASE }}
          >
            {w}
            {" "}
          </motion.span>
        </span>
      ))}
    </>
  );
}

/**
 * Hero: başlık iki satır, ortada video. Kaydırınca üst satır sola, alt satır sağa kayıp ayrılır;
 * aralarından video oranını koruyarak büyüyüp ekranı kaplar. Bölüm ekrana yapışık kalır.
 */
export type HeroText = { top: string; bottom: string; corner: string; scroll: string };

export default function HeroSplit({
  src,
  poster,
  t,
  reel,
}: {
  src: string;
  poster: string;
  t: HeroText;
  reel: ReelText;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Ekran ölçüleri ve videonun başlangıç genişliği (sunucuda varsayılanlar, tarayıcıda ölçülür)
  const vw = useMotionValue(1440);
  const vh = useMotionValue(900);
  const w0 = useMotionValue(560);
  useEffect(() => {
    const fit = () => {
      const W = window.innerWidth, H = window.innerHeight;
      vw.set(W);
      vh.set(H);
      // Masaüstünde ekranın ~%38'i, telefonda kenar boşluklarıyla tam genişlik; yüksekliği ekranın %36'sını geçmez
      const byWidth = W < 768 ? W - 32 : W * 0.38;
      w0.set(Math.min(byWidth, ((H * 0.36) * 16) / 9));
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [vw, vh, w0]);

  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // Video: 16:9 başlar, ekranı kaplayarak biter (genişlik/yükseklik ayrı ayrı açılır)
  const g = useTransform(p, [0, 0.85], [0, 1], { clamp: true });
  const width = useTransform([g, w0, vw] as const, ([k, a, W]: number[]) => a + (W - a) * k);
  const height = useTransform([g, w0, vh] as const, ([k, a, H]: number[]) => (a * 9) / 16 + (H - (a * 9) / 16) * k);
  const radius = useTransform(g, [0, 1], [24, 0]);

  // Yazılar: üst satır sola, alt satır sağa kayıp çıkar; köşe yazıları erken söner
  // Satırlar kendi genişliklerinin %115'i kadar kayar: ekran ya da yazı boyutu ne olursa olsun tamamen çıkarlar
  // (telefonda satır ekrandan geniş olduğu için ekran genişliğine göre kaydırmak yetmiyordu)
  const leftX = useTransform(p, (v) => `${-115 * Math.min(1, v / 0.55)}%`);
  const rightX = useTransform(p, (v) => `${115 * Math.min(1, v / 0.55)}%`);
  // Köşe yazıları kaydırmanın ilk 80 pikselinde söner (video büyüyüp üstlerine gelmeden).
  // Doğrudan sayfa kaydırmasına bağlı ve JS'te hesaplanır: bölüm ilerlemesine bağlı opaklık, framer bunu
  // tarayıcının kaydırma animasyonuna devrettiğinde ters işliyordu.
  const { scrollY } = useScroll();
  const fade = useTransform(scrollY, (v) => Math.max(0, 1 - v / 80));

  const title = "text-[clamp(44px,7.4vw,124px)] font-medium leading-[0.95] tracking-[-0.05em]";

  return (
    // -mt-[76px]: üst menünün altına kayar (menü şeffaf, hero'nun üstünde yüzer); böylece hero tam ilk ekranı doldurur
    <div ref={ref} className="relative -mt-[76px] h-[260vh]">
      {/* z-10: sonraki bölümün yukarı taşan şeridi hero'nun (videonun) üstüne binmesin */}
      <HeroTrail className="sticky top-0 z-10 h-screen overflow-hidden">
        {/* Video: ortada, yazıların arkasında büyür */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={reduce ? { duration: 0 } : { duration: 1.1, delay: 0.55, ease: EASE }}
          >
            <motion.div style={{ width, height, borderRadius: radius }} className="overflow-hidden">
              <Reel src={src} poster={poster} t={reel} fill />
            </motion.div>
          </motion.div>
        </div>

        {/* Üst satır: sola kayar */}
        <motion.h1 style={{ x: leftX }} className={`absolute left-4 top-[calc(76px+5vh)] z-10 md:left-8 ${title}`}>
          <Words text={t.top} delay={0.1} reduce={reduce} />
        </motion.h1>

        {/* Alt satır: sağa kayar */}
        <motion.p
          aria-hidden
          style={{ x: rightX }}
          className={`absolute bottom-[14vh] right-4 z-10 text-right md:right-8 ${title}`}
        >
          <Words text={t.bottom} delay={0.3} reduce={reduce} />
        </motion.p>
        {/* Ekran okuyucular için başlığın tamamı tek parça */}
        <span className="sr-only">{`${t.top} ${t.bottom}`}</span>

        {/* Köşe yazıları */}
        <motion.p style={{ opacity: fade }} className="absolute bottom-6 left-4 -z-[1] max-w-[380px] text-[16px] text-muted md:left-8">
          {t.corner}
        </motion.p>
        <motion.span style={{ opacity: fade }} className="label absolute bottom-6 right-4 -z-[1] text-muted md:right-8">
          {t.scroll}
        </motion.span>
      </HeroTrail>
    </div>
  );
}
