import { buildConfig } from "payload/config";
import path from "path";
import Customers from "./collections/Customers";
import Users from "./collections/Users";
import News from "./collections/News";
import Media from "./collections/Media";

export default buildConfig({
  serverURL: "http://localhost:3003",
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    News,

    // Add Collections here
    Customers,
    Media,
  ],

  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },

  cors: "*",
});
