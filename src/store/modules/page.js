import { frameIn } from '@/router/routes'
export default {
	namespaced: true,
	state: {
		keepAlive: [],
		tabsList: []
	},
	mutations: {
		setKeepAlive(state, keepAlive) {
			state.keepAlive = keepAlive
		},
		addTabsList(state, route) {
			const $index = frameIn.findIndex(item => item.path === route)
			if ($index > 0) {
				let isExist = state.tabsList.some(item => item.path === frameIn[$index].path)
				if (!isExist) {
					state.tabsList.push(frameIn[$index])
				}
			}
		},
		removeTabsItem(state, route) {
			const $index = state.tabsList.findIndex(item => item.path === route.path)
			if ($index > -1) {
				state.tabsList.splice($index, 1)
			}
		}
	}
}
