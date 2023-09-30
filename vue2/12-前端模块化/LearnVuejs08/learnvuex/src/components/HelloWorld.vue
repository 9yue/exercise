<template>
  <div>
    <h2>我是HelloWorld</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>大于10岁：{{$store.getters.ageMore10}} 人数：{{$store.getters.ageMore10Count}}</h2>
    <h2>{{$store.getters.MoreAgeStu(5)}}</h2>
    <h2>指定学生：{{$store.state.assignStudent}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
