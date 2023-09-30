export default {
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
