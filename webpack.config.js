const _path = require('path')

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
        loader: 'style-loader!css-loader'
      }
    ]
  }
}

module.exports = config
