let name='小鱼'
var flag=true;

function add(num1,num2)
{
  return num1+num2
}

if(flag)
{

  console.log('小鱼第1个文件---',add(10, 20));
}

//第一种导出
export  {
  flag,add
}

//第二种导出
export var age=24;
export var height=1.61;

//第三种导出函数/类
export function mul(num1,num2){
  return num1*num2
}

export class Person{
  run(){
    console.log('在奔跑')
  }

  eat(){
    console.log('在吃饭')
  }
}
//第四种(export default )：某些情况下，一个模块包含某个功能，我们并不希望给这个功能命名，可以让导入者来命名
// const address='徐州市'
// export default address
//导出默认函数
export default function (argument){
  console.log(argument)
}