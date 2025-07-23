import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SocialWidget from "@/components/blocks/social_widget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arpan's Portfolio",
  description: "Web, Cloud and AI Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-white dark bg-gradient-to-tr from-60% to-red-500/10`}
      >
        <SocialWidget />
        {children}
      </body>
    </html>
  );
}
