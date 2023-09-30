// 小鱼的文件
//使用闭包函数,解决多文件,变量同名冲突问题
var moduleA = (function () {
  var name='小鱼'
  var age=24
  var height=1.61
  var flag=true

  function add(num1,num2)
  {
    return num1+num2
  }

  if(flag)
  {

    console.log('小鱼第1个文件---',add(10, 20));
  }
  var obj={}
  obj.flag=flag;
  obj.add=add;
  console.log(obj)


  return obj;
})()



// commonjs导出写法:
//   var name='小鱼'
//   var age=24
//
//   function add(num1,num2)
//   {
//     return num1+num2
//   }
//
//   if(flag)
//   {
//     console.log('小鱼第1个文件---',add(10, 20));
//   }
//
// module.exports={
//   flag:flag,
//   add:add
// }
