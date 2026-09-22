"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Palette,
  Zap,
  Globe,
  Layers,
  Monitor,
  Smartphone,
  CheckCircle2,
  Sliders,
  Sparkles,
  Layers3,
  Terminal,
  TrendingUp,
  Activity,
} from "lucide-react";
import Card from "@/components/ui/Card";

import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.1,
      ease: "easeOut" as const,
    },
  }),
};

const services = [
  {
    icon: Code2,
    label: "Yazılım Geliştirme",
    desc: "Web, mobil ve backend sistemleri için modern teknolojilerle ölçeklenebilir, hızlı yazılım çözümleri.",
    href: "/cozumler/yazilim",
    color: "#1877f2",
    bg: "rgba(24, 119, 242, 0.08)",
    tag: "Popüler",
  },
  {
    icon: Palette,
    label: "Grafik Tasarım",
    desc: "Marka kimliği, UI/UX ve vektörel illüstrasyon hizmetleriyle markanızı rakiplerinizden ayırt edin.",
    href: "/cozumler/tasarim",
    color: "#e91e8c",
    bg: "rgba(233, 30, 140, 0.08)",
    tag: "Studio",
  },
];

const stats = [
  { value: "50+", label: "Tamamlanan Proje" },
  { value: "30+", label: "Mutlu Müşteri" },
  { value: "3+", label: "Yıllık Deneyim" },
  { value: "99%", label: "Müşteri Memnuniyeti" },
];

const techStack = [
  { name: "Next.js", type: "Frontend", color: "#1877f2" },
  { name: "TypeScript", type: "Dil", color: "#007acc" },
  { name: "React Native", type: "Mobil", color: "#45b7d1" },
  { name: "Node.js", type: "Backend", color: "#5ea24c" },
  { name: "PostgreSQL", type: "Database", color: "#336791" },
  { name: "Figma", type: "Tasarım", color: "#e91e8c" },
  { name: "Tailwind CSS", type: "Styling", color: "#38b2ac" },
];

const features = [
  { icon: Zap, text: "Hızlı geliştirme süreçleri, zamanında teslimat" },
  { icon: Globe, text: "Küresel standartlarda yazılım mimarisi" },
  { icon: Layers, text: "Tasarım ve geliştirme tek elden" },
  { icon: Monitor, text: "Responsive, modern arayüz tasarımları" },
  { icon: Smartphone, text: "iOS & Android mobil uygulama geliştirme" },
  { icon: CheckCircle2, text: "Sürekli destek ve bakım hizmeti" },
];

const CHART_DATA = [
  { month: "Başlangıç", traffic: "+0%", conversion: "1.2%", speed: "3.4s", cost: "Taban", yValue: 80, yClassic: 80 },
  { month: "2. Ay", traffic: "+65%", conversion: "2.4%", speed: "2.1s", cost: "%15 Tasarruf", yValue: 70, yClassic: 78 },
  { month: "4. Ay", traffic: "+180%", conversion: "3.9%", speed: "1.4s", cost: "%30 Tasarruf", yValue: 55, yClassic: 75 },
  { month: "6. Ay", traffic: "+310%", conversion: "5.2%", speed: "0.9s", cost: "%45 Tasarruf", yValue: 38, yClassic: 74 },
  { month: "8. Ay", traffic: "+460%", conversion: "6.8%", speed: "0.6s", cost: "%55 Tasarruf", yValue: 24, yClassic: 72 },
  { month: "10. Ay", traffic: "+610%", conversion: "7.9%", speed: "0.4s", cost: "%60 Tasarruf", yValue: 15, yClassic: 71 },
  { month: "12. Ay", traffic: "+780%", conversion: "9.4%", speed: "0.3s", cost: "%65 Tasarruf", yValue: 5, yClassic: 70 },
];

