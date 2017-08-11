const config = require('./webpack.config.js')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

config.externals = {
  'react': 'React',
  'react-dom': 'ReactDOM'
}

config.devtool = 'cheap-source-map'

config.plugins.push(new UglifyJSPlugin({
  sourceMap: true,
  compressor: {
    warnings: false
  },
  comments: false
}))

module.exports = config
