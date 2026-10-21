# WELLYMOTION — NOTAS DE ALTERAÇÃO VISUAL

## Objetivo
Redesenho visual do site existente, com **preservação do grid de vídeos, CMS, rotas, stack e configuração Vercel Services**. Este pacote substitui os arquivos do projeto anterior sem trocar a arquitetura.

## Nova paleta fornecida

| Código | Uso no site |
|---|---|
| `#A8DCAB` | Verde-menta: decoração, gradientes, identidade visual |
| `#519755` | Verde médio: detalhes, bordas, formas, hovers |
| `#DBAAA7` | Rosa suave: detalhes orgânicos, selo das seções, `REC` |
| `#469110` | Verde de ação: botões e ênfases |

Para facilitar a leitura em fundo claro, os textos usam tons neutros derivados (por exemplo, `#193B29` para texto principal) e há tons de fundo branco/menta quase branco. **As quatro cores acima permanecem intactas como cores centrais da marca.**

## Mudanças realizadas

### 1. Identidade visual e formas
- Reformulado `src/styles/global.css` com a nova paleta e superfícies claras.
- Preservados nomes antigos dos tokens Tailwind (`ink`, `lime`, `gold`) para não quebrar classes já existentes.
- Criadas formas orgânicas decorativas nos setores Hero, Serviços, Sobre e Contato, com CSS — não precisa baixar assets extras.
- Hero reformulado com fundo menta, painel de timeline com curvas assimétricas e detalhes rosa.
- Cards de serviço, processo e contato com bordas orgânicas, sombras suaves e bordas verdes.
- Cards de vídeo com raio orgânico, **sem trocar grid, medidas, formatos 9:16/16:9 nem lógica do player**.
- Botões de borda arredondada e tags arredondadas.
- Favicon atualizado para a nova identidade.
- Cor do navegador (`theme-color`) alinhada ao novo fundo.

### 2. Textos reduzidos
- Hero: subtítulo reduzido para uma frase curta.
- Serviços: introdução e descrições simplificadas.
- Processo: cada uma das quatro etapas abreviada.
- Trabalhos: texto de abertura e estado sem projetos mais curtos.
- Sobre: biografia local inicial condensada sem adicionar informações pessoais.
- Contato: introdução reduzida.
- Página `/trabalhos`: descrição de apoio e estado vazio encurtados.

**Conteúdo real vindo do Sanity não foi editado**. Os novos textos locais são a base para quem ainda não conectou o CMS.

### 3. Desktop e mobile
- Títulos fluidos em telas grandes e pequenas; `Retenção.` foi adaptado para caber em celulares menores.
- Espaçamento e cantos orgânicos específicos para tela pequena.
- Botões do Hero ocupam a largura no celular muito estreito.
- Ajustado o limite do CSS de ocultação do menu desktop para acompanhar o breakpoint `md` do Tailwind.
- Menu do site fecha com `Escape`, além do fechamento ao escolher um link.
- Contraste reforçado em textos e nos controles de vídeo, sem trocar o player.
- Prévia `preview.html` renovada e com menu móvel para inspecionar o visual pelo navegador ou Live Server.

## Arquivos EDITADOS

- `src/styles/global.css` — paleta, tipografia responsiva e formas orgânicas.
- `src/components/sections/Hero.astro` — textos, detalhes de cor e painel orgânico.
- `src/components/sections/Services.astro` — textos, cartões orgânicos.
- `src/components/sections/Process.astro` — textos, cartões orgânicos.
- `src/components/sections/Works.astro` — copy e painel vazio.
- `src/components/sections/About.astro` — formas e tipografia.
- `src/components/sections/Contact.astro` — textos e cartões.
- `src/components/sections/Nav.astro` — arredondamento e usabilidade mobile.
- `src/components/media/VideoCard.astro` — cores e bordas externas; grid e proporções preservados.
- `src/components/media/VideoPlayer.astro` — apenas cor de fundo de vídeo para uma boa visualização; comportamento intacto.
- `src/pages/trabalhos/index.astro` — microcopy, bordas dos filtros e container de estado vazio; grid preservado.
- `src/pages/trabalhos/[slug].astro` — cor de texto e fundo do painel; layout preservado.
- `src/content/site.local.ts` — bio local encurtada.
- `src/layouts/Base.astro` — `theme-color` atualizado.
- `public/favicon.svg` — paleta e forma.
- `preview.html` — prévia estática alinhada à nova identidade.
- `README.md` — instruções sobre novo estilo e como publicar com cautela.

## Arquivos MANTIDOS (deploy e conteúdo)

Não foram alterados os arquivos responsáveis por deploy e pela plataforma:

- `vercel.json` — mesmos serviços `app` e `studio`, rotas e rewrites.
- `package.json` — mesmas dependências, scripts, overrides e Node.
- `astro.config.mjs` — mesmo adapter, build estático e plugin Tailwind.
- `studio/` — config, schemas e dependências originais preservados.
- `src/lib/sanity.ts`, `src/lib/queries.ts`, `src/lib/site.ts` — mesmos serviços, GROQ e contatos.
- `src/content/projects.local.ts` — nenhum projeto cadastrado foi mexido.
- `src/pages/index.astro` — mesma ordem e quantidade de seções.
- `src/components/media/VideoPlayer.astro` — lógica de carregamento e reprodução preservada; apenas cor de fundo alterada.
- As classes `grid ... md:grid-cols-2 lg:grid-cols-3` de Works e `/trabalhos` permanecem exatamente como estavam.

## Como atualizar sem perder o que está funcionando

1. Faça uma cópia/branch do repositório atualmente publicado.
2. Substitua pelos arquivos deste pacote e confira o `git diff`.
3. Confirme que **`vercel.json`, `astro.config.mjs`, `package.json` e `studio/` continuam iguais**.
4. Execute `npm install` (se necessário) e `npm run build` usando Node compatível com seu projeto.
5. Teste as rotas `/`, `/trabalhos`, uma página individual de projeto (se já houver) e `/studio` em um deploy de prévia da Vercel.
6. Confira formatos dos vídeos, menu no celular e CTA do WhatsApp antes de publicar em produção.
7. Promova o deploy de prévia para produção somente após essa verificação.

## Validação efetuada aqui

- Estrutura de pastas, arquivos preservados e sintaxe do `vercel.json` verificadas.
- `preview.html` renderizado em navegador automatizado nas larguras **320, 375, 390, 768, 1024, 1440 px**.
- Navegação móvel da prévia validada; rolagem horizontal efetiva não foi observada.
- **Não foi possível executar `npm run build` neste ambiente**, pois a rede não conseguiu acessar o registro `npmjs.org` (`EAI_AGAIN`). Portanto, o build da Vercel ainda precisa ser validado no seu repositório/ambiente.
- A prévia HTML é ilustrativa; os projetos reais continuam sendo geridos pela aplicação Astro/Sanity.

## Onde personalizar depois

- `src/styles/global.css` — cores, cantos, decoração e responsividade.
- `src/components/sections/` — textos das seções e composição.
- `src/content/site.local.ts` — apresentação local.
- `src/content/projects.local.ts` — vídeos locais.
- Sanity Studio — conteúdo real, caso esteja conectado.

**Nenhum projeto real foi excluído, e nenhum asset de vídeo foi substituído.**
