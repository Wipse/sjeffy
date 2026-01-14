import { defineField, defineType } from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Overige Pagina\'s',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Pagina Naam',
      type: 'string',
      description: 'Voer de naam van de pagina in (bijv. "Over ons", "Contact", "Privacybeleid")',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'Dit maakt een URL-vriendelijke versie van de pagina naam',
      options: { source: 'name' },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beschrijving',
      type: 'text',
      description: 'Korte beschrijving van wat deze pagina inhoudt',
      validation: rule => rule.max(200),
    }),
    defineField({
      name: 'image',
      title: 'Afbeelding',
      type: 'image',
      description: 'Upload een afbeelding voor deze pagina',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
    },
  },
})
