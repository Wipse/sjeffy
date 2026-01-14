import { defineField, defineType } from 'sanity'

export const headerSettingsType = defineType({
  name: 'headerSettings',
  title: 'Header Instellingen',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      initialValue: 'Header Instellingen',
      hidden: true,
    }),
    defineField({
      name: 'navigationItems',
      title: 'Navigatielinkjes',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'page' } }],
      description: 'Selecteer de pagina\'s die in de header getoond moeten worden',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
