"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { createAuthService } from "@saas-ui/supabase";

const inter = Inter({ subsets: ["latin"] });

import type { Metadata } from "next";
import {
  AuthProvider,
  useAuth,
  useCurrentUser,
  useLogin,
  useSignUp,
  useOtp,
} from "@saas-ui/auth";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

//@ts-ignore
const metadata: Metadata = {
  title: "Auth",
  description: "Generated by create next app",
};
const supabase = createClientComponentClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider {...createAuthService(supabase)}>{children}</AuthProvider>
      </body>
    </html>
  );
}
