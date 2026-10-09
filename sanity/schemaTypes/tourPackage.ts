import { defineField, defineType } from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'
import { validateMaxImageSize } from './imageValidation'

export const tourPackage = defineType({
  name: 'tourPackage',
  title: 'Tour Package',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: 'tourPackage' }),
    defineField({
      name: 'title',
      title: 'Package Title (Short)',
      type: 'string',
      description: 'e.g. Azerbaijan, Thailand, Bali',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'id',
      title: 'Package Slug / ID',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'fullTitle',
      title: 'Full Package Title',
      type: 'string',
      description: 'e.g. Azerbaijan Tour Packages, Thailand Exotic Island Escape',
    }),
    defineField({
      name: 'description',
      title: 'Package Description',
      type: 'text',
      rows: 4,
      description: 'Detailed description of the tour package',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'International', value: 'International' },
          { title: 'Domestic', value: 'Domestic' },
        ],
      },
      initialValue: ['International'],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'region',
      title: 'Region / Destination',
      type: 'string',
      options: {
        list: [
          { title: 'Asia', value: 'Asia' },
          { title: 'Europe', value: 'Europe' },
          { title: 'Middle East', value: 'Middle East' },
          { title: 'Africa', value: 'Africa' },
          { title: 'Americas', value: 'Americas' },
        ],
      },
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g. 5 Days 4 Nights',
    }),
    defineField({
      name: 'price',
      title: 'Offer Price',
      type: 'string',
      description: 'e.g. INR 45,500',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'oldPrice',
      title: 'Original Price (Strikethrough)',
      type: 'string',
      description: 'e.g. INR 48,500',
    }),
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      options: {
     list: [
  { title: '💖 Recommended', value: '💖 Recommended' },
  { title: '🔥 Popular', value: '🔥 Popular' },
  { title: '🏆 Most Booked', value: '🏆 Most Booked' },
  { title: '🎉 Special Offer', value: '🎉 Special Offer' },
  { title: '📈 Trending', value: '📈 Trending' },
  { title: '✨ Exclusive', value: '✨ Exclusive' },
  { title: '💎 Premium', value: '💎 Premium' },
  { title: '🌴 Seasonal Special', value: '🌴 Seasonal Special' },
],
      },
    }),
    defineField({
      name: 'badgeType',
      title: 'Badge Color / Icon Type',
      type: 'string',
      options: {
        list: [
          { title: 'Fire Orange', value: 'fire-orange' },
          { title: 'Fire Red', value: 'fire-red' },
          { title: 'Tag Emerald', value: 'tag-emerald' },
          { title: 'Crown Amber', value: 'crown-amber' },
          { title: 'Sparkles Purple', value: 'sparkles-purple' },
        ],
      },
      initialValue: 'fire-orange',
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1 to 5)',
      type: 'number',
      initialValue: 4.8,
      validation: (Rule) => Rule.min(1).max(5),
    }),

    defineField({
      name: 'image',
      title: 'Main Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().custom(validateMaxImageSize(2)),
    }),
    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          validation: (Rule) => Rule.custom(validateMaxImageSize(2)),
        },
      ],
      validation: (Rule) => Rule.max(7).error('You can add a maximum of 7 images to the photo gallery'),
    }),
    defineField({
      name: 'itinerary',
      title: 'Day-by-Day Itinerary',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Day Plan',
          fields: [
            defineField({
              name: 'day',
              title: 'Day Number',
              type: 'number',
            }),
            defineField({
              name: 'title',
              title: 'Day Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Day Description (Bullet Points)',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Add bullet points for this day plan',
            }),
          ],
        },
      ],
    }),
     defineField({
      name: 'inclusions',
      title: 'Inclusions List',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'exclusions',
      title: 'Exclusions List',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
      rows: 4,
    }),
    
    defineField({
      name: 'keyHighlights',
      title: 'Key Highlights & Experiences (Bullet Points)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet points highlighting key experiences',
    }),

     defineField({
      name: 'highlights',
      title: 'Card Front Highlight (Bullet Points)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    
    defineField({
      name: 'inclusionIcons',
      title: 'Card Front Icons & Labels',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Inclusion Item',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Hotel', value: 'hotel' },
                  { title: 'Breakfast', value: 'breakfast' },
                  { title: 'Transfer', value: 'transfer' },
                  { title: 'Sightseeing', value: 'sightseeing' },
                ],
              },
              initialValue: 'hotel',
            }),
            defineField({
              name: 'label',
              title: 'Short Label',
              type: 'string',
              description: 'e.g. 04 Nights stay',
            }),
          ],
        },
      ],
    }),
   
   
    defineField({
      name: 'bannerCard',
      title: 'Banner Card',
      type: 'boolean',
      description: 'Check this box to feature this package in the banner card section',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection
      const categoryText = Array.isArray(subtitle)
        ? subtitle.join(', ')
        : subtitle || ''
      return {
        title: title || 'Untitled Package',
        subtitle: categoryText ? `Category: ${categoryText}` : '',
        media: media,
      }
    },
  },
})
