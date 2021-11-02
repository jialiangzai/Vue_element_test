import Vue from 'vue'
import App from './App.vue'
// import App from './components/layouttest01.vue'
// import App from './components/table02.vue'
// import App from './components/page.vue'
// import App from './components/form.vue'
// import App from './components/tree.vue'
// import App from './components/dialog.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 必须要注册,别忘记
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
