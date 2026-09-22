"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Globe,
  Smartphone,
  Server,
  Database,
  GitBranch,
  Zap,
  Shield,
  CheckCircle2,
} from "lucide-react";
import Card from "@/components/ui/Card";

const services = [
  {
    icon: Globe,
    title: "Web Uygulamaları",
    desc: "Next.js, React ve TypeScript ile ultra-hızlı, SEO-dostu web uygulamaları.",
  },
  {
    icon: Smartphone,
    title: "Mobil Uygulama",
    desc: "React Native ile iOS ve Android'de tek kod tabanıyla yayınlayın.",
  },
  {
    icon: Server,
    title: "Backend Sistemleri",
    desc: "Node.js ve Python ile yüksek performanslı, ölçeklenebilir API'ler.",
  },
  {
    icon: Database,
    title: "Veritabanı Mimarisi",
    desc: "PostgreSQL, MongoDB ve Redis ile optimize edilmiş veri katmanları.",
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    desc: "Otomatik deployment pipeline'ları ve bulut altyapı yönetimi.",
  },
  {
    icon: Shield,
    title: "Güvenlik & Test",
    desc: "Kapsamlı test coverage ve modern güvenlik standartları.",
  },
];

const process = [
  { step: "01", title: "Keşif", desc: "Gereksinimlerinizi ve hedeflerinizi derinlemesine anlıyoruz." },
  { step: "02", title: "Mimari", desc: "Ölçeklenebilir teknik mimari ve teknoloji seçimi yapıyoruz." },
  { step: "03", title: "Geliştirme", desc: "Agile metodoloji ile sprint bazlı, şeffaf geliştirme süreci." },
  { step: "04", title: "Test & Launch", desc: "Kapsamlı testler ve sorunsuz production geçişi." },
];

export default function YazilimPageClient() {
  return (
    <div className="pt-32 pb-28 bg-white text-[#1c1e21]">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#1877f2] block mb-4">
            Yazılım Çözümleri
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1c1e21] tracking-tight leading-[0.95] mb-6">
            Kodu sanat haline
            <br />
            <span className="gradient-text-brand">getiriyoruz.</span>
          </h1>
          <p className="text-[#65676b] text-xl max-w-2xl leading-relaxed mb-10">
            Modern teknolojilerle inşa edilen, performansı ön planda tutan ve
            kullanıcı deneyimini merkeze alan yazılımlar.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1877f2] hover:bg-[#0d5ac8] text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              Projeyi Başlat
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/cozumler"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#e4e6ea] hover:border-[#1877f2]/30 hover:bg-[#e7f0fd] text-[#1c1e21] hover:text-[#1877f2] font-semibold rounded-xl transition-all duration-200"
            >
              Tüm Çözümler
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1e21] mb-3">
            Geliştirme Hizmetleri
          </h2>
          <p className="text-[#65676b]">
            Full-stack'ten mobil'e, backend'den DevOps'a tüm yazılım ihtiyaçlarınız.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Card glowColor="rgba(24, 119, 242, 0.12)" className="h-full border border-[#e4e6ea]">
                <div className="p-7">
                  <div className="w-10 h-10 rounded-lg bg-[#e7f0fd] flex items-center justify-center mb-4">
                    <svc.icon size={18} className="text-[#1877f2]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1c1e21] mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-[#65676b] text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quality Standards Callout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card glowColor="rgba(24, 119, 242, 0.12)" className="overflow-hidden border border-[#e4e6ea]">
            <div className="p-10 lg:p-16 relative bg-white">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#1877f2] opacity-5 blur-[80px] rounded-full" />
              <div className="max-w-2xl relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#e7f0fd] flex items-center justify-center">
                    <Zap size={18} className="text-[#1877f2]" />
                  </div>
                  <span className="text-[#1877f2] text-sm font-semibold">
                    Performans ve Ölçeklenebilirlik
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1e21] mb-4">
                  Geleceğe hazır kod yapıları.
                </h2>
                <p className="text-[#65676b] leading-relaxed mb-8">
                  Yazılımlarımızı en güncel teknolojilerle ve clean-code prensiplerine
                  sadık kalarak geliştiriyoruz. Bu sayede projeniz büyüdükçe altyapınız da sorunsuz ölçeklenir.
                </p>
                <ul className="space-y-3">
                  {[
                    "Hızlı sayfa yükleme ve yüksek Lighthouse skorları",
                    "Modüler ve kolayca genişletilebilir mimari",
                    "SEO dostu, arama motorlarında üst sıralar",
                    "Güvenli veri şifreleme ve yetkilendirme katmanları",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[#1c1e21] text-sm">
                      <CheckCircle2 size={15} className="text-[#1877f2] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Process */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1e21] mb-3">
            Çalışma Sürecimiz
          </h2>
          <p className="text-[#65676b]">Şeffaf, hızlı ve sonuç odaklı.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="p-7 rounded-2xl border border-[#e4e6ea] bg-[#f0f2f5] h-full card-shadow">
                <div className="text-4xl font-bold text-[#bcc0c4] mb-4 font-mono">
                  {step.step}
                </div>
                <h3 className="text-base font-semibold text-[#1c1e21] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#65676b] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
