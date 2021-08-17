import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element'
import'./network/request'
// 导入全局样式表
import 'assets/css/global.css'
import TreeTable from 'vue-table-with-tree-grid'

Vue.component('tree-table',TreeTable)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
