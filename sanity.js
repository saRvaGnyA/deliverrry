import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
// import { SANITY_PROJECT_ID, SANITY_DATA_SET } from "@env";

const client = sanityClient({
  projectId: "abdsqnsk",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);

// helper function that pulls images from URLs
export const urlFor = (source) => builder.image(source);

// also add exception to sanity localhost CORS
// sanity cors add http://localhost:3000
// sanity cors add http://localhost:19000
// or do it with the API tab on Sanity Studio

export default client;
