var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var appPath = path.join(__dirname, 'src');


module.exports = {
  resolve: {
    root: appPath
  },
  entry: {
    bundle: 'main.js'
  },
  output: {
    path: './dist',
    filename: '[name].js'
  },
  devServer: {
    host: 'localhost',
    port: 31337
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(appPath, 'index.html')
    })
  ]
}
