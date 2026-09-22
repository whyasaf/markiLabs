"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Mega menu content data (Meta Style, Text-Only, No Descriptions) ──────────
const MEGAS = {
  cozumler: {
    columns: [
      {
        heading: "YAZILIM",
        links: [
          { label: "Web Uygulamaları", href: "/cozumler/yazilim" },
          { label: "Mobil Uygulama",   href: "/cozumler/yazilim" },
          { label: "Backend & API",    href: "/cozumler/yazilim" },
          { label: "DevOps & Bulut",   href: "/cozumler/yazilim" },
        ],
      },
      {
        heading: "TASARIM",
        links: [
          { label: "Marka Kimliği", href: "/cozumler/tasarim" },
          { label: "UI/UX Tasarım",  href: "/cozumler/tasarim" },
          { label: "Design System",  href: "/cozumler/tasarim" },
          { label: "Motion Design",   href: "/cozumler/tasarim" },
        ],
      },
    ],
    featured: {
      label: "Tüm Çözümlerimiz",
      href: "/cozumler",
    },
  },

  biz: {
    columns: [
      {
        heading: "HAKKIMIZDA",
        links: [
          { label: "Vizyon & Misyon",  href: "/biz-kimiz" },
          { label: "Çalışma Kültürü", href: "/biz-kimiz" },
          { label: "Kariyer",         href: "/iletisim" },
        ],
      },
      {
        heading: "STANDARTLARIMIZ",
        links: [
          { label: "Kalite Garantisi", href: "/biz-kimiz" },
          { label: "Destek & Bakım",   href: "/biz-kimiz" },
        ],
      },
    ],
    featured: {
      label: "Hikayemizi İnceleyin",
      href: "/biz-kimiz",
    },
  },

  iletisim: {
    columns: [
      {
        heading: "İLETİŞİM KANALLARI",
        links: [
          { label: "E-posta", href: "mailto:info@markilabs.com" },
          { label: "Telefon",  href: "tel:+905550000000" },
          { label: "Merkez Ofis",       href: "/iletisim" },
        ],
      },
      {
        heading: "HIZLI ERİŞİM",
        links: [
          { label: "WhatsApp", href: "https://wa.me/905550000000" },
        ],
      },
    ],
    featured: {
      label: "Teklif Formunu Doldurun",
      href: "/iletisim",
    },
  },

  magaza: {
    columns: [
      {
        heading: "YAZILIM",
        links: [
          { label: "Kurumsal Web Sitesi", href: "/magaza/kurumsal-site" },
          { label: "Web Sitesi", href: "/magaza" },
        ],
      },
      {
        heading: "TASARIM",
        links: [
          { label: "Logo Tasarımı", href: "/magaza" },
          { label: "Kurumsal Kimlik", href: "/magaza" },
          { label: "Arayüz Tasarımı", href: "/magaza/marki-design-system" },
          { label: "Afiş / Banner", href: "/magaza" },
        ],
      },
    ],
    featured: {
      label: "Vitrin Ürünlerini İnceleyin",
      href: "/magaza",
    },
  },

  kesfet: {
    columns: [
      {
        heading: "PROJELERİMİZ",
        links: [
          { label: "Cultivated Voice System", href: "https://cultivatedvoicesystem.com" },
          { label: "Neon Oto Kurtarma", href: "https://neonotokurtarma.com" },
          { label: "Kaçış Alanı F1", href: "https://instagram.com/kacisalanif1" },
        ],
      },
      {
        heading: "ÜRETİM YAPISI",
        links: [
          { label: "Teknoloji Yığınımız", href: "/biz-kimiz" },
          { label: "Tasarım İlkelerimiz", href: "/biz-kimiz" },
        ],
      },
      {
        heading: "BİZ KİMİZ",
        links: [
          { label: "Kurucular",          href: "/biz-kimiz" },
          { label: "Vizyon ve Misyon",   href: "/biz-kimiz" },
          { label: "Çalışma Kültürü",    href: "/biz-kimiz" },
          { label: "Kariyer",            href: "/iletisim" },
        ],
      },
    ],
    featured: {
      label: "Tüm Projeleri Keşfet",
      href: "/cozumler",
    },
  },

  destek: {
    columns: [
      {
        heading: "DESTEK VE YARDIM",
        links: [
          { label: "Müşteri Destek Formu", href: "/destek-talebi" },
          { label: "E-posta Destek", href: "mailto:info@markilabs.com" },
          { label: "WhatsApp Destek Hattı", href: "https://wa.me/905550000000" },
        ],
      },
      {
        heading: "BAKIM & YÖNETİM",
        links: [
          { label: "Sunucu ve Altyapı Yönetimi", href: "/destek-talebi" },
          { label: "Periyodik Güncelleme ve Bakım", href: "/destek-talebi" },
          { label: "Sistem Sağlığı ve İzleme", href: "/destek-talebi" },
        ],
      },
      {
        heading: "YASAL & GÜVENLİK",
        links: [
          { label: "KVKK Aydınlatma Metni", href: "/kvkk" },
          { label: "Gizlilik Politikası",   href: "/gizlilik" },
          { label: "Kullanım Koşulları",    href: "/kosullar" },
        ],
      },
    ],
    featured: {
      label: "Marki. Destek Merkezi",
      href: "/destek-talebi",
    },
  },
};

