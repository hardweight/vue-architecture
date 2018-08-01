const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',
  entry: [
    path.resolve(__dirname, './src/main.js')
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'py-hub.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.styl', '.svg', '.woff2'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader'
      },
      {
        test: /\.styl(us)$/,
        exclude: /node_modules/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|gif|svg|woff2)$/,
        exclude: /node_modules/,
        use: 'url-loader'
      }
    ]
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, './dist'),
    port: 8081
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv()
  ]
}
