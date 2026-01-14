import { defineField, defineType } from 'sanity'

export const recipeType = defineType({
  name: 'recipe',
  title: 'Recept',
  type: 'document',
  groups: [
    {
      name: 'default',
      title: 'Basis',
      default: true,
    },
    {
      name: 'instructions',
      title: 'Instructies',
    },
    {
      name: 'servings',
      title: 'Porties',
    },
    {
      name: 'images',
      title: 'Afbeeldingen',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Receptnaam',
      type: 'string',
      description: 'Voer de naam van je recept in (bijv. "Chocoladechip Koekjes")',
      validation: rule => rule.required(),
      group: 'default',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'Dit maakt een URL-vriendelijke versie van je receptnaam',
      options: { source: 'name' },
      validation: rule => rule.required(),
      group: 'default',
    }),
    defineField({
      name: 'description',
      title: 'Beschrijving',
      type: 'string',
      description: 'Schrijf een korte, smakelijke beschrijving van je recept (max 200 karakters)',
      validation: rule => rule.required().max(200),
      group: 'default',
    }),
    defineField({
      name: 'categories',
      title: 'Categorieën',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      description: 'Selecteer de categorieën waar dit recept bij hoort',
      group: 'default',
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingrediënten',
      type: 'array',
      of: [{ type: 'string' }],
      description:
        'Lijst alle ingrediënten die nodig zijn voor dit recept (bijv. "2 kopjes bloem", "1 theelepel zout")',
      group: 'default',
    }),
    defineField({
      name: 'rating',
      title: 'Beoordeling',
      type: 'number',
      description: 'Beoordeel dit recept van 1 tot 5 sterren',
      validation: rule => rule.required().min(1).max(5).precision(1),
      group: 'default',
    }),
    defineField({
      name: 'timeToCook',
      title: 'Kooktijd',
      type: 'number',
      description: 'Totale kooktijd in minuten (inclusief voorbereidingstijd)',
      validation: rule => rule.min(1).max(480).integer(),
      group: 'default',
    }),
    defineField({
      name: 'uploadDate',
      title: 'Upload Datum',
      type: 'datetime',
      description: 'Wanneer dit recept is toegevoegd aan de collectie',
      initialValue: () => new Date().toISOString(),
      validation: rule => rule.required(),
      group: 'default',
    }),

    // Instructions
    defineField({
      name: 'instructions',
      title: 'Instructies',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Stap-voor-stap kookinstructies. Je kunt hier rijke tekstopmaak gebruiken.',
      group: 'instructions',
    }),

    // Servings
    defineField({
      name: 'servings',
      title: 'Porties',
      type: 'number',
      description: 'Het aantal porties dat gemaakt kan worden met dit recept',
      group: 'servings',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'servingsType',
      title: 'Portiesoort',
      type: 'string',
      description: 'Alternatief voor het woord "porties". Te gebruiken voor bijvoorbeeld "3 wraps" of "8 pannenkoeken". Dit veld kan leeg gelaten worden voor het woord "porties"',
      group: 'servings',
      initialValue: 'porties',
    }),
    defineField({
      name: 'nutrition',
      title: 'Voedingswaarden',
      type: 'array',
      description: 'Voeg voedingswaarden per portie(soort) toe',
      of: [{ type: 'nutritionValue' }],
      group: 'servings',
    }),

    // Images
    defineField({
      name: 'mainImage',
      title: 'Hoofdafbeelding',
      type: 'image',
      description: 'Upload een smakelijke foto van je afgewerkte gerecht',
      group: 'images',
    }),
    defineField({
      name: 'additionalImages',
      title: 'Ronde Afbeelding',
      type: 'image',
      description: 'Een top-view afbeelding van het recept op een bord, gebruikt voor de roterende afbeelding op de recept-detailpagina',
      group: 'images',
    }),
  ],
})
