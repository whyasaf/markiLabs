"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowCircle, FillBubble } from "@/components/Arrow";
import { SITE } from "@/lib/site";

// Cümlenin içindeki seçim: "… hakkında yazıyorum."
const TOPICS = ["bir web sitesi", "bir ürün fikri", "bir şablon", "başka bir şey"];
// Konu seçilmezse mesajda bu yazar (dönen örnek mesaja girmez)
const TOPIC_FALLBACK = "bir proje";

// Boş alanlarda dönen örnekler (yalnızca görsel, mesaja girmez)
const DEMO_NAMES = ["Ayşe Kaya", "Mehmet Demir", "Zeynep Yılmaz", "Can Öztürk", "Elif Şahin", "Burak Aydın", "Defne Arslan"];
const DEMO_NOTES = [
  "Restoranım için menüsü olan bir web sitesi istiyorum.",
  "Bir uygulama fikrim var, nereden başlayacağımı bilmiyorum.",
  "Markam için logo ve kurumsal kimlik arıyorum.",
  "Mimarlık ofisimiz için Vitren gibi bir site istiyoruz.",
  "Mevcut sitemizi baştan yenilemek istiyoruz.",
];

/** running iken her `ms`'de bir sonraki örneğe geçer; hareketi azaltanlarda durur. */
/** Sırayla dönen örnek; ilk değişim `first` ms sonra (sayfa açılınca uzun beklenmesin), sonra her `ms`'de bir */
function useRotate(length: number, running: boolean, ms: number, first = ms) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!running) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let t = 0;
    const next = () => setI((x) => (x + 1) % length);
    const f = window.setTimeout(() => {
      next();
      t = window.setInterval(next, ms);
    }, first);
    return () => {
      window.clearTimeout(f);
      window.clearInterval(t);
    };
  }, [length, running, ms, first]);
  return i;
}

const SWAP_EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Kutunun genişliği, içindeki görünmez ayna metnin genişliğini izler. Örnekler dönerken yumuşakça kayar
 * (cümlenin geri kalanı zıplamasın), kullanıcı yazarken anında uyar. Ayna akışta kalır ve kutunun
 * yüksekliğini verir; inline-block olduğu için genişliği kutudan bağımsız, metnin kendi genişliğidir.
 */
function useSmoothWidth(smooth: boolean) {
  const box = useRef<HTMLSpanElement>(null);
  const mirror = useRef<HTMLSpanElement>(null);
  useLayoutEffect(() => {
    const b = box.current, m = mirror.current;
    if (!b || !m) return;
    const fit = () => (b.style.width = `${m.offsetWidth}px`);
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(m);
    return () => ro.disconnect();
  }, []);
  useLayoutEffect(() => {
    if (box.current) box.current.style.transition = smooth ? "width 0.7s cubic-bezier(0.22, 1, 0.36, 1)" : "none";
  }, [smooth]);
  return { box, mirror };
}

