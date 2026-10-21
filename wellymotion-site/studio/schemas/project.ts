import { defineField, defineType } from 'sanity';
export const project = defineType({
  name: 'project', title: 'Trabalhos', type: 'document',
  fields: [
    defineField({name:'title',title:'Título',type:'string',validation: Rule => Rule.required()}),
    defineField({name:'slug',title:'Endereço (slug)',type:'slug',options:{source:'title',maxLength:96},validation: Rule => Rule.required()}),
    defineField({name:'format',title:'Formato',type:'string',initialValue:'9:16',options:{layout:'radio',list:[{title:'Vertical · 9:16',value:'9:16'},{title:'Horizontal · 16:9',value:'16:9'}]},validation:Rule=>Rule.required()}),
    defineField({name:'category',title:'Categoria',type:'string',options:{list:['Shorts/Reels','Long-form','Motion','Comercial']},validation:Rule=>Rule.required()}),
    defineField({name:'poster',title:'Capa do vídeo (obrigatória)',type:'image',options:{hotspot:true},validation:Rule=>Rule.required()}),
    defineField({name:'videoFile',title:'Vídeo MP4 (upload)',type:'file',options:{accept:'video/mp4'}}),
    defineField({name:'videoUrl',title:'Link externo do vídeo (YouTube/Vimeo/MP4)',type:'string',description:'Preencha este campo OU envie o arquivo MP4.',validation:Rule=>Rule.custom((value,context)=> {
      const doc=context.document as {videoFile?:unknown};
      return value || doc?.videoFile ? true : 'Inclua um MP4 ou link de vídeo.';
    })}),
    defineField({name:'description',title:'Descrição',type:'text',rows:5}),
    defineField({name:'credits',title:'Créditos',type:'array',of:[{type:'string'}]}),
    defineField({name:'featured',title:'Mostrar na Home?',type:'boolean',initialValue:false}),
    defineField({name:'order',title:'Ordem (menor primeiro)',type:'number',initialValue:99}),
  ],
  preview:{select:{title:'title',media:'poster',subtitle:'category'}}
});
