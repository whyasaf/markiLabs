import type { Metadata } from "next";
import Image from "next/image";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import LazyVideo from "@/components/LazyVideo";
import Reveal from "@/components/Reveal";
import NextCase from "@/components/case/NextCase";
import Rich from "@/components/case/Rich";
import { COPY } from "./copy";
import { getDict, pageMetadata, resolveLang } from "@/lib/dictionaries";

// Neon'un kendi kimliği: Plus Jakarta Sans + italik Playfair, yeşil #00bf63, beyaz zemin, keskin köşeler.
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin", "latin-ext"], weight: ["400", "600", "800"], variable: "--n-sans" });
const playfair = Playfair_Display({ subsets: ["latin", "latin-ext"], weight: ["500"], style: ["italic"], variable: "--n-serif" });

const SITE = "https://neonotokurtarma.com";
const G = "#00bf63";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLang(params);
  return pageMetadata(lang, "/projeler/neon-oto-kurtarma", { title: "Neon Oto Kurtarma", description: getDict(lang).meta.projects["neon-oto-kurtarma"] });
}

const REGIONS = [
  "Bakırköy", "Ataköy", "Florya", "Yeşilköy", "Zeytinburnu", "Bahçelievler", "Sefaköy",
  "Fatih", "Cevizlibağ", "Merter", "Küçükçekmece", "Güngören", "Bayrampaşa", "Bağcılar",
];

// Ekran görüntüleri; altyazıları copy.ts'te aynı sırayla
const SCREENS = ["/work/neon/screen-1.webp", "/work/neon/screen-2.webp", "/work/neon/screen-3.webp"];

const label = "text-[13px] font-semibold uppercase tracking-[0.14em]";

