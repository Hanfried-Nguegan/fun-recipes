export default {
  name: 'main',
  title: 'Main',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Main dish name',
      validation: (Rule) => Rule.max(15),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Main dish',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Short Description of the Main Dish',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'timer',
      type: 'number',
      title: 'Timer on the Main dish',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ingredients',
      type: 'array',
      title: 'Ingredients of the Main dish',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'recipe',
      type: 'string',
      title: 'Recipe of the Main dish',
      validation: (Rule) => Rule.required(),
    },
  ],
}
