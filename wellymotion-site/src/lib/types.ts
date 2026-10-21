export type ProjectCategory = 'Shorts/Reels' | 'Long-form' | 'Motion' | 'Comercial';
export type VideoFormat = '16:9' | '9:16';
export interface Project {
  title: string;
  slug: string;
  format: VideoFormat;
  category: ProjectCategory;
  poster: string;
  /** URL .mp4 do arquivo no Sanity CDN ou em /public/assets */
  videoFile?: string;
  /** URL YouTube/Vimeo pública ou não listada, ou URL MP4 */
  videoUrl?: string;
  description?: string;
  credits?: string[];
  featured: boolean;
  order: number;
}
export interface SiteSettings {
  bio?: string;
  photo?: string;
  heroReel?: string;
  heroPoster?: string;
}
