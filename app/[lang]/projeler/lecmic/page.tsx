import type { Metadata } from "next";
import Image from "next/image";
import { Inter, Instrument_Serif } from "next/font/google";
import Reveal from "@/components/Reveal";
import NextCase from "@/components/case/NextCase";
import Rich from "@/components/case/Rich";
import { COPY } from "./copy";
import { getDict, pageMetadata, resolveLang } from "@/lib/dictionaries";

// Lecmic'in kimliği: Instrument Serif başlıklar, kâğıt zemin #fbfaf6, mavi #3b6cf5, defter çizgileri.
const serif = Instrument_Serif({ subsets: ["latin", "latin-ext"], weight: "400", style: ["normal", "italic"], variable: "--l-serif" });
const sans = Inter({ subsets: ["latin", "latin-ext"], variable: "--l-sans" });

const BLUE = "#3b6cf5";
const INK = "#1b1f2a";
const PAPER = "#fbfaf6";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLang(params);
  return pageMetadata(lang, "/projeler/lecmic", { title: "Lecmic", description: getDict(lang).meta.projects["lecmic"] });
}

// Ekran görüntüleri; metinleri copy.ts'te aynı sırayla
const SHOTS = [
  { img: "/work/lecmic/listen.webp", w: 1100, h: 1125 },
  { img: "/work/lecmic/read.webp", w: 1100, h: 1211 },
  { img: "/work/lecmic/notes.webp", w: 700, h: 1433 },
  { img: "/work/lecmic/cards.webp", w: 1000, h: 832 },
];

// Lecmic videosundaki defter sayfası: yatay mavi çizgiler + kırmızı kenar çizgisi
const notebook = {
  backgroundColor: PAPER,
  backgroundImage: `linear-gradient(90deg, transparent 63px, rgba(220,80,80,.35) 63px, rgba(220,80,80,.35) 65px, transparent 65px), repeating-linear-gradient(to bottom, transparent 0 47px, rgba(59,108,245,.10) 47px 48px)`,
};

export default async function LecmicPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLang(params);
  const c = COPY[lang];
  const em = (s: string) => <em style={{ color: BLUE }}>{s}</em>;
  return (
    <div className={`${serif.variable} ${sans.variable}`} style={{ fontFamily: "var(--l-sans)", color: INK, background: PAPER }}>
      <style>{`body{background:${PAPER}}`}</style>

      {/* Giriş: defter sayfası */}
      <section style={notebook} className="pb-20 pt-14 md:pt-20">
        <div className="mx-auto max-w-[1200px] px-6 pl-[88px] md:px-10 md:pl-[110px]">
          <Reveal>
            <div className="flex items-center gap-3">
              <Image src="/work/lecmic/icon.svg" alt="" width={44} height={44} />
              <span className="text-[30px] font-semibold tracking-[-0.02em]">Lecmic</span>
              <span className="ml-3 rounded-full px-3 py-1 text-[13px] font-medium" style={{ background: "#e8eefe", color: "#2a54d6" }}>
                {c.badge}
              </span>
            </div>
            <h1
              className="mt-12 max-w-[1000px] text-[clamp(56px,9vw,136px)] leading-[0.95] tracking-[-0.02em]"
              style={{ fontFamily: "var(--l-serif)" }}
            >
              <Rich text={c.h1} em={em} />
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-[560px] text-[19px] leading-[1.6] text-[#4a5060]">
              {c.intro}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://lecmic.whyasaf.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center rounded-xl px-6 text-[15px] font-medium text-white transition-opacity hover:opacity-90"
                style={{ background: BLUE }}
              >
                {c.open}
              </a>
              <a
                href="https://github.com/whyasaf/lecmic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center rounded-xl border border-[#e4e1d6] bg-white px-6 text-[15px] font-medium hover:border-[#1b1f2a]"
              >
                {c.github}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ürün görüntüsü */}
      <section className="mx-auto max-w-[1300px] px-4 md:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[18px] border border-[#e4e1d6] bg-white shadow-[0_50px_100px_-50px_rgba(27,31,42,.35)]">
            <Image src="/work/lecmic/hero.webp" alt={c.heroAlt} width={1600} height={1000} sizes="100vw" className="h-auto w-full" priority />
          </div>
        </Reveal>
      </section>

      {/* Özellikler: ekran + defter dilinde başlık */}
      <section className="mx-auto max-w-[1200px] px-6 py-28 md:px-10 md:py-40">
        <div className="flex flex-col gap-28 md:gap-40">
          {c.features.map((f, i) => (
            <div key={f.k} className={`grid items-center gap-12 md:grid-cols-2 md:gap-20 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <Reveal>
                <span className="font-mono text-[13px] font-medium" style={{ color: BLUE }}>
                  0{i + 1} · {f.k}
                </span>
                <h2 className="mt-5 text-[clamp(44px,5vw,76px)] leading-[0.98] tracking-[-0.015em]" style={{ fontFamily: "var(--l-serif)" }}>
                  <Rich text={f.title} em={em} />
                </h2>
                <p className="mt-6 max-w-[440px] text-[18px] leading-[1.6] text-[#4a5060]">{f.desc}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="flex justify-center rounded-[22px] p-6 md:p-10" style={notebook}>
                  <Image
                    src={SHOTS[i].img}
                    alt=""
                    width={SHOTS[i].w}
                    height={SHOTS[i].h}
                    sizes="(min-width: 768px) 40vw, 90vw"
                    className="h-auto max-h-[560px] w-auto rounded-[12px] border border-[#e4e1d6] shadow-[0_30px_60px_-30px_rgba(27,31,42,.35)]"
                  />
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Tanıtım videosu */}
      <section className="mx-auto max-w-[1300px] px-4 md:px-8">
        <Reveal>
          <h2 className="mb-8 text-center text-[clamp(40px,5vw,72px)] tracking-[-0.015em]" style={{ fontFamily: "var(--l-serif)" }}>
            <Rich text={c.videoTitle} em={em} />
          </h2>
          <div className="overflow-hidden rounded-[18px] border border-[#e4e1d6] bg-white">
            <video
              src="/videos/lecmic-tr-16x9.mp4"
              poster="/videos/lecmic-poster.jpg"
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="aspect-video w-full"
              aria-label={c.videoLabel}
            />
          </div>
        </Reveal>
      </section>

      {/* Gizlilik */}
      <section className="mx-auto max-w-[1200px] px-6 py-28 text-center md:py-40">
        <Reveal>
          <h2 className="text-[clamp(52px,7vw,112px)] leading-[0.95] tracking-[-0.02em]" style={{ fontFamily: "var(--l-serif)" }}>
            <Rich text={c.privacyTitle} em={em} />
          </h2>
          <p className="mx-auto mt-8 max-w-[560px] text-[18px] leading-[1.6] text-[#4a5060]">
            {c.privacyText}
          </p>
        </Reveal>
      </section>

      <NextCase lang={lang} current="lecmic" radius={18} />
    </div>
  );
}
