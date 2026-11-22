import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";
import { getDict, pageMetadata, resolveLang } from "@/lib/dictionaries";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLang(params);
  return pageMetadata(lang, "/gizlilik", getDict(lang).meta.pages.privacy);
}

export default async function GizlilikPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLang(params);
  return (
    <LegalPage lang={lang} title={getDict(lang).meta.pages.privacy.title} updated={getDict(lang).legal.date} current="/gizlilik">
      {lang === "en" ? <En /> : <Tr />}
    </LegalPage>
  );
}

function Tr() {
  return (
    <>
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
          <strong>Çerezler (Cookies):</strong> Sitemiz şu anda reklam veya analiz amaçlı çerez kullanmamaktadır. Yalnızca
          dil düğmesiyle bir dil seçtiğinizde, seçiminizi hatırlamak için tek bir çerez kaydedilir. Başka çerezler
          kullanılmaya başlanırsa bu politika güncellenecektir.
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
          this policy prevails.
        </em>
      </p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          At Marki Labs, we care a great deal about your privacy and the protection of your personal data. This Privacy
          Policy explains how your personal data is collected, used, shared and protected when you visit our website,
          use our services or get in touch with us.
        </p>
      </section>

      <section>
        <h2>2. What Data Do We Collect?</h2>
        <p>We process the data you share with us and the data generated automatically while you use our website:</p>
        <ul>
          <li>
            <strong>Contact details:</strong> the name, surname, email address, phone number and message content you
            share when you write to us on WhatsApp or by email, or ask for a quote. The contact form on our site does not
            store any data; it only prepares your message and opens it in WhatsApp or your email app.
          </li>
          <li>
            <strong>Usage data:</strong> server logs kept for technical reasons by our hosting infrastructure when you
            visit our website, such as your IP address, browser type and the pages you visit.
          </li>
          <li>
            <strong>Cookies:</strong> our site does not currently use advertising or analytics cookies. It stores a single
            cookie only when you choose a language with the language switch, so that your choice is remembered. If we
            start using other cookies, this policy will be updated.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. How and Why Do We Use Your Data?</h2>
        <p>We process the data we collect, within legal limits, to:</p>
        <ul>
          <li>provide the services and quotes you ask for;</li>
          <li>answer your questions and give you effective support;</li>
          <li>keep our website running securely and correctly;</li>
          <li>meet our legal obligations and prevent possible legal disputes.</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Security</h2>
        <p>
          We apply reasonable technical and administrative security measures to keep your personal data safe. Our site is
          served over an encrypted connection (SSL/TLS). However, no data sent over the internet can be guaranteed to be
          100% secure.
        </p>
      </section>

      <section>
        <h2>5. Sharing with Third Parties</h2>
        <p>
          Your personal data is not sold or rented to third parties without your explicit consent. It may, however, be
          shared within legal limits with our business partners for hosting our website, and with legally authorised
          authorities in response to their official requests. When you write to us on WhatsApp, your messages are also
          subject to WhatsApp&apos;s own privacy terms.
        </p>
      </section>

      <section>
        <h2>6. Your Rights and Contact</h2>
        <p>
          You can always ask for your data to be deleted, updated or corrected, or for its processing to stop. For
          questions about our privacy practices or requests about your data, contact us at{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </section>
    </>
  );
}
