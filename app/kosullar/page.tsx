"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, ArrowLeft } from "lucide-react";

export default function KosullarPage() {
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
            <span>Kullanım Koşulları</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c1e21] leading-tight">
            Kullanım Koşulları
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
            <h2 className="text-xl font-bold text-[#1c1e21]">1. Koşulların Kabulü</h2>
            <p>
              Bu web sitesini ziyaret ederek, kullanarak veya sitemiz üzerinden hizmet alarak, bu Kullanım Koşulları metnini, Gizlilik Politikamızı ve ilgili tüm yasal mevzuatı kabul etmiş sayılırsınız. Eğer bu koşullardan herhangi birini kabul etmiyorsanız, lütfen bu web sitesini kullanmayı sonlandırın.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1c1e21]">2. Fikri Mülkiyet Hakları</h2>
            <p>
              Web sitemizde yer alan tüm görsel tasarımlar, 3D renderlar, marka logoları, metinler, kodlar ve yazılım mimarisi Şirketimizin fikri mülkiyetidir ve telif hakkı yasalarıyla korunmaktadır. Şirketimizin yazılı izni olmaksızın bu materyallerin kopyalanması, çoğaltılması, dağıtılması veya ticari amaçlarla kullanılması kesinlikle yasaktır.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1c1e21]">3. Sitenin Kullanımı ve Yükümlülükler</h2>
            <p>
              Kullanıcılar, web sitesini yalnızca yasal amaçlarla ve üçüncü şahısların haklarını ihlal etmeyecek şekilde kullanmakla yükümlüdür. Aşağıdaki eylemler kesinlikle yasaktır:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Web sitemizin güvenliğini bozmaya yönelik eylemlerde bulunmak, zararlı yazılım (virüs, truva atı vb.) yaymak.</li>
              <li>Site üzerinde yer alan iletişim formlarını asılsız, aldatıcı veya spam mesaj göndermek amacıyla kullanmak.</li>
              <li>Otomatik sistemler (botlar, veri kazıma yazılımları vb.) kullanarak site içeriğini kopyalamak veya sunucuları aşırı yüklemek.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1c1e21]">4. Sorumluluk Sınırlandırması</h2>
            <p>
              Şirketimiz, web sitemizin kesintisiz ve hatasız çalışacağını garanti etmez. Sitenin kullanımından veya geçici olarak siteye erişilememesinden doğabilecek doğrudan veya dolaylı kayıplardan Şirketimiz sorumlu tutulamaz. Sitemizde yer alan üçüncü taraf web sitelerine ait harici linklerin içerik güvenliğinden ve gizlilik politikalarından Şirketimiz sorumlu değildir.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1c1e21]">5. Koşullarda Değişiklik Yapılması</h2>
            <p>
              Şirketimiz, bu Kullanım Koşulları'nı önceden haber vermeksizin herhangi bir zamanda güncelleme hakkını saklı tutar. Yapılan değişiklikler web sitemizde yayınlandığı tarihte yürürlüğe girer. Sitemizi kullanmaya devam etmeniz, güncel koşulları kabul ettiğiniz anlamına gelir.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1c1e21]">6. Yetkili Mahkeme ve İletişim</h2>
            <p>
              Bu Kullanım Koşulları'ndan kaynaklanan veya bunlarla ilişkili her türlü ihtilafın çözümünde Türkiye Cumhuriyeti kanunları uygulanacak olup, İstanbul Mahkemeleri ve İcra Daireleri yetkili olacaktır. Her türlü soru ve önerileriniz için <strong>info@markilabs.com</strong> e-posta adresi üzerinden bizimle iletişime geçebilirsiniz.
            </p>
          </section>
        </motion.div>

      </div>
    </main>
  );
}
