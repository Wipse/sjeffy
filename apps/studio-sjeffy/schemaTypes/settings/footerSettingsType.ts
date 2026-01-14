import { defineField, defineType } from 'sanity'

export const footerSettingsType = defineType({
  name: 'footerSettings',
  title: 'Footer Instellingen',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      initialValue: 'Footer Instellingen',
      hidden: true,
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'text',
      description: 'Footer van de website',
      validation: rule => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
