/**
 *  布局配置
 * */

export default {
	namespaced: true,
	state: {
		sideTheme: 'dark',
		// 是否固定顶栏
		headerFix: true,
		// 侧边菜单栏是否开启手风琴模式
		menuAccordion: true,
		// 侧边菜单栏是否默认折起
		menuCollapse: false,
		tabsFix: true
	},
	mutations: {
		/**
		 * @description 修改 menuCollapse
		 * @param {Object} state vuex state
		 * @param {Boolean} collapse 折叠状态
		 * */
		updateMenuCollapse(state, collapse) {
			state.menuCollapse = collapse
		}
	}
}
