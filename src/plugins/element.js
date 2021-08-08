import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

// 导入弹框提示,需要挂载到vue原型上
Vue.prototype.$message = Message

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
