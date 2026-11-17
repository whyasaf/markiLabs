"use client";

import { useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import { animate, motion, useMotionValue } from "framer-motion";
import { en } from "@/lib/dictionaries/en";
import { tr } from "@/lib/dictionaries/tr";
import { localePath, type Locale } from "@/lib/i18n";

// Sekme adları, sayfaların başlıklarıyla aynı (sözlükteki meta.pages)
export const LEGAL_DOCS = [
  { href: "/kvkk", key: "kvkk" },
  { href: "/gizlilik", key: "privacy" },
  { href: "/kosullar", key: "terms" },
] as const;

// Her sekme 48px, aralarında 4px: seçili arka planın yeri JS'siz de doğru çizilsin diye sabit
const ROW = 52;
// Önceki seçili sekme: sayfa değişince her belge yeniden çizilir, arka plan buradan kayarak gelir
let lastIndex: number | null = null;

/**
 * Yasal belgeler arası sekmeler. Geçiş mavi ekransız (data-no-transition); seçili sekmenin beyaz arka planı
 * eskisinden yenisine kayar. Sayfa en üste atlamaz (scroll={false}); okurken aşağıdaysa metnin başına yumuşakça çıkar.
 */
export default function LegalTabs({ lang, current }: { lang: Locale; current: string }) {
  const index = Math.max(0, LEGAL_DOCS.findIndex((d) => d.href === current));
  const y = useMotionValue(0);

  useLayoutEffect(() => {
    if (lastIndex !== null && lastIndex !== index) {
      y.set((lastIndex - index) * ROW);
      animate(y, 0, { duration: 0.55, ease: [0.65, 0, 0.35, 1] });
    }
    lastIndex = index;
  }, [index, y]);

  useEffect(() => {
    // Belge değişti ve kullanıcı metnin başından aşağıdaysa, metnin başına yumuşakça çık
    const article = document.getElementById("legal-article");
    if (!article) return;
    const target = article.getBoundingClientRect().top + window.scrollY - 120;
    if (window.scrollY > target + 4) window.scrollTo({ top: target, behavior: "smooth" });
  }, [index]);

  return (
    <nav aria-label="Yasal belgeler" className="relative flex flex-col gap-1 md:sticky md:top-8 md:self-start">
      <motion.span
        aria-hidden
        style={{ y, top: index * ROW }}
        className="absolute inset-x-0 h-12 rounded-xl bg-white"
      />
      {LEGAL_DOCS.map((d) => (
        <Link
          key={d.href}
          href={localePath(lang, d.href)}
          scroll={false}
          aria-current={d.href === current ? "page" : undefined}
          data-no-transition
          className={`relative flex h-12 items-center rounded-xl px-4 text-[15px] transition-colors duration-500 ${
            d.href === current ? "font-medium text-ink" : "text-muted hover:text-ink"
          }`}
        >
          {(lang === "en" ? en : tr).meta.pages[d.key].title}
        </Link>
      ))}
    </nav>
  );
}
