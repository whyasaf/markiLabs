"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sliders, Check } from "lucide-react";

interface ThemeConfig {
  id: string;
  name: string;
  color: string;
  brandColor: string;
  brandLight: string;
  brandDark: string;
}

const THEMES: ThemeConfig[] = [
  {
    id: "meta",
    name: "Meta Flow (Blue)",
    color: "#1877f2",
    brandColor: "#1877f2",
    brandLight: "#42a5f5",
    brandDark: "#0d5ac8"
  },
  {
    id: "apple",
    name: "Apple Obsidian",
    color: "#1c1e21",
    brandColor: "#1c1e21",
    brandLight: "#8e9297",
    brandDark: "#000000"
  },
  {
    id: "google",
    name: "Google Labs",
    color: "#ea4335",
    brandColor: "#ea4335",
    brandLight: "#fbbc05",
    brandDark: "#34a853"
  },
  {
    id: "marki",
    name: "Marki Studio",
    color: "#e91e8c",
    brandColor: "#e91e8c",
    brandLight: "#a855f7",
    brandDark: "#7c3aed"
  }
];

export default function ThemeCustomizer() {
  const [activeTheme, setActiveTheme] = useState("meta");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("marki-theme");
    if (savedTheme) {
      const theme = THEMES.find((t) => t.id === savedTheme);
      if (theme) {
        applyTheme(theme);
      }
    }
  }, []);

  const applyTheme = (theme: ThemeConfig) => {
    setActiveTheme(theme.id);
    localStorage.setItem("marki-theme", theme.id);
    
    // Apply CSS variables to root element
    document.documentElement.style.setProperty("--brand-color", theme.brandColor);
    document.documentElement.style.setProperty("--brand-color-light", theme.brandLight);
    document.documentElement.style.setProperty("--brand-color-dark", theme.brandDark);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5">
      {/* Floating expanded menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-full border border-white/50 bg-white/70 backdrop-blur-md shadow-lg card-shadow"
          >
            {THEMES.map((theme) => {
              const isSelected = activeTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => applyTheme(theme)}
                  title={theme.name}
                  className="w-7 h-7 rounded-full flex items-center justify-center transition-transform active:scale-90 relative overflow-hidden group shadow-sm"
                  style={{ backgroundColor: theme.color }}
                >
                  {/* Hover visual label overlay */}
                  <span className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {isSelected && (
                    <Check 
                      size={13} 
                      className="text-white" 
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full border border-[#e4e6ea] bg-white/80 backdrop-blur-md flex items-center justify-center text-[#1c1e21] shadow-lg hover:shadow-xl hover:border-[#1877f2]/30 active:scale-95 transition-all"
        title="Tasarım Sistemi Seçici"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <Sliders size={18} />
        </motion.div>
      </button>
    </div>
  );
}
