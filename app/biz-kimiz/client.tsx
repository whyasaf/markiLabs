"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Eye, Heart, Rocket } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Vizyon",
    desc: "Teknolojinin insan potansiyelini artıracağına inanıyoruz. Geliştirdiğimiz her yazılım ve yaptığımız her tasarım bu inancın bir yansımasıdır.",
  },
  {
    icon: Heart,
    title: "Misyon",
    desc: "İşletmeleri geleceğe hazırlamak için nitelikli yazılım ve güçlü grafik tasarım çözümleri sunuyoruz. Her ölçekteki şirket en iyi teknolojiye ve tasarıma erişebilmelidir.",
  },
  {
    icon: Rocket,
    title: "Felsefe",
    desc: "Sıradanlıkla yetinmiyoruz. Basit çözümler yerine doğru çözümleri arıyoruz. Hızlı değil sürdürülebilir, iyi değil mükemmel.",
  },
];

const team = [
  {
    name: "Marki Ekibi",
    role: "Yazılım Mühendisleri",
    emoji: "👨‍💻",
    desc: "Full-stack, mobil ve backend geliştirme uzmanları",
  },
  {
    name: "Marki Ekibi",
    role: "Tasarım Direktörleri",
    emoji: "🎨",
    desc: "UI/UX, marka kimliği ve motion design",
  },
  {
    name: "Marki Ekibi",
    role: "Proje Yöneticileri",
    emoji: "📋",
    desc: "Zamanında teslimat ve kusursuz müşteri iletişimi",
  },
];

const timeline = [
  { year: "2021", event: "Marki Labs kuruldu. İlk web ve mobil geliştirme projeleri hayata geçirildi." },
  { year: "2022", event: "Tasarım stüdyosu kolunu açtık. 10+ marka kimliği ve UI/UX projesi tamamlandı." },
  { year: "2023", event: "Yazılım ve tasarım koordinasyonunu artırarak uçtan uca ürün geliştirme modeline geçtik." },
  { year: "2024", event: "50+ tamamlanan proje, 30+ mutlu müşteri ile uluslararası portföye ulaştık." },
  { year: "2025+", event: "Kurumsal ölçeklenebilir yazılım çözümleri ve premium grafik tasarım hizmetlerine odaklanıyoruz." },
];

