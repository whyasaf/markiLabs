import type { CSSProperties } from "react";

/**
 * Sayfa açılış yazısı: her kelime kendi maskesinin içinden sırayla yükselir. CSS animasyonu olduğu için
 * JS beklemeden başlar ve her sayfa geçişinde baştan oynar (globals.css: .rise-mask / .rise).
 * "*kelime*" ile işaretlenenler mavi olur.
 */
export default function RiseWords({ text, delay = 0, step = 0.06 }: { text: string; delay?: number; step?: number }) {
  const words = text.split(/\s+/).filter(Boolean);
  return (
    <>
      {words.map((w, i) => {
        const accent = w.startsWith("*");
        return (
          <span key={i}>
            <span className="rise-mask">
              <span className={`rise${accent ? " text-blue" : ""}`} style={{ "--d": `${delay + i * step}s` } as CSSProperties}>
                {w.replace(/\*/g, "")}
              </span>
            </span>
            {i < words.length - 1 && " "}
          </span>
        );
      })}
    </>
  );
}
