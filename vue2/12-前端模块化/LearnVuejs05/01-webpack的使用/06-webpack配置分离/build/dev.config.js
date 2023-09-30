const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
  devServer:{
    //服务的文件家
    contentBase:'./dist',
    //是否实时监听
    inline:true
  }
})