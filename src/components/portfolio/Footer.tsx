"use client";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/igorcruz-dev" },
  { label: "GitHub", href: "https://github.com/IgorCruz-dev" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg)" }}>
      {/* Gradient separator */}
      <div
        aria-hidden="true"
        style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, #E5E7EB, transparent)",
        }}
      />

      <div className="footer-row">
        <span style={{ fontWeight: 400, fontSize: "0.8rem", color: "var(--text-tertiary)" }}>
          © 2026 Igor Cruz
        </span>

        <div style={{ display: "flex", gap: "1.5rem" }}>
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontWeight: 400,
                fontSize: "0.8rem",
                color: "var(--text-tertiary)",
                textDecoration: "none",
                transition: "color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)")
              }
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
