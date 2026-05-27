'use client';
import { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.2) {
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

export default function About() {
  const [ref, inView] = useInView(0.15);

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding"
      style={{ background: 'var(--bg-subtle)' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
        <div className="about-grid">
          {/* Left */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(32px)',
              transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
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
              01 — Sobre
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                marginBottom: '0',
              }}
            >
              Movido por
            </h2>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: 1.1,
                color: 'var(--accent)',
              }}
            >
              propósito.
            </h2>

            <div className="quote-container">
              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.9,
                  fontWeight: 300,
                }}
              >
                Através da assinatura{' '}
                <strong
                  style={{ color: 'var(--text-primary)', fontWeight: 500 }}
                >
                  NKoten
                </strong>
                , eu,{' '}
                <strong
                  style={{ color: 'var(--text-primary)', fontWeight: 500 }}
                >
                  Anselmo Sammarco Nunes
                </strong>
                , projeto e desenvolvo soluções de software de alta fidelidade.
                Unindo minha formação técnica à graduação em Engenharia de
                Software, foco em entregar sistemas onde a performance é tão
                importante quanto a limpeza do código.
              </p>
            </div>
          </div>

          {/* Right */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(32px)',
              transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s',
            }}
          >
            {/*<p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.9,
                marginBottom: '1.5rem',
                fontWeight: 300,
              }}
            >
              Sou desenvolvedor Fullstack com formação pela{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                Digital House
              </strong>{' '}
              em 2023 e atualmente cursando{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                Engenharia de Software
              </strong>{' '}
              pela Estácio. Minha relação com a tecnologia vai além do
              profissional — é uma paixão genuína que começou muito antes de se
              tornar carreira.
            </p>*/}
            {
              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.9,
                  marginBottom: '1.5rem',
                  fontWeight: 300,
                }}
              >
                Minha trajetória combina uma sólida bagagem prática no setor de
                infraestrutura técnica e execução de projetos complexos com a
                Engenharia de Software. Essa fusão me dá uma visão única de
                mercado: não enxergo apenas linhas de código, enxergo a
                engenharia de custos, fluxos de trabalho e a viabilidade
                financeira por trás de cada sistema.
              </p>
            }
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.9,
                marginBottom: '2.5rem',
                fontWeight: 300,
              }}
            >
              Acredito que desenvolvimento de software é uma forma de arte. Cada
              projeto que crio recebe atenção especial: penso na experiência de
              quem vai usar, na escalabilidade do código, nos detalhes que fazem
              a diferença entre algo que funciona e algo que encanta.
            </p>

            <div className="cards-grid">
              {[
                {
                  icon: '◈',
                  title: 'Formação',
                  desc: 'FullStack Node — Digital House, 2023',
                },
                {
                  icon: '◉',
                  title: 'Graduação',
                  desc: 'Eng. de Software — Estácio, em curso',
                },
                {
                  icon: '◎',
                  title: 'Foco',
                  desc: 'Backend, APIs REST, arquitetura limpa',
                },
                {
                  icon: '○',
                  title: 'Visão',
                  desc: 'Soluções que resolvem problemas reais',
                },
              ].map((item, i) => (
                <div key={i} className="info-card">
                  <div
                    style={{
                      fontSize: '1.1rem',
                      color: 'var(--accent)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-padding {
          padding: 8rem 0;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 5rem;
          align-items: start;
        }
        .cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .quote-container {
          margin-top: 2.5rem;
          padding: 1.5rem;
          border-left: 2px solid var(--accent);
          background: var(--accent-subtle);
          border-radius: 0 6px 6px 0;
        }
        .info-card {
          padding: 1.25rem;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        .info-card:hover {
          border-color: var(--accent);
          box-shadow: var(--shadow-md);
        }

        @media (max-width: 968px) {
          .section-padding {
            padding: 4rem 0;
          }
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        @media (max-width: 480px) {
          .cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
