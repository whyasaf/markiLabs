"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Shield, 
  Mail, 
  Phone, 
  MessageSquare, 
  Clock, 
  Sparkles,
  Zap,
  FileText
} from "lucide-react";

export default function DestekPage() {
  return (
    <main className="pt-[110px] pb-24 bg-[#fafafa] text-[#1c1e21] font-sans selection:bg-[#1877f2]/10 min-h-screen relative overflow-hidden">
      
      {/* Background Ambient Glows & Grid Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#1877f2] opacity-[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#e91e8c] opacity-[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Back Link */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#65676b] hover:text-[#1877f2] transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
            Ana Sayfaya Dön
          </Link>
        </motion.div>

        {/* Page Title & Intro */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1877f2]/8 text-[#1877f2] rounded-full text-[11px] font-bold tracking-widest uppercase mb-4">
            <Sparkles size={12} className="text-[#1877f2]" />
            <span>Marki Destek Portalı</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1c1e21] leading-tight">
            Marki Labs. Yardım Merkezi
          </h1>
          <p className="text-[#65676b] text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Teknik sorunlarınızı çözüme kavuşturmak veya destek almak için aşağıdaki kanallarımızı kullanabilirsiniz.
          </p>
        </div>

        {/* 4-Card Help Channels Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          
          {/* Card 1: Create Ticket (Link to Dedicated Page) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="group p-8 bg-white border border-[#e4e6ea] rounded-[28px] shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:border-[#1877f2]/30 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <Link href="/destek-talebi" className="flex flex-col h-full justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#1877f2]/8 text-[#1877f2] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText size={22} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#1c1e21]">Destek Talebi Oluştur</h3>
                  <p className="text-sm text-[#65676b] leading-relaxed">
                    Teknik arızaları, web/yazılım hatalarını ve bakım isteklerinizi form doldurarak anında bildirin.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1877f2]">
                Talebi Başlat <Zap size={12} className="animate-pulse" />
              </div>
            </Link>
          </motion.div>

          {/* Card 2: WhatsApp Live Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="group p-8 bg-white border border-[#e4e6ea] rounded-[28px] shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:border-[#25d366]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <a 
              href="https://wa.me/905550000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col h-full justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#25d366]/8 text-[#25d366] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare size={22} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#1c1e21]">WhatsApp Canlı Destek</h3>
                  <p className="text-sm text-[#65676b] leading-relaxed">
                    Destek ekibimizle anlık mesajlaşma başlatarak problemlerinize hızlıca çözüm bulun.
                  </p>
                </div>
              </div>
              <div className="mt-8 text-xs font-bold uppercase tracking-wider text-[#25d366]">
                Sohbete Başla →
              </div>
            </a>
          </motion.div>

          {/* Card 3: Support Call Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="group p-8 bg-white border border-[#e4e6ea] rounded-[28px] shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:border-[#1877f2]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <a 
              href="tel:+905550000000"
              className="flex flex-col h-full justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#1877f2]/8 text-[#1877f2] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={22} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#1c1e21]">Müşteri İletişim Hattı</h3>
                  <p className="text-sm text-[#65676b] leading-relaxed">
                    Teknik temsilcilerimiz ve sistem yöneticilerimizle doğrudan telefon üzerinden sesli görüşün.
                  </p>
                </div>
              </div>
              <div className="mt-8 text-xs font-bold uppercase tracking-wider text-[#1877f2]">
                Hemen Ara: +90 (555) 000 00 00 →
              </div>
            </a>
          </motion.div>

          {/* Card 4: Email Technical Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="group p-8 bg-white border border-[#e4e6ea] rounded-[28px] shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:border-[#e91e8c]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <a 
              href="mailto:info@markilabs.com"
              className="flex flex-col h-full justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#e91e8c]/8 text-[#e91e8c] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={22} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#1c1e21]">E-posta Destek Adresi</h3>
                  <p className="text-sm text-[#65676b] leading-relaxed">
                    Yazılı dökümantasyon paylaşımı, raporlar ve rutin yazılım bakımları için e-posta ile başvurun.
                  </p>
                </div>
              </div>
              <div className="mt-8 text-xs font-bold uppercase tracking-wider text-[#e91e8c]">
                Yazın: info@markilabs.com →
              </div>
            </a>
          </motion.div>

        </div>

        {/* SLA & Time info Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-6 bg-gradient-to-br from-[#1877f2]/5 to-transparent border border-[#1877f2]/15 rounded-[24px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-20"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#1877f2]/10 text-[#1877f2] flex items-center justify-center shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1c1e21]">Müdahale & SLA Süreleri</h4>
              <p className="text-xs text-[#65676b] mt-0.5 max-w-lg">
                Kritik öncelikli sistem sorunlarına <strong>15 dakika</strong>, standart taleplere ise en geç <strong>2 saat</strong> içinde müdahale edilerek çözüm süreci başlatılır.
              </p>
            </div>
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1877f2] bg-[#1877f2]/8 px-3 py-1.5 rounded-full select-none">
            7/24 Aktif Altyapı
          </span>
        </motion.div>

        {/* Legal Documents Footer Section */}
        <div className="border-t border-[#e4e6ea] pt-10 text-center max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#65676b] mb-4">
            <Shield size={14} className="text-[#1877f2]" />
            <span>Yasal Sözleşmeler & Politikalar</span>
          </div>
          <div className="flex items-center justify-center gap-6 text-xs">
            <Link href="/kvkk" className="text-[#65676b] hover:text-[#1877f2] font-semibold hover:underline">
              KVKK Metni
            </Link>
            <Link href="/gizlilik" className="text-[#65676b] hover:text-[#1877f2] font-semibold hover:underline">
              Gizlilik Politikası
            </Link>
            <Link href="/kosullar" className="text-[#65676b] hover:text-[#1877f2] font-semibold hover:underline">
              Kullanım Koşulları
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
