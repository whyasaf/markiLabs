"use client";

import { useRef, useState } from "react";

/** Tam genişlik reel: sessiz otomatik oynar, sağ altta oynat/durdur. */
export default function Reel({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[24px] bg-white">
      <video
        ref={ref}
        src={src}
        poster={poster}
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-label="Marki Labs ürünlerinden kısa görüntüler"
      />
      <button
        type="button"
        onClick={toggle}
        className="label absolute bottom-4 right-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-white/90 px-4 text-ink backdrop-blur md:bottom-6 md:right-6"
      >
        <span className={`h-2 w-2 rounded-full ${playing ? "bg-blue" : "bg-ink/30"}`} />
        {playing ? "Durdur" : "Oynat"}
      </button>
    </div>
  );
}
