import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";
import { getDict, pageMetadata, resolveLang } from "@/lib/dictionaries";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLang(params);
  return pageMetadata(lang, "/kvkk", getDict(lang).meta.pages.kvkk);
}

export default async function KvkkPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLang(params);
  return (
    <LegalPage lang={lang} title="KVKK Aydınlatma Metni" updated="13 Kasım 2026" current="/kvkk">
      <section>
        <h2>1. Veri Sorumlusu</h2>
        <p>
          6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) uyarınca, kişisel verileriniz; veri sorumlusu
          olarak <strong>Marki Labs</strong> (&ldquo;Şirket&rdquo;) tarafından aşağıda açıklanan kapsamda işlenebilecektir.
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
    </LegalPage>
  );
}
