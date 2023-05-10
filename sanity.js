import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "gsyxnc19",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
