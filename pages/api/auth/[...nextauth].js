import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: `${process.env.AUTH_ID}`,
      clientSecret: `${process.env.AUTH_PW}`,
    }),
  ],
  secret : `qwfnio3q12ov!asd5lnv` ,
  adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 