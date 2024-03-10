import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "@/stores/elementcard/elementcard.ts"
import {RunButton, CSManager} from '@/services/communication/Register'

CSManager.get_instance().connect()

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(ElementPlus);
// app.config.globalProperties.$echarts = echarts

app.mount('#app')


