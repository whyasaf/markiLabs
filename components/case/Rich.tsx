import { Fragment, type ReactNode } from "react";

/**
 * Proje sayfalarındaki vurgulu başlıklar: metinde "*...*" arası, verilen `em` ile çizilir (her projenin kendi
 * vurgu stili: italik serif, renkli kelime vb.). Vurgunun yeri dile göre değiştiği için metin dosyalarında
 * işaretle tutulur.
 *   <Rich text="Dersi dinle. *Yazısı* ve *çevirisi* yanında." em={(s) => <em style={{ color }}>{s}</em>} />
 */
export default function Rich({ text, em }: { text: string; em: (s: string) => ReactNode }) {
  return (
    <>
      {text.split(/\*([^*]+)\*/).map((part, i) => (
        <Fragment key={i}>{i % 2 ? em(part) : part}</Fragment>
      ))}
    </>
  );
}
