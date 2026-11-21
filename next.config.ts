import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        hostname: "ik.imagekit.io",
        protocol: "https",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons", "motion"],
  },
};

export default nextConfig;
