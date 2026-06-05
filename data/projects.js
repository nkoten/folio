/* --- data/projects.js
 */
export const projects = [
  {
    id: 'nk-ui-react',
    num: '01',
    title: 'nk-ui-react',
    subtitle: 'Ecossistema CLI de Módulos Core',
    description:
      'Uma biblioteca e ferramenta CLI automatizada que injeta componentes web estruturais inspirados na API nativa do React Native diretamente no código-fonte do usuário.',
    fullDescription:
      'O nk-ui-react foi desenvolvido sob uma filosofia de total autonomia para o desenvolvedor (estilo shadcn/ui). Através de uma CLI interativa e fluida construída com @clack/prompts, o sistema avalia o ambiente do cliente e realiza o transpile dinâmico dos componentes para TypeScript (.tsx) ou JavaScript (.jsx). O pacote inclui um módulo avançado de streaming de vídeo acoplado à API industrial do Video.js, configurado nativamente com propriedades reativas e suporte completo a layouts baseados em Tailwind CSS.',
    tags: ['Node.js', 'React', 'CLI', 'Tailwind', 'Video.js', 'TypeScript'],
    year: '2026',
    status: 'Open Source',
    featured: true,
    image: '/folio/nk-ui-react_shots_so.png',
    linkDeploy: 'https://nkoten.github.io/nk-ui-react',
    linkGithub: 'https://github.com/nkoten/nk-ui-react',
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
