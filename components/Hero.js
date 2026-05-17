'use client';
import { useEffect, useState } from 'react';

const heroLabels = {
  l1: { up: '', bottom: 'Código feito', bottom: 'com cuidado.' },
  l2: {
    up: 'Arquiteturas escaláveis e',
    bottom: 'interfaces de alta fidelidade.',
  },
  l3: { up: 'Sistemas robustos.', bottom: 'Interfaces premium.' },
};

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const data = {
    hero: {
      labelTop: heroLabels.l3.up,
      labelBottom: heroLabels.l3.bottom,
      text: `Especialista em transformar complexidade técnica em produtos fluidos. Do back-end robusto ao pixel perfect, meu compromisso é com a performance real.`,
    },
  };

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden', // Crucial para não vazar elementos decorativos no mobile
        padding: '0 1.5rem',
      }}
    >
      {/* Background decorativo - Ajustado para não criar scroll horizontal */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '-5%', // Puxado para fora para evitar quebra
          width: 'min(320px, 60vw)',
          height: 'min(320px, 60vw)',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          width: '100%',
          paddingTop: '5rem',
        }}
      >
        {/* Pre-title */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '2rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s',
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: 'var(--green)',
              boxShadow: '0 0 8px var(--green)',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}
          >
            Disponível para novos desafios
          </span>
        </div>

        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s',
          }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 7vw, 7.5rem)',
              fontWeight: 300,
              lineHeight: 1.05,
              color: 'var(--text-primary)',
              marginBottom: '0.1em',
            }}
          >
            {data.hero.labelTop}
          </h1>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 7vw, 7.5rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.05,
              color: 'var(--accent)',
              marginBottom: '0.5em',
            }}
          >
            {data.hero.labelBottom}
          </h1>
        </div>

        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s',
            maxWidth: 520,
            marginBottom: '3rem',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            {data.hero.text}
          </p>
        </div>

        {/* CTA */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s',
          }}
        >
          <a
            href="#projects"
            className="btn-primary"
            style={{
              padding: '0.8rem 2rem',
              background: 'var(--accent)',
              color: '#FFF',
              borderRadius: 4,
              textDecoration: 'none',
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
            }}
          >
            Explorar Vitrine{' '}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.8rem 2rem',
              background: 'transparent',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border)',
              borderRadius: 4,
              textDecoration: 'none',
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 400,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.color = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            Entrar em Contato
          </a>
        </div>

        {/* Stats strip - Fix Responsivo para mobile */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '2rem',
            marginTop: '5rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid var(--border-subtle)',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.8s',
          }}
        >
          {[
            { num: 'Fullstack', label: 'Especialidade Principal' },
            { num: 'Node.js', label: 'Arquitetura Back-end' },
            { num: 'React', label: 'Interfaces Modernas' },
            { num: 'Clean Code', label: 'Filosofia de Trabalho' },
          ].map((stat, i) => (
            <div key={i}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  color: 'var(--text-primary)',
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px var(--green); }
          50% { opacity: 0.5; box-shadow: 0 0 12px var(--green); }
        }
        @keyframes pulse-scroll {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
