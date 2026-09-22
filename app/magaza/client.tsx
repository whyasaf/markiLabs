"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ShoppingBag,
  SlidersHorizontal,
  X,
  Plus,
  Minus,
  Check,
  ArrowRight,
  Shield,
  Truck,
  RotateCcw,
  Sparkles,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: "yazilim" | "tasarim";
  price: number;
  priceFormatted: string;
  image?: string;
  tagline: string;
  desc: string;
  features: string[];
  gradient?: string; // fallback if no image
  buyUrl: string; // Dynamic checkout link configurable by the user
}

const PRODUCTS: Product[] = [
  {
    id: "web-tasarim",
    name: "Web Tasarım & Geliştirme",
    category: "yazilim",
    price: 15000,
    priceFormatted: "15.000 TL",
    image: "/images/store_web_design.png",
    tagline: "Özel Web Tasarımı & Next.js Yazılımı",
    desc: "İşletmeniz için tamamen sıfırdan tasarlanan, yüksek hızlı, SEO uyumlu ve kullanıcı dostu yönetim paneline sahip profesyonel web siteleri.",
    features: [
      "Next.js & Tailwind CSS Altyapısı",
      "Google (SEO) & Mobil Uyumlu Yapı",
      "İçerik Yönetim Paneli (CMS) Entegrasyonu"
    ],
    buyUrl: "#"
  },
  {
    id: "logo-tasarimi",
    name: "Kurumsal Logo Tasarımı",
    category: "tasarim",
    price: 3500,
    priceFormatted: "3.500 TL",
    image: "/images/store_logo_design.png",
    tagline: "Özgün Logo ve Amblem Çalışması",
    desc: "Markanızın karakterini ve vizyonunu yansıtan, her mecrada yüksek çözünürlüklü ve vektörel formatlarda kullanılabilir kreatif logo tasarımları.",
    features: [
      "3 Farklı Tasarım Alternatifi",
      "Vektörel (PDF, SVG, AI) Kaynak Dosyalar",
      "Sınırsız Revizyon ve Revize Desteği"
    ],
    buyUrl: "#"
  },
  {
    id: "kurumsal-kimlik",
    name: "Kurumsal Kimlik Paketi",
    category: "tasarim",
    price: 6500,
    priceFormatted: "6.500 TL",
    image: "/images/store_corporate_identity.png",
    tagline: "Bütünsel Marka İmajı Tasarımı",
    desc: "Kartvizit, antetli kağıt, sunum dosyası, diplomatik zarf ve e-posta imzası gibi tüm kurumsal marka materyallerinizin profesyonel bir uyum içinde tasarlanması.",
    features: [
      "Kartvizit, Zarf ve Antetli Kağıt Tasarımı",
      "E-Posta İmzası & Sosyal Medya Kiti",
      "Baskıya Hazır Vektörel PDF Formatları"
    ],
    buyUrl: "#"
  }
];

export default function MagazaPageClient() {
  const [filter, setFilter] = useState<"hepsi" | "yazilim" | "tasarim">("hepsi");

  const filteredProducts = PRODUCTS.filter((p) => {
    if (filter === "hepsi") return true;
    return p.category === filter;
  });

  return (
    <main className="pt-[80px] bg-[#fafafa] min-h-screen text-[#1c1e21] font-sans selection:bg-[#1877f2]/10 relative overflow-x-hidden">

      {/* ── HEADER INTRO ── */}
      <section className="bg-white py-16 border-b border-[#e4e6ea]/50">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[#1877f2] font-bold text-xs tracking-[0.2em] uppercase mb-3 block">
                MARKI LABS STÜDYO VİTRİNİ
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1c1e21] mb-4">
                Hizmet Paketlerimiz
              </h1>
              <p className="text-[#65676b] text-[16px] max-w-[650px] leading-relaxed">
                Dijital dünyada markanızı öne çıkaracak profesyonel web geliştirme, logo tasarımı ve kurumsal kimlik paketlerimizi inceleyin.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 bg-[#f0f2f5] p-1.5 rounded-full self-start">
              <button
                onClick={() => setFilter("hepsi")}
                className={`px-5 py-2.5 rounded-full text-[13px] font-bold transition-all ${
                  filter === "hepsi" ? "bg-white text-[#1c1e21] shadow-sm" : "text-[#65676b] hover:text-[#1c1e21]"
                }`}
              >
                Tüm Ürünler
              </button>
              <button
                onClick={() => setFilter("yazilim")}
                className={`px-5 py-2.5 rounded-full text-[13px] font-bold transition-all ${
                  filter === "yazilim" ? "bg-white text-[#1c1e21] shadow-sm" : "text-[#65676b] hover:text-[#1c1e21]"
                }`}
              >
                Yazılım
              </button>
              <button
                onClick={() => setFilter("tasarim")}
                className={`px-5 py-2.5 rounded-full text-[13px] font-bold transition-all ${
                  filter === "tasarim" ? "bg-white text-[#1c1e21] shadow-sm" : "text-[#65676b] hover:text-[#1c1e21]"
                }`}
              >
                Tasarım
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS GRID SHOWCASE ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl border border-[#e4e6ea]/60 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
                >
                  {/* Product Image or Gradient placeholder */}
                  <Link href={`/magaza/${product.id}`} className="aspect-[4/3] bg-[#f0f2f5]/30 flex items-center justify-center relative overflow-hidden block">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
                      />
                    ) : (
                      <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center p-6 relative`}>
                        <div className="absolute inset-0 bg-black/5 rounded-2xl" />
                        <span className="text-white text-lg font-black tracking-tight text-center relative z-10 drop-shadow-sm">
                          {product.name}
                        </span>
                      </div>
                    )}
                    <span className="absolute top-4 left-4 bg-white/95 text-[#1c1e21] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm border border-[#e4e6ea]/60">
                      {product.category === "yazilim" ? "YAZILIM" : "TASARIM"}
                    </span>
                  </Link>

                  {/* Product Details */}
                  <div className="p-8 flex-1 flex flex-col">
                    <span className="text-[#65676b] text-xs font-semibold uppercase tracking-wider mb-1 block">
                      {product.tagline}
                    </span>
                    <Link href={`/magaza/${product.id}`} className="hover:underline">
                      <h3 className="text-xl font-bold text-[#1c1e21] mb-3 group-hover:text-[#1877f2] transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-[13.5px] text-[#65676b] leading-relaxed mb-6 flex-1">
                      {product.desc}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 mb-8 border-t border-[#f0f2f5] pt-5">
                      {product.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-[12.5px] text-[#1c1e21] font-medium">
                          <Check size={14} className="text-[#1877f2]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price and Checkout Button */}
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <p className="text-[10px] text-[#65676b] uppercase font-bold tracking-wider mb-0.5">Fiyat</p>
                        <div className="flex flex-col">
                          <p className="text-xl font-black text-[#1c1e21] tracking-tight leading-none">
                            {product.priceFormatted}
                          </p>
                          <span className="text-[10px] text-[#65676b] font-bold mt-1">
                            başlayan fiyatlarla
                          </span>
                        </div>
                      </div>
                      <a
                        href={product.buyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1877f2] hover:bg-[#0d5ac8] text-white px-6 py-3 rounded-xl text-[13.5px] font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95 animate-none"
                      >
                        Teklif Al
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

    </main>
  );
}
