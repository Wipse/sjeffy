import { defineField, defineType } from 'sanity'

export const nutritionItemType = defineType({
  name: 'nutritionItem',
  title: 'Voedingswaarde Types',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Naam',
      type: 'string',
      description: 'Naam van de voedingswaarde (bijv. "Calorieën", "Proteïne", "Koolhydraten")',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'unit',
      title: 'Eenheid',
      type: 'string',
      description: 'Eenheid van de voedingswaarde (bijv. "kcal", "g", "mg")',
      validation: rule => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'unit',
    },
  },
})
