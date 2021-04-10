const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const vueLoaderPlugin  = require('vue-loader/lib/plugin')
const loader = require('sass-loader')

module.exports = {
  entry: {
    main: resolve('../src/main.js')
  },
  output: {
    path: resolve('../dist'),
    filename: '[name][contenthash:5].js'
  },
  resolve: {
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: resolve('../src'),
        use: ['babel-loader']
      },
      {
        test: /\.vue$/,
        include: resolve('../src'),
        exclude: /node_modules/,
        use: ['vue-loader']
      },
      {
        test: /\.(png|svg|jpeg|jpg)\??.*$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'img/[name].[ext]'
            
          }
        }]
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('../public/index.html')
    }),
    new CleanWebpackPlugin({}),
    new vueLoaderPlugin(),
    // 抽离css文件
    new MiniCssExtractPlugin()
  ]
}