export default  {
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
}
