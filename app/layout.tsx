import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import "./globals.css";
import MenuNav from "@/components/MenuNav";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Edith & Christian's bryllup",
  description: "Bli med på bryllupsfeiringen til Edith og Christian",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-screen overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
