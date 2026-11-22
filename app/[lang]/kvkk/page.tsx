import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";
import { getDict, pageMetadata, resolveLang } from "@/lib/dictionaries";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLang(params);
  return pageMetadata(lang, "/kvkk", getDict(lang).meta.pages.kvkk);
}

export default async function KvkkPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLang(params);
  const t = getDict(lang).legal;
  return (
    <LegalPage lang={lang} title={getDict(lang).meta.pages.kvkk.title} updated={t.date} current="/kvkk">
      {lang === "en" ? <En /> : <Tr />}
    </LegalPage>
  );
}

function Tr() {
  return (
    <>
      <section>
        <h2>1. Veri Sorumlusu</h2>
        <p>
          6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) uyarınca, kişisel verileriniz; veri sorumlusu
          olarak <strong>Marki Labs</strong>{" "}(&ldquo;Şirket&rdquo;) tarafından aşağıda açıklanan kapsamda işlenebilecektir.
        </p>
      </section>

      <section>
        <h2>2. Kişisel Verilerin Hangi Amaçla İşleneceği</h2>
        <p>
          Toplanan kişisel verileriniz, Şirketimiz tarafından sunulan hizmetlerden sizleri faydalandırmak için gerekli
          çalışmaların iş birimlerimiz tarafından yapılması; Şirketimizin ve Şirketimizle iş ilişkisi içerisinde olan
          kişilerin hukuki ve ticari güvenliğinin temini; Şirketimizin ticari ve iş stratejilerinin belirlenmesi ve
          uygulanması amaçlarıyla KVKK&rsquo;nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları
          dahilinde işlenecektir.
        </p>
        <p>
          <strong>İşlenen veri kategorileri şunları içerebilir:</strong>
        </p>
        <ul>
          <li>Kimlik Bilgileri (Ad, soyad vb.)</li>
          <li>İletişim Bilgileri (E-posta, telefon numarası vb.)</li>
          <li>Müşteri İşlem Bilgileri (Talep ve mesaj içerikleri vb.)</li>
          <li>İşlem Güvenliği Bilgileri (IP adresi, log kayıtları vb.)</li>
        </ul>
      </section>

      <section>
        <h2>3. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h2>
        <p>
          Toplanan kişisel verileriniz; yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda iş ortaklarımıza,
          tedarikçilerimize, kanunen yetkili kamu kurumlarına ve özel kişilere, KVKK&rsquo;nın 8. ve 9. maddelerinde
          belirtilen kişisel veri aktarım şartları ve amaçları çerçevesinde aktarılabilecektir.
        </p>
      </section>

      <section>
        <h2>4. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
        <p>
          Kişisel verileriniz, Şirketimiz tarafından sunulan hizmetlerin yasal çerçevede yürütülmesi ve bu kapsamda
          Şirketimizin sözleşme ve yasadan doğan mesuliyetlerini eksiksiz ve doğru bir şekilde yerine getirebilmesi amacı
          ile elektronik ortamda, bize WhatsApp veya e-posta yoluyla ilettiğiniz mesajlar ve telefon görüşmeleri
          üzerinden toplanmaktadır. Web sitemizdeki iletişim formu herhangi bir veri kaydetmez veya bize göndermez;
          yalnızca mesajınızı hazırlayıp WhatsApp ya da e-posta uygulamanızda açar ve gönderip göndermemek size kalır.
          Bu hukuki sebeple toplanan kişisel verileriniz KVKK&rsquo;nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme
          şartları ve amaçları kapsamında bu Aydınlatma Metni&rsquo;nde belirtilen amaçlarla da işlenebilmekte ve
          aktarılabilmektedir.
        </p>
      </section>

      <section>
        <h2>5. Kişisel Veri Sahibinin Kanuni Hakları</h2>
        <p>
          Kişisel veri sahipleri olarak, haklarınıza ilişkin taleplerinizi Şirketimize iletmeniz durumunda, Şirketimiz
          talebin niteliğine göre talebi en geç otuz gün içinde ücretsiz olarak sonuçlandıracaktır. Kişisel veri sahibi
          olarak KVKK&rsquo;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
        </p>
        <ul>
          <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
          <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
          <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
          <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
          <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
          <li>KVKK&rsquo;nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,</li>
          <li>Düzeltme, silme ve yok etme işlemlerinin, verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
          <li>
            İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine
            bir sonucun ortaya çıkmasına itiraz etme,
          </li>
          <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme.</li>
        </ul>
        <p>
          Yukarıda belirtilen haklarınızı kullanmak için kimliğinizi tespit edici gerekli bilgiler ile kullanmayı talep
          ettiğiniz hakkınıza yönelik açıklamalarınızı içeren talebinizi, Şirketimizin{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> e-posta adresine güvenli elektronik imza veya mobil imza ile ya
          da Şirketimize daha önce bildirdiğiniz ve sistemlerimizde kayıtlı bulunan e-posta adresinizi kullanmak suretiyle
          iletebilirsiniz.
        </p>
      </section>
    </>
  );
}

