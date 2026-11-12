export type Work = {
  name: string;
  desc: string;
  tags: string[];
  video: { src: string; poster: string };
  href: string;
  /** Varsa projenin kendi temasında detay sayfası: /projeler/<slug> */
  slug?: string;
  status?: "Geliştiriliyor";
};

/** Müşteri işleri ve şablonlar. Videolar sitelerin kaydırma kayıtları (public/videos/work-*). */
export const WORK: Work[] = [
  {
    name: "Neon Oto Kurtarma",
    desc: "İstanbul'da 7/24 çekici ve yol yardım hizmeti için web sitesi.",
    tags: ["Web sitesi", "Tasarım"],
    video: { src: "/videos/work-neonotokurtarma.mp4", poster: "/videos/work-neonotokurtarma.jpg" },
    href: "https://neonotokurtarma.com",
    slug: "neon-oto-kurtarma",
  },
  {
    name: "The Cultivated Voice System",
    desc: "İngilizce eğitim sistemi için çok sayfalı tanıtım sitesi.",
    tags: ["Web sitesi", "Eğitim"],
    video: { src: "/videos/work-cultivatedvoicesystem.mp4", poster: "/videos/work-cultivatedvoicesystem.jpg" },
    href: "https://cultivatedvoicesystem.com",
    slug: "cultivated-voice-system",
  },
  {
    name: "Plus Otoyol",
    desc: "Türkiye'nin ulaşım asistanı: rotalar, yollar, molalar ve yakıt.",
    tags: ["Ürün", "Ulaşım"],
    video: { src: "/videos/work-plusotoyol.mp4", poster: "/videos/work-plusotoyol.jpg" },
    href: "https://plusotoyol.com",
    slug: "plus-otoyol",
    status: "Geliştiriliyor",
  },
  {
    name: "whyasaf.com",
    desc: "Kişisel portfolyo ve blog sitesi.",
    tags: ["Web sitesi", "Portfolyo"],
    video: { src: "/videos/work-whyasaf.mp4", poster: "/videos/work-whyasaf.jpg" },
    href: "https://whyasaf.com",
    slug: "whyasaf",
  },
  {
    name: "Vitren Yapı",
    desc: "Mimarlık ve yapı firmaları için hazır web sitesi şablonu.",
    tags: ["Şablon", "Mimarlık"],
    video: { src: "/videos/work-vitrenyapi.mp4", poster: "/videos/work-vitrenyapi.jpg" },
    href: "https://vitrenyapi.whyasaf.com",
    slug: "vitren-yapi",
  },
];