const navLinks = [
  { href: "/cozumler", label: "Çözümler", mega: "cozumler" },
  { href: "/magaza",    label: "Mağaza",    mega: "magaza" },
  { href: "/iletisim",  label: "İletişim",  mega: "iletisim" },
];

export default function Navbar() {
  const [active,       setActive]       = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled,     setScrolled]     = useState(false);
  const [visible,      setVisible]      = useState(true);
  const lastScrollY = useRef(0);
  const pathname   = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef     = useRef<HTMLElement>(null);

  useEffect(() => {
    const fn = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 8);
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setActive(null); setIsMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setActive(null);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const open  = (key: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setActive(key); };
  const close = ()            => { closeTimer.current = setTimeout(() => setActive(null), 120); };
  const keep  = ()            => { if (closeTimer.current) clearTimeout(closeTimer.current); };

  return (
    <>
      {/* ═══════════════════════ HEADER (Meta Style, Spacious Layout) */}
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled || active
            ? "bg-white/85 backdrop-blur-xl shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            : "bg-white/75 backdrop-blur-lg"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="flex items-center h-[80px] gap-8">
            
            {/* Logo wrapper to clip whitespace */}
            <Link href="/" className="flex items-center overflow-hidden h-[80px] shrink-0" aria-label="Marki Labs">
              <img
                src="/markilabs_bg.png"
                alt="Marki Labs"
                className="h-44 w-auto object-contain transition-transform duration-200 hover:scale-102 -my-10"
              />
            </Link>

            {/* Nav links (Clean sentence case, soft gray background pill on hover) */}
            <nav className="hidden md:flex items-center gap-2 flex-1 pl-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                const isOpen   = active === link.mega;
                return (
                  <div
                    key={link.href}
                    onMouseEnter={() => open(link.mega)}
                    onMouseLeave={close}
                    className="relative"
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-2 text-[15px] font-semibold tracking-wide transition-all duration-200 rounded-xl hover:bg-[#f0f2f5] ${
                        isActive || isOpen
                          ? "text-[#1877f2] bg-[#f0f2f5]/60"
                          : "text-[#1c1e21] hover:text-[#1c1e21]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </div>
                );
              })}
            </nav>

            {/* Right actions (Meta style explore link, support text link & pill CTA button) */}
            <div className="hidden md:flex items-center gap-2 ml-auto">
              {/* Marki'yi Keşfet (Mega Menu Link) */}
              <div
                onMouseEnter={() => open("kesfet")}
                onMouseLeave={close}
                className="relative"
              >
                <Link
                  href="/cozumler"
                  className={`block px-4 py-2 text-[15px] font-semibold tracking-wide transition-all duration-200 rounded-xl hover:bg-[#f0f2f5] ${
                    active === "kesfet" ? "text-[#1877f2] bg-[#f0f2f5]/60" : "text-[#1c1e21] hover:text-[#1c1e21]"
                  }`}
                >
                  Marki&apos;yi Keşfet
                </Link>
              </div>

              {/* Destek (Mega Menu Link) */}
              <div
                onMouseEnter={() => open("destek")}
                onMouseLeave={close}
                className="relative"
              >
                <Link
                  href="/destek"
                  className={`block px-4 py-2 text-[15px] font-semibold tracking-wide transition-all duration-200 rounded-xl hover:bg-[#f0f2f5] ${
                    active === "destek" ? "text-[#1877f2] bg-[#f0f2f5]/60" : "text-[#1c1e21] hover:text-[#1c1e21]"
                  }`}
                >
                  Destek
                </Link>
              </div>

              {/* Proje Başlat */}
              <Link
                href="/iletisim"
                className="px-7 py-2.5 text-[14.5px] font-bold bg-[#1877f2] hover:bg-[#0d5ac8] text-white rounded-full transition-all duration-200 active:scale-95 shadow-sm"
              >
                Proje Başlat
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden ml-auto p-2 rounded-xl text-[#65676b] hover:bg-[#f0f2f5] transition-colors"
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ═══════════════════════ MEGA MENU RENDERER (Clean Meta style columns, text-only, no descriptions) */}
        <AnimatePresence>
          {active && MEGAS[active as keyof typeof MEGAS] && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              onMouseEnter={keep} onMouseLeave={close}
              className="absolute top-full left-0 right-0 bg-white shadow-[0_12px_24px_rgba(0,0,0,0.04)]"
            >
              <div className="max-w-[1600px] mx-auto px-8 md:px-16 py-12">
                <div className="flex gap-24">
                  {MEGAS[active as keyof typeof MEGAS].columns.map((col) => (
                    <div key={col.heading} className="min-w-[240px]">
                      <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#65676b] mb-6">
                        {col.heading}
                      </p>
                      <ul className="space-y-4">
                        {col.links.map((item) => (
                          <li key={item.label}>
                            <Link href={item.href} onClick={() => setActive(null)}
                              className="group block transition-colors"
                            >
                              <span className="text-[15px] font-semibold text-[#1c1e21] group-hover:text-[#1877f2] transition-colors leading-tight">
                                {item.label}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="flex-1 max-w-[300px] ml-auto">
                    <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#65676b] mb-6">ÖNE ÇIKAN</p>
                    <Link href={MEGAS[active as keyof typeof MEGAS].featured.href} onClick={() => setActive(null)}
                      className="group block p-6 rounded-2xl bg-[#f0f2f5]/50 hover:bg-[#e7f0fd]/40 border border-[#e4e6ea] hover:border-[#1877f2]/20 transition-all"
                    >
                      <p className="text-[15px] font-bold text-[#1c1e21] mb-3">
                        {MEGAS[active as keyof typeof MEGAS].featured.label}
                      </p>
                      <span className="flex items-center gap-1.5 text-[13px] font-semibold text-[#1877f2]">
                        Devam et <ArrowRight size={13} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ═══════════════════════ MOBILE MENU */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/25 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="absolute right-0 top-0 bottom-0 w-[300px] bg-white flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#e4e6ea]">
                <Link href="/" onClick={() => setIsMobileOpen(false)} className="inline-block overflow-hidden h-10 flex items-center shrink-0">
                  <img
                    src="/markilabs_bg.png"
                    alt="Marki Labs"
                    className="h-24 w-auto object-contain -my-4"
                  />
                </Link>
                <button onClick={() => setIsMobileOpen(false)} className="p-2 rounded-xl text-[#65676b] hover:bg-[#f0f2f5]">
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-5 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div key={link.href} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 + 0.05 }}>
                    <Link href={link.href}
                      className={`flex items-center px-4 py-3.5 rounded-xl text-sm font-semibold transition-colors ${
                        pathname === link.href ? "bg-[#e7f0fd] text-[#1877f2]" : "text-[#65676b] hover:bg-[#f0f2f5] hover:text-[#1c1e21]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Marki'yi Keşfet */}
                <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }}>
                  <Link href="/cozumler" onClick={() => setIsMobileOpen(false)}
                    className="flex items-center px-4 py-3.5 rounded-xl text-sm font-semibold text-[#65676b] hover:bg-[#f0f2f5] hover:text-[#1c1e21]"
                  >
                    Marki&apos;yi Keşfet
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
