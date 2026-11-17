"use client";

import { useEffect, useState } from "react";
import { ArrowCircle } from "@/components/Arrow";
import type { Dict } from "@/lib/dictionaries/tr";
import { SITE } from "@/lib/site";

type CardsText = Dict["contact"];

/**
 * İletişim sayfasının altındaki doğrudan iletişim kartları. Kartın tamamı tıklanır (görünmez link kartı
 * kaplar); üzerine gelince ok dairesinden mavi dolgu büyüyüp kartı kaplar. E-posta kartında adresi
 * kopyalayan bir buton var: birçok bilgisayarda mailto linki hiçbir şey açmıyor.
 */
export default function ContactCards({ t }: { t: CardsText }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <Card
        label={t.email}
        value={SITE.email}
        valueId="contact-email-text"
        href={`mailto:${SITE.email}`}
        action={<CopyButton text={SITE.email} t={t} />}
        t={t}
      />
      <Card label="WhatsApp" value={SITE.whatsappLabel} href={SITE.whatsapp} external t={t} />
    </div>
  );
}

function Card({
  label,
  value,
  valueId,
  href,
  external,
  action,
  t,
}: {
  label: string;
  value: string;
  valueId?: string;
  href: string;
  external?: boolean;
  action?: React.ReactNode;
  t: CardsText;
}) {
  return (
    <div className="group relative isolate flex min-h-[220px] flex-col justify-between gap-10 overflow-hidden rounded-[24px] bg-white p-6 transition-colors duration-500 hover:text-white has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-blue md:min-h-[260px] md:p-8">
      {/* Mavi dolgu: ok dairesinin yerinden büyür */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-6 right-6 -z-10 h-14 w-14 rounded-full bg-blue transition-transform duration-700 ease-[cubic-bezier(.65,0,.35,1)] group-hover:scale-[30] md:bottom-8 md:right-8 md:h-16 md:w-16"
      />
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        aria-label={`${label}: ${value}${external ? ` (${t.newTab})` : ""}`}
        className="absolute inset-0 z-0 outline-none"
      />

      <div className="pointer-events-none relative flex items-center justify-between gap-4">
        <span className="label text-muted transition-colors duration-500 group-hover:text-white/75">{label}</span>
        {action && <span className="pointer-events-auto">{action}</span>}
      </div>

      <div className="pointer-events-none relative flex items-end justify-between gap-6">
        {/* Dar ekranda e-posta kelime ortasından değil @'den sonra bölünsün */}
        <span id={valueId} className="min-w-0 break-words text-[clamp(24px,2.7vw,42px)] font-medium leading-[1.1] tracking-[-0.035em]">
          {value.includes("@") ? (
            <>
              {value.split("@")[0]}@<wbr />
              {value.split("@")[1]}
            </>
          ) : (
            value
          )}
        </span>
        <ArrowCircle
          className={`h-14 w-14 bg-ink text-white transition-[background-color,color,transform] duration-500 group-hover:bg-white group-hover:text-blue md:h-16 md:w-16 ${
            external ? "-rotate-45 group-hover:rotate-0" : "group-hover:translate-x-1"
          }`}
        />
      </div>
    </div>
  );
}

function CopyButton({ text, t }: { text: string; t: CardsText }) {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      // Pano izni yoksa karttaki adresi seçili bırak, kullanıcı kendisi kopyalasın
      const sel = window.getSelection();
      const range = document.createRange();
      const node = document.getElementById("contact-email-text");
      if (sel && node) {
        range.selectNodeContents(node);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? t.copiedLabel : t.copyLabel}
      className="relative z-10 inline-flex h-9 items-center rounded-full border border-line px-4 text-[14px] font-medium text-ink transition-colors duration-500 hover:bg-ink hover:text-white group-hover:border-white/40 group-hover:text-white"
    >
      <span aria-live="polite">{copied ? t.copied : t.copy}</span>
    </button>
  );
}
