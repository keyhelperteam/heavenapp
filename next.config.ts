import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.GITHUB_PAGES === 'true' ? '/heavenapp' : '',
  },
};

export default nextConfig;
