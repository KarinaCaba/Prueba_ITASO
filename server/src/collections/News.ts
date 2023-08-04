import { CollectionConfig } from "payload/types";

const News: CollectionConfig = {
  slug: "News",
  access: { read: () => true },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "desc",
      type: "richText",
    },
    {
      name: "img",
      type: "upload",
      relationTo: "media",
    },
  ],
};

export default News;
