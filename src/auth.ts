import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import prisma from "./lib/prisma";

const GOOGLE_CLIENT_ID = process.env.AUTH_GOOGLE_ID!;
const GOOGLE_CLIENT_SECRET = process.env.AUTH_GOOGLE_SECRET!;

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    Google({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ profile }) {
      if (!profile?.email) {
        throw new Error("No Profile");
      }

      const generatedUsername =
        profile.email.split("@")[0] + Math.floor(Math.random() * 1000);

      await prisma.user.upsert({
        where: {
          email: profile.email,
        },

        create: {
          email: profile.email,
          name: profile.name,
          username: generatedUsername,
        },

        update: {
          name: profile.name,
        },
      });

      return true;
    },

    async jwt({ token }) {
      if (!token.email) return token;

      const dbUser = await prisma.user.findUnique({
        where: {
          email: token.email,
        },
      });

      if (!dbUser) return token;

      token.id = dbUser.id;
      token.username = dbUser.username;

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.username = token.username as string;
      }

      return session;
    },
  },
});
