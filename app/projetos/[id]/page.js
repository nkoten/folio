// app/projetos/[id]/page.js
'use client';
import { useParams, useRouter } from 'next/navigation';
import { projects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function ProjetoDetalhes() {
  const { id } = useParams();
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  const projeto = projects.find((p) => p.id === id);

  useEffect(() => {
    setVisible(true);
    if (!projeto) router.push('/');
  }, [projeto, router]);

  if (!projeto) return null;

  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: '100vh',
          paddingTop: '8rem',
          paddingBottom: '4rem',
          background: 'var(--bg)',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' }}>
          {/* Header do Projeto */}
          <header
            style={{
              marginBottom: '4rem',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease',
            }}
          >
            <button
              onClick={() => router.back()}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--accent)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '2rem',
              }}
            >
              ← VOLTAR PARA VITRINE
            </button>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                marginBottom: '1rem',
              }}
            >
              {projeto.year} — {projeto.status}
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                lineHeight: 1,
              }}
            >
              {projeto.title}
            </h1>
          </header>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr',
              gap: '4rem',
              alignItems: 'start',
            }}
            className="grid-mobile"
          >
            {/* Coluna da Esquerda: Imagens/Visual */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 1s ease 0.3s',
              }}
            >
              <div
                style={{
                  borderRadius: 12,
                  overflow: 'hidden',
                  border: '1px solid var(--border-subtle)',
                  background: 'var(--bg-card)',
                  marginBottom: '2rem',
                }}
              >
                <img
                  src={projeto.image}
                  alt={projeto.title}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              {/* Espaço para mais fotos se houver no futuro */}
            </div>

            {/* Coluna da Direita: Conteúdo Técnico (E-commerce Style) */}
            <aside
              style={{
                position: 'sticky',
                top: '100px',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(20px)',
                transition: 'all 0.8s ease 0.5s',
              }}
            >
              <div style={{ marginBottom: '3rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    marginBottom: '1.5rem',
                    letterSpacing: '0.1em',
                  }}
                >
                  Visão Geral
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.8,
                  }}
                >
                  {projeto.fullDescription || projeto.description}
                </p>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '1.2rem',
                    letterSpacing: '0.1em',
                  }}
                >
                  Tecnologias Utilizadas
                </h3>
                <div
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}
                >
                  {projeto.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '6px 12px',
                        border: '1px solid var(--border)',
                        borderRadius: 4,
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botões de Ação Final */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <a
                  href={projeto.linkDeploy || '#'}
                  target="_blank"
                  style={{
                    padding: '1.2rem',
                    background: 'var(--text-primary)',
                    color: 'var(--bg)',
                    textAlign: 'center',
                    textDecoration: 'none',
                    borderRadius: 6,
                    fontWeight: 500,
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={(e) => (e.target.style.opacity = 0.9)}
                  onMouseLeave={(e) => (e.target.style.opacity = 1)}
                >
                  Acessar Projeto Live
                </a>
                <a
                  href={projeto.linkGithub || '#'}
                  target="_blank"
                  style={{
                    padding: '1.2rem',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                    textAlign: 'center',
                    textDecoration: 'none',
                    borderRadius: 6,
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.background = 'var(--bg-subtle)')
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.background = 'transparent')
                  }
                >
                  Ver Código no GitHub
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .grid-mobile { grid-template-columns: 1fr !important; gap: 3rem !important; }
          aside { position: relative !important; top: 0 !important; }
        }
      `}</style>
    </>
  );
}
