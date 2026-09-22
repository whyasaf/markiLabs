"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Palette,
  Monitor,
  Fingerprint,
  PenTool,
  Film,
  Layers,
  Star,
} from "lucide-react";
import Card from "@/components/ui/Card";

const services = [
  {
    icon: Fingerprint,
    title: "Marka Kimliği & Logo",
    desc: "Benzersiz görsel kimlik sistemleri, logo tasarımı ve marka kılavuzları.",
  },
  {
    icon: Monitor,
    title: "UI/UX Tasarımı",
    desc: "Kullanıcı odaklı arayüz ve deneyim tasarımı. Figma ile prototipleme.",
  },
  {
    icon: Layers,
    title: "Design System",
    desc: "Tutarlı ve ölçeklenebilir tasarım sistemleri ve komponent kütüphaneleri.",
  },
  {
    icon: PenTool,
    title: "Vektörel İllüstrasyon",
    desc: "Özel karakterler, ikonlar ve illüstrasyonlarla markanıza özgün bir dil.",
  },
  {
    icon: Film,
    title: "Motion Design",
    desc: "Mikro-animasyonlar, intro videoları ve interaktif görsel içerikler.",
  },
  {
    icon: Star,
    title: "Sosyal Medya & Baskı",
    desc: "Dijital ve basılı materyaller için profesyonel grafik tasarım.",
  },
];

const testimonials = [
  {
    quote:
      "Marki Labs, marka kimliğimizi tamamen yeniledi. Artık rakiplerimizden kolayca ayrışıyoruz.",
    name: "Ahmet K.",
    role: "CEO, TechStart Ventures",
  },
  {
    quote:
      "UI/UX sürecindeki titizlikleri etkileyici. Kullanıcılarımız yeni arayüzü çok sevdi.",
    name: "Selin M.",
    role: "Product Manager, FinApp",
  },
  {
    quote:
      "Design system geliştirme konusunda gerçek uzmanlar. Kesinlikle tavsiye ediyorum.",
    name: "Burak D.",
    role: "CTO, E-Ticaret Platformu",
  },
];

export default function TasarimPageClient() {
  return (
    <div className="pt-32 pb-28 bg-white text-[#1c1e21]">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-pink-500 block mb-4">
            Tasarım Stüdyosu
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1c1e21] tracking-tight leading-[0.95] mb-6">
            Estetik ile
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              işlevi birleştiriyoruz.
            </span>
          </h1>
          <p className="text-[#65676b] text-xl max-w-2xl leading-relaxed mb-10">
            Her tasarımın arkasında bir strateji var. Görsel dilimiz; markanızın
            değerlerini, hedef kitlenizi ve vizyonunuzu yansıtır.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-md active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #ec4899, #f97316)",
              }}
            >
              Tasarım Projesi Başlat
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/cozumler"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#e4e6ea] hover:border-[#1877f2]/30 hover:bg-[#e7f0fd] text-[#1c1e21] hover:text-[#1877f2] font-semibold rounded-xl transition-all duration-200"
            >
              Tüm Çözümler
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1e21] mb-3">
            Tasarım Hizmetleri
          </h2>
          <p className="text-[#65676b]">
            Konseptten üretime, her adımda yanınızda.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Card glowColor="rgba(236,72,153,0.12)" className="h-full border border-[#e4e6ea]">
                <div className="p-7">
                  <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center mb-4">
                    <svc.icon size={18} className="text-pink-500" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1c1e21] mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-[#65676b] text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Design philosophy */}
      <div className="border-y border-[#e4e6ea] bg-[#f0f2f5] py-24 mb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-pink-500 block mb-4">
                Tasarım Felsefemiz
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1e21] mb-6">
                Az çoktur, netlik güçtür.
              </h2>
              <p className="text-[#65676b] leading-relaxed mb-6">
                Her piksel bir amaca hizmet eder. Gereksiz gürültüyü eleyerek
                kullanıcıların gerçekten önemli olana odaklanmasını sağlıyoruz.
              </p>
              <p className="text-[#65676b] leading-relaxed">
                Tasarımlarımız yalnızca güzel görünmez; dönüşüm odaklıdır,
                erişilebilirdir ve her cihazda kusursuz çalışır.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Minimal", color: "#ec4899" },
                { label: "Tipografi", color: "#f97316" },
                { label: "Kontrast", color: "#a855f7" },
                { label: "Hareket", color: "#1877f2" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="aspect-square rounded-2xl border border-[#e4e6ea] bg-white flex items-center justify-center card-shadow"
                  style={{ borderColor: `${item.color}30` }}
                >
                  <span
                    className="text-lg font-bold"
                    style={{ color: item.color }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1e21] mb-3">
            Müşterilerimiz ne diyor?
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card glowColor="rgba(236,72,153,0.1)" className="h-full border border-[#e4e6ea]">
                <div className="p-7 flex flex-col h-full bg-white rounded-2xl">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-[#65676b] text-sm leading-relaxed flex-1 mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-[#1c1e21] font-semibold text-sm">{t.name}</p>
                    <p className="text-[#bcc0c4] text-xs">{t.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
