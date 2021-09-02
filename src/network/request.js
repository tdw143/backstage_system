import Vue from 'vue'
import axios from 'axios'

// 导入 NProgress 包对应的 js 和 css
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.prototype.$http = axios
// axios.defaults.baseURL = 'http://timemeetyou.com:8889/api/private/v1/'
axios.defaults.baseURL = 'https://lianghj.top:8888/api/private/v1/'

// 在请求拦截中展示进度条 NProgress.start()
axios.interceptors.request.use(config => {
  // console.log(config);
  NProgress.start()
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})
