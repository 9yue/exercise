<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String
  },
  data(){
    return{
      isActive:true
    }
  },
  methods:{
    itemClick(){
      console.log(this.path)
      this.$router.push(this.path)
      // this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  text-align: center;
}

.tab-bar-item img {
  width: 20px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;
}
</style>
