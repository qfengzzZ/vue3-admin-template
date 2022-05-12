/**
 * admin-template 业务配置
 * @type {string}
 */
const env = process.env.VUE_APP_ENV
const Setting = {
	// 路由模式，可选值为 history 或 hash
	routerMode: 'history',
	// 页面切换时，是否显示模拟的进度条
	showProgressBar: true,
	// 接口请求地址
	apiBaseURL: env === 'development' ? '/api' : '/',
	// 接口请求返回错误时，弹窗的持续时间，单位：秒
	modalDuration: 3,
	// 接口请求返回错误时，弹窗的类型，可选值为 Message 或 Notification
	errorModalType: 'Message',
	// cookie到期时间
	cookiesExpires: 1,
	// 布局设置
	layout: {
		// 顶栏风格
		headTheme: 'dark',
		// 侧边栏风格
		sideTheme: 'dark',
		// 是否固定侧边栏
		sideFix: true,
		// 是否固定顶栏
		headerFix: true,
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
