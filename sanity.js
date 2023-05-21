import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

const sanityClient = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
});

const builder = ImageUrlBuilder(sanityClient);
export const urlFor = (source) => builder.image(source);

export default sanityClient;
