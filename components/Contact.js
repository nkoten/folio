"use client";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function Contact() {
  const [ref, inView] = useInView(0.1);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    // Placeholder — conectar com Supabase ou API própria
    await new Promise(r => setTimeout(r, 1500));
    setStatus("sent");
  }

  const inputStyle = {
    width: "100%",
    padding: "0.9rem 1rem",
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: 6,
    color: "var(--text-primary)",
    fontSize: "0.9rem",
    fontFamily: "var(--font-body)",
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <section id="contact" ref={ref} style={{ padding: "8rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "6rem", alignItems: "start" }}>
          
          {/* Left */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.8s ease",
          }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1.25rem" }}>
              04 — Contato
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300, lineHeight: 1.1, color: "var(--text-primary)", marginBottom: "1.5rem" }}>
              Vamos construir algo <span style={{ fontStyle: "italic", color: "var(--accent)" }}>juntos?</span>
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2.5rem", fontWeight: 300 }}>
              Estou sempre aberto a conversar sobre novos projetos, oportunidades ou simplesmente trocar uma ideia sobre tecnologia.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { label: "Email", value: "seuemail@exemplo.com", href: "mailto:seuemail@exemplo.com" },
                { label: "GitHub", value: "@seu-usuario", href: "https://github.com" },
                { label: "LinkedIn", value: "seu-perfil", href: "https://linkedin.com" },
              ].map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 1.25rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: 8,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.background = "var(--accent-subtle)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-subtle)"; e.currentTarget.style.background = "var(--bg-card)"; }}
                >
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.2rem" }}>{link.label}</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{link.value}</div>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.8s ease 0.2s",
          }}>
            {status === "sent" ? (
              <div style={{
                padding: "3rem",
                background: "var(--green-subtle)",
                border: "1px solid var(--green)",
                borderRadius: 12,
                textAlign: "center",
              }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>✓</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 400, color: "var(--text-primary)", marginBottom: "0.5rem" }}>Mensagem enviada!</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>Obrigado pelo contato. Responderei em breve.</p>
              </div>
            ) : (
              <div onSubmit={handleSubmit}>
                <div style={{ marginBottom: "1.25rem" }}>
                  <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: "0.5rem" }}>Nome</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={e => setForm(f => ({...f, name: e.target.value}))}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "var(--accent)"}
                    onBlur={e => e.target.style.borderColor = "var(--border)"}
                  />
                </div>
                <div style={{ marginBottom: "1.25rem" }}>
                  <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: "0.5rem" }}>Email</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={e => setForm(f => ({...f, email: e.target.value}))}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "var(--accent)"}
                    onBlur={e => e.target.style.borderColor = "var(--border)"}
                  />
                </div>
                <div style={{ marginBottom: "2rem" }}>
                  <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: "0.5rem" }}>Mensagem</label>
                  <textarea
                    placeholder="Me conte sobre o projeto, a ideia ou a oportunidade..."
                    value={form.message}
                    onChange={e => setForm(f => ({...f, message: e.target.value}))}
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical", minHeight: 130 }}
                    onFocus={e => e.target.style.borderColor = "var(--accent)"}
                    onBlur={e => e.target.style.borderColor = "var(--border)"}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  style={{
                    width: "100%",
                    padding: "1rem",
                    background: "var(--accent)",
                    color: "#FFF",
                    border: "none",
                    borderRadius: 6,
                    fontSize: "0.78rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    cursor: status === "sending" ? "wait" : "pointer",
                    transition: "all 0.2s ease",
                    opacity: status === "sending" ? 0.7 : 1,
                  }}
                  onMouseEnter={e => { if (status !== "sending") e.target.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.target.style.transform = "translateY(0)"; }}
                >
                  {status === "sending" ? "Enviando..." : "Enviar Mensagem"}
                </button>
                <p style={{ marginTop: "0.75rem", fontSize: "0.75rem", color: "var(--text-muted)", textAlign: "center" }}>
                  * Conecte ao Supabase para ativar o envio real de mensagens
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact [style*="grid-template-columns: 1fr 1.2fr"] { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
