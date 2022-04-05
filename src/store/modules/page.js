export default {
	namespaced: true,
	state: {
		keepAlive: []
	},
	mutations: {
		setKeepAlive(state, keepAlive) {
			state.keepAlive = keepAlive
		}
	}
}
