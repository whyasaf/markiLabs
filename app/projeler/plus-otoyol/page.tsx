import type { Metadata } from "next";
import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";
import Reveal from "@/components/Reveal";
import Browser from "@/components/case/Browser";
import NextCase from "@/components/case/NextCase";
import LazyVideo from "@/components/LazyVideo";

// Plus Otoyol'un kimliği: Inter + italik serif alt yazı, yeşil #16a34a, gece mavisi yol.
const inter = Inter({ subsets: ["latin", "latin-ext"], weight: ["400", "600", "800"], variable: "--p-sans" });
const serif = Playfair_Display({ subsets: ["latin", "latin-ext"], weight: "500", style: "italic", variable: "--p-serif" });

const GREEN = "#16a34a";
const NIGHT = "#0f172a";

export const metadata: Metadata = {
  title: "Plus Otoyol",
  description: "Türkiye'nin ulaşım asistanı Plus Otoyol: rotalar, yollar, molalar ve yakıt. Geliştirme sürüyor.",
};

const TOPICS = ["Rotalar", "Yollar", "Molalar", "Yakıt"];

export default function PlusPage() {
  return (
    <div className={`${inter.variable} ${serif.variable}`} style={{ fontFamily: "var(--p-sans)", color: "#1f2937" }}>
      <style>{`body{background:#fff}`}</style>

      {/* Giriş: beyaz, sitenin kendisi gibi */}
      <section className="bg-white px-6 pb-20 pt-14 text-center md:pt-20">
        <Reveal>
          <span className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.1em]" style={{ background: "#f0fdf4", color: GREEN }}>
            <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: GREEN }} />
            Geliştiriliyor
          </span>
          <div className="mt-12 flex justify-center">
            <Image src="/work/plus/logo.png" alt="Plus Otoyol — Türkiye'nin Ulaşım Asistanı" width={1000} height={330} className="h-auto w-[min(86vw,560px)]" priority />
          </div>
          <h1 className="mx-auto mt-14 max-w-[900px] text-[clamp(48px,7vw,104px)] font-extrabold leading-[1] tracking-[-0.045em]">
            Yolculuğunuzun <em className="font-medium tracking-[-0.01em]" style={{ fontFamily: "var(--p-serif)", color: GREEN }}>yeni adresi.</em>
          </h1>
          <p className="mx-auto mt-8 max-w-[520px] text-[19px] italic leading-[1.6] text-[#4b5563]" style={{ fontFamily: "var(--p-serif)" }}>
            Rotalar, yollar, molalar, yakıt ve daha fazlası. Plus Otoyol üzerinde çalışıyoruz.
          </p>
          <a
            href="https://plusotoyol.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex min-h-12 items-center rounded-full px-7 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: GREEN }}
          >
            plusotoyol.com ↗
          </a>
        </Reveal>
      </section>

      {/* Gece yolu: dört başlık + akan şerit */}
      <section className="relative overflow-hidden px-6 pb-0 pt-28 text-white md:pt-36" style={{ background: NIGHT }}>
        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <Reveal>
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em]" style={{ color: "#4ade80" }}>
              Üzerinde çalışılanlar
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-4">
            {TOPICS.map((t, i) => (
              <Reveal key={t} delay={i * 0.08}>
                <p className="text-[clamp(40px,5.4vw,84px)] font-extrabold tracking-[-0.045em]" style={{ color: i % 2 ? "#4ade80" : "#fff" }}>
                  {t}.
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <p className="mt-4 text-[clamp(28px,3vw,44px)] italic text-[#cbd5e1]" style={{ fontFamily: "var(--p-serif)" }}>
              ve daha fazlası.
            </p>
          </Reveal>
        </div>
        {/* perspektif yol */}
        <div aria-hidden className="relative mx-auto mt-16 h-[320px] max-w-[1400px] md:h-[420px]">
          <div
            className="absolute inset-x-0 bottom-0 h-[900px] origin-bottom"
            style={{
              transform: "perspective(900px) rotateX(64deg)",
              background: "#1e293b",
              WebkitMaskImage: "linear-gradient(to top, #000 50%, transparent 100%)",
              maskImage: "linear-gradient(to top, #000 50%, transparent 100%)",
            }}
          >
            <span className="absolute inset-y-0 left-[16%] w-3 bg-[#e2e8f0]" />
            <span className="absolute inset-y-0 right-[16%] w-3 bg-[#e2e8f0]" />
            <span
              className="road-lane absolute inset-y-0 left-1/2 w-4 -translate-x-1/2"
              style={{ background: `repeating-linear-gradient(to bottom, ${GREEN} 0 70px, transparent 70px 150px)` }}
            />
          </div>
        </div>
        <style>{`@keyframes lane{to{background-position-y:150px}}.road-lane{animation:lane 1s linear infinite}@media (prefers-reduced-motion: reduce){.road-lane{animation:none}}`}</style>
      </section>

      {/* Video */}
      <section className="px-4 py-28 md:px-8 md:py-36" style={{ background: "#f8fafc" }}>
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <div className="aspect-[16/10] overflow-hidden rounded-[20px] shadow-[0_40px_80px_-40px_rgba(15,23,42,.45)]">
              <LazyVideo src="/videos/work-plusotoyol.mp4" poster="/videos/work-plusotoyol.jpg" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-16 grid items-center gap-10 md:grid-cols-[1fr_1.2fr]">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.2em]" style={{ color: GREEN }}>
                  Şu anki durum
                </p>
                <p className="mt-4 text-[clamp(28px,3vw,40px)] font-extrabold leading-[1.1] tracking-[-0.035em]">
                  Ürün geliştirme aşamasında. Sitede şimdilik bir duyuru sayfası yayında.
                </p>
              </div>
              <Browser src="/work/plus/screen-1.webp" alt="plusotoyol.com duyuru sayfası" url="plusotoyol.com" radius={14} />
            </div>
          </Reveal>
        </div>
      </section>

      <NextCase current="plus-otoyol" radius={20} />
    </div>
  );
}
