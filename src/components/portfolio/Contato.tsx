"use client";

import { MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/5516996973320?text=Oi%20Igor%2C%20vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar%20sobre%20um%20projeto!";

const secondaryLinks = [
  { label: "igorjscruz07@gmail.com", href: "mailto:igorjscruz07@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/igorcruz-dev" },
  { label: "GitHub", href: "https://github.com/IgorCruz-dev" },
];

export default function Contato() {
  return (
    <section
      id="contato"
      style={{ background: "var(--surface)", padding: "5rem 1.5rem" }}
    >
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        {/* Card */}
        <div className="contact-card">
          {/* Decorative number */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-1rem",
              left: "-0.5rem",
              fontSize: "6rem",
              fontWeight: 800,
              lineHeight: 1,
              color: "rgba(37, 99, 235, 0.04)",
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            04
          </span>

          <div style={{ position: "relative" }}>
            {/* Icon */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
              <div className="contact-icon-bg">
                <MessageCircle size={32} color="var(--accent)" strokeWidth={1.75} />
              </div>
            </div>

            <p
              style={{
                fontWeight: 600,
                fontSize: "0.8rem",
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Contato
            </p>

            <h2
              style={{
                fontWeight: 800,
                fontSize: "2.25rem",
                color: "var(--text)",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                marginTop: "0.5rem",
              }}
            >
              Vamos conversar?
            </h2>

            <p
              style={{
                fontWeight: 400,
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginTop: "0.5rem",
              }}
            >
              Se você tem um projeto em mente ou quer trocar uma ideia, me chama.
              Respondo rápido.
            </p>

            {/* WhatsApp button */}
            <div style={{ marginTop: "2rem" }}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-wa-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.75rem",
                  background: "#16A34A",
                  color: "#fff",
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: "0.95rem",
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
            </div>

            {/* Secondary links */}
            <div
              className="contact-links"
              style={{
                display: "flex",
                gap: "0.5rem",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                marginTop: "1.25rem",
              }}
            >
              {secondaryLinks.map(({ label, href }, i) => (
                <>
                  {i > 0 && (
                    <span
                      key={`sep-${i}`}
                      style={{
                        color: "#D1D5DB",
                        userSelect: "none",
                        fontSize: "0.875rem",
                      }}
                    >
                      ·
                    </span>
                  )}
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    style={{
                      fontWeight: 400,
                      fontSize: "0.875rem",
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
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
