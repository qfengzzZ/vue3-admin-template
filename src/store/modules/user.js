/**
 * 用户信息
 * */
export default {
	namespaced: true,
	state: {
		// 用户信息
		userInfo: {}
	},
	mutations: {
		setUserInfo(state, userInfo) {
			state.userInfo = userInfo
		}
	},
	actions: {}
}
