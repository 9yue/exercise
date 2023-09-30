// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  //使用render函数
  // render: function (h)
  // {
  //   return h(App)
  // }
  //h=>h(App),h其实代表reder内部函数：CreatElement
  render: function (createElement)
  {
    //1.使用方式一
    // return createElement('标签','相关数据对象（可不传）',['内容数组'])
    //1.1 render函数基本使用
    // return createElement('h2',{class:'title',style:'color:red;'},['render函数测试'])
    //1.2 render函数嵌套
    // return createElement('div',['这里是div',createElement('h2',['这里是嵌套'])])

    //2.使用方式二:render函数传入组件
    return createElement(App)
  }
})
