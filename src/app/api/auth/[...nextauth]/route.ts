import { SaveDB } from "@/helper/saveDB";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const configNextAuth = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT as string,
      clientSecret: process.env.GOOGLE_SECRECT as string,
    }),
  ],
  callbacks: {
    jwt({ account, token, user, profile }) {
      if (account) {
        token.user = user;
        SaveDB(token, account);
      }
      return token;
    },
    session({ session, user, token }) {
      session.user = token.user ?? (token as any);
      return session;
    },
  },
});

export { configNextAuth as GET, configNextAuth as POST };
