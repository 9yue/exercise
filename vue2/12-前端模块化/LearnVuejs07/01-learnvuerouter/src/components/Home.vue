<template>
<div>
  <h2>我是首页</h2>
  <p>首页的内容,呵呵呵呵</p>

  <router-link to="/home/news" >新闻</router-link>
  <router-link to="/home/message">信息</router-link>
  <router-view></router-view>

  <h2>实现新闻和信息切换时缓存思路：</h2>
  <ul>
    <li>1.关闭路由子组件的默认展示路径,在vue实例内data中定义path存放路由地址</li>
    <li>2.通过<span style="color: red">activated（）</span>生命周期函数，页面每次激活时，执行路由跳转到path变量里指定的页面
      <p style="color: red">注意：activated（）和deactivated（）:只有该组件被保持了状态，使用keep-alive时，才有效</p>
    </li>
    <li>3.通过beforeRouteLeave组件内路由函数，获取当前路由地址，并保存到path变量里</li>
    <li>4.下一次页面被激活时，会自动调用activated（）函数，activated（）函数里执行路由跳转，此时path已经是上次离开时缓存下来的路径</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      path:'/home/news'
    }
  },
  created() {
    console.log('home created')
  },
  destroyed() {
    console.log('home destroyed');
  },
  activated() {
    console.log('activated')
  //  页面活跃函数
  //   this.$router.push(this.path)
  },
  deactivated() {
  //  页面不活跃函数
    console.log('deactivated');
  },
  // beforeRouteLeave(to,from,next){
  //   // 在导航离开渲染该组件的对应路由时调用
  //   console.log('----beforeRouteLeave---')
  //   console.log(this.$route)
  //   this.path=this.$route.path
  //   next()
  // }
}
</script>

<style scoped>

</style>
