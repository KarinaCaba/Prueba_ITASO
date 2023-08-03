import { CollectionConfig } from "payload/types";

const News: CollectionConfig = {
	slug: "Noticias",
	admin: {
		useAsTitle: "titulo",
	},
	fields: [
		{
			name: "titulo",
			type: "text",
		},
		{
			name: "Noticia",
			type: "richText",
		},
		{
			name: "imagen1",
			type: "upload",
			relationTo: "media",

		},
		{
			name: "imagen2",
			type: "upload",
			relationTo: "media",

		}
	],
};

export default News;
