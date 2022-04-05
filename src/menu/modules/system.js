// const pre = '/dashboard/'

// const meta = {
// 	activedPath: '/dashboard'
// }

export default {
	path: `/system`,
	title: '系统管理',
	icon: 'el-icon-setting',
	children: [
		{
			path: `/system/userManage`,
			title: '用户管理'
		},
		{
			path: `/system/roleManage`,
			title: '角色管理'
		}
	]
}
