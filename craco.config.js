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
              '@primary-color': '#1B9AEE',
              '@success-color': '#15AD31',
              '@processing-color': '#1B9AEE',
              '@error-color': '#E62412',
              '@highlight-color': '#E62412',
              '@warning-color': '#FA8C15',
              '@text-color': '#212529',
              '@text-color-secondary': '#495057',
              '@heading-color': '#212529',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    //修改打包文件夹
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = webpackConfig.output.path = path.resolve('dist');
      return webpackConfig;
    }
  },
  //设置dev环境 proxy
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