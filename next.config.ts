import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "strapi-cms-production-f73b.up.railway.app",
      "via.placeholder.com",
      "randomuser.me",
      "snip-v2-front.vercel.app",
      "cdn-icons-png.flaticon.com"
    ]
  },
  webpack(config) {
    // Configure SVGR
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true, // Makes SVG more easily sizeable
            typescript: true
          }
        }
      ]
    });

    return config;
  }
};

export default withNextIntl(nextConfig);
