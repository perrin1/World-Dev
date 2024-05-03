import nextAuth, { NextAuthOptions } from "next-auth";
import prisma from "../../../lib/prisma";
import NextAuth, { getServerSession } from "next-auth/next";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const clientId = process.env.GITHUB_ID;
const clientSecret = process.env.GITHUB_SECRET;

if (!clientId || !clientSecret) {
  throw new Error("Missing  Github_ID or Github_Secret");
}

export const authConfig = {
  providers: [
    // GitHubProvider({
    //   clientId: clientId,
    //   clientSecret: clientSecret,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET!,
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return profile.email_verified && profile.email.endsWith("@gmail.com");
      }
      return true;
    },
    session({ session, user }) {
      if (!session?.user) {
        return session;
      } else {
        session.user.id = user.id;
        return session;
      }
    },
  },
} satisfies NextAuthOptions;

export default NextAuth(authConfig);

export const getCurrentUser = async () => {
  const session = await getServerSession(authConfig);
  return session?.user;
};
