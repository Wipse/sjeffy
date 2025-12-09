import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'
import { colorInput } from '@sanity/color-input'

export default defineConfig({
  name: 'default',
  title: 'Sjeffy',

  projectId: 'j4tm46xz',
  dataset: 'sjeffy-dataset',

  plugins: [
    structureTool(), 
    visionTool(), 
    colorInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
