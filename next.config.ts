// import type { NextConfig } from 'next';
// import type { Configuration } from 'webpack';

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   webpack(config: Configuration) {
//     config.module?.rules?.push({
//       test: /\.svg$/,
//       issuer: /\.[jt]sx?$/,
//       use: ['@svgr/webpack'],
//     });
//     return config;
//   },
// };

// export default nextConfig;
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
            },
          },
        ],
        as: '*.js',
      },
    },
  },
};

// Wichtig: Plugin einhüllen!
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
