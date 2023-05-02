import { cake, pancakes, pizza, blueberry } from "../assets";

export const navLinks = [
  {
    id: "all recipes",
    title: "ALL RECIPES",
  },
  {
    id: "story",
    title: "STORY",
  },
  {
    id: "about us",
    title: "ABOUT US",
  },
  {
    id: "contact",
    title: "CONTACT",
  },
];

export const recipesDataRight = [
  {
    id: 1,
    image: pancakes,
    title: "Pancakes",
    timer: "30",
    description: "Pancakes with butter and eggs",
  },
  {
    id: 2,
    image: cake,
    title: "Cake",
    timer: "50",
    description: "Homemade Raspberry Cake",
  },

  {
    id: 3,
    image: pizza,
    title: "Pizza",
    timer: "40",
    description: "Homemade Pizza with chicken and peperroni",
  },
];

export const featuredDataRight = [
  {
    image: blueberry,
    title: "Blueberry Ice Cream",
    timer: "30",
    ingredients: [
      "1 cup fresh blueberries",
      "1 cup heavy cream",
      "1 cup whole milk",
      "3/4 cup granulated sugar",
      "1 teaspoon vanilla extract",
      "Pinch of salt",
    ],
  },
];
