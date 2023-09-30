import Vue from 'vue'
import App from './App'
import axios  from "axios";
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

//1.axios基本使用
//axios不传参数
// axios({
//   url:'http://152.136.185.210:7878/api/hy66/home/multidata',
//   method:'get'
// }).then(res=>{
//   console.log(res)
// })

//axios.get/传参
// axios.get('http://152.136.185.210:7878/api/hy66/home/data?type=pop&page=1').then(res=>{
//   console.log(res)
// })
//
//
// axios.get('http://152.136.185.210:7878/api/hy66/home/data',{
//   //专门针对get请求拼接
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res=>{
//   console.log(res)
// })

//2.axios并发请求
// axios.all([
//   axios({
//   url:'http://152.136.185.210:7878/api/hy66/home/multidata'}),
//   axios.get('http://152.136.185.210:7878/api/hy66/home/data',{
//   params:{
//     type:'pop',
//     page:1}})
// ]).then(res=>{
//   console.log(res)
//   console.log(res[0])
//   console.log(res[1])
// })


//3.使用全局的axios和对应的配置在进行网络请求
//axios.defaults设置全局默认信息
// axios.defaults.baseURL='http://152.136.185.210:7878/api/hy66'
// axios.defaults.timeout=5000
//
// //axios展开
// axios.all([
//   axios({
//     url:'/home/multidata'}),
//   axios.get('/home/data',{
//     params:{
//       type:'pop',
//       page:1}})
// ]).then(axios.spread((res1,res2)=>{
//   console.log(res1)
//   console.log(res2)
//
// }))

//4.创建对应的axios实例
// const instance1=axios.create({
//   baseURL:'http://152.136.185.210:7878/api/hy66',
//   timeout:5000
// })
// instance1({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res)
// })
//
// instance1({
//   url:'/home/data',
//   params:{
//     type:'sell',
//     page:1
//   }
// }).then(res=>{
//   console.log(res)
// })
//
// //创建第二个axios实例,自定义这个实例timeout和baseURL,然后使用这个实例的baseURL是'http://221,123,33/api/test',timeout是1秒
// const instance2=axios.create({
//   baseURL:'http://221,123,33/api/test',
//   timeout:1000
// })
// instance2({
//   url:'/home/multidata'
// })

import {request} from "./network/request";

request({url:'/home/multidata'}).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})

// request({
//   config:{
//     url:'/home/multidata'
//   },
//   success:function (res)
//   {
//     console.log('333')
//     console.log(res)
//   },
//   failure:function (err)
//   {
//     console.log(err)
//   }
// })
// request({ url:'/home/multidata'},
// res=>{
//   console.log('成功')
//   console.log(res)
// },err=>{
//     console.log(err)
// });

