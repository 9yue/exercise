import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";
import moduleB from "./modules/moduleB";


//安装插件
Vue.use(Vuex)

const state={
  counter: 0,
  students: [
    {id: 110, name: '小鱼', age: 24},
    {id: 111, name: '小福气', age: 2},
    {id: 112, name: '小影', age: 19},
    {id: 113, name: '鹏鹏', age: 17},
  ],
  info: {id: 110, name: '小鱼', age: 24},
  assignStudent: ''
}

//创建对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    a:moduleA,
    b:moduleB
  }
})

//导出store
export default store
