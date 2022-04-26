import { getSimpleRoute, resetTabsList } from '@/utils'
export default {
	namespaced: true,
	state: {
		keepAlive: [],
		tabsList: [
			// 默认展示主页tab
			{
				fullPath: '/dashboard',
				path: '/dashboard',
				name: 'dashboard',
				meta: {
					title: '主控台',
					affix: true
				}
			}
		]
	},
	mutations: {
		setKeepAlive(state, keepAlive) {
			state.keepAlive = keepAlive
		},
		// 添加tab
		addTab(state, route) {
			const _routeObj = getSimpleRoute(route)
			let isExist = state.tabsList.some(item => item.fullPath === _routeObj.fullPath)
			if (!isExist) {
				state.tabsList.push(_routeObj)
			}
		},
		// 关闭当前tab
		closeCurrentTab(state, route) {
			const $index = state.tabsList.findIndex(item => item.fullPath === route.fullPath)
			if ($index > -1) {
				state.tabsList.splice($index, 1)
			}
		},
		// 关闭其他tabs
		closeOtherTabs(state, route) {
			state.tabsList = state.tabsList.filter(item => item.fullPath == route.fullPath || item.meta.affix)
		},
		// 关闭全部tabs
		closeAllTabs(state) {
			state.tabsList = resetTabsList(state.tabsList)
		}
	}
}
