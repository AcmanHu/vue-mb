import Vue from 'vue'
import App from './App.vue'
//引入公共css
import './assets/css/basic.scss'
//引入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
//引入iview
import iView from 'iview'
Vue.use(iView)
import 'iview/dist/styles/iview.css'
//引入路由
import router from './model/routes.js'
//使用路由
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
