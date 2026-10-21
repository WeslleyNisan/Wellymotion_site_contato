import { defineField, defineType } from 'sanity';
export const siteSettings=defineType({
  name:'siteSettings',title:'Informações do site',type:'document',
  fields:[
    defineField({name:'bio',title:'Bio em primeira pessoa',type:'text',rows:8}),
    defineField({name:'photo',title:'Foto real de Welly',type:'image',options:{hotspot:true}}),
    defineField({name:'heroReel',title:'Vídeo do hero (MP4)',type:'file',options:{accept:'video/mp4'}}),
    defineField({name:'heroPoster',title:'Poster do hero',type:'image',options:{hotspot:true}}),
  ]
});
