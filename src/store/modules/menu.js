export default {
	namespaced: true,
	state: {
		activePath: '',
		breadCrumbList: [],
		menuList: []
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
		}
	}
}
