import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Configure SVGR
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true, // Makes SVG more easily sizeable
            typescript: true, // Generates TypeScript props
          },
        },
      ],
    });

    return config;
  },
};

export default withNextIntl(nextConfig);
