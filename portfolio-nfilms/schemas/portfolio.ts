import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'urlversprojet',
      title: 'Liens vers projet',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    })
    ],

  preview: {
    select: {
      title: 'name',
      desc : 'description',
      url : 'urlversprojet',
      media: 'mainImage',
      date: 'publishedAt',
    },
  },
})
