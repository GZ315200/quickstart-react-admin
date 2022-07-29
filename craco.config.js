const CracoLessPlugin = require('craco-less');
const path = require('path');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#556ee6',
              '@success-color': '#34c38f',
              '@warning-color': '#f1b44c',
              '@error-color': '#f46a6a',
              '@info-color': '#50a5f1',
              '@processing-color': '#6485ff',
              '@text-color': '#495057',
              '@border-radius-base': '6px',
              '@btn-border-radius-base': '5px',
              '@btn-border-radius-sm': '4px',
              '@font-family': 'Rubik, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica, Arial, sans-serif',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = webpackConfig.output.path = path.resolve('dist');
      return webpackConfig;
    },
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  },
  devServer: {
    hot: true,
    proxy: {
      '/admin/api/v1': {
        target: 'http://localhost:8080/',
      }
    },
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
      ],
    },
  },
};