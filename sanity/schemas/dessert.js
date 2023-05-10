export default {
  name: 'dessert',
  title: 'Dessert',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Dessert name',
      validation: (Rule) => Rule.max(15),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the dessert',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Short Description of the Dessert',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'timer',
      type: 'number',
      title: 'Timer on the dessert',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ingredients',
      type: 'array',
      title: 'Ingredients of the dessert',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'recipe',
      type: 'string',
      title: 'Recipe of the dessert',
      validation: (Rule) => Rule.required(),
    },
  ],
}
