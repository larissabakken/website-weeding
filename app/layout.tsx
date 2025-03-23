import type React from "react";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

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
      <body
        className={`${poppins.variable} font-poppins max-w-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
