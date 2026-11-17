/** whyasaf.com sayfasının metinleri. Alıntılar whyasaf.com'daki ifadelerden. */
const tr = {
  hello: "Merhaba, ben",
  /** "//" ile ayrılan üç parça; ayraç camgöbeği */
  tagline: ["Yazılım Geliştirici & Tasarımcı", "Kodu tasarım estetiğiyle birleştiriyorum", "Yapay zekâyı keşfedip dijital ürünler geliştiriyorum"],
  tags: "Web sitesi · Portfolyo",
  /** "*...*" arası camgöbeği */
  quote: "Benim için bir projenin sadece *‘çalışması’* yetmez; sağlam bir temele ve kusursuz bir arayüze sahip olması gerekir.",
  quoteSource: "— whyasaf.com'dan",
  sections: [
    { k: "Hakkımda", d: "Eğitim geçmişi ve kullandığı teknolojiler." },
    { k: "Projeler", d: "Lecmic ve Marki Labs gibi ürünler, tarih aralıklarıyla." },
    { k: "Blog", d: "Blog yazıları." },
    { k: "Seçkiler", d: "Kitap, film ve şarkı önerileri." },
  ],
  /** Sıra, sayfadaki ekran görüntüleriyle aynı */
  screens: ["Eğitim ve projeler", "Marki Labs", "Seçkiler ve iletişim"],
};

const en: typeof tr = {
  hello: "Hi, I'm",
  tagline: ["Software Developer & Designer", "I combine code with design aesthetics", "I explore AI and build digital products"],
  tags: "Website · Portfolio",
  quote: "For me, it isn't enough for a project to just *‘work’*; it needs a solid foundation and a flawless interface.",
  quoteSource: "— from whyasaf.com",
  sections: [
    { k: "About", d: "Education and the technologies he works with." },
    { k: "Projects", d: "Products like Lecmic and Marki Labs, with dates." },
    { k: "Blog", d: "Blog posts." },
    { k: "Picks", d: "Book, film and song recommendations." },
  ],
  screens: ["Education and projects", "Marki Labs", "Picks and contact"],
};

export const COPY = { tr, en };
