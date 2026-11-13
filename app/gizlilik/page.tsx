import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Marki Labs web sitesinde kişisel verilerin nasıl işlendiğini açıklayan gizlilik politikası.",
};

export default function GizlilikPage() {
  return (
    <LegalPage title="Gizlilik Politikası" updated="13 Kasım 2026" current="/gizlilik">
      <section>
        <h2>1. Giriş</h2>
        <p>
          Marki Labs olarak gizliliğinize ve kişisel verilerinizin korunmasına büyük değer veriyoruz. Bu Gizlilik
          Politikası, web sitemizi ziyaret ettiğinizde, hizmetlerimizden yararlandığınızda veya bizimle iletişime
          geçtiğinizde kişisel verilerinizin nasıl toplandığını, kullanıldığını, paylaşıldığını ve korunduğunu
          açıklamaktadır.
        </p>
      </section>

      <section>
        <h2>2. Hangi Verileri Topluyoruz?</h2>
        <p>Bizimle paylaştığınız veya web sitemizi kullanımınız sırasında otomatik olarak üretilen verileri işliyoruz:</p>
        <ul>
          <li>
            <strong>İletişim Bilgileri:</strong> Bize WhatsApp veya e-posta ile yazdığınızda ya da teklif istediğinizde
            paylaştığınız ad, soyad, e-posta adresi, telefon numarası ve mesaj içeriği. Sitemizdeki iletişim formu
            herhangi bir veri kaydetmez; yalnızca mesajınızı hazırlayıp WhatsApp ya da e-posta uygulamanızda açar.
          </li>
          <li>
            <strong>Kullanım Verileri:</strong> Web sitemizi ziyaret ettiğinizde barındırma (hosting) altyapısının teknik
            olarak tuttuğu IP adresi, tarayıcı türü ve ziyaret edilen sayfalar gibi sunucu kayıtları.
          </li>
          <li>
            <strong>Çerezler (Cookies):</strong> Sitemiz şu anda reklam veya analiz amaçlı çerez kullanmamaktadır. İleride
            kullanılması durumunda bu politika güncellenecektir.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Verilerinizi Nasıl ve Neden Kullanıyoruz?</h2>
        <p>Topladığımız verileri aşağıdaki amaçlarla yasal sınırlar dahilinde işliyoruz:</p>
        <ul>
          <li>Talep ettiğiniz hizmetleri ve teklifleri size sunmak,</li>
          <li>Sorularınızı yanıtlamak ve etkili müşteri desteği sağlamak,</li>
          <li>Web sitemizin güvenli ve doğru çalışmasını sağlamak,</li>
          <li>Yasal yükümlülüklerimizi yerine getirmek ve olası hukuki ihtilafları önlemek.</li>
        </ul>
      </section>

      <section>
        <h2>4. Veri Güvenliği</h2>
        <p>
          Kişisel verilerinizin güvenliğini sağlamak için makul teknik ve idari güvenlik önlemlerini uyguluyoruz. Sitemiz
          şifreli bağlantı (SSL/TLS) üzerinden sunulmaktadır. Ancak, internet üzerinden iletilen hiçbir verinin %100
          güvenli olduğu garanti edilemez.
        </p>
      </section>

      <section>
        <h2>5. Üçüncü Taraflarla Paylaşım</h2>
        <p>
          Kişisel verileriniz, açık rızanız olmaksızın üçüncü taraflara satılmaz veya kiralanmaz. Ancak, web sitemizin
          barındırılması (hosting) veya yasal mercilerin resmi talepleri doğrultusunda iş ortaklarımız ve kanunen yetkili
          makamlarla yasal sınırlar çerçevesinde paylaşılabilir. Bize WhatsApp üzerinden yazdığınızda mesajlarınız
          WhatsApp&apos;ın kendi gizlilik koşullarına da tabidir.
        </p>
      </section>

      <section>
        <h2>6. Haklarınız ve İletişim</h2>
        <p>
          Verilerinizin silinmesini, güncellenmesini, düzeltilmesini veya işlenmesine son verilmesini her zaman talep
          edebilirsiniz. Gizlilik uygulamalarımızla ilgili sorularınız veya verilerinize ilişkin talepleriniz için bizimle{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> e-posta adresi üzerinden iletişime geçebilirsiniz.
        </p>
      </section>
    </LegalPage>
  );
}
