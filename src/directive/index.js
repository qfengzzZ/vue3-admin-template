/**
 * @description 鉴权指令
 * 当传入的权限当前用户没有时，会移除该组件
 * 用例：<el-button v-auth="['admin']">text</el-button>
 * */
import store from '@/store'
import { includeArray } from '@/utils'

export default {
	created(el, binding) {
		const { value } = binding
		const access = store.state.user.info.access
		if (value && value instanceof Array && value.length && access && access.length) {
			const isPermission = includeArray(value, access)
			if (!isPermission) {
				el.parentNode && el.parentNode.removeChild(el)
			}
		}
	}
}
