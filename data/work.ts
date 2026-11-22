import type { Locale } from "@/lib/i18n";

type Video = { src: string; poster: string };

export type Work = {
  name: string;
  tags: Record<Locale, string[]>;
  /** Videolardaki yazılar dile göre (kaynaklar: assets/work-videos) */
  video: Record<Locale, Video>;
  href: string;
  /** Varsa projenin kendi temasında detay sayfası: /projeler/<slug> */
  slug?: string;
  status?: Record<Locale, string>;
};

const IN_DEVELOPMENT = { tr: "Geliştiriliyor", en: "In development" };

/** work-<ad>.mp4 / .jpg; İngilizce yazılı sürüm -en ekiyle. Yazıları zaten İngilizce olan video için en: false. */
const video = (name: string, en = true): Record<Locale, Video> => ({
  tr: { src: `/videos/work-${name}.mp4`, poster: `/videos/work-${name}.jpg` },
  en: en
    ? { src: `/videos/work-${name}-en.mp4`, poster: `/videos/work-${name}-en.jpg` }
    : { src: `/videos/work-${name}.mp4`, poster: `/videos/work-${name}.jpg` },
});

/** Müşteri işleri ve şablonlar. Videolar sitelerin kaydırma kayıtları (public/videos/work-*). */
export const WORK: Work[] = [
  {
    name: "Neon Oto Kurtarma",
    tags: { tr: ["Web sitesi", "Tasarım"], en: ["Website", "Design"] },
    video: video("neonotokurtarma"),
    href: "https://neonotokurtarma.com",
    slug: "neon-oto-kurtarma",
  },
  {
    name: "The Cultivated Voice System",
    tags: { tr: ["Web sitesi", "Eğitim"], en: ["Website", "Education"] },
    video: video("cultivatedvoicesystem", false),
    href: "https://cultivatedvoicesystem.com",
    slug: "cultivated-voice-system",
  },
  {
    name: "Plus Otoyol",
    tags: { tr: ["Ürün", "Ulaşım"], en: ["Product", "Transport"] },
    video: video("plusotoyol"),
    href: "https://plusotoyol.com",
    slug: "plus-otoyol",
    status: IN_DEVELOPMENT,
  },
  {
    name: "whyasaf.com",
    tags: { tr: ["Web sitesi", "Portfolyo"], en: ["Website", "Portfolio"] },
    video: video("whyasaf"),
    href: "https://whyasaf.com",
    slug: "whyasaf",
  },
  {
    name: "Vitren Yapı",
    tags: { tr: ["Şablon", "Mimarlık"], en: ["Template", "Architecture"] },
    video: video("vitrenyapi"),
    href: "https://vitrenyapi.whyasaf.com",
    slug: "vitren-yapi",
  },
];

/** Proje sayfalarındaki büyük video: slug'a göre, dile göre */
export const workVideo = (slug: string, lang: Locale): Video => WORK.find((w) => w.slug === slug)!.video[lang];
