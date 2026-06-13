import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: "studytrack",
    badge: { label: "Produto Ativo", variant: "green" as const },
    title: "StudyTrack",
    description:
      "Plataforma SaaS B2B para preparação ao ENEM. Atende escolas parceiras com módulos de questões, gamificação e relatórios para gestores.",
    tech: ["Next.js", "Flask", "Supabase", "PostgreSQL"],
    thumb: "/assets/studytrack-thumb.png",
    link: "https://www.studytrack.com.br",
  },
  {
    id: "zanol",
    badge: { label: "No ar", variant: "green" as const },
    title: "Branco Zanol",
    description:
      "Site institucional para a Associação de Judô Branco Zanol de Orlândia-SP. Inclui área administrativa, galeria de eventos e formulário de contato.",
    tech: ["Next.js", "Supabase", "Vercel"],
    thumb: "/assets/zanol-thumb.png",
    link: "https://www.associacaobrancozanol.com.br",
  },
  {
    id: "apae",
    badge: { label: "Hackathon", variant: "gray" as const },
    title: "Memórias — APAE",
    description:
      "Plataforma desenvolvida em hackathon universitário para conectar famílias e equipes da APAE no acompanhamento de crianças atendidas.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    thumb: "/assets/apae-thumb.png",
    link: "https://memorias-rouge.vercel.app/dashboard",
  },
  {
    id: "obrasOS",
    badge: { label: "Protótipo", variant: "gray" as const },
    title: "ObrasOS — Gomes Construções",
    description:
      "Sistema de gestão de obras com controle de cronograma, relatórios diários e folha de pagamento. Desenvolvido como proposta comercial.",
    tech: ["Next.js", "Tailwind", "Supabase"],
    thumb: "/assets/obrasOS-thumb.png",
    link: null,
  },
];

export default function Projetos() {
  return (
    <section
      id="projetos"
      style={{ background: "var(--bg)", padding: "5rem 1.5rem" }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem", position: "relative" }}>
          {/* Decorative number */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-2rem",
              right: 0,
              fontSize: "6rem",
              fontWeight: 800,
              lineHeight: 1,
              color: "rgba(37, 99, 235, 0.04)",
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            02
          </span>

          {/* Accent line + label */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            <span
              style={{
                display: "block",
                width: 30,
                height: 2,
                background: "var(--accent)",
                borderRadius: 2,
                flexShrink: 0,
              }}
            />
            <p
              style={{
                fontWeight: 600,
                fontSize: "0.8rem",
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Projetos
            </p>
          </div>

          <h2
            style={{
              fontWeight: 800,
              fontSize: "1.75rem",
              color: "var(--text)",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
            }}
          >
            O que eu já construí.
          </h2>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
