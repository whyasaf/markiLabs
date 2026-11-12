import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Reveal from "@/components/Reveal";
import Browser from "@/components/case/Browser";
import NextCase from "@/components/case/NextCase";

// CodeVocab'ın kimliği: Geist + Geist Mono, siyah zemin, pembe #ff3fa4, mor-pembe ışıma.
const geist = Geist({ subsets: ["latin", "latin-ext"], variable: "--c-sans" });
const mono = Geist_Mono({ subsets: ["latin", "latin-ext"], variable: "--c-mono" });

const PINK = "#ff3fa4";

export const metadata: Metadata = {
  title: "CodeVocab",
  description: "İngilizce cümleni puanlayan, hatalarını Türkçe açıklayan yapay zekâ destekli mentor.",
};

const MODES = [
  { tag: "01 · ANALİZ", title: "Puanla, açıkla", desc: "100 üzerinden puan, kelime kelime düzeltmeler ve sohbetle sorabileceğin Türkçe açıklamalar." },
  { tag: "02 · KELİME", title: "Kelime kartları", desc: "Anlam, telaffuz, üç seviyede örnek cümle ve Türklerin sık yaptığı hatalar." },
  { tag: "03 · KALIP", title: "Her gün bir kalıp", desc: "Kısa bir dilbilgisi dersi ve beş soruluk test; puanın kaydedilir." },
];

const glow = {
  background: `radial-gradient(60% 50% at 70% 10%, rgba(255,63,164,.28), transparent 70%), radial-gradient(40% 40% at 10% 90%, rgba(244,114,182,.14), transparent 70%), #000`,
};

const mlabel = "font-[family-name:var(--c-mono)] text-[12px] tracking-[0.08em]";

export default function CodeVocabPage() {
  return (
    <div className={`${geist.variable} ${mono.variable} text-[#fafafa]`} style={{ fontFamily: "var(--c-sans)", background: "#000" }}>
      <style>{`body{background:#000}[data-site-logo]{filter:brightness(0) invert(1)}[data-site-cta]{background:#fff!important;color:#000!important}`}</style>

      {/* Giriş */}
      <section style={glow} className="px-5 pb-24 pt-16 md:px-8 md:pt-24">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <div className="flex items-center gap-4">
              <Image src="/work/codevocab/mark.png" alt="" width={324} height={288} className="h-12 w-auto" />
              <Image src="/work/codevocab/wordmark.png" alt="CodeVocab" width={901} height={149} className="h-9 w-auto" priority />
            </div>
            <h1 className="mt-14 max-w-[1050px] text-[clamp(52px,8vw,124px)] font-semibold leading-[0.98] tracking-[-0.045em]">
              İngilizceni yaz. <span style={{ color: PINK }}>Mentorun</span> düzeltsin.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-[560px] text-[19px] leading-[1.6] text-[#a1a1aa]">
              Cümleni puanlar, hatalarını Türkçe açıklar, doğrusunu gösterir. İngilizce öğrenen Türkçe konuşanlar için.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="https://codevocab.whyasaf.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center rounded-full px-6 text-[15px] font-medium text-black transition-opacity hover:opacity-90"
                style={{ background: PINK }}
              >
                CodeVocab&apos;ı aç ↗
              </a>
              <a
                href="/iletisim"
                className="inline-flex min-h-12 items-center rounded-full border border-[#27272a] px-6 text-[15px] font-medium hover:border-[#fafafa]"
              >
                Lisans için yazın
              </a>
              <span className={`${mlabel} ml-2 text-[#71717a]`}>LİSANSLI · WEB UYGULAMASI · YAPAY ZEKÂ</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Video */}
      <section className="px-2 md:px-3">
        <Reveal>
          <div className="overflow-hidden rounded-[20px] border border-[#27272a]">
            <video
              src="/videos/CodeVocab-Tanitim.mp4"
              poster="/work/codevocab/v5.webp"
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="aspect-video w-full bg-black"
              aria-label="CodeVocab tanıtım videosu"
            />
          </div>
        </Reveal>
      </section>

      {/* Üç mod */}
      <section className="mx-auto max-w-[1200px] px-5 py-28 md:px-8 md:py-40">
        <Reveal>
          <h2 className="text-center text-[clamp(44px,6vw,88px)] font-semibold tracking-[-0.045em]">
            Üç mod. <span style={{ color: PINK }}>Tek sohbet.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {MODES.map((m, i) => (
            <Reveal key={m.tag} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-4 rounded-[18px] border border-[#27272a] bg-[#09090a] p-7">
                <span className={mlabel} style={{ color: PINK }}>
                  {m.tag}
                </span>
                <h3 className="text-[26px] font-semibold tracking-[-0.02em]">{m.title}</h3>
                <p className="text-[15px] leading-[1.6] text-[#a1a1aa]">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Ekranlar */}
      <section className="mx-auto grid max-w-[1200px] gap-6 px-5 md:grid-cols-2 md:px-8">
        <Reveal>
          <Browser src="/work/codevocab/v15.webp" alt="Cümle analizi" url="codevocab.whyasaf.com" dark width={1600} height={900} />
          <p className={`${mlabel} mt-4 text-[#71717a]`}>CÜMLE ANALİZİ · PUAN VE DÜZELTME</p>
        </Reveal>
        <Reveal delay={0.08}>
          <Browser src="/work/codevocab/v21.webp" alt="Üç mod" url="codevocab.whyasaf.com" dark width={1600} height={900} />
          <p className={`${mlabel} mt-4 text-[#71717a]`}>PUANLA · KELİME KARTLARI · GÜNÜN KALIBI</p>
        </Reveal>
      </section>

      {/* Ücretsiz / kayıtsız / reklamsız */}
      <section className="px-5 py-28 text-center md:py-40">
        <Reveal>
          <p className="text-[clamp(44px,6.4vw,100px)] font-semibold leading-[1.02] tracking-[-0.045em]">
            <span className="text-[#52525b]">Ücretsiz.</span> <span className="text-[#a1a1aa]">Kayıtsız.</span>{" "}
            <span style={{ color: PINK }}>Reklamsız.</span>
          </p>
          <p className="mx-auto mt-8 max-w-[520px] text-[17px] leading-[1.6] text-[#a1a1aa]">
            Sohbetler, öğrenilen kelimeler ve puanlar yalnızca senin cihazında saklanır.
          </p>
        </Reveal>
      </section>

      <NextCase current="codevocab" radius={20} />
    </div>
  );
}
