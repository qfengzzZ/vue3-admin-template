import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import SvgIcon from '@/components/svg-icon'

import '@/assets/iconfonts/iconfont'
import '@/styles/index.scss'

const app = createApp(App)

app.use(store).use(router).use(ElementPlus, { locale: zhCn }).component('SvgIcon', SvgIcon).mount('#app')
