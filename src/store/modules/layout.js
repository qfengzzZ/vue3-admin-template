/**
 *  布局配置
 * */
import Setting from '@/setting'
export default {
	namespaced: true,
	state: {
		...Setting.layout
	},
	mutations: {
		/**
		 * @description 修改 menuCollapse
		 * @param {Object} state vuex state
		 * @param {Boolean} collapse 折叠状态
		 * */
		updateMenuCollapse(state, collapse) {
			state.menuCollapse = collapse
		},
		/**
		 * @description 更改指定布局配置
		 * @param {Object} state vuex state
		 * @param {Object} key layout 名称，对应 Setting.layout
		 * @param {Object} value layout 值
		 * */
		updateLayoutSetting(state, { key, value }) {
			state[key] = value
		}
	}
}
