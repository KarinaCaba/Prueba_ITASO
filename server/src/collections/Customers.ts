import { CollectionConfig } from "payload/types";
import { selfOrAdmin } from "../access/selfOrAdmin";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Customers: CollectionConfig = {
	slug: "customers",
	auth: true,
	access: {
		create: () => true,
		read: selfOrAdmin,
		update: selfOrAdmin,
		delete: ({ req: { user } }) => {
			return user?.collections === "users";
		},
	},
	admin: {
		useAsTitle: "email",
	},
	fields: [
		{
			name: "name",
			type: "text",
		},
		{
			name: "lastname",
			type: "text",
		},
		{
			name: "Escuela",
			type: "text",
		},
	],
};

export default Customers;
