import { frameIn } from '@/router/routes'
export default {
	namespaced: true,
	state: {
		activePath: '',
		breadCrumbList: [],
		menuList: [],
		tabsList: []
	},
	getters: {
		/**
		 * @description 根据 user 里登录用户权限，对侧边菜单进行鉴权过滤
		 */
		filterSide(state) {
			return state.menuList
		}
	},
	mutations: {
		/**
		 * @description 设置侧边菜单
		 * @param {Object} state vuex state
		 * @param {Array} menuSide menuSide
		 * */
		setActivePath(state, activePath) {
			state.activePath = activePath
		},
		setBreadCrumbList(state, breadCrumbList) {
			state.breadCrumbList = breadCrumbList
		},
		setMenuList(state, menuList) {
			state.menuList = menuList
		},
		addTabsList(state, route) {
			const $index = frameIn.findIndex(item => item.path === route)
			if ($index > 0) {
				const isExist = state.tabsList.some(item => item.path === frameIn[$index].path)
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
