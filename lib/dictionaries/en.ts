import type { Dict } from "./tr";

/** English copy. Mirrors tr.ts exactly; the Dict type makes a missing or extra field a build error. */
export const en: Dict = {
  nav: {
    home: "Home",
    projects: "Work",
    services: "Services",
    about: "About",
    contact: "Contact",
  },
  header: {
    homeLabel: "Marki Labs home",
    cta: "Let's talk",
    menu: "Menu",
    close: "Close",
    menuLabel: "Site menu",
  },
  langSwitch: {
    short: "TR",
    label: "Türkçe'ye geç",
  },
  footer: {
    reach: "Get in touch",
    menu: "Menu",
    products: "Products",
    legal: "Legal",
    kvkk: "KVKK",
    privacy: "Privacy",
    terms: "Terms",
  },
  hero: {
    top: "We turn ideas",
    bottom: "into working products.",
    corner: "Marki Labs is a technology studio for web, software and brand design.",
    scroll: "Scroll to explore",
  },
  reel: {
    src: "/videos/marki-reel-en.mp4",
    poster: "/videos/marki-reel-en-poster.jpg",
    label: "Marki Labs showreel",
    pause: "Pause",
    play: "Play",
  },
  home: {
    introTop: "Idea to product,",
    introBottom: "one team.",
    introText:
      "Design, code and launch are all handled by the same team. The methods we use to build our own products are the ones we bring to client work.",
    approachLink: "Our approach",
    servicesLink: "Our services",
    featuredTitle: "Featured work",
    featuredText: "A selection of work we've designed and built, for our own products and for clients.",
    nextLabel: "Next project",
    yoursTop: "Your project",
    yoursBottom: "could be here.",
    approachLabel: "Our approach",
    approach1:
      "Nothing we make comes out of a template. A roadside assistance company and an education programme each speak with their own typeface, colour and voice.",
    approach2:
      "We ship our own products too: Lecmic is open source and CodeVocab is free. We treat client work the same way, like a product.",
    closingA: "Got a ",
    closingB: "big idea?",
    cta: "Let's work together!",
  },
  services: {
    title: "Let *our* *work* *do* *the* *talking.*",
    blocks: {
      products: {
        title: "We build products.",
        text: "We take ideas all the way to web apps anyone can use. Lecmic is open source, CodeVocab is free, and Plus Otoyol is in development.",
      },
      websites: {
        title: "We build websites.",
        text: "From a roadside assistance company to an education programme: sites that speak in each business's own voice, each with its own typeface, colour and layout.",
      },
      templates: {
        title: "We make templates.",
        text: "Complete websites built for a specific industry, ready to launch under your own brand. The first is Vitren Yapı, for architecture and construction firms.",
      },
    },
    closingA: "Make the next one ",
    closingB: "yours.",
    cta: "Let's work together!",
  },
  about: {
    label: "About",
    manifesto:
      "Marki Labs is a technology studio. We build our own products: *Lecmic* transcribes and translates what's said in class, *CodeVocab* corrects your English. We build websites for businesses; a towing company and an education programme each speak with their own typeface and colour. We take an idea and turn it into something live. *Since* *2022.*",
    cta: "Let's talk.",
  },
  team: {
    label: "Team",
    focus: "Focus",
    photoSoon: "Photo coming soon",
  },
  contact: {
    label: "Contact · fill in the blanks",
    p1: "Hi Marki Labs, I'm ",
    p2: ". I'm writing about ",
    p3: ". In short: ",
    topics: ["a website", "a product idea", "a template", "something else"],
    topicFallback: "a project",
    demoNames: ["Emma Clarke", "Daniel Weber", "Sofia Rossi", "Lucas Martin", "Aisha Khan", "Noah Bennett", "Mia Jansen"],
    demoNotes: [
      "I'd like a website for my restaurant, with the menu on it.",
      "I have an app idea and don't know where to start.",
      "I'm looking for a logo and a brand identity.",
      "We want a site like Vitren for our architecture studio.",
      "We'd like to rebuild our current website from scratch.",
    ],
    nameLabel: "Your name",
    namePlaceholder: "your name",
    noteLabel: "Your message",
    notePlaceholder: "tell us what you have in mind",
    topicLabel: "Topic",
    chooseTopic: "Choose a topic",
    error: "Add your name and a few words about what you need to complete the sentence.",
    sendWhatsApp: "Send on WhatsApp",
    sendEmail: "Send by email",
    directLabel: "Direct contact",
    direct: "Or write to us directly",
    email: "Email",
    newTab: "opens in a new tab",
    copy: "Copy",
    copied: "Copied",
    copyLabel: "Copy email address",
    copiedLabel: "Email address copied",
  },
  caseStudy: {
    next: "Next project",
  },
  legal: {
    updated: "Last updated",
  },
  notFound: {
    title: "This page doesn't exist yet.",
    back: "Back to home",
  },
  meta: {
    siteTitle: "Marki Labs — Technology studio",
    siteDescription:
      "Marki Labs is a technology studio for web, software and brand design. Lecmic and CodeVocab are our own products.",
    ogLocale: "en_US",
    pages: {
      about: {
        title: "About",
        description: "Marki Labs: a technology studio building products and websites since 2022.",
      },
      services: {
        title: "Services",
        description: "What Marki Labs does: AI-powered products, websites for businesses and ready-made website templates.",
      },
      contact: {
        title: "Contact",
        description: "Write to Marki Labs on WhatsApp or by email.",
      },
      kvkk: {
        title: "KVKK Privacy Notice",
        description: "Marki Labs privacy notice under Turkey's Personal Data Protection Law No. 6698 (KVKK).",
      },
      privacy: {
        title: "Privacy Policy",
        description: "How personal data is processed on the Marki Labs website.",
      },
      terms: {
        title: "Terms of Use",
        description: "Terms of use for the Marki Labs website.",
      },
    },
    projects: {
      lecmic:
        "An open-source web app that shows a lecture's live transcript and translation on the same screen as your notes and word list.",
      codevocab: "An AI mentor that scores your English sentences and explains your mistakes in Turkish.",
      "neon-oto-kurtarma": "Website for Neon Oto Kurtarma, a 24/7 towing and roadside assistance service in Istanbul.",
      "cultivated-voice-system": "Multi-page website for The Cultivated Voice System, an English speaking programme.",
      "plus-otoyol": "Plus Otoyol, a travel assistant for Turkey: routes, roads, rest stops and fuel. In development.",
      whyasaf: "Personal portfolio and blog of Ömer Asaf Ak.",
      "vitren-yapi": "Vitren Yapı, a website template for architecture and construction firms.",
    },
  },
};
