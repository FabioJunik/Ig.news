// import { query as q} from "faunadb";
import { query as q} from "faunadb";

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { fauna } from "../../../services/fauna";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    }),
  ],
  callbacks: {
    async signIn({user, account, profile , credentials }) {
      const {email} = user
      
      await fauna.query(
        q.Create(
          q.Collection('users'),
          {
            data: {
              email
            }
          }
      ))

      return true
    },
  }
})