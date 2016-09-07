'use strict';

const ExtractText = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const DashboardPlugin = require('webpack-dashboard/plugin');

let pluginsArray = [
  new ExtractText('bundle.css'),
  new DashboardPlugin(),
];

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    path: 'build',
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  plugins: pluginsArray,
  postcss: function(){
    return [autoprefixer];
  },
  sassLoader: {
    includePaths: `${__dirname}/app/scss/main`,
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', 'css!postcss!sass!'),
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'html',
        exclude: '/node_modules',
      },
      {
        test: /\.(jpg|jpgeg|gif)$/,
        loader: 'file?name=img/[hash]-[name].[ext]',
      },
      {
        test: /\.(woff|svg|eot|ttf).*/,
        loader: 'url?limit=10000&name=font/[name].[ext]',
      },
    ],
  },
};
