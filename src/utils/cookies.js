import Setting from '@/setting'
import Cookies from 'js-cookie'

const cookies = {}

/**
 * @description 存储 cookie 值
 * @param {String} name cookie name
 * @param {String} value cookie value
 * @param {Object} cookieOptions cookie setting
 */
cookies.set = function (name = 'default', value = '', cookieOptions = {}) {
	let currentOptions = {
		expires: Setting.cookiesExpires
	}
	Object.assign(currentOptions, cookieOptions)
	Cookies.set(`admin-${name}`, value, currentOptions)
}

/**
 * @description 拿到 cookie 值
 * @param {String} name cookie name
 */
cookies.get = function (name = 'default') {
	return Cookies.get(`admin-${name}`)
}

/**
 * @description 拿到 cookie 全部的值
 */
cookies.getAll = function () {
	return Cookies.get()
}

/**
 * @description 删除 cookie
 * @param {String} name cookie name
 */
cookies.remove = function (name = 'default') {
	return Cookies.remove(`admin-${name}`)
}

export default cookies
