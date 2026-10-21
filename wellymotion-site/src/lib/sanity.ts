import { createClient } from '@sanity/client';
import type { Project, SiteSettings } from './types';
import { localProjects } from '../content/projects.local';
import { localSettings } from '../content/site.local';
import { projectsQuery, featuredProjectsQuery, siteSettingsQuery } from './queries';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID?.trim();
const dataset = import.meta.env.PUBLIC_SANITY_DATASET?.trim() || 'production';
export const sanityEnabled = Boolean(projectId);
export const sanity = projectId
  ? createClient({ projectId, dataset, apiVersion: '2026-03-01', useCdn: true, perspective: 'published' })
  : null;

function validProjects(projects: Project[]): Project[] {
  return projects.filter((p) => Boolean(p?.slug && p.poster && p.title))
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

export async function getProjects(): Promise<Project[]> {
  if (!sanity) return validProjects(localProjects);
  try { return validProjects(await sanity.fetch<Project[]>(projectsQuery)); }
  catch (error) { console.warn('[Wellymotion] Sanity indisponível; usando projetos locais.', error); return validProjects(localProjects); }
}
export async function getFeaturedProjects(): Promise<Project[]> {
  if (!sanity) return validProjects(localProjects.filter((p) => p.featured)).slice(0, 6);
  try { return validProjects(await sanity.fetch<Project[]>(featuredProjectsQuery)); }
  catch (error) { console.warn('[Wellymotion] Destaques locais em uso.', error); return validProjects(localProjects.filter((p) => p.featured)).slice(0, 6); }
}
export async function getSiteSettings(): Promise<SiteSettings> {
  if (!sanity) return localSettings;
  try {
    const settings = await sanity.fetch<SiteSettings | null>(siteSettingsQuery);
    return { ...localSettings, ...Object.fromEntries(Object.entries(settings || {}).filter(([_, v]) => Boolean(v))) };
  } catch (error) { console.warn('[Wellymotion] Dados locais em uso.', error); return localSettings; }
}
