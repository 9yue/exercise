<template>
<div>
  <h2>用户</h2>
  <p>用户内容,呵呵呵呵</p>
<!--  <p>userID:{{userId}}</p>-->
  <p>userID:{{$route.params.id}}</p>
</div>
</template>

<script>
export default {
  name: "User",
  created() {
    console.log('User created')
  },
  destroyed() {
    console.log('User destroyed');
  }
  // computed:{
  //   userId()
  //   {
  //     console.log(this.$route)
  //     return this.$route.params.id
  //   }
  // }
}
</script>

<style scoped>

</style>
