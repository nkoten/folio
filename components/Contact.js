'use client';
import { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function Contact() {
  const [ref, inView] = useInView(0.1);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('sent');
  }

  return (
    <section id="contact" ref={ref} className="section-padding">
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
        <div className="contact-grid">
          {/* Left */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(32px)',
              transition: 'all 0.8s ease',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '1.25rem',
              }}
            >
              04 — Contato
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
              }}
            >
              Vamos construir algo{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                juntos?
              </span>
            </h2>

            <div className="contact-links">
              {[
                {
                  label: 'Email',
                  value: 'seuemail@exemplo.com',
                  href: 'mailto:seuemail@exemplo.com',
                },
                {
                  label: 'GitHub',
                  value: '@nkoten',
                  href: 'https://github.com/nkoten',
                },
                {
                  label: 'LinkedIn',
                  value: 'seu-perfil',
                  href: 'https://linkedin.com',
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-item"
                >
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        textTransform: 'uppercase',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {link.label}
                    </div>
                    <div
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {link.value}
                    </div>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(32px)',
              transition: 'all 0.8s ease 0.2s',
            }}
          >
            {status === 'sent' ? (
              <div className="sent-message">
                <h3>Mensagem enviada!</h3>
                <p>Responderei em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="input-group">
                  <label>Nome</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Mensagem</label>
                  <textarea
                    rows={5}
                    placeholder="Me conte sobre seu projeto..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>
                <button type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-padding {
          padding: 8rem 0;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 6rem;
          align-items: start;
        }
        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-link-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.25rem;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .contact-link-item:hover {
          border-color: var(--accent);
          background: var(--accent-subtle);
        }

        .contact-form .input-group {
          margin-bottom: 1.25rem;
        }
        .contact-form label {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          text-transform: uppercase;
          color: var(--text-muted);
          display: block;
          margin-bottom: 0.5rem;
        }
        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 0.9rem 1rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 6px;
          color: var(--text-primary);
          outline: none;
          transition: border-color 0.2s;
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: var(--accent);
        }
        .contact-form button {
          width: 100%;
          padding: 1rem;
          background: var(--accent);
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          text-transform: uppercase;
          font-size: 0.78rem;
        }

        @media (max-width: 968px) {
          .section-padding {
            padding: 4rem 0;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
      `}</style>
    </section>
  );
}
