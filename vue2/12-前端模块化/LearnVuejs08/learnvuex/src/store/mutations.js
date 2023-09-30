import * as type from "./mutations-type";

export default  {
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
}
