import { cloneDeep } from 'lodash'

/**
 * 通过当前路由获取到顶部菜单栏的name
 * @param currentPath
 * @param menuList
 * @returns {*|null}
 */
function getHeaderNameByPath(currentPath, menuList) {
	const allMenus = []
	menuList.forEach(menu => {
		const headerName = menu.header || ''
		const menus = transferMenuChildren(menu, headerName)
		allMenus.push({
			path: menu.path,
			header: headerName
		})
		menus.forEach(item => allMenus.push(item))
	})
	const currentMenu = allMenus.find(item => item.path === currentPath)
	return currentMenu ? currentMenu.header : null
}

/**
 * 获取当前菜单所有children
 * @param menu
 * @param headerName
 * @returns {({children}|*)[]|*}
 */
function transferMenuChildren(menu, headerName) {
	if (menu.children && menu.children.length) {
		return menu.children.reduce((all, item) => {
			all.push({
				path: item.path,
				header: headerName
			})
			const foundChildren = transferMenuChildren(item, headerName)
			return all.concat(foundChildren)
		}, [])
	} else {
		return [menu]
	}
}

export { getHeaderNameByPath }

function getMenuSideByName(menuList, headerName = '') {
	if (headerName) {
		return menuList.filter(item => item.header === headerName)
	} else {
		return menuList
	}
}

export { getMenuSideByName }

/**
 * @description 判断列表1中是否包含了列表2中的某一项
 * 因为用户权限 access 为数组，Array 的 includes 方法无法直接得出结论
 * */
function includeArray(list1, list2) {
	let status = false
	list2.forEach(item => {
		if (list1.includes(item)) status = true
	})
	return status
}

export { includeArray }

/**
 * 根据用户配置的权限，过滤菜单
 * @param menuList 侧边栏菜单
 * @param access  用户权限数组
 * @param lastList 返回筛选后的菜单
 * @returns {*}
 */
function filterMenuByAuth(menuList, access, lastList) {
	menuList.forEach(menu => {
		let menuAccess = menu.auth
		if (!menuAccess || includeArray(menuAccess, access)) {
			let newMenu = {}
			for (let i in menu) {
				if (i !== 'children') newMenu[i] = cloneDeep(menu[i])
			}
			if (menu.children && menu.children.length) newMenu.children = []

			lastList.push(newMenu)
			menu.children && filterMenuByAuth(menu.children, access, newMenu.children)
		}
	})
	return lastList
}

export { filterMenuByAuth }
