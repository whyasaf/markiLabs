export type Project = {
  slug: string;
  name: string;
  license: "Açık kaynak" | "Ücretsiz";
  tags: string[];
  headline: string;
  summary: string;
  audience: string;
  features: { title: string; desc: string }[];
  site: string;
  github: string;
  media: { loop: string; full: string; poster: string };
};

export const PROJECTS: Project[] = [
  {
    slug: "lecmic",
    name: "Lecmic",
    license: "Açık kaynak",
    tags: ["Açık kaynak", "Web uygulaması", "Yapay zekâ"],
    headline: "Dersi dinle. Yazısı ve çevirisi yanında.",
    summary:
      "Dersin anlık yazıya dökümünü ve çevirisini; notların, slaytların ve kelime listenle aynı ekranda gösteren ücretsiz bir web uygulaması.",
    audience: "Dersleri henüz öğrendiği bir dilde dinleyen öğrenciler için.",
    features: [
      { title: "Anlık döküm ve çeviri", desc: "Söylenen her cümle yazıya dökülür, çevirisi hemen altında görünür. Kayıtlar MP3 olarak indirilebilir." },
      { title: "Okuma", desc: "PDF ve Word belgelerini aç, işaretle; bir kelimenin üstüne gelince o cümledeki anlamını gör." },
      { title: "Notlar", desc: "Her ders ve belgenin kendi not sayfası var; notlar otomatik kaydedilir." },
      { title: "Çalışma araçları", desc: "Kaydedilen kelimeler aralıklı tekrar kartlarına dönüşür; bölüm bölüm özetler çıkar." },
    ],
    site: "https://lecmic.whyasaf.com",
    github: "https://github.com/whyasaf/lecmic",
    media: { loop: "/videos/lecmic-loop.mp4", full: "/videos/lecmic-tr-16x9.mp4", poster: "/videos/lecmic-poster.jpg" },
  },
  {
    slug: "codevocab",
    name: "CodeVocab",
    license: "Ücretsiz",
    tags: ["Ücretsiz", "Web uygulaması", "Yapay zekâ"],
    headline: "İngilizceni yaz. Mentorun düzeltsin.",
    summary:
      "İngilizce cümleni puanlayan, hatalarını Türkçe açıklayan ve doğrusunu gösteren yapay zekâ destekli bir mentor.",
    audience: "İngilizce öğrenen Türkçe konuşanlar için.",
    features: [
      { title: "Cümle analizi", desc: "100 üzerinden puan, kelime kelime düzeltmeler ve sohbetle sorabileceğin Türkçe açıklamalar." },
      { title: "Kelime kartları", desc: "Anlam, telaffuz, üç seviyede örnek cümle ve Türklerin sık yaptığı hatalar." },
      { title: "Günün kalıbı", desc: "Kısa bir dilbilgisi dersi ve beş soruluk test; puanın kaydedilir." },
      { title: "Cihazında kalır", desc: "Sohbetler, öğrenilen kelimeler ve puanlar yalnızca senin cihazında saklanır." },
    ],
    site: "https://codevocab.whyasaf.com",
    github: "https://github.com/whyasaf/CodeVocab",
    media: { loop: "/videos/codevocab-loop.mp4", full: "/videos/CodeVocab-Tanitim.mp4", poster: "/videos/codevocab-poster.jpg" },
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
