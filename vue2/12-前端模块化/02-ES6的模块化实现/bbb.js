// // 1.导入{}的变量
// import {flag,add} from "./aaa.js";
// if(flag)
// {
//   console.log('bbb----'+add(11,2))
// }
//
// // 2.导入直接export的变量
// import {age,height} from "./aaa.js"
// console.log(age)
// console.log(height)
//
// //3.导入function和class
// import {mul,Person} from "./aaa.js";
// console.log(mul(100, 1));
// const p=new Person();
// p.run();
// p.eat()

//5.统一全部导入
// import * as m from "./aaa.js"
// console.log('-----导入所有----')
// console.log(m.flag);
// console.log(m.age)
// console.log(m.add(1,2))
// console.log(m.mul(5,2))
// const p=new m.Person();
// p.run();
// p.eat()

//4.export default（只能导入一个）
import addr from './aaa.js'

//调用函数，打印徐州市
// console.log(addr)

//默认函数调用
addr('333')