/** Dönen örnek yazı: eskisi yukarı kayıp solarken yenisi alttan gelir (ikisi üst üste, aynı anda) */
function SwapText({ text, className = "" }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <AnimatePresence initial={!reduce}>
      <motion.span
        key={text}
        className={`absolute left-0 top-0 block ${className}`}
        initial={{ y: "70%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "-70%", opacity: 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.8, ease: SWAP_EASE }}
      >
        {text}
      </motion.span>
    </AnimatePresence>
  );
}

/**
 * Cümlenin içinde duran konu seçici. Tarayıcının kendi açılır listesi dev fontu miras aldığı için
 * sitenin tasarımında, normal boyutlu bir liste açılır. Seçilmemişken konular soluk renkte döner.
 */
function TopicPicker({ value, onChange, blank }: { value: string | null; onChange: (v: string) => void; blank: string }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const wrap = useRef<HTMLSpanElement>(null);
  const listId = useId();
  const demo = useRotate(TOPICS.length, !value && !open, 2800, 1500);
  const { box: topicBox, mirror: topicMirror } = useSmoothWidth(!value);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    // Esc'yi sayfa genelinde dinle: Safari butona tıklayınca odak vermediği için butondaki onKeyDown'a güvenilemez
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const pick = (t: string) => {
    onChange(t);
    setOpen(false);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") return setOpen(false);
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) return setOpen(true);
      setActive((a) => (a + (e.key === "ArrowDown" ? 1 : -1) + TOPICS.length) % TOPICS.length);
    }
    if ((e.key === "Enter" || e.key === " ") && open) {
      e.preventDefault();
      pick(TOPICS[active]);
    }
  };

  const shown = value ?? TOPICS[demo];

  return (
    <span ref={wrap} className="relative inline-block align-baseline">
      <button
        type="button"
        aria-label={value ? `Konu: ${value}` : "Konu seçin"}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => {
          setActive(value ? TOPICS.indexOf(value) : demo);
          setOpen((o) => !o);
        }}
        onKeyDown={onKey}
        className={`${blank} inline-flex cursor-pointer items-baseline gap-[0.2em] overflow-hidden text-left`}
      >
        <span ref={topicBox} className="relative inline-block">
          <span ref={topicMirror} aria-hidden className="invisible inline-block whitespace-pre">
            {shown}
          </span>
          {value ? (
            <span className="absolute left-0 top-0 whitespace-pre">{value}</span>
          ) : (
            <SwapText text={shown} className="whitespace-pre text-blue/35" />
          )}
        </span>
        <span aria-hidden className={`text-[0.5em] text-blue/60 transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>
      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label="Konu seçin"
          className="absolute left-0 top-full z-20 mt-3 w-max min-w-[260px] rounded-[20px] bg-white p-2 text-[17px] font-normal leading-normal tracking-normal shadow-[0_30px_70px_-20px_rgba(43,46,58,.35)]"
        >
          {TOPICS.map((t, i) => (
            <li key={t} role="option" aria-selected={t === value}>
              <button
                type="button"
                onClick={() => pick(t)}
                onMouseEnter={() => setActive(i)}
                className={`flex w-full items-center justify-between gap-6 rounded-[14px] px-4 py-3 text-left transition-colors ${
                  i === active ? "bg-bg text-ink" : "text-ink/80"
                }`}
              >
                {t}
                {t === value && <span className="h-2 w-2 rounded-full bg-blue" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </span>
  );
}

/**
 * Boşluk doldurmalı cümle: ziyaretçi dev bir cümlenin boşluklarını doldurur.
 * Hiçbir veri kaydetmez veya göndermez; cümleyi WhatsApp'ta ya da e-posta uygulamasında hazır açar.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [nameFocused, setNameFocused] = useState(false);
  const [topic, setTopic] = useState<string | null>(null);
  const [note, setNote] = useState("");
  const [noteFocused, setNoteFocused] = useState(false);
  const [error, setError] = useState(false);

  // Üç alan aynı anda değişmesin diye farklı hızlarda döner
  const demoName = useRotate(DEMO_NAMES.length, !name && !nameFocused, 2200, 900);
  const { box: nameBox, mirror: nameMirror } = useSmoothWidth(!name && !nameFocused);
  const demoNote = useRotate(DEMO_NOTES.length, !note && !noteFocused, 3600, 2100);

  const ready = name.trim().length > 0 && note.trim().length > 0;
  const t = topic ?? TOPIC_FALLBACK;
  const sentence = () =>
    `Merhaba Marki Labs, ben ${name.trim()}. ${t.charAt(0).toUpperCase()}${t.slice(1)} hakkında yazıyorum. Kısaca şöyle: ${note.trim()}`;

  const go = (via: "wa" | "mail") => {
    if (!ready) {
      setError(true);
      return;
    }
    setError(false);
    if (via === "wa") window.open(`${SITE.whatsapp}?text=${encodeURIComponent(sentence())}`, "_blank", "noopener,noreferrer");
    else
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(`${t} — ${name.trim()}`)}&body=${encodeURIComponent(sentence())}`;
  };

  // Boşluklar: cümlenin içinde, mavi ve altı çizili. Odak kutusu yerine altı çizgisi koyu maviye döner.
  const blank =
    "border-0 border-b-[3px] border-blue/40 bg-transparent px-1 text-blue outline-none transition-colors placeholder:text-blue/35 focus:border-blue focus-visible:outline-none";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        go("wa");
      }}
      noValidate
    >
      <div className="text-[clamp(32px,4.6vw,72px)] font-medium leading-[1.35] tracking-[-0.035em]">
        <span>Merhaba Marki Labs, ben </span>
        <label className="sr-only" htmlFor="ad">
          Adınız
        </label>
        <span ref={nameBox} className="relative inline-block max-w-full align-baseline">
          <span ref={nameMirror} aria-hidden className="invisible inline-block whitespace-pre border-b-[3px] border-transparent px-1">
            {name || (nameFocused ? "adınız" : DEMO_NAMES[demoName])}
          </span>
          <input
            id="ad"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setNameFocused(true)}
            onBlur={() => setNameFocused(false)}
            placeholder={nameFocused ? "adınız" : ""}
            autoComplete="name"
            size={1}
            className={`${blank} absolute inset-0 w-full min-w-0`}
          />
          {!name && !nameFocused && (
            <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
              <SwapText text={DEMO_NAMES[demoName]} className="whitespace-pre px-1 text-blue/35" />
            </span>
          )}
        </span>
        <span>. </span>
        <TopicPicker value={topic} onChange={setTopic} blank={blank} />
        <span> hakkında yazıyorum. Kısaca şöyle: </span>
        <label className="sr-only" htmlFor="not">
          Mesajınız
        </label>
        <span className="relative mt-2 block">
          <textarea
            id="not"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            onFocus={() => setNoteFocused(true)}
            onBlur={() => setNoteFocused(false)}
            placeholder={noteFocused ? "ne düşündüğünüzü yazın" : ""}
            rows={2}
            className={`${blank} block w-full resize-none leading-[1.25]`}
          />
          {!note && !noteFocused && (
            <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden px-1 leading-[1.25]">
              <SwapText text={DEMO_NOTES[demoNote]} className="right-0 px-1 text-blue/35" />
            </span>
          )}
        </span>
      </div>

      {error && (
        <p role="alert" className="mt-6 text-[17px] text-[#c2410c]">
          Adınızı ve birkaç kelimeyle ne istediğinizi yazın, cümle tamamlansın.
        </p>
      )}

      <div className={`mt-14 flex flex-wrap gap-3 transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-60"}`}>
        <button
          type="submit"
          className="group relative isolate inline-flex min-h-16 items-center gap-4 overflow-hidden rounded-full bg-blue py-2 pl-8 pr-2 text-[18px] font-medium text-white"
        >
          <FillBubble className="right-2 h-12 w-12 bg-white" />
          <span className="transition-colors duration-500 group-hover:text-blue">WhatsApp&apos;tan gönder</span>
          <ArrowCircle className="h-12 w-12 text-blue" />
        </button>
        <button
          type="button"
          onClick={() => go("mail")}
          className="inline-flex min-h-16 items-center rounded-full border border-ink/20 px-8 text-[18px] font-medium transition-colors hover:border-ink"
        >
          E-posta ile gönder
        </button>
      </div>
    </form>
  );
}
