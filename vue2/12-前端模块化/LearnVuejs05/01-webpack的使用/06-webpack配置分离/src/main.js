//使用commonjs的模块化规范
const {add,mul}=require('./js/mathUtils')
console.log(add(10, 20));
console.log(mul(10, 20));

//es6模块化
import {name,age} from './js/info'
console.log(name)
console.log(age)
//3.依赖css文件
require('./css/normal.css')

//4.依赖less文件
require('./css/special.less')

document.writeln('你好，小鱼')
document.writeln('测试233')

//5.使用vue开发
import Vue from 'vue'
import App from './vue/App.vue'


const app = new Vue({
  el: '#app',
  template:'<App/>',
  components:{
    App
  }
})