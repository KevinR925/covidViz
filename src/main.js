// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import * as echarts from 'echarts'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;

axios.defaults.baseURL = 'http://127.0.0.1:8888/api/'
Vue.prototype.$http = axios


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

