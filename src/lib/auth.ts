import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import * as bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 Days
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter both email and password");
        }

        const inputEmail = credentials.email.trim().toLowerCase();
        const inputPassword = credentials.password.trim();

        const envAdminEmail = (process.env.ADMIN_EMAIL || "anilarangi6@gmail.com").trim().toLowerCase();
        const envAdminPassword = process.env.ADMIN_PASSWORD?.trim();


        // 1. If matches .env ADMIN credentials directly
        if (inputEmail === envAdminEmail && envAdminPassword && inputPassword === envAdminPassword) {
          // Ensure Super Admin role exists in DB
          let superAdminRole = await prisma.role.findFirst({
            where: { name: "Super Admin" },
          });

          if (!superAdminRole) {
            superAdminRole = await prisma.role.create({
              data: { name: "Super Admin" },
            });
          }

          // Hash password and upsert admin user in DB
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(envAdminPassword, salt);

          const adminUser = await prisma.user.upsert({
            where: { email: envAdminEmail },
            update: {
              password: hashedPassword,
              roleId: superAdminRole.id,
            },
            create: {
              name: "Super Admin",
              email: envAdminEmail,
              password: hashedPassword,
              roleId: superAdminRole.id,
            },
            include: { role: true },
          });

          return {
            id: adminUser.id,
            name: adminUser.name || "Administrator",
            email: adminUser.email,
            image: adminUser.image,
            role: adminUser.role.name,
          };
        }

        // 2. Otherwise verify against DB user
        const user = await prisma.user.findUnique({
          where: { email: inputEmail },
          include: { role: true },
        });

        if (!user || !user.password) {
          throw new Error("Invalid email or password");
        }

        const isValid = await bcrypt.compare(inputPassword, user.password);
        if (!isValid) {
          throw new Error("Invalid email or password");
        }

        return {
          id: user.id,
          name: user.name || "Administrator",
          email: user.email,
          image: user.image,
          role: user.role?.name || "Admin",
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/admin/login",
    signOut: "/admin/login",
    error: "/admin/login",
  },
  secret: process.env.NEXTAUTH_SECRET || "xpertbite-secret-key-2026-prod-secure-32bytes",
};
