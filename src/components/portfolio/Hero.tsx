"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const WA_LINK =
  "https://wa.me/5516996973320?text=Oi%20Igor%2C%20vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar%20sobre%20um%20projeto!";

function Avatar() {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className="hero-photo-wrapper hero-photo-inner"
        style={{
          width: 160,
          height: 160,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #2563EB, #7C3AED)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: 700,
          fontSize: "1.75rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        IC
      </div>
    );
  }

  return (
    <div className="hero-photo-wrapper" style={{ position: "relative", width: 160, height: 160 }}>
      {/* Decorative arcs */}
      <svg
        aria-hidden="true"
        className="hero-arc-svg"
        viewBox="0 0 220 220"
        fill="none"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 220,
          height: 220,
          animation: "spin 20s linear infinite",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <circle className="hero-arc" cx="110" cy="110" r="95"  stroke="rgba(37,99,235,0.15)" strokeWidth="1" strokeDasharray="4 8" />
        <circle className="hero-arc" cx="110" cy="110" r="108" stroke="rgba(37,99,235,0.09)" strokeWidth="1" strokeDasharray="4 8" />
      </svg>

      {/* Photo */}
      <div
        className="hero-photo-inner"
        style={{
          position: "relative",
          zIndex: 1,
          width: 160,
          height: 160,
          borderRadius: "50%",
          overflow: "hidden",
          border: "2px solid rgba(37, 99, 235, 0.2)",
          boxShadow: "0 0 0 4px rgba(37, 99, 235, 0.06), 0 0 0 8px rgba(37, 99, 235, 0.03), 0 20px 40px rgba(0, 0, 0, 0.12)",
        }}
      >
        <Image
          src="/assets/foto-perfil-circular.png"
          alt="Igor Cruz"
          width={160}
          height={160}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
          onError={() => setError(true)}
          priority
          unoptimized
        />
      </div>
    </div>
  );
}

export default function Hero() {
  const shouldReduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
  };

  const codeLines = [
    "// portfolio.config.ts",
    "",
    "const igor = {",
    '  name: "Igor Cruz",',
    '  role: "Software Engineer",',
    '  location: "São Paulo, BR",',
    "",
    "  stack: [",
    '    "Next.js", "TypeScript",',
    '    "Python", "Flask",',
    '    "Supabase", "PostgreSQL",',
    "  ],",
    "",
    '  co_founder: "StudyTrack",',
    '  status: "available ✓",',
    "}",
  ];

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "5rem",
        paddingBottom: "3rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
    >
      {/* ── Left decorative: code block ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "2rem",
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      >
        <div className="hero-deco-left">
          {codeLines.map((line, i) => (
            <div
              key={i}
              style={{
                fontSize: "0.82rem",
                lineHeight: 1.8,
                fontFamily: "monospace",
                whiteSpace: "pre",
                minHeight: "1.476rem",
                maxWidth: 260,
              }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>

      {/* ── Right decorative: geometric SVG ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "2rem",
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      >
        <svg
          className="hero-deco-right"
          width="220"
          height="280"
          viewBox="0 0 220 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grid of dots: 5 cols × 6 rows */}
          {[0, 1, 2, 3, 4].flatMap((col) =>
            [0, 1, 2, 3, 4, 5].map((row) => (
              <circle
                key={`${col}-${row}`}
                cx={16 + col * 32}
                cy={24 + row * 32}
                r={2.5}
                fill="currentColor"
              />
            ))
          )}

          {/* Concentric dashed arcs at top-right corner */}
          <path
            d="M 220 55 A 55 55 0 0 1 165 0"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          <path
            d="M 220 95 A 95 95 0 0 1 125 0"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 6"
          />

          {/* Diagonal line */}
          <line
            x1="0" y1="10"
            x2="210" y2="270"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.5"
          />
        </svg>
      </div>

      <motion.div
        variants={container}
        initial={shouldReduce ? false : "hidden"}
        animate={shouldReduce ? undefined : "show"}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
      >
        {/* Photo */}
        <motion.div variants={item}>
          <Avatar />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="hero-name"
          style={{
            fontWeight: 800,
            fontSize: "2.5rem",
            color: "var(--text)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginTop: "1.25rem",
          }}
        >
          Igor Cruz
        </motion.h1>

        {/* Title badge */}
        <motion.div variants={item} style={{ marginTop: "0.75rem" }}>
          <span className="badge-title">
            <span style={{ color: "var(--accent)", marginRight: "0.375rem" }}>·</span>
            Software Engineer
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="hero-tagline"
          style={{
            fontWeight: 500,
            fontSize: "1.2rem",
            color: "var(--text-secondary)",
            maxWidth: 420,
            marginTop: "0.75rem",
            lineHeight: 1.7,
          }}
        >
          Construo{" "}
          <strong style={{ fontWeight: 700, color: "var(--accent)" }}>
            produtos digitais
          </strong>{" "}
          que resolvem problemas reais.
        </motion.p>

        {/* Separator */}
        <motion.div
          variants={item}
          style={{
            width: 40,
            height: 2,
            background: "var(--accent)",
            borderRadius: 2,
            margin: "1.5rem auto 0",
          }}
        />

        {/* CTAs */}
        <motion.div
          variants={item}
          className="hero-ctas"
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "1.5rem",
          }}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.5rem",
              background: "#16A34A",
              color: "#fff",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "background 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              animation: "pulse-green 2s infinite",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#15803D";
              el.style.animation = "none";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#16A34A";
              el.style.animation = "pulse-green 2s infinite";
            }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar no WhatsApp
          </a>

          <a
            href="#projetos"
            className="hero-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.75rem 1.5rem",
              background: "var(--surface)",
              color: "var(--text-secondary)",
              border: "1.5px solid var(--border)",
              borderRadius: 8,
              fontWeight: 500,
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "var(--accent)";
              el.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "var(--border)";
              el.style.color = "var(--text-secondary)";
            }}
          >
            Ver projetos
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={item}
          style={{ display: "flex", gap: "1rem", marginTop: "1.5rem", alignItems: "center" }}
        >
          {[
            {
              href: "https://www.linkedin.com/in/igorcruz-dev",
              label: "LinkedIn",
              svg: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
            {
              href: "https://github.com/IgorCruz-dev",
              label: "GitHub",
              svg: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              ),
            },
          ].map(({ href, label, svg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{ color: "var(--text-tertiary)", display: "flex", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)")}
            >
              {svg}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
