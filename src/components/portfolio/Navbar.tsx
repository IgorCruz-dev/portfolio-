"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollPct(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "var(--navbar-bg)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* Scroll progress bar */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: 2,
          width: `${scrollPct}%`,
          background: "linear-gradient(90deg, #2563EB, #7C3AED)",
          transition: "width 0.1s linear",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 1.5rem",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontWeight: 600,
              fontSize: "1rem",
              color: "var(--text)",
              letterSpacing: "-0.01em",
            }}
          >
            igorcruz
            <span className="dot-blink" style={{ color: "var(--accent)" }}>.</span>
            dev
          </span>
        </a>

        {/* Right side: nav links + theme toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Links — hidden on mobile */}
          <div className="hidden md:flex" style={{ gap: "2rem", alignItems: "center" }}>
            {[
              { label: "Sobre", href: "#sobre" },
              { label: "Projetos", href: "#projetos" },
              { label: "Contato", href: "#contato" },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="nav-link"
                style={{
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  transition: "color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text-secondary)")
                }
              >
                {label}
              </a>
            ))}
          </div>

          {/* Theme toggle — always visible */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
