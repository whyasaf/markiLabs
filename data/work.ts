import type { Locale } from "@/lib/i18n";

export type Work = {
  name: string;
  tags: Record<Locale, string[]>;
  video: { src: string; poster: string };
  href: string;
  /** Varsa projenin kendi temasında detay sayfası: /projeler/<slug> */
  slug?: string;
  status?: Record<Locale, string>;
};

const IN_DEVELOPMENT = { tr: "Geliştiriliyor", en: "In development" };

/** Müşteri işleri ve şablonlar. Videolar sitelerin kaydırma kayıtları (public/videos/work-*). */
export const WORK: Work[] = [
  {
    name: "Neon Oto Kurtarma",
    tags: { tr: ["Web sitesi", "Tasarım"], en: ["Website", "Design"] },
    video: { src: "/videos/work-neonotokurtarma.mp4", poster: "/videos/work-neonotokurtarma.jpg" },
    href: "https://neonotokurtarma.com",
    slug: "neon-oto-kurtarma",
  },
  {
    name: "The Cultivated Voice System",
    tags: { tr: ["Web sitesi", "Eğitim"], en: ["Website", "Education"] },
    video: { src: "/videos/work-cultivatedvoicesystem.mp4", poster: "/videos/work-cultivatedvoicesystem.jpg" },
    href: "https://cultivatedvoicesystem.com",
    slug: "cultivated-voice-system",
  },
  {
    name: "Plus Otoyol",
    tags: { tr: ["Ürün", "Ulaşım"], en: ["Product", "Transport"] },
    video: { src: "/videos/work-plusotoyol.mp4", poster: "/videos/work-plusotoyol.jpg" },
    href: "https://plusotoyol.com",
    slug: "plus-otoyol",
    status: IN_DEVELOPMENT,
  },
  {
    name: "whyasaf.com",
    tags: { tr: ["Web sitesi", "Portfolyo"], en: ["Website", "Portfolio"] },
    video: { src: "/videos/work-whyasaf.mp4", poster: "/videos/work-whyasaf.jpg" },
    href: "https://whyasaf.com",
    slug: "whyasaf",
  },
  {
    name: "Vitren Yapı",
    tags: { tr: ["Şablon", "Mimarlık"], en: ["Template", "Architecture"] },
    video: { src: "/videos/work-vitrenyapi.mp4", poster: "/videos/work-vitrenyapi.jpg" },
    href: "https://vitrenyapi.whyasaf.com",
    slug: "vitren-yapi",
  },
];
