import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Recepten
      S.listItem()
        .title('Recepten')
        .schemaType('recipe')
        .child(
            S.documentTypeList('recipe').title('Recepten')
        ),
      
      // Categorieën
      S.listItem()
        .title('Categorieën')
        .schemaType('category')
        .child(
            S.documentTypeList('category').title('Categorieën')
        ),
      
      // Overige Pagina's
      S.listItem()
        .title('Overige Pagina\'s')
        .schemaType('page')
        .child(
            S.documentTypeList('page').title('Overige Pagina\'s')
        ),
      
      // Divider
      S.divider(),
      
      // Settings folder
      S.listItem()
        .title('⚙️ Website Instellingen')
        .child(
          S.list()
            .title('Instellingen')
            .items([
              S.listItem()
                .title('Voedingswaarden en Meeteenheden')
                .schemaType('nutritionItem')
                .child(
                  S.documentTypeList('nutritionItem').title('Voedingswaarde Types')
                ),
              
              S.divider(),

              // Singleton: Header Instellingen
              S.listItem()
                .title('Header Instellingen')
                .child(
                  S.document()
                    .schemaType('headerSettings')
                    .documentId('headerSettings')
                    .title('Header Instellingen')
                ),
              
              // Singleton: Footer Instellingen
              S.listItem()
                .title('Footer Instellingen')
                .child(
                  S.document()
                    .schemaType('footerSettings')
                    .documentId('footerSettings')
                    .title('Footer Instellingen')
                ),
            ])
        ),
    ])