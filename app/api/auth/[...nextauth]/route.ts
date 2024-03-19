import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/config/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google";
const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      secret: process.env.NEXTAUTH_SECRET as string,
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "username here",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials) {
        try {
          console.log("credentials", credentials);
          const user = await prisma.user.findFirst({
            where: {
              email: credentials?.username,
            },
          });
          if (!user) {
            return null;
          }

          if (credentials?.password) {
            const passwordMatch = bcrypt.compare(
              credentials?.password,
              user.password
            );
            if (!passwordMatch) {
              return null;
            }
          }

          if (user) {
            return user;
          }
          return null;
        } catch (error) {}
      },
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    Google({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  // pages: {
  //   signIn: "/auth/login",
  //   register: "/auth/regitser",
  // },

  session: { strategy: "jwt", maxAge: 1 * 24 * 60 * 60 },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions as any);

export { handler as GET, handler as POST };
