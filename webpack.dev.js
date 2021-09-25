const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({ 'process.env.name': JSON.stringify('Rory') }),
    new ReactRefreshWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: ['react-refresh/babel'],
        },
      },
    ],
  },
};
