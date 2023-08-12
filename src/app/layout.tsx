import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";

import { ComponentContext } from "@/DevContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Form with next",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ComponentContext>{children}</ComponentContext>
      </body>
    </html>
  );
}
