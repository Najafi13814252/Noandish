import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "8ptr3refiw.ufs.sh"
    ]
  },
  cacheComponents: true,
  partialPrefetching: true
};

export default nextConfig;
