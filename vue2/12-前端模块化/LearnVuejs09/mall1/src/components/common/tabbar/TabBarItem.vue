<template>
<div>
  <div class="tab-bar-item" @click="itemClick">
    <div class="item-icon" v-if="isActive"><slot name="icon"></slot></div>
    <div class="item-icon" v-else><slot name="icon-actvie"></slot></div>
    <div class="item-text"><slot name="title"></slot></div>
  </div>
</div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    linK:{
      type:String,
      default:'/home'
    }
  },
  data(){
    return{
      isActive:true
    }
  },
  methods:{
    itemClick(event){
      console.log(event)
      // console.log(this.linK)
    }
  }
}
</script>

<style scoped>

.item-icon img{
  width: 24px;
  height: 24px;
  margin-top: 5px;
  vertical-align: middle;
}
.item-text{
  font-size: 12px;
  margin-top: 3px;
}

</style>