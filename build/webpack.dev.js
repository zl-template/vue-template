const { merge }  = require('webpack-merge')
const base = require('./webpack.base.js')
module.exports = merge(base, {
  mode: 'development',
  devtool: "eval-cheap-module-source-map",
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          } ,{
            loader: 'css-loader',
          },'sass-loader', 'postcss-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 9000,
    open: true,
    hot: false
  }
})