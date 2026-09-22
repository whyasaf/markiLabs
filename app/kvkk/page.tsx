"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, ArrowLeft } from "lucide-react";

export default function KvkkPage() {
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
            <span>Yasal Mevzuat</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c1e21] leading-tight">
            KVKK Aydınlatma Metni
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
            <h2 className="text-xl font-bold text-[#1c1e21]">1. Veri Sorumlusu</h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) uyarınca, kişisel verileriniz; veri sorumlusu olarak <strong>Marki Labs</strong> (&ldquo;Şirket&rdquo;) tarafından aşağıda açıklanan kapsamda işlenebilecektir.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1c1e21]">2. Kişisel Verilerin Hangi Amaçla İşleneceği</h2>
            <p>
              Toplanan kişisel verileriniz, Şirketimiz tarafından sunulan hizmetlerden sizleri faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması; Şirketimizin ve Şirketimizle iş ilişkisi içerisinde olan kişilerin hukuki ve ticari güvenliğinin temini; Şirketimizin ticari ve iş stratejilerinin belirlenmesi ve uygulanması amaçlarıyla KVKK&rsquo;nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları dahilinde işlenecektir.
            </p>
            <p className="font-semibold text-[#1c1e21]">İşlenen veri kategorileri şunları içerebilir:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Kimlik Bilgileri (Ad, soyad vb.)</li>
              <li>İletişim Bilgileri (E-posta, telefon numarası vb.)</li>
              <li>Müşteri İşlem Bilgileri (Talep ve mesaj içerikleri vb.)</li>
              <li>İşlem Güvenliği Bilgileri (IP adresi, log kayıtları vb.)</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1c1e21]">3. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h2>
            <p>
              Toplanan kişisel verileriniz; yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda, iş ortaklarımıza, tedarikçilerimize, kanunen yetkili kamu kurumlarına og özel kişilere, KVKK&rsquo;nın 8. ve 9. maddelerinde belirtilen kişisel veri aktarım şartları ve amaçları çerçevesinde aktarılabilecektir.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1c1e21]">4. Kişisel Veri Toplamanın Yöntemi og Hukuki Sebebi</h2>
            <p>
              Kişisel verileriniz, Şirketimiz tarafından sunulan hizmetlerin yasal çerçevede yürütülmesi ve bu kapsamda Şirketimizin sözleşme ve yasadan doğan mesuliyetlerini eksiksiz ve doğru bir şekilde yerine getirebilmesi amacı ile elektronik ortamda (web sitemizdeki iletişim formları, çerezler, e-posta veya telefon kanalları üzerinden) toplanmaktadır. Bu hukuki sebeple toplanan kişisel verileriniz KVKK&rsquo;nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları kapsamında bu Aydınlatma Metni&rsquo;nde belirtilen amaçlarla da işlenebilmekte ve aktarılabilmektedir.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1c1e21]">5. Kişisel Veri Sahibinin Kanuni Hakları</h2>
            <p>
              Kişisel veri sahipleri olarak, haklarınıza ilişkin taleplerinizi Şirketimize iletmeniz durumunda, Şirketimiz talebin niteliğine göre talebi en geç otuz gün içinde ücretsiz olarak sonuçlandıracaktır. Kişisel veri sahibi olarak KVKK&rsquo;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
              <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
              <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
              <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
              <li>KVKK&rsquo;nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,</li>
              <li>Düzeltme, silme ve yok etme işlemlerinin, verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,</li>
              <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme.</li>
            </ul>
            <p className="mt-4">
              Yukarıda belirtilen haklarınızı kullanmak için kimliğinizi tespit edici gerekli bilgiler ile kullanmayı talep ettiğiniz hakkınıza yönelik açıklamalarınızı içeren talebinizi, Şirketimizin <strong>info@markilabs.com</strong> e-posta adresine güvenli elektronik imza veya mobil imza ile ya da Şirketimize daha önce bildirdiğiniz ve sistemlerimizde kayıtlı bulunan e-posta adresinizi kullanmak suretiyle iletebilirsiniz.
            </p>
          </section>
        </motion.div>

      </div>
    </main>
  );
}
