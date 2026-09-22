"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Loader2,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

// Inline SVGs for social media icons
function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.99L2 22l5.233-1.371a9.918 9.918 0 004.778 1.226h.004c5.505 0 9.99-4.478 9.99-9.985C22 6.478 17.519 2 12.012 2zm5.735 14.157c-.252.712-1.261 1.303-1.741 1.352-.439.044-.99.232-2.902-.524-2.444-.964-4.01-3.439-4.131-3.603-.122-.165-1.077-1.432-1.077-2.731 0-1.3.676-1.937.919-2.203.244-.265.534-.33.712-.33.178 0 .356.006.512.013.162.007.38.012.587.512.213.518.728 1.774.792 1.903.064.13.107.28.021.453-.086.173-.13.28-.258.432-.128.152-.27.34-.385.457-.128.13-.263.272-.113.53.15.257.662 1.089 1.417 1.761.97.864 1.788 1.131 2.043 1.258.256.128.406.108.557-.065.152-.173.662-.77.838-1.03.179-.26.356-.214.6-.123.244.09 1.547.73 1.81.859.263.129.437.194.501.303.064.11.064.634-.188 1.346z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

const contactInfo = [
  { icon: Mail, label: "E-posta", value: "info@markilabs.com", href: "mailto:info@markilabs.com" },
  { icon: Phone, label: "Telefon", value: "+90 (555) 000 00 00", href: "tel:+905550000000" },
  { icon: MapPin, label: "Konum", value: "İstanbul, Türkiye", href: "#" },
];

const faqs = [
  {
    q: "Bir proje ne kadar sürer?",
    a: "Proje kapsamına göre değişir. Basit bir web sitesi 2-4 hafta, kurumsal yazılımlar 2-6 ay arasında teslim edilir.",
  },
  {
    q: "Fiyatlandırma nasıl işliyor?",
    a: "Fiyatlandırma projeye özel belirlenir. Ücretsiz keşif görüşmesinde detaylı bilgi alabilirsiniz.",
  },
  {
    q: "Proje sonrası destek sağlıyor musunuz?",
    a: "Evet, tüm projelerimizde teslim sonrası bakım ve destek hizmeti sunuyoruz.",
  },
  {
    q: "Hangi teknolojileri kullanıyorsunuz?",
    a: "Next.js, React Native, Node.js, Python, PostgreSQL, Figma başta olmak üzere modern teknoloji yığını kullanıyoruz.",
  },
];

const socials = [
  { Icon: WhatsAppIcon,  href: "https://wa.me/905550000000",              label: "WhatsApp",  color: "#25d366" },
  { Icon: InstagramIcon, href: "https://instagram.com/markilabs",         label: "Instagram", color: "#e91e8c" },
  { Icon: LinkedinIcon,  href: "https://linkedin.com/company/markilabs",  label: "LinkedIn",  color: "#0077b5" },
  { Icon: XIcon,         href: "https://x.com/markilabs",                 label: "X",         color: "#1c1e21" },
];

