export default {
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
}
