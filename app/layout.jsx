import "./globals.css";

export const metadata = {
  title: "Dev Portfolio",
  description: "Engenheiro de Software — Construindo soluções com propósito.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}

function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              var stored = localStorage.getItem('theme');
              if (stored === 'dark' || stored === 'light') {
                document.documentElement.classList.toggle('dark', stored === 'dark');
              } else {
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                document.documentElement.classList.toggle('dark', prefersDark);
                localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
              }
            } catch(e) {}
          })();
        `,
      }}
    />
  );
}
