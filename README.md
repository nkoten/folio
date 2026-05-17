# Portfolio — Dev

Portfólio profissional construído com Next.js 16, Tailwind CSS v4 e Supabase.

## Stack

- **Next.js 16** (App Router, JSX)
- **Tailwind CSS v4**
- **Supabase** (para formulário de contato e futuros dados dinâmicos)
- **pnpm** (gerenciador de pacotes recomendado)

## Instalação

```bash
# Clone o repositório
git clone <seu-repo>
cd portfolio

# Instale as dependências
pnpm install
# ou: npm install

# Configure as variáveis de ambiente
cp .env.local.example .env.local
# Edite .env.local com suas chaves do Supabase

# Rode em desenvolvimento
pnpm dev
# ou: npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## Variáveis de Ambiente

Crie um arquivo `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon
```

## Estrutura

```
portfolio/
├── app/
│   ├── globals.css       # Design system (CSS variables, animações)
│   ├── layout.js         # Layout raiz + script de tema sem flash
│   └── page.js           # Página principal
├── components/
│   ├── Navbar.js         # Navegação responsiva + toggle de tema
│   ├── Hero.js           # Seção inicial com animações de entrada
│   ├── About.js          # Sobre mim
│   ├── Stack.js          # Habilidades com barras animadas
│   ├── Projects.js       # Galeria de projetos
│   ├── Contact.js        # Formulário de contato
│   ├── Footer.js         # Rodapé
│   └── ThemeToggle.js    # Botão dark/light independente do sistema
└── ...
```

## Personalização

### Informações pessoais
Edite os componentes diretamente:
- `components/Hero.js` — título, subtítulo, estatísticas
- `components/About.js` — texto sobre você, cards de formação
- `components/Stack.js` — tecnologias e níveis
- `components/Projects.js` — seus projetos (título, descrição, tags, links)
- `components/Contact.js` — email, GitHub, LinkedIn

### Tema
As cores são definidas em `app/globals.css` via CSS variables:
- `:root` — tema claro
- `.dark` — tema escuro

### Supabase (formulário de contato)
Em `components/Contact.js`, substitua o `await new Promise(...)` por uma chamada real ao Supabase:

```js
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// No handleSubmit:
const { error } = await supabase
  .from('messages')
  .insert([{ name: form.name, email: form.email, message: form.message }])
```

## Deploy

```bash
# Build de produção
pnpm build

# Deploy na Vercel (recomendado)
npx vercel --prod
```

---

Feito com cuidado. ✦
