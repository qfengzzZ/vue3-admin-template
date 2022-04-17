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
		// 是否展示侧边栏折叠按钮
		showSideCollapse: true,
		// 侧边菜单栏是否默认折起
		menuCollapse: false,
		// 固定tab栏
		tabsFix: true,
		// 显示顶部菜单栏
		headerMenu: true,
		// 是否显示侧边栏
		hideSide: false,
		// 是否置顶顶栏
		headerStick: false,
		// 是否展示刷新按钮
		showReload: true,
		// 是否展示面包屑
		showBreadcrumb: true,
		// 是否展示全屏按钮
		showFullscreen: true
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
