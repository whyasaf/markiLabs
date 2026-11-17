import { notFound } from "next/navigation";

/** Dil klasörü altında karşılığı olmayan her adres: o dilin 404 sayfası (app/[lang]/not-found.tsx) */
export default function CatchAll() {
  notFound();
}
