import axios from "axios";


export function request(config){
  // 1.创建axioo实例
    const instance=axios.create({
      baseURL:'http://152.136.185.210:7878/api/hy66',
      timeout:5000
    })
  //2.axios拦截器
  //2.1请求拦截
  instance.interceptors.request.use(config=>{
    console.log('来到request拦截success中')
    //1.比如config里面的信息不符合服务器的要求(比如配置特殊的header或者多配置一些信息)

    //2.当发送网络请求时,在页面中添加一个loading组件,作为动画

    //3.某些网络请求(比如登录token),必须携带特殊信息
    return config
  },err=>{
    console.log('来到request拦截failure中')
  });


  //2.2响应拦截
  instance.interceptors.response.use(res=>{
    console.log(res)
    return res.data
  },err=>{
    console.log(err)
  });
    //3.发送真正的网络请求
    return instance(config)
}


// export function request(config){
//   return new  Promise((resolve,reject)=>{
//     const instance=axios.create({
//       baseURL:'http://152.136.185.210:7878/api/hy66',
//       timeout:5000
//     })
//     instance(config).then(res=>{
//       resolve(res)
//     },err=>{
//      reject(err)
//     })
//   })
// }


// export function request(baseConfig){
//   const instance=axios.create({
//     baseURL:'http://152.136.185.210:7878/api/hy66',
//     timeout:5000
//   })
//   instance(baseConfig.config).then(res=>{
//     baseConfig.success(res)
//   },err=>{
//     baseConfig.failure(err)
//   })
// }

// export function request(config,success,failure){
//   const instance=axios.create({
//     baseURL:'http://152.136.185.210:7878/api/hy66',
//     timeout:5000
//   })
//   instance(config).then(res=>{
//     success(res)
//   },err=>{
//     failure(err)
//   })
// }
