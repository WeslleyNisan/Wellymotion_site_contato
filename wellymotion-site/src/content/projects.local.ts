import type { Project } from '../lib/types';

/**
 * PROJETOS LOCAIS — forma mais rápida de cadastrar vídeos sem CMS.
 * Começa vazia para não exibir trabalhos fictícios.
 * 1. Coloque um poster .webp em public/assets/
 * 2. Use a URL /assets/seu-poster.webp
 * 3. Adicione o link do vídeo (MP4, YouTube ou Vimeo)
 * 4. Salve, que o Astro atualiza no navegador.
 *
 * Exemplo — DESCOMENTE e altere apenas quando tiver um trabalho real:
 * {
 *   title: 'Nome real do projeto',
 *   slug: 'nome-real-do-projeto',
 *   format: '9:16', category: 'Shorts/Reels',
 *   poster: '/assets/capa.webp',
 *   videoUrl: 'https://www.youtube.com/watch?v=SEU_ID',
 *   description: 'Breve descrição do trabalho.',
 *   credits: ['Edição: Wellymotion'], featured: true, order: 1,
 * },
 */
export const localProjects: Project[] = [];
