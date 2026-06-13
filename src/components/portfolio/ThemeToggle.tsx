"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [iconKey, setIconKey] = useState(0);

  // Sync with what the anti-FOUC script set on <html>
  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "dark" || current === "light") setTheme(current);
  }, []);

  function apply(next: "light" | "dark") {
    setTheme(next);
    setIconKey((k) => k + 1);
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => apply(isDark ? "light" : "dark")}
      title={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
      aria-label={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
      style={{
        width: 36,
        height: 36,
        borderRadius: 8,
        background: "var(--surface-alt)",
        border: "1px solid var(--border)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        padding: 0,
        transition: "background 0.2s, border-color 0.2s",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.background = "var(--border)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.background = "var(--surface-alt)")
      }
    >
      <span key={iconKey} className="theme-icon-animate">
        {isDark ? (
          <Sun size={16} color="var(--text-secondary)" strokeWidth={2} />
        ) : (
          <Moon size={16} color="var(--text-secondary)" strokeWidth={2} />
        )}
      </span>
    </button>
  );
}
