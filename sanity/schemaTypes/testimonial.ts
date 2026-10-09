import { defineField, defineType } from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'
import { validateMaxImageSize } from './imageValidation'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: 'testimonial' }),
    defineField({
      name: 'name',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Testimonial Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1 to 5)',
      type: 'number',
      initialValue: 5,
      validation: (Rule) => Rule.min(1).max(5),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'branch',
      media: 'avatar',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection
      return {
        title: title || 'Untitled Testimonial',
      }
    },
  },
})
