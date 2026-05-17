"use client";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const stack = [
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 90, note: "Principal stack" },
      { name: "Express.js", level: 85, note: "APIs REST" },
      { name: "PostgreSQL", level: 75, note: "Banco relacional" },
      { name: "Supabase", level: 72, note: "BaaS moderno" },
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 85, note: "Componentes & hooks" },
      { name: "Next.js", level: 80, note: "SSR / SSG" },
      { name: "Tailwind CSS", level: 82, note: "Estilização utilitária" },
      { name: "JavaScript ES6+", level: 88, note: "Linguagem base" },
    ]
  },
  {
    category: "Ferramentas",
    items: [
      { name: "Git & GitHub", level: 85, note: "Controle de versão" },
      { name: "Docker", level: 65, note: "Containerização" },
      { name: "REST APIs", level: 90, note: "Design e consumo" },
      { name: "Linux / CLI", level: 75, note: "Ambiente de dev" },
    ]
  },
];

function SkillBar({ name, level, note, inView, delay }) {
  return (
    <div style={{
      marginBottom: "1.25rem",
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0)" : "translateX(-16px)",
      transition: `all 0.6s ease ${delay}s`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.4rem" }}>
        <div>
          <span style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 400 }}>{name}</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)", marginLeft: "0.6rem" }}>{note}</span>
        </div>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--accent)" }}>{level}%</span>
      </div>
      <div style={{ height: 3, background: "var(--border)", borderRadius: 2, overflow: "hidden" }}>
        <div style={{
          height: "100%",
          width: inView ? `${level}%` : "0%",
          background: `linear-gradient(90deg, var(--accent), var(--green))`,
          borderRadius: 2,
          transition: `width 1s cubic-bezier(0.16,1,0.3,1) ${delay + 0.2}s`,
        }} />
      </div>
    </div>
  );
}

export default function Stack() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="stack" ref={ref} style={{ padding: "8rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          textAlign: "center",
          marginBottom: "5rem",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.7s ease",
        }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}>02 — Stack</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300, color: "var(--text-primary)" }}>
            As ferramentas do ofício
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginTop: "1rem", maxWidth: 500, margin: "1rem auto 0" }}>
            Um conjunto cuidadosamente construído ao longo de anos de prática e estudo constante
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
          {stack.map((group, gi) => (
            <div key={gi} style={{
              padding: "2rem",
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 12,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: `all 0.7s ease ${gi * 0.15}s`,
            }}>
              <h3 style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "1.75rem",
                paddingBottom: "1rem",
                borderBottom: "1px solid var(--border-subtle)",
              }}>
                {group.category}
              </h3>
              {group.items.map((item, ii) => (
                <SkillBar key={ii} {...item} inView={inView} delay={gi * 0.1 + ii * 0.08} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #stack .grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          #stack .grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
