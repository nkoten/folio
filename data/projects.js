/*
 */
export const projects = [
  {
    id: 'projeto-alpha',
    num: '01',
    title: 'Projeto Alpha',
    subtitle: 'API REST completa',
    description:
      'Uma API robusta construída com Node.js e Express, com autenticação JWT e controle de permissões.',
    fullDescription:
      'Aqui vai o texto longo para a página de detalhes... Explicando desafios técnicos e soluções de arquitetura.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    year: '2024',
    status: 'Produção',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop', // Imagem horizontal
  },
  {
    id: 'projeto-beta',
    num: '02',
    title: 'Projeto Beta',
    subtitle: 'Aplicação Full Stack',
    description:
      'Solução completa com frontend em Next.js e backend em Node.js. Interface intuitiva e responsiva.',
    fullDescription:
      'Detalhes profundos sobre a integração com Supabase e o uso de Server Components no Next.js.',
    tags: ['Next.js', 'React', 'Supabase', 'Tailwind'],
    year: '2024',
    status: 'Dev',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop', // Imagem vertical/alta
  },
  {
    id: 'projeto-gamma',
    num: '03',
    title: 'Projeto Gamma',
    subtitle: 'Ferramenta CLI',
    description:
      'Utilitário de linha de comando que automatiza fluxos de trabalho repetitivos.',
    fullDescription:
      'Explicação sobre como a ferramenta CLI reduziu o tempo de deploy em 30%.',
    tags: ['Node.js', 'CLI', 'Shell'],
    year: '2023',
    status: 'Open Source',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000&auto=format&fit=crop',
  },
];
