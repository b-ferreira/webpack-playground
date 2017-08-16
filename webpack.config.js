const _path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    path: _path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
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
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/styles.css')
  ]
}

module.exports = config
