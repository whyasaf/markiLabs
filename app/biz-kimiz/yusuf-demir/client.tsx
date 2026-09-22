"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Palette, Sparkles, Heart, Globe, Mail } from "lucide-react";

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function YusufDemirClient() {
  const designStack = [
    { name: "Figma (UI/UX)", level: "Uzman" },
    { name: "Adobe Photoshop", level: "Uzman" },
    { name: "Adobe Illustrator", level: "Uzman" },
    { name: "Blender (3D Modeling)", level: "İleri Düzey" },
    { name: "After Effects / Motion", level: "İleri Düzey" },
    { name: "Spline (Web 3D)", level: "İleri Düzey" },
    { name: "Framer (Prototyping)", level: "Uzman" },
    { name: "Design Systems", level: "Uzman" },
  ];

  const focusAreas = [
    {
      icon: Palette,
      title: "UI/UX & Kullanıcı Deneyimi",
      desc: "İnsan merkezli, sezgisel ve dönüşüm oranı yüksek arayüz tasarımları. Web ve mobil uygulamalarda benzersiz akışlar yaratma.",
    },
    {
      icon: Sparkles,
      title: "Marka Kimliği & Görsel Dil",
      desc: "Logodan renk paletine, tipografiden görsel varlıklara kadar markanın dijital ve fiziksel dünyadaki kimliğini tasarlama.",
    },
    {
      icon: Heart,
      title: "Motion & 3D Etkileşimler",
      desc: "Kullanıcı deneyimini güçlendiren mikro animasyonlar, geçiş efektleri ve web projelerine hayat veren 3 boyutlu etkileşimler.",
    },
  ];

  return (
    <div className="pt-32 pb-28 bg-[#f8f9fa] text-[#1c1e21] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/biz-kimiz"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#65676b] hover:text-[#1877f2] transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Biz Kimiz sayfasına geri dön
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Image & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left bg-white p-8 rounded-3xl border border-[#e4e6ea] card-shadow"
          >
            <div className="w-64 h-80 relative rounded-2xl overflow-hidden bg-[#f0f2f5] mb-6 shadow-sm">
              <img
                src="/images/founder_yusuf.png"
                alt="Yusuf Demir"
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="text-3xl font-extrabold tracking-tight text-[#1c1e21] mb-1">
              Yusuf Demir
            </h1>
            <p className="text-[#1877f2] font-semibold text-sm mb-6">
              Kurucu & Tasarım Direktörü
            </p>

            <div className="w-full border-t border-[#e4e6ea] my-4" />

            {/* Socials & Contact */}
            <div className="flex gap-4 mb-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#f0f2f5] hover:bg-[#1877f2]/10 hover:text-[#1877f2] flex items-center justify-center text-[#65676b] transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="mailto:yusuf@markilabs.com"
                className="w-10 h-10 rounded-xl bg-[#f0f2f5] hover:bg-[#1877f2]/10 hover:text-[#1877f2] flex items-center justify-center text-[#65676b] transition-colors"
                title="E-posta"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Personal Quote */}
            <div className="bg-[#e7f0fd]/40 p-5 rounded-2xl border-l-4 border-[#1877f2] text-left">
              <p className="text-xs italic text-[#4e5d78] leading-relaxed">
                &ldquo;Tasarım, bir şeyin nasıl göründüğü veya nasıl hissettirdiğiyle sınırlı değildir. Tasarım, o şeyin nasıl çalıştığıdır.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right Column: Bio & Core Info */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Bio */}
            <div className="bg-white p-8 rounded-3xl border border-[#e4e6ea] card-shadow">
              <h2 className="text-xl font-bold text-[#1c1e21] mb-4 flex items-center gap-2">
                <Globe size={18} className="text-[#1877f2]" />
                Hakkında
              </h2>
              <div className="space-y-4 text-[#65676b] text-sm leading-relaxed">
                <p>
                  Yusuf, güzel sanatlar ve dijital iletişim alanındaki birikimiyle grafik tasarımın tüm disiplinlerinde uzmanlaştı. Marki Labs bünyesinde, markaların dijital yüzünü oluşturmaktan ve estetik standartları korumaktan sorumludur.
                </p>
                <p>
                  Her tasarımın bir hikayesi olması gerektiğine inanarak; işlevselliği, modern ve çarpıcı bir estetikle harmanlar. Kullanıcı davranışlarını titizlikle analiz eder, renk teorileri ve tipografiyi en doğru kompozisyonlarda bir araya getirerek web sitelerini, logoları ve kurumsal kimlikleri unutulmaz birer deneyime dönüştürür.
                </p>
              </div>
            </div>

            {/* Core Focus Areas */}
            <div className="bg-white p-8 rounded-3xl border border-[#e4e6ea] card-shadow">
              <h2 className="text-xl font-bold text-[#1c1e21] mb-6">Uzmanlık Alanları</h2>
              <div className="space-y-6">
                {focusAreas.map((area, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#e7f0fd] flex items-center justify-center shrink-0 mt-0.5">
                      <area.icon size={18} className="text-[#1877f2]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1c1e21] text-sm mb-1">{area.title}</h3>
                      <p className="text-[#65676b] text-xs leading-relaxed">{area.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white p-8 rounded-3xl border border-[#e4e6ea] card-shadow">
              <h2 className="text-xl font-bold text-[#1c1e21] mb-6">Tasarım Araçları & Yetkinlikler</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {designStack.map((tech, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-xl border border-[#e4e6ea] bg-[#f8f9fa] hover:border-[#1877f2]/20 hover:bg-white transition-all duration-200"
                  >
                    <div className="font-semibold text-xs text-[#1c1e21]">{tech.name}</div>
                    <div className="text-[10px] text-[#1877f2] mt-0.5">{tech.level}</div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </div>
  );
}
