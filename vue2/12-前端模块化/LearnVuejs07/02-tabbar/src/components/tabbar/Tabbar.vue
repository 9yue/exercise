<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar"
}
</script>

<style scoped>
.tabbar
{
  position: fixed;
  width: 100%;
  bottom: 0px;
  background: #f5f5f5;
  height: 49px;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.8);
}
</style>
