<template>
<div>
  <h2>Cpn标题</h2>
  <p>cpn段落，哈哈哈哈哈</p>
  <button @click="btnClick">cpn按钮</button>
</div>
</template>

<script>
export default {
  name: "Cpn",
  data(){
    return {
      message:'cpn的信息'
    }
  },
  methods:{
    btnClick(){
      console.log('您点击的是Cpn组件的按钮')
    }
  }
}
</script>

<style scoped>

</style>