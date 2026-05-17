// app/projetos/page.js
'use client';
import { projects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ProjectCard } from '@/components/Projects'; // Certifique-se de exportar o ProjectCard para reuso
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GaleriaProjetos() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [mounted, setMounted] = useState(false);

  // Extrair todas as tags únicas dos projetos para criar os botões automaticamente
  const allTags = ['Todos', ...new Set(projects.flatMap((p) => p.tags))];

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  // Filtragem lógica
  const filteredProjects =
    activeFilter === 'Todos'
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  if (!mounted) return null;

  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: '100vh',
          paddingTop: '8rem',
          paddingBottom: '8rem',
          background: 'var(--bg)',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' }}>
          <button
            onClick={() => router.push('/')}
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
              marginBottom: '3rem',
            }}
          >
            ← VOLTAR PARA O INÍCIO
          </button>

          <header style={{ marginBottom: '4rem' }}>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: 1,
                marginBottom: '2rem',
              }}
            >
              Arquivo de <span style={{ fontStyle: 'italic' }}>Projetos.</span>
            </h1>

            {/* Barra de Filtros */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginTop: '2rem',
              }}
            >
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    background:
                      activeFilter === tag ? 'var(--accent)' : 'var(--bg-card)',
                    color:
                      activeFilter === tag ? '#FFF' : 'var(--text-secondary)',
                    border: `1px solid ${activeFilter === tag ? 'var(--accent)' : 'var(--border-subtle)'}`,
                  }}
                  onMouseEnter={(e) => {
                    if (activeFilter !== tag)
                      e.target.style.borderColor = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    if (activeFilter !== tag)
                      e.target.style.borderColor = 'var(--border-subtle)';
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </header>

          {/* Grid Masonry Animada */}
          <div
            style={{
              columnCount: 'auto',
              columnWidth: '320px',
              columnGap: '1.5rem',
            }}
          >
            {filteredProjects.map((project) => (
              <div key={project.id} className="animate-fade-in">
                <ProjectCard project={project} inView={true} />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p
              style={{
                textAlign: 'center',
                color: 'var(--text-muted)',
                marginTop: '4rem',
              }}
            >
              Nenhum projeto encontrado nesta categoria.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
