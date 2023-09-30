<template>
<div>
  <tab-bar>
    <tab-bar-item link=="/home">
      <img slot="icon" src="~assets/img/tabbar/home.svg">
      <img slot="icon-actvie" src="~assets/img/tabbar/home_active.svg">
      <div slot="title">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category">
      <img slot="icon" src="~assets/img/tabbar/category.svg">
      <img slot="icon-actvie" src="~assets/img/tabbar/category_active.svg">
      <div slot="title">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/cart">
      <img slot="icon" src="~assets/img/tabbar/cart.svg">
      <img slot="icon-actvie" src="~assets/img/tabbar/cart_active.svg">
      <div slot="title">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/profile">
      <img slot="icon" src="~assets/img/tabbar/profile.svg">
      <img slot="icon-actvie" src="~assets/img/tabbar/profile_active.svg">
      <div slot="title">我的</div>
    </tab-bar-item>
  </tab-bar>
</div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>