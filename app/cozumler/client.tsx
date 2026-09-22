"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, Palette } from "lucide-react";

type IconKey = "Code2" | "Palette";

const iconMap: Record<IconKey, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  Code2,
  Palette,
};

interface Solution {
  iconKey: IconKey;
  label: string;
  tagline: string;
  desc: string;
  href: string;
  color: string;
  bg: string;
  features: string[];
  image: string;
}

export function SolutionsPageClient({ solutions }: { solutions: Solution[] }) {
  return (
    <div className="pt-28 pb-24 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#1877f2] block mb-4">
            Tüm Çözümler
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1c1e21] tracking-tight leading-[1.0] mb-5">
            Her ihtiyacınız için
            <br />
            <span className="gradient-text-brand">doğru çözüm.</span>
          </h1>
          <p className="text-[#65676b] text-xl max-w-2xl leading-relaxed">
            Yazılımdan tasarıma, tüm süreçlerde işletmenizi büyütüyoruz.
          </p>
        </motion.div>
      </div>

      {/* Solutions */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
        {solutions.map((svc, i) => {
          const Icon = iconMap[svc.iconKey];
          return (
            <motion.div
              key={svc.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.55,
                ease: "easeOut",
              }}
            >
              <div
                className="group relative overflow-hidden rounded-[32px] border border-[#e4e6ea] bg-[#f5f5f7] min-h-[460px] flex items-center p-8 lg:p-14 transition-all duration-500 hover:shadow-xl hover:border-[#d0d4dc]"
              >
                {/* Full-bleed Background Image with Light Gradient Overlay */}
                <div className="absolute inset-0 z-0 select-none overflow-hidden">
                  <img 
                    src={svc.image} 
                    alt={svc.label} 
                    className="w-full h-full object-cover opacity-[0.22] group-hover:scale-102 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f5f5f7] via-[#f5f5f7]/95 to-transparent" />
                </div>

                {/* 2-Column Content Overlay */}
                <div className="relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center text-[#1c1e21]">
                  {/* Left Column: Info */}
                  <div className="space-y-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-sm border border-[#e4e6ea]"
                    >
                      <Icon size={26} style={{ color: svc.color }} />
                    </div>
                    <div>
                      <span
                        className="text-xs font-bold uppercase tracking-widest block mb-2"
                        style={{ color: svc.color }}
                      >
                        {svc.tagline}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-[#1c1e21]">
                        {svc.label}
                      </h2>
                      <p className="text-[#65676b] text-[15px] leading-relaxed mb-6 max-w-md">
                        {svc.desc}
                      </p>
                      <Link
                        href={svc.href}
                        className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all duration-200 active:scale-[0.98] text-white text-sm shadow-sm"
                        style={{
                          background: svc.color,
                        }}
                      >
                        Detayları İncele
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Included Features */}
                  <div className="lg:border-l lg:border-[#e4e6ea] lg:pl-12 h-full flex flex-col justify-center py-2">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#9ea1a8] mb-5">
                      Neler dahil
                    </p>
                    <ul className="space-y-3.5">
                      {svc.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-3 text-[#1c1e21] text-[15px] font-semibold"
                        >
                          <CheckCircle2
                            size={17}
                            style={{ color: svc.color }}
                            className="shrink-0"
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-6 text-center mt-20"
      >
        <p className="text-[#bcc0c4] text-sm mb-3">
          Hangi çözümün size uygun olduğundan emin değil misiniz?
        </p>
        <h3 className="text-3xl font-bold text-[#1c1e21] mb-5">
          Ücretsiz danışmanlık alın.
        </h3>
        <Link
          href="/iletisim"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1877f2] hover:bg-[#0d5ac8] text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
        >
          İletişime Geç
          <ArrowRight size={17} />
        </Link>
      </motion.div>
    </div>
  );
}
