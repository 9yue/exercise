<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="../../assets/img/tabbar/home.svg">
      <img slot="item-icon-active" src="../../assets/img/tabbar/home_active.svg">
      <div slot="item-text">主页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="../../assets/img/tabbar/category.svg">
      <img slot="item-icon-active" src="../../assets/img/tabbar/category_active.svg">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item>
      <img slot="item-icon" src="../../assets/img/tabbar/shopcart.svg">
      <img slot="item-icon-active" src="../../assets/img/tabbar/shopcart_active.svg">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item>
      <img slot="item-icon" src="../../assets/img/tabbar/profile.svg">
      <img slot="item-icon-active" src="../../assets/img/tabbar/profile_active.svg">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import tabBar from '../tabbar/Tabbar'
import tabBarItem from '../tabbar/TabBarItem'
export default {
  name: "MainTabBar",
  components: {
    tabBar,
    tabBarItem
  }

}
</script>

<style scoped>

</style>
