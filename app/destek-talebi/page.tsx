"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Send, 
  CheckCircle2, 
  Shield, 
  Mail, 
  Phone, 
  MessageSquare, 
  Clock, 
  Sparkles,
  Zap
} from "lucide-react";

export default function DestekTalebiPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "yazilim",
    priority: "orta",
    subject: "",
    message: "",
    kvkk: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.kvkk) return;
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <main className="pt-[110px] pb-24 bg-[#fafafa] text-[#1c1e21] font-sans selection:bg-[#1877f2]/10 min-h-screen relative overflow-hidden">
      
      {/* Background Ambient Glows & Grid Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#1877f2] opacity-[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#e91e8c] opacity-[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Back Link */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <Link 
            href="/destek" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#65676b] hover:text-[#1877f2] transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
            Yardım Merkezine Dön
          </Link>
        </motion.div>

        {/* Split Layout Container */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Information & Branding */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4 pt-4"
            >
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1c1e21] leading-[1.1]">
                Destek Talebi Oluşturun.
              </h1>
              <p className="text-[#65676b] text-base leading-relaxed">
                Yazılım ve tasarım projelerinizde karşılaştığınız tüm teknik sorunları en kısa sürede çözüme kavuşturuyoruz. Lütfen sağdaki formu eksiksiz şekilde doldurarak talebinizi iletin.
              </p>
            </motion.div>

            {/* Quick Contact Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid gap-4"
            >
              <div className="p-5 bg-white border border-[#e4e6ea] rounded-2xl flex items-center gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                <div className="w-10 h-10 bg-[#1877f2]/10 text-[#1877f2] rounded-xl flex items-center justify-center shrink-0">
                  <Shield size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1c1e21]">Güvenli ve Lisanslı Destek</h3>
                  <p className="text-xs text-[#65676b] mt-0.5">Tüm verileriniz KVKK kapsamında korunmaktadır</p>
                </div>
              </div>

              <div className="p-5 bg-white border border-[#e4e6ea] rounded-2xl flex items-center gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                <div className="w-10 h-10 bg-[#e91e8c]/10 text-[#e91e8c] rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1c1e21]">Anında E-posta Bildirimi</h3>
                  <p className="text-xs text-[#65676b] mt-0.5">Talep durumu e-posta ile güncellenir</p>
                </div>
              </div>
            </motion.div>

            {/* SLA / Info Card */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="p-5 bg-gradient-to-br from-[#1877f2]/5 to-transparent border border-[#1877f2]/15 rounded-2xl flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-[#1877f2]/10 text-[#1877f2] flex items-center justify-center shrink-0 mt-0.5">
                <Clock size={16} />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1877f2]">Tepki Süresi Garantisi</h4>
                <p className="text-xs text-[#65676b] leading-relaxed">
                  Destek ekibimiz kritik öncelikli sistem arızalarına ortalama <strong>15 dakika</strong>, standart taleplere ise en geç <strong>2 saat</strong> içinde yanıt vererek çözüm sürecini başlatır.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Form Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-[#e4e6ea] rounded-[32px] p-8 sm:p-10 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.03)]"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="support-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-[#65676b]">
                        Adınız Soyadınız
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-[#f8f9fa] border border-[#e4e6ea] rounded-xl text-sm font-medium focus:bg-white focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2] transition-all outline-none"
                      />
                    </div>

                    {/* Email & Phone Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#65676b]">
                          E-posta Adresiniz
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 bg-[#f8f9fa] border border-[#e4e6ea] rounded-xl text-sm font-medium focus:bg-white focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2] transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-[#65676b]">
                          Telefon Numaranız
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+90 555 000 00 00"
                          className="w-full px-4 py-3 bg-[#f8f9fa] border border-[#e4e6ea] rounded-xl text-sm font-medium focus:bg-white focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2] transition-all outline-none"
                        />
                      </div>
                    </div>

                    {/* Category & Priority Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="category" className="text-xs font-bold uppercase tracking-wider text-[#65676b]">
                          İlgili Kategori
                        </label>
                        <select
                          id="category"
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full px-4 py-3 bg-[#f8f9fa] border border-[#e4e6ea] rounded-xl text-sm font-medium focus:bg-white focus:border-[#1877f2] outline-none transition-all cursor-pointer"
                        >
                          <option value="yazilim">Web & Yazılım Geliştirme</option>
                          <option value="tasarim">Grafik Tasarım & UI/UX</option>
                          <option value="sunucu">Sunucu & Altyapı İşlemleri</option>
                          <option value="diger">Diğer Talepler</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="priority" className="text-xs font-bold uppercase tracking-wider text-[#65676b]">
                          Öncelik Derecesi
                        </label>
                        <select
                          id="priority"
                          value={formData.priority}
                          onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                          className="w-full px-4 py-3 bg-[#f8f9fa] border border-[#e4e6ea] rounded-xl text-sm font-medium focus:bg-white focus:border-[#1877f2] outline-none transition-all cursor-pointer"
                        >
                          <option value="dusuk">Düşük (Soru / Bilgi)</option>
                          <option value="orta">Orta (Standart Destek)</option>
                          <option value="yuksek">Yüksek (Hata / Hızlı Müdahale)</option>
                          <option value="kritik">Kritik (Sistem Çalışmıyor!)</option>
                        </select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-[#65676b]">
                        Sorun / Konu Başlığı
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Örn: Veritabanı bağlantı kesintisi"
                        className="w-full px-4 py-3 bg-[#f8f9fa] border border-[#e4e6ea] rounded-xl text-sm font-medium focus:bg-white focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2] transition-all outline-none"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[#65676b]">
                        Destek Talebi Açıklaması
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Yaşadığınız problemi detaylarıyla buraya yazın..."
                        className="w-full px-4 py-3 bg-[#f8f9fa] border border-[#e4e6ea] rounded-xl text-sm font-medium focus:bg-white focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2] transition-all outline-none resize-none"
                      />
                    </div>

                    {/* KVKK Acceptance Checkbox */}
                    <div className="flex items-start gap-3 pt-2">
                      <input
                        type="checkbox"
                        id="kvkk"
                        required
                        checked={formData.kvkk}
                        onChange={(e) => setFormData({ ...formData, kvkk: e.target.checked })}
                        className="w-4 h-4 rounded text-[#1877f2] border-[#e4e6ea] focus:ring-[#1877f2] mt-0.5 cursor-pointer"
                      />
                      <label htmlFor="kvkk" className="text-xs text-[#65676b] leading-relaxed select-none">
                        Kişisel verilerimin işlenmesine ilişkin sunulan{" "}
                        <Link href="/kvkk" target="_blank" className="text-[#1877f2] font-semibold hover:underline">
                          KVKK Aydınlatma Metni
                        </Link>
                        &apos;ni okudum ve kabul ediyorum.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading || !formData.kvkk}
                      className="w-full bg-[#1877f2] hover:bg-[#0d5ac8] text-white py-3.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none shadow-sm hover:shadow-md cursor-pointer mt-4"
                    >
                      {loading ? (
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={15} />
                          Destek Talebi Gönder
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-5"
                  >
                    <div className="w-16 h-16 bg-[#31a24c]/10 text-[#31a24c] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={36} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-[#1c1e21]">
                        Destek Talebiniz Alındı!
                      </h3>
                      <p className="text-[#65676b] text-sm max-w-sm mx-auto leading-relaxed">
                        Sayın <strong>{formData.name}</strong>, talebiniz teknik ekibimize iletilmiştir. 
                        Size en geç 2 saat içerisinde <strong>{formData.email}</strong> adresi üzerinden dönüş sağlayacağız.
                      </p>
                    </div>
                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            category: "yazilim",
                            priority: "orta",
                            subject: "",
                            message: "",
                            kvkk: false,
                          });
                        }}
                        className="px-6 py-2.5 bg-[#f0f2f5] hover:bg-[#e4e6eb] text-[#1c1e21] text-xs font-bold rounded-xl transition-all active:scale-95"
                      >
                        Yeni Talep Oluştur
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </main>
  );
}
