const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')
const uglifyJsPlugin=require('uglifyjs-webpack-plugin')

module.exports = webpackMerge(baseConfig,{
  plugins:[
    new uglifyJsPlugin()
  ]
})