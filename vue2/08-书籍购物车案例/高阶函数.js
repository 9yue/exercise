//高阶函数:filter/map/reduce
let nums = [10,20,80,40,111,222,444]
//1.filter过滤函数：实现取出所有小于100的数字
// filter函数有一个要求,必须返回一个boolean值
// true:当返回true时,函数内部会把这次回调的n加入到新的数组里
// false:当返回false时,函数会自动过滤掉这次的n
// let new1Nums=nums.filter(function (n){
//   return n<100
// })
// console.log(new1Nums);
//
// //2.map函数：实现将所有小于100的数字进行转化: 全部*2
// // 对数组内容数据统一发生变化可以使用map函数
// let new2Nums=new1Nums.map(function (n){
//   return n*2
// })
// console.log(new2Nums);
//
// // 3.reduce函数:将所有new2Nums数字相加,得到最终的结果
// //reduce对数组中所有内容进行汇总(全部相加/全部相加...)
// let total=new2Nums.reduce(function (preValue,n){
//   // return preValue+n
//   return n;
// },0)
// console.log(total);


//实现以上三个需求:对数组进行100以下的数据*2后的结果
let total=nums.filter(function (n){
  return n<100
}).map(function (n){
  return n*2
}).reduce(function (preValue,n){
  return preValue+n
},0)

console.log('最终结果:'+total)


// // 1.需求: 取出所有小于100的数字
// let nums = [10,20,80,40,111,222,444]
// let newNums=[]
// for (let item of nums)
// {
//   if(item<100)
//   {
//     newNums.push(item)
//   }
// }
// console.log(newNums);
// // 2.需求:将所有小于100的数字进行转化: 全部*2
// let new2Nums=[]
// for (let item of newNums)
// {
//   new2Nums.push(item*2)
// }
// console.log(new2Nums);
//
// // 3.需求:将所有new2Nums数字相加,得到最终的结果
// let total=0
// for (let item of new2Nums)
// {
//   total+=item
// }
// console.log(total);
