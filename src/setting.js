const Setting = {
	// cookie到期时间
	cookiesExpires: 1,
	// 布局设置
	layout: {
		// 顶栏风格
		headTheme: 'light',
		// 侧边栏风格
		sideTheme: 'light',
		// 是否固定侧边栏
		sideFix: true,
		// 是否固定顶栏
		headerFix: false,
		// 侧边菜单栏是否开启手风琴模式
		menuAccordion: false,
		// 侧边菜单栏是否默认折起
		menuCollapse: false,
		// 是否展示侧边栏折叠按钮
		showSideCollapse: true,
		// 侧边栏菜单是否开启折叠动画
		menuTransition: false,
		// 是否展示tabs页签
		showTabs: true,
		// 固定tab栏
		tabsFix: true,
		// 显示顶部菜单栏
		headerMenu: true,
		// 是否置顶顶栏
		headerStick: false,
		// 是否展示刷新按钮
		showReload: true,
		// 是否展示面包屑
		showBreadcrumb: true,
		// 是否展示全屏按钮
		showFullscreen: true,
		// 是否动态修改布局配置
		enableSetting: true
	},
	// 是否使用动态侧边菜单, 开启：用于后端返回菜单权限，属于后端鉴权，关闭：用于前端根据用户信息中access字段鉴权，属于前端鉴权，并在menu-head中设置
	asyncSideMenu: false
}
export default Setting
