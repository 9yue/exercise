const path = require('path') //path是node包里面的


module.exports ={
  //入口：可以是字符串/数组/对象，我们这里入口只有一个，所以用字符串即可
  entry:'./src/main.js',
  //出口：通常包含两个重要属性：path,filename
  output:{
    path: path.resolve(__dirname,'dist'),//注意：path通常是一个绝对路径
    filename:'bundle.js'
  }
}