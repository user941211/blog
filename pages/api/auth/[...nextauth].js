import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: `${process.env.AUTH_ID}`,
      clientSecret: `${process.env.AUTH_PW}`,
    }),
  ],
  secret : `${process.env.NEXTAUTH_URL}`
};
export default NextAuth(authOptions); 