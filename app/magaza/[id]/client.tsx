"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Shield,
  Truck,
  RotateCcw,
  Sparkles,
  Zap,
  Volume2,
  Lock,
  Cpu,
  Monitor,
  Layout,
  Terminal,
  Play,
  VolumeX,
} from "lucide-react";

interface ProductDetail {
  id: string;
  name: string;
  category: "yazilim" | "tasarim";
  price: string;
  tagline: string;
  desc: string;
  image?: string;
  gradient?: string;
  buyUrl: string;
  specs: Record<string, string>;
  features: { title: string; desc: string }[];
}

const PRODUCTS_DETAIL_DATA: Record<string, ProductDetail> = {
  "web-tasarim": {
    id: "web-tasarim",
    name: "Web Tasarım & Geliştirme",
    category: "yazilim",
    price: "15.000 TL",
    tagline: "Ultra Hızlı Next.js Web Siteleri",
    desc: "İşletmeniz için tamamen sıfırdan tasarlanan, yüksek hızlı, SEO uyumlu ve kullanıcı dostu yönetim paneline sahip profesyonel web siteleri. Next.js altyapısı sayesinde web siteniz milisaniyeler içinde yüklenir.",
    image: "/images/store_web_design.png",
    buyUrl: "#",
    specs: {
      "Kullanılan Teknolojiler": "Next.js 15, React 19, Tailwind CSS, TypeScript",
      "Performans Skoru": "Lighthouse Desktop & Mobile %100 Uyumlu",
      "Yönetim Paneli": "Headless CMS, Keystatic veya WordPress entegrasyonu",
      "Teslim Süresi": "14-21 İş Günü",
      "Teknik Destek": "1 Yıl Boyunca Ücretsiz Bakım ve Güncelleme Garantisi",
    },
    features: [
      { title: "Ultra Hızlı Yüklenme", desc: "Statik site oluşturma (SSG) ve sunucusuz mimariyle hız rekorları kıran sayfalar." },
      { title: "Gelişmiş SEO Yapısı", desc: "Site haritaları, otomatik meta etiketleri ve Google Schema şablonları tam entegre gelir." },
      { title: "Dinamik CMS Yönetimi", desc: "Kod bilginiz olmadan sitenizdeki tüm içerikleri, blog yazılarını ve hizmetleri güncelleyin." },
    ]
  },
  "logo-tasarimi": {
    id: "logo-tasarimi",
    name: "Kurumsal Logo Tasarımı",
    category: "tasarim",
    price: "3.500 TL",
    tagline: "Markanıza Özel Özgün Kimlik",
    desc: "Markanızın sektördeki duruşunu ve vizyonunu en sade şekilde yansıtan, profesyonel tasarımcılar tarafından çizilen özgün logo ve amblem çalışması.",
    image: "/images/store_logo_design.png",
    buyUrl: "#",
    specs: {
      "Alternatif Sayısı": "3 Farklı Konsept Alternatifi",
      "Formatlar": "Vektörel (AI, SVG, PDF) ve Görsel (PNG, JPEG) Kaynak Dosyalar",
      "Revizyon Hakkı": "Sınırsız Revizyon Desteği",
      "Tasarım Süresi": "5-7 İş Günü",
      "Kullanım Alanları": "Tabela, Kartvizit, Web, Sosyal Medya ve tüm baskılı yayınlar",
    },
    features: [
      { title: "Özgün ve Tescillenebilir", desc: "Tamamen sıfırdan, şablon kullanmadan markanıza özel çizilen logo konseptleri." },
      { title: "Vektörel Kaynak Dosyalar", desc: "Büyütüldüğünde çözünürlüğü bozulmayan, baskıya tam uyumlu orijinal kaynak dosyaları." },
      { title: "Sınırsız Revizyon", desc: "Logonuz içinize tam olarak sinene kadar renk ve form değişiklikleri sınırsızca yapılır." },
    ]
  },
  "kurumsal-kimlik": {
    id: "kurumsal-kimlik",
    name: "Kurumsal Kimlik Tasarımı",
    category: "tasarim",
    price: "6.500 TL",
    tagline: "Bütünsel ve Tutarlı Marka İmajı",
    desc: "Markanızın tüm fiziksel ve dijital platformlarda profesyonel bir uyum içinde görünmesini sağlayan eksiksiz kurumsal kimlik tasarım paketi.",
    image: "/images/store_corporate_identity.png",
    buyUrl: "#",
    specs: {
      "Dahil Olan Materyaller": "Kartvizit, Antetli Kağıt, Sunum Dosyası, Diplomatik Zarf, E-Posta İmzası, Sosyal Medya Kapak Tasarımı",
      "Formatlar": "Baskıya Hazır PDF ve Vektörel AI/PDF Orijinal Tasarım Dosyaları",
      "Revizyon Desteği": "Sınırsız Revizyon ve İnce Ayar Desteği",
      "Tasarım Süresi": "7-10 İş Günü",
      "Kılavuz": "Renk Kodları ve Font Kurallarını İçeren Mini Brand Book",
    },
    features: [
      { title: "Eksiksiz Marka Seti", desc: "Kartvizitten zarfa, markanızın tüm resmi yazışma ve iletişim araçları bir arada tasarlanır." },
      { title: "Baskı Hazırlığı", desc: "Tüm tasarımlar matbaa standartlarına (CMYK, kesim payı) tam uyumlu olarak teslim edilir." },
      { title: "Dijital Entegrasyon", desc: "Modern e-posta imzası ve sosyal medya şablonlarıyla dijital kimliğiniz de tamamlanır." },
    ]
  }
};

