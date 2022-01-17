import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import echarts from 'echarts'
import { Vue } from 'vue-demi'

createApp(App).use(router).use(ElementPlus).mount('#app')
Vue.prototype.$echarts=echarts