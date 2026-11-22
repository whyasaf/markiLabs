import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";
import { getDict, pageMetadata, resolveLang } from "@/lib/dictionaries";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLang(params);
  return pageMetadata(lang, "/kosullar", getDict(lang).meta.pages.terms);
}

export default async function KosullarPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLang(params);
  return (
    <LegalPage lang={lang} title={getDict(lang).meta.pages.terms.title} updated={getDict(lang).legal.date} current="/kosullar">
      {lang === "en" ? <En /> : <Tr />}
    </LegalPage>
  );
}

function Tr() {
  return (
    <>
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
    </>
  );
}

/** Türkçe metnin çevirisi; uyuşmazlıkta Türkçe metin esas alınır. */
function En() {
  return (
    <>
      <p>
        <em>
          This is an English translation provided for information. In case of any difference, the Turkish version of
          these terms prevails.
        </em>
      </p>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By visiting or using this website, or by receiving services through it, you are deemed to accept these Terms
          of Use, our Privacy Policy and all applicable legislation. If you do not accept any of these terms, please stop
          using this website.
        </p>
      </section>

      <section>
        <h2>2. Intellectual Property</h2>
        <p>
          The visual designs, videos, brand logos, text, code and software architecture on our website are the
          intellectual property of the Company and are protected by copyright law. The rights to the brands, logos and
          images of clients and partners shown in the projects section belong to their respective owners. Copying,
          reproducing, distributing or commercially using these materials without the Company&apos;s written permission
          is prohibited.
        </p>
      </section>

      <section>
        <h2>3. Use of the Site and Obligations</h2>
        <p>
          Users must use the website only for lawful purposes and in a way that does not infringe the rights of third
          parties. The following are prohibited:
        </p>
        <ul>
          <li>Acting to compromise the security of our website, or spreading malware (viruses, trojans, etc.).</li>
          <li>Using our contact channels to send false, misleading or spam messages.</li>
          <li>Using automated systems (bots, scrapers, etc.) to copy site content or overload our servers.</li>
        </ul>
      </section>

      <section>
        <h2>4. Limitation of Liability</h2>
        <p>
          The Company does not guarantee that our website will run without interruption or errors. The Company cannot be
          held liable for any direct or indirect loss arising from the use of the site or from the site being temporarily
          unavailable. The Company is not responsible for the content security or privacy policies of external links to
          third-party websites on our site.
        </p>
      </section>

      <section>
        <h2>5. Changes to These Terms</h2>
        <p>
          The Company reserves the right to update these Terms of Use at any time without prior notice. Changes take
          effect on the date they are published on our website. By continuing to use our site, you accept the current
          terms.
        </p>
      </section>

      <section>
        <h2>6. Governing Law, Jurisdiction and Contact</h2>
        <p>
          These Terms of Use are governed by the laws of the Republic of Turkey, and the Istanbul Courts and Enforcement
          Offices have jurisdiction over any dispute arising from or related to them. For any questions or suggestions,
          contact us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </section>
    </>
  );
}
