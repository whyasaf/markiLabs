/** Lecmic sayfasının metinleri. "*...*" arası vurgulanır (mavi italik serif). en, tr ile aynı yapıda olmalı. */
const tr = {
  badge: "Açık kaynak",
  h1: "Dersi dinle. *Yazısı* ve *çevirisi* yanında.",
  intro:
    "Dersin anlık yazıya dökümünü ve çevirisini; notların, slaytların ve kelime listenle aynı ekranda gösteren ücretsiz bir web uygulaması. Dersleri henüz öğrendiği bir dilde dinleyen öğrenciler için.",
  open: "Lecmic'i aç ↗",
  github: "GitHub'da kaynak kod ↗",
  heroAlt: "Lecmic ders ekranı",
  /** Sıra, sayfadaki görsellerle aynı (dinle, oku, not al, çalış) */
  features: [
    {
      k: "Dinle",
      title: "Hiçbir cümleyi *kaçırma.*",
      desc: "Hoca konuştukça yazıya döker, anında çevirir. Kayıtlar tekrar dinlenebilir ya da MP3 olarak indirilebilir.",
    },
    {
      k: "Oku",
      title: "Takıldığın kelime, *cümlesindeki anlamıyla.*",
      desc: "PDF ve Word belgelerini aç, işaretle. Kelimenin üstüne gel; sözlükteki ilk anlamı değil, o cümlede ne demek olduğunu gör.",
    },
    {
      k: "Not al",
      title: "Notun *dersin yanında.*",
      desc: "Her ders ve belgenin kendi not sayfası var; yanında çeviri kutusu. Notlar otomatik kaydedilir.",
    },
    {
      k: "Çalış",
      title: "Sınavdan önce *tekrar et.*",
      desc: "Kaydettiğin kelimeler aralıklı tekrar kartlarına dönüşür. Bilmediğin sık, bildiğin seyrek gelir.",
    },
  ],
  videoTitle: "40 saniyede *Lecmic.*",
  videoLabel: "Lecmic tanıtım videosu",
  privacyTitle: "Her şey *senin* cihazında.",
  privacyText:
    "Hesap yok, reklam yok, takip yok. Veriler cihazında kalır; istersen tek bir dosya olarak yedeklenir. Kod GitHub'da herkese açık.",
};

const en: typeof tr = {
  badge: "Open source",
  h1: "Hear the lecture. *Read* and *translate* it live.",
  intro:
    "A free web app that shows a lecture's live transcript and translation on the same screen as your notes, slides and word list. For students attending lectures in a language they're still learning.",
  open: "Open Lecmic ↗",
  github: "Source code on GitHub ↗",
  heroAlt: "Lecmic lecture screen",
  features: [
    {
      k: "Listen",
      title: "Never miss *a sentence.*",
      desc: "As the lecturer speaks, Lecmic transcribes and translates instantly. Recordings can be replayed or downloaded as MP3.",
    },
    {
      k: "Read",
      title: "The word you're stuck on, *in its sentence.*",
      desc: "Open and mark up PDF and Word documents. Hover over a word to see what it means in that sentence, not just its first dictionary entry.",
    },
    {
      k: "Take notes",
      title: "Your notes, *next to the lecture.*",
      desc: "Every lecture and document has its own notes page, with a translation box beside it. Notes save automatically.",
    },
    {
      k: "Study",
      title: "Before the exam, *review.*",
      desc: "Words you save become spaced-repetition cards. The ones you don't know come up often; the ones you know, less.",
    },
  ],
  videoTitle: "*Lecmic* in 40 seconds.",
  videoLabel: "Lecmic intro video",
  privacyTitle: "Everything stays on *your* device.",
  privacyText:
    "No account, no ads, no tracking. Your data stays on your device and can be backed up as a single file. The code is public on GitHub.",
};

export const COPY = { tr, en };
