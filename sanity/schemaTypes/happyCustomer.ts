import { defineField, defineType } from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'
import { validateMaxImageSize } from './imageValidation'

export const happyCustomer = defineType({
  name: 'happyCustomer',
  title: 'Happy Customer',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: 'happyCustomer' }),
    defineField({
      name: 'name',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Main Photo / Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.custom(validateMaxImageSize(2)),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'location',
      media: 'image',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection
      return {
        title: title || 'Untitled Happy Customer',
        subtitle: subtitle || '',
        media: media,
      }
    },
  },
})
