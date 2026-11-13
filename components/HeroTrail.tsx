"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Pt = { x: number; y: number; t: number };

const LIFE = 650; // ms: izin ne kadar sürede kaybolacağı
const WIDTH = 14; // px: şeridin en kalın yeri

/**
 * Fareyi takip eden mavi şerit: hero'da fare hareket ettikçe arkasında sitedeki şeridin aynısı bir iz bırakır,
 * iz kuyruğa doğru incelir ve kaybolur. Yazıların arkasında durur, tıklamayı engellemez.
 * Sadece fareli cihazlarda ve hareketi azaltmayan kullanıcılarda çalışır.
 */
export default function HeroTrail({ children, className = "" }: { children: ReactNode; className?: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = wrap.current;
    const cv = canvas.current;
    if (!el || !cv) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const pts: Pt[] = [];
    let mouse: { x: number; y: number } | null = null;
    let head: { x: number; y: number } | null = null;
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = el.getBoundingClientRect();
      cv.width = r.width * dpr;
      cv.height = r.height * dpr;
      cv.style.width = `${r.width}px`;
      cv.style.height = `${r.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      mouse = { x: e.clientX - r.left, y: e.clientY - r.top };
      if (!head) head = { ...mouse };
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      mouse = null;
    };

    const tick = () => {
      const now = performance.now();
      // Baş, fareye yumuşakça yaklaşır: şerit akışkan kıvrılır
      if (mouse && head) {
        head.x += (mouse.x - head.x) * 0.28;
        head.y += (mouse.y - head.y) * 0.28;
        pts.push({ x: head.x, y: head.y, t: now });
      }
      while (pts.length && now - pts[0].t > LIFE) pts.shift();

      ctx.clearRect(0, 0, cv.width, cv.height);
      if (pts.length > 2) {
        const grad = ctx.createLinearGradient(0, 0, cv.clientWidth, cv.clientHeight);
        grad.addColorStop(0, "#1f45ff");
        grad.addColorStop(1, "#7d93ff");
        ctx.strokeStyle = grad;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        // Noktalar arası yumuşak eğriler; kuyruk eskidikçe incelir
        for (let i = 1; i < pts.length - 1; i++) {
          const a = pts[i - 1], b = pts[i], c = pts[i + 1];
          const life = 1 - (now - b.t) / LIFE;
          ctx.lineWidth = Math.max(1, WIDTH * life);
          ctx.beginPath();
          ctx.moveTo((a.x + b.x) / 2, (a.y + b.y) / 2);
          ctx.quadraticCurveTo(b.x, b.y, (b.x + c.x) / 2, (b.y + c.y) / 2);
          ctx.stroke();
        }
      }
      raf = pts.length || mouse ? requestAnimationFrame(tick) : 0;
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrap} className={`relative isolate ${className}`}>
      <canvas ref={canvas} aria-hidden className="pointer-events-none absolute inset-0 -z-10" />
      {children}
    </div>
  );
}
