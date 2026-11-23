"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform, type MotionStyle, type MotionValue } from "framer-motion";
import type { Member } from "@/data/team";
import type { Dict } from "@/lib/dictionaries/tr";

/**
 * Ekip sahnesi: bölüm ekrana yapışır. Her kişide önce portre küçük, isim karşısında durur; kaydırdıkça
 * portre öbür yana geçip büyür ve ismi önüne katıp iter, boşalan tarafta bio, linkler ve alanlar satır satır
 * maskeden yükselir. Kişiler perdeyle değişir: giden portre yukarı kapanırken gelen alttan açılır.
 * Kişiler sırayla yön değiştirir (ilki soldan sağa, ikincisi sağdan sola). Tüm değerler JS'te hesaplanır.
 */

type Rect = [left: number, top: number, width: number, height: number]; // sahnenin yüzdesi

// Masaüstü: portre küçükken solda, büyüyünce sağda (tek sıradaki kişiler için aynası)
const D_SMALL: Rect = [4, 16, 31, 66];
const D_BIG: Rect = [50, 4, 46, 84];
const D_INTRO_TEXT: Rect = [41, 10, 55, 78];
const D_FULL_TEXT: Rect = [4, 6, 41, 82];
// Mobil: önce büyük portre, sonra köşeye küçülür ve metne yer açar
const M_SMALL: Rect = [14, 8, 72, 50];
const M_BIG: Rect = [4, 5, 34, 21];
const M_INTRO_TEXT: Rect = [4, 61, 92, 28];
const M_FULL_TEXT: Rect = [4, 28, 92, 63];

const mirror = ([l, t, w, h]: Rect): Rect => [100 - l - w, t, w, h];
const clamp01 = (x: number) => Math.min(1, Math.max(0, x));
const inOut = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
const out = (x: number) => 1 - Math.pow(1 - x, 4);
const lerp = (a: Rect, b: Rect, t: number) => a.map((v, j) => v + (b[j] - v) * t) as Rect;
// Gizli satırın kaydırıldığı mesafe: aksan ve kuyruklar maskenin payından taşmasın diye satır boyunun epey ötesi
const HIDE = 140;
const pos = ([l, t, w, h]: Rect) => ({ left: `${l}%`, top: `${t}%`, width: `${w}%`, height: `${h}%` });

/*
 * Zaman çizelgesi, s = kişinin kendi bölümündeki ilerleme (0 → 1):
 *   0.00–0.10  giriş hali bekler
 *   0.10–0.50  portre yana geçip büyür, isim itilerek çıkar
 *   0.40–0.79  bio, linkler ve alanlar satır satır yükselir
 *   0.79–0.97  yazılar yukarı çıkar
 *   0.88–1.00  perde: bu kişi yukarı kapanır, sıradaki alttan açılır (sıradakinin s'i -0.12 → 0)
 */
const travel = (s: number) => clamp01((s - 0.1) / 0.4);
const enterOf = (s: number, i: number) => (i === 0 ? 1 : clamp01((s + 0.12) / 0.12));
const leaveOf = (s: number, i: number, n: number) => (i === n - 1 ? 0 : clamp01((s - 0.88) / 0.12));

function useMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const on = () => setMobile(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return mobile;
}

