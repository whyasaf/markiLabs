import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { CASES } from "@/data/cases";

/** Paylaşım önizlemesi (WhatsApp, LinkedIn, X...): 1200×630, sitenin fontu ve logosuyla. */
export const OG_SIZE = { width: 1200, height: 630 };

const root = process.cwd();
const asset = (p: string) => readFile(join(root, p));

async function fonts() {
  // Latin ve Latin-ext (ş, ğ, İ...) ayrı dosyalarda; aynı adla verilince eksik harf diğerinden alınır
  const [latin, ext] = await Promise.all([
    asset("assets/fonts/inter-tight-latin-500.woff"),
    asset("assets/fonts/inter-tight-latin-ext-500.woff"),
  ]);
  return [
    { name: "Inter Tight", data: latin, weight: 500 as const, style: "normal" as const },
    { name: "Inter Tight", data: ext, weight: 500 as const, style: "normal" as const },
  ];
}

async function logo(white: boolean) {
  const png = await asset(white ? "public/logo-white.png" : "public/logo.png");
  return `data:image/png;base64,${png.toString("base64")}`;
}

/** Arka plan koyu mu? (beyaz logo seçmek için) */
const isDark = (hex: string) => {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 128;
};

export async function homeOg() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#f0f1fa",
          color: "#2b2e3a",
          fontFamily: "Inter Tight",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={await logo(false)} width={255} height={40} alt="" />
        <div style={{ display: "flex", flexDirection: "column", fontSize: 96, lineHeight: 1, letterSpacing: -4.5 }}>
          <span>Fikirleri çalışan</span>
          <span style={{ color: "#1f45ff" }}>ürünlere dönüştürüyoruz.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#6b6f7d" }}>
          <span>Teknoloji stüdyosu</span>
          <span>markilabs.com</span>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: await fonts() },
  );
}

/** Proje sayfası önizlemesi: projenin kendi renkleri, adı ve Marki Labs logosu */
export async function caseOg(slug: string) {
  const c = CASES.find((x) => x.slug === slug)!;
  const dark = isDark(c.bg);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: c.bg,
          color: c.fg,
          fontFamily: "Inter Tight",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={await logo(dark)} width={204} height={32} alt="" />
        {/* Kelime kelime sarılır; vurgu noktası son kelimeye yapışık kalır (ad zaten noktalıysa eklenmez) */}
        <div style={{ display: "flex", flexWrap: "wrap", columnGap: "0.25em", fontSize: c.name.length > 18 ? 104 : 140, lineHeight: 1.02, letterSpacing: -5 }}>
          {c.name.split(" ").map((w, j, all) => (
            <div key={j} style={{ display: "flex" }}>
              <span>{w}</span>
              {j === all.length - 1 && !c.name.includes(".") && <span style={{ color: c.accent }}>.</span>}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, opacity: 0.6 }}>
          <span>Proje</span>
          <span>markilabs.com/projeler/{c.slug}</span>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: await fonts() },
  );
}
