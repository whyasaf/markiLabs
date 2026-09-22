"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hoverable?: boolean;
}

export default function Card({
  children,
  className = "",
  glowColor = "var(--brand-color)",
  hoverable = true,
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !hoverable) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getTranslucentColor = (color: string, opacityPercent: number) => {
    return `color-mix(in srgb, ${color} ${opacityPercent}%, transparent)`;
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={hoverable ? { y: -3 } : {}}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-2xl border border-[#e4e6ea] bg-white transition-all duration-300 ${
        isHovered && hoverable ? "border-brand/25 shadow-lg" : "shadow-sm"
      } ${className}`}
      style={{
        boxShadow:
          isHovered && hoverable
            ? `0 0 40px -8px ${getTranslucentColor(glowColor, 15)}, 0 12px 28px -6px rgba(0,0,0,0.07)`
            : "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.02)",
      }}
    >
      {/* Mouse-follow glow */}
      {hoverable && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(240px circle at ${mousePosition.x}px ${mousePosition.y}px, ${getTranslucentColor(glowColor, 8)}, transparent 70%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
