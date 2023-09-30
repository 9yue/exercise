//配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'


//1.通过Vue.use(插件)
Vue.use(VueRouter)

//2.创建VueRouter对象
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const News = () => import('../components/News')
const Message = () => import('../components/Message')
const Profile = () => import('../components/Profile')

const routes = [
  {
    path: '',
    // redirect重定向
    redirect: '/home'
  },
  {
    name:'首页',
    path: '/home',
    component: Home,
    meta:{
      title:'首页'
    },//老师用的meta获取标题
    children: [
      // {
      //   path: '',
      //   redirect:'news'
      // },
      {
        path: 'news',
        component: News,
      },
      {
        path: 'message',
        component: Message,
      }
    ]
  },
  {
    name:'关于',
    path: '/about',
    component: About,
    meta:{
      title:'关于'
    },//老师用的meta获取标题
  },
  {
    name:'用户',
    path: '/user/:id',
    component: User
  },
  {
    name:'档案',
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  //配置路由和组件之间的关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

//全局守卫：前置守卫（guard）
router.beforeEach((to,from,next)=>{
  // console.log(to);
  //1.标题修改：通过meta元数据取出来
  // window.document.title=to.matched[0].meta.title
  //2.标题修改：通过name元素取出来
  window.document.title=to.matched[0].name
  next()
})

//全局守卫：后置钩子（hook）
router.afterEach((to,from)=>{
  // console.log('-----');
})


// 3.导除router对象导出
export default router
