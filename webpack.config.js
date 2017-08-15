const _path = require('path')

const config = {
  entry: './src/index.js',
  output: {
    path: _path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}

module.exports = config
