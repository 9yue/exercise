<template>
  <div id="app">
    <h2>路由的使用</h2>
<!--    <router-link to="/home" >主页</router-link>-->
<!--    <router-link to="/about" >关于</router-link>-->

<!--    active-class: 当<router-link>对应的路由匹配成功时, 会自动给当前元素设置一个router-link-active的class, 设置active-class可以修改默认的名称.-->
<!--    <router-link to="/home" tag="span" replace active-class="active">主页</router-link>-->
<!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->


    <button @click="homeClick">主页</button>
    <button @click="aboutClick">关于</button>
    <h3>-----分割线----下面是新页面内容-----</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    homeClick()
    {
      // 通过代码的方式修改路由 vue-router
      // push=> history的pushState

      // this.$router.push('/home')//重复点击会报避免重复点击错误
      // this.$router.push('/home',()=>{})//不会在报重复错误

      this.$router.replace('/home',()=>{})

      console.log('跳转home')
    },
    aboutClick()
    {

      // this.$router.push('/about')//重复点击会报避免重复点击错误
      // this.$router.push('/about',()=>{})//不会在报重复错误
      this.$router.replace('/about',()=>{}  )

      console.log('跳转about')

    }
  }
}
</script>

<style>
/*router-link选中样式*/
.router-link-active
{
  color: cadetblue;
}

.active{
  color: palevioletred;
}
</style>
