/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // redirects: [
  //   {
  //     source: "/services/door-and-widow-repair/",
  //     destination: "/services/door-repair-services",
  //     permanent: false,
  //   },
  //   {
  //     source: "/services/door-and-window-instalation/",
  //     destination: "/services/door-and-window-installations",
  //     permanent: false,
  //   },
  //   {
  //     source: "/services/security",
  //     destination: "/services/door-and-window-installations",
  //     permanent: false,
  //   },
  //   {
  //     source: "/services/double-glazed-unit-replacement/",
  //     destination: "/services/double-glazed-unit-service",
  //     permanent: false,
  //   },
  //   {
  //     source: "/services/composite-door-replacement/",
  //     destination: "/services/door-repair-services",
  //     permanent: false,
  //   },
  // ],
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
};

module.exports = nextConfig;
