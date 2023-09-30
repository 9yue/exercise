<template>
  <div>
  <h2>{{message}}</h2>
  小鱼学习webpack！
  <button>按钮1112</button>
    <cpn></cpn>
  </div>
</template>

<script>
import Cpn from './Cpn'
export default {
  name: "App",
  data() {
    return{
      message: "webpack配置vue！"
    }
  },
  components:{
    cpn:Cpn
  }
}
</script>

<style scoped>
.title
{
  color: #5ea732;
}
</style>