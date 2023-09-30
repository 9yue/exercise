import Vue from "vue"
import VueRouter from "vue-router"

//1.使用插件
Vue.use(VueRouter)


//定义路由
const Home=import('@/views/home/Home')
const Category=import('@/views/category/Category')
const Cart=import('@/views/cart/Cart')
const Profile =import('@/views/profile/Profile')
const routes=[
  {
  path:'/home',
  components:Home
  },
  {
    path:'/category',
    components:Category
  },
  {
    path:'/cart',
    components:Cart
  },
  {
    path:'/profile',
    components:Profile
  }
]
//3.初始化router实例
const router = new VueRouter({
  routes
})

//4.导出router实例
export default  router