/** Türkçe metnin çevirisi; uyuşmazlıkta Türkçe metin esas alınır (sayfanın başında yazar). */
function En() {
  return (
    <>
      <p>
        <em>
          This is an English translation provided for information. In case of any difference, the Turkish version of
          this notice prevails.
        </em>
      </p>

      <section>
        <h2>1. Data Controller</h2>
        <p>
          Under Turkey&rsquo;s Personal Data Protection Law No. 6698 (&ldquo;KVKK&rdquo;), your personal data may be
          processed by <strong>Marki Labs</strong>{" "}(the &ldquo;Company&rdquo;), as data controller, within the scope
          described below.
        </p>
      </section>

      <section>
        <h2>2. Purposes of Processing</h2>
        <p>
          Your personal data is processed, within the conditions and purposes for processing set out in Articles 5 and 6
          of the KVKK, so that our teams can carry out the work needed for you to benefit from the services the Company
          provides; to ensure the legal and commercial security of the Company and of the people it does business with;
          and to determine and carry out the Company&rsquo;s commercial and business strategies.
        </p>
        <p>
          <strong>The categories of data processed may include:</strong>
        </p>
        <ul>
          <li>Identity details (name, surname, etc.)</li>
          <li>Contact details (email address, phone number, etc.)</li>
          <li>Customer transaction details (the content of requests and messages, etc.)</li>
          <li>Transaction security details (IP address, log records, etc.)</li>
        </ul>
      </section>

      <section>
        <h2>3. Who Personal Data May Be Transferred To, and Why</h2>
        <p>
          To carry out the purposes above, your personal data may be transferred to our business partners, our
          suppliers, legally authorised public institutions and private persons, within the conditions and purposes for
          transfer set out in Articles 8 and 9 of the KVKK.
        </p>
      </section>

      <section>
        <h2>4. How Personal Data Is Collected, and the Legal Basis</h2>
        <p>
          Your personal data is collected electronically, through the messages you send us on WhatsApp or by email and
          through phone calls, so that the services the Company provides are carried out within the legal framework and
          the Company can fully and correctly meet its contractual and legal responsibilities. The contact form on our
          website does not store or send us any data; it only prepares your message and opens it in WhatsApp or your
          email app, and whether to send it is up to you. Personal data collected on this legal basis may also be
          processed and transferred for the purposes stated in this notice, within the conditions and purposes for
          processing set out in Articles 5 and 6 of the KVKK.
        </p>
      </section>

      <section>
        <h2>5. Your Legal Rights</h2>
        <p>
          If you send the Company a request about your rights as a data subject, the Company will resolve it free of
          charge within thirty days at the latest, depending on the nature of the request. Under Article 11 of the KVKK,
          you have the right to:
        </p>
        <ul>
          <li>learn whether your personal data is being processed;</li>
          <li>request information about it if it has been processed;</li>
          <li>learn the purpose of the processing and whether the data is used in line with that purpose;</li>
          <li>know the third parties in Turkey or abroad to whom your personal data has been transferred;</li>
          <li>ask for your personal data to be corrected if it is incomplete or inaccurate;</li>
          <li>ask for your personal data to be erased or destroyed under the conditions set out in Article 7 of the KVKK;</li>
          <li>ask for any correction, erasure or destruction to be notified to the third parties the data was transferred to;</li>
          <li>object to an outcome against you that results from your data being analysed solely by automated systems;</li>
          <li>claim compensation if you suffer damage because your personal data was processed unlawfully.</li>
        </ul>
        <p>
          To use these rights, send your request, including the information needed to identify you and an explanation of
          the right you wish to use, to <a href={`mailto:${SITE.email}`}>{SITE.email}</a> with a secure electronic
          signature or mobile signature, or from the email address you have previously given the Company and that is
          registered in our systems.
        </p>
      </section>
    </>
  );
}
