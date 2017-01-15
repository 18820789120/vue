// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import List from './components/List'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import '../dist/css/index_common.css'
import '../dist/css/swipe.css'
// import '../dist/css/layout.css'
// import '../dist/css/new_index.css'
import '../dist/css/index.css'
//注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)


//路由map
const routes = [{
  path : '/',
  component : List
},{
  path : '/list',
  component : List
}];

const router = new VueRouter({
  routes
});
/**
 * 创建和挂载根实例。
 * 记得要通过 router 配置参数注入路由，
 * 从而让整个应用都有路由功能
 */
const vm = new Vue({
  el: '#app',
  router,
  ...App,
})
