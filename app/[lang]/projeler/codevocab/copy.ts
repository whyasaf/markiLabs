/** CodeVocab sayfasının metinleri. "*...*" arası pembe. Mono etiketler CodeVocab'ın kendi stili (büyük harf). */
const tr = {
  h1: "İngilizceni yaz. *Mentorun* düzeltsin.",
  intro: "Cümleni puanlar, hatalarını Türkçe açıklar, doğrusunu gösterir. İngilizce öğrenen Türkçe konuşanlar için.",
  open: "CodeVocab'ı aç ↗",
  tags: "ÜCRETSİZ · WEB UYGULAMASI · YAPAY ZEKÂ",
  videoLabel: "CodeVocab tanıtım videosu",
  modesTitle: "Üç mod. *Tek sohbet.*",
  modes: [
    {
      tag: "01 · ANALİZ",
      title: "Puanla, açıkla",
      desc: "100 üzerinden puan, kelime kelime düzeltmeler ve sohbetle sorabileceğin Türkçe açıklamalar.",
    },
    { tag: "02 · KELİME", title: "Kelime kartları", desc: "Anlam, telaffuz, üç seviyede örnek cümle ve Türklerin sık yaptığı hatalar." },
    { tag: "03 · KALIP", title: "Her gün bir kalıp", desc: "Kısa bir dilbilgisi dersi ve beş soruluk test; puanın kaydedilir." },
  ],
  shot1: { alt: "Cümle analizi", caption: "CÜMLE ANALİZİ · PUAN VE DÜZELTME" },
  shot2: { alt: "Üç mod", caption: "PUANLA · KELİME KARTLARI · GÜNÜN KALIBI" },
  /** Soluktan pembeye üç kelime */
  free: ["Ücretsiz.", "Kayıtsız.", "Reklamsız."],
  freeText: "Sohbetler, öğrenilen kelimeler ve puanlar yalnızca senin cihazında saklanır.",
};

const en: typeof tr = {
  h1: "Write in English. *Your mentor* corrects it.",
  intro:
    "It scores your sentence, explains your mistakes in Turkish and shows you the correct version. For Turkish speakers learning English.",
  open: "Open CodeVocab ↗",
  tags: "FREE · WEB APP · AI",
  videoLabel: "CodeVocab intro video",
  modesTitle: "Three modes. *One chat.*",
  modes: [
    {
      tag: "01 · ANALYSIS",
      title: "Score and explain",
      desc: "A score out of 100, word-by-word corrections, and Turkish explanations you can ask about in the chat.",
    },
    {
      tag: "02 · WORDS",
      title: "Word cards",
      desc: "Meaning, pronunciation, example sentences at three levels and the mistakes Turkish speakers often make.",
    },
    { tag: "03 · PATTERN", title: "A pattern a day", desc: "A short grammar lesson and a five-question quiz; your score is saved." },
  ],
  shot1: { alt: "Sentence analysis", caption: "SENTENCE ANALYSIS · SCORE AND CORRECTIONS" },
  shot2: { alt: "Three modes", caption: "SCORE · WORD CARDS · DAILY PATTERN" },
  free: ["Free.", "No sign-up.", "No ads."],
  freeText: "Chats, learned words and scores are stored only on your device.",
};

export const COPY = { tr, en };
