import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
      },
    ],
    unoptimized: true,
  },
  transpilePackages: ["next-mdx-remote"],
  output: "export",
};

export default nextConfig;