export default function IletisimPageClient() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");
  const scaleParam = searchParams.get("scale");
  const addonsParam = searchParams.get("addons");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    if (serviceParam) {
      setFormState((s) => ({ ...s, service: serviceParam }));
    }
    if (scaleParam || addonsParam) {
      let scaleLabel = "";
      if (scaleParam === "1") scaleLabel = "Girişim (MVP)";
      if (scaleParam === "2") scaleLabel = "Büyüme";
      if (scaleParam === "3") scaleLabel = "Kurumsal";

      let msg = "";
      if (scaleLabel) {
        msg += `• Kapsam: ${scaleLabel}\n`;
      }
      if (addonsParam) {
        const addonNames: Record<string, string> = {
          auth: "Kullanıcı Yönetimi / Üyelik",
          payment: "Ödeme Entegrasyonu",
          multilang: "Çoklu Dil Desteği",
          dashboard: "Yönetici Paneli",
          seo: "Gelişmiş SEO & Analitik",
        };
        const selectedList = addonsParam
          .split(",")
          .map((id) => addonNames[id] || id)
          .join(", ");
        msg += `• Seçilen Modüller: ${selectedList}\n`;
      }
      if (msg) {
        setFormState((s) => ({
          ...s,
          message: s.message
            ? s.message
            : `Merhaba Marki Labs ekibi,\n\nWeb sitenizdeki proje planlayıcı üzerinden şu projem için yapılandırma oluşturdum:\n${msg}\nBu projenin detaylarını görüşmek ve teklif almak istiyorum.`,
        }));
      }
    }
  }, [serviceParam, scaleParam, addonsParam]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setFormLoading(false);
    setFormSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 bg-white text-[#1c1e21]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#1877f2] block mb-4">
            İletişim
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1c1e21] tracking-tight leading-[1.05] mb-5">
            Konuşalım.
          </h1>
          <p className="text-[#65676b] text-xl max-w-xl leading-relaxed">
            Projeniz hakkında birkaç dakikanızı ayırın.
            Biz gerisi için buradayız.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* ── CONTACT FORM ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          >
            <div className="rounded-2xl border border-[#e4e6ea] bg-white overflow-hidden card-shadow">
              <div className="p-7 border-b border-[#e4e6ea]">
                <h2 className="text-lg font-bold text-[#1c1e21]">Proje Formu</h2>
                <p className="text-[#65676b] text-sm mt-1">
                  Formu doldurun, en kısa sürede geri döneceğiz.
                </p>
              </div>

              <div className="p-7">
                <AnimatePresence mode="wait">
                  {formSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-14 text-center"
                    >
                      <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-5 border border-green-200">
                        <CheckCircle2 size={26} className="text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold text-[#1c1e21] mb-2">
                        Mesajınız alındı!
                      </h3>
                      <p className="text-[#65676b] text-sm max-w-xs">
                        En geç 24 saat içinde e-posta ile geri döneceğiz.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleFormSubmit}
                      className="space-y-4"
                    >
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-medium text-[#65676b] mb-1.5 block">
                            Ad Soyad *
                          </label>
                          <input
                            required
                            value={formState.name}
                            onChange={(e) =>
                              setFormState((s) => ({ ...s, name: e.target.value }))
                            }
                            className="w-full px-4 py-2.5 bg-[#f0f2f5] border border-[#e4e6ea] rounded-lg text-sm text-[#1c1e21] placeholder-[#bcc0c4] focus:outline-none focus:border-[#1877f2] focus:ring-2 focus:ring-[#1877f2]/15 transition-all"
                            placeholder="Adınız"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-medium text-[#65676b] mb-1.5 block">
                            E-posta *
                          </label>
                          <input
                            required
                            type="email"
                            value={formState.email}
                            onChange={(e) =>
                              setFormState((s) => ({ ...s, email: e.target.value }))
                            }
                            className="w-full px-4 py-2.5 bg-[#f0f2f5] border border-[#e4e6ea] rounded-lg text-sm text-[#1c1e21] placeholder-[#bcc0c4] focus:outline-none focus:border-[#1877f2] focus:ring-2 focus:ring-[#1877f2]/15 transition-all"
                            placeholder="email@firma.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-medium text-[#65676b] mb-1.5 block">
                          Şirket
                        </label>
                        <input
                          value={formState.company}
                          onChange={(e) =>
                            setFormState((s) => ({ ...s, company: e.target.value }))
                          }
                          className="w-full px-4 py-2.5 bg-[#f0f2f5] border border-[#e4e6ea] rounded-lg text-sm text-[#1c1e21] placeholder-[#bcc0c4] focus:outline-none focus:border-[#1877f2] focus:ring-2 focus:ring-[#1877f2]/15 transition-all"
                          placeholder="Şirketinizin adı"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-medium text-[#65676b] mb-1.5 block">
                          İlgilendiğiniz Hizmet
                        </label>
                        <select
                          value={formState.service}
                          onChange={(e) =>
                            setFormState((s) => ({ ...s, service: e.target.value }))
                          }
                          className="w-full px-4 py-2.5 bg-[#f0f2f5] border border-[#e4e6ea] rounded-lg text-sm text-[#1c1e21] focus:outline-none focus:border-[#1877f2] focus:ring-2 focus:ring-[#1877f2]/15 transition-all appearance-none"
                        >
                          <option value="">Seçin...</option>
                          <option value="yazilim">Yazılım Geliştirme</option>
                          <option value="tasarim">Grafik Tasarım</option>
                          <option value="ikisi">Yazılım + Tasarım</option>
                          <option value="diger">Diğer</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-medium text-[#65676b] mb-1.5 block">
                          Projenizi Anlatın *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formState.message}
                          onChange={(e) =>
                            setFormState((s) => ({ ...s, message: e.target.value }))
                          }
                          className="w-full px-4 py-2.5 bg-[#f0f2f5] border border-[#e4e6ea] rounded-lg text-sm text-[#1c1e21] placeholder-[#bcc0c4] focus:outline-none focus:border-[#1877f2] focus:ring-2 focus:ring-[#1877f2]/15 transition-all resize-none"
                          placeholder="Hedefleriniz, beklentileriniz, bütçe aralığınız..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={formLoading}
                        className="w-full flex items-center justify-center gap-2 py-3 bg-[#1877f2] hover:bg-[#0d5ac8] text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                      >
                        {formLoading ? (
                          <Loader2 size={17} className="animate-spin" />
                        ) : (
                          <>
                            Gönder
                            <ArrowRight size={16} />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Contact info cards */}
            <div className="mt-5 grid grid-cols-3 gap-3">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="p-4 rounded-xl border border-[#e4e6ea] bg-white hover:border-[#1877f2]/30 hover:shadow-sm transition-all duration-200 card-shadow"
                >
                  <info.icon size={16} className="text-[#1877f2] mb-2" />
                  <p className="text-xs font-medium text-[#bcc0c4] mb-0.5">{info.label}</p>
                  <p className="text-xs text-[#1c1e21] truncate font-medium">{info.value}</p>
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── FAQ SECTION ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {/* Info block */}
            <div className="rounded-2xl border border-[#e4e6ea] bg-[#f0f2f5] p-8">
              <h2 className="text-lg font-bold text-[#1c1e21] mb-2">
                Neden Marki Labs?
              </h2>
              <p className="text-[#65676b] text-sm leading-relaxed mb-6">
                3+ yıllık deneyim, 50+ tamamlanan proje ve %99 müşteri memnuniyetiyle
                işletmenizi büyütmek için buradayız.
              </p>
              <ul className="space-y-3">
                {[
                  "Hızlı teslimat, net süreç",
                  "Yazılım ve tasarım tek elden",
                  "Teslim sonrası destek dahil",
                  "Proje başına özel ekip",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-[#1c1e21]">
                    <div className="w-5 h-5 rounded-full bg-[#e7f0fd] flex items-center justify-center shrink-0">
                      <CheckCircle2 size={11} className="text-[#1877f2]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <div className="rounded-2xl border border-[#e4e6ea] bg-white card-shadow overflow-hidden">
              <div className="px-7 py-5 border-b border-[#e4e6ea]">
                <h2 className="text-lg font-bold text-[#1c1e21]">Sık Sorulan Sorular</h2>
              </div>
              <div className="divide-y divide-[#e4e6ea]">
                {faqs.map((faq, i) => (
                  <div key={i}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-7 py-4 text-left hover:bg-[#f0f2f5] transition-colors"
                    >
                      <span className="text-sm font-medium text-[#1c1e21]">{faq.q}</span>
                      <ChevronDown
                        size={16}
                        className={`text-[#65676b] shrink-0 ml-4 transition-transform duration-200 ${
                          openFaq === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-7 pb-4 text-sm text-[#65676b] leading-relaxed bg-[#f0f2f5]">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Send email CTA */}
            <div className="rounded-2xl border border-[#1877f2]/20 bg-[#e7f0fd] p-7 flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-[#1c1e21] text-sm mb-1">
                  Doğrudan e-posta gönderin
                </p>
                <p className="text-xs text-[#65676b]">info@markilabs.com</p>
              </div>
              <a
                href="mailto:info@markilabs.com"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#1877f2] hover:bg-[#0d5ac8] text-white text-sm font-semibold rounded-lg transition-all shrink-0"
              >
                <Send size={14} />
                Yaz
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
