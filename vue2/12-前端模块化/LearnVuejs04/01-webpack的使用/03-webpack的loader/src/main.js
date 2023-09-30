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
