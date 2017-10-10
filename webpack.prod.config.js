const config = require('./webpack.config.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

// Reduces a bundle size in production by retrieving those dependencies externally at runtime.
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