export default function HomePage() {
  // ── 1. INTERACTIVE GRAPH STATES ──
  const [activeIndex, setActiveIndex] = useState(4); // Default to 8. Ay (index 4)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <div className="flex flex-col bg-white text-[#1c1e21]">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-between px-6 pt-32 pb-0 overflow-hidden bg-white">
        {/* Interactive glowing particles */}
        <div className="absolute inset-0 line-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-brand opacity-[0.03] blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center flex-1 flex flex-col justify-center">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#e4e6ea] bg-[#f0f2f5] text-[#65676b] text-xs font-semibold tracking-wide mb-6 mx-auto select-none"
          >
            <Sparkles size={12} className="text-brand animate-pulse" />
            Yazılım & Grafik Tasarım Stüdyosu
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight text-[#1c1e21] leading-[1.05] mb-6 max-w-4xl mx-auto"
          >
            Markanızı tasarlıyor ve inşa ediyoruz.
          </motion.h1>

          {/* Sub */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg text-[#65676b] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Premium yazılım geliştirme ve grafik tasarım hizmetleriyle
            işletmenizi bir üst seviyeye taşıyoruz.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center mb-16"
          >
            <Link
              href="/cozumler"
              className="px-8 py-4 bg-[#1877f2] hover:bg-[#0d5ac8] text-white font-semibold rounded-full transition-all duration-300 active:scale-[0.97] text-base shadow-sm hover:shadow-md flex items-center gap-2 tracking-wide"
            >
              Projeleri Keşfet
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Overlapping Mobile Mockups container rising from the bottom */}
        <div className="relative w-full max-w-5xl mx-auto h-[320px] sm:h-[420px] md:h-[480px] flex items-end justify-center overflow-visible z-20">
          
          {/* Left Phone: Yazılım (Software) */}
          <motion.div
            initial={{ opacity: 0, y: 150, rotate: -12 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            whileHover={{ y: -15 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25,
              opacity: { duration: 0.8, delay: 0.2, ease: "easeOut" },
              rotate: { duration: 0.8, delay: 0.2, ease: "easeOut" }
            }}
            className="absolute left-[6%] sm:left-[15%] md:left-[18%] bottom-[-50px] sm:bottom-[-85px] md:bottom-[-115px] w-[220px] sm:w-[280px] md:w-[310px] h-[400px] sm:h-[490px] md:h-[550px] rounded-[40px] bg-[#09090b] p-[5px] ring-1 ring-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] border border-[#27272a] cursor-default transition-shadow duration-500"
          >
            <div className="w-full h-full bg-[#0a0b0d] rounded-[35px] overflow-hidden relative border border-white/5">
              {/* Dynamic Island */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20 border border-white/10" />
              
              {/* Screen Image */}
              <img 
                src="/images/software_concept.png" 
                alt="Yazılım Altyapısı" 
                className="w-full h-full object-cover select-none"
              />
            </div>
          </motion.div>

          {/* Center Phone: Yazılım + Tasarım (Combined) */}
          <motion.div
            initial={{ opacity: 0, y: 120, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            whileHover={{ y: -25 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25,
              opacity: { duration: 0.8, delay: 0.1, ease: "easeOut" },
              rotate: { duration: 0.8, delay: 0.1, ease: "easeOut" }
            }}
            className="absolute bottom-[-50px] sm:bottom-[-85px] md:bottom-[-115px] w-[230px] sm:w-[295px] md:w-[325px] h-[420px] sm:h-[510px] md:h-[570px] rounded-[44px] bg-[#09090b] p-[6px] ring-1 ring-white/15 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] border border-[#27272a] cursor-default transition-shadow duration-500 z-30"
          >
            <div className="w-full h-full bg-[#0a0b0d] rounded-[38px] overflow-hidden relative border border-white/5">
              {/* Dynamic Island */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20 border border-white/10" />

              {/* Screen Image */}
              <img 
                src="/images/software_design_concept.png" 
                alt="Yazılım ve Tasarım Çözümleri" 
                className="w-full h-full object-cover select-none"
              />
            </div>
          </motion.div>

          {/* Right Phone: Tasarım (Design) */}
          <motion.div
            initial={{ opacity: 0, y: 150, rotate: 12 }}
            animate={{ opacity: 1, y: 0, rotate: 6 }}
            whileHover={{ y: -15 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25,
              opacity: { duration: 0.8, delay: 0.3, ease: "easeOut" },
              rotate: { duration: 0.8, delay: 0.3, ease: "easeOut" }
            }}
            className="absolute right-[6%] sm:right-[15%] md:right-[18%] bottom-[-50px] sm:bottom-[-85px] md:bottom-[-115px] w-[220px] sm:w-[280px] md:w-[310px] h-[400px] sm:h-[490px] md:h-[550px] rounded-[40px] bg-[#09090b] p-[5px] ring-1 ring-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] border border-[#27272a] cursor-default transition-shadow duration-500 z-10"
          >
            <div className="w-full h-full bg-[#0a0b0d] rounded-[35px] overflow-hidden relative border border-white/5">
              {/* Dynamic Island */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20 border border-white/10" />

              {/* Screen Image */}
              <img 
                src="/images/design_concept.png" 
                alt="Tasarım Çözümleri" 
                className="w-full h-full object-cover select-none"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative bg-[#f8f9fa] border border-[#e4e6ea] rounded-3xl p-8 sm:p-10 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]">
            
            {/* Ambient background glow inside stats box */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] rounded-full bg-brand/5 blur-[60px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                  className="text-center relative md:px-4"
                >
                  <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#65676b] mt-2.5">
                    {stat.label}
                  </div>

                  {/* Vertical dividers for desktop */}
                  {i < stats.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-[#e4e6ea]" />
                  )}
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1877f2] mb-3 block">
              Hizmetlerimiz
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1e21] tracking-tight mb-4">
              Tek çatı altında her şey.
            </h2>
            <p className="text-[#65676b] text-lg max-w-xl mx-auto">
              Yazılımdan tasarıma tüm süreçlerde yanınızdayız.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Card 1: Yazılım Geliştirme (Light Card with Centered Bottom Image) */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.55, ease: "easeOut" }}
              className="h-full"
            >
              <div className="group h-full min-h-[500px] bg-[#f5f5f7] rounded-[32px] overflow-hidden flex flex-col justify-between p-8 sm:p-10 transition-all duration-300 hover:shadow-xl relative">
                <Link href="/cozumler/yazilim" className="flex flex-col h-full justify-between">
                  <div className="space-y-3">
                    <span className="text-[11px] font-bold tracking-widest text-[#65676b] uppercase font-mono block">
                      YAZILIM
                    </span>
                    <h3 className="text-3xl font-extrabold text-[#1c1e21] tracking-tight leading-tight">
                      Yazılım Geliştirme.
                    </h3>
                    <p className="text-[#65676b] text-[15px] leading-relaxed max-w-sm">
                      Modern web, mobil ve bulut mimarileriyle ölçeklenebilir, yüksek performanslı altyapılar inşa ediyoruz.
                    </p>
                  </div>

                  {/* Centered Bottom Image Showcase */}
                  <div className="w-full h-[220px] flex items-end justify-center mt-6 relative overflow-visible select-none">
                    <img 
                      src="/images/services_software.png" 
                      alt="Yazılım Geliştirme Altyapısı" 
                      className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-103"
                    />
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-semibold text-[#1877f2] mt-4">
                    Projeleri Keşfet <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-200" />
                  </div>
                </Link>
              </div>
            </motion.div>

            {/* Card 2: Grafik Tasarım (Dark Full-bleed Card with White Text Overlays) */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.55, ease: "easeOut" }}
              className="h-full"
            >
              <div className="group h-full min-h-[500px] bg-black rounded-[32px] overflow-hidden flex flex-col justify-between p-8 sm:p-10 transition-all duration-300 hover:shadow-xl relative">
                
                {/* Full-bleed background image with dark overlay */}
                <div className="absolute inset-0 z-0 select-none">
                  <img 
                    src="/images/services_design.png" 
                    alt="Kreatif Grafik Tasarım" 
                    className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />
                </div>

                <Link href="/cozumler/tasarim" className="relative z-10 flex flex-col h-full justify-between">
                  <div className="space-y-3">
                    <span className="text-[11px] font-bold tracking-widest text-white/50 uppercase font-mono block">
                      TASARIM
                    </span>
                    <h3 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
                      Grafik Tasarım.
                    </h3>
                    <p className="text-white/75 text-[15px] leading-relaxed max-w-sm">
                      Marka kimliği, modern UI/UX ve etkileyici görsel tasarımlarla dijital dünyada fark yaratın.
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-semibold text-white mt-auto pt-32">
                    Stüdyoyu İnceleyin <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-200" />
                  </div>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── WHY US & GOOGLE LABS STYLE EXPERIMENTS SHOWCASE ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header (Google Labs style minimalist header) */}
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1877f2]/8 text-[#1877f2] rounded-full text-[11px] font-bold tracking-widest uppercase mb-4">
              <Sparkles size={12} className="animate-pulse" />
              <span>Marki Labs. Oyun Alanı</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1c1e21] tracking-tight mb-5 leading-tight">
              Fikirlerin Teknolojiye Dönüştüğü Deneyler.
            </h2>
            <p className="text-[#65676b] text-lg leading-relaxed">
              Deneysel arayüzlerimiz ve stüdyomuzun yenilikçi yaklaşımını test edebileceğiniz interaktif simülatörler.
            </p>
          </div>

          {/* Grid of 3 Interactive Experiment Cards (Apple Bento style) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Experiment 01: Next.js Edge Runtime Speed (Light Card) */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.55, ease: "easeOut" }}
              className="h-full"
            >
              <div className="group bg-[#f5f5f7] rounded-[32px] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-xl relative overflow-hidden min-h-[500px] h-full">
                <div className="space-y-3">
                  <span className="text-[11px] font-bold tracking-widest text-[#65676b] uppercase font-mono block">
                    DENEY 01 / HIZ
                  </span>
                  <h3 className="text-3xl font-extrabold text-[#1c1e21] tracking-tight leading-tight">
                    Next.js Edge Runtime.
                  </h3>
                  <p className="text-[#65676b] text-[15px] leading-relaxed max-w-xs">
                    Kenar sunucu (Edge) yönlendirme hızıyla, milisaniyeler süren tepki sürelerine sahip ultra hızlı web deneyimleri.
                  </p>
                </div>

                {/* Graphic sitting flat at the bottom */}
                <div className="w-full h-[240px] flex items-end justify-center mt-6 relative overflow-visible select-none">
                  <img 
                    src="/images/experiment_speed.png" 
                    alt="Next.js Edge Speed" 
                    className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </motion.div>

            {/* Experiment 02: Generative Design Grid UI Layout (Light Card) */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.55, ease: "easeOut" }}
              className="h-full"
            >
              <div className="group bg-[#f5f5f7] rounded-[32px] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-xl relative overflow-hidden min-h-[500px] h-full">
                <div className="space-y-3">
                  <span className="text-[11px] font-bold tracking-widest text-[#65676b] uppercase font-mono block">
                    DENEY 02 / ARAYÜZ
                  </span>
                  <h3 className="text-3xl font-extrabold text-[#1c1e21] tracking-tight leading-tight">
                    Generative Layout Grid.
                  </h3>
                  <p className="text-[#65676b] text-[15px] leading-relaxed max-w-xs">
                    Dinamik ızgara yapıları ve her ekran çözünürlüğüne kusursuz uyum sağlayan akıllı, modüler tasarımlar.
                  </p>
                </div>

                {/* Graphic sitting flat at the bottom */}
                <div className="w-full h-[240px] flex items-end justify-center mt-6 relative overflow-visible select-none">
                  <img 
                    src="/images/experiment_layout.png" 
                    alt="Generative Layout Grid" 
                    className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </motion.div>

            {/* Experiment 03: Live Server Console Deployment (Dark Card) */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.55, ease: "easeOut" }}
              className="h-full"
            >
              <div className="group bg-black text-white rounded-[32px] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-xl relative overflow-hidden min-h-[500px] h-full">
                
                {/* Full-bleed background image with dark overlay */}
                <div className="absolute inset-0 z-0 select-none">
                  <img 
                    src="/images/experiment_deploy.png" 
                    alt="Automated Edge Deploy" 
                    className="w-full h-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/15" />
                </div>

                <div className="relative z-10 space-y-3">
                  <span className="text-[11px] font-bold tracking-widest text-white/50 uppercase font-mono block">
                    DENEY 03 / DAĞITIM
                  </span>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
                    Automated Edge Deploy.
                  </h3>
                  <p className="text-white/75 text-[15px] leading-relaxed max-w-xs">
                    Tek tıkla statik derleme ve sunucusuz bulut entegrasyonuyla global olarak yayına alınan ölçeklenebilir altyapılar.
                  </p>
                </div>

                {/* Bottom padding spacer to balance content */}
                <div className="h-[140px] relative z-10" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 3. PROJECT PROCESS SHOWCASE SECTION ── */}
      <section id="process" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1877f2] mb-3 block">
              İşleyişimiz
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1e21] tracking-tight mb-4">
              Fikirden Yayına Uçtan Uca Süreç.
            </h2>
            <p className="text-[#65676b] text-lg max-w-xl mx-auto">
              Karmaşık süreçleri basitleştiriyor, markanıza en yüksek küresel standartlarda dijital çözümler üretiyoruz.
            </p>
          </motion.div>

          {/* 4-Step Methodology Timeline Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {[
              {
                step: "01",
                title: "Keşif & Planlama",
                desc: "Projenizin hedeflerini analiz ediyor, teknik gereksinimleri belirliyor ve şeffaf bir yol haritası çıkartıyoruz.",
                icon: Sliders,
                color: "rgba(24, 119, 242, 0.08)",
                iconColor: "#1877f2"
              },
              {
                step: "02",
                title: "Özgün Tasarım (UI/UX)",
                desc: "Markanıza özel, kullanıcı deneyimi odaklı yaşayan bir tasarım sistemi (Design System) ve modern arayüzler geliştiriyoruz.",
                icon: Palette,
                color: "rgba(233, 30, 140, 0.08)",
                iconColor: "#e91e8c"
              },
              {
                step: "03",
                title: "Next-Gen Geliştirme",
                desc: "Next.js, modern backend ve API servisleri kullanarak hızlı, SEO dostu ve güvenli kod altyapısı yazıyoruz.",
                icon: Code2,
                color: "rgba(94, 162, 76, 0.08)",
                iconColor: "#5ea24c"
              },
              {
                step: "04",
                title: "Dağıtım & Optimizasyon",
                desc: "Uygulamanızı otomatik CI/CD süreçleriyle global cloud sunuculara yüklüyor, performans analizleri ve destek sunuyoruz.",
                icon: Activity,
                color: "rgba(168, 85, 247, 0.08)",
                iconColor: "#a855f7"
              }
            ].map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#f8f9fa] border border-[#e4e6ea] rounded-3xl p-6 relative overflow-hidden group hover:border-[#1877f2]/30 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Background Large Step Number */}
                <div className="absolute -top-3 -right-3 text-7xl font-extrabold text-black/[0.03] group-hover:text-black/[0.04] select-none font-mono transition-colors">
                  {phase.step}
                </div>

                <div className="space-y-5">
                  {/* Icon Circle */}
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: phase.color, color: phase.iconColor }}
                  >
                    <phase.icon size={20} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-[#1c1e21] group-hover:text-[#1877f2] transition-colors">
                      {phase.title}
                    </h3>
                    <p className="text-xs text-[#65676b] leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                </div>

                {/* Micro line indicator */}
                <div className="w-6 h-[2px] bg-[#e4e6ea] group-hover:w-full group-hover:bg-[#1877f2] transition-all duration-300 mt-6" />
              </motion.div>
            ))}
          </div>

          {/* Simple presentation CTA */}
          <div className="mt-14 text-center">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1877f2] hover:bg-[#0d5ac8] text-white font-bold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 text-xs uppercase tracking-wider"
            >
              Projenizi Başlatın
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 relative overflow-hidden bg-white">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#1877f2] opacity-[0.03] blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1c1e21] tracking-tight mb-6">
            Birlikte bir şeyler inşa edelim.
          </h2>
          <p className="text-[#65676b] text-lg mb-10 max-w-xl mx-auto">
            Projeniz için doğru ekiple tanışın. İlk görüşmemiz tamamen ücretsizdir.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/iletisim"
              className="flex items-center gap-2 px-7 py-3.5 bg-[#1877f2] hover:bg-[#0d5ac8] text-white font-semibold rounded-xl transition-all duration-200 active:scale-[0.98] text-base shadow-sm hover:shadow-md"
            >
              İletişime Geç
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/cozumler"
              className="flex items-center gap-2 px-7 py-3.5 border border-[#e4e6ea] hover:border-[#1877f2]/30 hover:bg-[#e7f0fd] text-[#1c1e21] hover:text-[#1877f2] font-semibold rounded-xl transition-all duration-200 active:scale-[0.98] text-base"
            >
              Çözümlerimizi İnceleyin
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
