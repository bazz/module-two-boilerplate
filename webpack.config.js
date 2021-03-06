const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appPath = path.join(__dirname, 'src');


module.exports = {
  resolve: {
    root: appPath,
  },
  entry: {
    bundle: 'main.js',
  },
  output: {
    path: './dist',
    filename: '[name].js',
  },
  devServer: {
    host: 'localhost',
    port: 31337,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader', 'eslint-loader'],
        // exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.(png|jpg|gif|ttf|eot|svg|woff|woff2)$/,
        loader: 'file',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(appPath, 'index.html'),
    }),
  ],
};
