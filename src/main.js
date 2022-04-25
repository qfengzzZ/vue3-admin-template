import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 全局组件
import SvgIcon from '@/components/svg-icon'

import '@/assets/iconfonts/iconfont'
import '@/styles/index.scss'

import directive from '@/directive'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus, { locale: zhCn })
app.directive('auth', directive)
app.component('SvgIcon', SvgIcon)
app.mount('#app')
