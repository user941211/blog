import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: `${process.env.AUTH_ID}`,
      clientSecret: `${process.env.AUTH_PW}`,
    }),
  ],
  secret : 'qwfnio3q1;ov@asd5lnv'
};
export default NextAuth(authOptions); 