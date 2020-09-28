import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import BaiduMap from 'vue-baidu-map'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
Vue.use(BaiduMap,{ ak: 'wy8rD1fnMnzgYpmaqMuXhL8ANaLh6Afn' })
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
