/** A ordem é controlada pelo campo `order`; projetos sem poster não aparecem. */
const projectFields = `
  title,
  "slug": slug.current,
  format,
  category,
  "poster": poster.asset->url,
  "videoFile": videoFile.asset->url,
  videoUrl,
  description,
  credits,
  featured,
  order
`;
export const projectsQuery = `*[_type == "project"] | order(order asc) {${projectFields}}`;
export const featuredProjectsQuery = `*[_type == "project" && featured == true] | order(order asc)[0...6] {${projectFields}}`;
export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {${projectFields}}`;
export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  bio,
  "photo": photo.asset->url,
  "heroReel": heroReel.asset->url,
  "heroPoster": heroPoster.asset->url
}`;
