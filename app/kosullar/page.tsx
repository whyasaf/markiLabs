import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: "Marki Labs web sitesinin kullanım koşulları.",
};

export default function KosullarPage() {
  return (
    <LegalPage title="Kullanım Koşulları" updated="13 Kasım 2026" current="/kosullar">
      <section>
        <h2>1. Koşulların Kabulü</h2>
        <p>
          Bu web sitesini ziyaret ederek, kullanarak veya sitemiz üzerinden hizmet alarak, bu Kullanım Koşulları metnini,
          Gizlilik Politikamızı ve ilgili tüm yasal mevzuatı kabul etmiş sayılırsınız. Eğer bu koşullardan herhangi birini
          kabul etmiyorsanız, lütfen bu web sitesini kullanmayı sonlandırın.
        </p>
      </section>

      <section>
        <h2>2. Fikri Mülkiyet Hakları</h2>
        <p>
          Web sitemizde yer alan görsel tasarımlar, videolar, marka logoları, metinler, kodlar ve yazılım mimarisi
          Şirketimizin fikri mülkiyetidir ve telif hakkı yasalarıyla korunmaktadır. Projeler bölümünde gösterilen müşteri
          ve iş ortaklarına ait marka, logo ve görsellerin hakları ise sahiplerine aittir. Şirketimizin yazılı izni
          olmaksızın bu materyallerin kopyalanması, çoğaltılması, dağıtılması veya ticari amaçlarla kullanılması
          yasaktır.
        </p>
      </section>

      <section>
        <h2>3. Sitenin Kullanımı ve Yükümlülükler</h2>
        <p>
          Kullanıcılar, web sitesini yalnızca yasal amaçlarla ve üçüncü şahısların haklarını ihlal etmeyecek şekilde
          kullanmakla yükümlüdür. Aşağıdaki eylemler yasaktır:
        </p>
        <ul>
          <li>Web sitemizin güvenliğini bozmaya yönelik eylemlerde bulunmak, zararlı yazılım (virüs, truva atı vb.) yaymak.</li>
          <li>İletişim kanallarımızı asılsız, aldatıcı veya spam mesaj göndermek amacıyla kullanmak.</li>
          <li>Otomatik sistemler (botlar, veri kazıma yazılımları vb.) kullanarak site içeriğini kopyalamak veya sunucuları aşırı yüklemek.</li>
        </ul>
      </section>

      <section>
        <h2>4. Sorumluluk Sınırlandırması</h2>
        <p>
          Şirketimiz, web sitemizin kesintisiz ve hatasız çalışacağını garanti etmez. Sitenin kullanımından veya geçici
          olarak siteye erişilememesinden doğabilecek doğrudan veya dolaylı kayıplardan Şirketimiz sorumlu tutulamaz.
          Sitemizde yer alan üçüncü taraf web sitelerine ait harici bağlantıların içerik güvenliğinden ve gizlilik
          politikalarından Şirketimiz sorumlu değildir.
        </p>
      </section>

      <section>
        <h2>5. Koşullarda Değişiklik Yapılması</h2>
        <p>
          Şirketimiz, bu Kullanım Koşulları&apos;nı önceden haber vermeksizin herhangi bir zamanda güncelleme hakkını saklı
          tutar. Yapılan değişiklikler web sitemizde yayınlandığı tarihte yürürlüğe girer. Sitemizi kullanmaya devam
          etmeniz, güncel koşulları kabul ettiğiniz anlamına gelir.
        </p>
      </section>

      <section>
        <h2>6. Yetkili Mahkeme ve İletişim</h2>
        <p>
          Bu Kullanım Koşulları&apos;ndan kaynaklanan veya bunlarla ilişkili her türlü ihtilafın çözümünde Türkiye
          Cumhuriyeti kanunları uygulanacak olup, İstanbul Mahkemeleri ve İcra Daireleri yetkili olacaktır. Her türlü soru
          ve önerileriniz için <a href={`mailto:${SITE.email}`}>{SITE.email}</a> e-posta adresi üzerinden bizimle iletişime
          geçebilirsiniz.
        </p>
      </section>
    </LegalPage>
  );
}
