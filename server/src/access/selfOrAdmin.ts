import { Access } from "payload/config";

export const selfOrAdmin: Access = ({ req: { user } }) => {
  if (user?.collections === "users"){
    return true;
  }
  return {
    id:{
      equals: user?.id,
    }
  }
} 