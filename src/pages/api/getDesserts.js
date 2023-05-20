// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sanityClient } from "../../../sanity";
import { groq } from "next-sanity";

const dessertQuery = groq`
 *[_type == "dessert"] {
            ...,
            "imageUrl" : image.asset->url
        }
`;

export default async function handler(req, res) {
  const desserts = await sanityClient.fetch(dessertQuery);

  res.status(200).json({ desserts });
}
