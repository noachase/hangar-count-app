const path = require('path');
const WebpackBar = require('webpackbar');

module.exports = {
  entry: {
    main: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: '[name].js',
    publicPath: '/dist/',
  },
  devServer: {
    overlay: true,
    open: true,
    port: 8085,
    hot: true,
    writeToDisk: false,
  },
  plugins: [
    new WebpackBar({ color: 'tomato' }),
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
          },
        },
        exclude: '/node_modules',
      },
    ],
  },
};
