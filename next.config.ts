import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/certificate-check-:code",
        destination: "/certificate-check/:code",
      },
    ];
  },
};

export default nextConfig;
