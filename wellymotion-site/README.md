# WELLYMOTION — Portfólio Astro 6

Portfólio em português-BR para editor de vídeo/motion freelancer. Construído conforme o briefing original, sem React no frontend, sem formulário, com componentes Astro personalizados.

## ✅ O que já está implementado

- Home completa (SC.00 → SC.05): nav, hero, serviços, processo, trabalhos, sobre, contato e footer.
- `/trabalhos`: grid filtrável por categoria via JS leve, sem framework no navegador.
- `/trabalhos/[slug]`: case para cada projeto cadastrado.
- Card com poster responsivo, categorias, formato 9:16 ou 16:9 e link para case.
- Player MP4 com controles personalizados; players YouTube/Vimeo usam embed seguro, sempre depois do clique.
- `<source>` inserido após clique e entrada na viewport (IntersectionObserver).
- Sanity Studio separado: schemas project e siteSettings; 4 queries GROQ; build estático.
- Modo local para cadastrar sem Sanity nem criar credenciais.
- Acessibilidade: skip link, foco, labels, `prefers-reduced-motion`, lazy loading, textos alternativos.

## 🚀 Começar

**IMPORTANTE: usar Node.js 22.12+ e terminal, NÃO Live Server do VS Code.**

1. Extraia o ZIP e abra a pasta `wellymotion-site/` no VS Code.
2. Abra Terminal → Novo Terminal (na pasta que contém o `package.json`).
3. Execute:

```bash
npm install
npm run dev
```

4. Acesse **http://localhost:4321** no navegador.

Para gerar a versão estática de produção:

```bash
npm run build
npm run preview
```

### Sem Node.js? Prévia de layout

Abra o **`preview.html`** com a extensão Live Server ou com dois cliques. É uma **prévia visual estática**, independente do Astro. A versão funcional é `npm run dev`.

## ✏️ Onde editar

| Quero modificar | Abra este arquivo |
|---|---|
| Nome, WhatsApp, Instagram, email | `src/lib/site.ts` |
| Textos da bio / foto | `src/content/site.local.ts` |
| Adicionar vídeos sem CMS | `src/content/projects.local.ts` |
| Cores, fontes, movimentos | `src/styles/global.css` |
| Hero | `src/components/sections/Hero.astro` |
| Serviços | `src/components/sections/Services.astro` |
| Processo | `src/components/sections/Process.astro` |
| Galeria da Home | `src/components/sections/Works.astro` |
| Player | `src/components/media/VideoPlayer.astro` |
| Card do projeto | `src/components/media/VideoCard.astro` |
| Página de galeria | `src/pages/trabalhos/index.astro` |
| Página do case | `src/pages/trabalhos/[slug].astro` |
| Schemas do CMS | `studio/schemas/` |

## 🎬 Adicionar seu primeiro trabalho, SEM Sanity

1. Crie a capa em `.webp` e copie para `public/assets/capa-do-meu-video.webp`.
2. Se possuir um MP4 local, coloque em `public/assets/` (para vídeos grandes, prefira uma hospedagem de vídeo/CDN).
3. Abra `src/content/projects.local.ts`.
4. Dentro do array `localProjects`, adicione um objeto conforme o exemplo abaixo. Os endereços são **exemplos de estrutura**, não trabalhos reais:

```ts
{
  title: 'Nome real do seu projeto',
  slug: 'nome-do-seu-projeto',
  format: '9:16',
  category: 'Shorts/Reels',
  poster: '/assets/capa-do-meu-video.webp',
  videoFile: '/assets/meu-video.mp4',
  description: 'O que você editou neste trabalho.',
  credits: ['Edição e motion: Wellymotion'],
  featured: true,
  order: 1,
},
```

5. Salve. O projeto aparece no grid da Home (se `featured: true`), na página `/trabalhos` e automaticamente em `/trabalhos/nome-do-seu-projeto`.
6. Você também pode usar `videoUrl` com link válido do YouTube, Vimeo ou MP4. Use **um** campo de vídeo por projeto.
7. Não reutilize slugs (cada URL precisa ser única).

Se o grid inicial está vazio, **não é bug**: nenhum vídeo fictício foi colocado. Adicione o primeiro trabalho para aparecer.

## 📸 Foto e bio

Edite `src/content/site.local.ts`. O retrato padrão é uma composição tipográfica `W.` para não fingir que é a foto do profissional. Quando tiver uma foto real, coloque em `public/assets/` e informe `photo: '/assets/retrato.webp'`.

## 🗂️ Ativar o Sanity depois

A pasta `studio/` contém um painel separado e editável. Veja `studio/README.md`. Para ligar o site ao CMS:

