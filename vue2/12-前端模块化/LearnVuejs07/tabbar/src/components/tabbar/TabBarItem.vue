<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>

  <!--  <router-link :to="path" tag="div" class="tab-bar-item">-->
  <!--    <div v-if="!isActive">-->
  <!--    <slot name="item-icon"></slot>-->
  <!--    </div>-->
  <!--    <div v-else>-->
  <!--    <slot name="item-icon-active"></slot>-->
  <!--    </div>-->
  <!--    <slot name="item-text"></slot>-->
  <!--  </router-link>-->
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type:String,
      default:'#ff5777'
    }
  },
  data() {
    return {
      // isActive:false,
      // path:'/home'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      console.log(this.path)
      this.$router.replace(this.path)
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

/*.active {*/
/*  color: #ff5777;*/
/*}*/
</style>
