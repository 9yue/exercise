//配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'


//1.通过Vue.use(插件)
Vue.use(VueRouter)

//2.创建VueRouter对象
import Home from '../components/Home'
import About from '../components/About'
const routes =[
  {
    path: '',
    // redirect重定向
    redirect: '/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/about',
    component:About
  }
]
const router=new VueRouter({
  //配置路由和组件之间的关系
  routes,
  mode:'history',
  linkActiveClass:'active'
})

// 3.导除router对象导出
export default router
