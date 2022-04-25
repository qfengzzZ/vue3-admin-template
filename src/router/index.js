import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import cookies from '@/utils/cookies'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach((to, from, next) => {
	NProgress.start()
	// 判断是否需要登录才可以进入
	if (to.matched.some(_ => _.meta.auth)) {
		// 这里依据 token 判断是否登录，可视情况修改
		const token = cookies.get('token')

		if (token && token !== 'undefined') {
			next()
		} else {
			// 没有登录的时候跳转到登录界面
			// 携带上登陆成功之后需要跳转的页面完整路径
			next({
				name: 'login',
				query: {
					redirect: to.fullPath
				}
			})
		}
	} else {
		// 不需要身份校验 直接通过
		next()
	}
})

router.afterEach(() => {
	NProgress.done()
})

export default router
