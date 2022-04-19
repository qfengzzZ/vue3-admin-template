/**
 * 用户信息
 * */
export default {
	namespaced: true,
	state: {
		// 用户信息
		info: {}
	},
	mutations: {
		setUserInfo(state, userInfo) {
			state.userInfo = userInfo
		}
	},
	actions: {}
}
