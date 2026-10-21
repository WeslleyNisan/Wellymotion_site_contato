# Painel Sanity (separado da interface Astro)

O painel usa React internamente porque é assim que o **Sanity Studio** funciona. O site público Wellymotion **não utiliza React**.

1. Crie uma conta/projeto em https://www.sanity.io/manage e escolha um dataset público chamado `production`.
2. Copie `.env.example` para `.env` e informe o `SANITY_STUDIO_PROJECT_ID`.
3. Nesta pasta, execute `npm install` e `npm run dev`.
4. No site Astro (pasta raiz), preencha `PUBLIC_SANITY_PROJECT_ID` em `.env`.
5. No painel Sanity, em API → CORS Origins, autorize `http://localhost:4321` e o domínio publicado.
6. Crie um único documento "Informações do site" e trabalhos com título, slug, formato, categoria, poster e vídeo.
7. Um novo trabalho aparece após rebuild/redeploy porque o site usa saída estática (`output: 'static'`).
