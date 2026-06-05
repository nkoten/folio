export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        padding: '2.5rem 2rem',
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-card)',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.2rem',
            color: 'var(--text-primary)',
          }}
        >
          NKoten<span style={{ color: 'var(--accent)' }}>.</span>
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            color: 'var(--text-muted)',
          }}
        >
          © {year} — Feito com propósito e cuidado
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            color: 'var(--text-muted)',
          }}
        >
          Next.js · Tailwind · Supabase
        </span>
      </div>
    </footer>
  );
}
