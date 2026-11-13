import type { Metadata } from "next";
import Image from "next/image";
import { Caveat, Inter, Playfair_Display } from "next/font/google";
import Reveal from "@/components/Reveal";
import Browser from "@/components/case/Browser";
import NextCase from "@/components/case/NextCase";
import LazyVideo from "@/components/LazyVideo";

// whyasaf.com'un kimliği: Playfair başlık + Inter italik metin + Caveat el yazısı, siyah #09090b, camgöbeği vurgu.
const playfair = Playfair_Display({ subsets: ["latin", "latin-ext"], weight: "500", variable: "--w-serif" });
const inter = Inter({ subsets: ["latin", "latin-ext"], style: ["normal", "italic"], variable: "--w-sans" });
const caveat = Caveat({ subsets: ["latin", "latin-ext"], weight: "600", variable: "--w-hand" });

const CYAN = "#22d3ee";

export const metadata: Metadata = {
  title: "whyasaf.com",
  description: "Ömer Asaf Ak'ın kişisel portfolyo ve blog sitesi.",
};

const SECTIONS = [
  { k: "Hakkımda", d: "Eğitim geçmişi ve kullandığı teknolojiler." },
  { k: "Projeler", d: "Lecmic ve Marki Labs gibi ürünler, tarih aralıklarıyla." },
  { k: "Blog", d: "Blog yazıları." },
  { k: "Seçkiler", d: "Kitap, film ve şarkı önerileri." },
];

const SCREENS = [
  { src: "/work/whyasaf/screen-1.webp", label: "Eğitim ve projeler" },
  { src: "/work/whyasaf/screen-2.webp", label: "Marki Labs" },
  { src: "/work/whyasaf/screen-3.webp", label: "Seçkiler ve iletişim" },
];

export default function WhyasafPage() {
  return (
    <div
      className={`${playfair.variable} ${inter.variable} ${caveat.variable} bg-[#09090b] text-[#f4f4f5]`}
      style={{ fontFamily: "var(--w-sans)" }}
    >
      <style>{`body{background:#09090b}[data-site-logo]{filter:brightness(0) invert(1)}[data-site-cta]{background:#f4f4f5!important;color:#09090b!important}`}</style>

      {/* Giriş */}
      <section className="mx-auto max-w-[1000px] px-6 pb-24 pt-16 md:pt-24">
        <Reveal>
          <div className="flex items-center gap-6">
            <Image src="/work/whyasaf/avatar.webp" alt="Ömer Asaf Ak" width={320} height={426} className="h-24 w-24 rounded-full border-2 border-[#27272a] object-cover" priority />
            <Image src="/work/whyasaf/logo.png" alt="WA.com" width={800} height={333} className="h-12 w-auto invert" />
          </div>
          <p className="mt-12 -rotate-3 text-[clamp(40px,4.4vw,64px)]" style={{ fontFamily: "var(--w-hand)", color: CYAN }}>
            Merhaba, ben
          </p>
          <h1 className="mt-2 text-[clamp(64px,11vw,176px)] leading-[0.95] tracking-[-0.03em]" style={{ fontFamily: "var(--w-serif)" }}>
            Ömer Asaf Ak<span style={{ color: CYAN }}>.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-[760px] text-[clamp(20px,2vw,26px)] italic leading-[1.5] text-[#a1a1aa]">
            Yazılım Geliştirici &amp; Tasarımcı <span style={{ color: CYAN }}>{"//"}</span> Kodu tasarım estetiğiyle
            birleştiriyorum <span style={{ color: CYAN }}>{"//"}</span> Yapay zekâyı keşfedip dijital ürünler geliştiriyorum
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://whyasaf.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center rounded-full border border-[#27272a] bg-[#18181b] px-6 text-[15px] transition-colors hover:border-[#22d3ee]"
            >
              whyasaf.com ↗
            </a>
            <span className="text-[13px] uppercase tracking-[0.16em] text-[#71717a]">Web sitesi · Portfolyo</span>
          </div>
        </Reveal>
      </section>

      {/* Video */}
      <section className="px-3 md:px-8">
        <Reveal>
          <div className="mx-auto max-w-[1300px] overflow-hidden rounded-[28px] border border-[#27272a] bg-black p-3">
            <div className="aspect-[16/10] overflow-hidden rounded-[18px]">
              <LazyVideo src="/videos/work-whyasaf.mp4" poster="/videos/work-whyasaf.jpg" className="h-full w-full object-cover" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Alıntı */}
      <section className="mx-auto max-w-[1000px] px-6 py-28 text-center md:py-40">
        <Reveal>
          <p className="text-[clamp(28px,3.4vw,48px)] italic leading-[1.4] text-[#d4d4d8]">
            &ldquo;Benim için bir projenin sadece <span style={{ color: CYAN }}>&lsquo;çalışması&rsquo;</span> yetmez; sağlam bir
            temele ve kusursuz bir arayüze sahip olması gerekir.&rdquo;
          </p>
          <p className="mt-8 text-[clamp(28px,3vw,40px)]" style={{ fontFamily: "var(--w-hand)", color: CYAN }}>
            — whyasaf.com&apos;dan
          </p>
        </Reveal>
      </section>

      {/* Sitenin bölümleri: sekme görünümü */}
      <section className="mx-auto max-w-[1000px] px-6">
        <Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {SECTIONS.map((s, i) => (
              <div key={s.k} className="rounded-[20px] border border-[#27272a] bg-[#131316] p-7">
                <span className="text-[13px] text-[#71717a]">0{i + 1}</span>
                <h2 className="mt-3 text-[34px]" style={{ fontFamily: "var(--w-serif)" }}>
                  {s.k}
                </h2>
                <p className="mt-2 text-[15px] italic text-[#a1a1aa]">{s.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Ekranlar */}
      <section className="mx-auto max-w-[1200px] px-6 py-28 md:py-36">
        <div className="grid gap-6 md:grid-cols-2">
          {SCREENS.map((s, i) => (
            <Reveal key={s.src} delay={(i % 2) * 0.08} className={i === 0 ? "md:col-span-2" : ""}>
              <Browser src={s.src} alt={s.label} url="whyasaf.com" dark radius={18} />
              <p className="mt-4 text-[26px]" style={{ fontFamily: "var(--w-hand)", color: CYAN }}>
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <NextCase current="whyasaf" radius={28} />
    </div>
  );
}
