import type { Metadata } from "next";
import Image from "next/image";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Reveal from "@/components/Reveal";
import Browser from "@/components/case/Browser";
import NextCase from "@/components/case/NextCase";
import LazyVideo from "@/components/LazyVideo";
import { getDict, pageMetadata, resolveLang } from "@/lib/dictionaries";
import { localePath } from "@/lib/i18n";
import Rich from "@/components/case/Rich";
import { COPY } from "./copy";

// Vitren'in kimliği: Manrope + Cormorant Garamond, krem #f4f3ef, kırmızı #d4121d, dikey kırmızı çizgi, ince ızgara.
const manrope = Manrope({ subsets: ["latin", "latin-ext"], weight: ["500", "700", "800"], variable: "--v-sans" });
const cormorant = Cormorant_Garamond({ subsets: ["latin", "latin-ext"], weight: "600", style: "italic", variable: "--v-serif" });

const RED = "#d4121d";
const CREAM = "#f4f3ef";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLang(params);
  return pageMetadata(lang, "/projeler/vitren-yapi", { title: "Vitren Yapı", description: getDict(lang).meta.projects["vitren-yapi"] });
}

const PROJECTS = [
  { name: "VİTREN Reserve", img: "/work/vitren/reserve.webp" },
  { name: "VİTREN Tower", img: "/work/vitren/tower.webp" },
  { name: "VİTREN Horizon", img: "/work/vitren/horizon.webp" },
];

// Ekran görüntüleri; altyazıları copy.ts'te aynı sırayla
const SCREENS = ["/work/vitren/screen-1.webp", "/work/vitren/screen-2.webp", "/work/vitren/screen-3.webp"];

const label = "text-[12px] font-bold uppercase tracking-[0.22em]";
const grid = {
  backgroundColor: CREAM,
  backgroundImage: "linear-gradient(rgba(0,0,0,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.035) 1px, transparent 1px)",
  backgroundSize: "80px 80px",
};

export default async function VitrenPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLang(params);
  const c = COPY[lang];
  return (
    <div className={`${manrope.variable} ${cormorant.variable} text-[#111]`} style={{ fontFamily: "var(--v-sans)", background: CREAM }}>
      <style>{`body{background:${CREAM}}`}</style>

      {/* Giriş: kırmızı dikey çizgi */}
      <section style={grid} className="px-6 pb-20 pt-14 md:px-10 md:pt-20">
        <div className="mx-auto max-w-[1240px]">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-6">
              <Image src="/work/vitren/logo.png" alt="Vitren Yapı" width={421} height={136} className="h-12 w-auto" priority />
              <span className={label} style={{ color: RED }}>
                {c.kicker}
              </span>
            </div>
            <div className="mt-14 flex gap-6 md:gap-10">
              <span className="w-1.5 shrink-0" style={{ background: RED }} />
              <h1 className="text-[clamp(56px,9vw,140px)] font-extrabold leading-[0.96] tracking-[-0.045em]">
                {c.h1.map((line, i) => (
                  <span key={line} className="block" style={i === c.h1.length - 1 ? { color: RED } : undefined}>
                    {line}
                  </span>
                ))}
              </h1>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-wrap items-end justify-between gap-8 md:pl-16">
              <p className="max-w-[520px] text-[18px] leading-[1.65] text-[#555]">
                {c.intro}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://vitrenyapi.whyasaf.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex min-h-14 items-center px-8 text-white transition-opacity hover:opacity-90 ${label}`}
                  style={{ background: RED, letterSpacing: "0.14em" }}
                >
                  {c.demo}
                </a>
                <a href={localePath(lang, "/iletisim")} className={`inline-flex min-h-14 items-center border border-[#111] px-8 ${label}`} style={{ letterSpacing: "0.14em" }}>
                  {c.ask}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Büyük görsel + öne çıkan proje etiketi */}
      <section className="relative px-2 md:px-3">
        <Reveal>
          <div className="relative aspect-[16/8] overflow-hidden">
            <Image src="/work/vitren/hero.webp" alt="Vitren Reserve" fill sizes="100vw" className="object-cover" />
            <div className="absolute bottom-6 left-6 bg-white px-7 py-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,.35)] md:bottom-12 md:left-12">
              <p className={label} style={{ color: RED }}>
                {c.featured}
              </p>
              <p className="mt-2 text-[24px] font-extrabold md:text-[30px]">VİTREN RESERVE</p>
              <p className="mt-1 text-[13px] tracking-[0.14em] text-[#888]">{c.featuredPlace}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Form, işlev, estetik */}
      <section className="mx-auto grid max-w-[1240px] items-center gap-14 px-6 py-28 md:grid-cols-2 md:px-10 md:py-40">
        <Reveal>
          <p className={label} style={{ color: RED }}>
            {c.principlesLabel}
          </p>
          <h2 className="mt-6 text-[clamp(44px,5.2vw,80px)] font-extrabold leading-[1.02] tracking-[-0.04em]">
            <Rich
              text={c.principles}
              em={(s) => (
                <em className="font-semibold tracking-[-0.01em]" style={{ fontFamily: "var(--v-serif)", color: RED }}>
                  {s}
                </em>
              )}
            />
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/work/vitren/about.webp" alt="" fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
          </div>
        </Reveal>
      </section>

      {/* Seçkin projeler */}
      <section style={grid} className="px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1240px]">
          <p className={label} style={{ color: RED }}>
            {c.portfolioLabel}
          </p>
          <h2 className="mt-4 text-[clamp(40px,4.6vw,68px)] font-extrabold tracking-[-0.04em]">{c.portfolio}</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className="bg-white p-3 shadow-[0_20px_50px_-30px_rgba(0,0,0,.3)]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image src={p.img} alt={p.name} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover transition-transform duration-700 hover:scale-[1.04]" />
                  </div>
                  <p className="px-2 pb-2 pt-5 text-[20px] font-extrabold">{p.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video + şablonda neler var */}
      <section className="mx-auto max-w-[1240px] px-6 py-28 md:px-10 md:py-36">
        <Reveal>
          <div className="aspect-[16/10] overflow-hidden">
            <LazyVideo src="/videos/work-vitrenyapi.mp4" poster="/videos/work-vitrenyapi.jpg" className="h-full w-full object-cover" />
          </div>
        </Reveal>
        <div className="mt-20 grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className={label} style={{ color: RED }}>
              {c.includedLabel}
            </p>
            <h2 className="mt-4 text-[clamp(36px,3.8vw,56px)] font-extrabold leading-[1.05] tracking-[-0.04em]">
              {c.included}
            </h2>
          </Reveal>
          <ul className="grid gap-px bg-[#ddd] sm:grid-cols-2">
            {c.items.map((x) => (
              <li key={x} className="flex items-center gap-4 bg-[#f4f3ef] px-5 py-5 text-[16px] font-bold">
                <span className="h-2 w-2 shrink-0" style={{ background: RED }} />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ekranlar */}
      <section className="mx-auto max-w-[1240px] px-6 pb-28 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {SCREENS.map((src, i) => (
            <Reveal key={src} delay={i * 0.08}>
              <Browser src={src} alt={c.screens[i]} url="vitrenyapi.whyasaf.com" radius={2} />
              <p className={`${label} mt-4 text-[#777]`}>{c.screens[i]}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <NextCase lang={lang} current="vitren-yapi" />
    </div>
  );
}
