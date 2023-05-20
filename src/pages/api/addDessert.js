// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const data = JSON.parse(req.body);

  const mutations = {
    mutations: [
      {
        create: {
          _type: "dessert",
          name: data.name,
          image: data.image.name,
          timer: data.timer,
          description: data.description,
          ingredients: data.ingredients,
          recipe: data.recipe,
        },
      },
    ],
  };

  const apiEndpoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;

  const result = await fetch(apiEndpoint, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
    },
    body: JSON.stringify(mutations),
    method: "POST",
  });
  const json = await result.json();
  res.status(201).json({ message: "Added" });
}
