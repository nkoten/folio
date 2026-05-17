'use client';
import { useEffect, useRef, useState } from 'react';
import { projects } from '@/data/projects';

function useInView(threshold = 0.1) {
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

function ProjectCard({ project, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        breakInside: 'avoid', // Essencial para Masonry não cortar o card no meio
        marginBottom: '1.5rem',
        position: 'relative',
        background: hovered ? 'var(--surface)' : 'var(--bg-card)',
        border: `1px solid ${hovered ? 'var(--accent)' : 'var(--border-subtle)'}`,
        borderRadius: 12,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        boxShadow: hovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
      }}
    >
      {/* Capa do Projeto */}
      <div style={{ width: '100%', overflow: 'hidden', aspectRatio: 'auto' }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.03)' : 'scale(1)',
          }}
        />
      </div>

      <div style={{ padding: '1.5rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '0.5rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              color: 'var(--text-muted)',
            }}
          >
            {project.num}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem',
              padding: '2px 8px',
              borderRadius: 20,
              background: 'var(--accent-subtle)',
              color: 'var(--accent)',
            }}
          >
            {project.status}
          </span>
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            color: 'var(--text-primary)',
            marginBottom: '0.2rem',
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '1.25rem',
          }}
        >
          {project.description}
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.4rem',
            marginBottom: '1.5rem',
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                padding: '2px 8px',
                background: 'var(--bg-subtle)',
                borderRadius: 4,
                color: 'var(--text-muted)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={`/projetos/${project.id}`}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          Ver Detalhes Case Study
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView(0.05);

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: '8rem 1.5rem', background: 'var(--bg-subtle)' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <header
          style={{
            marginBottom: '4rem',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.7s ease',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--accent)',
              marginBottom: '1rem',
            }}
          >
            03 — Vitrine
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              fontWeight: 300,
              color: 'var(--text-primary)',
            }}
          >
            Trabalhos Selecionados
          </h2>
        </header>

        {/* Masonry Layout nativo */}
        <div
          style={{
            columnCount: 'auto',
            columnWidth: '320px',
            columnGap: '1.5rem',
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
