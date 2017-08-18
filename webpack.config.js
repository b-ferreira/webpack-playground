const webpack = require('webpack')
const _path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const VENDOR_LIBRARIES = [
  'faker', 'lodash', 'react', 'react-dom', 'react-input-range', 'react-redux',
  'react-router', 'redux', 'redux-form', 'redux-thunk'
]

const config = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBRARIES
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: _path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [
          _path.resolve(__dirname, 'dist'),
          _path.resolve(__dirname, 'node_modules')
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/styles.css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}

module.exports = config
