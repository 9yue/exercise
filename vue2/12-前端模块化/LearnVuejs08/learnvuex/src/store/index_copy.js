import Vue from 'vue'
import Vuex from 'vuex'
import * as type from './mutations-type'
import {ONESTUDENT} from "./mutations-type";

//安装插件
Vue.use(Vuex)

//创建ModuleA对象
const ModuleA={
  state:{
    name:'我是模板A'
  },
  mutations:{
    updateName(state,name)
    {
      console.log(state);
      state.name=name
    }
  },
  actions:{
    asyncName(context){
      console.log(context)
      setTimeout(()=>{
        context.commit('updateName','测试')
        context.rootState.info.name='测试'
      },1000)
    },
    //context解构写法
    asyncName2({state,getters,rootState})
    {
      state.name='测试'
      rootState.info.name=state.name
      return getters.fullName
    }
  },
  getters:{
    fullName(state) {
      return state.name +'aaa';
    },
    fullName2(state,getters) {
      return getters.fullName +'222';
    },
    fullName3(state,getters,rootState) {
      return getters.fullName2 +rootState.counter;
    }
  }
}
//创建ModuleB对象
const ModuleB={
  state:{
    name:'我是模板B'
  },
  mutations:{
  },
  actions:{},
  getters:{}
}


//创建对象
const store = new Vuex.Store({
  state: {
    counter: 0,
    students: [
      {id: 110, name: '小鱼', age: 24},
      {id: 111, name: '小福气', age: 2},
      {id: 112, name: '小影', age: 19},
      {id: 113, name: '鹏鹏', age: 17},
    ],
    info: {id: 110, name: '小鱼', age: 24},
    assignStudent: ''
  },
  getters: {
    ageMore10(state) {
      return state.students.filter(student => student.age > 10)
    },
    ageMore10Count(state, getter) {
      return getter.ageMore10.length
    },
    MoreAgeStu(state) {
      //getters默认不能传入参数，那么只能getters本身返回另外一个函数
      // return function (age){
      //  return state.students.filter(s=>s.age>=age)
      // }
      return age => {
        return state.students.filter(s => s.age >= age)
      }
    }
  },
  mutations: {
    [type.INCREMENT](state) {
      console.log('++++')
      state.counter++
    },
    decrement(state) {
      console.log('---')
      state.counter--
    },
    //1.mutations接收单个参数
    [type.ONESTUDENT](state, id) {
      console.log(id);
      state.assignStudent = state.students.filter(s => s.id === id)
    },
    //2.mutations接收多个参数
    MultiParam(state, payload) {
      console.log(payload);
      state.assignStudent = payload.student + payload.age + '岁'
    },
    //另外一种提交风格接收
    otherStudent(state, payload) {
      console.log(payload)
      state.assignStudent = state.students.filter(s => s.id === payload.id)
    },
    //mutations响应式
    editSudentInfo(state, payload) {
      console.log(payload);
      state.info.name = payload.name
      state.info.age = payload.age

      //有些版本中无法直接像没有定义的变量赋值，需要借助Vue.set()
      state.info.height = payload.height

      //  删除变量里的属性,如delete未生效，请使用Vue.delete
      delete state.info.age;
    },
    updateInfo(state, name) {
      state.info.name = name;
      //错误代码：这里不能进行异步操作
      // setTimeout(()=>{
      //   state.info.name=name;
      // },1000)
    }
  },
  actions: {
    // context:上下文（这里指的store）
    updateUser(context, payload) {
      //1.payload里传过来函数
      //   setTimeout(() => {
      //     //修改state唯一的途径：通过mutations
      //     context.commit('updateInfo', payload.name)
      //     payload.success()
      //   }, 1000)

      // 2.使用Promise(更优雅)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          //修改state唯一的途径：通过mutations
          context.commit('updateInfo', payload)
          resolve('修改成功22')
        }, 1000)
      })


    }
  },
  modules:{
    a:ModuleA,
    b:ModuleB
  }
})

//导出store
export default store
