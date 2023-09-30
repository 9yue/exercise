<template>
<div id="tab-bar">
  <slot>
    <tab-bar-item></tab-bar-item>
  </slot>
</div>
</template>

<script>
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "TabBar",
  components:{
    TabBarItem
  }
}
</script>

<style scoped>
#tab-bar
{
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 49px;
  display: flex;
  justify-content: space-around;
  box-shadow: 0px -1px 3px #f6f6f6;

}
</style>