import { filterMenuByAuth, includeArray } from '@/utils'
export default {
	namespaced: true,
	state: {
		// 当前的路由
		activePath: '',
		// 面包屑菜单
		breadCrumbList: [],
		// 侧边栏的菜单
		menuSide: [],
		// 当前的顶栏名称
		headerName: '',
		// 头部菜单
		menuHead: [],
		// 所有的侧边栏菜单
		menuSideAll: []
	},
	getters: {
		/**
		 * @description 根据 user 里登录用户权限，对侧边菜单进行鉴权过滤
		 */
		filterSide(state, getters, rootState) {
			const userInfo = rootState.user.info
			// @权限
			const access = userInfo.access
			if (access && access.length) {
				return filterMenuByAuth(state.menuSide, access, [])
			} else {
				return filterMenuByAuth(state.menuSide, [], [])
			}
		},
		/**
		 * @description 根据 user 里登录用户权限，对顶栏菜单进行鉴权过滤
		 */
		filterHead(state, getters, rootState) {
			const userInfo = rootState.user.info
			// @权限
			const access = userInfo.access
			if (access && access.length) {
				state.menuHead.filter(item => {
					let state = true
					if (item.auth && !includeArray(item.auth, access)) state = false
					if (item.children && item.children.length) {
						item.children = item.children.filter(child => {
							let state = true
							if (child.auth && !includeArray(child.auth, access)) state = false
							return state
						})
					}
					return state
				})
			} else {
				return state.menuHead.filter(item => {
					let state = true
					if (item.auth && item.auth.length) state = false
					if (item.children && item.children.length) {
						item.children = item.children.filter(child => {
							let state = true
							if (child.auth && child.auth.length) state = false
							return state
						})
					}
					return state
				})
			}
		},
		/**
		 * @description 当前顶栏菜单的全部信息
		 * */
		currentHeader(state) {
			return state.menuHead.find(item => item.name === state.headerName)
		},
		/**
		 * 根据顶栏菜单配置是否显示侧边菜单栏
		 * @param state
		 * @param getters
		 * @returns {boolean}
		 */
		isHideSide(state, getters) {
			let visible = false
			if (getters.currentHeader && 'hideSide' in getters.currentHeader) {
				visible = getters.currentHeader.hideSide
			}
			return visible
		}
	},
	mutations: {
		/**
		 * @description 设置当前路由
		 * @param {Object} state vuex state
		 * @param {String} activePath activePath
		 * */
		setActivePath(state, activePath) {
			state.activePath = activePath
		},

		/**
		 * @description 设置面包屑
		 * @param {Object} state vuex state
		 * @param {Array} breadCrumbList breadCrumbList
		 * */
		setBreadCrumbList(state, breadCrumbList) {
			state.breadCrumbList = breadCrumbList
		},

		/**
		 * @description 设置侧边菜单
		 * @param {Object} state vuex state
		 * @param {Array} menuSide menuSide
		 * */
		setMenuSide(state, menuSide) {
			state.menuSide = menuSide
		},
		/**
		 * @description 设置头部菜单
		 * @param state
		 * @param menuHead
		 */
		setMenuHead(state, menuHead) {
			state.menuHead = menuHead
		},
		/**
		 * @description 设置当前顶栏菜单
		 * @param {Object} state vuex state
		 * @param {String} headerName headerName
		 * */
		setHeaderName(state, headerName) {
			state.headerName = headerName
		},
		/**
		 * @description 设置侧边栏所有的菜单
		 * @param {Object} state vuex state
		 * @param {Array} menu menu
		 * */
		setMenuSideAll(state, menu) {
			state.menuSideAll = menu
		}
	}
}
