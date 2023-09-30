<template>
  <div id="app">
    <h2>vuex-modules使用</h2>
    <ul>
      <li>{{$store.state.a.name}}</li>
      <li>修改后姓名:{{$store.getters.fullName}}</li>
      <li>fullname2:{{$store.getters.fullName2}}</li>
      <li>fullname3:{{$store.getters.fullName3}}</li>
      <li>{{$store.state.b.name}}</li>
    </ul>
    <p>
      <button @click="updateName">修改A模板姓名</button>
      <button @click="asyncName">异步修改</button>
      <button @click="asyncName2">异步修改2</button>
    </p>
    <h2>vuex-actions使用 </h2>
    <p>{{$store.state.info}}</p>
    <button @click="actionUser">修改姓名</button>
    <h2>App内容----vuex响应式原理 </h2>
    <h4>{{$store.state.info}}</h4>
      <button @click="editInfo">修改info信息</button>
    <h2>我是APP组件</h2>
    <h2>{{$store.state.counter}}</h2>
<!--    <button @click="$store.state.counter++">+</button>-->
<!--    <button @click="$store.state.counter&#45;&#45;">-</button>-->
        <button @click="add">+</button>
        <button @click="sub">-</button>
    <p>大于10岁：{{$store.getters.ageMore10}} 人数：{{$store.getters.ageMore10Count}}</p>
    <p>{{$store.getters.MoreAgeStu(1)}}</p>
    <button @click="student">返回指定学生</button>
    <p>{{$store.state.assignStudent}}</p>
    <button @click="multi">mutations传递多个参数</button>
    <button @click="commitStyle">另外一种返回指定学生</button>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import {INCREMENT, ONESTUDENT} from './store/mutations-type'
export default {
  name: 'App',
  data(){
    return{
      counter:0
    }
  },
  components: {
    HelloWorld
  },
  methods:{
    add(){
      this.$store.commit(INCREMENT)
    },
    sub(){
      this.$store.commit('decrement')
    },
    student(){
      //1.mutations传递单个参数
      this.$store.commit(ONESTUDENT,111)
    },
    multi()
    {
      this.$store.commit('MultiParam',{age:2,student:'小福'})
    },
    //mutations提交风格
    commitStyle()
    {
      this.$store.commit({
        type:'otherStudent',
        id:110
      })
    },
    //mutations响应式
    editInfo(){
      this.$store.commit('editSudentInfo',{name:'小福',age:200,height:0.2})
    },
    actionUser()
    {
      //第一种方法
      // this.$store.dispatch('updateUser',{name:'小福',
      //   success(){
      //     console.log('修改成功111')
      //   }
      // })
      //第二种方法（更优雅）：promise返回
      this.$store.dispatch('updateUser','小福').then(res => {
        console.log(res)
      })
    },
    updateName(){
      this.$store.commit('updateName','小福')
    },
    asyncName()
    {
      this.$store.dispatch('asyncName')
    },
    asyncName2()
    {
      this.$store.dispatch('asyncName2')
    }
  }
}
</script>

<style>

</style>
