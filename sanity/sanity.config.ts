import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { media } from 'sanity-plugin-media'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Middle-East Travels',

  projectId: 'j088vign',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            // Orderable Testimonials with drag-and-drop reordering
            orderableDocumentListDeskItem({
              type: 'testimonial',
              title: 'Testimonials',
              S,
              context,
            }),
            // Orderable Happy Customers with drag-and-drop reordering
            orderableDocumentListDeskItem({
              type: 'happyCustomer',
              title: 'Happy Customers',
              S,
              context,
            }),
            // Orderable Tour Packages with drag-and-drop reordering
            orderableDocumentListDeskItem({
              type: 'tourPackage',
              title: 'Tour Packages',
              S,
              context,
            }),
            // Orderable Visa Services with drag-and-drop reordering
            orderableDocumentListDeskItem({
              type: 'visaService',
              title: 'Visa Services',
              S,
              context,
            }),
            // Default list items for other schemas (excluding custom orderable schemas and Media internal schemas)
            ...S.documentTypeListItems().filter((listItem) => {
              const id = listItem.getId() || ''
              return !['testimonial', 'happyCustomer', 'tourPackage', 'visaService'].includes(id) && !id.toLowerCase().startsWith('media')
            }),
          ]),
    }),
    media(),
  ],

  releases: {
    enabled: false,
  },

  tools: (prev) =>
    prev.filter(
      (tool) => tool.name !== 'vision' && tool.name !== 'releases' && tool.name !== 'release'
    ),

  schema: {
    types: schemaTypes,
  },
})