export default function BizKimizPageClient() {
  return (
    <div className="pt-32 pb-28 bg-white text-[#1c1e21] overflow-hidden">
      {/* Cinematic Hero */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 mb-32 bg-white">
        <div className="absolute -top-20 -left-40 w-[600px] h-[600px] rounded-full bg-[#1877f2] opacity-[0.03] blur-[120px] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#1877f2] block mb-6">
            Biz Kimiz
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-[#1c1e21] tracking-tight leading-[0.9] mb-8">
            Geleceği
            <br />
            tasarlayanlar.
          </h1>
          <div className="max-w-2xl">
            <p className="text-xl text-[#65676b] leading-relaxed mb-8">
              Marki Labs, yazılım ve tasarımın kesiştiği noktada var olan bir
              yaratıcı stüdyodur. Birleştiğimiz tek amaç: olağanüstü ürünler.
            </p>
            <p className="text-[#65676b] leading-relaxed">
              Farklı disiplinlerden gelen yüksek motivasyonlu bir ekiple, her
              müşterimizin potansiyelini maksimuma çıkarmak için çalışıyoruz.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Large quote */}
      <div className="border-y border-[#e4e6ea] bg-[#f0f2f5] py-24 mb-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto px-6 lg:px-8 text-center"
        >
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1e21] leading-[1.1] tracking-tight">
            &ldquo;Tasarım ve yazılım, doğru birleştiğinde yalnızca bir ürün değil —
            <span className="text-[#1877f2]"> markanızın en büyük gücü haline gelir.</span>&rdquo;
          </p>
          <p className="text-[#65676b] mt-6 text-sm">— Marki Labs Kurucu Ekibi</p>
        </motion.div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1e21]">
            Değerlerimiz
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <div className="p-8 rounded-2xl border border-[#e4e6ea] bg-white h-full group hover:border-[#1877f2]/30 transition-colors duration-300 card-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#e7f0fd] flex items-center justify-center mb-6 group-hover:bg-[#e7f0fd]/20 transition-colors">
                  <val.icon size={20} className="text-[#1877f2]" />
                </div>
                <h3 className="text-xl font-bold text-[#1c1e21] mb-3">{val.title}</h3>
                <p className="text-[#65676b] text-sm leading-relaxed">{val.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Founders Showcase */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1e21] mb-3">
            Kurucularımız
          </h2>
          <p className="text-[#65676b] max-w-2xl">
            Marki Labs'i geleceğe taşıyan, teknoloji ve tasarımı mükemmel uyumla birleştiren kurucu kadromuzla tanışın.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Asaf Yılmaz */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group flex flex-col md:flex-row gap-6 p-6 rounded-3xl border border-[#e4e6ea] bg-white hover:border-[#1877f2]/30 transition-all duration-300 card-shadow"
          >
            <div className="w-full md:w-48 h-64 md:h-auto shrink-0 relative rounded-2xl overflow-hidden bg-[#f0f2f5]">
              <img
                src="/images/founder_asaf.png"
                alt="Asaf Yılmaz"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-between py-2 flex-1">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1877f2] block mb-2">
                  Kurucu & Yazılım Direktörü
                </span>
                <h3 className="text-2xl font-bold text-[#1c1e21] mb-3">Asaf Yılmaz</h3>
                <p className="text-[#65676b] text-sm leading-relaxed mb-6">
                  Uçtan uca kurumsal sistemler, performans optimizasyonları ve yenilikçi yazılım mimarileri üzerine odaklanan Asaf, stüdyonun teknoloji vizyonunu yönetiyor.
                </p>
              </div>
              <Link
                href="/biz-kimiz/asaf-yilmaz"
                className="inline-flex items-center gap-2 text-[#1877f2] hover:text-[#0d5ac8] font-semibold text-sm group/btn"
              >
                Profili İncele
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Yusuf Demir */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group flex flex-col md:flex-row gap-6 p-6 rounded-3xl border border-[#e4e6ea] bg-white hover:border-[#1877f2]/30 transition-all duration-300 card-shadow"
          >
            <div className="w-full md:w-48 h-64 md:h-auto shrink-0 relative rounded-2xl overflow-hidden bg-[#f0f2f5]">
              <img
                src="/images/founder_yusuf.png"
                alt="Yusuf Demir"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-between py-2 flex-1">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1877f2] block mb-2">
                  Kurucu & Tasarım Direktörü
                </span>
                <h3 className="text-2xl font-bold text-[#1c1e21] mb-3">Yusuf Demir</h3>
                <p className="text-[#65676b] text-sm leading-relaxed mb-6">
                  Marka kimliği, etkileşimli arayüzler ve dijital estetik konularında derin uzmanlığa sahip olan Yusuf, stüdyomuzdan çıkan tüm işlerin görsel kalitesinden sorumlu.
                </p>
              </div>
              <Link
                href="/biz-kimiz/yusuf-demir"
                className="inline-flex items-center gap-2 text-[#1877f2] hover:text-[#0d5ac8] font-semibold text-sm group/btn"
              >
                Profili İncele
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Team */}
      <div className="border-y border-[#e4e6ea] bg-[#f0f2f5] py-24 mb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1e21] mb-3">
              Ekibimiz
            </h2>
            <p className="text-[#65676b]">
              Disiplinler arası uzmanlardan oluşan, tutkulu bir kadro.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 rounded-2xl border border-[#e4e6ea] bg-white text-center card-shadow"
              >
                <div className="text-5xl mb-4">{member.emoji}</div>
                <h3 className="text-[#1c1e21] font-semibold mb-1">{member.role}</h3>
                <p className="text-[#65676b] text-sm">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1e21] mb-3">
            Yolculuğumuz
          </h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#1877f2] via-[#e4e6ea] to-transparent" />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex gap-8 items-start pl-4"
              >
                <div className="relative z-10 w-8 h-8 rounded-full bg-[#e7f0fd] border-2 border-[#1877f2]/50 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#1877f2]" />
                </div>
                <div>
                  <div className="text-[#1877f2] font-mono text-sm font-semibold mb-1">
                    {item.year}
                  </div>
                  <p className="text-[#65676b] text-sm leading-relaxed">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-6 text-center bg-white"
      >
        <h3 className="text-3xl sm:text-4xl font-bold text-[#1c1e21] mb-4">
          Birlikte bir şeyler inşa edelim.
        </h3>
        <p className="text-[#65676b] mb-8">
          Projeniz için doğru ekiple tanışın.
        </p>
        <Link
          href="/iletisim"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#1877f2] hover:bg-[#0d5ac8] text-white font-semibold rounded-2xl transition-all duration-200 active:scale-[0.98] text-base shadow-sm hover:shadow-md"
        >
          İletişime Geç
          <ArrowRight size={18} />
        </Link>
      </motion.div>
    </div>
  );
}
