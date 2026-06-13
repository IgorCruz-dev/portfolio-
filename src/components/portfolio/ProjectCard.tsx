"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Zap, Globe, Trophy, Code } from "lucide-react";

interface Project {
  id: string;
  badge: { label: string; variant: "green" | "gray" };
  title: string;
  description: string;
  tech: string[];
  thumb: string;
  link: string | null;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const badgeConfig: Record<
  string,
  { style: React.CSSProperties; icon: React.ReactNode }
> = {
  "Produto Ativo": {
    style: {
      background: "rgba(22,163,74,0.08)",
      color: "#16A34A",
      border: "1px solid rgba(22,163,74,0.2)",
    },
    icon: <Zap size={12} strokeWidth={2.5} />,
  },
  "No ar": {
    style: {
      background: "rgba(22,163,74,0.08)",
      color: "#16A34A",
      border: "1px solid rgba(22,163,74,0.2)",
    },
    icon: <Globe size={12} strokeWidth={2.5} />,
  },
  Hackathon: {
    style: {
      background: "var(--surface-alt)",
      color: "var(--text-tertiary)",
      border: "1px solid var(--border)",
    },
    icon: <Trophy size={12} strokeWidth={2.5} />,
  },
  Protótipo: {
    style: {
      background: "var(--surface-alt)",
      color: "var(--text-tertiary)",
      border: "1px solid var(--border)",
    },
    icon: <Code size={12} strokeWidth={2.5} />,
  },
};

function Thumb({
  src,
  title,
  link,
  hovered,
}: {
  src: string;
  title: string;
  link: string | null;
  hovered: boolean;
}) {
  const [error, setError] = useState(false);

  return (
    <div style={{ height: 200, overflow: "hidden", flexShrink: 0, position: "relative" }}>
      {error ? (
        <div
          style={{
            height: 200,
            background: "var(--surface-alt)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 600,
            fontSize: "0.9rem",
            color: "var(--text-tertiary)",
          }}
        >
          {title}
        </div>
      ) : (
        <Image
          src={src}
          alt={title}
          width={600}
          height={200}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
            display: "block",
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: hovered ? "scale(1.03)" : "scale(1)",
          }}
          onError={() => setError(true)}
          unoptimized
        />
      )}

      {/* Hover overlay gradient */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(37,99,235,0.15), transparent)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          pointerEvents: "none",
        }}
      />

      {/* Floating CTA pill (only for projects with link) */}
      {link && (
        <div
          aria-hidden="true"
          className="thumb-pill"
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(37,99,235,0.2)",
            borderRadius: 100,
            padding: "0.3rem 0.75rem",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "#2563EB",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(4px)",
            transition:
              "opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
            pointerEvents: "none",
          }}
        >
          🔗 Ver projeto
        </div>
      )}
    </div>
  );
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });
  const shouldReduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const { badge, title, description, tech, thumb, link } = project;
  const cfg = badgeConfig[badge.label] ?? badgeConfig["Protótipo"];

  return (
    <motion.div
      ref={ref}
      initial={shouldReduce ? false : { opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={
        shouldReduce ? {} : { duration: 0.55, delay: index * 0.1, ease: "easeOut" as const }
      }
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "default",
        boxShadow: hovered ? "var(--card-hover-shadow)" : "inset 3px 0 0 transparent",
        transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Thumb src={thumb} title={title} link={link} hovered={hovered} />

      <div
        style={{
          padding: "1.25rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Badge */}
        <div>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3rem",
              ...cfg.style,
              borderRadius: 100,
              padding: "0.25rem 0.75rem",
              fontWeight: 500,
              fontSize: "0.72rem",
            }}
          >
            {cfg.icon}
            {badge.label}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "var(--text)",
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
            marginTop: "0.75rem",
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontWeight: 400,
            fontSize: "0.875rem",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            marginTop: "0.4rem",
            flex: 1,
          }}
        >
          {description}
        </p>

        {/* Tech tags */}
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginTop: "1rem" }}
        >
          {tech.map((t) => (
            <span
              key={t}
              style={{
                fontWeight: 500,
                fontSize: "0.72rem",
                color: "var(--text-tertiary)",
                background: "var(--surface-alt)",
                border: "1px solid var(--border)",
                borderRadius: 4,
                padding: "0.2rem 0.6rem",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Link */}
        <div
          style={{
            marginTop: "1.25rem",
            paddingTop: "1rem",
            borderTop: "1px solid var(--border)",
          }}
        >
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              style={{
                fontWeight: 600,
                fontSize: "0.85rem",
                color: "var(--accent)",
              }}
            >
              Acessar projeto →
            </a>
          ) : (
            <span style={{ fontWeight: 400, fontSize: "0.85rem", color: "var(--text-tertiary)" }}>
              Em desenvolvimento
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
