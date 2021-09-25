const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// This is needed for webpack to compile JavaScript.
const babelLoaderConfiguration = {
  test: /\.(ts|js)x?$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(__dirname, 'src/index.jsx'),
    path.resolve(__dirname, 'src'),
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
    },
  },
};

const cssLoaderConfiguration = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

// This is needed for webpack to import static images in JavaScript files.
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg|ttf)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
      esModule: false,
    },
  },
};

const gqlRule = {
  test: /\.(graphql|gql)$/,
  use: 'raw-loader',
};

module.exports = {
  // mode: process.env.NODE_ENV || 'development',

  entry: [
    // load any web API polyfills
    // path.resolve(appDirectory, 'polyfills-web.js'),
    // your web-specific entry file
    path.resolve(__dirname, 'src/index.tsx'),
  ],

  // configures where the build ends up
  output: {
    filename: 'bundle.web.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  // ...the rest of your config

  module: {
    rules: [
      babelLoaderConfiguration,
      cssLoaderConfiguration,
      imageLoaderConfiguration,
      gqlRule,
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      favicon: path.resolve(__dirname, 'src/favicon-32x32.png'),
    }),
  ],

  resolve: {
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: [
      '.web.js',
      '.web.ts',
      '.ts',
      '.web.tsx',
      '.tsx',
      '.js',
      '.json',
    ],
  },

  devtool: 'source-map',

  devServer: {
    host: '0.0.0.0',
    open: true,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
};
