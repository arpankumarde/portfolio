import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SocialWidget from "@/components/blocks/social_widget";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import seo, { jsonLd } from "@/data/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = seo;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          id="ldjson"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body
        className={`${inter.className} text-white dark bg-gradient-to-tr from-60% to-red-500/10`}
      >
        <Navbar />
        <SocialWidget />
        {children}
        <Footer />
      </body>
    </html>
  );
}