1. Copie `.env.example` (raiz) para `.env`.
2. Preencha `PUBLIC_SANITY_PROJECT_ID` e `PUBLIC_SANITY_DATASET`.
3. Configure o mesmo projeto e dataset no painel `studio/.env`.
4. Configure o dataset como público para consultas sem token (ou adapte a estratégia de credenciais no futuro).
5. Cadastre projetos com **poster obrigatório** e vídeo.
6. Execute `npm run build` e publique novamente. Como é estático, mudanças no CMS aparecem **após o próximo build**, não imediatamente.

**CORS:** em `sanity.io/manage` → API → CORS Origins, autorize `http://localhost:4321` e a URL final do site.

## 🌐 Publicar na Vercel

1. Suba a pasta raiz para GitHub, sem `.env` nem `node_modules`.
2. Importe o repositório na Vercel; framework Astro.
3. Configure variáveis de ambiente públicas somente se for usar o Sanity.
4. Build command `npm run build` e output `dist`.
5. Conecte seu domínio e informe `PUBLIC_SITE_URL=https://seu-dominio.com` se quiser canonicals corretos.
6. Sem domínio, os links diretos do WhatsApp e Instagram já funcionam.

O adaptador `@astrojs/vercel` está habilitado por exigência do briefing, mesmo com `output:'static'`.

## ⚠️ Informações pendentes

- E-mail real: `contato@wellymotion.com` é um **placeholder [CONFIRMAR]**. Por isso não há link de e-mail inventado; o card informa que o canal está sendo configurado.
- Projetos reais: título, capa WebP, vídeo, texto e créditos. Nenhum trabalho foi fabricado.
- Foto real e história pessoal: bio inicial apenas com os fatos fornecidos (um ano de atuação, Premiere/After Effects, freelancer no Pará). Não afirma prazos de resposta não confirmados.
- `heroReel` e `heroPoster` já existem no CMS/local settings para uso futuro. Não forcei autoplay no hero para manter a proposta estável, e não há reel real fornecido.

## 🎨 Design tokens

Paleta 2026: menta `#A8DCAB`, verde médio `#519755`, rosa suave `#DBAAA7` e verde de ação `#469110`. Fundo, superfícies e textos usam neutros de apoio para contraste. Os nomes dos tokens `ink`, `lime` e `gold` foram mantidos por compatibilidade com os componentes atuais.

Fontes: Inter (400–700) e JetBrains Mono (400–500). Motion: transitions 300ms, reveal 700ms, card hover 500ms. Sem GSAP, Framer Motion ou bibliotecas de UI.

## 🔎 Validação

A estrutura foi criada e revisada, mas **não houve acesso à rede/npm neste ambiente para instalar dependências ou executar `astro build`**. Portanto, a instalação/build ainda deve ser conferida no seu computador. O `preview.html` é independente do npm e pode ser visualizado com Live Server.

## 🧩 Próximas melhorias opcionais (Fase 3)

Página Sobre estendida, reel no hero quando fornecido, imagem OG autoral, Analytics e auditoria Lighthouse em produção. Performance >90 é meta, não nota medida.

## ▲ Vercel Services: app + Studio

Este repositório está preparado para um único projeto Vercel com dois serviços:

- `app` → raiz do repositório, framework Astro, público em `/`.
- `studio` → pasta `studio/`, framework Sanity, público em `/studio`.

O arquivo `vercel.json` da raiz define os dois serviços e mantém o catch-all do app por último. O Sanity Studio usa `basePath: '/studio'` para que rotas e assets funcionem sob esse prefixo.

Não há binding entre os serviços porque o frontend não chama o Sanity Studio e o Studio não chama o frontend. Ambos acessam o Sanity Cloud diretamente.

Configure estas variáveis no projeto Vercel:

```text
PUBLIC_SANITY_PROJECT_ID=...
PUBLIC_SANITY_DATASET=production
SANITY_STUDIO_PROJECT_ID=...
SANITY_STUDIO_DATASET=production
PUBLIC_SITE_URL=https://seu-dominio.com
```

`PUBLIC_SANITY_PROJECT_ID` e `SANITY_STUDIO_PROJECT_ID` normalmente apontam para o mesmo projeto Sanity. Não defina variáveis de binding manualmente: este projeto não usa service bindings.

Para testar os serviços juntos localmente, use `vercel dev` na raiz do repositório após instalar a Vercel CLI.


## 🎨 Atualização visual (paleta 2026)

O visual foi atualizado com a paleta menta/verde/rosa e curvas orgânicas, além de textos mais concisos e ajustes mobile. **O grid dos vídeos, o Astro, o Sanity e o `vercel.json` não foram reestruturados.** Leia [`NOTAS_DE_ALTERACOES.md`](./NOTAS_DE_ALTERACOES.md) para ver a lista completa de mudanças e as orientações de deploy seguro.