export default function ProductDetailClient({ id }: { id: string }) {
  const product = PRODUCTS_DETAIL_DATA[id];
  const [activeTab, setActiveTab] = useState<"features" | "specs">("features");

  // ── Specific product interactive feature simulator states ──
  const [kbSoundCount, setKbSoundCount] = useState(0);
  const [ancMode, setAncMode] = useState<"on" | "off">("off");
  const [activePort, setActivePort] = useState<string | null>(null);
  const [speedMeter, setSpeedMeter] = useState(98);

  if (!product) {
    return (
      <div className="pt-24 pb-12 max-w-[800px] mx-auto text-center px-6">
        <h1 className="text-2xl font-bold">Ürün Bulunamadı</h1>
        <p className="text-[#65676b] mt-4">Aradığınız ürün mağazamızda mevcut değil.</p>
        <Link href="/magaza" className="text-[#1877f2] font-bold mt-6 inline-block">Mağazaya Geri Dön</Link>
      </div>
    );
  }

  // Simulator Click Handlers
  const playKeyboardSound = () => {
    setKbSoundCount(prev => prev + 1);
    // Simple browser-synthesized audio click sound (highly creative!)
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.type = "sine";
      // Generate key click acoustic tını
      oscillator.frequency.setValueAtTime(120, audioCtx.currentTime); // low pitch tok sound
      oscillator.frequency.exponentialRampToValueAtTime(30, audioCtx.currentTime + 0.08);

      gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.09);
    } catch (e) {
      // Audio context might be blocked or not supported
    }
  };

  return (
    <main className="pt-[80px] bg-[#fafafa] min-h-screen text-[#1c1e21] font-sans selection:bg-[#1877f2]/10">
      
      {/* Back button header navigation */}
      <section className="bg-white border-b border-[#e4e6ea]/50 py-4">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 flex items-center">
          <Link href="/magaza" className="inline-flex items-center gap-2 text-[14px] font-bold text-[#65676b] hover:text-[#1877f2] transition-colors group">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Mağazaya Geri Dön
          </Link>
        </div>
      </section>

      {/* Main product presentation block */}
      <section className="bg-white py-12 md:py-20 border-b border-[#e4e6ea]/30">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Product Showcase Visual */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center bg-[#f0f2f5]/30 rounded-3xl border border-[#e4e6ea]/40 relative overflow-hidden min-h-[350px] md:min-h-[480px]">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-101"
                />
              ) : (
                <div className={`w-full max-w-[420px] aspect-[4/3] rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center p-8 relative shadow-lg`}>
                  <div className="absolute inset-0 bg-black/5 rounded-2xl" />
                  <span className="text-white text-3xl font-black tracking-tight text-center relative z-10 drop-shadow-md">
                    {product.name}
                  </span>
                </div>
              )}
            </div>

            {/* Right Column: Key purchase panel */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-[#1877f2] font-bold text-xs tracking-[0.15em] uppercase mb-3 block">
                {product.category === "yazilim" ? "YAZILIM / LİSANS" : "TASARIM / DONANIM"}
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1c1e21] mb-2 leading-[1.1]">
                {product.name}
              </h1>
              <p className="text-lg text-[#65676b] font-medium mb-6">
                {product.tagline}
              </p>

              <div className="h-px bg-[#e4e6ea] mb-6" />

              <p className="text-[#65676b] text-[15.5px] leading-relaxed mb-8">
                {product.desc}
              </p>

              {/* Price and Action Button */}
              <div className="bg-[#f0f2f5]/45 rounded-2xl p-6 border border-[#e4e6ea]/60 max-w-[480px]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-[#65676b]">Fiyat</span>
                  <div className="text-right flex flex-col items-end">
                    <span className="text-3xl font-black text-[#1c1e21] tracking-tight leading-none">
                      {product.price}
                    </span>
                    <span className="text-[10px] text-[#65676b] font-bold mt-1.5 uppercase tracking-wide">
                      başlayan fiyatlarla
                    </span>
                  </div>
                </div>
                
                <a
                  href={product.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#1877f2] hover:bg-[#0d5ac8] text-white py-4 rounded-xl text-[15px] font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  Teklif Al
                </a>
                
                <div className="flex items-center justify-center gap-4 mt-4 text-[11px] text-[#65676b]">
                  <div className="flex items-center gap-1"><Shield size={12} /><span>%100 Özgün & Orijinal</span></div>
                  <div className="flex items-center gap-1"><Truck size={12} /><span>Zamanında Teslimat</span></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── INTERACTIVE PRODUCT WIDGETS SECTION (WOW FACTOR) ── */}
      <section className="py-16 md:py-24 border-b border-[#e4e6ea]/30">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="text-center max-w-[650px] mx-auto mb-16">
            <span className="text-[#1877f2] font-bold text-xs tracking-[0.2em] uppercase mb-4 block">DENEYİMİNİZİ SİMÜLE EDİN</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1c1e21]">Ürünü İnteraktif Olarak Deneyin</h2>
          </div>

          <div className="bg-white rounded-3xl border border-[#e4e6ea]/60 p-8 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.01)] max-w-[900px] mx-auto">
            
            {/* Interactive Web Tasarim Performance Speedometer Simulator */}
            {product.id === "web-tasarim" && (
              <div className="text-center">
                <p className="font-bold text-[18px] text-[#1c1e21] mb-2">Next.js Lighthouse Hız Testi</p>
                <p className="text-[13.5px] text-[#65676b] mb-6">Next.js altyapısı ile hazırlanan sitelerimiz standart sistemlere kıyasla gözle görülür derecede hızlı açılır.</p>
                
                <div className="flex justify-center gap-4 mb-8">
                  {[{ name: "Klasik Altyapılar", val: 54 }, { name: "Marki Next.js", val: 99 }].map((item) => (
                    <div key={item.name} className="bg-[#fafafa] border border-[#e4e6ea] p-6 rounded-2xl w-44">
                      <p className="text-xs text-[#65676b] mb-2">{item.name}</p>
                      <p className={`text-3xl font-black ${item.val > 90 ? "text-[#00a400]" : "text-[#d10000]"}`}>{item.val}/100</p>
                    </div>
                  ))}
                </div>

                <div className="w-full bg-[#f0f2f5] h-2 rounded-full overflow-hidden max-w-[400px] mx-auto">
                  <motion.div
                    className="bg-[#00a400] h-full"
                    initial={{ width: 0 }}
                    animate={{ width: "99%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            )}

            {/* Interactive Logo Color Background Toggler */}
            {product.id === "logo-tasarimi" && (
              <div className="text-center">
                <p className="font-bold text-[18px] text-[#1c1e21] mb-2">Kurumsal Logo Renk Simülasyonu</p>
                <p className="text-[13.5px] text-[#65676b] mb-6">Logonun farklı arka plan renkleri üzerindeki uyumunu test edin.</p>
                
                <div className="flex justify-center gap-4 mb-6">
                  {["#ffffff", "#0f172a", "#1877f2"].map((bgColor) => (
                    <button
                      key={bgColor}
                      onClick={() => setKbSoundCount(bgColor === "#ffffff" ? 0 : bgColor === "#0f172a" ? 1 : 2)}
                      className="px-4 py-2 border border-[#e4e6ea] rounded-xl text-xs font-bold bg-white hover:bg-[#f5f5f7] transition-all"
                    >
                      {bgColor === "#ffffff" ? "Açık Tema" : bgColor === "#0f172a" ? "Koyu Tema" : "Marka Mavisi"}
                    </button>
                  ))}
                </div>

                <div
                  className="w-full max-w-[400px] h-[150px] mx-auto rounded-2xl flex items-center justify-center border border-[#e4e6ea] transition-all duration-300"
                  style={{
                    backgroundColor: kbSoundCount === 0 ? "#ffffff" : kbSoundCount === 1 ? "#0f172a" : "#1877f2"
                  }}
                >
                  <span
                    className="text-2xl font-black tracking-tight transition-colors duration-300"
                    style={{
                      color: kbSoundCount === 0 ? "#1c1e21" : "#ffffff"
                    }}
                  >
                    Marki Labs.
                  </span>
                </div>
              </div>
            )}

            {/* Interactive Kurumsal Kimlik Checklist Simulator */}
            {product.id === "kurumsal-kimlik" && (
              <div>
                <p className="font-bold text-[18px] text-[#1c1e21] text-center mb-2">Kurumsal Paket Materyalleri</p>
                <p className="text-[13.5px] text-[#65676b] text-center mb-8">Kurumsal paket içeriğindeki tasarımları inceleyin.</p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { label: "Kartvizit Tasarımı", desc: "Ön/arka iki yüz baskıya hazır şablon" },
                    { label: "Antetli Kağıt", desc: "Word ve PDF olarak dijital entegrasyon" },
                    { label: "Diplomat Zarf", desc: "Kurumsal yazışmalar için pencereli zarf" },
                    { label: "Sunum Dosyası", desc: "Cepli ve kabartma lak detaylı dosya" },
                    { label: "E-Posta İmzası", desc: "Çalışanlar için dijital imza şablonu" },
                    { label: "Marka Kılavuzu", desc: "Renk kodları ve tipografi rehberi" }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-[#e4e6ea] bg-white text-left"
                    >
                      <div className="flex items-center gap-2">
                        <Check size={16} className="text-[#1877f2]" />
                        <p className="text-[13px] font-bold text-[#1c1e21]">{item.label}</p>
                      </div>
                      <p className="text-[11px] text-[#65676b] mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ── TECHNICAL SPECS & FEATURES DETAILS TABS ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1000px] mx-auto px-8">
          
          <div className="flex justify-center border-b border-[#e4e6ea] mb-10">
            <button
              onClick={() => setActiveTab("features")}
              className={`px-6 py-3 font-bold text-[15px] border-b-2 transition-all ${
                activeTab === "features" ? "border-[#1877f2] text-[#1877f2]" : "border-transparent text-[#65676b]"
              }`}
            >
              Özellikler
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={`px-6 py-3 font-bold text-[15px] border-b-2 transition-all ${
                activeTab === "specs" ? "border-[#1877f2] text-[#1877f2]" : "border-transparent text-[#65676b]"
              }`}
            >
              Teknik Ayrıntılar
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "features" ? (
              <motion.div
                key="features"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {product.features.map((feat, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-[#e4e6ea]/60 shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
                    <h3 className="font-bold text-[16px] text-[#1c1e21] mb-2">{feat.title}</h3>
                    <p className="text-[13.5px] text-[#65676b] leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="specs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl border border-[#e4e6ea]/60 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.01)]"
              >
                <div className="divide-y divide-[#f0f2f5]">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="grid grid-cols-1 md:grid-cols-3 p-5 text-[14px]">
                      <span className="font-bold text-[#1c1e21]">{key}</span>
                      <span className="md:col-span-2 text-[#65676b] mt-1 md:mt-0">{val}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

    </main>
  );
}
