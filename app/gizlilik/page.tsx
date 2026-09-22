"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, ArrowLeft } from "lucide-react";

export default function GizlilikPage() {
  return (
    <main className="pt-[120px] pb-24 bg-white text-[#1c1e21] font-sans selection:bg-[#1877f2]/10 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        
        {/* Back Link */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#65676b] hover:text-[#1877f2] transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
            Ana Sayfaya Dön
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-b border-[#e4e6ea] pb-8 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1877f2]/8 text-[#1877f2] rounded-full text-[11px] font-bold tracking-widest uppercase mb-4">
            <Shield size={12} />
            <span>Gizlilik Politikası</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c1e21] leading-tight">
            Gizlilik Politikası
          </h1>
          <p className="text-[#65676b] text-sm mt-3 font-medium">
            Son Güncelleme: 17 Haziran 2026
          </p>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="prose prose-slate max-w-none space-y-8 text-[15px] leading-relaxed text-[#4b4f56]"
        >
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1c1e21]">1. Giriş</h2>
            <p>
              Marki Labs olarak gizliliğinize ve kişisel verilerinizin korunmasına büyük değer veriyoruz. Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde, hizmetlerimizden yararlandığınızda veya bizimle iletişime geçtiğinizde kişisel verilerinizin nasıl toplandığını, kullanıldığını, paylaşıldığını ve korunduğunu açıklamaktadır.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1c1e21]">2. Hangi Verileri Topluyoruz?</h2>
            <p>
              Bizimle paylaştığınız veya web sitemizi kullanımınız sırasında otomatik olarak üretilen çeşitli verileri topluyoruz:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>İletişim Bilgileri:</strong> İletişim formu doldurulduğunda veya teklif alındığında paylaştığınız ad, soyad, e-posta adresi, telefon numarası.</li>
              <li><strong>Kullanım Verileri:</strong> Web sitemizi ziyaret ettiğinizde IP adresiniz, tarayıcı türünüz, işletim sisteminiz, ziyaret ettiğiniz sayfalar ve yönlendirici kaynaklar.</li>
              <li><strong>Çerezler (Cookies):</strong> Sitemizin performansını artırmak, kullanıcı deneyiminizi özelleştirmek ve reklam/analiz çalışmaları yapmak amacıyla kullandığımız küçük veri dosyaları.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1c1e21]">3. Verilerinizi Nasıl ve Neden Kullanıyoruz?</h2>
            <p>
              Topladığımız verileri aşağıdaki amaçlarla yasal sınırlar dahilinde işliyoruz:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Talep ettiğiniz hizmetleri ve teklifleri size sunmak,</li>
              <li>Sorularınızı yanıtlamak ve etkili müşteri desteği sağlamak,</li>
              <li>Web sitemizin performansını izlemek, analiz etmek ve arayüzlerimizi optimize etmek,</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek ve olası hukuki ihtilafları önlemek.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1c1e21]">4. Veri Güvenliği</h2>
            <p>
              Kişisel verilerinizin güvenliğini sağlamak için endüstri standardı teknik ve idari güvenlik önlemlerini uyguluyoruz. Verileriniz, yetkisiz erişim, kayıp, ifşa veya değiştirilmeye karşı koruma sağlayan güvenli ağlar ve şifreleme yöntemleri (SSL/TLS gibi) kullanılarak saklanmaktadır. Ancak, internet üzerinden iletilen hiçbir verinin %100 güvenli olduğu garanti edilemez.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1c1e21]">5. Üçüncü Taraflarla Paylaşım</h2>
            <p>
              Kişisel verileriniz, açık rızanız olmaksızın üçüncü taraflara satılmaz veya kiralanmaz. Ancak, web sitemizin barındırılması (hosting), veri analitiği (Google Analytics gibi) veya yasal mercilerin resmi talepleri doğrultusunda iş ortaklarımız ve kanunen yetkili makamlarla yasal sınırlar çerçevesinde paylaşilebilir.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1c1e21]">6. Haklarınız ve İletişim</h2>
            <p>
              Verilerinizin silinmesini, güncellenmesini, düzeltilmesini veya işlenmesine son verilmesini her zaman talep edebilirsiniz. Gizlilik uygulamalarımızla ilgili sorularınız veya verilerinize ilişkin talepleriniz için bizimle <strong>info@markilabs.com</strong> e-posta adresi üzerinden iletişime geçebilirsiniz.
            </p>
          </section>
        </motion.div>

      </div>
    </main>
  );
}
