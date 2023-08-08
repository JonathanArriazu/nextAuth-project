import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [],
  pages : {
    signIn: '/signin',
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}