"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11C4.482 20.5 12 20.5 12 20.5s7.518 0 9.388-.553a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const footerLinks = {
  Çözümler: [
    { label: "Yazılım Geliştirme", href: "/cozumler/yazilim" },
    { label: "Tasarım Stüdyosu", href: "/cozumler/tasarim" },
    { label: "Mağaza & Vitrin", href: "/magaza" },
    { label: "Tüm Çözümler", href: "/cozumler" },
  ],
  Şirket: [
    { label: "Biz Kimiz", href: "/biz-kimiz" },
    { label: "İletişim", href: "/iletisim" },
  ],
  Destek: [
    { label: "Yardım Merkezi", href: "/destek" },
    { label: "Destek Talebi", href: "/destek-talebi" },
  ],
  Yasal: [
    { label: "KVKK Aydınlatma", href: "/kvkk" },
    { label: "Gizlilik Politikası", href: "/gizlilik" },
    { label: "Kullanım Koşulları", href: "/kosullar" },
  ],
};

const socials = [
  { Icon: InstagramIcon, href: "https://instagram.com/marki.labs", label: "Instagram" },
  { Icon: LinkedinIcon, href: "https://linkedin.com/company/markilabs", label: "LinkedIn" },
  { Icon: YoutubeIcon, href: "https://youtube.com/c/markilabs", label: "YouTube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-[#e4e6ea] bg-white text-[#1c1e21]">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-12">
        {/* ── 1. NEWSLETTER STRIP (Meta Style) ── */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 py-14 border-b border-[#e4e6ea]">
          <div className="max-w-xs">
            <h3 className="text-[17px] font-semibold text-[#1c1e21] tracking-tight leading-snug">
              Marki Labs'ten haberler ve güncellemeler alın
            </h3>
          </div>
          
          <div className="flex-1 max-w-xl w-full">
            {submitted ? (
              <div className="flex items-center gap-2 text-[#1877f2] font-semibold text-sm py-2">
                <span>✓ Aramıza katıldınız! Güncellemeler adresinize iletilecektir.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-3 mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-posta"
                  required
                  className="flex-1 px-4 py-3 bg-white border border-[#ccd0d5] rounded-xl text-sm text-[#1c1e21] placeholder-[#65676b] focus:outline-none focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2] transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 border border-[#ccd0d5] bg-white hover:bg-[#f0f2f5] text-[#1c1e21] text-sm font-semibold rounded-full transition-all shrink-0"
                >
                  Kaydol
                </button>
              </form>
            )}
            
            <p className="text-[11px] text-[#65676b] leading-relaxed">
              Kaydolarak, Marki Labs'in mevcut ve gelecekteki hizmetleri hakkında güncellemeler ve pazarlama iletileri (e-posta vb.) almayı kabul edersiniz. İstediğiniz zaman iletilerde yer alan abonelikten çıkma bağlantısına tıklayarak onayınızı geri çekebilirsiniz. Aboneliğiniz,{" "}
              <Link href="/kosullar" className="underline hover:text-[#1877f2] transition-colors">Kullanım Koşulları</Link>
              {" ve "}
              <Link href="/gizlilik" className="underline hover:text-[#1877f2] transition-colors">Gizlilik Politikası</Link>
              {" hükümlerine tabidir."}
            </p>
          </div>
        </div>

        {/* ── 2. MAIN FOOTER (Meta Style) ── */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-6 gap-10">
          {/* Logo and Social Media Column */}
          <div className="md:col-span-2 flex flex-col items-start gap-2">
            <Link href="/" className="flex items-center overflow-hidden h-14">
              <img
                src="/markilabs_bg.png"
                alt="Marki Labs"
                className="h-36 w-auto object-contain transition-transform duration-200 hover:scale-102 -my-8"
              />
            </Link>
            
            {/* Social Media Row (Meta style circular/borderless) */}
            <div className="flex items-center gap-5 pt-1">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-[#1c1e21] hover:text-[#1877f2] transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1c1e21]">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[#65676b] hover:text-[#1877f2] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── 3. BOTTOM BAR ── */}
        <div className="py-8 border-t border-[#e4e6ea] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#65676b]">
            © {new Date().getFullYear()} Marki Labs. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-[#65676b]">
            İstanbul, Türkiye &middot; Küresel Erişim
          </p>
        </div>
      </div>
    </footer>
  );
}
