import path from "path";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Добавлено для сборки standalone

  sassOptions: {
    includePaths: [path.join(__dirname, "src/assets/styles")],
    additionalData: `@use "services.scss" as *;`,
  },

  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "lh3.googleusercontent.com",
    },
      {
        protocol: "https",
        hostname: "api.nixbuy.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
