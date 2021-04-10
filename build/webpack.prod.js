const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const base = require('./webpack.base.js')
const { merge }  = require('webpack-merge')
module.exports = merge(base, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCssAssetsPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          {
            loader: loader: MiniCssExtractPlugin.loader,
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
            loader: loader: MiniCssExtractPlugin.loader,
          } ,{
            loader: 'css-loader',
          },'sass-loader', 'postcss-loader'
        ]
      },
    ]
  }
  splitChunks:{

  }
})