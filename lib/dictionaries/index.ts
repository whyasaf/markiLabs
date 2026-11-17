import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, localePath, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { en } from "./en";
import { tr, type Dict } from "./tr";

export type { Dict };

const DICTS: Record<Locale, Dict> = { tr, en };

export const getDict = (lang: Locale): Dict => DICTS[lang];

/** Sayfa parametresindeki dili doğrular; desteklenmeyen dilde 404 */
export async function resolveLang(params: Promise<{ lang: string }>): Promise<Locale> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return lang;
}

/**
 * Bir sayfanın metadata'sı: başlık, açıklama, kanonik adres ve iki dil arasındaki bağlantılar (hreflang).
 * openGraph sayfada yeniden tanımlanınca layout'takinin yerine geçtiği için ortak alanlar da burada.
 */
export function pageMetadata(
  lang: Locale,
  internal: string,
  { title, description }: { title?: string; description: string },
): Metadata {
  const t = getDict(lang);
  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: localePath(lang, internal),
      languages: {
        tr: localePath("tr", internal),
        en: localePath("en", internal),
        "x-default": localePath("tr", internal),
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: t.meta.ogLocale,
      url: localePath(lang, internal),
      title: title ? `${title} | ${SITE.name}` : t.meta.siteTitle,
      description,
    },
  };
}