function Browser({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden border border-[#e5e5e5] bg-white shadow-[0_40px_80px_-40px_rgba(0,0,0,.25)]">
      <div className="flex h-9 items-center gap-1.5 border-b border-[#eee] px-4">
        <i className="h-2.5 w-2.5 rounded-full bg-[#e3e3e3]" />
        <i className="h-2.5 w-2.5 rounded-full bg-[#e3e3e3]" />
        <i className="h-2.5 w-2.5 rounded-full bg-[#e3e3e3]" />
      </div>
      <Image src={src} alt={alt} width={1600} height={1000} sizes="(min-width: 768px) 50vw, 100vw" className="h-auto w-full" />
    </div>
  );
}

export default async function NeonPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLang(params);
  const c = COPY[lang];
  return (
    <div className={`${jakarta.variable} ${playfair.variable} bg-white text-[#0a0a0a]`} style={{ fontFamily: "var(--n-sans)" }}>
      {/* Bu sayfada zemin Neon'un beyazı */}
      <style>{`body{background:#fff}`}</style>

      {/* Giriş */}
      <section className="mx-auto max-w-[1240px] px-5 pb-16 pt-14 md:px-8 md:pt-24">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Image src="/work/neon/logo.png" alt="Neon Oto Kurtarma" width={931} height={313} className="h-14 w-auto" priority />
            <span className={`${label} text-[#6b6b6b]`}>{c.tags}</span>
          </div>
          <h1 className="mt-14 max-w-[1100px] text-[clamp(48px,7.6vw,118px)] font-extrabold leading-[1.0] tracking-[-0.045em]">
            <Rich
              text={c.h1}
              em={(s) => (
                <em className="font-medium tracking-[-0.01em]" style={{ fontFamily: "var(--n-serif)", color: G }}>
                  {s}
                </em>
              )}
            />
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-end">
            <p className="max-w-[620px] text-[19px] leading-[1.65] text-[#333]">
              {c.intro}
            </p>
            <div className="flex flex-wrap items-center gap-6 md:justify-end">
              <a
                href={SITE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center px-8 text-[16px] font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: G }}
              >
                {c.visit}
              </a>
              <a href="#video" className="text-[15px] font-semibold hover:underline">
                {c.video}
              </a>
            </div>
          </div>
        </Reveal>

        <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-[#e5e5e5] pt-8 md:grid-cols-4">
          {c.facts.map(([k, v]) => (
            <div key={k}>
              <dt className={`${label} text-[#8a8a8a]`}>{k}</dt>
              <dd className="mt-2 text-[16px] font-semibold">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Tanıtım videosu */}
      <section id="video" className="scroll-mt-24 px-2 md:px-3">
        <Reveal>
          <div className="relative aspect-[16/10] overflow-hidden bg-[#f2f4f3]">
            <LazyVideo
              src="/videos/work-neonotokurtarma.mp4"
              poster="/videos/work-neonotokurtarma.jpg"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Hakkında */}
      <section className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-28 md:grid-cols-[0.9fr_1.1fr] md:gap-20 md:px-8 md:py-40">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src="/work/neon/truck.webp" alt={c.truckAlt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover object-[center_62%]" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <span className={`${label}`} style={{ color: G }}>
            {c.aboutLabel}
          </span>
          <p className="mt-6 text-[clamp(36px,4.2vw,60px)] leading-[1.08]" style={{ fontFamily: "var(--n-serif)", fontStyle: "italic" }}>
            &ldquo;{c.quote}&rdquo;
          </p>
          <p className="mt-8 max-w-[520px] text-[18px] leading-[1.7] text-[#444]">
            {c.about}
          </p>
        </Reveal>
      </section>

      {/* Hizmet alanları */}
      <section className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-[clamp(36px,4.4vw,64px)] font-extrabold tracking-[-0.04em]">
            {c.servicesTitle}
            <span className="ml-1 inline-block h-[0.2em] w-[0.2em] rounded-full align-baseline" style={{ background: G }} />
          </h2>
          <span className={`${label} text-[#8a8a8a]`}>{c.servicesCount}</span>
        </div>
        <ol className="mt-10 border-t border-[#e5e5e5]">
          {c.services.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.04}>
                <div className="grid gap-4 border-b border-[#e5e5e5] py-8 md:grid-cols-[80px_1fr_1.4fr] md:items-baseline">
                  <span className="text-[14px] font-semibold text-[#8a8a8a]">0{i + 1}</span>
                  <h3 className="text-[22px] font-extrabold uppercase tracking-[0.02em] md:text-[26px]">{s.title}</h3>
                  <p className="text-[16px] leading-[1.65] text-[#555]">{s.desc}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* Hizmet bölgeleri */}
      <section className="mx-auto max-w-[1240px] px-5 py-28 md:px-8 md:py-36">
        <span className={`${label} text-[#8a8a8a]`}>{c.regionsLabel}</span>
        <h2 className="mt-4 max-w-[760px] text-[clamp(32px,3.6vw,52px)] font-extrabold leading-[1.08] tracking-[-0.035em]">
          {c.regionsTitle}
        </h2>
        <ul className="mt-10 flex flex-wrap gap-2.5">
          {REGIONS.map((r) => (
            <li key={r} className="border border-[#e5e5e5] px-4 py-2.5 text-[15px] font-semibold">
              {r}
            </li>
          ))}
        </ul>
      </section>

      {/* Ekranlar */}
      <section className="bg-[#f2f4f3] py-28 md:py-36">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <h2 className="text-[clamp(36px,4.4vw,64px)] font-extrabold tracking-[-0.04em]">
            {c.screensTitle}
            <span className="ml-1 inline-block h-[0.2em] w-[0.2em] rounded-full" style={{ background: G }} />
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {SCREENS.map((src, i) => (
              <Reveal key={src} delay={(i % 2) * 0.08} className={i === 0 ? "md:col-span-2" : ""}>
                <Browser src={src} alt={c.screens[i]} />
                <p className={`${label} mt-4 text-[#6b6b6b]`}>{c.screens[i]}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <NextCase lang={lang} current="neon-oto-kurtarma" />
    </div>
  );
}
