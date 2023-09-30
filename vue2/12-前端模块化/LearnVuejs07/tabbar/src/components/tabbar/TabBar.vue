<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
#tab-bar
{
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-around;

  width: 100%;
  height: 49px;
  font-size: 14px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.8);
  background: #f5f5f5;

}
</style>
