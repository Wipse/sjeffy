import sanity from '@sanity/astro'
import tailwindcss from '@tailwindcss/vite'

import { defineConfig } from 'astro/config'

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sanity({
      projectId: 'j4tm46xz',
      dataset: 'sjeffy-dataset',
      useCdn: false,
      studioBasePath: '/studio',
    }),
  ],
})
