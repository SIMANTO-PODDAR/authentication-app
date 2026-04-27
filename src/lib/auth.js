import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.AUTH_URI);
const db = client.db('authentication-app2');

export const auth = betterAuth({
  database: mongodbAdapter(db, {

    client
  }),

  emailAndPassword: {
    enabled: true,
  },
  
});