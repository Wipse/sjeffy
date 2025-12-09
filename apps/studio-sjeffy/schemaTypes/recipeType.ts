import { defineField, defineType } from 'sanity'

export const recipeType = defineType({
  name: 'recipe',
  title: 'Recept',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Receptnaam',
      type: 'string',
      description: 'Voer de naam van je recept in (bijv. "Chocoladechip Koekjes")',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'Dit maakt een URL-vriendelijke versie van je receptnaam',
      options: { source: 'name' },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beschrijving',
      type: 'string',
      description: 'Schrijf een korte, smakelijke beschrijving van je recept (max 200 karakters)',
      validation: rule => rule.required().max(200),
    }),
    defineField({
      name: 'image',
      title: 'Receptfoto',
      type: 'image',
      description: 'Upload een smakelijke foto van je afgewerkte gerecht',
    }),
    defineField({
      name: 'categories',
      title: 'Categorieën',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      description: 'Selecteer de categorieën waar dit recept bij hoort',
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingrediënten',
      type: 'array',
      of: [{ type: 'string' }],
      description:
        'Lijst alle ingrediënten die nodig zijn voor dit recept (bijv. "2 kopjes bloem", "1 theelepel zout")',
    }),
    defineField({
      name: 'instructions',
      title: 'Instructies',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Stap-voor-stap kookinstructies. Je kunt hier rijke tekstopmaak gebruiken.',
    }),
    defineField({
      name: 'rating',
      title: 'Beoordeling',
      type: 'number',
      description: 'Beoordeel dit recept van 1 tot 5 sterren',
      validation: rule => rule.required().min(1).max(5).precision(1),
    }),
    defineField({
      name: 'timeToCook',
      title: 'Kooktijd',
      type: 'number',
      description: 'Totale kooktijd in minuten (inclusief voorbereidingstijd)',
      validation: rule => rule.min(1).max(480).integer(),
    }),
    defineField({
      name: 'uploadDate',
      title: 'Upload Datum',
      type: 'datetime',
      description: 'Wanneer dit recept is toegevoegd aan de collectie',
      initialValue: () => new Date().toISOString(),
      validation: rule => rule.required(),
    }),
  ],
})
