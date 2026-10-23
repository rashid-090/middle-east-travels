import { defineField, defineType } from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'
import { validateMaxImageSize } from './imageValidation'

export const visaService = defineType({
  name: 'visaService',
  title: 'Visa Service',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: 'visaService' }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
       
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration / Processing Time',
      type: 'string',
    }),
    defineField({
      name: 'secondaryPrice',
      title: 'Secondary Price',
      type: 'string',
    }),
    defineField({
      name: 'secondaryDuration',
      title: 'Secondary Duration / Processing Time',
      type: 'string',
    }),

    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'string',
    }),
    defineField({
      name: 'visaTypes',
      title: 'Visa Types',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Tourist', value: 'Tourist' },
          { title: 'Business', value: 'Business' },
          { title: 'Family', value: 'Family' },
        ],
      },
      initialValue: ['Tourist', 'Business', 'Family'],
      description: 'Select visa types to display on the visa inner page',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.custom(validateMaxImageSize(2)),
    }),
     defineField({
      name: 'validity',
      title: 'Validity',
      type: 'string',
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet point highlight items',
    }),
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      description: 'Step-by-step process for getting this visa',
      of: [
        {
          type: 'object',
          name: 'processStep',
          title: 'Process Step',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'iconType',
              title: 'Icon Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Consultation / Application (File)', value: 'file' },
                  { title: 'Document Preparation (Document Check)', value: 'document' },
                  { title: 'Appointment Booking (Calendar)', value: 'calendar' },
                  { title: 'Interview / In-Person (User Check)', value: 'user' },
                  { title: 'Passport / Biometrics (Passport)', value: 'passport' },
                  { title: 'Visa Approval / Stamping (Stamp)', value: 'stamp' },
                  { title: 'Payment / Fee (Card)', value: 'payment' },
                  { title: 'Travel / Departure (Plane)', value: 'plane' },
                  { title: 'Processing / Waiting (Clock)', value: 'clock' },
                  { title: 'Expert Assistance (Support)', value: 'support' },
                ],
              },
              initialValue: 'file',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'faqs',
      title: 'Frequently Asked Questions (FAQs)',
      type: 'array',
      description: 'Custom question and answer items for this visa service',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          title: 'FAQ Item',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'question',
              subtitle: 'answer',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'documentsVisaImage',
      title: 'Documents Visa Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.custom(validateMaxImageSize(2)),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'price',
      media: 'image',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection
      return {
        title: title || 'Untitled Visa Service',
        subtitle: subtitle ? `Price: ${subtitle}` : '',
        media: media,
      }
    },
  },
})
