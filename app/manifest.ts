import type { MetadataRoute } from "next";

/** Telefonda "Ana ekrana ekle" için ad, renkler ve ikonlar (ikon kaynağı: public/brand) */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Marki Labs",
    short_name: "Marki Labs",
    description: "Marki Labs — teknoloji stüdyosu / technology studio",
    start_url: "/",
    display: "browser",
    background_color: "#f0f1fa",
    theme_color: "#002c60",
    icons: [
      { src: "/brand/marki-icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/marki-icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/brand/marki-app-icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
