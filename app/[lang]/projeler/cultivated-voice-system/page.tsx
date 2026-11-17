import type { Metadata } from "next";
import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";
import Reveal from "@/components/Reveal";
import Browser from "@/components/case/Browser";
import NextCase from "@/components/case/NextCase";
import LazyVideo from "@/components/LazyVideo";
import { getDict, pageMetadata, resolveLang } from "@/lib/dictionaries";

// Cultivated'ın kimliği: Playfair Display + Inter, lacivert #142640, altın #c9a646, ince altın çizgiler.
const playfair = Playfair_Display({ subsets: ["latin", "latin-ext"], weight: ["500", "600"], style: ["normal", "italic"], variable: "--cv-serif" });
const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--cv-sans" });

const NAVY = "#142640";
const GOLD = "#c9a646";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLang(params);
  return pageMetadata(lang, "/projeler/cultivated-voice-system", { title: "The Cultivated Voice System", description: getDict(lang).meta.projects["cultivated-voice-system"] });
}

const METHODS = [
  { n: "I", title: "A-R-E-R Protocol", desc: "Awareness, Release, Engagement, Response." },
  { n: "II", title: "P-E-E-E Framework", desc: "Posture, Emotion, Expression, Endurance." },
  { n: "III", title: "Control Loop", desc: "Listening to and feeling your own voice." },
];

const APPS = ["IELTS / Exam Preparation", "Business English", "General English"];

const SCREENS = [
  { src: "/work/cultivated/screen-1.webp", label: "Not only a course — a system" },
  { src: "/work/cultivated/screen-2.webp", label: "Core methodology" },
  { src: "/work/cultivated/screen-3.webp", label: "Applications" },
];

const eyebrow = "text-[13px] font-semibold uppercase tracking-[0.24em]";

function GoldRule() {
  return <span className="inline-block h-px w-20 align-middle" style={{ background: GOLD }} />;
}

export default async function CultivatedPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLang(params);
  return (
    <div className={`${playfair.variable} ${inter.variable} text-[#fdfbf7]`} style={{ fontFamily: "var(--cv-sans)", background: NAVY }}>
      <style>{`body{background:${NAVY}}[data-site-logo]{filter:brightness(0) invert(1)}[data-site-cta]{background:${GOLD}!important;color:${NAVY}!important}`}</style>

      {/* Giriş */}
      <section className="relative overflow-hidden px-6 pb-24 pt-16 md:px-10 md:pt-24">
        <Image
          src="/work/cultivated/emblem.png"
          alt=""
          width={600}
          height={605}
          className="pointer-events-none absolute -right-20 top-10 hidden w-[520px] opacity-[0.12] md:block"
        />
        <div className="relative mx-auto max-w-[1200px]">
          <Reveal>
            <p className={eyebrow} style={{ color: GOLD }}>
              Advanced linguistic architecture <GoldRule />
            </p>
            <h1 className="mt-10 text-[clamp(56px,8.6vw,132px)] font-medium leading-[0.98] tracking-[-0.01em]" style={{ fontFamily: "var(--cv-serif)" }}>
              The Cultivated
              <br />
              <em style={{ color: GOLD }}>Voice System</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-[600px] text-[19px] leading-[1.65] text-[#cbd5e1]">
              Akademik çalışma, özgüvenli iletişim ve etkili İngilizce için kurulmuş bir eğitim sistemi. IELTS, PTE ve
              TOEFL gibi sınavlara hazırlıktan iş İngilizcesine uzanan programların tanıtım sitesi.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="https://cultivatedvoicesystem.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center px-8 text-[14px] font-semibold uppercase tracking-[0.16em] transition-opacity hover:opacity-90"
                style={{ background: GOLD, color: NAVY }}
              >
                Enter the system ↗
              </a>
              <span className={`${eyebrow} text-[#94a3b8]`}>Web sitesi · Eğitim</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Video: ince altın çerçeve */}
      <section className="px-4 md:px-10">
        <Reveal>
          <div className="mx-auto max-w-[1300px] border p-2" style={{ borderColor: "rgba(201,166,70,.45)" }}>
            <div className="aspect-[16/10] overflow-hidden">
              <LazyVideo
                src="/videos/work-cultivatedvoicesystem.mp4"
                poster="/videos/work-cultivatedvoicesystem-alt.jpg"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Not only a course */}
      <section className="mx-auto grid max-w-[1200px] items-center gap-14 px-6 py-28 md:grid-cols-[1.3fr_1fr] md:px-10 md:py-40">
        <Reveal>
          <p className={eyebrow} style={{ color: GOLD }}>
            Our purpose <GoldRule />
          </p>
          <h2 className="mt-8 text-[clamp(44px,5.6vw,84px)] font-medium leading-[1.04]" style={{ fontFamily: "var(--cv-serif)" }}>
            This is not only a course.
            <br />
            <em style={{ color: GOLD }}>It is a system.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="flex justify-center">
          <Image src="/work/cultivated/seal.png" alt="The Cultivated Voice System mührü" width={500} height={500} className="w-[min(80vw,380px)]" />
        </Reveal>
      </section>

      {/* Core methodology */}
      <section className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Reveal>
          <h2 className="text-center text-[clamp(40px,5vw,76px)] font-medium" style={{ fontFamily: "var(--cv-serif)" }}>
            Core <em style={{ color: GOLD }}>Methodology</em>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {METHODS.map((m, i) => (
            <Reveal key={m.n} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-5 border p-9" style={{ borderColor: "rgba(201,166,70,.4)", background: "rgba(255,255,255,.03)" }}>
                <span className="text-[56px] leading-none" style={{ fontFamily: "var(--cv-serif)", color: GOLD }}>
                  {m.n}
                </span>
                <h3 className="text-[30px]" style={{ fontFamily: "var(--cv-serif)" }}>
                  {m.title}
                </h3>
                <p className="text-[16px] leading-[1.6] text-[#94a3b8]">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Applications + kurucular */}
      <section className="mx-auto grid max-w-[1200px] items-center gap-14 px-6 py-28 md:grid-cols-2 md:px-10 md:py-40">
        <Reveal>
          <div className="overflow-hidden border p-2" style={{ borderColor: "rgba(201,166,70,.45)" }}>
            <Image src="/work/cultivated/cover.webp" alt="The Cultivated Voice Method — Zach & Andre de Beer" width={1400} height={933} sizes="(min-width: 768px) 45vw, 100vw" className="h-auto w-full" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className={eyebrow} style={{ color: GOLD }}>
            Applications <GoldRule />
          </p>
          <ul className="mt-8">
            {APPS.map((a, i) => (
              <li key={a} className="flex items-baseline gap-6 border-t py-6 text-[clamp(26px,2.6vw,38px)]" style={{ borderColor: "rgba(201,166,70,.3)", fontFamily: "var(--cv-serif)" }}>
                <span className="text-[14px] font-semibold tracking-[0.2em]" style={{ color: GOLD, fontFamily: "var(--cv-sans)" }}>
                  0{i + 1}
                </span>
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Ekranlar */}
      <section className="mx-auto max-w-[1200px] px-6 pb-28 md:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          {SCREENS.map((s, i) => (
            <Reveal key={s.src} delay={(i % 2) * 0.08} className={i === 0 ? "md:col-span-2" : ""}>
              <Browser src={s.src} alt={s.label} url="cultivatedvoicesystem.com" dark radius={4} />
              <p className={`${eyebrow} mt-4 text-[#94a3b8]`}>{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <NextCase lang={lang} current="cultivated-voice-system" />
    </div>
  );
}
