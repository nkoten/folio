"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: "all 0.4s ease",
    background: scrolled ? "var(--bg-card)" : "transparent",
    borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
    backdropFilter: scrolled ? "blur(16px)" : "none",
    boxShadow: scrolled ? "var(--shadow-sm)" : "none",
  };

  return (
    <nav style={navStyle}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "0 2rem",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: "none" }}>
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            fontWeight: 400,
            color: "var(--text-primary)",
            letterSpacing: "0.02em",
          }}>
            dev<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hide-mobile">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                fontWeight: 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={e => e.target.style.color = "var(--accent)"}
              onMouseLeave={e => e.target.style.color = "var(--text-secondary)"}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <ThemeToggle />
          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="show-mobile"
            style={{
              background: "none",
              border: "1px solid var(--border)",
              borderRadius: 6,
              padding: "6px 10px",
              cursor: "pointer",
              color: "var(--text-secondary)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "var(--bg-card)",
          borderTop: "1px solid var(--border-subtle)",
          padding: "1rem 2rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}>
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .hide-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hide-mobile { display: none !important; } .show-mobile { display: flex !important; } }
      `}</style>
    </nav>
  );
}
