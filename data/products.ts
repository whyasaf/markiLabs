export type Product = {
  id: string;
  name: string;
  category: "yazilim" | "tasarim";
  price: string;
  tagline: string;
  desc: string;
  image: string;
  buyUrl: string; // Shopier linki; "#" ise ürün henüz satışa bağlı değil
  features: { title: string; desc: string }[];
  specs: Record<string, string>;
};

export const PRODUCTS: Product[] = [
  {
    id: "web-tasarim",
    name: "Web Tasarım & Geliştirme",
    category: "yazilim",
    price: "15.000 TL",
    tagline: "Özel web tasarımı ve Next.js yazılımı",
    desc: "İşletmeniz için sıfırdan tasarlanan, hızlı, SEO uyumlu ve yönetim paneline sahip profesyonel web siteleri.",
    image: "/images/store_web_design.png",
    buyUrl: "#",
    features: [
      { title: "Hızlı yüklenme", desc: "Statik site oluşturma ve sunucusuz mimariyle hızlı sayfalar." },
      { title: "SEO yapısı", desc: "Site haritası, otomatik meta etiketleri ve şema işaretlemeleri hazır gelir." },
      { title: "İçerik yönetimi", desc: "Kod bilmeden içerikleri, blog yazılarını ve hizmetleri güncelleyin." },
    ],
    specs: {
      "Teknolojiler": "Next.js, React, Tailwind CSS, TypeScript",
      "Yönetim paneli": "Headless CMS, Keystatic veya WordPress entegrasyonu",
      "Teslim süresi": "14-21 iş günü",
    },
  },
  {
    id: "logo-tasarimi",
    name: "Kurumsal Logo Tasarımı",
    category: "tasarim",
    price: "3.500 TL",
    tagline: "Özgün logo ve amblem çalışması",
    desc: "Markanızın karakterini yansıtan, her mecrada kullanılabilen, vektörel formatlarda teslim edilen logo tasarımı.",
    image: "/images/store_logo_design.png",
    buyUrl: "#",
    features: [
      { title: "Özgün konseptler", desc: "Şablon kullanılmadan markanıza özel çizilen logo konseptleri." },
      { title: "Vektörel dosyalar", desc: "Büyütüldüğünde bozulmayan, baskıya uygun kaynak dosyalar." },
      { title: "Revizyon", desc: "Renk ve form değişiklikleri logonuz oturana kadar yapılır." },
    ],
    specs: {
      "Alternatif": "3 farklı konsept",
      "Formatlar": "AI, SVG, PDF, PNG, JPEG",
      "Tasarım süresi": "5-7 iş günü",
      "Kullanım alanları": "Tabela, kartvizit, web, sosyal medya ve baskılı yayınlar",
    },
  },
  {
    id: "kurumsal-kimlik",
    name: "Kurumsal Kimlik Paketi",
    category: "tasarim",
    price: "6.500 TL",
    tagline: "Bütünsel ve tutarlı marka imajı",
    desc: "Markanızın fiziksel ve dijital tüm platformlarda uyumlu görünmesini sağlayan kurumsal kimlik paketi.",
    image: "/images/store_corporate_identity.png",
    buyUrl: "#",
    features: [
      { title: "Eksiksiz set", desc: "Kartvizitten zarfa, resmi yazışma ve iletişim araçları birlikte tasarlanır." },
      { title: "Baskı hazırlığı", desc: "Tasarımlar matbaa standartlarına (CMYK, kesim payı) uygun teslim edilir." },
      { title: "Dijital uyum", desc: "E-posta imzası ve sosyal medya şablonlarıyla dijital kimlik tamamlanır." },
    ],
    specs: {
      "Kapsam": "Kartvizit, antetli kağıt, sunum dosyası, zarf, e-posta imzası, sosyal medya kapağı",
      "Formatlar": "Baskıya hazır PDF ve vektörel AI/PDF",
      "Tasarım süresi": "7-10 iş günü",
      "Kılavuz": "Renk kodları ve yazı tipi kurallarını içeren mini marka rehberi",
    },
  },
];

export const getProduct = (id: string) => PRODUCTS.find((p) => p.id === id);
