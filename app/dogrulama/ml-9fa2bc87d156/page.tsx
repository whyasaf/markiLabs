"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Award, Globe, HeartHandshake, CheckCircle2, ChevronRight, Check } from "lucide-react";

export default function LicenseVerificationPage() {
  return (
    <div className="bg-[#fafafa] min-h-screen flex items-center justify-center pt-28 pb-20 selection:bg-[#1877f2]/10 font-sans">
      <div className="max-w-md w-full mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Logo at the top */}
          <div className="flex justify-center">
            <Link href="/" className="inline-block overflow-hidden h-14 flex items-center" aria-label="Marki Labs">
              <img
                src="/markilabs_bg.png"
                alt="Marki Labs"
                className="h-28 w-auto object-contain -my-6"
              />
            </Link>
          </div>

          {/* Verification Status */}
          <div className="space-y-3">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center relative">
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 rounded-full border border-emerald-500/20"
                />
                <ShieldCheck className="w-8 h-8 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-[#1c1e21]">
              Lisans Geçerli & Doğrulandı
            </h1>
            <p className="text-[#65676b] text-sm max-w-xs mx-auto leading-relaxed">
              Bu dijital proje, Marki Labs. standartlarında orijinal kaynak kodlarla geliştirilmiştir.
            </p>
          </div>

          {/* Verification Details */}
          <div className="bg-white border border-[#e4e6ea] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] text-left divide-y divide-[#f0f2f5]">
            <div className="flex justify-between items-center py-3">
              <span className="text-xs font-bold text-[#65676b] uppercase tracking-wider">Geliştirici</span>
              <span className="text-sm font-extrabold text-[#1c1e21]">Marki Labs.</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-xs font-bold text-[#65676b] uppercase tracking-wider">Altyapı</span>
              <span className="text-sm font-extrabold text-[#1c1e21]">Next.js & Tasarım</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-xs font-bold text-[#65676b] uppercase tracking-wider">Kaynak Kod</span>
              <span className="text-sm font-extrabold text-[#1c1e21]">%100 Özgün</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-xs font-bold text-[#65676b] uppercase tracking-wider">Destek</span>
              <span className="text-sm font-extrabold text-emerald-600">Aktif / Ömür Boyu</span>
            </div>
          </div>

          {/* Back Action Button */}
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1877f2] hover:bg-[#0d5ac8] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md"
            >
              Ana Sayfaya Dön
            </Link>
          </div>

        </motion.div>
        
      </div>
    </div>
  );
}
