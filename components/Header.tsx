"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { NAV, SITE } from "@/lib/site";

const EASE = [0.76, 0, 0.24, 1] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="relative z-[70]">
        <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-4 md:px-8">
          <Link href="/" aria-label="Marki Labs ana sayfa" className="relative z-[70]">
            <Image
              src={open ? "/logo-white.png" : "/logo.png"}
              alt="Marki Labs"
              width={484}
              height={76}
              priority
              data-site-logo
              className="h-[22px] w-auto md:h-[26px]"
            />
          </Link>

          <div className="relative z-[70] flex items-center gap-2">
            <a
              href={`mailto:${SITE.email}`}
              data-site-cta
              className="hidden min-h-11 items-center gap-2.5 rounded-full bg-ink px-5 text-[14px] font-medium text-white transition-colors hover:bg-blue sm:inline-flex"
            >
              Konuşalım
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="inline-flex min-h-11 items-center gap-3 rounded-full bg-white px-5 text-[14px] font-medium text-ink"
            >
              {open ? "Kapat" : "Menü"}
              <span aria-hidden className="relative block h-2.5 w-4">
                <span
                  className={`absolute left-0 h-[1.5px] w-full bg-current transition-transform duration-300 ${
                    open ? "top-1 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-[1.5px] w-full bg-current transition-transform duration-300 ${
                    open ? "top-1 -rotate-45" : "top-2"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menüsü"
            className="fixed inset-0 z-[60] flex flex-col bg-ink px-4 pb-6 pt-28 text-white md:px-8"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <nav className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center">
              {[{ label: "Ana sayfa", href: "/" }, ...NAV, { label: "İletişim", href: "/iletisim" }].map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-6 py-1 text-[clamp(40px,7vw,96px)] font-medium leading-[1.05] tracking-[-0.04em]"
                  >
                    <span className="label text-white/40">0{i + 1}</span>
                    <span className="transition-[color,transform] duration-500 group-hover:translate-x-3 group-hover:text-blue">
                      {l.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mx-auto flex w-full max-w-[1400px] flex-wrap justify-between gap-4 border-t border-white/15 pt-5 text-[15px] text-white/70">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp · {SITE.whatsappLabel}
              </a>
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
