import { defineField, defineType } from 'sanity'

export const nutritionValueType = defineType({
  name: 'nutritionValue',
  title: 'Voedingswaarde',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Waarde',
      type: 'number',
      description: 'Waarde van de voedingswaarde',
      validation: rule => rule.required().min(0),
    }),
    defineField({
      name: 'item',
      title: 'Type',
      type: 'reference',
      to: [{ type: 'nutritionItem' }],
      description: 'Selecteer het type voedingswaarde',
      validation: rule => rule.required(),
    }),
  ],
  preview: {
    select: {
      itemName: 'item.name',
      itemUnit: 'item.unit',
      value: 'value',
    },
    prepare({ itemName, itemUnit, value }) {
      return {
        title: itemName || 'Voedingswaarde',
        subtitle: value ? `${value} ${itemUnit || ''}` : 'Geen waarde',
      }
    },
  },
})
