<template>
<div>
  <h2>档案</h2>
  <p>姓名：{{$route.query.name}}</p>
  <p>年龄：{{$route.query.age}}</p>
</div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>

</style>