export default function TeamScroll({ team, t }: { team: Member[]; t: Dict["team"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const n = team.length;
  const mobile = useMobile();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  // Hafif yaylanma: hareket kaydırmayı biraz geriden, akarak takip eder
  const p = useSpring(scrollYProgress, { stiffness: 140, damping: 32, mass: 0.5, restDelta: 0.0005 });
  const k = useTransform(p, (v) => Math.min(n - 1, Math.floor(v * n + 0.06)));

  return (
    <div ref={ref} className="relative" style={{ height: `${n * 230 + 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative mx-auto h-full max-w-[1400px]">
          {team.map((m, i) => (
            <Person key={m.first} m={m} i={i} n={n} p={p} mobile={mobile} t={t} />
          ))}

          {/* Alt satır: sayaç ve ilerleme */}
          <div className="absolute inset-x-[4%] bottom-[3%] flex items-center gap-6">
            <span className="label shrink-0 text-muted">
              <Counter k={k} /> / {String(n).padStart(3, "0")}
            </span>
            <div className="flex flex-1 gap-2">
              {team.map((m, i) => (
                <Bar key={m.first} i={i} n={n} p={p} />
              ))}
            </div>
            <span className="label shrink-0 text-muted">{t.label}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Person({
  m,
  i,
  n,
  p,
  mobile,
  t,
}: {
  m: Member;
  i: number;
  n: number;
  p: MotionValue<number>;
  mobile: boolean;
  t: Dict["team"];
}) {
  const flip = i % 2 === 1;
  const dir = flip ? -1 : 1; // portrenin gittiği yön
  const f = (r: Rect) => (flip ? mirror(r) : r);
  const small = mobile ? M_SMALL : f(D_SMALL);
  const big = mobile ? f(M_BIG) : f(D_BIG);
  const introText = mobile ? M_INTRO_TEXT : f(D_INTRO_TEXT);
  const fullText = mobile ? M_FULL_TEXT : f(D_FULL_TEXT);

  const s = useTransform(p, (v) => v * n - i);

  // Portre: konum/boyut, perde ve içteki ters yönlü kayma
  const rect = (v: number) => lerp(small, big, inOut(travel(v)));
  const left = useTransform(s, (v) => `${rect(v)[0]}%`);
  const top = useTransform(s, (v) => `${rect(v)[1]}%`);
  const width = useTransform(s, (v) => `${rect(v)[2]}%`);
  const height = useTransform(s, (v) => `${rect(v)[3]}%`);
  const clipPath = useTransform(
    s,
    (v) => `inset(${(1 - out(enterOf(v, i))) * 100}% 0% ${inOut(leaveOf(v, i, n)) * 100}% 0% round 24px)`,
  );
  const imgScale = useTransform(s, (v) => 1.12 + 0.12 * (1 - out(enterOf(v, i))));
  // Mavi ton: portre küçükken tam, büyüdükçe çekilir, büyük halde gerçek renk (globals.css .duo-portrait)
  const duo = useTransform(s, (v) => 1 - inOut(travel(v)));
  // Kayarken hafifçe ters yöne gider; başta ve sonda tam ortada durur (sin: uçlarda 0, ortada en fazla)
  const imgX = useTransform(s, (v) => (mobile ? "0%" : `${-dir * Math.sin(Math.PI * travel(v)) * 4}%`));

  // Giriş satırları (ad, soyad, rol): sıradakiyse alttan yükselir; portre geçerken yana itilir (mobilde yukarı)
  // Masaüstünde itme gerçek: satır, portrenin ilerleyen kenarı ona değdiği anda onunla birlikte kayar
  // (yansımasız geometride hesaplanır; aynalı kişide yön ters çevrilir).
  const introIn = (v: number, j: number) => (i === 0 ? 1 : out(clamp01((v + 0.07 - j * 0.02) / 0.07)));
  const pushed = (v: number, j: number) => {
    // Alt satırlar biraz önden gider (geriden gelse portrenin altında kalırdı)
    const edge = D_SMALL[0] + D_SMALL[2] + (D_BIG[0] + D_BIG[2] - D_SMALL[0] - D_SMALL[2]) * inOut(travel(v + j * 0.008));
    return (Math.max(0, edge + 2 - D_INTRO_TEXT[0]) / D_INTRO_TEXT[2]) * 100 * 1.25;
  };
  const introY = (j: number) => (v: number) =>
    (1 - introIn(v, j)) * HIDE - (mobile ? inOut(clamp01((travel(v) - j * 0.06) / 0.5)) * HIDE : 0);
  const introX = (j: number) => (v: number) => (mobile ? 0 : dir * pushed(v, j));
  const introEvents = useTransform(s, (v) => (enterOf(v, i) > 0.5 && v < 0.12 ? "auto" : "none"));

  // Ayrıntı satırları: sırayla yükselir, perdede yukarı çıkar
  const fullY = (j: number) => (v: number) => {
    const inn = out(clamp01((v - 0.4 - j * 0.035) / 0.14));
    const away = i === n - 1 ? 0 : inOut(clamp01((v - 0.79 - j * 0.012) / 0.08));
    return (1 - inn) * HIDE - away * HIDE;
  };
  const fullEvents = useTransform(s, (v) => (v > 0.6 && leaveOf(v, i, n) < 0.3 ? "auto" : "none"));

  return (
    <>
      {/* Portre */}
      <motion.div
        style={{ left, top, width, height, clipPath, zIndex: 10 + i, "--duo": duo } as MotionStyle}
        className="duo-portrait group absolute overflow-hidden rounded-[24px]"
      >
        <motion.div style={{ scale: imgScale, x: imgX }} className="absolute inset-0">
          {m.photo ? (
            <Image src={m.photo} alt={`${m.first} ${m.last}`} fill sizes="(min-width: 768px) 46vw, 72vw" className="object-cover" />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-blue text-white">
              <span className="text-[clamp(56px,9vw,140px)] font-medium tracking-[-0.05em]">
                {m.first[0]}
                {m.last[0]}
              </span>
              <span className="label text-white/70">{t.photoSoon}</span>
            </div>
          )}
        </motion.div>
        {m.photo && <span aria-hidden className="duo-tint pointer-events-none absolute inset-0 bg-blue mix-blend-screen" />}
      </motion.div>

      {/* Giriş: büyük isim ve rol */}
      <motion.div
        style={{ ...pos(introText), pointerEvents: introEvents }}
        // Aynalı kişide satırlar tam genişlikte kalır, yalnızca yazı sağa yaslanır: itme yüzdesi satır genişliğine
        // göre hesaplandığından satırlar yazı kadar daralırsa (items-end) isim portreden yavaş kayıp altında kalır
        className={`absolute flex flex-col justify-start md:justify-center ${flip ? "md:text-right" : ""}`}
      >
        <h2 className="text-[clamp(52px,min(8vw,13vh),136px)] font-medium leading-[1] tracking-[-0.05em]">
          <Masked s={s} y={introY(0)} x={introX(0)}>
            {m.first}
          </Masked>
          <Masked s={s} y={introY(1)} x={introX(1)} className="text-blue">
            {m.last}.
          </Masked>
        </h2>
        <Masked s={s} y={introY(2)} x={introX(2)} className="mt-4 text-[clamp(20px,1.8vw,26px)] font-medium tracking-[-0.02em] md:mt-6">
          {m.role}
        </Masked>
      </motion.div>

      {/* Ayrıntı: bio, linkler, alanlar */}
      <motion.div style={{ ...pos(fullText), pointerEvents: fullEvents }} className="absolute flex flex-col justify-start md:justify-center">
        <Masked s={s} y={fullY(0)} className="text-[clamp(30px,min(3.6vw,6vh),60px)] font-medium leading-[1] tracking-[-0.04em]">
          <span aria-hidden>
            {m.first} <span className="text-blue">{m.last}.</span>
          </span>
        </Masked>
        <Masked s={s} y={fullY(1)} className="mt-3 text-[18px] font-medium tracking-[-0.02em]">
          {m.role}
        </Masked>
        <Masked s={s} y={fullY(2)} className="mt-3 max-w-[520px] text-[14px] leading-[1.5] text-muted md:mt-4 md:text-[17px] md:leading-[1.6]">
          {m.bio}
        </Masked>
        {m.links.length > 0 && (
          <Masked s={s} y={fullY(3)} className="mt-4 text-[15px]">
            <span className="flex flex-wrap gap-5">
              {m.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-blue hover:underline">
                  {l.label} ↗
                </a>
              ))}
            </span>
          </Masked>
        )}

        <Masked s={s} y={fullY(4)} className="label mt-5 text-muted md:mt-[min(56px,6vh)]">
          {t.focus}
        </Masked>
        <ul className="mt-2 text-[clamp(24px,min(3.8vw,6.4vh),64px)] font-medium leading-[1.08] tracking-[-0.045em]">
          {m.focus.map((fc, j) => (
            <li key={fc}>
              <Masked s={s} y={fullY(5 + j)}>
                {fc}
              </Masked>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}

/**
 * Maskeli satır: dikeyde kırpılır (alttan yükselip üstten çıkar), yatayda serbesttir (yana itilince ekrandan
 * kayıp gider). Üst/alt pay, Ö gibi aksanların ve g/y kuyruklarının kesilmemesi için.
 */
function Masked({
  s,
  y,
  x,
  className = "",
  children,
}: {
  s: MotionValue<number>;
  y: (v: number) => number;
  x?: (v: number) => number;
  className?: string;
  children: React.ReactNode;
}) {
  const ty = useTransform(s, (v) => `${y(v)}%`);
  const tx = useTransform(s, (v) => `${x ? x(v) : 0}%`);
  return (
    <span className={`block ${className}`}>
      <span className="-mb-[0.14em] -mt-[0.16em] block overflow-x-visible overflow-y-clip pb-[0.14em] pt-[0.16em]">
        <motion.span style={{ x: tx, y: ty }} className="block will-change-transform">
          {children}
        </motion.span>
      </span>
    </span>
  );
}

function Counter({ k }: { k: MotionValue<number> }) {
  const text = useTransform(k, (v) => String(v + 1).padStart(3, "0"));
  return <motion.span>{text}</motion.span>;
}

function Bar({ i, n, p }: { i: number; n: number; p: MotionValue<number> }) {
  // Her kişinin çubuğu kendi bölümü boyunca dolar
  const scaleX = useTransform(p, (v) => clamp01(v * n - i));
  return (
    <span className="h-[3px] flex-1 overflow-hidden rounded-full bg-line">
      <motion.span style={{ scaleX }} className="block h-full origin-left bg-blue" />
    </span>
  );
}
