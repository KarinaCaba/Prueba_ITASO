import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    create: () => true,
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // Add more fields as needed
  ],
};

export default Users;