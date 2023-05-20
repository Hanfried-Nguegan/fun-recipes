import { sanityClient } from "../../../sanity";
import { groq } from "next-sanity";

const mainQuery = groq`
*[_type == "main"] {
            ...,
            "imageUrl" : image.asset->url
        }
`;

export default async function handler(req, res) {
  const mainDishes = await sanityClient.fetch(mainQuery);
  res.status(200).json({ mainDishes });
}
