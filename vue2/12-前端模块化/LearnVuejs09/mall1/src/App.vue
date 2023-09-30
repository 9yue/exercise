<template>
  <div id="app">
    <nav>
    <MainTabBar></MainTabBar>
    </nav>
    <router-view/>
  </div>
</template>
<script>
import MainTabBar from "@/components/content/mainTabbar/MainTabBar";
export default {
  name: "App",
  components:{
    MainTabBar
  }
}
</script>

<style>

</style>
