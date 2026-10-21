# Vercel Services — configuração proposta (aguardando sua confirmação)

Este arquivo documenta a hipótese de deploy quando a raiz do repositório contém a pasta `wellymotion-site/`.

## Estrutura
- `vercel.json` (NOVO, na raiz do repositório)
- `wellymotion-site/` (aplicação Astro preexistente)
- `wellymotion-site/studio/` (Sanity Studio preexistente)

## Rotas públicas propostas
- `/` e demais páginas da aplicação → serviço `wellymotion-site`
- `/studio` e `/studio/...` → serviço `studio`

## Bindings
Nenhum. O Astro usa diretamente a API externa do Sanity Cloud por `@sanity/client`; o Studio não envia requisições para um endpoint interno do Astro. NÃO declarar `SANITY_URL` ou vinculação falsa.

## Ajustes feitos
1. `vercel.json` na raiz para refletir a estrutura do GitHub informada no pedido.
2. Dependência `styled-components` adicionada a `wellymotion-site/studio/package.json` para cobrir a falta previamente relatada no build do Studio. Sem lockfile incluído; instalar na pasta do Studio para gerar lockfile antes de subir a produção.
3. `sanity.config.ts` já contém `basePath: '/studio'`; nenhuma alteração necessária.
4. O `vercel.json` antigo foi preservado dentro de `wellymotion-site/` como fallback caso você mantenha o Vercel configurado com root directory `wellymotion-site`.
5. Não alterei o Astro, grid de projetos, conteúdo, rotas ou design.

## Onde colocar
Se no GitHub a raiz tiver a pasta `wellymotion-site/`, adicione o NOVO `vercel.json` do ZIP diretamente nessa raiz, no mesmo nível da pasta. No Vercel configure Project Settings → Build and Deployment → Root Directory como raiz do repositório (`.`), não `wellymotion-site`.

Se sua raiz do GitHub já contiver `package.json`, `src/` e `studio/` lado a lado, a configuração de `vercel.json` interno (`wellymotion-site/vercel.json`) é a adequada; não use a de raiz externa sem adaptar os caminhos.

## Variáveis ambiente
App: `PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET`.
Studio: `SANITY_STUDIO_PROJECT_ID`, `SANITY_STUDIO_DATASET`.
Site: `PUBLIC_SITE_URL` (se o projeto utiliza).
Não armazene chaves privadas no arquivo compactado/repositório.

## Antes de publicar
1. Confirmar nome dos serviços, rotas e ausência de bindings.
2. Instalar dependências: `cd wellymotion-site/studio && npm install` para gerar `package-lock.json`; adicionar ao Git.
3. Testar `npm run build` em `wellymotion-site` e em `wellymotion-site/studio`.
4. Criar Preview Deployment e testar `/`, `/trabalhos`, `/studio`, `/studio/...`.
5. Confirmar CORS do Sanity para o domínio Vercel.
6. Só então promover para produção.

Este pacote foi inspecionado e validado quanto à estrutura/JSON; um build Vercel real ainda não foi executado aqui.
