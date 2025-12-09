import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Categorieën',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Categorienaam',
      type: 'string',
      description: 'Voer de naam van de categorie in (bijv. "Kip", "Hoofdgerecht", "Vegan")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'Dit maakt een URL-vriendelijke versie van de categorienaam',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beschrijving',
      type: 'text',
      description: 'Korte beschrijving van wat deze categorie inhoudt',
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'image',
      title: 'Afbeelding',
      type: 'image',
      description: 'Upload een afbeelding voor deze categorie',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
    },
  },
})
