import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

// Cadastre o projeto em sanity.io/manage e copie o Project ID para studio/.env
const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';
if (!projectId) throw new Error('Defina SANITY_STUDIO_PROJECT_ID no arquivo studio/.env');
export default defineConfig({
  name:'wellymotion-studio', title:'Wellymotion · Conteúdo',
  basePath:'/studio',
  projectId, dataset,
  plugins:[structureTool(), visionTool()],
  schema:{types:schemaTypes},
});
